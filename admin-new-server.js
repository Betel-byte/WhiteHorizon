const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.ADMIN_PORT || 8002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from admin-new directory
app.use(express.static(path.join(__dirname, 'admin-new')));

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
app.get('/api/admin/check-auth', (req, res) => {
  res.json({ authenticated: true });
});

app.post('/api/admin/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({ 
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

app.get('/api/admin/content', (req, res) => {
  res.json({ 
    trips: [],
    articles: [],
    gallery: []
  });
});

app.post('/api/admin/content', (req, res) => {
  res.json({ success: true, message: 'Content updated' });
});

app.delete('/api/admin/content/:type/:id', (req, res) => {
  res.json({ success: true, message: 'Content deleted' });
});

// Serve admin panel
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-new', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Admin server running on port ${PORT}`);
});