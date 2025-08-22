const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Handle missing environment variables gracefully
const emailUser = process.env.EMAIL_USER || 'demo@example.com';
const emailPass = process.env.EMAIL_PASS || 'demo-password';
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(cors({
  origin: frontendUrl,
  credentials: true
}));
app.use(compression());
// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Image proxy endpoint to handle CORS issues
app.get('/api/image-proxy', async (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) {
    return res.status(400).send('Image URL is required');
  }
  
  try {
    const response = await axios({
      method: 'get',
      url: imageUrl,
      responseType: 'arraybuffer'
    });
    
    const contentType = response.headers['content-type'];
    res.setHeader('Content-Type', contentType);
    res.send(response.data);
  } catch (error) {
    console.error('Error proxying image:', error.message);
    res.status(500).send('Error fetching image');
  }
});

// API endpoint to get all images from external URLs only
app.get('/api/gallery-images', (req, res) => {
  try {
    // Function to convert external URLs to proxied URLs
    const proxyUrl = (url) => `/api/image-proxy?url=${encodeURIComponent(url)}`;
    
    // External image URLs provided by the user
    const externalImageUrls = [
      // Polar Bears (Wildlife)
      {
        url: 'https://www.nhm.ac.uk/content/dam/nhmwww/discover/polar-bears-arctic/polar-bear-cubs-mother-full-width.jpg.thumb.1160.1160.jpg',
        category: 'wildlife',
        title: 'Polar Bears',
        location: 'Svalbard, Norway'
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIsN4eUBaBAkP5egCe2tgjlYP2XMIocEv1g&s',
        category: 'wildlife',
        title: 'Arctic Wildlife',
        location: 'Northern Norway'
      },
      {
        url: 'https://images.ctfassets.net/i04syw39vv9p/P2HB6UphMXmp0T94GI5UE/be4f451b3b98d0bf164f36a8385c771c/Jon_Aars_P4070086_Edited.jpg?w=1200&h=800&q=70&fit=fill&fm=jpg',
        category: 'wildlife',
        title: 'Polar Bear on Ice',
        location: 'Arctic Norway'
      },
      {
        url: 'https://cdn11.bigcommerce.com/s-o3ewkiqyx3/images/stencil/1280x1280/products/1741/3732/cd19877-polar-bear-cubs-cute-valentines-day-card__51742.1656196027.jpg?c=1',
        category: 'wildlife',
        title: 'Polar Bear Cubs',
        location: 'Svalbard, Norway'
      },
      {
        url: 'https://bloximages.newyork1.vip.townnews.com/valpotorch.com/content/tncms/assets/v3/editorial/3/4b/34b39260-c783-11ec-9097-f3d860fdf9c7/626b82e91b1c1.image.jpg?resize=400%2C252',
        category: 'wildlife',
        title: 'Arctic Wildlife',
        location: 'Norwegian Wildlife Reserve'
      },
      {
        url: 'https://www.campervannorway.com/assets/img/blog/458.png',
        category: 'wildlife',
        title: 'Norwegian Wildlife',
        location: 'Northern Norway'
      },
      {
        url: 'https://www.campervannorway.com/assets/img/blog/458/shutterstock_1627829611-compressed.jpg',
        category: 'wildlife',
        title: 'Arctic Animals',
        location: 'Arctic Norway'
      },
      {
        url: 'https://images.squarespace-cdn.com/content/v1/5e2755963c421657bd408970/22e29626-f8fe-4ab7-8f1d-c5c1af3a6bde/Reindeer.jpg',
        category: 'wildlife',
        title: 'Norwegian Reindeer',
        location: 'Norwegian Wildlife Reserve'
      },
      {
        url: 'https://www.muchbetteradventures.com/magazine/content/images/2022/10/arctic-fox-norway-wildlife.jpg',
        category: 'wildlife',
        title: 'Arctic Fox',
        location: 'Svalbard, Norway'
      },
      {
        url: 'https://images.ctfassets.net/7mmwp5vb96tc/114194/c87e638a6e8355aaa27ae82a0cd8a453/kirkenes-norway-hgr-154540_1920-photo_getty_images.jpg',
        category: 'wildlife',
        title: 'Norwegian Wildlife',
        location: 'Kirkenes, Norway'
      },
      {
        url: 'https://a-z-animals.com/media/2021/04/Muskox-close-up-1024x535.jpg',
        category: 'wildlife',
        title: 'Muskox',
        location: 'Northern Norway'
      },
      {
        url: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/814e020d96b50cc940cd713abaf3e15724abb989/big-55bb56566dd4fac09e0f1927e9196e7f.jpg',
        category: 'wildlife',
        title: 'Arctic Wildlife',
        location: 'Arctic Norway'
      },
      {
        url: 'https://www.thonhotels.com/globalassets/hoteller/norge/otta/thon-hotel-otta/aktiviteter/thon-hotel-otta-glittersja-fjellgard.jpg?quality=80&format=webp&width=1312&height=738',
        category: 'wildlife',
        title: 'Norwegian Animals',
        location: 'Norwegian Wildlife Reserve'
      },
      {
        url: 'https://images.squarespace-cdn.com/content/v1/5e2755963c421657bd408970/b9e025c6-7d99-4179-b7f8-4ba4eb03a299/Arctic+fox.jpg',
        category: 'wildlife',
        title: 'Arctic Fox in Snow',
        location: 'Svalbard, Norway'
      },
      {
        url: 'https://thumbs.dreamstime.com/b/wild-animal-norway-reindeer-rangifer-tarandus-massive-antlers-green-grass-blue-sky-svalbard-wildlife-scene-173213721.jpg',
        category: 'wildlife',
        title: 'Reindeer with Antlers',
        location: 'Svalbard, Norway'
      },
      
      // Northern Lights (Aurora)
      {
        url: 'https://www.qantas.com/content/travelinsider/en/travel-tips/how-to-see-the-northern-lights/jcr:content/parsysTop/hero.img.full.medium.jpg/1587980552111.jpg',
        category: 'aurora',
        title: 'Northern Lights Display',
        location: 'Tromsø, Norway'
      },
      {
        url: 'https://res.cloudinary.com/icelandtours/g_auto,f_auto,c_auto,w_3840,q_auto:good/northern_lights_iceland_person_with_torch_jonatan_pie_unsplash_a3402caa84.jpg',
        category: 'aurora',
        title: 'Aurora Borealis',
        location: 'Northern Norway'
      },
      {
        url: 'https://www.muchbetteradventures.com/magazine/content/images/2023/12/GettyImages-538653565--1-.jpg',
        category: 'aurora',
        title: 'Green Aurora Arc',
        location: 'Arctic Circle'
      },
      {
        url: 'https://cms.finnair.com/resource/blob/3240210/d8532512ae8eccae0288561defb18063/finnair-lapland-aurora-sky-woodpecker2-data.jpg?impolicy=crop&width=1362&height=1362&x=1319&y=0',
        category: 'aurora',
        title: 'Aurora over Mountains',
        location: 'Finnmark, Norway'
      },
      {
        url: 'https://static.euronews.com/articles/stories/06/30/96/92/1200x675_cmsv2_12641906-5d98-51ac-98ea-596c4817d4d8-6309692.jpg',
        category: 'aurora',
        title: 'Dancing Lights',
        location: 'Svalbard, Norway'
      },
      {
        url: 'https://media.cntraveler.com/photos/67cb142a5d227df863450e65/master/w_2560%2Cc_limit/1278376286',
        category: 'aurora',
        title: 'Aurora Reflection',
        location: 'Norwegian Fjords'
      },
      {
        url: 'https://akm-img-a-in.tosshub.com/sites/rd/resources/202303/image9495_150323122720_1200x675.jpg?size=684:384',
        category: 'aurora',
        title: 'Aurora Stream',
        location: 'Tromsø, Norway'
      },
      {
        url: 'https://www.wanderingowl.com/wp-content/uploads/2020/04/blog_images_photo_northern_lights_norway.jpg',
        category: 'aurora',
        title: 'Northern Lights Over Mountains',
        location: 'Lofoten, Norway'
      },
      {
        url: 'https://www.muchbetteradventures.com/magazine/content/images/2019/07/12102929/iStock-992710110.jpg',
        category: 'aurora',
        title: 'Aurora Night Sky',
        location: 'Northern Norway'
      },
      {
        url: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/91f73b325868f65a810731f7277b731a553db51f/big-1e3cac6bb208d30558f1623b379e121a.jpg',
        category: 'aurora',
        title: 'Green Aurora Display',
        location: 'Arctic Circle'
      },
      {
        url: 'https://www.muchbetteradventures.com/magazine/content/images/2019/07/12105605/Northern-lights-tromso-istock-MuYeeTing-1600x1068.jpg',
        category: 'aurora',
        title: 'Aurora Over Water',
        location: 'Tromsø, Norway'
      },
      {
        url: 'https://img.freepik.com/premium-photo/aurora-borealis-norway-green-northern-lights-mountains-night-winter-landscape-with-aurora-natural-phenomenon-background-norway_647656-946.jpg',
        category: 'aurora',
        title: 'Green Northern Lights',
        location: 'Norwegian Mountains'
      },
      {
        url: 'https://cdn.kinnso.ai/laravel/posts/20241218-norway/content/1734660131_lofoten_islands_aurora_norway.jpg',
        category: 'aurora',
        title: 'Lofoten Aurora',
        location: 'Lofoten Islands, Norway'
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi9rtDOTwknuHwzMCT24aeQdODhrs1BIL2w&s',
        category: 'aurora',
        title: 'Aurora Borealis Display',
        location: 'Northern Norway'
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLbVBoa0DgGxDrDKo0svoGc7oqTCb_GpuYg&s',
        category: 'aurora',
        title: 'Northern Lights Spectacle',
        location: 'Arctic Circle'
      },
      
      // Landscapes
      {
        url: 'https://cdn.sanity.io/images/4aans0in/production/32039bab25ce273c470b10b6ea827efbd7c8577e-2000x1333.jpg?rect=0,105,2000,1125&w=3840&h=2160&fm=webp&q=100&fit=max&auto=format',
        category: 'landscapes',
        title: 'Norwegian Fjord',
        location: 'Western Norway'
      },
      {
        url: 'https://media.cntraveler.com/photos/57966ab10513807b76499bc7/1:1/w_1536,h_1536,c_limit/GettyImages-163687915-norway-fjord2.jpg',
        category: 'landscapes',
        title: 'Fjord View',
        location: 'Sognefjord, Norway'
      },
      {
        url: 'https://www.luxurylifestylemag.co.uk/wp-content/uploads/2022/03/bigstock-Fjord-Geirangerfjord-With-Ferr-443583074.jpg',
        category: 'landscapes',
        title: 'Geirangerfjord',
        location: 'Western Norway'
      },
      {
        url: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/ef2478ff92ae6e44c5942c44804f66f368a304bb/big-e776d95afa14db3a202829fbbe3560ab.jpg',
        category: 'landscapes',
        title: 'Mountain Vista',
        location: 'Norwegian Highlands'
      },
      {
        url: 'https://www.hollandamerica.com/content/hal/global/en/cruise-destinations/norway-cruises/norway-travel-tips-and-articles/norway-fjords/_jcr_content/root/container/hero_419763475/image.coreimg.100.1280.jpeg/1702500881221/tips-lg-fjord-norway.jpeg',
        category: 'landscapes',
        title: 'Fjord Landscape',
        location: 'Norwegian Fjords'
      },
      {
        url: 'https://www.adventureworld.com/media/e1ic1wl2/norway-flam.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=1200&quality=80',
        category: 'landscapes',
        title: 'Flam Railway',
        location: 'Flam, Norway'
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_S8Qf4Afu936PZLWHTpVTDsgTgE-T7SUNw&s',
        category: 'landscapes',
        title: 'Norwegian Landscape',
        location: 'Western Norway'
      },
      {
        url: 'https://images.squarespace-cdn.com/content/v1/6455d3d82007782c081fad44/1691866239045-5VECRU9TF1ZV9YHIU6S8/image-asset.jpeg',
        category: 'landscapes',
        title: 'Norwegian Scenery',
        location: 'Norwegian Highlands'
      },
      
      // Icebergs
      {
        url: 'https://www.shutterstock.com/image-photo/icebergs-floating-sea-above-arctic-260nw-2482385663.jpg',
        category: 'icebergs',
        title: 'Arctic Icebergs',
        location: 'Arctic Waters'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Glacier_svartisen_engabreen.JPG/1200px-Glacier_svartisen_engabreen.JPG',
        category: 'icebergs',
        title: 'Svartisen Glacier',
        location: 'Norwegian Arctic'
      },
      {
        url: 'https://www.mediastorehouse.com/p/467/norway-svalbard-hornsund-iceberg-clear-water-12623387.jpg.webp',
        category: 'icebergs',
        title: 'Svalbard Iceberg',
        location: 'Svalbard'
      },
      {
        url: 'https://media.istockphoto.com/id/1179753622/photo/aurora-borealis-lofoten-islands-norway-mountains-and-frozen-ocean-winter-landscape-in-the.jpg?s=612x612&w=0&k=20&c=3c1JEvikuiEa_g7nZVhouwgcLjp67micF9EuLomT8As=',
        category: 'icebergs',
        title: 'Frozen Arctic Ocean',
        location: 'Lofoten Islands'
      },
      {
        url: 'https://thumbs.dreamstime.com/b/deep-blue-glacier-snowcapped-mountains-arctic-svalbard-norway-deep-blue-glacier-snowcapped-mountains-albert-i-land-arctic-221798200.jpg',
        category: 'icebergs',
        title: 'Deep Blue Glacier',
        location: 'Svalbard, Norway'
      }
    ];
    
    // Create gallery images from external URLs only
    const externalImages = externalImageUrls.map((image, index) => {
      return {
        id: index + 1,
        src: proxyUrl(image.url),
        title: image.title,
        location: image.location,
        category: image.category
      };
    });
    
    // Add more external images to replace local ones
    const additionalExternalImages = [
      // Landscapes
      {
        id: externalImages.length + 1,
        src: proxyUrl('https://www.fjordtours.com/media/1541/fjord-tours-norway-in-a-nutshell-classic-sognefjord-flam-valley-summer.jpg'),
        title: 'Norwegian Fjords',
        location: 'Sognefjord, Norway',
        category: 'landscapes'
      },
      {
        id: externalImages.length + 2,
        src: proxyUrl('https://www.muchbetteradventures.com/magazine/content/images/2022/10/Shutterstock_1563149851.jpg'),
        title: 'Lofoten Islands',
        location: 'Lofoten, Norway',
        category: 'landscapes'
      },
      {
        id: externalImages.length + 3,
        src: proxyUrl('https://www.fjordtravel.no/wp-content/uploads/2018/10/geiranger-fjord-norway-1024x683.jpg'),
        title: 'Geiranger Fjord',
        location: 'Western Norway',
        category: 'landscapes'
      },
      {
        id: externalImages.length + 4,
        src: proxyUrl('https://www.visitnorway.com/dbimgs/preikestolen-fjord-cruise-pulpit-rock-norway-fjords.jpg'),
        title: 'Pulpit Rock',
        location: 'Lysefjord, Norway',
        category: 'landscapes'
      },
      // Expeditions
      {
        id: externalImages.length + 5,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/inspirational/svalbard_zodiac_cruise_passenger_photo_dominic-barrington.jpg'),
        title: 'Zodiac Expedition',
        location: 'Svalbard, Norway',
        category: 'expeditions'
      },
      {
        id: externalImages.length + 6,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/ships/ms-spitsbergen/svalbard_ms-spitsbergen_photo_andrea-klaussner.jpg'),
        title: 'Arctic Expedition Ship',
        location: 'Arctic Norway',
        category: 'expeditions'
      },
      {
        id: externalImages.length + 7,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/excursions/svalbard_hiking_photo_genna-roland.jpg'),
        title: 'Arctic Hiking',
        location: 'Svalbard, Norway',
        category: 'expeditions'
      },
      {
        id: externalImages.length + 8,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/excursions/svalbard_dog-sledding_photo_agurtxane-concellon.jpg'),
        title: 'Dog Sledding',
        location: 'Arctic Norway',
        category: 'expeditions'
      },
      // Additional Landscapes
      {
        id: externalImages.length + 9,
        src: proxyUrl('https://www.fjordtours.com/media/1541/fjord-tours-norway-in-a-nutshell-classic-sognefjord-flam-valley-summer.jpg'),
        title: 'Norwegian Fjords',
        location: 'Sognefjord, Norway',
        category: 'landscapes'
      },
      {
        id: externalImages.length + 10,
        src: proxyUrl('https://www.muchbetteradventures.com/magazine/content/images/2022/10/Shutterstock_1563149851.jpg'),
        title: 'Lofoten Islands',
        location: 'Lofoten, Norway',
        category: 'landscapes'
      },
      {
        id: externalImages.length + 11,
        src: proxyUrl('https://www.fjordtravel.no/wp-content/uploads/2018/10/geiranger-fjord-norway-1024x683.jpg'),
        title: 'Geiranger Fjord',
        location: 'Western Norway',
        category: 'landscapes'
      },
      {
        id: externalImages.length + 12,
        src: proxyUrl('https://www.visitnorway.com/dbimgs/preikestolen-fjord-cruise-pulpit-rock-norway-fjords.jpg'),
        title: 'Pulpit Rock',
        location: 'Lysefjord, Norway',
        category: 'landscapes'
      },
      // Additional Expeditions
      {
        id: externalImages.length + 13,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/inspirational/svalbard_zodiac_cruise_passenger_photo_dominic-barrington.jpg'),
        title: 'Zodiac Expedition',
        location: 'Svalbard, Norway',
        category: 'expeditions'
      },
      {
        id: externalImages.length + 14,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/ships/ms-spitsbergen/svalbard_ms-spitsbergen_photo_andrea-klaussner.jpg'),
        title: 'Arctic Expedition Ship',
        location: 'Arctic Norway',
        category: 'expeditions'
      },
      {
        id: externalImages.length + 15,
        src: proxyUrl('https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/excursions/svalbard_hiking_photo_genna-roland.jpg'),
        title: 'Arctic Hiking',
        location: 'Svalbard, Norway',
        category: 'expeditions'
      },
      {
        id: externalImages.length + 8,
        src: 'https://www.hurtigruten.com/globalassets/photos/destinations/svalbard/excursions/svalbard_dog-sledding_photo_agurtxane-concellon.jpg',
        title: 'Dog Sledding',
        location: 'Arctic Norway',
        category: 'expeditions'
      }
    ];
    
    // Combine all external images
    const allImages = [...externalImages, ...additionalExternalImages];
    
    res.json(allImages);
  } catch (error) {
    console.error('Error reading uploads directory:', error);
    res.status(500).json({ error: 'Failed to retrieve gallery images' });
  }
});

