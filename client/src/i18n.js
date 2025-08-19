import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        trips: 'Our Trips',
        destinations: 'Destinations',
        gallery: 'Gallery',
        journal: 'Journal',
        about: 'About Us',
        contact: 'Contact'
      },
      
      // Hero section
      hero: {
        title: 'Experience the Arctic',
        subtitle: 'Discover the pristine beauty of the polar regions with our exclusive expeditions',
        cta: 'Explore Expeditions',
        ctaSecondary: 'View Gallery'
      },
      
      // Featured trips
      featured: {
        title: 'Featured Expeditions',
        duration: 'Duration',
        days: 'days',
        from: 'From',
        learnMore: 'Learn More',
        bookNow: 'Book Now'
      },
      
      // Trip details
      trip: {
        overview: 'Overview',
        itinerary: 'Detailed Itinerary',
        includes: 'What\'s Included',
        map: 'Interactive Map',
        reviews: 'Reviews',
        price: 'Price',
        perPerson: 'per person',
        dates: 'Available Dates',
        bookNow: 'Book This Expedition',
        enquire: 'Enquire Now'
      },
      
      // Booking form
      booking: {
        title: 'Book Your Arctic Adventure',
        personalInfo: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        country: 'Country',
        date: 'Preferred Date',
        adults: 'Adults',
        children: 'Children',
        specialRequests: 'Special Requests',
        totalPrice: 'Total Price',
        submit: 'Complete Booking',
        processing: 'Processing...',
        success: 'Booking confirmed! We\'ll contact you shortly.',
        error: 'Booking failed. Please try again.'
      },
      
      // Form validation
      validation: {
        required: 'This field is required',
        email: 'Please enter a valid email',
        phone: 'Please enter a valid phone number',
        minLength: 'Must be at least {{count}} characters'
      },
      
      // Gallery
      gallery: {
        title: 'Arctic Gallery',
        subtitle: 'Explore our stunning collection of Arctic photography',
        filterAll: 'All',
        filterWildlife: 'Wildlife',
        filterLandscapes: 'Landscapes',
        filterShips: 'Expedition Ships'
      },
      
      // Footer
      footer: {
        about: {
          title: 'About White Horizon',
          description: 'Discover the Arctic with expert guides and sustainable travel experiences that create memories to last a lifetime.'
        },
        explore: {
          title: 'Explore Adventures',
          trips: 'Our Expeditions',
          gallery: 'Photo Gallery',
          about: 'About Us',
          blog: 'Travel Journal'
        },
        support: {
          title: 'Support & Help',
          contact: 'Contact Us',
          faq: 'Frequently Asked Questions',
          terms: 'Terms & Conditions',
          privacy: 'Privacy Policy'
        },
        contact: {
          title: 'Contact Information',
          address: 'Address',
          addressDetail: 'Tromsø, Northern Norway',
          phone: 'Phone',
          email: 'Email'
        },
        copyright: 'All rights reserved.'
      },
      
      carousel: {
        title: 'Arctic Adventures',
        northernLights: {
          title: 'Northern Lights Expedition',
          description: 'Experience the breathtaking Aurora Borealis in pristine Arctic wilderness. Our expert guides take you to the best viewing locations away from light pollution. Learn about the science and folklore behind this natural phenomenon while enjoying warm beverages under the starlit sky.'
        },
        fjordTour: {
          title: 'Norwegian Fjord Discovery',
          description: 'Journey through Norway\'s most spectacular fjords with towering cliffs, cascading waterfalls, and pristine waters. Our scenic routes include Geirangerfjord and Nærøyfjord, both UNESCO World Heritage sites. Discover hidden villages and ancient Viking settlements along the way.'
        },
        auroraBorealis: {
          title: 'Aurora Borealis Magic',
          description: 'Experience the ethereal dance of the Northern Lights across Norway\'s Arctic sky.'
        },
        polarBear: {
          title: 'Realm of the Polar Bear',
          description: 'Encounter Arctic wildlife in their natural habitat with our specialized guides.'
        },
        polarBearExpedition: {
          title: 'Polar Bear Expedition',
          description: 'Join our photography-focused bear watching tours in the Arctic wilderness.'
        },
        majesticFjords: {
          title: 'Majestic Norwegian Fjords',
          description: 'Cruise through dramatic landscapes where towering cliffs meet crystal-clear waters.'
        },
        fjordCruise: {
          title: 'Norwegian Fjord Cruise',
          description: 'Experience the breathtaking beauty of Norway\'s famous fjords.'
        },
        scenicFjords: {
          title: 'Scenic Fjord Adventures',
          description: 'Explore Norway\'s most breathtaking fjords with expert local guides.'
        },
        categories: {
          northernLights: 'Northern Lights',
          wildlife: 'Arctic Wildlife',
          fjords: 'Fjord Tours'
        }
      },
      
      journal: {
        title: "Horizon Travel Journal",
        subtitle: "Discover inspiring stories, expert tips, and breathtaking photography from our Arctic expeditions",
        allArticles: "All Articles",
        featured: {
          title: "Winter in Northern Norway: A Complete Safety Guide",
          description: "Planning your first Arctic adventure? This comprehensive guide covers everything from clothing essentials to emergency protocols. Learn how to stay safe while experiencing the magic of Norway's Arctic winter, including Northern Lights viewing, dog sledding, and ice fishing. Written by our team of certified Arctic guides with over 50 years of combined experience."
        },
        updated: "Updated",
        readTime: "min read",
        date: "Date",
        categories: {
          photography: "Photography",
          destinations: "Destinations",
          culture: "Culture",
          wildlife: "Wildlife",
          adventure: "Adventure",
          food: "Food",
          safety: "Safety"
        },
        safety: {
          professionalGuides: "Professional Arctic Guides",
          professionalGuidesDesc: "Our certified Arctic guides have over 50 years of combined experience in Arctic expeditions. All guides are trained in wilderness first aid, emergency response, and Arctic survival techniques to ensure your safety throughout the journey.",
          weatherSafety: "Weather Safety & Monitoring",
          weatherSafetyDesc: "We continuously monitor weather conditions using advanced meteorological tools and local expertise. Tours are adjusted based on real-time weather data to ensure optimal safety and experience quality.",
          emergencyContacts: "Emergency Contacts & Support",
          emergencyContactsDesc: "24/7 emergency support with direct communication to local rescue services, medical facilities, and emergency response teams. All guides carry satellite communication devices for immediate assistance.",
          gearRecommendations: "Essential Arctic Gear",
          gearRecommendationsDesc: "Comprehensive gear recommendations including layered clothing systems, specialized Arctic footwear, and safety equipment. We provide detailed packing lists and can assist with gear rental or purchase."
        },
        articles: {
          northernLightsPhotography: {
            title: "Northern Lights Photography: A Complete Guide",
            excerpt: "Learn the secrets to capturing the perfect Aurora Borealis shot in Norway's Arctic wilderness. From camera settings to timing, everything you need to know."
          },
          tromsoWinterGuide: {
            title: "Tromsø in Winter: The Ultimate Arctic City Guide",
            excerpt: "Discover why Tromsø is the perfect base for your Arctic adventure. Explore local culture, cuisine, and the best spots for Northern Lights viewing."
          },
          samiCulture: {
            title: "Sami Culture: Traditions of the Arctic",
            excerpt: "Explore the rich cultural heritage of the Sami people, Norway's indigenous Arctic community. Learn about reindeer herding, traditional crafts, and joik singing."
          },
          norwegianFolkTraditions: {
            title: "Norwegian Folk Traditions: A Cultural Journey",
            excerpt: "Discover the rich tapestry of Norwegian folk traditions, from ancient customs and celebrations to modern interpretations that keep cultural heritage alive."
          },
          norwegianWoodCarving: {
            title: "The Art of Norwegian Wood Carving",
            excerpt: "An in-depth look at the traditional Norwegian craft of wood carving, its historical significance, and how modern artisans are preserving this cultural treasure."
          },
          arcticWildlifePolarBears: {
            title: "Arctic Wildlife: Safe Encounters with Polar Bears",
            excerpt: "Essential safety guidelines for wildlife viewing in Svalbard. Learn how to respectfully observe Arctic animals while staying safe in their natural habitat."
          },
          norwegianFjordsHiddenGems: {
            title: "Norwegian Fjords: Hidden Gems Beyond the Tourist Trail",
            excerpt: "Discover secret fjords and hidden valleys that most tourists never see. Our insider guide to Norway's best-kept Arctic secrets."
          },
          arcticCuisine: {
            title: "Arctic Cuisine: Traditional Foods of Northern Norway",
            excerpt: "From dried fish to cloudberries, explore the unique flavors of Arctic cuisine. Learn about traditional preservation methods and seasonal delicacies."
          },
          traditionalNorwegianDishes: {
            title: "Traditional Norwegian Dishes You Must Try",
            excerpt: "From hearty stews to delicate seafood, discover the authentic tastes of Norway's Arctic region that have sustained generations through harsh winters."
          },
          lutefisk: {
            title: "Lutefisk: Norway's Most Controversial Dish",
            excerpt: "The history, preparation, and cultural significance of lutefisk, the traditional dried whitefish treated with lye that divides opinion even among Norwegians."
          },
          fjordCamping: {
            title: "Fjord Camping: The Ultimate Guide",
            excerpt: "Everything you need to know about camping along Norway's spectacular fjords, from the best locations to essential gear and local regulations."
          },
          arcticExpeditionPhotography: {
            title: "Arctic Expedition Photography Tips",
            excerpt: "Professional advice for capturing stunning images in challenging Arctic conditions, from equipment protection to composition techniques for snow and ice."
          },
          wildlifeWatchingTromso: {
            title: "Wildlife Watching in Tromsø",
            excerpt: "A comprehensive guide to spotting and photographing the diverse wildlife around Tromsø, from sea eagles and whales to reindeer and Arctic foxes."
          },
          norwayHikingTrails: {
            title: "Norway's Most Spectacular Hiking Trails",
            excerpt: "Discover breathtaking trails through mountains, fjords, and forests that showcase the best of Norway's natural beauty and wilderness."
          },
          arcticAdventureNorthernLights: {
            title: "Arctic Adventure: Chasing the Northern Lights",
            excerpt: "An unforgettable journey through the Arctic wilderness in pursuit of the magical aurora borealis, with tips on the best viewing locations and photography techniques."
          }
        }
      },
      
      tripDetail: {
        title: "Arctic Travel Journal",
        subtitle: "Stories, tips, and insights from Norway's Arctic wilderness - written by locals and seasoned Arctic explorers",
        featuredTitle: "Winter in Northern Norway: A Complete Safety Guide",
        featuredExcerpt: "Planning your first Arctic adventure? This comprehensive guide covers everything from clothing essentials to emergency protocols. Learn how to stay safe while experiencing the magic of Norway's Arctic winter, including Northern Lights viewing, dog sledding, and ice fishing. Written by our team of certified Arctic guides with over 50 years of combined experience.",
        allArticles: "All Articles",
        updated: "Updated",
        readTime: "min read",
        category: "Category"
      },
      
      journal: {
        title: "Horizon Reisejournal",
        subtitle: "Oppdag inspirerende historier, eksperttips og fantastisk fotografi fra våre arktiske ekspedisjoner",
        allArticles: "Alle Artikler",
        featured: {
          title: "Vinter i Nord-Norge: En Komplett Sikkerhetsguide",
          description: "Planlegger du ditt første arktiske eventyr? Denne omfattende guiden dekker alt fra essensielt tøy til nødprosedyrer. Lær hvordan du holder deg trygg mens du opplever magien av Norges arktiske vinter, inkludert nordlysskue, hundekjøring og isfiske. Skrevet av vårt team av sertifiserte arktiske guider med over 50 års samlet erfaring."
        },
        updated: "Oppdatert",
        readTime: "min å lese",
        date: "Dato",
        categories: {
          photography: "Fotografering",
          destinations: "Destinasjoner",
          culture: "Kultur",
          wildlife: "Villmark",
          adventure: "Eventyr",
          food: "Mat",
          safety: "Sikkerhet"
        },
        safety: {
          professionalGuides: "Profesjonelle Arktiske Guider",
          professionalGuidesDesc: "Våre sertifiserte arktiske guider har over 50 års samlet erfaring fra arktiske ekspedisjoner. Alle guider er opplært i villmarks førstehjelp, nødrespons og arktiske overlevelsesteknikker for å sikre din sikkerhet gjennom hele reisen.",
          weatherSafety: "Værsikkerhet og Overvåking",
          weatherSafetyDesc: "Vi overvåker kontinuerlig værforholdene ved hjelp av avanserte meteorologiske verktøy og lokal ekspertise. Turer justeres basert på sanntids værdata for å sikre optimal sikkerhet og opplevelseskvalitet.",
          emergencyContacts: "Nødkontakter og Støtte",
          emergencyContactsDesc: "24/7 nødstøtte med direkte kommunikasjon til lokale redningstjenester, medisinske fasiliteter og nødresponsteam. Alle guider bærer satellittkommunikasjonsenheter for umiddelbar assistanse.",
          gearRecommendations: "Essensielt Arktisk Utstyr",
          gearRecommendationsDesc: "Omfattende utstyranbefalinger inkludert lagdelt klesystem, spesialisert arktisk fottøy og sikkerhetsutstyr. Vi tilbyr detaljerte pakkelister og kan bistå med utleie eller kjøp av utstyr."
        },
        articles: {
          northernLightsPhotography: {
            title: "Nordlys Fotografering: En Komplett Guide",
            excerpt: "Lær hemmelighetene bak å fange det perfekte nordlysbildet i Norges arktiske villmark. Fra kamerainnstillinger til timing, alt du trenger å vite."
          },
          tromsoWinterGuide: {
            title: "Tromsø om Vinteren: Den Ultimate Arktiske Byguiden",
            excerpt: "Oppdag hvorfor Tromsø er det perfekte utgangspunktet for ditt arktiske eventyr. Utforsk lokal kultur, mat og de beste stedene for nordlysskue."
          },
          samiCulture: {
            title: "Samisk Kultur: Tradisjoner fra Arktis",
            excerpt: "Utforsk den rike kulturarven til samene, Norges urbefolkning i Arktis. Lær om reindrift, tradisjonelt håndverk og joiksang."
          },
          norwegianFolkTraditions: {
            title: "Norske Folketradisjoner: En Kulturell Reise",
            excerpt: "Oppdag den rike veven av norske folketradisjoner, fra gamle skikker og feiringer til moderne tolkninger som holder kulturarven i live."
          },
          norwegianWoodCarving: {
            title: "Kunsten med Norsk Treskjæring",
            excerpt: "Et dyptgående blikk på den tradisjonelle norske håndverket treskjæring, dets historiske betydning, og hvordan moderne kunstnere bevarer denne kulturelle skatten."
          },
          arcticWildlifePolarBears: {
            title: "Arktisk Villmark: Trygge Møter med Isbjørner",
            excerpt: "Essensielle sikkerhetsretningslinjer for dyreobservasjon på Svalbard. Lær hvordan du respektfullt observerer arktiske dyr mens du holder deg trygg i deres naturlige habitat."
          },
          norwegianFjordsHiddenGems: {
            title: "Norske Fjorder: Skjulte Juveler utenfor Turiststien",
            excerpt: "Oppdag hemmelige fjorder og skjulte daler som de fleste turister aldri ser. Vår insiderguide til Norges best bevarte arktiske hemmeligheter."
          },
          arcticCuisine: {
            title: "Arktisk Kjøkken: Tradisjonell Mat fra Nord-Norge",
            excerpt: "Fra tørket fisk til multebær, utforsk de unike smakene av arktisk kjøkken. Lær om tradisjonelle konserveringsmetoder og sesongbaserte delikatesser."
          },
          traditionalNorwegianDishes: {
            title: "Tradisjonelle Norske Retter du Må Prøve",
            excerpt: "Fra solide gryter til delikat sjømat, oppdag de autentiske smakene av Norges arktiske region som har holdt generasjoner i live gjennom harde vintre."
          },
          lutefisk: {
            title: "Lutefisk: Norges Mest Kontroversielle Rett",
            excerpt: "Historien, tilberedningen og kulturell betydning av lutefisk, den tradisjonelle tørkede hvitfisken behandlet med lut som deler meninger selv blant nordmenn."
          },
          fjordCamping: {
            title: "Fjordcamping: Den Ultimate Guiden",
            excerpt: "Alt du trenger å vite om camping langs Norges spektakulære fjorder, fra de beste stedene til essensiell utstyr og lokale forskrifter."
          },
          arcticExpeditionPhotography: {
            title: "Arktisk Ekspedisjonsfotografering Tips",
            excerpt: "Profesjonelle råd for å fange fantastiske bilder i utfordrende arktiske forhold, fra utstyrsbeskyttelse til komposisjonsteknikker for snø og is."
          },
          wildlifeWatchingTromso: {
            title: "Villmarksobservasjon i Tromsø",
            excerpt: "En omfattende guide til å observere og fotografere det mangfoldige dyrelivet rundt Tromsø, fra havørner og hvaler til reinsdyr og arktiske rever."
          },
          norwayHikingTrails: {
            title: "Norges Mest Spektakulære Fotturer",
            excerpt: "Oppdag pustetakende stier gjennom fjell, fjorder og skoger som viser frem det beste av Norges naturlige skjønnhet og villmark."
          },
          arcticAdventureNorthernLights: {
            title: "Arktisk Eventyr: Jakten på Nordlyset",
            excerpt: "En uforglemmelig reise gjennom den arktiske villmarken på jakt etter det magiske nordlyset, med tips om de beste observasjonsstedene og fotograferingsteknikker."
          }
        }
      },
      
      tripDetail: {
        title: "Arktisk Reisejournal",
        subtitle: "Historier, tips og innsikter fra Norges arktiske villmark - skrevet av lokale og erfarne arktiske oppdagere",
        featuredTitle: "Vinter i Nord-Norge: En Komplett Sikkerhetsguide",
        featuredExcerpt: "Planlegger du ditt første arktiske eventyr? Denne omfattende guiden dekker alt fra essensielt tøy til nødprosedyrer. Lær hvordan du holder deg trygg mens du opplever magien av Norges arktiske vinter, inkludert nordlysskue, hundekjøring og isfiske. Skrevet av vårt team av sertifiserte arktiske guider med over 50 års samlet erfaring.",
        allArticles: "Alle Artikler",
        updated: "Oppdatert",
        readTime: "min å lese",
        category: "Kategori"
      },
      
      home: {
        hero: {
          title: 'Arctic Norway Awaits',
          subtitle: 'Experience the raw beauty of northern life and arctic wildlife in their natural habitat'
        },
        experiences: {
          title: 'Unforgettable Norwegian Experiences',
          description: 'Discover the Arctic\'s most breathtaking wonders through our carefully curated expeditions. From the dancing Northern Lights to majestic fjords and pristine wilderness, create memories that will last a lifetime in Norway\'s most spectacular destinations.',
          northernLights: {
            title: 'Chase the Northern Lights',
            description: 'Witness the magical Aurora Borealis dance across the Arctic sky in optimal viewing locations with expert guidance and photography tips.'
          },
          fjords: {
            title: 'Explore Arctic Fjords',
            description: 'Navigate through Norway\'s most stunning fjords by boat, kayak, or on foot. Experience dramatic landscapes and pristine nature.'
          },
          wildlife: {
            title: 'Arctic Wildlife Encounters',
            description: 'Get up close with Arctic wildlife including reindeer, seals, and seabirds in their natural habitat with responsible, ethical tours.'
          }
        },
        why: {
          title: 'Why Choose White Horizon'
        },
        features: {
          excellence: {
            title: '15+ Years of Excellence',
            description: 'With over 15 years of experience in Arctic tourism, we\'ve perfected the art of creating unforgettable expeditions. Our deep knowledge of the region ensures you\'ll experience the very best of the Arctic.'
          },
          guides: {
            title: 'Certified Expert Guides',
            description: 'Our guides are certified professionals with extensive training in wilderness safety, photography, and Arctic ecology. They\'re passionate about sharing their knowledge and ensuring your safety throughout the journey.'
          },
          sustainable: {
            title: 'Sustainable Tourism',
            description: 'We\'re committed to preserving the Arctic\'s pristine beauty. Our tours follow strict environmental guidelines, use eco-friendly vehicles, and support local conservation efforts to protect this fragile ecosystem.'
          }
        },
        adventure: {
          title: 'Ready for Your Arctic Adventure?',
          description: 'Join thousands of satisfied travelers who have experienced the magic of the Arctic with White Horizon Expedition.',
          cta: 'Start planning your unforgettable journey today.',
          button: 'Book your Arctic Adventure',
          gallery: 'View Gallery',
          contact: 'Contact Us'
        }
      },
      
      journal: {
        title: 'Horizon Travel Journal',
        subtitle: 'Discover inspiring stories, expert tips, and breathtaking photography from our Arctic expeditions',
        allArticles: 'All Articles',
        readTime: 'min read',
        updated: 'Updated',
        categories: {
          adventure: 'Adventure',
          photography: 'Photography',
          wildlife: 'Wildlife',
          food: 'Food',
          culture: 'Culture',
          destinations: 'Destinations',
          safety: 'Safety'
        },
        featured: {
          title: 'Winter in Northern Norway: A Complete Safety Guide',
          description: "Planning your first Arctic adventure? This comprehensive guide covers everything from clothing essentials to emergency protocols. Learn how to stay safe while experiencing the magic of Norway's Arctic winter, including Northern Lights viewing, dog sledding, and ice fishing. Written by our team of certified Arctic guides with over 50 years of combined experience."
        },
        safety: {
          professionalGuides: 'Professional Guides',
          professionalGuidesDesc: 'Our certified Arctic guides have over 50 years of combined experience in Norway\'s wilderness. They\'re trained in first aid, navigation, and emergency response to ensure your safety throughout your adventure.',
          weatherSafety: 'Weather Safety',
          weatherSafetyDesc: 'Arctic weather can change rapidly. We monitor conditions 24/7 and provide real-time updates. Learn to read weather patterns and understand when to postpone activities for your safety.',
          emergencyContacts: 'Emergency Contacts',
          emergencyContactsDesc: 'Always carry emergency numbers including local rescue services, our 24/7 support line, and nearest medical facilities. We provide satellite phones for remote expeditions.',
          gearRecommendations: 'Gear Recommendations',
          gearRecommendationsDesc: 'Essential Arctic gear includes thermal layers, waterproof outerwear, insulated boots, and emergency supplies. We provide detailed packing lists and can rent specialized equipment.'
        }
      },
      
      why: {
        title: 'Why White Horizon Expedition'
      },
      
      features: {
        expertGuide: {
          title: 'Expert Guide',
          description: 'Professional Arctic guides with 10+ years of experience, certified in wilderness first aid and Northern Lights photography. Get insider knowledge and safety expertise.'
        },
        privateTaxi: {
          title: 'Private Taxi',
          description: 'Comfortable private transportation with heated vehicles, flexible scheduling, and door-to-door service. Travel in warmth and style to the best viewing locations.'
        },
        sustainableTravel: {
          title: 'Sustainable Travel',
          description: 'Carbon-neutral tours using electric vehicles, supporting local communities, and following Leave No Trace principles. Travel responsibly in the Arctic.'
        },
        photographyFocus: {
          title: 'Photography Focus',
          description: 'Professional photography guidance, equipment recommendations, and optimal timing for capturing the perfect Northern Lights and fjord shots. Take home stunning memories.'
        }
      },
      
      about: {
        title: 'About White Horizon Expedition',
        subtitle: 'Discovering the Arctic through sustainable, expert-guided adventures that create memories to last a lifetime',
        story: {
          title: 'Our Story',
          paragraph1: 'Founded in 2015 by a team of Arctic enthusiasts and certified guides, White Horizon Expedition emerged from a shared passion for the pristine beauty of Northern Norway. What began as small group expeditions has grown into a premier Arctic adventure company, maintaining our commitment to sustainable tourism and authentic experiences.',
          paragraph2: 'Based in Tromsø, the "Gateway to the Arctic," we specialize in creating intimate, carefully curated expeditions that showcase the raw majesty of the Arctic while respecting its delicate ecosystem. Our deep local knowledge and partnerships with indigenous communities ensure every journey is both educational and transformative.'
        },
        values: {
          title: 'Our Values',
          sustainability: 'Sustainability First',
          sustainabilityDesc: 'We operate with carbon-neutral transportation, support local communities, and follow strict Leave No Trace principles to preserve the Arctic for future generations.',
          expertise: 'Expert Knowledge',
          expertiseDesc: 'Our guides are certified Arctic specialists with extensive training in wilderness safety, Northern Lights photography, and local culture, ensuring safe and enriching experiences.',
          authenticity: 'Authentic Connections',
          authenticityDesc: 'We foster genuine connections between travelers and the Arctic environment, creating meaningful experiences that go beyond typical tourism.',
          smallGroups: 'Small Groups',
          smallGroupsDesc: 'We maintain intimate group sizes to ensure personalized attention, minimize environmental impact, and provide authentic encounters with Arctic nature.'
        },
        whyChoose: {
          title: 'Why Choose Us',
          localExpertise: 'Local Expertise',
          localExpertiseDesc: 'Our team consists of native Norwegians and long-term residents who possess intimate knowledge of Arctic conditions, weather patterns, and hidden gems that only locals know.',
          safety: 'Safety Excellence',
          safetyDesc: 'All guides are certified in wilderness first aid, Arctic survival techniques, and emergency response. We maintain comprehensive safety protocols and equipment.',
          photography: 'Photography Focus',
          photographyDesc: 'Professional photography guidance included in every expedition. Learn to capture the Northern Lights, Arctic wildlife, and dramatic landscapes with expert tips.',
          culture: 'Cultural Immersion',
          cultureDesc: 'Experience authentic Sami culture through partnerships with local communities. Learn traditional Arctic survival skills and indigenous knowledge.'
        },
        tours: {
          title: 'Our Tour Options',
          premiumBus: {
            title: 'Premium Bus Tours',
            description: 'Experience the Arctic in ultimate comfort with our luxury bus tours. Featuring heated panoramic vehicles, expert commentary, and strategic stops at the most spectacular locations. Perfect for groups and families.'
          },
          private: {
            title: 'Exclusive Private Tours',
            description: 'Create your own Arctic adventure with our exclusive private tours. Enjoy personalized itineraries, flexible scheduling, and dedicated attention from our expert guides. Perfect for intimate Northern Lights experiences.'
          },
          smallGroup: {
            title: 'Small Group Adventures',
            description: 'Join like-minded adventurers in our carefully curated small group tours. Experience the Arctic with personalized attention while sharing the wonder with fellow explorers. Maximum 8 people per group.'
          },
          luxury: {
            title: 'Luxury Arctic Expeditions',
            description: 'Indulge in the ultimate Arctic experience with our luxury expeditions. Stay in premium accommodations, enjoy gourmet meals, and travel in style while exploring the pristine wilderness of Northern Norway.'
          }
        }
      },
      
      contact: {
        title: 'Contact White Horizon Expedition',
        subtitle: 'Get in touch with our Arctic adventure specialists to plan your perfect expedition',
        form: {
          title: 'Send us a message',
          name: 'Full Name',
          email: 'Email Address',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          sending: 'Sending...',
          success: 'Message sent successfully! We\'ll get back to you within 24 hours.',
          error: 'Failed to send message. Please try again or contact us directly.'
        },
        info: {
          title: 'Contact Information',
          address: {
            title: 'Visit Us',
            street: 'Storgata 15',
            city: 'Tromsø, Norway',
            postal: '9008'
          },
          phone: {
            title: 'Call Us',
            number: '+47 123 456 789',
            hours: 'Mon-Fri: 9:00-18:00 CET'
          },
          email: {
            title: 'Email Us',
            address: 'whitehorizenexpedition@gmail.com',
            response: 'Response within 24 hours'
          }
        }
      },
      
      journal: {
        title: "White Horizon Journal",
        subtitle: "Discover inspiring stories, expert tips, and stunning photography from our Arctic adventures",
        allArticles: "All Articles",
        featured: {
          title: "Northern Norway in Winter: The Complete Safety Guide",
          description: "Planning your first Arctic adventure? This comprehensive guide covers everything from essential clothing to emergency protocols. Learn how to stay safe while experiencing the magic of Northern Norway's Arctic winter, including Northern Lights viewing, dog sledding, and ice fishing. Written by our team of certified Arctic guides with over 50 years of combined experience."
        },
        categories: {
          photography: "Photography",
          destinations: "Destinations",
          culture: "Culture",
          wildlife: "Wildlife",
          adventure: "Adventure",
          food: "Food",
          safety: "Safety"
        },
        articles: {
          northernLightsPhotography: {
            title: "Northern Lights Photography: The Complete Guide",
            excerpt: "Learn the secrets to capturing perfect Northern Lights photos in Norway's Arctic wilderness. From camera settings to timing - everything you need to know."
          },
          tromsoWinterGuide: {
            title: "Tromsø in Winter: The Ultimate Arctic City Guide",
            excerpt: "Discover why Tromsø is the perfect base for your Arctic adventure. Explore local culture, cuisine, and the best Northern Lights viewing spots."
          },
          samiCulture: {
            title: "Sami Culture: Arctic Traditions",
            excerpt: "Explore the rich culture of the Sami people, Northern Norway's indigenous Arctic community. Learn about reindeer herding, traditional crafts, and joik singing."
          },
          norwegianFolkTraditions: {
            title: "Norwegian Folk Traditions: A Cultural Journey",
            excerpt: "Discover the rich tapestry of Norwegian folk traditions, from ancient customs and celebrations to modern interpretations that keep cultural heritage alive."
          },
          norwegianWoodCarving: {
            title: "Norwegian Wood Carving Art",
            excerpt: "An in-depth look at the traditional Norwegian craft of wood carving, its historical significance, and how modern artisans keep this cultural jewel alive."
          },
          arcticWildlifePolarBears: {
            title: "Arctic Wildlife: Safe Encounters with Polar Bears",
            excerpt: "The essential safety guide for wildlife watching in Svalbard. Learn how to observe Arctic animals in their natural habitat respectfully while staying safe."
          }
        }
      }
    }
  },

  no: {
    translation: {
      nav: {
        home: 'Hjem',
        trips: 'Våre Turer',
        destinations: 'Destinasjoner',
        gallery: 'Galleri',
        journal: 'Journal',
        about: 'Om Oss',
        contact: 'Kontakt'
      },

      hero: {
        title: 'Opplev Arktis',
        subtitle: 'Oppdag den uberørte skjønnheten i polområdene med våre eksklusive ekspedisjoner',
        cta: 'Utforsk Ekspedisjoner',
        ctaSecondary: 'Se Galleri'
      },

      featured: {
        title: 'Utvalgte Ekspedisjoner',
        duration: 'Varighet',
        days: 'dager',
        from: 'Fra',
        learnMore: 'Les Mer',
        bookNow: 'Bestill Nå'
      },
      
      carousel: {
        title: 'Arktiske Opplevelser',
        northernLights: {
          title: 'Nordlysekspedisjon',
          description: 'Opplev det fantastiske nordlyset i uberørt arktisk villmark. Våre ekspertguider tar deg til de beste observasjonsstedene langt unna lysforurensning. Lær om vitenskapen og folklore bak dette naturfenomenet mens du nyter varme drikker under stjernehimmelen.'
        },
        fjordTour: {
          title: 'Norsk Fjordoppdagelse',
          description: 'Reis gjennom Norges mest spektakulære fjorder med tårnhøye klipper, fossende vannfall og krystallklart vann. Våre naturskjønne ruter inkluderer Geirangerfjorden og Nærøyfjorden, begge UNESCOs verdensarvsteder. Oppdag skjulte landsbyer og gamle vikingsamfunn underveis.'
        },
        auroraBorealis: {
          title: 'Aurora Borealis Magi',
          description: 'Opplev den eteriske dansen til nordlyset over Norges arktiske himmel.'
        },
        polarBear: {
          title: 'Isbjørnenes Rike',
          description: 'Møt arktisk dyreliv i deres naturlige habitat med våre spesialiserte guider.'
        },
        polarBearExpedition: {
          title: 'Isbjørne Ekspedisjon',
          description: 'Bli med på våre fotografiturer for å se isbjørner i villmarken.'
        },
        majesticFjords: {
          title: 'Majestetiske Norske Fjorder',
          description: 'Seil gjennom dramatiske landskap hvor tårnhøye klipper møter krystallklart vann.'
        },
        fjordCruise: {
          title: 'Norsk Fjord Cruise',
          description: 'Opplev den fantastiske skjønnheten i Norges berømte fjorder.'
        },
        scenicFjords: {
          title: 'Sceniske Fjord Eventyr',
          description: 'Utforsk Norges mest pustende fjorder med ekspert lokale guider.'
        },
        categories: {
          northernLights: 'Nordlys',
          wildlife: 'Arktisk Dyreliv',
          fjords: 'Fjordturer'
        }
      },
      
      home: {
        hero: {
          title: 'Arktisk Norge Venter',
          subtitle: 'Opplev den rå skjønnheten til nordlige liv og arktisk dyreliv i deres naturlige habitat'
        },
        experiences: {
          title: 'Uforglemmelige Norske Opplevelser',
          description: 'Oppdag Arktis mest fantastiske underverker gjennom våre nøye utvalgte ekspedisjoner. Fra dansende nordlys til majestetiske fjorder og uberørt villmark, skap minner som varer livet ut i Norges mest spektakulære destinasjoner.',
          northernLights: {
            title: 'Jakten på Nordlyset',
            description: 'Overvær det magiske nordlyset som danser over den arktiske himmelen på optimale observasjonssteder med ekspertveiledning og fotografitips.'
          },
          fjords: {
            title: 'Utforsk Arktiske Fjorder',
            description: 'Naviger gjennom Norges mest spektakulære fjorder med båt, kajakk eller til fots. Opplev dramatiske landskap og uberørt natur.'
          },
          wildlife: {
            title: 'Arktisk Dyreliv',
            description: 'Kom tett på arktisk dyreliv inkludert reinsdyr, sel og sjøfugl i deres naturlige habitat med ansvarlige og etiske turer.'
          }
        },
        why: {
          title: 'Hvorfor Velge White Horizon'
        },
        features: {
          excellence: {
            title: '15+ År med Eksellens',
            description: 'Med over 15 års erfaring innen arktisk turisme har vi perfeksjonert kunsten å skape uforglemmelige ekspedisjoner. Vår dype kunnskap om regionen sikrer at du opplever det aller beste av Arktis.'
          },
          guides: {
            title: 'Sertifiserte Ekspertguider',
            description: 'Våre guider er sertifiserte profesjonelle med omfattende opplæring i villmarkssikkerhet, fotografering og arktisk økologi. De er lidenskapelige om å dele sin kunnskap og sikre din sikkerhet gjennom hele reisen.'
          },
          sustainable: {
            title: 'Bærekraftig Turisme',
            description: 'Vi er forpliktet til å bevare Arktis uberørte skjønnhet. Våre turer følger strenge miljøretningslinjer, bruker miljøvennlige kjøretøy og støtter lokale bevaringsinnsatser for å beskytte dette skjøre økosystemet.'
          }
        },
        adventure: {
          title: 'Klar for Ditt Arktiske Eventyr?',
          description: 'Bli med tusenvis av fornøyde reisende som har opplevd magien i Arktis med White Horizon Expedition.',
          cta: 'Start planleggingen av din uforglemmelige reise i dag.',
          button: 'Bestill ditt Arktiske Eventyr',
          gallery: 'Se Galleri',
          contact: 'Kontakt Oss'
        }
      },
      
      journal: {
        title: 'Horizon Reisejournal',
        subtitle: 'Oppdag inspirerende historier, eksperttips og fantastisk fotografi fra våre arktiske ekspedisjoner',
        allArticles: 'Alle Artikler',
        readTime: 'min lesetid',
        updated: 'Oppdatert',
        categories: {
          adventure: 'Eventyr',
          photography: 'Fotografi',
          wildlife: 'Dyreliv',
          food: 'Mat',
          culture: 'Kultur',
          destinations: 'Destinasjoner',
          safety: 'Sikkerhet'
        },
        featured: {
          title: 'Vinter i Nord-Norge: En Komplett Sikkerhetsguide',
          description: 'Planlegger du ditt første arktiske eventyr? Denne omfattende guiden dekker alt fra klesessensialer til nødprosedyrer. Lær hvordan du holder deg trygg mens du opplever magien i Norges arktiske vinter, inkludert nordlysvisning, hundekjøring og isfiske. Skrevet av vårt team av sertifiserte arktiske guider med over 50 års kombinert erfaring.'
        },
        safety: {
          professionalGuides: 'Profesjonelle Guider',
          professionalGuidesDesc: 'Våre sertifiserte arktiske guider har over 50 års kombinert erfaring i Norges villmark. De er opplært i førstehjelp, navigasjon og nødrespons for å sikre din sikkerhet gjennom hele eventyret.',
          weatherSafety: 'Værsikkerhet',
          weatherSafetyDesc: 'Arktisk vær kan endre seg raskt. Vi overvåker forhold 24/7 og gir sanntidsoppdateringer. Lær å lese værmønstre og forstå når du skal utsette aktiviteter for din sikkerhet.',
          emergencyContacts: 'Nødnumre',
          emergencyContactsDesc: 'Alltid bær nødnumre inkludert lokale redningstjenester, vår 24/7 støttelinje og nærmeste medisinske fasiliteter. Vi gir satellittelefoner for fjernekspedisjoner.',
          gearRecommendations: 'Utstyrsanbefalinger',
          gearRecommendationsDesc: 'Essensielt arktisk utstyr inkluderer termiske lag, vanntett yttertøy, isolerte støvler og nødforsyninger. Vi gir detaljerte pakkelister og kan leie spesialisert utstyr.'
        },
        articles: {
          northernLightsPhotography: {
            title: 'Nordlys Fotografering Masterclass',
            excerpt: 'Fang det flyktige Aurora Borealis med ekspertteknikker og kamerainnstillinger for fantastisk natthimmelfotografering.'
          },
          tromsoWinterGuide: {
            title: 'Vinterguide for Tromsø',
            excerpt: 'En omfattende guide til å utforske Tromsø om vinteren, inkludert de beste stedene for nordlysvisning og vinteraktiviteter.'
          },
          samiCulture: {
            title: 'Samisk Kultur',
            excerpt: 'Utforsk den rike kulturen til det samiske folket, Norges urbefolkning i nord, og deres gamle tradisjoner.'
          },
          norwegianFolkTraditions: {
            title: 'Norske Folketradisjoner',
            excerpt: 'Utforsk gamle norske folketradisjoner og sesongbaserte feiringer.'
          },
          norwegianWoodCarving: {
            title: 'Norsk Treskjæring',
            excerpt: 'Oppdag den tradisjonelle norske kunsten å skjære i tre og dens rike historie.'
          },
          arcticWildlifePolarBears: {
            title: 'Arktisk Dyreliv: Isbjørner og Mer',
            excerpt: 'Oppdag Norges utrolige arktiske dyreliv fra majestetiske isbjørner til flyktige arktiske rever i deres naturlige habitat.'
          },
          arcticCuisine: {
            title: 'Arktisk Kjøkken: Tradisjonelle Samiske Retter',
            excerpt: 'Utforsk autentiske samiske reinsdyrstuer og andre tradisjonelle arktiske retter som varmer sjelen i Norges frosne nord.'
          },
          traditionalNorwegianDishes: {
            title: 'Tradisjonell Norsk Matguide',
            excerpt: 'Nyt Norges klassiske retter fra hjerterike fiskesupper til søte multebærdesserter som definerer nordisk kjøkken.'
          },
          lutefisk: {
            title: 'Lutefisk: Norges Kontroversielle Delikatesse',
            excerpt: 'Dyk ned i verden av lutefisk, Norges tradisjonelle tørkede fiskerett som deler meninger men definerer arv.'
          },
          arcticExpeditionPhotography: {
            title: 'Arktisk Ekspedisjonsfotografering Tips',
            excerpt: 'Mester kunsten å fange Norges harde arktiske landskap med profesjonelle fotografiteknikker og utstyrsanbefalinger.'
          },
          wildlifeWatchingTromso: {
            title: 'Villdyrvakting i Tromsø',
            excerpt: 'Se hvaler, ørner og arktisk villdyr i Tromsøs uberørte fjorder med ekspertguider og de beste observasjonsstedene.'
          },
          dangerousViewpoints: {
            title: 'Norges Farligste Utsiktspunkter',
            excerpt: 'Oppdag hjertestoppende fjordutsikter og farlige fjellformasjoner som tester din mot med uforglemmelige utsikter.'
          },
          fjordCamping: {
            title: 'Fjord-side Camping Guide',
            excerpt: 'Mester kunsten å campe i villmarken i Norges uberørte fjorder med essensielt utstyr og sikkerhetstips.'
          },
          hikingTrails: {
            title: 'Norges Episke Vandringsstier',
            excerpt: 'Utforsk spektakulære stier fra milde innsjøvandringer til utfordrende fjellklatring med turkise innsjøer og snødekte topper.'
          },
          northernLightsGuide: {
            title: 'Nordlys Eventyr Guide',
            excerpt: 'Opplev magien til Aurora Borealis med de beste observasjonsstedene og fotografitips for naturens spektakulære lysshow.'
          }
        }
      },
      
      trip: {
        overview: 'Oversikt',
        itinerary: 'Detaljert Reiserute',
        includes: 'Inkludert',
        map: 'Interaktivt Kart',
        reviews: 'Anmeldelser',
        price: 'Pris',
        perPerson: 'per person',
        dates: 'Tilgjengelige Datoer',
        bookNow: 'Bestill Denne Ekspedisjonen',
        enquire: 'Forespørsel'
      },
      
      booking: {
        title: 'Bestill Ditt Arktiske Eventyr',
        personalInfo: 'Personlig Informasjon',
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'E-postadresse',
        phone: 'Telefonnummer',
        country: 'Land',
        date: 'Foretrukken Dato',
        adults: 'Voksne',
        children: 'Barn',
        specialRequests: 'Spesielle Ønsker',
        totalPrice: 'Totalpris',
        submit: 'Fullfør Bestilling',
        processing: 'Behandler...',
        success: 'Bestilling bekreftet! Vi kontakter deg snart.',
        error: 'Bestilling mislyktes. Prøv igjen.'
      },
      
      validation: {
        required: 'Dette feltet er påkrevd',
        email: 'Vennligst oppgi en gyldig e-postadresse',
        phone: 'Vennligst oppgi et gyldig telefonnummer',
        minLength: 'Må være minst {{count}} tegn'
      },
      
      gallery: {
        title: 'Arktisk Galleri',
        subtitle: 'Utforsk vår fantastiske samling av arktisk fotografi'
      },
      
      footer: {
        about: {
          title: 'Om White Horizon',
          description: 'Oppdag Arktis med ekspertguider og bærekraftige reiseopplevelser som skaper minner for livet.'
        },
        explore: {
          title: 'Utforsk Eventyr',
          trips: 'Våre Ekspedisjoner',
          gallery: 'Bildegalleri',
          about: 'Om Oss',
          blog: 'Reisejournal'
        },
        support: {
          title: 'Støtte & Hjelp',
          contact: 'Kontakt Oss',
          faq: 'Ofte Stilte Spørsmål',
          terms: 'Vilkår og Betingelser',
          privacy: 'Personvern'
        },
        contact: {
          title: 'Kontaktinformasjon',
          address: 'Adresse',
          addressDetail: 'Tromsø, Nord-Norge',
          phone: 'Telefon',
          email: 'E-post'
        },
        copyright: 'Alle rettigheter reservert.'
      },
      
      about: {
        title: 'Om White Horizon Expedition',
        subtitle: 'Å oppdage Arktis gjennom bærekraftige, ekspertstyrte eventyr som skaper minner for livet',
        story: {
          title: 'Vår Historie',
          paragraph1: 'Grunnlagt i 2015 av et team av arktiske entusiaster og sertifiserte guider, White Horizon Expedition oppsto fra en felles lidenskap for den uberørte skjønnheten i Nord-Norge. Det som begynte som små gruppeekspedisjoner har vokst til et ledende arktisk eventyrfirma, samtidig som vi opprettholder vårt engasjement for bærekraftig turisme og autentiske opplevelser.',
          paragraph2: 'Basert i Tromsø, "Porten til Arktis", spesialiserer vi oss på å skape intime, nøye kuraterte ekspedisjoner som viser den rå majestetiske Arktis samtidig som vi respekterer dens delikate økosystem. Vår dype lokale kunnskap og partnerskap med urfolkssamfunn sikrer at hver reise er både lærerik og transformerende.'
        },
        values: {
          title: 'Våre Verdier',
          sustainability: 'Bærekraft Først',
          sustainabilityDesc: 'Vi opererer med karbonnøytral transport, støtter lokalsamfunn og følger strenge Leave No Trace-prinsipper for å bevare Arktis for fremtidige generasjoner.',
          expertise: 'Ekspertkunnskap',
          expertiseDesc: 'Våre guider er sertifiserte arktiske spesialister med omfattende opplæring i villmarkssikkerhet, nordlysfotografering og lokal kultur, og sikrer trygge og berikende opplevelser.',
          authenticity: 'Autentiske Forbindelser',
          authenticityDesc: 'Vi fremmer ekte forbindelser mellom reisende og det arktiske miljøet, og skaper meningsfulle opplevelser som går utover typisk turisme.',
          smallGroups: 'Små Grupper',
          smallGroupsDesc: 'Vi opprettholder intime gruppestørrelser for å sikre personlig oppmerksomhet, minimere miljøpåvirkning og gi autentiske møter med arktisk natur.'
        },
        whyChoose: {
          title: 'Hvorfor Velge Oss',
          localExpertise: 'Lokal Ekspertise',
          localExpertiseDesc: 'Vårt team består av innfødte nordmenn og langtidsboende som besitter intim kunnskap om arktiske forhold, værforhold og skjulte perler som bare lokale kjenner.',
          safety: 'Sikkerhetseksellens',
          safetyDesc: 'Alle guider er sertifisert i villmarks førstehjelp, arktiske overlevelsesteknikker og nødhåndtering. Vi opprettholder omfattende sikkerhetsprotokoller og utstyr.',
          photography: 'Fotograferingsfokus',
          photographyDesc: 'Profesjonell fotograferingsveiledning inkludert i hver ekspedisjon. Lær å fange nordlyset, arktisk dyreliv og dramatiske landskaper med eksperttips.',
          culture: 'Kulturell Fordypning',
          cultureDesc: 'Opplev autentisk samisk kultur gjennom partnerskap med lokalsamfunn. Lær tradisjonelle arktiske overlevelsesferdigheter og urfolkskunnskap.'
        },
        tours: {
          title: 'Våre Turvalg',
          premiumBus: {
            title: 'Premium Busturer',
            description: 'Opplev Arktis i ultimat komfort med våre luksuriøse busturer. Med oppvarmede panoramiske kjøretøy, ekspertkommentarer og strategiske stopp på de mest spektakulære stedene. Perfekt for grupper og familier.'
          },
          private: {
            title: 'Eksklusive Private Turer',
            description: 'Skap ditt eget arktiske eventyr med våre eksklusive private turer. Nyt personlige reiseruter, fleksibel planlegging og dedikert oppmerksomhet fra våre ekspertguider. Perfekt for intime nordlysopplevelser.'
          },
          smallGroup: {
            title: 'Små Gruppeeventyr',
            description: 'Bli med likesinnede eventyrere i våre nøye kuraterte små gruppeturer. Opplev Arktis med personlig oppmerksomhet mens du deler underverkene med andre eventyrere. Maksimalt 8 personer per gruppe.'
          },
          luxury: {
            title: 'Luksuriøse Arktiske Opplevelser',
            description: 'Unn deg den ultimate arktiske opplevelsen med våre luksuriøse turalternativer. Overnatting i premium overnattingssteder, nyt gourmetmåltider og reis med stil mens du utforsker den uberørte villmarken i Nord-Norge.'
          }
        }
      },
      
      contact: {
        title: 'Kontakt White Horizon Expedition',
        subtitle: 'Har du et spørsmål eller er klar til å planlegge ditt arktiske eventyr? Send oss en melding og vårt team vil kontakte deg snart.',
        form: {
          title: 'Send oss en melding',
          name: 'Fullt Navn*',
          email: 'E-post*',
          subject: 'Emne',
          message: 'Melding*',
          submit: 'Send Melding',
          sending: 'Sender...',
          success: 'Meldingen din er sendt! Vi kontakter deg innen 24 timer.',
          error: 'Kunne ikke sende melding. Vennligst prøv igjen eller kontakt oss direkte.'
        },
        info: {
          title: 'Kontaktinformasjon',
          address: {
            title: 'Besøk oss',
            street: 'Storgata 15',
            city: 'Tromsø, Norge',
            postal: '9008'
          },
          phone: {
            title: 'Ring oss',
            number: '+47 123 456 789',
            hours: 'Man–Fre: 9:00–18:00 CET'
          },
          email: {
            title: 'E-postforespørsel',
            address: 'whitehorizenexpedition@gmail.com',
            response: 'Svar innen 24 timer'
          }
        }
      },
      
      gallery: {
        title: 'Arktisk Galleri',
        subtitle: 'Oppdag vår fantastiske samling av arktisk fotografering',
        filterAll: 'Alle',
        filterWildlife: 'Dyreliv',
        filterLandscapes: 'Landskap',
        filterAurora: 'Aurora',
        filterExpeditions: 'Ekspedisjoner',
        filterIcebergs: 'Isfjell'
      },
      
      features: {
        title: 'Om White Horizon Ekspedisjon',
        subtitle: 'Å oppdage Arktis gjennom bærekraftige, ekspertstyrte eventyr som skaper minner for livet',
        story: {
          title: 'Vår Historie',
          paragraph1: 'Grunnlagt i 2015 av et team av arktiske entusiaster og sertifiserte guider, vokste White Horizon Ekspedisjon frem fra en felles lidenskap for Nord-Norges uberørte skjønnhet. Det som begynte som små gruppeekspedisjoner har vokst til et førsteklasses arktisk eventyrfirma, mens vi har opprettholdt vårt engasjement for bærekraftig turisme og autentiske opplevelser.',
          paragraph2: 'Basert i Tromsø, "Porten til Arktis", spesialiserer vi oss på å skape intime, nøye utformede ekspedisjoner som viser frem den rå majesteten til Arktis samtidig som vi respekterer dens delikate økosystem. Vår dype lokalkunnskap og partnerskap med urbefolkningssamfunn sikrer at hver reise er både lærerik og transformerende.'
        },
        values: {
          title: 'Våre Verdier',
          sustainability: 'Bærekraft Først',
          sustainabilityDesc: 'Vi opererer med karbonnøytral transport, støtter lokalsamfunn og følger strenge Leave No Trace-prinsipper for å bevare Arktis for fremtidige generasjoner.',
          expertise: 'Ekspertkunnskap',
          expertiseDesc: 'Våre guider er sertifiserte arktiske spesialister med omfattende opplæring i villmarkssikkerhet, nordlysfotografering og lokal kultur, og sikrer trygge og berikende opplevelser.',
          authenticity: 'Autentiske Forbindelser',
          authenticityDesc: 'Vi fremmer ekte forbindelser mellom reisende og det arktiske miljøet, og skaper meningsfulle opplevelser som går utover typisk turisme.',
          smallGroups: 'Små Grupper',
          smallGroupsDesc: 'Vi opprettholder intime grupper for å sikre personlig oppmerksomhet, minimere miljøpåvirkning og gi autentiske møter med arktisk natur.'
        },
        whyChoose: {
          title: 'Hvorfor Velge Oss',
          localExpertise: 'Lokal Ekspertise',
          localExpertiseDesc: 'Vårt team består av innfødte nordmenn og langtidsbosatte som besitter intim kunnskap om arktiske forhold, værmønstre og skjulte perler som bare lokale kjenner.',
          safety: 'Sikkerhetsutmerkelse',
          safetyDesc: 'Alle guider er sertifisert i villmarks førstehjelp, arktiske overlevelsesteknikker og nødrespons. Vi opprettholder omfattende sikkerhetsprotokoller og utstyr.',
          photography: 'Fotograferingsfokus',
          photographyDesc: 'Profesjonell fotograferingsveiledning inkludert i hver ekspedisjon. Lær å fange nordlyset, arktisk dyreliv og dramatiske landskap med eksperttips.',
          culture: 'Kulturell Fordypning',
          cultureDesc: 'Opplev autentisk samisk kultur gjennom partnerskap med lokalsamfunn. Lær tradisjonelle arktiske overlevelsesferdigheter og urfolkskunnskap.'
        },
        tours: {
          title: 'Våre Turvalg',
          premiumBus: {
            title: 'Premium Busturer',
            description: 'Opplev Arktis i ultimat komfort med våre luksuriøse busturer. Med oppvarmede panoramakjøretøy, ekspertkommentarer og strategiske stopp ved de mest spektakulære stedene. Perfekt for grupper og familier.'
          },
          private: {
            title: 'Eksklusive Private Turer',
            description: 'Skap ditt eget arktiske eventyr med våre eksklusive private turer. Nyt personlige reiseruter, fleksibel planlegging og dedikert oppmerksomhet fra våre ekspertguider. Perfekt for intime nordlysopplevelser.'
          },
          smallGroup: {
            title: 'Små Gruppeekspedisjoner',
            description: 'Våre signatur små gruppeturer tilbyr den perfekte balansen mellom personlig service og delte opplevelser. Begrenset til 6-8 deltakere for autentiske arktiske møter med minimal miljøpåvirkning.'
          },
          luxury: {
            title: 'Luksuriøse Arktiske Opplevelser',
            description: 'Nyt premium arktiske eventyr med våre luksuriøse turvalg. Med privat transport, gourmetmåltider, luksuriøse overnattinger og eksklusiv tilgang til avsidesliggende steder. Opplev Arktis i uovertruffen stil.'
          }
        }
      },
      
      features: {
        expertGuide: {
          title: 'Ekspertguide',
          description: 'Profesjonelle arktiske guider med 10+ års erfaring, sertifisert i villmarks førstehjelp og nordlysfotografering. Få insiderkunnskap og sikkerhetsekspertise.'
        },
        privateTaxi: {
          title: 'Privat Transport',
          description: 'Komfortabel privat transport med oppvarmede kjøretøy, fleksibel planlegging og dør-til-dør-service. Reis i varme og stil til de beste observasjonsstedene.'
        },
        sustainableTravel: {
          title: 'Bærekraftig Reise',
          description: 'Karbonnøytrale turer med elektriske kjøretøy, støtte til lokalsamfunn og etterlevelse av Leave No Trace-prinsipper. Reis ansvarlig i Arktis.'
        },
        photographyFocus: {
          title: 'Fotograferingsfokus',
          description: 'Profesjonell fotograferingsveiledning, utstyranbefalinger og optimal timing for å fange det perfekte nordlyset og fjordbilder. Ta med deg fantastiske minner hjem.'
        }
      }
    }
  },
  
  de: {
    translation: {
      nav: {
        home: 'Start',
        trips: 'Unsere Reisen',
        destinations: 'Ziele',
        gallery: 'Galerie',
        journal: 'Journal',
        about: 'Über Uns',
        contact: 'Kontakt'
      },
      
      hero: {
        title: 'Erleben Sie die Arktis',
        subtitle: 'Entdecken Sie die unberührte Schönheit der Polargebiete mit unseren exklusiven Expeditionen',
        cta: 'Expeditionen Erkunden',
        ctaSecondary: 'Galerie Ansehen'
      },
      
      featured: {
        title: 'Ausgewählte Expeditionen',
        duration: 'Dauer',
        days: 'Tage',
        from: 'Ab',
        learnMore: 'Mehr Erfahren',
        bookNow: 'Jetzt Buchen'
      },
      
      trip: {
        overview: 'Übersicht',
        itinerary: 'Detaillierte Reiseroute',
        includes: 'Enthalten',
        map: 'Interaktive Karte',
        reviews: 'Bewertungen',
        price: 'Preis',
        perPerson: 'pro Person',
        dates: 'Verfügbare Termine',
        bookNow: 'Diese Expedition Buchen',
        enquire: 'Anfrage'
      },
      
      booking: {
        title: 'Buchen Sie Ihr Arktisches Abenteuer',
        personalInfo: 'Persönliche Informationen',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        country: 'Land',
        date: 'Bevorzugtes Datum',
        adults: 'Erwachsene',
        children: 'Kinder',
        specialRequests: 'Besondere Wünsche',
        totalPrice: 'Gesamtpreis',
        submit: 'Buchung Abschließen',
        processing: 'Verarbeitung...',
        success: 'Buchung bestätigt! Wir kontaktieren Sie in Kürze.',
        error: 'Buchung fehlgeschlagen. Bitte versuchen Sie es erneut.'
      },
      
      validation: {
        required: 'Dieses Feld ist erforderlich',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        phone: 'Bitte geben Sie eine gültige Telefonnummer ein',
        minLength: 'Muss mindestens {{count}} Zeichen lang sein'
      },
      
      gallery: {
        title: 'Arktis Galerie',
        subtitle: 'Entdecken Sie unsere atemberaubende Sammlung von Arktisfotografie',
        filterAll: 'Alle',
        filterWildlife: 'Tierwelt',
        filterLandscapes: 'Landschaften',
        filterShips: 'Expeditionsschiffe'
      },
      
      footer: {
        about: {
          title: 'Über White Horizon',
          description: 'Entdecken Sie die Arktis mit Expertenguides und nachhaltigen Reiseerlebnissen, die Erinnerungen fürs Leben schaffen.'
        },
        explore: {
          title: 'Abenteuer Entdecken',
          trips: 'Unsere Expeditionen',
          gallery: 'Fotogalerie',
          about: 'Über Uns',
          blog: 'Reisetagebuch'
        },
        support: {
          title: 'Support & Hilfe',
          contact: 'Kontakt',
          faq: 'Häufige Fragen',
          terms: 'Allgemeine Geschäftsbedingungen',
          privacy: 'Datenschutz'
        },
        contact: {
          title: 'Kontaktinformationen',
          address: 'Adresse',
          addressDetail: 'Tromsø, Nord-Norwegen',
          phone: 'Telefon',
          email: 'E-Mail'
        },
        copyright: 'Alle Rechte vorbehalten.'
      },
      
      carousel: {
        title: 'Arktische Erlebnisse',
        northernLights: {
          title: 'Polarlicht-Expedition',
          description: 'Erleben Sie das atemberaubende Polarlicht in unberührter arktischer Wildnis. Unsere Expertenguides bringen Sie zu den besten Beobachtungsorten fernab jeglicher Lichtverschmutzung. Erfahren Sie mehr über die Wissenschaft und Folklore hinter diesem Naturphänomen, während Sie warme Getränke unter dem Sternenhimmel genießen.'
        },
        fjordTour: {
          title: 'Norwegische Fjord-Entdeckung',
          description: 'Reisen Sie durch Norwegens spektakulärste Fjorde mit turmhohen Klippen, rauschenden Wasserfällen und kristallklarem Wasser. Unsere landschaftlich schönen Routen umfassen den Geirangerfjord und den Nærøyfjord, beides UNESCO-Welterbestätten. Entdecken Sie versteckte Dörfer und alte Wikinger-Siedlungen auf dem Weg.'
        }
      },
      
      journal: {
        title: 'Horizon Reisejournal',
        subtitle: 'Entdecken Sie inspirierende Geschichten, Experten-Tipps und atemberaubende Fotografie von unseren Arktis-Expeditionen',
        allArticles: 'Alle Artikel',
        readTime: 'Min. Lesezeit',
        updated: 'Aktualisiert',
        categories: {
          adventure: 'Abenteuer',
          photography: 'Fotografie',
          wildlife: 'Tierwelt',
          food: 'Essen',
          culture: 'Kultur',
          destinations: 'Ziele',
          safety: 'Sicherheit'
        },
        featured: {
          title: 'Winter in Nordnorwegen: Ein vollständiger Sicherheitsführer',
          description: 'Planen Sie Ihr erstes arktisches Abenteuer? Dieser umfassende Führer deckt alles ab, von Kleidungsgrundlagen bis hin zu Notfallprotokollen. Lernen Sie, wie Sie sicher bleiben, während Sie die Magie des norwegischen arktischen Winters erleben, einschließlich Polarlichterbeobachtung, Hundeschlittenfahren und Eisfischen. Geschrieben von unserem Team zertifizierter arktischer Guides mit über 50 Jahren kombinierter Erfahrung.'
        },
        safety: {
          professionalGuides: 'Professionelle Guides',
          professionalGuidesDesc: 'Unsere zertifizierten arktischen Guides haben über 50 Jahre kombinierte Erfahrung in Norwegens Wildnis. Sie sind ausgebildet in Erster Hilfe, Navigation und Notfallreaktion, um Ihre Sicherheit während Ihres gesamten Abenteuers zu gewährleisten.',
          weatherSafety: 'Wettersicherheit',
          weatherSafetyDesc: 'Arktisches Wetter kann sich schnell ändern. Wir überwachen die Bedingungen 24/7 und liefern Echtzeit-Updates. Lernen Sie, Wettermuster zu lesen und zu verstehen, wann Sie Aktivitäten für Ihre Sicherheit verschieben sollten.',
          emergencyContacts: 'Notfallkontakte',
          emergencyContactsDesc: 'Tragen Sie immer Notfallnummern bei sich, einschließlich lokaler Rettungsdienste, unserer 24/7-Support-Hotline und der nächstgelegenen medizinischen Einrichtungen. Wir stellen Satellitentelefone für entfernte Expeditionen zur Verfügung.',
          gearRecommendations: 'Ausrüstungsempfehlungen',
          gearRecommendationsDesc: 'Wesentliche arktische Ausrüstung umfasst thermische Schichten, wasserdichte Außenkleidung, isolierte Stiefel und Notfallausrüstung. Wir stellen detaillierte Packlisten zur Verfügung und können spezialisierte Ausrüstung vermieten.'
        },
        articles: {
          northernLightsPhotography: {
            title: 'Nordlicht-Fotografie-Meisterkurs',
            excerpt: 'Fangen Sie das flüchtige Aurora Borealis mit Experten-Techniken und Kameraeinstellungen für atemberaubende Nachthimmelfotografie ein.'
          },
          tromsoWinterGuide: {
            title: 'Tromsø Winter Guide',
            excerpt: 'Ein umfassender Guide zur Erkundung von Tromsø im Winter, einschließlich der besten Nordlicht-Beobachtungsplätze und Winteraktivitäten.'
          },
          samiCulture: {
            title: 'Sami-Kultur',
            excerpt: 'Entdecken Sie die reiche Kultur des samischen Volkes, Norwegens indigene Bevölkerung im Norden, und ihre alten Traditionen.'
          },
          norwegianFolkTraditions: {
            title: 'Norwegische Volkstraditionen',
            excerpt: 'Erkunden Sie alte norwegische Volkstraditionen und saisonale Feiern.'
          },
          norwegianWoodCarving: {
            title: 'Norwegische Holzschnitzerei',
            excerpt: 'Entdecken Sie die traditionelle norwegische Kunst der Holzschnitzerei und ihre reiche Geschichte.'
          },
          arcticWildlifePolarBears: {
            title: 'Arktische Tierwelt: Eisbären und mehr',
            excerpt: 'Entdecken Sie Norwegens unglaubliche arktische Tierwelt von majestätischen Eisbären bis hin zu flüchtigen arktischen Füchsen in ihrem natürlichen Lebensraum.'
          },
          arcticCuisine: {
            title: 'Arktische Küche: Traditionelle Sami-Gerichte',
            excerpt: 'Entdecken Sie authentische samische Rentier-Eintöpfe und andere traditionelle arktische Gerichte, die die Seele in Norwegens gefrorenem Norden wärmen.'
          },
          traditionalNorwegianDishes: {
            title: 'Traditioneller Norwegischer Speiseführer',
            excerpt: 'Genießen Sie Norwegens klassische Gerichte von herzhaften Fischsuppen bis hin zu süßen Moltebeer-Desserts, die die nordische Küche definieren.'
          },
          lutefisk: {
            title: 'Lutefisk: Norwegens kontroversielle Delikatesse',
            excerpt: 'Tauchen Sie ein in die Welt des Lutefisk, Norwegens traditioneller getrockneter Fischgericht, das Meinungen spaltet, aber das Erbe definiert.'
          },
          arcticExpeditionPhotography: {
            title: 'Arktische Expeditionsfotografie-Tipps',
            excerpt: 'Meistern Sie die Kunst, Norwegens raue arktische Landschaften mit professionellen Fotografietechniken und Ausrüstungsempfehlungen einzufangen.'
          },
          wildlifeWatchingTromso: {
            title: 'Wildtierbeobachtung in Tromsø',
            excerpt: 'Beobachten Sie Wale, Adler und arktische Wildtiere in Tromsøs unberührten Fjorden mit Expertenführern und den besten Beobachtungsplätzen.'
          },
          dangerousViewpoints: {
            title: 'Norwegens gefährlichste Aussichtspunkte',
            excerpt: 'Entdecken Sie atemberaubende Fjordausblicke und gefährliche Felsformationen, die Ihren Mut mit unvergesslichen Aussichten testen.'
          },
          fjordCamping: {
            title: 'Fjord-Camping-Guide',
            excerpt: 'Meistern Sie die Kunst des Wildniscampings in Norwegens unberührten Fjorden mit essentieller Ausrüstung und Sicherheitstipps.'
          },
          hikingTrails: {
            title: 'Norwegens epische Wanderwege',
            excerpt: 'Erkunden Sie spektakuläre Wege von sanften Seeuferwanderungen bis hin zu herausfordernden Bergbesteigungen mit türkisfarbenen Seen und schneebedeckten Gipfeln.'
          },
          northernLightsGuide: {
            title: 'Nordlicht-Abenteuer-Guide',
            excerpt: 'Erleben Sie die Magie der Aurora Borealis mit den besten Beobachtungsplätzen und Fotografietipps für die spektakuläre Lichtshow der Natur.'
          }
        }
      },
      
      why: {
        title: 'Warum White Horizon Expedition'
      },
      
      features: {
        expertGuide: {
          title: 'Expert Guide',
          description: 'Professionelle arktische Guides mit über 10 Jahren Erfahrung, zertifiziert in Wildnis-Ersthilfe und Polarlicht-Fotografie. Erhalten Sie Insiderwissen und Sicherheitsexpertise.'
        },
        privateTaxi: {
          title: 'Privater Taxi',
          description: 'Komfortabler privater Transport mit beheizten Fahrzeugen, flexibler Planung und Tür-zu-Tür-Service. Reisen Sie in Wärme und Stil zu den besten Beobachtungsorten.'
        },
        sustainableTravel: {
          title: 'Nachhaltiges Reisen',
          description: 'Kohlenstoffneutrale Touren mit Elektrofahrzeugen, Unterstützung lokaler Gemeinschaften und Einhaltung der Leave No Trace-Prinzipien. Reisen Sie verantwortungsvoll in der Arktis.'
        },
        photographyFocus: {
          title: 'Fotografie-Fokus',
          description: 'Professionelle Fotografie-Anleitung, Ausrüstungsempfehlungen und optimale Zeitplanung für die perfekten Polarlicht- und Fjord-Aufnahmen. Nehmen Sie atemberaubende Erinnerungen mit nach Hause.'
        }
      },
      
      about: {
        title: 'Über White Horizon Expedition',
        subtitle: 'Die Arktis durch nachhaltige, von Experten geführte Abenteuer entdecken, die Erinnerungen fürs Leben schaffen',
        story: {
          title: 'Unsere Geschichte',
          paragraph1: 'Gegründet 2015 von einem Team arktischer Enthusiasten und zertifizierter Guides, entstand die White Horizon Expedition aus einer gemeinsamen Leidenschaft für die unberührte Schönheit Nordnorwegens. Was als kleine Gruppenexpeditionen begann, ist zu einem erstklassigen arktischen Abenteuerunternehmen gewachsen und hat sich dabei stets dem nachhaltigen Tourismus und authentischen Erlebnissen verpflichtet.',
          paragraph2: 'Mit Sitz in Tromsø, dem "Tor zur Arktis", sind wir spezialisiert auf die Gestaltung intimer, sorgfältig kuratierter Expeditionen, die die rohe Majestät der Arktis zeigen und gleichzeitig ihr empfindliches Ökosystem respektieren. Unser tiefes lokales Wissen und Partnerschaften mit indigenen Gemeinschaften stellen sicher, dass jede Reise sowohl lehrreich als auch transformierend ist.'
        },
        values: {
          title: 'Unsere Werte',
          sustainability: 'Nachhaltigkeit Zuerst',
          sustainabilityDesc: 'Wir betreiben kohlenstoffneutrales Transportwesen, unterstützen lokale Gemeinschaften und folgen strengen Leave No Trace-Prinzipien, um die Arktis für zukünftige Generationen zu bewahren.',
          expertise: 'Expertenwissen',
          expertiseDesc: 'Unsere Guides sind zertifizierte Arktis-Spezialisten mit umfassender Ausbildung in Wildnis-Sicherheit, Polarlicht-Fotografie und lokaler Kultur, die sichere und bereichernde Erlebnisse garantieren.',
          authenticity: 'Authentische Verbindungen',
          authenticityDesc: 'Wir fördern echte Verbindungen zwischen Reisenden und der arktischen Umgebung und schaffen bedeutungsvolle Erlebnisse, die über den typischen Tourismus hinausgehen.',
          smallGroups: 'Kleine Gruppen',
          smallGroupsDesc: 'Wir pflegen intime Gruppengrößen, um persönliche Aufmerksamkeit zu gewährleisten, die Umweltauswirkungen zu minimieren und authentische Begegnungen mit der arktischen Natur zu ermöglichen.'
        },
        whyChoose: {
          title: 'Warum Uns Wählen',
          localExpertise: 'Lokale Expertise',
          localExpertiseDesc: 'Unser Team besteht aus gebürtigen Norwegern und Langzeit-Bewohnern, die intim Kenntnisse über arktische Bedingungen, Wettermuster und versteckte Juwelen haben, die nur Einheimische kennen.',
          safety: 'Sicherheitsexzellenz',
          safetyDesc: 'Alle Guides sind zertifiziert in Wildnis-Ersthilfe, arktischen Überlebenstechniken und Notfallreaktion. Wir pflegen umfassende Sicherheitsprotokolle und -ausrüstung.',
          photography: 'Fokus auf Fotografie',
          photographyDesc: 'Professionelle Fotografie-Anleitung ist in jeder Expedition enthalten. Lernen Sie, Polarlichter, arktische Tierwelt und dramatische Landschaften mit Expertentipps festzuhalten.',
          culture: 'Kulturelle Immersion',
          cultureDesc: 'Erleben Sie authentische Sami-Kultur durch Partnerschaften mit lokalen Gemeinschaften. Lernen Sie traditionelle arktische Überlebensfähigkeiten und indigenes Wissen.'
        },
        tours: {
          title: 'Unsere Touroptionen',
          premiumBus: {
            title: 'Premium-Bustouren',
            description: 'Erleben Sie die Arktis in ultimativen Komfort mit unseren Luxus-Bustouren. Mit beheizten Panoramafahrzeugen, Expertenkommentaren und strategischen Stopps an den spektakulärsten Orten. Perfekt für Gruppen und Familien.'
          },
          private: {
            title: 'Exklusive Privattouren',
            description: 'Gestalten Sie Ihr eigenes arktisches Abenteuer mit unseren exklusiven Privattouren. Genießen Sie personalisierte Reiserouten, flexible Planung und engagierte Aufmerksamkeit von unseren Expertenguides. Perfekt für intime Polarlichterlebnisse.'
          },
          smallGroup: {
            title: 'Kleine Gruppenabenteuer',
            description: 'Schließen Sie sich gleichgesinnten Abenteurern in unseren sorgfältig kuratierten Kleingruppen-Touren an. Erleben Sie die Arktis mit persönlicher Aufmerksamkeit und teilen Sie die Wunder mit Mitreisenden. Maximal 8 Personen pro Gruppe.'
          },
          luxury: {
            title: 'Luxus-Arktisexpeditionen',
            description: 'Verwöhnen Sie sich mit der ultimativen Arktis-Erfahrung mit unseren Luxus-Expeditionen. Übernachten Sie in Premium-Unterkünften, genießen Sie Gourmet-Mahlzeiten und reisen Sie stilvoll, während Sie die unberührte Wildnis Nordnorwegens erkunden.'
          }
        }
      },
      
      contact: {
        title: 'Kontakt White Horizon Expedition',
        subtitle: 'Haben Sie eine Frage oder sind Sie bereit, Ihr arktisches Abenteuer zu planen? Senden Sie uns eine Nachricht und unser Team wird sich in Kürze bei Ihnen melden.',
        form: {
          title: 'Senden Sie uns eine Nachricht',
          name: 'Vollständiger Name',
          email: 'E-Mail-Adresse',
          subject: 'Betreff',
          message: 'Nachricht',
          submit: 'Nachricht Senden',
          sending: 'Senden...',
          success: 'Nachricht erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
          error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
        },
        info: {
          title: 'Kontaktinformationen',
          address: {
            title: 'Besuchen Sie Uns',
            street: 'Storgata 15',
            city: 'Tromsø, Norwegen',
            postal: '9008'
          },
          phone: {
            title: 'Rufen Sie Uns An',
            number: '+47 123 456 789',
            hours: 'Mo–Fr: 9:00–18:00 MEZ'
          },
          email: {
            title: 'E-Mail-Anfrage',
            address: 'whitehorizenexpedition@gmail.com',
            response: 'Antwort innerhalb von 24 Stunden'
          }
        }
      }
    }
  },
  
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        trips: 'رحلاتنا',
        destinations: 'الوجهات',
        gallery: 'المعرض',
        journal: 'المجلة',
        about: 'معلومات عنا',
        contact: 'اتصل بنا'
      },

      hero: {
        title: 'اختبر القطب الشمالي',
        subtitle: 'اكتشف جمال المناطق القطبية النقي مع بعثاتنا الحصرية',
        cta: 'استكشاف الرحلات',
        ctaSecondary: 'عرض المعرض'
      },

      featured: {
        title: 'البعثات المميزة',
        duration: 'المدة',
        days: 'أيام',
        from: 'من',
        learnMore: 'معرفة المزيد',
        bookNow: 'احجز الآن'
      },
      
      trip: {
        overview: 'نظرة عامة',
        itinerary: 'البرنامج التفصيلي',
        includes: 'المتضمن',
        map: 'الخريطة التفاعلية',
        reviews: 'المراجعات',
        price: 'السعر',
        perPerson: 'لكل شخص',
        dates: 'التواريخ المتاحة',
        bookNow: 'احجز هذه البعثة',
        enquire: 'استفسر الآن'
      },
      
      booking: {
        title: 'احجز مغامرتك القطبية',
        personalInfo: 'المعلومات الشخصية',
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        country: 'البلد',
        date: 'التاريخ المفضل',
        adults: 'البالغون',
        children: 'الأطفال',
        specialRequests: 'طلبات خاصة',
        totalPrice: 'السعر الكلي',
        submit: 'إتمام الحجز',
        processing: 'معالجة...',
        success: 'تم تأكيد الحجز! سنقوم بالاتصال بك قريباً.',
        error: 'فشل الحجز. يرجى المحاولة مرة أخرى.'
      },
      
      validation: {
        required: 'هذا الحقل مطلوب',
        email: 'الرجاء إدخال بريد إلكتروني صالح',
        phone: 'الرجاء إدخال رقم هاتف صالح',
        minLength: 'يجب أن يكون على الأقل {{count}} أحرف'
      },
      
      gallery: {
        title: 'معرض القطب الشمالي',
        subtitle: 'استكشف مجموعتنا المذهلة من تصوير القطب الشمالي',
        filterAll: 'الكل',
        filterWildlife: 'الحياة البرية',
        filterLandscapes: 'المناظر الطبيعية',
        filterShips: 'سفن البعثات'
      },
      
      footer: {
        about: {
          title: 'حول White Horizon',
          description: 'اكتشف القطب الشمالي مع المرشدين الخبراء والتجارب السفر المستدامة التي تخلق ذكريات تدوم مدى الحياة.'
        },
        explore: {
          title: 'استكشاف المغامرات',
          trips: 'بعثاتنا',
          gallery: 'معرض الصور',
          about: 'معلومات عنا',
          blog: 'مجلة السفر'
        },
        support: {
          title: 'الدعم والمساعدة',
          contact: 'اتصل بنا',
          faq: 'الأسئلة الشائعة',
          terms: 'الشروط والأحكام',
          privacy: 'سياسة الخصوصية'
        },
        contact: {
          title: 'معلومات الاتصال',
          address: 'العنوان',
          addressDetail: 'ترومسو، شمال النرويج',
          phone: 'الهاتف',
          email: 'البريد الإلكتروني'
        },
        copyright: 'جميع الحقوق محفوظة.'
      },
      
      carousel: {
        title: 'المغامرات القطبية',
        northernLights: {
          title: 'رحلة الشفق القطبي',
          description: 'اختبر الشفق القطبي المذهل في البرية القطبية النقية. دليلونا الخبراء يأخذونك إلى أفضل مواقع المشاهدة بعيداً عن تلوث الضوء. تعلم عن العلم والفولكلور وراء هذه الظاهرة الطبيعية أثناء الاستمتاع بالمشروبات الدافئة تحت سماء النجوم.'
        },
        fjordTour: {
          title: 'اكتشاف المضايق النرويجية',
          description: 'انطلق في رحلة عبر أروع المضايق النرويجية مع الجبال الشاهقة والشلالات المتدفقة والمياه النقية. تتضمن مساراتنا الخلابة مضيق جيرانجر ومضيق نيروي، وهما موقعان للتراث العالمي لليونسكو. اكتشف القرى المخفية والمستوطنات الفايكينغ القديمة على الطريق.'
        },
        auroraBorealis: {
          title: 'سحر الشفق القطبي',
          description: 'اختبر الرقص الساحر للشفق القطبي في السماء القطبية النرويجية.'
        },
        polarBear: {
          title: 'مملكة الدببة القطبية',
          description: 'اقابل الحياة البرية القطبية في بيئتها الطبيعية مع دليلينا المحترفين.'
        },
        polarBearExpedition: {
          title: 'بعثة الدببة القطبية',
          description: 'انضم إلى بعثاتنا المتخصصة في التصوير للمشاهدة الدببة في البرية القطبية.'
        },
        majesticFjords: {
          title: 'المضايق النرويجية الساحرة',
          description: 'ابحر عبر المناظر الدرامية حيث تلتقي الجبال الشاهقة بالمياه النقية.'
        },
        fjordCruise: {
          title: 'رحلة بحرية في المضايق النرويجية',
          description: 'اختبر الجمال المذهل لمضايق النرويج الشهيرة.'
        },
        scenicFjords: {
          title: 'مغامرة المضايق الخلابة',
          description: 'استكشف أكثر المضايق النرويجية إثارة للإعجاب مع دليلينا المحليين الخبراء.'
        },
        categories: {
          northernLights: 'الشفق القطبي',
          wildlife: 'الحياة البرية القطبية',
          fjords: 'رحلات المضايق'
        }
      },
      
      why: {
        title: 'لماذا رحلة White Horizon'
      },
      
      features: {
        expertGuide: {
          title: 'دليل خبير',
          description: 'مرشدون محترفون في القطب الشمالي مع أكثر من 10 سنوات من الخبرة، معتمدون في الإسعافات الأولية البرية وتصوير الشفق القطبي. احصل على المعرفة الداخلية والخبرة في السلامة.'
        },
        privateTaxi: {
          title: 'سيارة أجرة خاصة',
          description: 'نقل خاص مريح مع مركبات مدفأة وجدولة مرنة وخدمة من الباب إلى الباب. السفر في الدفء والأناقة إلى أفضل مواقع المشاهدة.'
        },
        sustainableTravel: {
          title: 'السفر المستدام',
          description: 'جولات محايدة كربونياً باستخدام المركبات الكهربائية، دعم المجتمعات المحلية، واتباع مبادئ Leave No Trace. السفر بمسؤولية في القطب الشمالي.'
        },
        photographyFocus: {
          title: 'التركيز على التصوير',
          description: 'توجيه احترافي للتصوير، توصيات بالمعدات، والتوقيت الأمثل لالتقاط الصور المثالية للشفق القطبي والمضايق. اصطحب ذكريات مذهلة إلى المنزل.'
        }
      },
      
      tripDetail: {
        title: "مجلة السفر القطبية",
        subtitle: "اكتشف القصص الملهمة، النصائح الخبيرة، والأفكار من البرية القطبية النرويجية - كتبها السكان المحليون ورواد القطب الشمالي ذوي الخبرة",
        featuredTitle: "الشتاء في شمال النرويج: دليل السلامة الكامل",
        featuredExcerpt: "تخطط لمغامرتك القطبية الأولى؟ يغطي هذا الدليل الشامل كل شيء من الملابس الأساسية إلى بروتوكولات الطوارئ. تعلم كيف تبقى آمنًا أثناء تجربة سحر الشتاء القطبي النرويجي، بما في ذلك مشاهدة الشفق القطبي، ركوب الزلاجات التي تجرها الكلاب، وصيد الأسماك في الجليد. كتبه فريقنا من المرشدين القطبيين المعتمدين مع أكثر من 50 عامًا من الخبرة المشتركة.",
        allArticles: "جميع المقالات",
        updated: "محدث",
        readTime: "دقيقة قراءة",
        category: "الفئة"
      },
      
      journal: {
        title: 'مجلة سفر Horizon',
        subtitle: 'اكتشف القصص الملهمة، نصائح الخبراء، والتصوير المذهل من رحلاتنا القطبية',
        allArticles: 'جميع المقالات',
        readTime: 'دقيقة قراءة',
        updated: 'محدث',
        categories: {
          adventure: 'مغامرة',
          photography: 'تصوير',
          wildlife: 'الحياة البرية',
          food: 'طعام',
          culture: 'ثقافة',
          destinations: 'وجهات',
          safety: 'سلامة'
        },
        featured: {
          title: 'الشتاء في شمال النرويج: دليل السلامة الكامل',
          description: 'هل تخطط لمغامرتك القطبية الأولى؟ يغطي هذا الدليل الشامل كل شيء من الملابس الأساسية إلى بروتوكولات الطوارئ. تعلم كيف تبقى آمنًا أثناء تجربة سحر الشتاء القطبي في النرويج، بما في ذلك مشاهدة الشفق القطبي، ركوب الكلاب، وصيد الأسماك في الجليد. مكتوبة من قبل فريقنا من المرشدين القطبيين المعتمدين مع أكثر من 50 عامًا من الخبرة المشتركة.'
        },
        safety: {
          professionalGuides: 'مرشدون محترفون',
          professionalGuidesDesc: 'مرشدونا القطبيون المعتمدون لديهم أكثر من 50 عامًا من الخبرة المشتركة في برية النرويج. هم مدربون على الإسعافات الأولية، الملاحة، والاستجابة للطوارئ لضمان سلامتك طوال مغامرتك.',
          weatherSafety: 'سلامة الطقس',
          weatherSafetyDesc: 'يمكن أن يتغير الطقس القطبي بسرعة. نحن نراقب الظروف على مدار 24/7 ونقدم تحديثات فورية. تعلم قراءة أنماط الطقس وفهم متى تؤجل الأنشطة لسلامتك.',
          emergencyContacts: 'جهات الاتصال الطارئة',
          emergencyContactsDesc: 'احمل دائمًا أرقام الطوارئ بما في ذلك خدمات الإنقاذ المحلية، خط الدعم 24/7، وأقرب المرافق الطبية. نحن نوفر هواتف الأقمار الصناعية للبعثات النائية.',
          gearRecommendations: 'توصيات المعدات',
          gearRecommendationsDesc: 'تتضمن المعدات القطبية الأساسية طبقات حرارية، ملابس خارجية مقاومة للماء، أحذية معزولة، ومعدات طوارئ. نحن نوفر قوائم تعبئة مفصلة ويمكننا تأجير معدات متخصصة.'
        },
        articles: {
          northernLightsPhotography: {
            title: 'فئة التصوير: الشفق القطبي',
            excerpt: 'التقاط الشفق القطبي الخاطف بتقنيات خبيرة وإعدادات الكاميرا للتصوير المذهل لسماء الليل.'
          },
          tromsoWinterGuide: {
            title: 'دليل الشتاء في ترومسو',
            excerpt: 'دليل شامل لاستكشاف ترومسو في الشتاء، بما في ذلك أفضل مواقع مشاهدة الشفق القطبي والأنشطة الشتوية.'
          },
          samiCulture: {
            title: 'ثقافة شعب السامي',
            excerpt: 'اكتشف الثقافة الغنية لشعب السامي الأصلي في شمال النرويج وتقاليدهم القديمة.'
          },
          norwegianFolkTraditions: {
            title: 'التقاليد الشعبية النرويجية',
            excerpt: 'استكشف التقاليد الشعبية النرويجية القديمة والاحتفالات الموسمية.'
          },
          norwegianWoodCarving: {
            title: 'النحت على الخشب النرويجي',
            excerpt: 'اكتشف فن النحت على الخشب التقليدي في النرويج وتاريخه الغني.'
          },
          arcticWildlifePolarBears: {
            title: 'الحياة البرية القطبية: الدببة القطبية',
            excerpt: 'تعرف على الدببة القطبية وغيرها من الحياة البرية المذهلة في القطب الشمالي.'
          },
          arcticCuisine: {
            title: 'المطبخ القطبي: أطباق السامي التقليدية',
            excerpt: 'استكشف أطباق الرنة التقليدية للسامي وغيرها من الأطباق القطبية التقليدية التي تدفئ الروح في شمال النرويج المتجمد.'
          },
          traditionalNorwegianDishes: {
            title: 'دليل الطعام النرويجي التقليدي',
            excerpt: 'تذوق الأطباق الكلاسيكية النرويجية من حساء السمك اللذيذ إلى حلويات التوت الحلوة التي تحدد المطبخ الشمالي.'
          },
          lutefisk: {
            title: 'لوتيفيسك: طعام النرويج المثير للجدل',
            excerpt: 'تعمق في عالم لوتيفيسك، طعام السمك المجفف التقليدي في النرويج الذي يثير الجدل لكنه يحدد التراث.'
          },
          arcticExpeditionPhotography: {
            title: 'نصائح تصوير البعثات القطبية',
            excerpt: 'أتقن فن التقاط المناظر الطبيعية القاسية في القطب الشمالي النرويجي بتقنيات التصوير الاحترافية وتوصيات المعدات.'
          },
          wildlifeWatchingTromso: {
            title: 'مشاهدة الحياة البرية في ترومسو',
            excerpt: 'راقب الحيتان والنسور والحياة البرية القطبية في المضايق النقية في ترومسو مع المرشدين الخبراء وأفضل مواقع المشاهدة.'
          },
          dangerousViewpoints: {
            title: 'أخطر نقاط المشاهدة في النرويج',
            excerpt: 'اكتشف نقاط المشاهدة المذهلة في المضايق النرويجية والتكوينات الصخرية الخطرة التي تختبر شجاعتك مع مناظر لا تُنسى.'
          },
          fjordCamping: {
            title: 'دليل التخييم بجانب المضايق',
            excerpt: 'أتقن فن التخييم في البرية في المضايق النرويجية النقية مع المعدات الأساسية ونصائح السلامة.'
          },
          hikingTrails: {
            title: 'مسارات المشي الأسطورية في النرويج',
            excerpt: 'استكشف مسارات مذهلة من المشي الهادئ بجانب البحيرات إلى التسلق الجبلي الصعب مع البحيرات الفيروزية والقمم المغطاة بالثلوج.'
          },
          northernLightsGuide: {
            title: 'دليل مغامرة الشفق القطبي',
            excerpt: 'اختبر سحر الشفق القطبي مع أفضل مواقع المشاهدة ونصائح التصوير لعرض الضوء المذهل للطبيعة.'
          }
        }
      },
      
      home: {
        hero: {
          title: 'النرويج القطبية تنتظرك',
          subtitle: 'اختبر الجمال الخام للحياة الشمالية والحياة البرية القطبية في بيئتها الطبيعية'
        },
        experiences: {
          title: 'تجارب النرويج التي لا تُنسى',
          description: 'اكتشف أروع عجائب القطب الشمالي من خلال بعثاتنا المنتقاة بعناية. من الشفق القطبي الراقص إلى المضايق الخلابة والبرية النقية، خلق ذكريات تدوم مدى الحياة في أكثر وجهات النرويج إثارة.',
          northernLights: {
            title: 'مطاردة الشفق القطبي',
            description: 'شاهد الشفق القطبي الساحر يرقص عبر السماء القطبية في أفضل مواقع المشاهدة مع التوجيه الخبير ونصائح التصوير.'
          },
          fjords: {
            title: 'استكشاف المضايق القطبية',
            description: 'ابحر عبر أروع المضايق النرويجية بالقارب، الزلاجة، أو سيرًا على الأقدام. اختبر المناظر الطبيعية الدرامية والطبيعة النقية.'
          },
          wildlife: {
            title: 'لقاءات الحياة البرية القطبية',
            description: 'اقترب من الحياة البرية القطبية بما في ذلك الرنة، الفقمات، وطيور البحر في بيئتها الطبيعية مع الرحلات المسؤولة والأخلاقية.'
          }
        },
        why: {
          title: 'لماذا تختار White Horizon'
        },
        features: {
          excellence: {
            title: 'أكثر من 15 عامًا من التميز',
            description: 'مع أكثر من 15 عامًا من الخبرة في السياحة القطبية، لقد أتقنا فن إنشاء بعثات لا تُنسى. معرفتنا العميقة بالمنطقة تضمن أنك ستختبر أفضل ما في القطب الشمالي.'
          },
          guides: {
            title: 'مرشدون خبراء معتمدون',
            description: 'مرشدونا هم محترفون معتمدون تلقوا تدريبًا واسعًا في سلامة البرية، التصوير، وعلم البيئة القطبية. إنهم متحمسون لمشاركة معرفتهم وضمان سلامتك طوال الرحلة.'
          },
          sustainable: {
            title: 'السياحة المستدامة',
            description: 'نحن ملتزمون بالحفاظ على الجمال النقي للقطب الشمالي. تتبع رحلاتنا إرشادات بيئية صارمة، تستخدم مركبات صديقة للبيئة، وتدعم جهود الحفاظ المحلية لحماية هذا النظام البيئي الهش.'
          }
        },
        adventure: {
          title: 'هل أنت مستعد لمغامرتك القطبية؟',
          description: 'انضم إلى الآلاف من المسافرين الراضين الذين اختبروا سحر القطب الشمالي مع White Horizon Expedition.',
          cta: 'ابدأ بتخطيط رحلتك التي لا تُنسى اليوم.',
          button: 'احجز مغامرتك القطبية',
          gallery: 'عرض المعرض',
          contact: 'اتصل بنا'
        }
      },
      
      about: {
        title: 'حول White Horizon Expedition',
        subtitle: 'اكتشاف القطب الشمالي من خلال مغامرات مستدامة يقودها خبراء تخلق ذكريات تدوم مدى الحياة',
        story: {
          title: 'قصتنا',
          paragraph1: 'تأسست في عام 2015 من قبل فريق من عشاق القطب الشمالي والمرشدين المعتمدين، نشأت White Horizon Expedition من شغف مشترك بجمال شمال النرويج النقي. ما بدأ كرحلات مجموعات صغيرة نما ليصبح شركة مغامرات قطبية رائدة، مع الحفاظ على التزامنا بالسياحة المستدامة والتجارب الأصيلة.',
          paragraph2: 'يقع مقرنا في ترومسو، "بوابة القطب الشمالي"، ونحن متخصصون في إنشاء رحلات حميمية ومنتقاة بعناية تعرض عظمة القطب الشمالي الخام مع احترام نظامه البيئي الحساس. معرفتنا المحلية العميقة وشراكاتنا مع المجتمعات الأصلية تضمن أن تكون كل رحلة تعليمية ومحولة.'
        },
        values: {
          title: 'قيمنا',
          sustainability: 'الاستدامة أولاً',
          sustainabilityDesc: 'نعمل بنقل محايد للكربون، وندعم المجتمعات المحلية، ونتبع مبادئ "عدم ترك أثر" الصارمة للحفاظ على القطب الشمالي للأجيال القادمة.',
          expertise: 'الخبرة المعرفية',
          expertiseDesc: 'مرشدونا هم متخصصون معتمدون في القطب الشمالي مع تدريب شامل في سلامة البرية، تصوير الشفق القطبي، والثقافة المحلية، مما يضمن تجارب آمنة ومثرية.',
          authenticity: 'الروابط الأصيلة',
          authenticityDesc: 'نحن نشجع الروابط الحقيقية بين المسافرين والبيئة القطبية، ونخلق تجارب ذات معنى تتجاوز السياحة التقليدية.',
          smallGroups: 'مجموعات صغيرة',
          smallGroupsDesc: 'نحافظ على أحجام مجموعات حميمية لضمان الاهتمام الشخصي، وتقليل الأثر البيئي، وتوفير لقاءات أصيلة مع طبيعة القطب الشمالي.'
        },
        whyChoose: {
          title: 'لماذا تختارنا',
          localExpertise: 'الخبرة المحلية',
          localExpertiseDesc: 'يتكون فريقنا من نرويجيين أصليين ومقيمين طويلي الأمد الذين يمتلكون معرفة حميمة بالظروف القطبية، أنماط الطقس، والجواهر المخفية التي يعرفها السكان المحليون فقط.',
          safety: 'تميز السلامة',
          safetyDesc: 'جميع المرشدين معتمدون في الإسعافات الأولية البرية، تقنيات البقاء في القطب الشمالي، والاستجابة للطوارئ. نحافظ على بروتوكولات وأدوات سلامة شاملة.',
          photography: 'التركيز على التصوير',
          photographyDesc: 'توجيه احترافي للتصوير مدرج في كل رحلة. تعلم كيفية التقاط الشفق القطبي، الحياة البرية القطبية، والمناظر الطبيعية المذهلة مع نصائح الخبراء.',
          culture: 'الانغماس الثقافي',
          cultureDesc: 'اختبر ثقافة السامي الأصيلة من خلال الشراكات مع المجتمعات المحلية. تعلم مهارات البقاء التقليدية في القطب الشمالي والمعرفة الأصلية.'
        },
        tours: {
          title: 'خيارات رحلاتنا',
          premiumBus: {
            title: 'جولات الحافلات المميزة',
            description: 'اختبر القطب الشمالي براحة مطلقة مع جولات حافلاتنا الفاخرة. مع مركبات بانورامية مدفأة، تعليقات الخبراء، وتوقفات استراتيجية في أكثر المواقع إثارة للإعجاب. مثالية للمجموعات والعائلات.'
          },
          private: {
            title: 'جولات خاصة حصرية',
            description: 'أنشئ مغامرتك القطبية الخاصة مع جولاتنا الخاصة الحصرية. استمتع بخطط سفر مخصصة، جدولة مرنة، واهتمام مخصص من مرشدينا الخبراء. مثالية لتجارب الشفق القطبي الحميمة.'
          },
          smallGroup: {
            title: 'مغامرات المجموعات الصغيرة',
            description: 'انضم إلى المغامرين من ذوي الأفكار المماثلة في جولات مجموعاتنا الصغيرة المنتقاة بعناية. اختبر القطب الشمالي مع اهتمام شخصي أثناء مشاركة العجائب مع المستكشفين الآخرين. الحد الأقصى 8 أشخاص لكل مجموعة.'
          },
          luxury: {
            title: 'رحلات القطب الشمالي الفاخرة',
            description: 'استمتع بتجربة القطب الشمالي النهائية مع رحلاتنا الفاخرة. الإقامة في أماكن إقامة متميزة، الاستمتاع بالوجبات الراقية، والسفر بأناقة أثناء استكشاف البرية النقية في شمال النرويج.'
          }
        }
      },
      
      journal: {
        title: 'مجلة رحلات الأفق',
        subtitle: 'اكتشف القصص الملهمة من مغامراتنا القطبية، والنصائح من الخبراء، والأفكار من البرية النرويجية - كتبها السكان المحليون ورواد القطب الشمالي ذوو الخبرة',
        featuredTitle: 'النرويج الشمالية في الشتاء: دليل السلامة الكامل',
        featuredExcerpt: 'تخطط لأول مغامرة قطبية لديك؟ يغطي هذا الدليل الشامل كل شيء من الملابس الأساسية إلى بروتوكولات الطوارئ. تعلم كيف تبقى آمنًا أثناء تجربة سحر الشتاء القطبي في النرويج، بما في ذلك مشاهدة الشفق القطبي، ركوب الكلاب، وصيد الأسماك في الجليد. مكتوبة من قبل فريقنا من المرشدين القطبيين المعتمدين مع أكثر من 50 عامًا من الخبرة المشتركة.',
        allArticles: 'جميع المقالات',
        updated: 'محدث',
        readTime: 'دقيقة قراءة',
        category: 'الفئة',
        categories: {
          photography: 'التصوير',
          destinations: 'الوجهات',
          culture: 'الثقافة',
          wildlife: 'الحياة البرية',
          adventure: 'المغامرة',
          food: 'الطعام',
          safety: 'السلامة'
        },
        articles: {
          northernLightsPhotography: {
            title: 'تصوير الشفق القطبي: الدليل الكامل',
            excerpt: 'تعلم أسرار التقاط صور الشفق القطبي المثالية في البرية القطبية النرويجية. من إعدادات الكاميرا إلى التوقيت، كل ما تحتاج لمعرفته.'
          },
          tromsoWinterGuide: {
            title: 'ترومسو في الشتاء: دليل المدينة القطبية النهائي',
            excerpt: 'اكتشف لماذا ترومسو هي القاعدة المثالية لمغامرتك القطبية. استكشف الثقافة المحلية، المأكولات، وأفضل المواقع لرؤية الشفق القطبي.'
          },
          samiCulture: {
            title: 'ثقافة السامي: التقاليد القطبية',
            excerpt: 'استكشف التراث الثقافي الغني لشعب السامي، المجتمع الأصلي في القطب الشمالي النرويجي. تعلم عن رعي الرنات، الحرف اليدوية التقليدية، والغناء باليوك.'
          },
          norwegianFolkTraditions: {
            title: 'التقاليد الشعبية النرويجية: رحلة ثقافية',
            excerpt: 'اكتشف النسيج الغني للتقاليد الشعبية النرويجية، من العادات القديمة والاحتفالات إلى التفسيرات الحديثة التي تحافظ على حياة التراث الثقافي.'
          },
          norwegianWoodCarving: {
            title: 'فن النحت على الخشب النرويجي',
            excerpt: 'نظرة متعمقة على الحرفة النرويجية التقليدية لنحت الخشب، أهميتها التاريخية، وكيف يحافظ الحرفيون الحديثون على هذه الجوهرة الثقافية.'
          },
          arcticWildlifePolarBears: {
            title: 'الحياة البرية القطبية: لقاءات آمنة مع الدببة القطبية',
            excerpt: 'دليل السلامة الأساسي لمشاهدة الحياة البرية في سفالبارد. تعلم كيفية مراقبة الحيوانات القطبية في بيئتها الطبيعية باحترام مع البقاء آمنًا.'
          }
        }
      },
      
      tripDetail: {
        title: 'مجلة الرحلات القطبية',
        subtitle: 'اكتشف القصص، النصائح من الخبراء، والأفكار من البرية النرويجية - كتبها السكان المحليون ورواد القطب الشمالي ذوو الخبرة',
        featuredTitle: 'النرويج الشمالية في الشتاء: دليل السلامة الكامل',
        featuredExcerpt: 'تخطط لأول مغامرة قطبية لديك؟ يغطي هذا الدليل الشامل كل شيء من الملابس الأساسية إلى بروتوكولات الطوارئ. تعلم كيف تبقى آمنًا أثناء تجربة سحر الشتاء القطبي في النرويج، بما في ذلك مشاهدة الشفق القطبي، ركوب الكلاب، وصيد الأسماك في الجليد. مكتوبة من قبل فريقنا من المرشدين القطبيين المعتمدين مع أكثر من 50 عامًا من الخبرة المشتركة.',
        allArticles: 'جميع المقالات',
        updated: 'محدث',
        readTime: 'دقيقة قراءة',
        category: 'الفئة'
      },
      
      home: {
        hero: {
          title: 'القطب الشمالي النرويجي ينتظرك',
          subtitle: 'اختبر جمال الشمال الحي والحياة البرية القطبية في بيئتها الطبيعية'
        },
        experiences: {
          title: 'تجارب نرويجية لا تُنسى',
          description: 'اكتشف أروع عجائب القطب الشمالي من خلال رحلاتنا المنتقاة بعناية. من الشفق القطبي الراقص إلى المضايق المذهلة والبرية النقية، اصنع ذكريات تدوم مدى الحياة في أروع وجهات النرويج.',
          northernLights: {
            title: 'مطاردة الشفق القطبي',
            description: 'شاهد الشفق القطبي الساحر وهو يرقص عبر السماء القطبية في أفضل مواقع المشاهدة مع توجيه احترافي ونصائح تصوير.'
          },
          fjords: {
            title: 'استكشاف المضايق القطبية',
            description: 'انطلق عبر أروع المضايق النرويجية بالقارب، الكاياك، أو سيرًا على الأقدام. اختبر المناظر الطبيعية الدراماتيكية والطبيعة النقية.'
          },
          wildlife: {
            title: 'لقاءات الحياة البرية القطبية',
            description: 'اقترب من الحياة البرية القطبية في بيئتها الطبيعية، بما في ذلك الرنات، الفقمات، وطيور البحر، من خلال السفر الأخلاقي والمسؤول.'
          }
        },
        why: {
          title: 'لماذا تختار White Horizon'
        },
        features: {
          excellence: {
            title: 'أكثر من 15 عامًا من التميز',
            description: 'مع أكثر من 15 عامًا من الخبرة في السياحة القطبية، لقد أتقنا فن إنشاء مغامرات لا تُنسى. معرفتنا العميقة بالمنطقة تضمن أنك ستختبر أفضل ما يقدمه القطب الشمالي.'
          },
          guides: {
            title: 'مرشدون خبراء معتمدون',
            description: 'مرشدونا هم محترفون معتمدون مع تدريب شامل في سلامة البرية، تصوير الشفق القطبي، والبيئة القطبية. هم متحمسون لمشاركة معرفتهم وضمان سلامتك طوال الرحلة.'
          },
          sustainable: {
            title: 'السفر المستدام',
            description: 'نحن ملتزمون بالحفاظ على جمال القطب الشمالي النقي. رحلاتنا تتبع إرشادات بيئية صارمة، تستخدم مركبات صديقة للبيئة، وتدعم جهود الحفاظ المحلية لحماية هذا النظام البيئي الحساس.'
          }
        },
        adventure: {
          title: 'مستعد لبدء مغامرتك القطبية؟',
          description: 'انضم إلى الآلاف من المسافرين الراضين الذين اختبروا سحر القطب الشمالي مع White Horizon Expedition.',
          cta: 'ابدأ بتخطيط رحلتك التي لا تُنسى اليوم.',
          button: 'احجز مغامرتك القطبية',
          gallery: 'عرض المعرض',
          contact: 'اتصل بنا'
        }
      },
      
      contact: {
        title: 'اتصل بـ White Horizon Expedition',
        subtitle: 'هل لديك سؤال أو مستعد ل planning مغامرتك القطبية؟ أرسل لنا رسالة وسيقوم فريقنا بالرد عليك قريباً.',
        form: {
          title: 'أرسل لنا رسالة',
          name: 'الاسم الكامل',
          email: 'عنوان البريد الإلكتروني',
          subject: 'الموضوع',
          message: 'الرسالة',
          address: 'العنوان',
          submit: 'إرسال الرسالة',
          sending: 'جارٍ الإرسال...',
          success: 'تم إرسال الرسالة بنجاح! سنتواصل معك خلال 24 ساعة.',
          error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',
          invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
          networkError: 'خطأ في الشبكة. يرجى التحقق من اتصالك أو المحاولة لاحقاً.',
          emailError: 'خطأ في إرسال البريد الإلكتروني. تم حفظ رسالتك وسنتصل بك قريباً.'
        },
        info: {
          title: 'معلومات الاتصال',
          address: 'Storgata 15, ترومسو، النرويج 9008',
          phone: '+47 123 456 789',
          email: 'whitehorizenexpedition@gmail.com',
          whatsapp: 'واتساب: +47 123 456 789',
          hours: 'ساعات العمل: الاثنين - الجمعة 9:00-18:00 CET'
        }
      }
    }
  },
  
  zh: {
    translation: {
      nav: {
        home: '首页',
        trips: '我们的旅行',
        destinations: '目的地',
        gallery: '画廊',
        journal: '杂志',
        about: '关于我们',
        contact: '联系我们'
      },

      hero: {
        title: '体验北极',
        subtitle: '通过我们的独家探险发现极地地区的原始美景',
        cta: '探索探险',
        ctaSecondary: '查看画廊'
      },

      featured: {
        title: '特色探险',
        duration: '时长',
        days: '天',
        from: '起价',
        learnMore: '了解更多',
        bookNow: '立即预订'
      },
      
      trip: {
        overview: '概览',
        itinerary: '详细行程',
        includes: '包含内容',
        map: '互动地图',
        reviews: '评价',
        price: '价格',
        perPerson: '每人',
        dates: '可用日期',
        bookNow: '预订此探险',
        enquire: '立即咨询'
      },
      
      booking: {
        title: '预订您的北极探险',
        personalInfo: '个人信息',
        firstName: '名字',
        lastName: '姓氏',
        email: '电子邮箱',
        phone: '电话号码',
        country: '国家',
        date: '首选日期',
        adults: '成人',
        children: '儿童',
        specialRequests: '特殊要求',
        totalPrice: '总价',
        submit: '完成预订',
        processing: '处理中...',
        success: '预订确认！我们将尽快与您联系。',
        error: '预订失败。请重试。'
      },
      
      validation: {
        required: '此字段为必填项',
        email: '请输入有效的电子邮箱',
        phone: '请输入有效的电话号码',
        minLength: '必须至少{{count}}个字符'
      },
      
      gallery: {
        title: '北极画廊',
        subtitle: '探索我们令人惊叹的北极摄影作品集',
        filterAll: '全部',
        filterWildlife: '野生动物',
        filterLandscapes: '风景',
        filterShips: '探险船'
      },
      
      footer: {
        about: {
          title: '关于 White Horizon',
          description: '与专家向导一起探索北极，享受可持续的旅行体验，创造终生难忘的回忆。'
        },
        explore: {
          title: '探索冒险',
          trips: '我们的探险',
          gallery: '照片画廊',
          about: '关于我们',
          blog: '旅行杂志'
        },
        support: {
          title: '支持与帮助',
          contact: '联系我们',
          faq: '常见问题',
          terms: '条款与条件',
          privacy: '隐私政策'
        },
        contact: {
          title: '联系信息',
          address: '地址',
          addressDetail: '特罗姆瑟，挪威北部',
          phone: '电话',
          email: '电子邮箱'
        },
        copyright: '版权所有。'
      },
      
      carousel: {
        title: '北极探险',
        northernLights: {
          title: '北极光探险',
          description: '在原始的北极荒野中体验令人惊叹的北极光。我们的专家向导带您前往远离光污染的最佳观赏地点。在星空下享用热饮的同时，了解这一自然现象背后的科学和民间传说。'
        },
        fjordTour: {
          title: '挪威峡湾发现之旅',
          description: '穿越挪威最壮观的峡湾，这里有高耸的悬崖、层叠的瀑布和纯净的水域。我们的风景路线包括被联合国教科文组织列为世界遗产的盖朗厄尔峡湾和奈勒伊峡湾。沿途发现隐藏的村庄和古老的维京定居点。'
        }
      },
      
      why: {
        title: '为什么选择 White Horizon 探险'
      },
      
      features: {
        expertGuide: {
          title: '专家向导',
          description: '专业的北极向导拥有10年以上经验，获得野外急救和北极光摄影认证。获得内部知识和安全专业知识。'
        },
        privateTaxi: {
          title: '私人出租车',
          description: '舒适的私人交通，配备加热车辆、灵活调度和门到门服务。以温暖和时尚的方式前往最佳观赏地点。'
        },
        sustainableTravel: {
          title: '可持续旅行',
          description: '使用电动车的碳中和旅行，支持当地社区，遵循无痕旅行原则。在北极负责任地旅行。'
        },
        photographyFocus: {
          title: '摄影重点',
          description: '专业摄影指导、设备建议和最佳时间安排，拍摄完美的北极光和峡湾照片。带回家的惊人回忆。'
        }
      },
      
      about: {
        title: '关于 White Horizon 探险',
        subtitle: '通过可持续的、由专家指导的探险发现北极，创造终生的回忆',
        story: {
          title: '我们的故事',
          paragraph1: 'White Horizon 探险成立于2015年，由一群北极爱好者和认证向导创立，源于对挪威北部原始美景的共同热情。从最初的小团体探险发展成为一家首屈一指的北极探险公司，同时保持我们对可持续旅游和真实体验的承诺。',
          paragraph2: '总部位于特罗姆瑟，"通往北极的门户"，我们专注于打造亲密的、精心策划的探险活动，展示北极的原始壮丽，同时尊重其脆弱的生态系统。我们深厚的当地知识和与土著社区的合作伙伴关系确保每次旅程都既具有教育意义又具有变革性。'
        },
        values: {
          title: '我们的价值观',
          sustainability: '可持续发展优先',
          sustainabilityDesc: '我们以碳中和交通运营，支持当地社区，并遵循严格的无痕旅行原则，为子孙后代保护北极。',
          expertise: '专业知识',
          expertiseDesc: '我们的向导是经过认证的北极专家，在野外安全、北极光摄影和当地文化方面接受过广泛培训，确保安全丰富的体验。',
          authenticity: '真实联系',
          authenticityDesc: '我们促进旅行者与环境之间的真正联系，创造超越典型旅游的有意义的体验。',
          smallGroups: '小团体',
          smallGroupsDesc: '我们保持亲密的小团体规模，以确保个性化关注，最小化环境影响，并提供与北极自然的真实接触。'
        },
        whyChoose: {
          title: '为什么选择我们',
          localExpertise: '当地专业知识',
          localExpertiseDesc: '我们的团队由土生土长的挪威人和长期居民组成，他们对北极条件、天气模式和只有当地人知道的隐藏宝石有着深入的了解。',
          safety: '安全卓越',
          safetyDesc: '所有向导都获得野外急救、北极生存技术和应急响应认证。我们维护全面的安全协议和设备。',
          photography: '摄影重点',
          photographyDesc: '每次探险都包含专业摄影指导。学习如何用专家技巧捕捉北极光、北极野生动物和壮观的风景。',
          culture: '文化沉浸',
          cultureDesc: '通过与当地社区的合作伙伴关系体验正宗的萨米文化。学习传统的北极生存技能和土著知识。'
        },
        tours: {
          title: '我们的旅行选择',
          premiumBus: {
            title: '高级巴士旅行',
            description: '以极致舒适体验北极，乘坐我们的豪华巴士旅行。配备加热的全景车辆、专家解说，并在最壮观的地点策略性停留。非常适合团体和家庭。'
          },
          private: {
            title: '独家私人旅行',
            description: '通过我们的独家私人旅行创造您自己的北极探险。享受个性化的行程、灵活的调度和我们专家向导的专门关注。非常适合亲密的北极光体验。'
          },
          smallGroup: {
            title: '小团体探险',
            description: '加入我们精心策划的小团体旅行，与志同道合的探险者一起体验。在享受个性化关注的同时，与其他探险者分享奇迹。每组最多8人。'
          },
          luxury: {
            title: '豪华北极探险',
            description: '尽情享受终极北极体验，我们的豪华探险之旅。入住高级住宿，享用美食，在探索挪威北部原始荒野的同时时尚旅行。'
          }
        }
      },
      
      contact: {
        title: '联系 White Horizon 探险',
        subtitle: '有问题或准备规划您的北极探险？给我们发送消息，我们的团队将很快回复您。',
        form: {
          title: '给我们发消息',
          name: '全名',
          email: '电子邮箱',
          subject: '主题',
          message: '消息',
          address: '地址',
          submit: '发送消息',
          sending: '发送中...',
          success: '消息发送成功！我们将在24小时内回复您。',
          error: '消息发送失败。请重试或直接联系我们。',
          invalidEmail: '请输入有效的电子邮箱地址',
          networkError: '网络错误。请检查您的连接或稍后重试。',
          emailError: '邮件发送错误。您的消息已保存，我们将很快联系您。'
        },
        info: {
          title: '联系信息',
          address: {
            title: '访问我们',
            street: 'Storgata 15',
            city: '特罗姆瑟，挪威',
            postal: '9008'
          },
          phone: {
            title: '致电我们',
            number: '+47 123 456 789',
            hours: '周一至周五：9:00-18:00 CET'
          },
          email: {
            title: '给我们发邮件',
            address: 'whitehorizenexpedition@gmail.com',
            response: '24小时内回复'
          },
          whatsapp: 'WhatsApp: +47 123 456 789',
          hours: '工作时间：周一至周五 9:00-18:00 CET'
        }
      }
    }
  },

  ar: { translation: { 
      nav: {
        home: 'الرئيسية',
        trips: 'رحلاتنا',
        destinations: 'الوجهات',
        gallery: 'المعرض',
        journal: 'المجلة',
        about: 'من نحن',
        contact: 'اتصل بنا'
      },
      
      journal: {
        title: 'مجلة White Horizon',
        subtitle: 'اكتشف القصص الملهمة والنصائح الخبيرة والتصوير المذهل من مغامراتنا القطبية',
        allArticles: 'جميع المقالات',
        readTime: 'دقائق للقراءة',
        updated: 'تم التحديث',
        categories: {
          adventure: 'المغامرة',
          photography: 'التصوير',
          wildlife: 'الحياة البرية',
          food: 'الطعام',
          culture: 'الثقافة',
          destinations: 'الوجهات',
          safety: 'السلامة'
        },
        featured: {
          title: 'الشتاء في شمال النرويج: دليل السلامة الكامل',
          description: 'تخطط لمغامرتك القطبية الأولى؟ يغطي هذا الدليل الشامل كل شيء من أساسيات الملابس إلى بروتوكولات الطوارئ. تعلم كيف تبقى آمناً أثناء تجربة سحر الشتاء القطبي في شمال النرويج، بما في ذلك مشاهدة الشفق القطبي، ركوب الزلاجب بالكلاب، وصيد الأسماك في الجليد. مكتوب بواسطة فريقنا من المرشدين القطبين المعتمدين مع أكثر من 50 عاماً من الخبرة المشتركة.'
        },
        safety: {
          professionalGuides: 'مرشدون محترفون',
          professionalGuidesDesc: 'مرشدونا القطبيون المعتمدون لديهم أكثر من 50 عامًا من الخبرة المشتركة في برية النرويج. هم مدربون على الإسعافات الأولية، الملاحة، والاستجابة للطوارئ لضمان سلامتك طوال مغامرتك.',
          weatherSafety: 'سلامة الطقس',
          weatherSafetyDesc: 'يمكن أن يتغير الطقس القطبي بسرعة. نحن نراقب الظروف على مدار 24/7 ونقدم تحديثات فورية. تعلم قراءة أنماط الطقس وفهم متى تؤجل الأنشطة لسلامتك.',
          emergencyContacts: 'جهات الاتصال الطارئة',
          emergencyContactsDesc: 'احمل دائمًا أرقام الطوارئ بما في ذلك خدمات الإنقاذ المحلية، خط الدعم 24/7، وأقرب المرافق الطبية. نحن نوفر هواتف الأقمار الصناعية للبعثات النائية.',
          gearRecommendations: 'توصيات المعدات',
          gearRecommendationsDesc: 'تتضمن المعدات القطبية الأساسية طبقات حرارية، ملابس خارجية مقاومة للماء، أحذية معزولة، ومعدات طوارئ. نحن نوفر قوائم تعبئة مفصلة ويمكننا تأجير معدات متخصصة.'
        },
        articles: {
          northernLightsPhotography: {
            title: 'فئة التصوير: الشفق القطبي',
            excerpt: 'التقاط الشفق القطبي الخاطف بتقنيات خبيرة وإعدادات الكاميرا للتصوير المذهل لسماء الليل.'
          },
          tromsoWinterGuide: {
            title: 'دليل الشتاء في ترومسو',
            excerpt: 'دليل شامل لاستكشاف ترومسو في الشتاء، بما في ذلك أفضل مواقع مشاهدة الشفق القطبي والأنشطة الشتوية.'
          },
          samiCulture: {
            title: 'ثقافة شعب السامي',
            excerpt: 'اكتشف الثقافة الغنية لشعب السامي الأصلي في شمال النرويج وتقاليدهم القديمة.'
          },
          norwegianFolkTraditions: {
            title: 'التقاليد الشعبية النرويجية',
            excerpt: 'استكشف التقاليد الشعبية النرويجية القديمة والاحتفالات الموسمية.'
          },
          norwegianWoodCarving: {
            title: 'النحت على الخشب النرويجي',
            excerpt: 'اكتشف فن النحت على الخشب التقليدي في النرويج وتاريخه الغني.'
          },
          arcticWildlifePolarBears: {
            title: 'الحياة البرية القطبية: الدببة القطبية',
            excerpt: 'تعرف على الدببة القطبية وغيرها من الحياة البرية المذهلة في القطب الشمالي.'
          },
          arcticCuisine: {
            title: 'المطبخ القطبي: أطباق السامي التقليدية',
            excerpt: 'استكشف أطباق الرنة التقليدية للسامي وغيرها من الأطباق القطبية التقليدية التي تدفئ الروح في شمال النرويج المتجمد.'
          },
          traditionalNorwegianDishes: {
            title: 'دليل الطعام النرويجي التقليدي',
            excerpt: 'تذوق الأطباق الكلاسيكية النرويجية من حساء السمك اللذيذ إلى حلويات التوت الحلوة التي تحدد المطبخ الشمالي.'
          },
          lutefisk: {
            title: 'لوتيفيسك: طعام النرويج المثير للجدل',
            excerpt: 'تعمق في عالم لوتيفيسك، طعام السمك المجفف التقليدي في النرويج الذي يثير الجدل لكنه يحدد التراث.'
          },
          arcticExpeditionPhotography: {
            title: 'نصائح تصوير البعثات القطبية',
            excerpt: 'أتقن فن التقاط المناظر الطبيعية القاسية في القطب الشمالي النرويجي بتقنيات التصوير الاحترافية وتوصيات المعدات.'
          },
          wildlifeWatchingTromso: {
            title: 'مشاهدة الحياة البرية في ترومسو',
            excerpt: 'راقب الحيتان والنسور والحياة البرية القطبية في المضايق النقية في ترومسو مع المرشدين الخبراء وأفضل مواقع المشاهدة.'
          },
          dangerousViewpoints: {
            title: 'أخطر نقاط المشاهدة في النرويج',
            excerpt: 'اكتشف نقاط المشاهدة المذهلة في المضايق والتكوينات الصخرية الخطرة التي تختبر شجاعتك بمناظر لا تُنسى.'
          },
          fjordCamping: {
            title: 'دليل التخييم في المضايق',
            excerpt: 'أتقن فن التخييم في البرية النقية للمضايق النرويجية مع المعدات الأساسية ونصائح السلامة.'
          },
          hikingTrails: {
            title: 'مسارات المشي الأسطورية في النرويج',
            excerpt: 'استكشف المسارات المذهلة من المشي الهادئ حول البحيرات إلى التسلق الجبلي الصعب مع البحيرات الفيروزية والقمم المغطاة بالثلوج.'
          },
          northernLightsGuide: {
            title: 'دليل مغامرات الشفق القطبي',
            excerpt: 'اختبر سحر الشفق القطبي مع أفضل مواقع المشاهدة ونصائح التصوير للعرض المذهل للضوء الطبيعي.'
          }
        }
      },
      
      carousel: {
        title: 'مغامرات القطب الشمالي',
        northernLights: {
          title: 'رحلة الشفق القطبي',
          description: 'اختبر الشفق القطبي المذهل في البرية القطبية النقية. يأخذك مرشدونا الخبراء إلى أفضل مواقع المشاهدة بعيدًا عن تلوث الضوء. استمتع بمشروب ساخن تحت النجوم بينما تتعلم العلم والأساطير وراء هذه الظاهرة الطبيعية.'
        },
        fjordTour: {
          title: 'استكشاف المضايق النرويجية',
          description: 'انطلق عبر أروع المضايق النرويجية مع المنحدرات الشاهقة والشلالات المتدفقة والمياه الصافية. تشمل مساراتنا الخلابة مضايق جيرانجر ونيروي، وكلاهما من مواقع التراث العالمي لليونسكو. اكتشف القرى المخفية والمستوطنات الفايكنج القديمة على طول الطريق.'
        },
        auroraBorealis: {
          title: 'سحر الشفق القطبي',
          description: 'اختبر الرقص الأثيري للشفق القطبي في سماء النرويج القطبية.'
        },
        polarBear: {
          title: 'مملكة الدب القطبي',
          description: 'قابل الحياة البرية القطبية في بيئتها الطبيعية مع مرشدينا الخبراء.'
        },
        polarBearExpedition: {
          title: 'بعثة الدب القطبي',
          description: 'انضم إلى رحلتنا التصويرية المتخصصة لمراقبة الدببة القطبية في البرية.'
        },
        majesticFjords: {
          title: 'المضايق النرويجية المهيبة',
          description: 'انطلق عبر المناظر الطبيعية الدرامية حيث تلتقي المنحدرات الشاهقة بالمياه الصافية.'
        },
        fjordCruise: {
          title: 'رحلة بحرية في المضايق النرويجية',
          description: 'اختبر الجمال المذهل للمضايق النرويجية الشهيرة.'
        },
        scenicFjords: {
          title: 'مغامرة المضايق الخلابة',
          description: 'استكشف أروع المضايق النرويجية مع مرشدينا المحليين الخبراء.'
        },
        categories: {
          northernLights: 'الشفق القطبي',
          wildlife: 'الحياة البرية القطبية',
          fjords: 'جولات المضايق'
        }
      },

      // Footer (added here to ensure Arabic footer works; this block overrides earlier duplicates)
      footer: {
        about: {
          title: 'حول White Horizon',
          description: 'اكتشف القطب الشمالي مع المرشدين الخبراء والتجارب السفر المستدامة التي تخلق ذكريات تدوم مدى الحياة.'
        },
        explore: {
          title: 'استكشاف المغامرات',
          trips: 'بعثاتنا',
          gallery: 'معرض الصور',
          about: 'معلومات عنا',
          blog: 'مجلة السفر'
        },
        support: {
          title: 'الدعم والمساعدة',
          contact: 'اتصل بنا',
          faq: 'الأسئلة الشائعة',
          terms: 'الشروط والأحكام',
          privacy: 'سياسة الخصوصية'
        },
        contact: {
          title: 'معلومات الاتصال',
          address: 'العنوان',
          addressDetail: 'ترومسو، شمال النرويج',
          phone: 'الهاتف',
          email: 'البريد الإلكتروني'
        },
        copyright: 'جميع الحقوق محفوظة.'
      },
      
      tripDetail: {
        title: 'تفاصيل الرحلة',
        duration: 'المدة',
        groupSize: 'حجم المجموعة',
        difficulty: 'مستوى الصعوبة',
        price: 'السعر',
        perPerson: 'لكل شخص',
        highlights: 'أبرز المعالم',
        itinerary: 'البرنامج التفصيلي',
        includes: 'المتضمن',
        excludes: 'غير المتضمن',
        whatToBring: 'ما يجب إحضاره',
        booking: 'احجز الآن',
        enquire: 'استفسر',
        share: 'شارك هذه الرحلة',
        reviews: 'المراجعات',
        rating: 'التقييم',
        basedOn: 'بناءً على',
        reviewsCount: 'مراجعة'
      },
      
      home: {
        hero: {
          title: 'اختبر سحر القطب الشمالي',
          subtitle: 'اكتشف جمال المناطق القطبية النقي مع بعثاتنا الحصرية المصممة لخلق ذكريات تدوم مدى الحياة',
          cta: 'ابدأ مغامرتك القطبية',
          ctaSecondary: 'استكشاف المعرض'
        },
        experiences: {
          title: 'مغامرات لا تُنسى',
          subtitle: 'من مشاهدة الشفق القطبي إلى استكشاف المضايق النرويجية، اكتشف تجاربنا القطبية الحصرية',
          northernLights: {
            title: 'رحلات الشفق القطبي',
            description: 'اختبر الرقص الساحر للشفق القطبي في سماء النرويج القطبية مع مرشدينا الخبراء'
          },
          fjordTours: {
            title: 'جولات المضايق',
            description: 'انطلق في رحلة عبر أروع المضايق النرويجية مع الجبال الشاهقة والشلالات المتدفقة'
          },
          wildlife: {
            title: 'الحياة البرية القطبية',
            description: 'شاهد الدببة القطبية، الثعالب القطبية، وأنواع الحياة البرية الفريدة في بيئتها الطبيعية'
          }
        },
        why: {
          title: 'لماذا تختارنا',
          subtitle: 'مع أكثر من 10 سنوات من الخبرة، نحن نقدم تجارب سفر قطبية استثنائية مع التركيز على السلامة والاستدامة',
          expertise: {
            title: 'خبرة محلية',
            description: 'مرشدونا هم من السكان الأصليين وذوو خبرة طويلة مع معرفة حميمة بالظروف القطبية'
          },
          safety: {
            title: 'السلامة أولاً',
            description: 'جميع المرشدين معتمدون في الإسعافات الأولية البرية وتقنيات البقاء في القطب'
          },
          sustainability: {
            title: 'السفر المستدام',
            description: 'نحن ملتزمون بالحفاظ على البيئة القطبية للأجيال القادمة من خلال ممارسات السفر المستدامة'
          }
        },
        features: {
          title: 'مميزاتنا',
          expertGuide: {
            title: 'مرشدون خبراء',
            description: 'مرشدون معتمدون في القطب الشمالي مع خبرة واسعة في السلامة وتصوير الشفق القطبي'
          },
          privateTaxi: {
            title: 'نقل خاص',
            description: 'مركبات مريحة مدفأة مع خدمة من الباب إلى الباب ومرونة في الجدولة'
          },
          sustainableTravel: {
            title: 'سفر مستدام',
            description: 'جولات محايدة كربونياً تدعم المجتمعات المحلية وتتبع مبادئ عدم ترك أثر'
          },
          photographyFocus: {
            title: 'التركيز على التصوير',
            description: 'توجيه احترافي للتصوير وتوصيات المعدات وأفضل التوقيت لالتقاط صور مثالية للشفق القطبي والمضايق. احمل ذكريات مذهلة معك.'
          }
        },
        adventure: {
          title: 'مستعد لمغامرتك القطبية؟',
          subtitle: 'انضم إلى آلاف المسافرين الذين اكتشفوا سحر القطب الشمالي معنا',
          cta: 'احجز مغامرتك الآن'
        }
      },
      
      about: {
        title: 'معلومات عنا',
        subtitle: 'اكتشف شغفنا بالقطب الشمالي والتزامنا بتقديم تجارب سفر استثنائية',
        story: {
          title: 'قصتنا',
          founded: 'تأسست في 2014',
          description: 'بدأت White Horizon Expedition برؤية بسيطة: مشاركة جمال وسحر القطب الشمالي مع العالم مع الحفاظ على بيئته الفريدة. ما بدأ كعملية صغيرة أصبح الآن شركة سفر قطبية رائدة مع فريق من المرشدين المحليين الخبراء.',
          mission: 'مهمتنا هي تقديم تجارب سفر قطبية استثنائية مع التركيز على السلامة، الاستدامة، والتعليم الثقافي.',
          values: 'نحن نؤمن بخلق روابط حقيقية بين المسافرين والبيئة القطبية مع احترام عميق للثقافة المحلية والحياة البرية.'
        },
        values: {
          title: 'قيمنا',
          sustainability: 'الاستدامة أولاً',
          sustainabilityDesc: 'نحن نعمل بنقل محايد كربونياً، ندعم المجتمعات المحلية، ونتبع مبادئ Leave No Trace الصارمة للحفاظ على القطب الشمالي للأجيال القادمة.',
          expertise: 'الخبرة',
          expertiseDesc: 'مرشدونا هم متخصصون معتمدون في القطب الشمالي مع تدريب شامل في سلامة البرية، تصوير الشفق القطبي، والثقافة المحلية، مما يضمن تجارب آمنة وثرية.',
          authenticity: 'الأصالة',
          authenticityDesc: 'نحن نعزز الروابط الحقيقية بين المسافرين والبيئة القطبية، مما يخلق تجارب ذات معنى تتجاوز السياحة التقليدية.',
          smallGroups: 'مجموعات صغيرة',
          smallGroupsDesc: 'نحن نحافظ على أحجام مجموعات صغيرة لضمان اهتمام شخصي، تقليل الأثر البيئي، وتمكين اللقاءات الأصيلة مع الطبيعة القطبية.'
        },
        whyChoose: {
          title: 'لماذا تختارنا',
          localExpertise: 'الخبرة المحلية',
          localExpertiseDesc: 'فريقنا يتكون من النرويجيين الأصليين والمقيمين طويلي الأمد الذين لديهم معرفة حميمة بالظروف القطبية، أنماط الطقس، والجواهر الخفية التي يعرفها فقط السكان المحليون.',
          safety: 'تميز السلامة',
          safetyDesc: 'جميع المرشدين معتمدون في الإسعافات الأولية البرية، تقنيات البقاء القطبية، والاستجابة للطوارئ. نحن نحافظ على بروتوكولات وأدوات سلامة شاملة.',
          photography: 'التركيز على التصوير',
          photographyDesc: 'التوجيه الاحترافي للتصوير مدرج في كل بعثة. تعلم كيفية التقاط صور مثالية للشفق القطبي، الحياة البرية القطبية، والمناظر الطبيعية الدرامية مع نصائح الخبراء.',
          culture: 'الانغماس الثقافي',
          cultureDesc: 'اختبر ثقافة السامي الأصيلة من خلال الشراكات مع المجتمعات المحلية. تعلم المهارات القطبية التقليدية للبقاء والمعرفة الأصلية.'
        },
        tours: {
          title: 'خيارات جولاتنا',
          premiumBus: {
            title: 'جولات الحافلة الممتازة',
            description: 'اختبر القطب الشمالي مع الراحة النهائية مع جولات حافلتنا الفاخرة. مع المركبات البانورامية المدفأة، التعليقات الخبيرة، والتوقفات الاستراتيجية في أكثر الأماكن إثارة. مثالية للمجموعات والعائلات.'
          },
          private: {
            title: 'جولات خاصة حصرية',
            description: 'صمم مغامرتك القطبية الخاصة مع جولاتنا الخاصة الحصرية. استمتع بخطط سفر مخصصة، جدولة مرنة، واهتمام مخصص من مرشدينا الخبراء. مثالية لتجارب الشفق القطبي الحميمة.'
          },
          smallGroup: {
            title: 'مغامرات المجموعات الصغيرة',
            description: 'انضم إلى المغامرين مثلك في جولات مجموعاتنا الصغيرة المنسقة بعناية. اختبر القطب الشمالي مع اهتمام شخصي ومشاركة العجائب مع المسافرين الآخرين. الحد الأقصى 8 أشخاص لكل مجموعة.'
          },
          luxury: {
            title: 'بعثات القطب الشمالي الفاخرة',
            description: 'دلل نفسك مع التجربة القطبية النهائية مع بعثاتنا الفاخرة. أقِم في أماكن إقامة ممتازة، استمتع بوجبات غورميه، واسافر بأناقة أثناء استكشاف البرية النقية في شمال النرويج.'
          }
        }
      }
    }
  },

  zh: {
    translation: {
      nav: {
        home: '首页',
        trips: '我们的旅行',
        destinations: '目的地',
        gallery: '画廊',
        journal: '杂志',
        about: '关于我们',
        contact: '联系我们'
      },

      hero: {
        title: '体验北极',
        subtitle: '通过我们的独家探险发现极地地区的原始美景',
        cta: '探索探险',
        ctaSecondary: '查看画廊'
      },

      featured: {
        title: '特色探险',
        duration: '时长',
        days: '天',
        from: '起价',
        learnMore: '了解更多',
        bookNow: '立即预订'
      },
      
      trip: {
        overview: '概览',
        itinerary: '详细行程',
        includes: '包含内容',
        map: '互动地图',
        reviews: '评价',
        price: '价格',
        perPerson: '每人',
        dates: '可用日期',
        bookNow: '预订此探险',
        enquire: '立即咨询'
      },
      
      booking: {
        title: '预订您的北极探险',
        personalInfo: '个人信息',
        firstName: '名字',
        lastName: '姓氏',
        email: '电子邮箱',
        phone: '电话号码',
        country: '国家',
        date: '首选日期',
        adults: '成人',
        children: '儿童',
        specialRequests: '特殊要求',
        totalPrice: '总价',
        submit: '完成预订',
        processing: '处理中...',
        success: '预订已确认！我们将尽快与您联系。',
        error: '预订失败。请重试。'
      },
      
      validation: {
        required: '此字段为必填项',
        email: '请输入有效的电子邮箱',
        phone: '请输入有效的电话号码',
        minLength: '至少需要{{count}}个字符'
      },
      
      gallery: {
        title: '北极画廊',
        subtitle: '探索我们令人惊叹的北极摄影作品集',
        filterAll: '全部',
        filterWildlife: '野生动物',
        filterLandscapes: '风景',
        filterShips: '探险船'
      },
      
      footer: {
        about: {
          title: '关于 White Horizon',
          description: '与专家导游一起探索北极，体验可持续旅行，创造终生难忘的回忆。'
        },
        explore: {
          title: '探索冒险',
          trips: '我们的探险',
          gallery: '照片画廊',
          about: '关于我们',
          blog: '旅行杂志'
        },
        support: {
          title: '支持与帮助',
          contact: '联系我们',
          faq: '常见问题',
          terms: '条款与条件',
          privacy: '隐私政策'
        },
        contact: {
          title: '联系信息',
          address: '地址',
          addressDetail: '特罗姆瑟，挪威北部',
          phone: '电话',
          email: '电子邮箱'
        },
        copyright: '保留所有权利。'
      },
      
      carousel: {
        title: '北极探险',
        northernLights: {
          title: '北极光之旅',
          description: '在原始的北极荒野中体验令人惊叹的北极光。我们的专业导游将带您远离光污染的最佳观赏地点。在星空下享用热饮的同时，了解这一自然现象背后的科学和民间传说。'
        },
        fjordTour: {
          title: '挪威峡湾探索',
          description: '穿越挪威最壮观的峡湾，这里有高耸的悬崖、飞流直下的瀑布和纯净的水域。我们的风景路线包括盖朗厄尔峡湾和奈勒伊峡湾，两者都是联合国教科文组织世界遗产。沿途发现隐藏的村庄和古老的维京人定居点。'
        },
        auroraBorealis: {
          title: '北极光魔法',
          description: '在挪威的北极天空中体验北极光的空灵舞蹈。'
        },
        polarBear: {
          title: '北极熊王国',
          description: '在我们的专业导游陪同下，在自然栖息地邂逅北极野生动物。'
        },
        polarBearExpedition: {
          title: '北极熊探险',
          description: '加入我们在北极荒野中以摄影为重点的观熊之旅。'
        },
        majesticFjords: {
          title: '壮丽的挪威峡湾',
          description: '巡游穿越戏剧性的景观，高耸的悬崖与清澈的海水相遇。'
        },
        fjordCruise: {
          title: '挪威峡湾巡游',
          description: '体验挪威著名峡湾的壮丽美景。'
        },
        scenicFjords: {
          title: '风景峡湾探险',
          description: '与专家当地导游一起探索挪威最令人惊叹的峡湾。'
        },
        categories: {
          northernLights: '北极光',
          wildlife: '北极野生动物',
          fjords: '峡湾之旅'
        }
      },
      
      journal: {
        title: "地平线旅行杂志",
        subtitle: "发现来自我们北极探险的鼓舞人心的故事、专家建议和令人惊叹的摄影作品",
        allArticles: "所有文章",
        featured: {
          title: "挪威北部冬季：完整安全指南",
          description: "计划您的第一次北极探险？这份综合指南涵盖了从必备服装到应急协议的所有内容。了解如何在体验挪威北极冬季的魔力时保持安全，包括北极光观赏、狗拉雪橇和冰钓。由我们拥有50多年综合经验的认证北极导游团队撰写。"
        },
        categories: {
          photography: "摄影",
          destinations: "目的地",
          culture: "文化",
          wildlife: "野生动物",
          adventure: "探险",
          food: "美食",
          safety: "安全"
        },
        articles: {
          northernLightsPhotography: {
            title: "北极光摄影：完整指南",
            excerpt: "学习在挪威北极荒野中拍摄完美北极光照片的秘密。从相机设置到时间安排，您需要知道的一切。"
          },
          tromsoWinterGuide: {
            title: "特罗姆瑟冬季：终极北极城市指南",
            excerpt: "发现为什么特罗姆瑟是您北极探险的完美基地。探索当地文化、美食和北极光观赏的最佳地点。"
          },
          samiCulture: {
            title: "萨米文化：北极传统",
            excerpt: "探索萨米人丰富的文化遗产，挪威的土著北极社区。了解驯鹿放牧、传统手工艺和约伊克歌唱。"
          },
          norwegianFolkTraditions: {
            title: "挪威民间传统：文化之旅",
            excerpt: "发现挪威民间传统丰富的织锦，从古老习俗和庆典到保持文化遗产活力的现代诠释。"
          },
          norwegianWoodCarving: {
            title: "挪威木雕艺术",
            excerpt: "深入了解传统挪威木雕工艺的深入观察，其历史意义，以及现代工匠如何保护这一文化瑰宝。"
          },
          arcticWildlifePolarBears: {
            title: "北极野生动物：与北极熊的安全邂逅",
            excerpt: "在斯瓦尔巴野生动物观赏的基本安全指南。学习如何在自然栖息地中尊重地观察北极动物，同时保持安全。"
          }
        }
      },
      
      features: {
        expertGuide: {
          title: '专业向导',
          description: '拥有10年以上经验的专业北极向导，持有荒野急救和北极光摄影认证。获得内部知识和安全专业知识。'
        },
        privateTaxi: {
          title: '私人出租车',
          description: '舒适的私人交通，配备加热车辆、灵活的时间安排和门到门服务。在温暖和时尚中前往最佳观赏地点。'
        },
        sustainableTravel: {
          title: '可持续旅行',
          description: '使用电动车的碳中和旅行，支持当地社区，遵循不留痕迹原则。在北极负责任地旅行。'
        },

      },
      
      tripDetail: {
        title: "北极旅行杂志",
        subtitle: "发现来自挪威北极荒野的故事、专业建议和见解 - 由当地人和经验丰富的北极探险家撰写",
        featuredTitle: "挪威北部冬季：完整安全指南",
        featuredExcerpt: "计划您的第一次北极探险？这份综合指南涵盖了从必备服装到应急协议的所有内容。了解如何在体验挪威北极冬季的魔力时保持安全，包括北极光观赏、狗拉雪橇和冰钓。由我们拥有50多年综合经验的认证北极导游团队撰写。",
        allArticles: "所有文章",
        updated: "更新",
        readTime: "分钟阅读",
        category: "类别"
      },
      
      journal: {
        title: 'Horizon 旅行杂志',
        subtitle: '发现来自我们北极探险的鼓舞人心的故事、专家提示和令人惊叹的摄影',
        allArticles: '所有文章',
        readTime: '分钟阅读',
        updated: '更新',
        categories: {
          adventure: '冒险',
          photography: '摄影',
          wildlife: '野生动物',
          food: '美食',
          culture: '文化',
          destinations: '目的地',
          safety: '安全'
        },
        featured: {
          title: '挪威北部冬季：完整安全指南',
          description: '计划您的第一次北极探险？这份综合指南涵盖了从服装必需品到应急协议的所有内容。了解如何在体验挪威北极冬季魔力的同时保持安全，包括北极光观赏、狗拉雪橇和冰钓。由我们拥有50多年综合经验的认证北极导游团队撰写。'
        },
        safety: {
          professionalGuides: '专业导游',
          professionalGuidesDesc: '我们认证的北极导游在挪威荒野拥有超过50年的综合经验。他们接受过急救、导航和应急响应培训，以确保您在整个冒险过程中的安全。',
          weatherSafety: '天气安全',
          weatherSafetyDesc: '北极天气可能迅速变化。我们24/7监控条件并提供实时更新。学习阅读天气模式并了解何时推迟活动以确保您的安全。',
          emergencyContacts: '紧急联系人',
          emergencyContactsDesc: '始终携带紧急号码，包括当地救援服务、我们的24/7支持热线和最近的医疗设施。我们为远程探险提供卫星电话。',
          gearRecommendations: '装备建议',
          gearRecommendationsDesc: '基本北极装备包括保暖层、防水外衣、绝缘靴和应急用品。我们提供详细的打包清单，可以租赁专业设备。'
        },
        articles: {
          northernLightsPhotography: {
            title: '北极光摄影大师班',
            excerpt: '使用专家技术和相机设置捕捉难以捉摸的北极光，拍摄令人惊叹的夜空摄影。'
          },
          tromsoWinterGuide: {
            title: '特罗姆瑟冬季指南',
            excerpt: '探索特罗姆瑟冬季的综合指南，包括最佳北极光观赏地点和冬季活动。'
          },
          samiCulture: {
            title: '萨米文化',
            excerpt: '探索萨米人丰富的文化，挪威北部的原住民，以及他们的古老传统。'
          },
          norwegianFolkTraditions: {
            title: '挪威民间传统',
            excerpt: '探索古老的挪威民间传统和季节性庆祝活动。'
          },
          norwegianWoodCarving: {
            title: '挪威木雕',
            excerpt: '发现传统的挪威木雕艺术及其丰富的历史。'
          },
          arcticWildlifePolarBears: {
            title: '北极野生动物：北极熊等',
            excerpt: '发现挪威令人难以置信的北极野生动物，从雄伟的北极熊到难以捉摸的北极狐，都在它们的自然栖息地中。'
          },
          arcticCuisine: {
            title: '北极美食：传统萨米菜肴',
            excerpt: '探索正宗的萨米驯鹿炖菜和其他传统北极菜肴，在挪威冰冻的北方温暖心灵。'
          },
          traditionalNorwegianDishes: {
            title: '传统挪威美食指南',
            excerpt: '品尝挪威经典菜肴，从丰盛的鱼汤到甜美的云莓甜点，定义北欧美食。'
          },
          lutefisk: {
            title: '碱渍鳕鱼：挪威有争议的美食',
            excerpt: '深入了解碱渍鳕鱼的世界，挪威传统的干鱼菜肴，虽然存在争议但定义了传统。'
          },
          arcticExpeditionPhotography: {
            title: '北极探险摄影技巧',
            excerpt: '掌握使用专业摄影技术和设备建议捕捉挪威严酷北极景观的艺术。'
          },
          wildlifeWatchingTromso: {
            title: '特罗姆瑟野生动物观赏',
            excerpt: '在特罗姆瑟原始峡湾中观察鲸鱼、鹰和北极野生动物，有专家导游和最佳观赏地点。'
          },
          dangerousViewpoints: {
            title: '挪威最危险的观景点',
            excerpt: '发现令人心跳停止的峡湾观景点和危险的岩石构造，用难忘的景色考验您的勇气。'
          },
          fjordCamping: {
            title: '峡湾露营指南',
            excerpt: '掌握在挪威原始峡湾荒野露营的艺术，配备基本装备和安全提示。'
          },
          hikingTrails: {
            title: '挪威史诗般的徒步小径',
            excerpt: '探索壮观的步道，从温和的湖边漫步到具有挑战性的山地攀登，有绿松石色的湖泊和白雪覆盖的山峰。'
          },
          northernLightsGuide: {
            title: '北极光冒险指南',
            excerpt: '体验北极光的魔力，有最佳观赏地点和摄影技巧，欣赏大自然壮观的灯光秀。'
          }
        }
      },
      
      home: {
        hero: {
          title: '挪威北极等待着您',
          subtitle: '在自然栖息地中体验北方生活和北极野生动物的原始之美'
        },
        experiences: {
          title: '难忘的挪威体验',
          description: '通过我们精心策划的探险活动，发现北极最令人惊叹的奇观。从舞动的北极光到壮丽的峡湾和原始荒野，在挪威最壮观的目的地创造终生难忘的回忆。',
          northernLights: {
            title: '追逐北极光',
            description: '在最佳观赏地点，在专业指导和摄影技巧下，见证神奇的北极光在北极天空中舞动。'
          },
          fjords: {
            title: '探索北极峡湾',
            description: '乘船、皮划艇或步行穿越挪威最壮观的峡湾。体验戏剧性的景观和原始自然。'
          },
          wildlife: {
            title: '北极野生动物邂逅',
            description: '在自然栖息地近距离接触北极野生动物，包括驯鹿、海豹和海鸟，进行负责任、合乎道德的旅行。'
          }
        },
        why: {
          title: '为什么选择 White Horizon'
        },
        features: {
          excellence: {
            title: '15年以上卓越经验',
            description: '凭借在北极旅游领域超过15年的经验，我们已完善了创造难忘探险活动的艺术。我们对该地区的深入了解确保您将体验北极的精华。'
          },
          guides: {
            title: '认证专家导游',
            description: '我们的导游是经过认证的专业人士，在野外安全、摄影和北极生态学方面接受过广泛培训。他们热衷于分享知识并确保整个旅程的安全。'
          },
          sustainable: {
            title: '可持续旅游',
            description: '我们致力于保护北极的原始美景。我们的旅行遵循严格的环境准则，使用环保车辆，支持当地保护工作，以保护这个脆弱的生态系统。'
          }
        },
        adventure: {
          title: '准备好开始您的北极探险了吗？',
          description: '加入成千上万满意旅行者的行列，他们已体验过 White Horizon Expedition 的北极魔力。',
          cta: '今天就开始规划您难忘的旅程。',
          button: '预订您的北极探险',
          gallery: '查看画廊',
          contact: '联系我们'
        }
      },
      
      about: {
        title: '关于 White Horizon Expedition',
        subtitle: '通过可持续、专业指导的探险活动发现北极，创造终生难忘的回忆',
        story: {
          title: '我们的故事',
          paragraph1: 'White Horizon Expedition 成立于2015年，由一群北极爱好者和认证导游组成，源于对挪威北部原始美景的共同热情。从小型团体探险开始，已发展成为领先的北极冒险公司，同时保持对可持续旅游和真实体验的承诺。',
          paragraph2: '总部位于特罗姆瑟 - "北极之门" - 我们专门创建亲密、精心策划的探险活动，展示极地地区的原始宏伟，同时尊重其脆弱的生态系统。我们深厚的当地知识和与原住民社区的合作确保每次旅程都具有教育意义和变革性。'
        },
        values: {
          title: '我们的价值观',
          sustainability: '可持续发展优先',
          sustainabilityDesc: '我们运营碳中和交通，支持当地社区，遵循严格的"不留痕迹"原则，为子孙后代保护北极。',
          expertise: '专业知识',
          expertiseDesc: '我们的导游是经过认证的北极专家，在野外安全、北极光摄影和当地文化方面接受过广泛培训，确保安全而丰富的体验。',
          authenticity: '真实连接',
          authenticityDesc: '我们培养旅行者与北极环境之间的真实连接，创造超越典型旅游的有意义体验。',
          smallGroups: '小团体',
          smallGroupsDesc: '我们保持亲密的团体规模，确保个性化关注，最小化环境影响，并提供与北极自然的真实接触。'
        },
        whyChoose: {
          title: '为什么选择我们',
          localExpertise: '当地专业知识',
          localExpertiseDesc: '我们的团队由挪威本地人和长期居民组成，对北极条件、天气模式和只有当地人知道的隐藏宝石有深入了解。',
          safety: '安全卓越',
          safetyDesc: '所有导游都经过荒野急救、北极生存技术和应急响应认证。我们维护全面的安全协议和设备。',
          photography: '摄影重点',
          photographyDesc: '每次探险都包括专业摄影指导。学习使用专家提示捕捉北极光、北极野生动物和令人惊叹的景观。',
          culture: '文化沉浸',
          cultureDesc: '通过与当地社区的合作体验真实的萨米文化。学习传统的北极生存技能和土著知识。'
        },
        tours: {
          title: '我们的旅游选择',
          premiumBus: {
            title: '豪华巴士旅游',
            description: '通过我们的豪华巴士旅游体验北极的终极舒适。配备加热全景车辆、专家解说和在最壮观地点的战略停留。适合团体和家庭。'
          },
          private: {
            title: '独家私人旅游',
            description: '通过我们的独家私人旅游创建您自己的北极冒险。享受个性化行程、灵活安排和专家导游的专门关注。适合亲密的北极光体验。'
          },
          smallGroup: {
            title: '小团体冒险',
            description: '加入我们精心策划的小团体探险，与志同道合的冒险家一起。体验北极的个性化关注，同时与他人分享奇迹。每组最多8人。'
          },
          luxury: {
            title: '豪华北极体验',
            description: '通过我们的豪华旅游选择享受优质北极冒险。入住高档住宿，享受美食，在探索挪威北部原始荒野的同时优雅旅行。'
          }
        }
      },
      
      contact: {
        title: '联系 White Horizon Expedition',
        subtitle: '有问题或准备计划您的北极探险？给我们留言，我们的团队将很快与您联系。',
        form: {
          title: '给我们留言',
          name: '全名*',
          email: '电子邮箱*',
          subject: '主题',
          message: '留言*',
          address: '地址',
          submit: '发送留言',
          sending: '发送中...',
          success: '您的留言已发送！我们将在24小时内与您联系。',
          error: '无法发送留言。请重试或直接联系我们。',
          invalidEmail: '请输入有效的电子邮箱地址',
          networkError: '网络错误。请检查您的连接或稍后重试。',
          emailError: '发送邮件时出错。您的留言已保存，我们将很快与您联系。'
        },
        info: {
          title: '联系信息',
          address: 'Storgata 15, 特罗姆瑟，挪威 9008',
          phone: '+47 123 456 789',
          email: 'whitehorizenexpedition@gmail.com',
          whatsapp: 'WhatsApp: +47 123 456 789',
          hours: '工作时间：周一至周五 9:00-18:00 CET'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;