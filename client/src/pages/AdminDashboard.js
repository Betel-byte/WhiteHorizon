import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: #333;
`;

const AdminPage = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(2,6,23,0.6), rgba(2,6,23,0.6)),
              url('https://airpano.ru/files/360video/video-northern-lights-norway/images/image4.jpg') center/cover fixed no-repeat;
`;

const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
`;

const AdminTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const LogoutButton = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: rgba(255,255,255,0.15);
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.1s ease;
  margin-left: 12px;
  &:hover { background: rgba(255,255,255,0.25); }
  &:active { transform: translateY(1px); }
`;

const AdminTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? '#667eea' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#667eea' : '#e9ecef'};
  }
`;

const AdminSection = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  margin-bottom: 30px;
  backdrop-filter: blur(6px);
`;

const ErrorBanner = styled.div`
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #fee2e2;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const InfoBanner = styled.div`
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.5);
  color: #dbeafe;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const AdminTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e9ecef;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
  }

  tr:hover {
    background: #f8f9fa;
  }
`;

const AdminButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &.edit {
    background: #28a745;
    color: white;
  }

  &.delete {
    background: #dc3545;
    color: white;
  }

  &.view {
    background: #17a2b8;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Modal = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  min-height: 100px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
`;

const UploadSection = styled.div`
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  margin: 20px 0;
`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('articles');
  const [articles, setArticles] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  const handleLogout = () => {
    try {
      localStorage.removeItem('admin_auth');
      localStorage.removeItem('admin_auth_expires');
      localStorage.removeItem('admin_user');
    } catch {}
    navigate('/admin/login', { replace: true });
  };

  // Admin API configuration
  const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';
  const ADMIN_TOKEN = 'admin-token-2024'; // In production, use proper auth

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  // Dashboard route is removed from router; keep guard in case it's accessed directly
  useEffect(() => {
    const isAdmin = localStorage.getItem('admin_auth') === 'true';
    if (!isAdmin) {
      window.location.href = '/admin/login';
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      if (activeTab === 'articles') {
        await fetchArticles();
      } else if (activeTab === 'uploads') {
        await fetchUploads();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/admin/articles`, {
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch articles');
      const data = await response.json();
      const server = Array.isArray(data) ? data : [];
      // Merge server with locally stored drafts
      let local = [];
      try { local = JSON.parse(localStorage.getItem('admin_articles') || '[]'); } catch {}
      const serverIds = new Set(server.map(a => a.id));
      const merged = [...server, ...local.filter(a => !serverIds.has(a.id))];
      setArticles(merged);
      try { localStorage.setItem('admin_articles', JSON.stringify(merged)); } catch {}
    } catch (e) {
      // Fallback to local cache
      try {
        const cached = JSON.parse(localStorage.getItem('admin_articles') || '[]');
        setArticles(cached);
        setError(cached.length ? '' : e.message);
      } catch {
        setError(e.message);
      }
    }
  };

  const fetchUploads = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/admin/uploads`, {
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`
        }
      });
      if (!response.ok) throw new Error('Failed to fetch uploads');
      const data = await response.json();
      const server = Array.isArray(data) ? data : [];
      let local = [];
      try { local = JSON.parse(localStorage.getItem('uploads') || '[]'); } catch {}
      const serverNames = new Set(server.map(f => f.filename));
      const merged = [...server, ...local.filter(f => !serverNames.has(f.filename))];
      setUploads(merged);
      try { localStorage.setItem('uploads', JSON.stringify(merged)); } catch {}
    } catch (e) {
      try {
        const cached = JSON.parse(localStorage.getItem('uploads') || '[]');
        setUploads(cached);
        setError(cached.length ? '' : e.message);
      } catch {
        setError(e.message);
      }
    }
  };

  const handleCreateArticle = () => {
    setEditingArticle(null);
    setShowModal(true);
  };

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setShowModal(true);
  };

  const handleDeleteArticle = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const response = await fetch(`${API_BASE}/api/admin/articles/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${ADMIN_TOKEN}`
          }
        });
        if (!response.ok) throw new Error('Failed to delete article');
        fetchArticles();
        // Remove from local cache as well
        try {
          const cached = JSON.parse(localStorage.getItem('admin_articles') || '[]');
          localStorage.setItem('admin_articles', JSON.stringify(cached.filter(a => a.id !== id)));
        } catch {}
      } catch (err) {
        // Fallback: delete locally
        try {
          const cached = JSON.parse(localStorage.getItem('admin_articles') || '[]');
          const updated = cached.filter(a => a.id !== id);
          localStorage.setItem('admin_articles', JSON.stringify(updated));
          setArticles(updated);
        } catch {}
      }
    }
  };

  const handleUploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${API_BASE}/api/admin/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`
        },
        body: formData
      });
      if (!response.ok) throw new Error('Failed to upload image');
      const data = await response.json();
      // Sync with local cache
      try {
        const cached = JSON.parse(localStorage.getItem('uploads') || '[]');
        const entry = { filename: data.filename || file.name, size: file.size, url: data.url };
        localStorage.setItem('uploads', JSON.stringify([entry, ...cached]));
      } catch {}
      return data.url;
    } catch (err) {
      // Fallback: store locally as data URL
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          try {
            const cached = JSON.parse(localStorage.getItem('uploads') || '[]');
            const entry = { filename: file.name, size: file.size, url: dataUrl };
            localStorage.setItem('uploads', JSON.stringify([entry, ...cached]));
            setUploads([entry, ...cached]);
          } catch {}
          resolve(dataUrl);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDeleteUpload = async (filename) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      try {
        const response = await fetch(`${API_BASE}/api/admin/uploads/${filename}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${ADMIN_TOKEN}`
          }
        });
        if (!response.ok) throw new Error('Failed to delete file');
        fetchUploads();
        // Remove from local cache
        try {
          const cached = JSON.parse(localStorage.getItem('uploads') || '[]');
          localStorage.setItem('uploads', JSON.stringify(cached.filter(f => f.filename !== filename)));
        } catch {}
      } catch (err) {
        // Fallback: delete locally
        try {
          const cached = JSON.parse(localStorage.getItem('uploads') || '[]');
          const updated = cached.filter(f => f.filename !== filename);
          localStorage.setItem('uploads', JSON.stringify(updated));
          setUploads(updated);
        } catch {}
      }
    }
  };

  const ArticleForm = ({ article, onSave }) => {
    const [formData, setFormData] = useState({
      title: { en: '', no: '', de: '', ar: '' },
      content: { en: '', no: '', de: '', ar: '' },
      category: 'general',
      tags: '',
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      featured: false,
      status: 'draft',
      image: '',
      ...article
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const method = article ? 'PUT' : 'POST';
        const url = article 
          ? `${API_BASE}/api/admin/articles/${article.id}`
          : `${API_BASE}/api/admin/articles`;

        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ADMIN_TOKEN}`
          },
          body: JSON.stringify({
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
          })
        });

        if (!response.ok) throw new Error('Failed to save article');
        
        onSave();
        setShowModal(false);
        fetchArticles();
      } catch (err) {
        // Fallback: save to local storage
        try {
          const cached = JSON.parse(localStorage.getItem('admin_articles') || '[]');
          if (article) {
            const updated = cached.map(a => a.id === article.id ? { ...a, ...formData, tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean) } : a);
            localStorage.setItem('admin_articles', JSON.stringify(updated));
            setArticles(updated);
          } else {
            const newArticle = {
              id: Date.now(),
              ...formData,
              tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
            };
            localStorage.setItem('admin_articles', JSON.stringify([newArticle, ...cached]));
            setArticles([newArticle, ...cached]);
          }
          setShowModal(false);
        } catch (e2) {
          setError(err.message);
        }
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>English Title</FormLabel>
          <FormInput
            type="text"
            value={formData.title.en}
            onChange={(e) => setFormData({...formData, title: {...formData.title, en: e.target.value}})}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>English Content</FormLabel>
          <FormTextarea
            value={formData.content.en}
            onChange={(e) => setFormData({...formData, content: {...formData.content, en: e.target.value}})}
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Category</FormLabel>
          <FormSelect
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="general">General</option>
            <option value="photography">Photography</option>
            <option value="travel">Travel</option>
            <option value="wildlife">Wildlife</option>
            <option value="tips">Tips</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <FormLabel>Tags (comma-separated)</FormLabel>
          <FormInput
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({...formData, tags: e.target.value})}
            placeholder="northern-lights, photography, tips"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Image URL</FormLabel>
          <FormInput
            type="text"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            placeholder="/uploads/your-image.jpg"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Status</FormLabel>
          <FormSelect
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </FormSelect>
        </FormGroup>

        <FormGroup>
          <label>
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({...formData, featured: e.target.checked})}
            />
            Featured Article
          </label>
        </FormGroup>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <AdminButton type="submit" className="edit">
            {article ? 'Update' : 'Add'}
          </AdminButton>
          <AdminButton type="button" className="delete" onClick={() => setShowModal(false)}>
            Cancel
          </AdminButton>
        </div>
      </form>
    );
  };

  const UploadSection = () => {
    const [uploading, setUploading] = useState(false);

    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      setUploading(true);
      try {
        await handleUploadImage(file);
        fetchUploads();
      } catch (err) {
        setError(err.message);
      } finally {
        setUploading(false);
      }
    };

    return (
      <AdminSection>
        <h2>Upload New Image</h2>
        <UploadSection>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
          />
          {uploading && <p>Uploading...</p>}
        </UploadSection>

        <h3>Uploaded Files</h3>
        <AdminTable>
          <thead>
            <tr>
              <th>Preview</th>
              <th>Filename</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploads.map(file => (
              <tr key={file.filename}>
                <td>
                  <img 
                    src={`${API_BASE}${file.url}`} 
                    alt={file.filename}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{file.filename}</td>
                <td>{Math.round(file.size / 1024)}KB</td>
                <td>
                  <AdminButton 
                    className="delete"
                    onClick={() => handleDeleteUpload(file.filename)}
                  >
                    Delete
                  </AdminButton>
                </td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </AdminSection>
    );
  };

  return (
    <AdminPage>
      <AdminContainer>
        {error && <ErrorBanner>Warning: {error}. Showing cached data if available.</ErrorBanner>}
        {loading && <InfoBanner>Loading admin dashboard...</InfoBanner>}
        <AdminHeader>
          <AdminTitle>Admin Dashboard</AdminTitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <small>Authenticated as Administrator</small>
            <LogoutButton onClick={handleLogout} aria-label="Log out">Logout</LogoutButton>
          </div>
        </AdminHeader>

      <AdminTabs>
        <TabButton 
          active={activeTab === 'articles'} 
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </TabButton>
        <TabButton 
          active={activeTab === 'uploads'} 
          onClick={() => setActiveTab('uploads')}
        >
          File Uploads
        </TabButton>
      </AdminTabs>

      {activeTab === 'articles' && (
        <AdminSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Article Management</h2>
            <AdminButton className="edit" onClick={handleCreateArticle}>
              Add
            </AdminButton>
          </div>

          <AdminTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={article.id}>
                  <td>{article.id}</td>
                  <td>{article.title?.en || 'No title'}</td>
                  <td>{article.category}</td>
                  <td>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      background: article.status === 'published' ? '#28a745' : '#ffc107',
                      color: 'white',
                      fontSize: '12px'
                    }}>
                      {article.status}
                    </span>
                  </td>
                  <td>{article.featured ? 'Yes' : 'No'}</td>
                  <td>
                    <AdminButton className="edit" onClick={() => handleEditArticle(article)}>
                      Edit
                    </AdminButton>
                    <AdminButton className="delete" onClick={() => handleDeleteArticle(article.id)}>
                      Delete
                    </AdminButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </AdminTable>
        </AdminSection>
      )}

      {activeTab === 'uploads' && <UploadSection />}

      <Modal show={showModal}>
        <ModalContent>
          <h2>{editingArticle ? 'Edit Article' : 'Create New Article'}</h2>
          <ArticleForm 
            article={editingArticle} 
            onSave={() => {}} 
          />
        </ModalContent>
      </Modal>
      </AdminContainer>
    </AdminPage>
  );
};

export default AdminDashboard;