// Serve static files (CSS, JS, images)
app.use(express.static(__dirname));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  trustProxy: false // Disable the trust of the X-Forwarded-For header
});
app.use('/api/', limiter);

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// File upload setup
// Upload configuration will be defined later

// In-memory storage for demo
let contacts = [];
let idCounter = 1;

// Email configuration - only initialize if credentials are provided
let transporter = null;
if (emailUser && emailUser !== 'demo@example.com' && emailPass && emailPass !== 'demo-password') {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : smtpPort === 465;

    const transportOptions = smtpHost
      ? {
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: emailUser,
            pass: emailPass
          }
        }
      : {
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass
          }
        };

    transporter = nodemailer.createTransport(transportOptions);
    console.log('Email transporter configured successfully');
  } catch (error) {
    console.warn('Email configuration failed:', error.message);
  }
} else {
  console.log('Email service not configured - using demo mode');
}

// Articles database
let articles = [
  {
    id: 1,
    title: {
      en: "Northern Lights Photography Tips",
      no: "Tips til nordlysfotografering",
      de: "Tipps zur Nordlichtfotografie",
      ar: "نصائح تصوير الشفق الشمالي"
    },
    content: {
      en: "Learn the best techniques for capturing the magical Northern Lights...",
      no: "Lær de beste teknikkene for å fange det magiske nordlyset...",
      de: "Lernen Sie die besten Techniken, um das magische Nordlicht einzufangen...",
      ar: "تعلم أفضل التقنيات لالتقاط الشفق الشمالي الساحر..."
    },
    image: "https://www.wanderingowl.com/wp-content/uploads/2020/04/blog_images_photo_northern_lights_norway.jpg",
    category: "photography",
    tags: ["northern-lights", "photography", "tips"],
    author: "Arctic Expert",
    date: "2024-01-15",
    featured: true,
    status: "published"
  }
];

