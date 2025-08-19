# Amazing Arctic - React & Node.js Travel Website

A luxury travel website built with React frontend and Node.js backend, featuring multilingual support (English, Norwegian, German, Arabic) and full booking functionality.

## 🚀 Features

### Frontend (React)
- **Modern React Architecture** with functional components and hooks
- **Multilingual Support** (English, Norwegian, German, Arabic)
- **Responsive Design** with mobile-first approach
- **Interactive Gallery** with masonry layout and lightbox
- **Dynamic Trip Details** with tabbed interface
- **Real-time Booking System** with form validation
- **SEO Optimized** with React Helmet
- **Performance Optimized** with code splitting and lazy loading

### Backend (Node.js)
- **RESTful API** with Express.js
- **Email Integration** with Nodemailer
- **Security Features** (Helmet, CORS, Rate Limiting)
- **Database Ready** (MongoDB integration prepared)
- **Payment Processing** (Stripe integration prepared)
- **Environment Configuration** with dotenv

### Multilingual Features
- **4 Languages**: English, Norwegian (Norsk), German (Deutsch), Arabic (العربية)
- **RTL Support** for Arabic
- **Dynamic Content Translation**
- **Date/Number Formatting**
- **SEO-friendly URLs**

## 📁 Project Structure

```
amazing-arctic/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── BookingPage.js
│   │   │   ├── HomePage.js
│   │   │   ├── TripDetailPage.js
│   │   │   ├── GalleryPage.js
│   │   │   ├── Navigation.js
│   │   │   ├── Footer.js
│   │   │   └── LanguageSwitcher.js
│   │   ├── App.js          # Main App component
│   │   ├── i18n.js         # Internationalization setup
│   │   └── index.js        # React entry point
│   └── package.json
├── server.js               # Express server
├── .env                    # Environment variables
└── package.json            # Backend dependencies
```

## 🛠️ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repository-url>
cd amazing-arctic

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@amazingarctic.com

# Database (for future use)
MONGODB_URI=mongodb://localhost:27017/amazing-arctic

# Payment (Stripe)
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
STRIPE_SECRET_KEY=sk_test_your_stripe_key

# Security
JWT_SECRET=your-jwt-secret
SESSION_SECRET=your-session-secret
```

### 3. Start Development Servers

```bash
# Start backend server (from root directory)
npm run dev

# Start frontend server (in new terminal)
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🌍 Language Configuration

### Adding New Languages

1. **Add language to i18n.js**:
```javascript
// client/src/i18n.js
resources: {
  en: { /* existing */ },
  no: { /* existing */ },
  de: { /* existing */ },
  ar: { /* existing */ },
  fr: { /* new language */ }
}
```

2. **Update LanguageSwitcher.js**:
```javascript
const languages = [
  // existing languages
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];
```

3. **Add translations** in the translation files

### RTL Support

The application automatically handles RTL (Right-to-Left) for Arabic. For additional RTL languages, the system will automatically adjust text direction.

## 📱 Available Pages

- **Home Page**: `/` - Hero section, featured trips
- **Trip Details**: `/trip/:id` - Detailed trip information with booking
- **Gallery**: `/gallery` - Immersive photo gallery
- **Booking**: `/booking/:tripId` - Booking form with validation
- **Contact**: `/contact` - Contact form

## 🎯 Booking System

### Features
- **Real-time availability**
- **Multi-step booking form**
- **Email notifications**
- **Booking confirmation**
- **Admin notifications**

### Booking Flow
1. User selects trip and date
2. Fills booking form with personal details
3. Receives email confirmation
4. Admin receives notification
5. Booking confirmed via email

## 🔧 API Endpoints

### Trips
- `GET /api/trips` - Get all trips
- `GET /api/trips/:id` - Get specific trip

### Bookings
- `POST /api/bookings` - Create new booking

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter

### Contact
- `POST /api/contact` - Send contact message

## 🎨 Customization

### Styling
The project uses styled-components for CSS-in-JS styling. Customize colors and themes in:
- `client/src/components/*` - Component styles
- Global styles can be added to `client/src/App.js`

### Images
Replace images in:
- `client/public/images/` - Static images
- Update image URLs in trip data (backend)

### Content
Update content in:
- `client/src/i18n.js` - Translation files
- Backend trip data in `server.js`

## 🚀 Production Deployment

### Build for Production

```bash
# Build frontend
cd client
npm run build

# Start production server
cd ..
npm run start
```

### Deployment Options

#### 1. Heroku
```bash
# Install Heroku CLI
heroku create amazing-arctic

# Deploy
git add .
git commit -m "Initial deployment"
git push heroku main
```

#### 2. Netlify (Frontend)
```bash
# Build and deploy to Netlify
cd client
npm run build
netlify deploy --prod --dir=build
```

#### 3. DigitalOcean
Follow the DigitalOcean App Platform guide for Node.js applications.

## 🔍 SEO & Performance

### SEO Features
- Meta tags for all pages
- Open Graph tags
- Structured data
- Sitemap generation
- Robots.txt

### Performance Optimizations
- Code splitting
- Image optimization
- Lazy loading
- Caching strategies
- CDN integration ready

## 🧪 Testing

### Run Tests
```bash
# Frontend tests
cd client
npm test

# Backend tests
npm test
```

### Manual Testing
1. Test all language switches
2. Test booking flow end-to-end
3. Test responsive design
4. Test email notifications

## 📊 Analytics

### Google Analytics
Add your tracking ID to:
- `client/src/App.js` for React Router integration
- `client/public/index.html` for global tracking

### Custom Events
Track user interactions:
- Trip views
- Booking attempts
- Language changes
- Gallery interactions

## 🔐 Security

### Implemented Security Features
- Input validation
- Rate limiting
- CORS protection
- Helmet security headers
- Email sanitization

### Security Checklist
- [ ] Update default credentials
- [ ] Configure HTTPS
- [ ] Set up SSL certificates
- [ ] Regular dependency updates
- [ ] Security headers configuration

## 📞 Support

### Getting Help
- Check the [Issues](issues) tab for known problems
- Review [Discussions](discussions) for community help
- Contact support@amazingarctic.com for business inquiries

### Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React community for amazing tools
- i18next team for internationalization
- Styled-components team for CSS-in-JS
- Unsplash for beautiful Arctic images
- All contributors and testers

---

**Built with ❤️ for Arctic Adventures**