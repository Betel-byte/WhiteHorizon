# Arctic Travel Admin CMS

A comprehensive content management system for Arctic Travel websites, built with Express.js and featuring multilingual support for English, Norwegian, German, and Arabic.

## 🚀 Features

### Content Types
- **Trips**: Complete trip management with pricing, duration, destinations, and detailed itineraries
- **Destinations**: Arctic destinations with rich descriptions and location details
- **Journal Posts**: Blog-style posts for travel stories and updates
- **Testimonials**: Customer reviews and feedback
- **Site Settings**: Global site configuration and branding

### Multilingual Support
- English (EN)
- Norwegian (NO)
- German (DE)
- Arabic (AR)

### Key Features
- 🖼️ Image upload and gallery management
- 📊 Real-time dashboard statistics
- 🔍 Advanced filtering and search
- 📱 Responsive admin interface
- 🔒 Secure authentication
- 📈 Content analytics
- 🎯 Featured content management

## 🏗️ Architecture

### Server Structure
```
admin-new/
├── index.html          # Main admin interface
├── routes.js          # API routes and business logic
├── test-data.js       # Sample data generator
└── README.md          # This documentation

admin-new-server.js    # Express server configuration
```

### Content Schema

#### Trip Schema
```javascript
{
  id: String,
  title: { en, no, de, ar },
  summary: { en, no, de, ar },
  overview: { en, no, de, ar },
  included: { en, no, de, ar },
  price: Number,
  duration: String,
  maxGroupSize: Number,
  difficulty: String,
  isFeatured: Boolean,
  destinations: [String],
  featuredImage: String,
  gallery: [String],
  itinerary: [{
    dayNumber: Number,
    dayTitle: { en, no, de, ar },
    dayDescription: { en, no, de, ar }
  }]
}
```

#### Destination Schema
```javascript
{
  id: String,
  name: { en, no, de, ar },
  description: { en, no, de, ar },
  location: {
    country: String,
    region: String
  },
  bestTimeToVisit: String,
  heroImage: String
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Express.js and dependencies (see package.json)

### Installation
1. Install dependencies:
```bash
npm install
```

2. Start the admin server:
```bash
npm run admin
```

3. Access the admin interface:
```
http://localhost:3002/admin
```

### Default Login
- **Username**: admin
- **Password**: password123

### Load Test Data
To populate initial sample content:
```bash
node admin-new/test-data.js
```

## 🎯 Usage Guide

### Dashboard Overview
- **Total Trips**: Count of all trips
- **Total Destinations**: Count of all destinations
- **Total Journal Posts**: Count of all blog posts
- **Total Testimonials**: Count of all reviews

### Managing Content

#### Trips
1. Click "Trips" tab
2. Use "Add New Trip" to create trips
3. Fill in all required fields:
   - Title (all languages)
   - Price and duration
   - Featured image
   - Destinations
   - Detailed itinerary
4. Mark as "Featured" for homepage display

#### Destinations
1. Click "Destinations" tab
2. Use "Add New Destination" to create destinations
3. Include:
   - Name in all languages
   - Description and location details
   - Hero image
   - Best time to visit

#### Journal Posts
1. Click "Journal" tab
2. Use "Add New Post" to create content
3. Include:
   - Title and content in all languages
   - Author and publication date
   - Featured image
   - Tags for categorization

#### Testimonials
1. Click "Testimonials" tab
2. Use "Add New Testimonial" to add reviews
3. Include:
   - Author name and quote
   - Rating (1-5 stars)
   - Related trip (optional)
   - Approval status

#### Site Settings
1. Click "Site Settings" tab
2. Configure:
   - Site title in all languages
   - Contact information
   - Logo and branding
   - Global settings

## 🔧 API Endpoints

### Admin Endpoints (Require Authentication)
```
GET    /api/admin/stats           - Dashboard statistics
GET    /api/admin/trips           - List all trips
POST   /api/admin/trips           - Create new trip
PUT    /api/admin/trips/:id       - Update trip
DELETE /api/admin/trips/:id       - Delete trip

