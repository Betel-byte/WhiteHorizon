// Internationalization (i18n) Configuration for Amazing Arctic

const translations = {
    en: {
        // Navigation
        navTrips: 'Our Trips',
        navDestinations: 'Destinations',
        navJournal: 'Journal',
        navAbout: 'About Us',
        
        // Hero section
        heroTitle: 'Experience the Arctic',
        heroSubtitle: 'Discover the pristine beauty of the polar regions with our exclusive expeditions',
        heroCTA: 'Enquire Now',
        
        // Featured expeditions
        featuredTitle: 'Featured Expeditions',
        tripDuration: 'Duration',
        tripPrice: 'From',
        
        // Trip details
        tripOverview: 'Overview',
        tripItinerary: 'Detailed Itinerary',
        tripIncludes: 'What\'s Included',
        tripMap: 'Interactive Map',
        
        // Static HTML translations
        navHome: 'Home',
        navGallery: 'Gallery',
        featuredTitle: 'Featured Expeditions',
        trip1Title: 'Realm of the Polar Bear',
        trip1Duration: '8 Days',
        trip1Price: 'From $12,500',
        trip2Title: 'Aurora Borealis Adventure',
        trip2Duration: '10 Days',
        trip2Price: 'From $15,800',
        trip3Title: 'Icebreaker Expedition',
        trip3Duration: '12 Days',
        trip3Price: 'From $18,900',
        
        whyTitle: 'Why Choose White Horizon Expedition',
        feature1Title: 'Expert Guides',
        feature1Desc: 'Led by polar specialists with decades of Arctic experience',
        feature2Title: 'Luxury Ships',
        feature2Desc: 'State-of-the-art icebreakers with premium amenities',
        feature3Title: 'Sustainable Travel',
        feature3Desc: 'Committed to preserving Arctic ecosystems',
        feature4Title: 'Photography Focus',
        feature4Desc: 'Professional photography guidance and workshops',
        
        journalTitle: 'From Our Journal',
        journal1Title: 'Photographing the Aurora',
        journal1Desc: 'Professional tips for capturing the Aurora Borealis',
        journal2Title: 'Living Among Polar Bears',
        journal2Desc: 'A day in the life of Arctic wildlife photographers',
        journal3Title: 'Navigating Arctic Waters',
        journal3Desc: 'Behind the scenes of our icebreaker expeditions',
        
        galleryTitle: 'Arctic Photography Gallery',
        gallerySubtitle: 'A curated collection of breathtaking moments from our expeditions',

        filterExpeditions: 'Expeditions',
        filterAurora: 'Northern Lights',
        
        trip1Subtitle: 'An 8-day luxury expedition through Svalbard\'s pristine Arctic wilderness',
        tabOverview: 'Overview',
        tabItinerary: 'Detailed Itinerary',
        tabIncluded: 'What\'s Included',
        tabMap: 'Interactive Map',
        expeditionOverview: 'Expedition Overview',
        expeditionDescription: 'Embark on an extraordinary journey through the Arctic\'s most pristine wilderness. This 8-day luxury expedition takes you deep into the realm of the polar bear, where you\'ll witness these magnificent creatures in their natural habitat alongside breathtaking glaciers, icebergs, and endless Arctic landscapes.',
        highlights: 'Highlights',
        highlight1: 'Expert polar bear tracking with experienced guides',
        highlight2: 'Luxury icebreaker vessel with premium amenities',
        highlight3: 'Zodiac excursions to remote Arctic locations',
        highlight4: 'Professional photography workshops',
        highlight5: '24/7 daylight during summer months',
        highlight6: 'Small group sizes for intimate experiences',
        days: 'Days',
        maxGuests: 'Max Guests',
        expertGuide: 'Expert Guide',
        footerCopyright: '© 2024 White Horizon Expedition. All rights reserved.'
        
        // Booking
        bookNow: 'Book This Expedition',
        enquireNow: 'Enquire Now',
        selectDate: 'Select Date',
        adults: 'Adults',
        children: 'Children',
        totalPrice: 'Total Price',
        
        // Form fields
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        country: 'Country',
        message: 'Message',
        
        // Gallery
        galleryTitle: 'Arctic Gallery',
        gallerySubtitle: 'Explore our stunning collection of Arctic photography',

        
        // Footer
        contactUs: 'Contact Us',
        followUs: 'Follow Us',
        subscribe: 'Subscribe to Newsletter',
        subscribeCTA: 'Stay updated with our latest expeditions',
        
        // Validation messages
        requiredField: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        invalidPhone: 'Please enter a valid phone number',
        
        // Success messages
        enquirySent: 'Thank you! Your enquiry has been sent successfully.',
        bookingConfirmed: 'Booking confirmed! We\'ll contact you shortly.',
        
        // Error messages
        bookingError: 'Sorry, there was an error processing your booking. Please try again.',
        networkError: 'Network error. Please check your connection and try again.',
        
        // Currency
        currency: 'USD',
        
        // Date format
        dateFormat: 'MM/DD/YYYY'
    },
    
    no: {
        // Navigation
        navTrips: 'Våre Turer',
        navDestinations: 'Destinasjoner',
        navJournal: 'Journal',
        navAbout: 'Om Oss',
        
        // Hero section
        heroTitle: 'Opplev Arktis',
        heroSubtitle: 'Oppdag den uberørte skjønnheten i polområdene med våre eksklusive ekspedisjoner',
        heroCTA: 'Forespørsel',
        
        // Featured expeditions
        featuredTitle: 'Utvalgte Ekspedisjoner',
        tripDuration: 'Varighet',
        tripPrice: 'Fra',
        
        // Trip details
        tripOverview: 'Oversikt',
        tripItinerary: 'Detaljert Reiserute',
        tripIncludes: 'Inkludert',
        tripMap: 'Interaktivt Kart',
        
        // Statiske HTML-oversettelser
        navHome: 'Hjem',
        navGallery: 'Galleri',
        featuredTitle: 'Utvalgte Ekspedisjoner',
        trip1Title: 'Isbjørnenes Rike',
        trip1Duration: '8 Dager',
        trip1Price: 'Fra 125.000 kr',
        trip2Title: 'Nordlys Eventyr',
        trip2Duration: '10 Dager',
        trip2Price: 'Fra 158.000 kr',
        trip3Title: 'Isbryter Ekspedisjon',
        trip3Duration: '12 Dager',
        trip3Price: 'Fra 189.000 kr',
        
        whyTitle: 'Hvorfor Velge White Horizon Expedition',
        feature1Title: 'Ekspertguider',
        feature1Desc: 'Ledet av polarspecialister med tiår av arktisk erfaring',
        feature2Title: 'Luksuriøse Skip',
        feature2Desc: 'Moderne isbrytere med premiumfasiliteter',
        feature3Title: 'Bærekraftig Reise',
        feature3Desc: 'Forpliktet til å bevare arktiske økosystemer',
        feature4Title: 'Fotograferingsfokus',
        feature4Desc: 'Profesjonell fotograferingsveiledning og verksteder',
        
        journalTitle: 'Fra Vår Journal',
        journal1Title: 'Fotografere Aurora',
        journal1Desc: 'Profesjonelle tips for å fange Aurora Borealis',
        journal2Title: 'Livet Blant Isbjørner',
        journal2Desc: 'En dag i livet til arktiske dyrelivsfotografer',
        journal3Title: 'Navigere Arktiske Farvann',
        journal3Desc: 'Bak kulissene på våre isbryterekspedisjoner',
        
        galleryTitle: 'Arktisk Fotografi Galleri',
        gallerySubtitle: 'En kuratert samling av fantastiske øyeblikk fra våre ekspedisjoner',

        filterExpeditions: 'Ekspedisjoner',
        filterAurora: 'Nordlys',
        
        trip1Subtitle: 'En 8-dagers luksusekspedisjon gjennom Svalbards uberørte arktiske villmark',
        tabOverview: 'Oversikt',
        tabItinerary: 'Detaljert Reiserute',
        tabIncluded: 'Inkludert',
        tabMap: 'Interaktivt Kart',
        expeditionOverview: 'Ekspedisjonsoversikt',
        expeditionDescription: 'Begi deg ut på en ekstraordinær reise gjennom Arktis mest uberørte villmark. Denne 8-dagers luksusekspedisjonen tar deg dypt inn i isbjørnens rike, hvor du vil observere disse majestetiske skapningene i deres naturlige habitat sammen med pustende isbreer, isfjell og endeløse arktiske landskap.',
        highlights: 'Høydepunkter',
        highlight1: 'Ekspertsporing av isbjørn med erfarne guider',
        highlight2: 'Luksuriøs isbryter med premiumfasiliteter',
        highlight3: 'Zodiac-ekskursjoner til avsidesliggende arktiske steder',
        highlight4: 'Profesjonelle fotograferingsverksteder',
        highlight5: 'Døgnåpent dagslys i sommermånedene',
        highlight6: 'Små grupper for intime opplevelser',
        days: 'Dager',
        maxGuests: 'Maks Gjester',
        expertGuide: 'Ekspertguide',
        footerCopyright: '© 2024 White Horizon Expedition. Alle rettigheter reservert.'
        
        // Booking
        bookNow: 'Bestill Ekspedisjon',
        enquireNow: 'Forespørsel',
        selectDate: 'Velg Dato',
        adults: 'Voksne',
        children: 'Barn',
        totalPrice: 'Totalpris',
        
        // Form fields
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'E-postadresse',
        phone: 'Telefonnummer',
        country: 'Land',
        message: 'Melding',
        
        // Gallery
        galleryTitle: 'Arktisk Galleri',
        gallerySubtitle: 'Utforsk vår fantastiske samling av arktisk fotografi',

        
        // Footer
        contactUs: 'Kontakt Oss',
        followUs: 'Følg Oss',
        subscribe: 'Abonner på Nyhetsbrev',
        subscribeCTA: 'Hold deg oppdatert med våre siste ekspedisjoner',
        
        // Validation messages
        requiredField: 'Dette feltet er påkrevd',
        invalidEmail: 'Vennligst oppgi en gyldig e-postadresse',
        invalidPhone: 'Vennligst oppgi et gyldig telefonnummer',
        
        // Success messages
        enquirySent: 'Takk! Din forespørsel har blitt sendt.',
        bookingConfirmed: 'Bestilling bekreftet! Vi vil kontakte deg snart.',
        
        // Error messages
        bookingError: 'Beklager, det oppstod en feil ved behandling av bestillingen. Prøv igjen.',
        networkError: 'Nettverksfeil. Sjekk tilkoblingen og prøv igjen.',
        
        // Currency
        currency: 'NOK',
        
        // Date format
        dateFormat: 'DD.MM.YYYY'
    },
    
    de: {
        // Navigation
        navTrips: 'Unsere Reisen',
        navDestinations: 'Ziele',
        navJournal: 'Journal',
        navAbout: 'Über Uns',
        
        // Hero section
        heroTitle: 'Erleben Sie die Arktis',
        heroSubtitle: 'Entdecken Sie die unberührte Schönheit der Polargebiete mit unseren exklusiven Expeditionen',
        heroCTA: 'Anfrage',
        
        // Featured expeditions
        featuredTitle: 'Ausgewählte Expeditionen',
        tripDuration: 'Dauer',
        tripPrice: 'Ab',
        
        // Trip details
        tripOverview: 'Übersicht',
        tripItinerary: 'Detaillierte Reiseroute',
        tripIncludes: 'Enthalten',
        tripMap: 'Interaktive Karte',
        
        // Statische HTML-Übersetzungen
        navHome: 'Start',
        navGallery: 'Galerie',
        featuredTitle: 'Ausgewählte Expeditionen',
        trip1Title: 'Reich des Eisbären',
        trip1Duration: '8 Tage',
        trip1Price: 'Ab 12.500 €',
        trip2Title: 'Aurora Borealis Abenteuer',
        trip2Duration: '10 Tage',
        trip2Price: 'Ab 15.800 €',
        trip3Title: 'Eisbrecher Expedition',
        trip3Duration: '12 Tage',
        trip3Price: 'Ab 18.900 €',
        
        whyTitle: 'Warum White Horizon Expedition Wählen',
        feature1Title: 'Expert Guides',
        feature1Desc: 'Geleitet von Polarspezialisten mit jahrzehntelanger arktischer Erfahrung',
        feature2Title: 'Luxuriöse Schiffe',
        feature2Desc: 'Hochmoderne Eisbrecher mit Premium-Ausstattung',
        feature3Title: 'Nachhaltiges Reisen',
        feature3Desc: 'Engagiert für den Erhalt arktischer Ökosysteme',
        feature4Title: 'Fotografie-Fokus',
        feature4Desc: 'Professionelle Fotografie-Anleitung und Workshops',
        
        journalTitle: 'Aus Unserem Journal',
        journal1Title: 'Polarlicht Fotografieren',
        journal1Desc: 'Professionelle Tipps zur Fotografie des Aurora Borealis',
        journal2Title: 'Leben Unter Eisbären',
        journal2Desc: 'Ein Tag im Leben arktischer Tierfotografen',
        journal3Title: 'Arktische Gewässer Navigieren',
        journal3Desc: 'Hinter den Kulissen unserer Eisbrecher-Expeditionen',
        
        galleryTitle: 'Arktische Fotografie Galerie',
        gallerySubtitle: 'Eine kuratierte Sammlung atemberaubender Momente unserer Expeditionen',

        filterExpeditions: 'Expeditionen',
        filterAurora: 'Nordlichter',
        
        trip1Subtitle: 'Eine 8-tägige Luxusexpedition durch die unberührte arktische Wildnis Spitzbergens',
        tabOverview: 'Übersicht',
        tabItinerary: 'Detaillierte Reiseroute',
        tabIncluded: 'Enthalten',
        tabMap: 'Interaktive Karte',
        expeditionOverview: 'Expeditionsübersicht',
        expeditionDescription: 'Begeben Sie sich auf eine außergewöhnliche Reise durch die unberührteste Wildnis der Arktis. Diese 8-tägige Luxusexpedition führt Sie tief ins Reich der Eisbären, wo Sie diese majestätischen Kreaturen in ihrem natürlichen Lebensraum zusammen mit atemberaubenden Gletschern, Eisbergen und endlosen arktischen Landschaften beobachten werden.',
        highlights: 'Highlights',
        highlight1: 'Experten-Eisbärenbeobachtung mit erfahrenen Führern',
        highlight2: 'Luxuriöses Eisbrecherschiff mit Premium-Ausstattung',
        highlight3: 'Zodiac-Ausflüge zu abgelegenen arktischen Orten',
        highlight4: 'Professionelle Fotografie-Workshops',
        highlight5: 'Rund um die Uhr Tageslicht in den Sommermonaten',
        highlight6: 'Kleine Gruppen für intime Erlebnisse',
        days: 'Tage',
        maxGuests: 'Max. Gäste',
        expertGuide: 'Expertenführer',
        footerCopyright: '© 2024 White Horizon Expedition. Alle Rechte vorbehalten.'
        
        // Booking
        bookNow: 'Expedition Buchen',
        enquireNow: 'Anfrage',
        selectDate: 'Datum Auswählen',
        adults: 'Erwachsene',
        children: 'Kinder',
        totalPrice: 'Gesamtpreis',
        
        // Form fields
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        country: 'Land',
        message: 'Nachricht',
        
        // Gallery
        galleryTitle: 'Arktis Galerie',
        gallerySubtitle: 'Entdecken Sie unsere atemberaubende Sammlung von Arktisfotografie',

        
        // Footer
        contactUs: 'Kontakt',
        followUs: 'Folgen Sie Uns',
        subscribe: 'Newsletter Abonnieren',
        subscribeCTA: 'Bleiben Sie mit unseren neuesten Expeditionen auf dem Laufenden',
        
        // Validation messages
        requiredField: 'Dieses Feld ist erforderlich',
        invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
        invalidPhone: 'Bitte geben Sie eine gültige Telefonnummer ein',
        
        // Success messages
        enquirySent: 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.',
        bookingConfirmed: 'Buchung bestätigt! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.',
        
        // Error messages
        bookingError: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Buchung. Bitte versuchen Sie es erneut.',
        networkError: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
        
        // Currency
        currency: 'EUR',
        
        // Date format
        dateFormat: 'DD.MM.YYYY'
    },
    
    ar: {
        // Navigation
        navTrips: 'رحلاتنا',
        navDestinations: 'الوجهات',
        navJournal: 'المجلة',
        navAbout: 'معلومات عنا',
        
        // Hero section
        heroTitle: 'اختبر القطب الشمالي',
        heroSubtitle: 'اكتشف جمال المناطق القطبية النقي مع بعثاتنا الحصرية',
        heroCTA: 'استفسر الآن',
        
        // Featured expeditions
        featuredTitle: 'البعثات المميزة',
        tripDuration: 'المدة',
        tripPrice: 'من',
        
        // Trip details
        tripOverview: 'نظرة عامة',
        tripItinerary: 'البرنامج التفصيلي',
        tripIncludes: 'المتضمن',
        tripMap: 'الخريطة التفاعلية',
        
        // ترجمات HTML الثابتة
        navHome: 'الرئيسية',
        navGallery: 'المعرض',
        featuredTitle: 'الرحلات المميزة',
        trip1Title: 'مملكة الدببة القطبية',
        trip1Duration: '8 أيام',
        trip1Price: 'من 12,500 $',
        trip2Title: 'مغامرة الشفق القطبي',
        trip2Duration: '10 أيام',
        trip2Price: 'من 15,800 $',
        trip3Title: 'رحلة كاسحة الجليد',
        trip3Duration: '12 يوم',
        trip3Price: 'من 18,900 $',
        
        whyTitle: 'لماذا اختيار رحلة White Horizon',
        feature1Title: 'المرشدون الخبراء',
        feature1Desc: 'يقودها متخصصون في المناطق القطبية مع عقود من الخبرة في القطب الشمالي',
        feature2Title: 'السفن الفاخرة',
        feature2Desc: 'كسارات جليد حديثة مع وسائل راحة ممتازة',
        feature3Title: 'السفر المستدام',
        feature3Desc: 'ملتزمون بالحفاظ على النظم البيئية في القطب الشمالي',
        feature4Title: 'التركيز على التصوير',
        feature4Desc: 'توجيه وتدريبات احترافية في التصوير',
        
        journalTitle: 'من مجلتنا',
        journal1Title: 'التقاط الشفق القطبي',
        journal1Desc: 'نصائح احترافية لتصوير الشفق القطبي',
        journal2Title: 'الحياة بين الدببة القطبية',
        journal2Desc: 'يوم في حياة مصوري الحياة البرية في القطب الشمالي',
        journal3Title: 'الملاحة في المياه القطبية',
        journal3Desc: 'خلف الكواليس في رحلات كسارات الجليد لدينا',
        
        galleryTitle: 'معرض تصوير القطب الشمالي',
        gallerySubtitle: 'مجموعة منقاة من اللحظات المذهلة من رحلاتنا',

        filterExpeditions: 'الرحلات الاستكشافية',
        filterAurora: 'الشفق القطبي',
        
        trip1Subtitle: 'رحلة استكشافية فاخرة لمدة 8 أيام عبر البرية القطبية النقية في سفالبارد',
        tabOverview: 'نظرة عامة',
        tabItinerary: 'البرنامج التفصيلي',
        tabIncluded: 'المتضمن',
        tabMap: 'الخريطة التفاعلية',
        expeditionOverview: 'نظرة عامة على الرحلة',
        expeditionDescription: 'انطلق في رحلة استثنائية عبر البرية القطبية الأكثر نقاء. تأخذك هذه الرحلة الاستكشافية الفاخرة لمدة 8 أيام عميقًا إلى عالم الدببة القطبية، حيث ستشهد هذه المخلوقات الرائعة في بيئتها الطبيعية إلى جانب الأنهار الجليدية المذهلة، وجبال الجليد، والمناظر القطبية اللامتناهية.',
        highlights: 'النقاط البارزة',
        highlight1: 'تتبع الدببة القطبية الخبير مع المرشدين ذوي الخبرة',
        highlight2: 'سفينة كاسحة جليد فاخرة مع وسائل راحة ممتازة',
        highlight3: 'رحلات زودياك إلى المواقع القطبية النائية',
        highlight4: 'ورش تصوير احترافية',
        highlight5: 'ضوء النهار على مدار الساعة خلال أشهر الصيف',
        highlight6: 'مجموعات صغيرة لتجارب حميمة',
        days: 'أيام',
        maxGuests: 'الحد الأقصى للضيوف',
        expertGuide: 'مرشد خبير',
        footerCopyright: '© 2024 White Horizon Expedition. جميع الحقوق محفوظة.'
        
        // Booking
        bookNow: 'احجز هذه البعثة',
        enquireNow: 'استفسر الآن',
        selectDate: 'اختر التاريخ',
        adults: 'البالغون',
        children: 'الأطفال',
        totalPrice: 'السعر الكلي',
        
        // Form fields
        firstName: 'الاسم الأول',
        lastName: 'اسم العائلة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        country: 'البلد',
        message: 'الرسالة',
        
        // Gallery
        galleryTitle: 'معرض القطب الشمالي',
        gallerySubtitle: 'استكشف مجموعتنا المذهلة من تصوير القطب الشمالي',

        
        // Footer
        contactUs: 'اتصل بنا',
        followUs: 'تابعنا',
        subscribe: 'اشترك في النشرة الإخبارية',
        subscribeCTA: 'ابق على اطلاع بأحدث بعثاتنا',
        
        // Validation messages
        requiredField: 'هذا الحقل مطلوب',
        invalidEmail: 'الرجاء إدخال بريد إلكتروني صالح',
        invalidPhone: 'الرجاء إدخال رقم هاتف صالح',
        
        // Success messages
        enquirySent: 'شكراً لك! تم إرسال استفسارك بنجاح.',
        bookingConfirmed: 'تم تأكيد الحجز! سنقوم بالاتصال بك قريباً.',
        
        // Error messages
        bookingError: 'عذراً، حدث خطأ في معالجة حجزك. الرجاء المحاولة مرة أخرى.',
        networkError: 'خطأ في الشبكة. الرجاء التحقق من اتصالك والمحاولة مرة أخرى.',
        
        // Currency
        currency: 'USD',
        
        // Date format
        dateFormat: 'DD/MM/YYYY'
    },
    
    zh: {
        // Navigation
        navTrips: '我们的旅程',
        navDestinations: '目的地',
        navJournal: '日志',
        navAbout: '关于我们',
        
        // Hero section
        heroTitle: '体验北极',
        heroSubtitle: '通过我们的独家探险，发现极地地区的原始美景',
        heroCTA: '立即咨询',
        
        // Featured expeditions
        featuredTitle: '精选探险',
        tripDuration: '时长',
        tripPrice: '起价',
        
        // Trip details
        tripOverview: '行程概览',
        tripItinerary: '详细行程',
        tripIncludes: '包含项目',
        tripMap: '互动地图',
        
        // 静态HTML翻译
        navHome: '首页',
        navGallery: '图库',
        featuredTitle: '精选探险',
        trip1Title: '北极熊王国',
        trip1Duration: '8天',
        trip1Price: '起价$12,500',
        trip2Title: '极光探险',
        trip2Duration: '10天',
        trip2Price: '起价$15,800',
        trip3Title: '破冰船之旅',
        trip3Duration: '12天',
        trip3Price: '起价$18,900',
        
        whyTitle: '为什么选择White Horizon',
        feature1Title: '专家向导',
        feature1Desc: '由拥有数十年北极经验的极地专家带领',
        feature2Title: '豪华船只',
        feature2Desc: '配备一流设施的现代化破冰船',
        feature3Title: '可持续旅行',
        feature3Desc: '致力于保护北极生态系统',
        feature4Title: '摄影焦点',
        feature4Desc: '专业摄影指导和培训',
        
        journalTitle: '我们的期刊',
        journal1Title: '捕捉北极光',
        journal1Desc: '拍摄北极光的专业技巧',
        journal2Title: '与北极熊共处',
        journal2Desc: '北极野生动物摄影师的一天',
        journal3Title: '极地航行',
        journal3Desc: '我们的破冰船探险幕后',
        
        galleryTitle: '北极摄影图库',
        gallerySubtitle: '我们探险中精选的精彩瞬间',

        filterExpeditions: '探险',
        filterAurora: '北极光',
        
        trip1Subtitle: '8天豪华探险之旅，穿越斯瓦尔巴特原始极地荒野',
        tabOverview: '概览',
        tabItinerary: '详细行程',
        tabIncluded: '包含项目',
        tabMap: '互动地图',
        expeditionOverview: '探险概览',
        expeditionDescription: '踏上穿越最原始极地荒野的非凡旅程。这个为期8天的豪华探险将带您深入北极熊的世界，您将在自然栖息地见证这些壮丽生物，同时欣赏令人惊叹的冰川、冰山和无尽的极地景观。',
        highlights: '亮点',
        highlight1: '与经验丰富的向导一起追踪北极熊',
        highlight2: '配备一流设施的豪华破冰船',
        highlight3: '前往偏远极地地点的冲锋舟巡游',
        highlight4: '专业摄影工作坊',
        highlight5: '夏季24小时日照',
        highlight6: '小团体亲密体验',
        days: '天',
        maxGuests: '最多客人',
        expertGuide: '专家向导',
        footerCopyright: '© 2024 White Horizon Expedition. 版权所有.',
        
        // Booking
        bookNow: '预订这次探险',
        enquireNow: '立即咨询',
        selectDate: '选择日期',
        adults: '成人',
        children: '儿童',
        totalPrice: '总价',
        
        // Form fields
        firstName: '名字',
        lastName: '姓氏',
        email: '邮箱地址',
        phone: '电话号码',
        country: '国家',
        message: '留言',
        
        // Gallery
        galleryTitle: '北极图库',
        gallerySubtitle: '探索我们令人惊叹的北极摄影作品',

        
        // Footer
        contactUs: '联系我们',
        followUs: '关注我们',
        subscribe: '订阅新闻通讯',
        subscribeCTA: '随时了解我们的最新探险',
        
        // Validation messages
        requiredField: '此字段为必填项',
        invalidEmail: '请输入有效的邮箱地址',
        invalidPhone: '请输入有效的电话号码',
        
        // Success messages
        enquirySent: '谢谢您！您的咨询已成功发送。',
        bookingConfirmed: '预订已确认！我们将很快与您联系。',
        
        // Error messages
        bookingError: '抱歉，处理您的预订时出现错误。请重试。',
        networkError: '网络错误。请检查您的连接并重试。',
        
        // Currency
        currency: 'USD',
        
        // Date format
        dateFormat: 'YYYY/MM/DD'
    }
};

