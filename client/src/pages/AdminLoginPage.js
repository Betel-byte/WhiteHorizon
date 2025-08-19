import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(2,6,23,0.7), rgba(2,6,23,0.6)),
              url('https://airpano.ru/files/360video/video-northern-lights-norway/images/image4.jpg') center/cover no-repeat fixed;
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  padding: 28px 24px;
  color: #fff;
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 1.8rem;
  text-align: center;
`;

const Field = styled.div`
  margin-bottom: 14px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
`;

const LogoutBar = styled.div`
  position: fixed;
  top: 12px;
  right: 12px;
`;
const SmallLogout = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled.div`
  color: #fecaca;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  padding: 10px 12px;
  border-radius: 10px;
  margin: 10px 0;
`;

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // No access code required
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // Simple hardcoded check; replace with real auth when backend is ready
    const allowedUsername = 'WhiteHorizon';
    const allowedPass = 'Whweb123';
    const uname = username.trim();
    const isValid = uname.toLowerCase() === allowedUsername.toLowerCase() && password === allowedPass;
    if (isValid) {
      localStorage.setItem('admin_auth', 'true');
      localStorage.setItem('admin_auth_expires', String(Date.now() + 8 * 60 * 60 * 1000));
      localStorage.setItem('admin_user', username.trim());
      navigate('/admin/contact');
    } else {
      setError('Invalid credentials or access code');
    }
  };

  return (
    <Wrapper>
      {typeof window !== 'undefined' && localStorage.getItem('admin_auth') === 'true' && (
        <LogoutBar>
          <SmallLogout onClick={() => { localStorage.clear(); window.location.reload(); }}>Logout</SmallLogout>
        </LogoutBar>
      )}
      <Card>
        <Title>Admin Login</Title>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit}>
          <Field>
            <Label>Username</Label>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Field>
          {/* Access code removed */}
          <Button type="submit">Login</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AdminLoginPage;