GET    /api/admin/destinations    - List all destinations
POST   /api/admin/destinations    - Create new destination
PUT    /api/admin/destinations/:id - Update destination
DELETE /api/admin/destinations/:id - Delete destination

GET    /api/admin/journal-posts   - List all journal posts
POST   /api/admin/journal-posts   - Create new post
PUT    /api/admin/journal-posts/:id - Update post
DELETE /api/admin/journal-posts/:id - Delete post

GET    /api/admin/testimonials    - List all testimonials
POST   /api/admin/testimonials    - Create new testimonial
PUT    /api/admin/testimonials/:id - Update testimonial
DELETE /api/admin/testimonials/:id - Delete testimonial

GET    /api/admin/site-settings   - Get site settings
PUT    /api/admin/site-settings   - Update site settings
```

### Public API Endpoints
```
GET /api/trips              - List trips (featured filter available)
GET /api/trips/:id          - Get specific trip
GET /api/destinations       - List destinations
GET /api/destinations/:id   - Get specific destination
GET /api/journal-posts      - List journal posts (limited)
GET /api/journal-posts/:id  - Get specific post
GET /api/testimonials       - List approved testimonials
GET /api/site-settings      - Get public site settings
```

## 🎨 Frontend Integration

### React Integration Example
```javascript
// Fetch featured trips for homepage
const fetchFeaturedTrips = async () => {
  const response = await fetch('/api/trips?featured=true');
  const data = await response.json();
  return data.data;
};

// Fetch latest journal posts
const fetchLatestPosts = async () => {
  const response = await fetch('/api/journal-posts?limit=3');
  const data = await response.json();
  return data.data;
};
```

### Next.js Integration
```javascript
// pages/index.js
export async function getStaticProps() {
  const [tripsRes, postsRes, settingsRes] = await Promise.all([
    fetch('http://localhost:3002/api/trips?featured=true'),
    fetch('http://localhost:3002/api/journal-posts?limit=3'),
    fetch('http://localhost:3002/api/site-settings')
  ]);

  const [trips, posts, settings] = await Promise.all([
    tripsRes.json(),
    postsRes.json(),
    settingsRes.json()
  ]);

  return {
    props: {
      featuredTrips: trips.data,
      latestPosts: posts.data,
      siteSettings: settings.data
    },
    revalidate: 3600 // Revalidate every hour
  };
}
```

## 🔒 Security Features

### Content Security Policy (CSP)
- Configured for secure content delivery
- Allows trusted sources only
- Prevents XSS attacks

### Rate Limiting
- 100 requests per 15 minutes per IP
- Prevents abuse and DDoS attacks

### Authentication
- Bearer token authentication
- Secure session management
- Admin-only access to management endpoints

## 📸 Image Management

### Upload Configuration
- Supports JPG, PNG, WebP formats
- Automatic file naming with timestamps
- Organized storage in `/uploads` directory
- Maximum file size: 10MB

### Image Optimization
- Use Sharp for automatic optimization
- Multiple sizes for responsive images
- WebP format support
- Progressive JPEG loading

## 🌐 Multilingual Support

### Language Detection
- Automatic language detection
- Fallback to English
- RTL support for Arabic

### Translation Workflow
- Separate fields for each language
- Easy content management
- Consistent structure across languages

## 🚀 Performance Optimization

### Caching Strategy
- Static asset caching
- API response caching
- CDN integration ready

### Database Optimization
- Indexed queries
- Efficient data structures
- Pagination support

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### Manual Testing
1. Use test data generator
2. Test all CRUD operations
3. Verify multilingual content
4. Check image uploads
5. Test responsive design

## 🛠️ Development

### Adding New Content Types
1. Update schema in `routes.js`
2. Add UI components in `index.html`
3. Create API endpoints
4. Add validation rules
5. Update test data

### Customization
- Modify CSS variables for branding
- Add new fields to content types
- Implement custom validation
- Add new language support

## 📞 Support

For technical support or questions:
- Check the GitHub issues
- Review API documentation
- Test with sample data
- Contact development team

## 📄 License

MIT License - see LICENSE file for details.