// Mock database
const trips = [
  {
    id: 1,
    title: {
      en: "Realm of the Polar Bear",
      no: "Isbjørnens rike",
      de: "Reich der Eisbären",
      ar: "مملكة الدببة القطبية"
    },
    description: {
      en: "An 8-day expedition cruise around Svalbard, offering unparalleled opportunities to observe polar bears in their natural habitat.",
      no: "En 8-dagers ekspedisjonscruise rundt Svalbard, med enestående muligheter til å observere isbjørner i sitt naturlige miljø.",
      de: "Eine 8-tägige Expeditionskreuzfahrt rund um Spitzbergen mit unvergleichlichen Möglichkeiten, Eisbären in ihrer natürlichen Umgebung zu beobachten.",
      ar: "رحلة استكشافية لمدة 8 أيام حول سفالبارد، تقدم فرصًا لا مثيل لها لمراقبة الدببة القطبية في بيئتها الطبيعية."
    },
    price: 3999,
    duration: 8,
    maxGroup: 12,
    minGroup: 4,
    difficulty: "Moderate",
    season: "May - September",
    location: {
      en: "Svalbard, Norway",
      no: "Svalbard, Norge",
      de: "Spitzbergen, Norwegen",
      ar: "سفالبارد، النرويج"
    },
    image: "https://images.unsplash.com/photo-1579033385971-1d7c8f2e8c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1579033385971-1d7c8f2e8c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579033385971-1d7c8f2e8c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    overview: {
      en: "This expedition cruise takes you deep into the Arctic wilderness of Svalbard, where you'll have the chance to observe polar bears, walruses, and other Arctic wildlife in their natural habitat. The journey includes zodiac boat excursions, guided nature walks, and educational lectures by expert naturalists.",
      no: "Denne ekspedisjonscruisen tar deg dypt inn i Arktis villmark på Svalbard, hvor du får sjansen til å observere isbjørner, hvalrosser og andre arktiske dyr i sitt naturlige miljø. Reisen inkluderer zodiac-båtutflukter, guidet naturstier og pedagogiske forelesninger av ekspert naturforskere.",
      de: "Diese Expeditionskreuzfahrt führt Sie tief in die arktische Wildnis Spitzbergens, wo Sie die Möglichkeit haben, Eisbären, Walrosse und andere arktische Tiere in ihrer natürlichen Umgebung zu beobachten. Die Reise umfasst Zodiac-Bootsausflüge, geführte Naturwanderungen und Bildungsvorträge durch Experten-Naturforscher.",
      ar: "تأخذك هذه الرحلة الاستكشافية إلى عمق البرية القطبية في سفالبارد، حيث ستتمكن من مراقبة الدببة القطبية، عجول البحر وغيرها من الحياة البرية القطبية في بيئتها الطبيعية. تشمل الرحلة رحلات الزوارق المطاطية، المشي في الطبيعة بمرشدين، ومحاضرات تعليمية من خبراء طبيعيين."
    },
    highlights: {
      en: [
        "Daily polar bear sightings",
        "Zodiac boat excursions",
        "Expert naturalist guides",
        "Small group experience",
        "Educational lectures"
      ],
      no: [
        "Daglige isbjørnsyn",
        "Zodiac-båtutflukter",
        "Ekspert naturforsker guider",
        "Liten gruppeopplevelse",
        "Pedagogiske forelesninger"
      ],
      de: [
        "Tägliche Eisbärenbeobachtungen",
        "Zodiac-Bootsausflüge",
        "Expertige Naturforscherführer",
        "Kleine Gruppenerfahrung",
        "Bildungsvorträge"
      ],
      ar: [
        "مشاهدات يومية للدببة القطبية",
        "رحلات الزوارق المطاطية",
        "مرشدون خبراء طبيعيون",
        "تجربة مجموعة صغيرة",
        "محاضرات تعليمية"
      ]
    },
    itinerary: {
      en: [
        { day: 1, title: "Arrival in Longyearbyen", description: "Arrive in Longyearbyen, the world's northernmost settlement. Transfer to your expedition vessel.", activities: ["Embarkation", "Safety briefing", "Welcome dinner"] },
        { day: 2, title: "Northwest Spitsbergen National Park", description: "Explore the pristine wilderness of Northwest Spitsbergen National Park, home to polar bears and Arctic foxes.", activities: ["Zodiac cruise", "Wildlife watching", "Photography"] },
        { day: 3, title: "Liefdefjorden", description: "Navigate through Liefdefjorden, keeping watch for polar bears and seals on the pack ice.", activities: ["Ice navigation", "Wildlife tracking", "Lecture"] },
        { day: 4, title: "Monaco Glacier", description: "Visit Monaco Glacier, a magnificent wall of ice and a prime location for polar bear sightings.", activities: ["Glacier viewing", "Zodiac excursion", "Photography"] },
        { day: 5, title: "Hinlopen Strait", description: "Cross the Hinlopen Strait, where you might spot walruses and whales.", activities: ["Wildlife watching", "Bird watching", "Lecture"] },
        { day: 6, title: "Nordaustlandet", description: "Explore Nordaustlandet, the second-largest island in the Svalbard archipelago.", activities: ["Ice exploration", "Wildlife tracking", "Zodiac cruise"] },
        { day: 7, title: "Barentsøya & Edgeøya", description: "Visit Barentsøya and Edgeøya, known for their diverse Arctic wildlife.", activities: ["Wildlife watching", "Photography", "Lecture"] },
        { day: 8, title: "Return to Longyearbyen", description: "Return to Longyearbyen, reflecting on your Arctic adventure before disembarking.", activities: ["Disembarkation", "Transfer to airport"] }
      ],
      no: [
        { day: 1, title: "Ankomst Longyearbyen", description: "Ankom Longyearbyen, verdens nordligste bosetning. Overfør til ekspedisjonsskipet.", activities: ["Ombordstigning", "Sikkerhetsbriefing", "Velkomstmiddag"] },
        { day: 2, title: "Nordvest-Spitsbergen nasjonalpark", description: "Utforsk den uberørte villmarken i Nordvest-Spitsbergen nasjonalpark, hjem til isbjørner og arktiske rever.", activities: ["Zodiac-cruise", "Dyrelivsobservasjon", "Fotografering"] },
        { day: 3, title: "Liefdefjorden", description: "Naviger gjennom Liefdefjorden, med utkikk etter isbjørner og sel på havisen.", activities: ["Isnavigasjon", "Dyresporing", "Forelesning"] },
        { day: 4, title: "Monaco-breen", description: "Besøk Monaco-breen, en praktfull isvegg og et utmerket sted for isbjørnsyn.", activities: ["Breobservasjon", "Zodiac-utflukt", "Fotografering"] },
        { day: 5, title: "Hinlopenstredet", description: "Kryss Hinlopenstredet, hvor du kan se hvalrosser og hvaler.", activities: ["Dyrelivsobservasjon", "Fuglekikking", "Forelesning"] },
        { day: 6, title: "Nordaustlandet", description: "Utforsk Nordaustlandet, den nest største øya i Svalbard-arkipelet.", activities: ["Iseksplorasjon", "Dyresporing", "Zodiac-cruise"] },
        { day: 7, title: "Barentsøya & Edgeøya", description: "Besøk Barentsøya og Edgeøya, kjent for sitt varierte arktiske dyreliv.", activities: ["Dyrelivsobservasjon", "Fotografering", "Forelesning"] },
        { day: 8, title: "Tilbake til Longyearbyen", description: "Tilbake til Longyearbyen, refleksjon over ditt arktiske eventyr før avstigning.", activities: ["Avstigning", "Transport til flyplass"] }
      ],
      de: [
        { day: 1, title: "Ankunft in Longyearbyen", description: "Ankunft in Longyearbyen, der nördlichsten Siedlung der Welt. Transfer zum Expeditionschiff.", activities: ["Einschiffung", "Sicherheitsbesprechung", "Willkommensabendessen"] },
        { day: 2, title: "Nordwest-Spitzbergen-Nationalpark", description: "Erkunden Sie die unberührte Wildnis des Nordwest-Spitzbergen-Nationalparks, Heimat von Eisbären und arktischen Füchsen.", activities: ["Zodiac-Fahrt", "Wildtierbeobachtung", "Fotografie"] },
        { day: 3, title: "Liefdefjorden", description: "Navigieren Sie durch den Liefdefjorden, wobei Sie nach Eisbären und Seehunden auf dem Packeis Ausschau halten.", activities: ["Eisnavigation", "Wildtierverfolgung", "Vortrag"] },
        { day: 4, title: "Monaco-Gletscher", description: "Besuchen Sie den Monaco-Gletscher, eine prächtige Eiswand und ein hervorragender Ort für Eisbärenbeobachtungen.", activities: ["Gletscherbeobachtung", "Zodiac-Ausflug", "Fotografie"] },
        { day: 5, title: "Hinlopen-Straße", description: "Überqueren Sie die Hinlopen-Straße, wo Sie Walrosse und Wale sehen könnten.", activities: ["Wildtierbeobachtung", "Vogelbeobachtung", "Vortrag"] },
        { day: 6, title: "Nordaustlandet", description: "Erkunden Sie Nordaustlandet, die zweitgrößte Insel des Spitzbergen-Archipels.", activities: ["Eisexploration", "Wildtierverfolgung", "Zodiac-Fahrt"] },
        { day: 7, title: "Barentsøya & Edgeøya", description: "Besuchen Sie Barentsøya und Edgeøya, bekannt für ihre vielfältige arktische Tierwelt.", activities: ["Wildtierbeobachtung", "Fotografie", "Vortrag"] },
        { day: 8, title: "Rückkehr nach Longyearbyen", description: "Rückkehr nach Longyearbyen, Reflexion über Ihr arktisches Abenteuer vor dem Ausschiffen.", activities: ["Ausschiffung", "Transfer zum Flughafen"] }
      ],
      ar: [
        { day: 1, title: "الوصول إلى لونغييربين", description: "الوصول إلى لونغييربين، أقصى مستوطنة شمالية في العالم. الانتقال إلى سفينة الرحلة.", activities: ["الصعود", "الإحاطة الأمنية", "عشاء الترحيب"] },
        { day: 2, title: "منتزه شمال غرب سبيتسبيرغن الوطني", description: "استكشف البرية النقية في منتزه شمال غرب سبيتسبيرغن الوطني، موطن الدببة القطبية والثعالب القطبية.", activities: ["رحلة الزورق المطاطي", "مراقبة الحياة البرية", "التصوير"] },
        { day: 3, title: "لييفديفوردن", description: "ابحر عبر لييفديفوردن، مع الحذر من الدببة القطبية والفقمات على الجليد.", activities: ["الملاحة في الجليد", "تتبع الحياة البرية", "المحاضرة"] },
        { day: 4, title: "نهر موناكو الجليدي", description: "زيارة نهر موناكو الجليدي، جدار جليدي رائع ومكان ممتاز لمشاهدة الدببة القطبية.", activities: ["مشاهدة الجليد", "رحلة الزورق المطاطي", "التصوير"] },
        { day: 5, title: "مضيق هينلوبن", description: "عبر مضيق هينلوبن، حيث قد ترى عجول البحر والحيتان.", activities: ["مراقبة الحياة البرية", "مراقبة الطيور", "المحاضرة"] },
        { day: 6, title: "نوردأوستلاندت", description: "استكشاف نوردأوستلاندت، ثاني أكبر جزيرة في أرخبيل سفالبارد.", activities: ["استكشاف الجليد", "تتبع الحياة البرية", "رحلة الزورق المطاطي"] },
        { day: 7, title: "بارينتسوايا وإيدجوايا", description: "زيارة بارينتسوايا وإيدجوايا، المعروفتين بتنوع حياتهما البرية القطبية.", activities: ["مراقبة الحياة البرية", "التصوير", "المحاضرة"] },
        { day: 8, title: "العودة إلى لونغييربين", description: "العودة إلى لونغييربين، التأمل في مغامرتك القطبية قبل النزول.", activities: ["النزول", "النقل إلى المطار"] }
      ]
    },
    inclusions: {
      includes: {
        en: [
          "Accommodation in expedition vessel",
          "All meals on board",
          "Expert naturalist guides",
          "Zodiac boat excursions",
          "Educational lectures",
          "All activities as per itinerary"
        ],
        no: [
          "Overnatting i ekspedisjonsskip",
          "Alle måltider om bord",
          "Ekspert naturforsker guider",
          "Zodiac-båtutflukter",
          "Pedagogiske forelesninger",
          "Alle aktiviteter ifølge reiserute"
        ],
        de: [
          "Unterkunft im Expeditionschiff",
          "Alle Mahlzeiten an Bord",
          "Expertige Naturforscherführer",
          "Zodiac-Bootsausflüge",
          "Bildungsvorträge",
          "Alle Aktivitäten gemäß Reiseroute"
        ],
        ar: [
          "الإقامة في سفينة الرحلة",
          "جميع الوجبات على متن السفينة",
          "مرشدون خبراء طبيعيون",
          "رحلات الزوارق المطاطية",
          "المحاضرات التعليمية",
          "جميع الأنشطة حسب الجدول الزمني"
        ]
      },
      excludes: {
        en: [
          "International flights",
          "Travel insurance",
          "Personal expenses",
          "Alcoholic beverages",
          "Gratuities",
          "Visa fees"
        ],
        no: [
          "Internasjonale flyreiser",
          "Reiseforsikring",
          "Personlige utgifter",
          "Alkoholholdige drikker",
          "Drikkepenger",
          "Visumavgifter"
        ],
        de: [
          "Internationale Flüge",
          "Reiseversicherung",
          "Persönliche Ausgaben",
          "Alkoholische Getränke",
          "Trinkgelder",
          "Visagebühren"
        ],
        ar: [
          "الرحلات الجوية الدولية",
          "تأمين السفر",
          "المصاريف الشخصية",
          "المشروبات الكحولية",
          "الإكراميات",
          "رسوم التأشيرة"
        ]
      }
    }
  }
];

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Get all trips
app.get('/api/trips', (req, res) => {
  const { lang = 'en' } = req.query;
  
  const formattedTrips = trips.map(trip => ({
    ...trip,
    title: trip.title[lang] || trip.title.en,
    description: trip.description[lang] || trip.description.en,
    location: trip.location[lang] || trip.location.en
  }));
  
  res.json(formattedTrips);
});