// Language configuration
class I18n {
    constructor() {
        this.currentLanguage = this.detectLanguage() || 'en';
        this.translations = translations;
        this.direction = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
        this.init();
    }

    detectLanguage() {
        // Check URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            return langParam;
        }

        // Check localStorage
        const storedLang = localStorage.getItem('preferredLanguage');
        if (storedLang && translations[storedLang]) {
            return storedLang;
        }

        // Check browser language
        const browserLang = navigator.language.substring(0, 2);
        if (translations[browserLang]) {
            return browserLang;
        }

        return 'en';
    }

    init() {
        this.setLanguage(this.currentLanguage);
        this.createLanguageSelector();
        this.bindEvents();
    }

    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, falling back to English`);
            lang = 'en';
        }

        this.currentLanguage = lang;
        this.direction = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update document direction
        document.documentElement.setAttribute('dir', this.direction);
        document.documentElement.setAttribute('lang', lang);
        
        // Update text direction classes
        document.body.classList.toggle('rtl', this.direction === 'rtl');
        
        // Store preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url);
        
        // Update all text elements
        this.updateText();
        
        // Trigger language change event
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    get(key, params = {}) {
        const translation = this.translations[this.currentLanguage][key] || this.translations.en[key] || key;
        
        // Replace parameters
        let result = translation;
        for (const [param, value] of Object.entries(params)) {
            result = result.replace(`{{${param}}}`, value);
        }
        
        return result;
    }

    updateText() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.get(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });
        
        // Update elements with data-i18n-html attribute
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const html = this.get(key);
            element.innerHTML = html;
        });
        
        // Update currency symbols
        document.querySelectorAll('[data-currency]').forEach(element => {
            const currency = this.get('currency');
            element.textContent = currency;
        });
        
        // Update date formats
        document.querySelectorAll('[data-date]').forEach(element => {
            const dateStr = element.getAttribute('data-date');
            const formatted = this.formatDate(dateStr);
            element.textContent = formatted;
        });
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        const format = this.get('dateFormat');
        
        const pad = (num) => num.toString().padStart(2, '0');
        
        return format
            .replace('DD', pad(date.getDate()))
            .replace('MM', pad(date.getMonth() + 1))
            .replace('YYYY', date.getFullYear());
    }

    createLanguageSelector() {
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <button class="language-toggle" aria-label="Select Language">
                <span class="current-lang">${this.currentLanguage.toUpperCase()}</span>
                <svg width="12" height="8" viewBox="0 0 12 8">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
            </button>
            <div class="language-dropdown">
                ${Object.keys(translations).map(lang => `
                    <button class="language-option ${lang === this.currentLanguage ? 'active' : ''}" 
                            data-lang="${lang}">
                        ${this.getLanguageName(lang)}
                    </button>
                `).join('')}
            </div>
        `;
        
        document.body.appendChild(selector);
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                font-family: inherit;
            }
            
            .language-toggle {
                background: rgba(255, 255, 255, 0.9);
                border: 1px solid #ddd;
                border-radius: 6px;
                padding: 8px 12px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 14px;
                transition: all 0.3s ease;
            }
            
            .language-toggle:hover {
                background: white;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .language-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                background: white;
                border: 1px solid #ddd;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                margin-top: 4px;
                min-width: 120px;
                display: none;
            }
            
            .language-dropdown.show {
                display: block;
            }
            
            .language-option {
                display: block;
                width: 100%;
                padding: 10px 15px;
                border: none;
                background: none;
                text-align: left;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s ease;
            }
            
            .language-option:hover {
                background: #f5f5f5;
            }
            
            .language-option.active {
                background: var(--accent-orange);
                color: white;
            }
            
            .rtl .language-selector {
                right: auto;
                left: 20px;
            }
            
            .rtl .language-dropdown {
                right: auto;
                left: 0;
            }
            
            .rtl .language-option {
                text-align: right;
            }
            
            @media (max-width: 768px) {
                .language-selector {
                    top: 15px;
                    right: 15px;
                }
                
                .language-toggle {
                    font-size: 12px;
                    padding: 6px 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        // Language selector toggle
        document.addEventListener('click', (e) => {
            const selector = e.target.closest('.language-selector');
            const dropdown = document.querySelector('.language-dropdown');
            
            if (e.target.closest('.language-toggle')) {
                dropdown.classList.toggle('show');
            } else if (!selector) {
                dropdown.classList.remove('show');
            }
            
            if (e.target.closest('.language-option')) {
                const lang = e.target.closest('.language-option').dataset.lang;
                this.setLanguage(lang);
                dropdown.classList.remove('show');
            }
        });
        
        // Close dropdown on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelector('.language-dropdown').classList.remove('show');
            }
        });
    }

    getLanguageName(lang) {
        const names = {
            en: 'English',
            no: 'Norsk',
            de: 'Deutsch',
            ar: 'العربية',
            zh: '中文'
        };
        return names[lang] || lang;
    }

    // Utility method for currency conversion (placeholder)
    convertCurrency(amount, fromCurrency, toCurrency) {
        // This would integrate with a real currency API
        const rates = {
            USD: { NOK: 10.5, EUR: 0.85, USD: 1 },
            NOK: { USD: 0.095, EUR: 0.081, NOK: 1 },
            EUR: { USD: 1.18, NOK: 12.3, EUR: 1 }
        };
        
        const rate = rates[fromCurrency]?.[toCurrency] || 1;
        return amount * rate;
    }
}

// Initialize i18n
const i18n = new I18n();

// Export for use in other modules
window.i18n = i18n;

// Auto-update on DOM changes
const observer = new MutationObserver(() => {
    i18n.updateText();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});