const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// In-memory storage (replace with database in production)
let trips = [];
let destinations = [];
let journalPosts = [];
let testimonials = [];
let siteSettings = {
    siteTitle: { en: 'Arctic Travel' },
    contactEmail: 'info@arctictravel.com',
    phone: '+47 123 456 789',
    address: { en: 'Longyearbyen, Svalbard, Norway' }
};

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Admin authentication middleware
const authenticateAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }
    
    // Simple token validation (replace with JWT in production)
    if (token === 'admin-token-123') {
        next();
    } else {
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

// Dashboard Stats
router.get('/admin/stats', authenticateAdmin, (req, res) => {
    res.json({
        success: true,
        totalTrips: trips.length,
        totalDestinations: destinations.length,
        totalJournalPosts: journalPosts.length,
        totalTestimonials: testimonials.length
    });
});

// Trips CRUD
router.get('/admin/trips', authenticateAdmin, (req, res) => {
    res.json({ success: true, data: trips });
});

router.get('/admin/trips/:id', authenticateAdmin, (req, res) => {
    const trip = trips.find(t => t.id === req.params.id);
    if (!trip) {
        return res.status(404).json({ success: false, message: 'Trip not found' });
    }
    res.json({ success: true, data: trip });
});

router.post('/admin/trips', authenticateAdmin, upload.fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'gallery', maxCount: 10 }
]), (req, res) => {
    try {
        const newTrip = {
            id: Date.now().toString(),
            title: {
                en: req.body.titleEn || '',
                no: req.body.titleNo || '',
                de: req.body.titleDe || '',
                ar: req.body.titleAr || ''
            },
            summary: {
                en: req.body.summaryEn || '',
                no: req.body.summaryNo || '',
                de: req.body.summaryDe || '',
                ar: req.body.summaryAr || ''
            },
            overview: {
                en: req.body.overviewEn || '',
                no: req.body.overviewNo || '',
                de: req.body.overviewDe || '',
                ar: req.body.overviewAr || ''
            },
            included: {
                en: req.body.includedEn || '',
                no: req.body.includedNo || '',
                de: req.body.includedDe || '',
                ar: req.body.includedAr || ''
            },
            price: parseInt(req.body.price) || 0,
            duration: req.body.duration || '',
            maxGroupSize: parseInt(req.body.maxGroupSize) || 10,
            difficulty: req.body.difficulty || 'moderate',
            isFeatured: req.body.isFeatured === 'true',
            destinations: req.body.destinations ? JSON.parse(req.body.destinations) : [],
            featuredImage: req.files.featuredImage ? req.files.featuredImage[0].filename : null,
            gallery: req.files.gallery ? req.files.gallery.map(file => file.filename) : [],
            itinerary: req.body.itinerary ? JSON.parse(req.body.itinerary) : [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        trips.push(newTrip);
        res.json({ success: true, data: newTrip });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.put('/admin/trips/:id', authenticateAdmin, upload.fields([
    { name: 'featuredImage', maxCount: 1 },
    { name: 'gallery', maxCount: 10 }
]), (req, res) => {
    try {
        const tripIndex = trips.findIndex(t => t.id === req.params.id);
        if (tripIndex === -1) {
            return res.status(404).json({ success: false, message: 'Trip not found' });
        }

        const existingTrip = trips[tripIndex];
        const updatedTrip = {
            ...existingTrip,
            title: {
                en: req.body.titleEn || existingTrip.title.en,
                no: req.body.titleNo || existingTrip.title.no,
                de: req.body.titleDe || existingTrip.title.de,
                ar: req.body.titleAr || existingTrip.title.ar
            },
            summary: {
                en: req.body.summaryEn || existingTrip.summary.en,
                no: req.body.summaryNo || existingTrip.summary.no,
                de: req.body.summaryDe || existingTrip.summary.de,
                ar: req.body.summaryAr || existingTrip.summary.ar
            },
            overview: {
                en: req.body.overviewEn || existingTrip.overview.en,
                no: req.body.overviewNo || existingTrip.overview.no,
                de: req.body.overviewDe || existingTrip.overview.de,
                ar: req.body.overviewAr || existingTrip.overview.ar
            },
            included: {
                en: req.body.includedEn || existingTrip.included.en,
                no: req.body.includedNo || existingTrip.included.no,
                de: req.body.includedDe || existingTrip.included.de,
                ar: req.body.includedAr || existingTrip.included.ar
            },
            price: parseInt(req.body.price) || existingTrip.price,
            duration: req.body.duration || existingTrip.duration,
            maxGroupSize: parseInt(req.body.maxGroupSize) || existingTrip.maxGroupSize,
            difficulty: req.body.difficulty || existingTrip.difficulty,
            isFeatured: req.body.isFeatured === 'true',
            destinations: req.body.destinations ? JSON.parse(req.body.destinations) : existingTrip.destinations,
            featuredImage: req.files.featuredImage ? req.files.featuredImage[0].filename : existingTrip.featuredImage,
            gallery: req.files.gallery ? [...existingTrip.gallery, ...req.files.gallery.map(file => file.filename)] : existingTrip.gallery,
            itinerary: req.body.itinerary ? JSON.parse(req.body.itinerary) : existingTrip.itinerary,
            updatedAt: new Date().toISOString()
        };

        trips[tripIndex] = updatedTrip;
        res.json({ success: true, data: updatedTrip });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.delete('/admin/trips/:id', authenticateAdmin, (req, res) => {
    const tripIndex = trips.findIndex(t => t.id === req.params.id);
    if (tripIndex === -1) {
        return res.status(404).json({ success: false, message: 'Trip not found' });
    }

    trips.splice(tripIndex, 1);
    res.json({ success: true, message: 'Trip deleted successfully' });
});

// Destinations CRUD
router.get('/admin/destinations', authenticateAdmin, (req, res) => {
    res.json({ success: true, data: destinations });
});

router.get('/admin/destinations/:id', authenticateAdmin, (req, res) => {
    const destination = destinations.find(d => d.id === req.params.id);
    if (!destination) {
        return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.json({ success: true, data: destination });
});

router.post('/admin/destinations', authenticateAdmin, upload.single('heroImage'), (req, res) => {
    try {
        const newDestination = {
            id: Date.now().toString(),
            name: {
                en: req.body.nameEn || '',
                no: req.body.nameNo || '',
                de: req.body.nameDe || '',
                ar: req.body.nameAr || ''
            },
            description: {
                en: req.body.descriptionEn || '',
                no: req.body.descriptionNo || '',
                de: req.body.descriptionDe || '',
                ar: req.body.descriptionAr || ''
            },
            location: {
                country: req.body.country || '',
                region: req.body.region || ''
            },
            bestTimeToVisit: req.body.bestTime || '',
            heroImage: req.file ? req.file.filename : null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        destinations.push(newDestination);
        res.json({ success: true, data: newDestination });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.put('/admin/destinations/:id', authenticateAdmin, upload.single('heroImage'), (req, res) => {
    try {
        const destinationIndex = destinations.findIndex(d => d.id === req.params.id);
        if (destinationIndex === -1) {
            return res.status(404).json({ success: false, message: 'Destination not found' });
        }

        const existingDestination = destinations[destinationIndex];
        const updatedDestination = {
            ...existingDestination,
            name: {
                en: req.body.nameEn || existingDestination.name.en,
                no: req.body.nameNo || existingDestination.name.no,
                de: req.body.nameDe || existingDestination.name.de,
                ar: req.body.nameAr || existingDestination.name.ar
            },
            description: {
                en: req.body.descriptionEn || existingDestination.description.en,
                no: req.body.descriptionNo || existingDestination.description.no,
                de: req.body.descriptionDe || existingDestination.description.de,
                ar: req.body.descriptionAr || existingDestination.description.ar
            },
            location: {
                country: req.body.country || existingDestination.location.country,
                region: req.body.region || existingDestination.location.region
            },
            bestTimeToVisit: req.body.bestTime || existingDestination.bestTimeToVisit,
            heroImage: req.file ? req.file.filename : existingDestination.heroImage,
            updatedAt: new Date().toISOString()
        };

        destinations[destinationIndex] = updatedDestination;
        res.json({ success: true, data: updatedDestination });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.delete('/admin/destinations/:id', authenticateAdmin, (req, res) => {
    const destinationIndex = destinations.findIndex(d => d.id === req.params.id);
    if (destinationIndex === -1) {
        return res.status(404).json({ success: false, message: 'Destination not found' });
    }

    destinations.splice(destinationIndex, 1);
    res.json({ success: true, message: 'Destination deleted successfully' });
});

// Journal Posts CRUD
router.get('/admin/journal-posts', authenticateAdmin, (req, res) => {
    res.json({ success: true, data: journalPosts });
});

router.get('/admin/journal-posts/:id', authenticateAdmin, (req, res) => {
    const post = journalPosts.find(p => p.id === req.params.id);
    if (!post) {
        return res.status(404).json({ success: false, message: 'Journal post not found' });
    }
    res.json({ success: true, data: post });
});

router.post('/admin/journal-posts', authenticateAdmin, upload.single('featuredImage'), (req, res) => {
    try {
        const newPost = {
            id: Date.now().toString(),
            title: {
                en: req.body.titleEn || '',
                no: req.body.titleNo || '',
                de: req.body.titleDe || '',
                ar: req.body.titleAr || ''
            },
            excerpt: {
                en: req.body.excerptEn || '',
                no: req.body.excerptNo || '',
                de: req.body.excerptDe || '',
                ar: req.body.excerptAr || ''
            },
            body: {
                en: req.body.bodyEn || '',
                no: req.body.bodyNo || '',
                de: req.body.bodyDe || '',
                ar: req.body.bodyAr || ''
            },
            author: req.body.author || '',
            publishedAt: req.body.publishedAt || new Date().toISOString(),
            featuredImage: req.file ? req.file.filename : null,
            featured: req.body.featured === 'true',
            tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        journalPosts.push(newPost);
        res.json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.put('/admin/journal-posts/:id', authenticateAdmin, upload.single('featuredImage'), (req, res) => {
    try {
        const postIndex = journalPosts.findIndex(p => p.id === req.params.id);
        if (postIndex === -1) {
            return res.status(404).json({ success: false, message: 'Journal post not found' });
        }

        const existingPost = journalPosts[postIndex];
        const updatedPost = {
            ...existingPost,
            title: {
                en: req.body.titleEn || existingPost.title.en,
                no: req.body.titleNo || existingPost.title.no,
                de: req.body.titleDe || existingPost.title.de,
                ar: req.body.titleAr || existingPost.title.ar
            },
            excerpt: {
                en: req.body.excerptEn || existingPost.excerpt.en,
                no: req.body.excerptNo || existingPost.excerpt.no,
                de: req.body.excerptDe || existingPost.excerpt.de,
                ar: req.body.excerptAr || existingPost.excerpt.ar
            },
            body: {
                en: req.body.bodyEn || existingPost.body.en,
                no: req.body.bodyNo || existingPost.body.no,
                de: req.body.bodyDe || existingPost.body.de,
                ar: req.body.bodyAr || existingPost.body.ar
            },
            author: req.body.author || existingPost.author,
            publishedAt: req.body.publishedAt || existingPost.publishedAt,
            featuredImage: req.file ? req.file.filename : existingPost.featuredImage,
            featured: req.body.featured === 'true',
            tags: req.body.tags ? req.body.tags.split(',').map(tag => tag.trim()) : existingPost.tags,
            updatedAt: new Date().toISOString()
        };

        journalPosts[postIndex] = updatedPost;
        res.json({ success: true, data: updatedPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.delete('/admin/journal-posts/:id', authenticateAdmin, (req, res) => {
    const postIndex = journalPosts.findIndex(p => p.id === req.params.id);
    if (postIndex === -1) {
        return res.status(404).json({ success: false, message: 'Journal post not found' });
    }

    journalPosts.splice(postIndex, 1);
    res.json({ success: true, message: 'Journal post deleted successfully' });
});

// Testimonials CRUD
router.get('/admin/testimonials', authenticateAdmin, (req, res) => {
    res.json({ success: true, data: testimonials });
});

router.get('/admin/testimonials/:id', authenticateAdmin, (req, res) => {
    const testimonial = testimonials.find(t => t.id === req.params.id);
    if (!testimonial) {
        return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.json({ success: true, data: testimonial });
});

router.post('/admin/testimonials', authenticateAdmin, upload.single('authorImage'), (req, res) => {
    try {
        const newTestimonial = {
            id: Date.now().toString(),
            authorName: req.body.authorName || '',
            quote: {
                en: req.body.quoteEn || '',
                no: req.body.quoteNo || '',
                de: req.body.quoteDe || '',
                ar: req.body.quoteAr || ''
            },
            rating: parseInt(req.body.rating) || 5,
            date: req.body.date || new Date().toISOString().split('T')[0],
            authorImage: req.file ? req.file.filename : null,
            relatedTrip: req.body.relatedTrip || null,
            approved: req.body.approved === 'true',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        testimonials.push(newTestimonial);
        res.json({ success: true, data: newTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.put('/admin/testimonials/:id', authenticateAdmin, upload.single('authorImage'), (req, res) => {
    try {
        const testimonialIndex = testimonials.findIndex(t => t.id === req.params.id);
        if (testimonialIndex === -1) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }

        const existingTestimonial = testimonials[testimonialIndex];
        const updatedTestimonial = {
            ...existingTestimonial,
            authorName: req.body.authorName || existingTestimonial.authorName,
            quote: {
                en: req.body.quoteEn || existingTestimonial.quote.en,
                no: req.body.quoteNo || existingTestimonial.quote.no,
                de: req.body.quoteDe || existingTestimonial.quote.de,
                ar: req.body.quoteAr || existingTestimonial.quote.ar
            },
            rating: parseInt(req.body.rating) || existingTestimonial.rating,
            date: req.body.date || existingTestimonial.date,
            authorImage: req.file ? req.file.filename : existingTestimonial.authorImage,
            relatedTrip: req.body.relatedTrip || existingTestimonial.relatedTrip,
            approved: req.body.approved === 'true',
            updatedAt: new Date().toISOString()
        };

        testimonials[testimonialIndex] = updatedTestimonial;
        res.json({ success: true, data: updatedTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.delete('/admin/testimonials/:id', authenticateAdmin, (req, res) => {
    const testimonialIndex = testimonials.findIndex(t => t.id === req.params.id);
    if (testimonialIndex === -1) {
        return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    testimonials.splice(testimonialIndex, 1);
    res.json({ success: true, message: 'Testimonial deleted successfully' });
});

// Site Settings
router.get('/admin/site-settings', authenticateAdmin, (req, res) => {
    res.json({ success: true, data: siteSettings });
});

router.put('/admin/site-settings', authenticateAdmin, upload.single('logo'), (req, res) => {
    try {
        siteSettings = {
            ...siteSettings,
            siteTitle: {
                en: req.body.siteTitleEn || siteSettings.siteTitle.en,
                no: req.body.siteTitleNo || siteSettings.siteTitle.no,
                de: req.body.siteTitleDe || siteSettings.siteTitle.de,
                ar: req.body.siteTitleAr || siteSettings.siteTitle.ar
            },
            contactEmail: req.body.contactEmail || siteSettings.contactEmail,
            phone: req.body.phone || siteSettings.phone,
            address: {
                en: req.body.addressEn || siteSettings.address.en,
                no: req.body.addressNo || siteSettings.address.no,
                de: req.body.addressDe || siteSettings.address.de,
                ar: req.body.addressAr || siteSettings.address.ar
            },
            logo: req.file ? req.file.filename : siteSettings.logo,
            updatedAt: new Date().toISOString()
        };

        res.json({ success: true, data: siteSettings });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Admin Login
router.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    
    // Simple authentication (replace with proper auth in production)
    if (username === 'admin' && password === 'password123') {
        res.json({ success: true, token: 'admin-token-123' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Public API endpoints (no auth required)
router.get('/api/trips', (req, res) => {
    const featured = req.query.featured === 'true';
    let filteredTrips = trips;
    
    if (featured) {
        filteredTrips = trips.filter(trip => trip.isFeatured);
    }
    
    res.json({ success: true, data: filteredTrips });
});

router.get('/api/trips/:id', (req, res) => {
    const trip = trips.find(t => t.id === req.params.id);
    if (!trip) {
        return res.status(404).json({ success: false, message: 'Trip not found' });
    }
    res.json({ success: true, data: trip });
});

router.get('/api/destinations', (req, res) => {
    res.json({ success: true, data: destinations });
});

router.get('/api/destinations/:id', (req, res) => {
    const destination = destinations.find(d => d.id === req.params.id);
    if (!destination) {
        return res.status(404).json({ success: false, message: 'Destination not found' });
    }
    res.json({ success: true, data: destination });
});

router.get('/api/journal-posts', (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const sortedPosts = journalPosts
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, limit);
    
    res.json({ success: true, data: sortedPosts });
});

router.get('/api/journal-posts/:id', (req, res) => {
    const post = journalPosts.find(p => p.id === req.params.id);
    if (!post) {
        return res.status(404).json({ success: false, message: 'Journal post not found' });
    }
    res.json({ success: true, data: post });
});

router.get('/api/testimonials', (req, res) => {
    const approvedTestimonials = testimonials.filter(t => t.approved);
    res.json({ success: true, data: approvedTestimonials });
});

router.get('/api/site-settings', (req, res) => {
    res.json({ success: true, data: siteSettings });
});

module.exports = router;