// Get single trip
app.get('/api/trips/:id', (req, res) => {
  const { id } = req.params;
  const { lang = 'en' } = req.query;
  
  const trip = trips.find(t => t.id === parseInt(id));
  
  if (!trip) {
    return res.status(404).json({ error: 'Trip not found' });
  }
  
  const formattedTrip = {
    ...trip,
    title: trip.title[lang] || trip.title.en,
    description: trip.description[lang] || trip.description.en,
    location: trip.location[lang] || trip.location.en,
    overview: trip.overview[lang] || trip.overview.en,
    highlights: trip.highlights[lang] || trip.highlights.en,
    itinerary: trip.itinerary[lang] || trip.itinerary.en,
    inclusions: {
      includes: trip.inclusions.includes[lang] || trip.inclusions.includes.en,
      excludes: trip.inclusions.excludes[lang] || trip.inclusions.excludes.en
    }
  };
  
  res.json(formattedTrip);
});

// Create booking
app.post('/api/bookings', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      tripId,
      adults,
      children,
      date,
      specialRequests,
      totalPrice,
      language = 'en'
    } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !country || !tripId || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const trip = trips.find(t => t.id === parseInt(tripId));
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    const booking = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      country,
      tripId: parseInt(tripId),
      adults: parseInt(adults),
      children: parseInt(children) || 0,
      date: new Date(date),
      specialRequests: specialRequests || '',
      totalPrice: parseFloat(totalPrice),
      status: 'pending',
      createdAt: new Date(),
      language
    };

    // Send confirmation email
    if (transporter) {
      try {
        const mailOptions = {
          from: emailUser,
          to: email,
          subject: `Booking Confirmation - ${trip.title[language] || trip.title.en}`,
          html: `
            <h2>Booking Confirmation</h2>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for booking your Arctic adventure with Amazing Arctic!</p>
            
            <h3>Booking Details</h3>
            <ul>
              <li><strong>Trip:</strong> ${trip.title[language] || trip.title.en}</li>
              <li><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</li>
              <li><strong>Adults:</strong> ${adults}</li>
              <li><strong>Children:</strong> ${children || 0}</li>
              <li><strong>Total Price:</strong> $${totalPrice}</li>
            </ul>
            
            <h3>Contact Information</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Country: ${country}</p>
            
            ${specialRequests ? `<h3>Special Requests</h3><p>${specialRequests}</p>` : ''}
            
            <p>We will contact you shortly to finalize your booking.</p>
            <p>Best regards,<br>Amazing Arctic Team</p>
          `
        };

        await transporter.sendMail(mailOptions);

        // Send notification email to admin
        const adminMailOptions = {
          from: emailUser,
          to: process.env.ADMIN_EMAIL || emailUser,
          subject: `New Booking - ${trip.title[language] || trip.title.en}`,
          html: `
            <h2>New Booking Received</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Trip:</strong> ${trip.title[language] || trip.title.en}</p>
            <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
            <p><strong>Total Price:</strong> $${totalPrice}</p>
            <p><strong>Language:</strong> ${language}</p>
          `
        };

        await transporter.sendMail(adminMailOptions);
      } catch (emailError) {
        console.warn('Failed to send booking emails:', emailError.message);
      }
    }

    res.status(201).json({
      success: true,
      bookingId: booking.id,
      message: 'Booking created successfully'
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email, language = 'en' } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Send welcome email
    if (transporter) {
      try {
        const mailOptions = {
          from: emailUser,
          to: email,
          subject: 'Welcome to Amazing Arctic Newsletter',
          html: `
            <h2>Welcome to Amazing Arctic!</h2>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>You'll receive updates about our latest expeditions, special offers, and Arctic news.</p>
            <p>Best regards,<br>Amazing Arctic Team</p>
          `
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.warn('Failed to send newsletter email:', emailError.message);
      }
    }

    res.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// Contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message, address } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const contact = {
    id: idCounter++,
    name,
    email,
    message,
    address: address || null,
    createdAt: new Date(),
  };
  contacts.push(contact);

  // Send notification (real email if configured)
  if (transporter) {
    try {
      let addressInfo = '';
      if (address) {
        addressInfo = `<p><strong>Address:</strong> ${address}</p>`;
      }
      await transporter.sendMail({
        from: emailUser,
        to: process.env.ADMIN_EMAIL || emailUser,
        subject: 'New Contact Form Submission',
        html: `
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          ${addressInfo}
          <p>Submitted at: ${contact.createdAt}</p>
        `
      });
      console.log('Contact notification email sent successfully');
    } catch (err) {
      console.warn('Failed to send contact notification email:', err.message);
      console.log('Contact form submission received and stored:', contact);
    }
  } else {
    console.log('Email service not configured - contact form submission received:', contact);
  }

  res.status(201).json({ success: true, contact });
});

