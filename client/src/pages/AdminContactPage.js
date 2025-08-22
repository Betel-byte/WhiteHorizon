import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Navigate } from 'react-router-dom';
import { proxyImage } from '../utils/imageProxy';

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(2,6,23,0.6), rgba(2,6,23,0.6)),
              url('${proxyImage("https://airpano.ru/files/360video/video-northern-lights-norway/images/image4.jpg")}') center/cover fixed no-repeat;
  padding: 60px 0 40px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 12px;
  box-shadow: 0 6px 28px rgba(30, 64, 175, 0.12);
  padding: 2.5rem 2rem;
  backdrop-filter: blur(6px);
`;
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;
const Th = styled.th`
  background: #f1f5f9;
  color: #1e293b;
  padding: 0.75rem;
  border-bottom: 1px solid #cbd5e1;
`;
const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  vertical-align: top;
`;
const Button = styled.button`
  background: #dc2626;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.45rem 0.8rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.9; }
`;
const Error = styled.div`
  color: #dc2626;
  margin-bottom: 1rem;
`;
const Success = styled.div`
  color: #16a34a;
  margin-bottom: 1rem;
`;

const LogoutButton = styled.button`
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;

const API = (process.env.REACT_APP_API_URL || 'http://localhost:3001') + '/api/admin/contact';

const AdminContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      if (res.ok) {
        const data = await res.json();
        const normalized = (Array.isArray(data) ? data : []).map((c) => ({
          id: c.id ?? c._id ?? Date.now(),
          name: c.name ?? '',
          email: c.email ?? '',
          message: c.message ?? '',
          address: c.address ?? ''
        }));
        let cached = [];
        try { cached = JSON.parse(localStorage.getItem('contacts') || '[]'); } catch {}
        const serverIds = new Set(normalized.map(c => c.id));
        const merged = [...normalized];
        cached.forEach(c => { if (!serverIds.has(c.id)) merged.push(c); });
        setContacts(merged);
        try { localStorage.setItem('contacts', JSON.stringify(merged)); } catch {}
      } else {
        throw new Error('Server returned error');
      }
    } catch (err) {
      try {
        const cached = JSON.parse(localStorage.getItem('contacts') || '[]');
        setContacts(cached);
        setError(cached.length ? '' : 'Failed to fetch contacts');
      } catch {
        setError('Failed to fetch contacts');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchContacts(); }, []);
  useEffect(() => {
    const isAdmin = localStorage.getItem('admin_auth') === 'true';
    if (!isAdmin) navigate('/admin/login', { replace: true });
  }, [navigate]);

  // Immediate guard for direct navigation before effects run
  // Check expiry and purge if invalid
  const exp = Number(localStorage.getItem('admin_auth_expires') || 0);
  const authed = localStorage.getItem('admin_auth') === 'true' && (!exp || Date.now() < exp);
  if (!authed && typeof window !== 'undefined') {
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('admin_auth_expires');
    localStorage.removeItem('admin_user');
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    try {
      localStorage.removeItem('admin_auth');
      localStorage.removeItem('admin_auth_expires');
      localStorage.removeItem('admin_user');
    } catch {}
    navigate('/admin/login', { replace: true });
  };

  const handleDelete = async (id) => {
    setError(''); setSuccess('');
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      // Refresh and update local cache
      const next = contacts.filter(c => c.id !== id);
      setContacts(next);
      try { localStorage.setItem('contacts', JSON.stringify(next)); } catch {}
      setSuccess('Deleted successfully');
    } catch (err) {
      // Fallback delete locally
      try {
        const cached = JSON.parse(localStorage.getItem('contacts') || '[]');
        const updated = cached.filter(c => c.id !== id);
        localStorage.setItem('contacts', JSON.stringify(updated));
        setContacts(updated);
        setSuccess('Deleted locally (server unreachable)');
      } catch {
        setError('Delete failed');
      }
    }
  };

  return (
    <Page>
      <Container>
      <HeaderBar>
        <h2 style={{ color: '#1e40af', margin: 0 }}>Contact Submissions (Admin)</h2>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </HeaderBar>
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}
      {loading ? <div>Loading...</div> : (
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Message</Th>
              <Th>Address</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <Td>{c.name}</Td>
                <Td>{c.email}</Td>
                <Td>{c.message}</Td>
                <Td>{c.address || '—'}</Td>
                <Td>
                  <Button onClick={() => handleDelete(c.id)}>Delete</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </Container>
    </Page>
  );
};

export default AdminContactPage;