// GET /api/contact - list all
app.get('/api/contact', (req, res) => {
  res.json(contacts);
});

// PUT /api/contact/:id - update
app.put('/api/contact/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = contacts.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { name, email, message } = req.body;
  if (name) contacts[idx].name = name;
  if (email) contacts[idx].email = email;
  if (message) contacts[idx].message = message;
  contacts[idx].updatedAt = new Date();
  res.json({ success: true, contact: contacts[idx] });
});

// DELETE /api/contact/:id - delete
app.delete('/api/contact/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = contacts.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  contacts.splice(idx, 1);
  res.json({ success: true });
});

// Admin authentication middleware
const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== 'Bearer admin-token-2024') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Admin API Routes

// Get all articles
app.get('/api/admin/articles', adminAuth, (req, res) => {
  res.json(articles);
});

// Get single article
app.get('/api/admin/articles/:id', adminAuth, (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json(article);
});

// Create new article
app.post('/api/admin/articles', adminAuth, (req, res) => {
  try {
    const { title, content, category, tags, author, date, featured, status, image } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newArticle = {
      id: Date.now(),
      title: title || {},
      content: content || {},
      image: image || '/uploads/default-article.jpg',
      category: category || 'general',
      tags: tags || [],
      author: author || 'Admin',
      date: date || new Date().toISOString().split('T')[0],
      featured: featured || false,
      status: status || 'draft',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    articles.push(newArticle);
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
});

// Update article
app.put('/api/admin/articles/:id', adminAuth, (req, res) => {
  try {
    const articleIndex = articles.findIndex(a => a.id === parseInt(req.params.id));
    if (articleIndex === -1) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const { title, content, category, tags, author, date, featured, status, image } = req.body;
    
    articles[articleIndex] = {
      ...articles[articleIndex],
      title: title || articles[articleIndex].title,
      content: content || articles[articleIndex].content,
      image: image || articles[articleIndex].image,
      category: category || articles[articleIndex].category,
      tags: tags || articles[articleIndex].tags,
      author: author || articles[articleIndex].author,
      date: date || articles[articleIndex].date,
      featured: featured !== undefined ? featured : articles[articleIndex].featured,
      status: status || articles[articleIndex].status,
      updatedAt: new Date()
    };

    res.json(articles[articleIndex]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
});

// Delete article
app.delete('/api/admin/articles/:id', adminAuth, (req, res) => {
  const articleIndex = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (articleIndex === -1) {
    return res.status(404).json({ error: 'Article not found' });
  }

  articles.splice(articleIndex, 1);
  res.json({ success: true, message: 'Article deleted successfully' });
});

// Upload image
app.post('/api/admin/upload', adminAuth, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ 
      success: true, 
      url: imageUrl,
      filename: req.file.filename,
      originalname: req.file.originalname
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Get uploaded files
app.get('/api/admin/uploads', adminAuth, (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, 'uploads');
    const files = fs.readdirSync(uploadsDir)
      .filter(file => fs.statSync(path.join(uploadsDir, file)).isFile())
      .map(file => ({
        filename: file,
        url: `/uploads/${file}`,
        size: fs.statSync(path.join(uploadsDir, file)).size,
        created: fs.statSync(path.join(uploadsDir, file)).birthtime
      }));
    
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: 'Failed to list uploads' });
  }
});

// Delete uploaded file
app.delete('/api/admin/uploads/:filename', adminAuth, (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({ success: true, message: 'File deleted successfully' });
    } else {
      res.status(404).json({ error: 'File not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete file' });
  }
});

// Serve static files in both production and development
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});