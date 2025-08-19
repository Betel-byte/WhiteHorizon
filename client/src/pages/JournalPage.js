import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const JournalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: #333;
  line-height: 1.8;
`;

const PageBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, rgba(2,6,23,0.7), rgba(2,6,23,0.6)),
              url('https://image-tc.galaxy.tf/wijpeg-7kw8jk41fn17ayr9yzj70x49l/file.jpg') center/cover no-repeat;
  z-index: -1;
  filter: brightness(1) saturate(1.2);
  background-attachment: fixed;
`;

const HeroSection = styled.section`
  background: transparent;
  color: white;
  padding: 80px 40px;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 24px;
  backdrop-filter: blur(3px);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.25);
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  z-index: 2;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
  background: rgba(0, 0, 0, 0.15);
  padding: 20px 40px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  display: inline-block;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  background: rgba(0, 0, 0, 0.15);
  padding: 15px 30px;
  border-radius: 8px;
  backdrop-filter: blur(2px);
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const CategoryButton = styled.button`
  background: ${props => props.active ? 'rgba(102, 126, 234, 0.9)' : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid ${props => props.active ? 'rgba(102, 126, 234, 0.9)' : 'rgba(221, 221, 221, 0.8)'};
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.9);
    color: ${props => props.active ? 'white' : 'rgba(102, 126, 234, 0.9)'};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CategorySection = styled.div`
  margin-bottom: 60px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin: 0 0 12px 0;
  padding: 16px 18px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
              url('/uploads/northern-lights-qantas.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 14px;
  backdrop-filter: blur(2px);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  position: relative;
`;

 

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0 20px;
  scrollbar-width: thin;
  scrollbar-color: #667eea rgba(240, 240, 240, 0.7);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 10px 10px;
  padding: 15px;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(240, 240, 240, 0.7);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(102, 126, 234, 0.8);
    border-radius: 10px;
  }
`;

const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(3px);
`;

const ArticleCard = styled.article`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.div`
  height: 250px;
  background-image: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
    z-index: 1;
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`;

const ArticleContent = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 15px 15px;
`;

const ArticleTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const ArticleExcerpt = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.9rem;
`;

const Category = styled.span`
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
`;

const FeaturedArticle = styled.article`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  backdrop-filter: blur(8px);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  background: rgba(0, 0, 0, 0.15);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(2px);
  border-radius: 10px 0 0 10px;
  
  span {
    position: relative;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  }
  
  @media (max-width: 768px) {
    min-height: 250px;
    border-radius: 10px 10px 0 0;
  }
`;

const FeaturedContent = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(2px);
  border-radius: 0 10px 10px 0;
  color: white;
  
  @media (max-width: 768px) {
    border-radius: 0 0 10px 10px;
  }
`;

const FeaturedTitle = styled.h2`
  color: white;
  font-size: 2.2rem;
  margin-bottom: 20px;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
`;

const FeaturedExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const SafetySection = styled.section`
  background: rgba(0, 0, 0, 0.5);
  padding: 60px 40px;
  border-radius: 15px;
  margin: 60px 0;
  text-align: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
`;

const SafetyTitle = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
              url('/uploads/northern-lights-qantas.jpg');
  background-size: cover;
  background-position: center;
  padding: 15px 30px;
  border-radius: 10px;
  display: inline-block;
  backdrop-filter: blur(2px);
`;

const SafetyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const SafetyItem = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.12);
  }
`;

const SafetyIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(102, 126, 234, 0.9);
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  color: white;
  font-size: 1.5rem;
`;

const JournalPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categoryRefs = useRef({});
  
  const scrollToCategory = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Return localized category label; fall back to a human-readable label if missing
  const getCategoryLabel = (category) => {
    if (!category) return '';
    const slug = String(category).toLowerCase().replace(/\s+/g, '');
    const key = `journal.categories.${slug}`;
    const translated = t(key);
    return translated === key
      ? String(category).charAt(0).toUpperCase() + String(category).slice(1)
      : translated;
  };

  // Safe translator with default fallback string to avoid showing raw keys
  const tx = (key, fallback) => {
    const translated = t(key);
    return translated === key ? fallback : translated;
  };

  // Translate a key but avoid showing the raw key; derive a readable fallback from the key name
  const txKey = (key) => {
    const translated = t(key);
    if (translated !== key) return translated;
    const last = key.split('.').pop() || '';
    const spaced = last
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/[_-]+/g, ' ')
      .trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };

  

  // Date helpers: articles now store ISO dates (YYYY-MM-DD)
  const parseDate = (dateStr) => new Date(dateStr);
  const formatDate = (dateStr, options) => {
    const formatter = new Intl.DateTimeFormat(i18n?.language || 'en', options || {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    return formatter.format(new Date(dateStr));
  };
  const formatMonthYear = (dateStr) => formatDate(dateStr, { year: 'numeric', month: 'long' });

  const articles = [
    {
      title: tx('journal.articles.dangerousViewpoints.title', "Norway's Most Dangerous Viewpoints"),
      excerpt: tx('journal.articles.dangerousViewpoints.excerpt', "Discover heart-stopping fjord perches and precarious rock formations that test your courage with unforgettable vistas."),
      category: 'adventure',
      date: "2024-02-20",
      readTime: 15,
      imageUrl: "https://adventuretogether.com/wp-content/uploads/2018/10/Norway-Photo-1-1024x683.jpg"
    },
    {
      title: tx('journal.articles.fjordCamping.title', "Fjord-Side Camping Guide"),
      excerpt: tx('journal.articles.fjordCamping.excerpt', "Master the art of wilderness camping in Norway's pristine fjords with essential gear and safety tips."),
      category: 'adventure',
      date: "2024-01-25",
      readTime: 11,
      imageUrl: "https://skyhookcontentful.imgix.net/4OlxRSIDTTmwPMFdZqN9B4/70a7c23311b7c810c4c331afe0cee2de/norwegian_fjord_campsite.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=5%3A1.7&w=1400px&ixlib=react-9.10.0"
    },
    {
      title: tx('journal.articles.hikingTrails.title', "Norway's Epic Hiking Trails"),
      excerpt: tx('journal.articles.hikingTrails.excerpt', "Explore spectacular trails from gentle lakeside walks to challenging mountain ascents with turquoise lakes and snow-capped peaks."),
      category: 'adventure',
      date: "2024-01-10",
      readTime: 14,
      imageUrl: "https://aex-web.imgix.net/getContentAsset/6de03d8e-4d0e-4e28-990c-7987ce41b30d/8e265d97-ee24-47b6-a823-0d8b4ca7c908/Norway-SubPage-Hero.jpg?language=en&auto=format&w=3024&fit=cover"
    },
    {
      title: tx('journal.articles.northernLightsGuide.title', "Northern Lights Adventure Guide"),
      excerpt: tx('journal.articles.northernLightsGuide.excerpt', "Experience the magic of Aurora Borealis with the best viewing locations and photography tips for nature's spectacular light show."),
      category: 'adventure',
      date: "2024-01-05",
      readTime: 12,
      imageUrl: "https://a.storyblok.com/f/53624/1600x2400/bb5eb6451b/snl_northernlights_tromso_1600x2400.jpg/m/700x1100"
    },
    {
      title: tx('journal.articles.northernLightsPhotography.title', "Northern Lights Photography Masterclass"),
      excerpt: tx('journal.articles.northernLightsPhotography.excerpt', "Capture the elusive Aurora Borealis with expert techniques and camera settings for stunning night sky photography."),
      category: 'photography',
      date: "2024-03-15",
      readTime: 8,
      imageUrl: "https://larsenphoto.co/wp-content/uploads/2019/03/lofoten-winter-adventure-photography-day-2-17.jpg"
    },
    {
      title: txKey('journal.articles.tromsoWinterGuide.title'),
      excerpt: txKey('journal.articles.tromsoWinterGuide.excerpt'),
      category: 'destinations',
      date: "2024-03-10",
      readTime: 12,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYzqOr-_maGJCWrS9u4kX3SAy1DP7lhg2UA&s"
    },
    {
      title: txKey('journal.articles.samiCulture.title'),
      excerpt: txKey('journal.articles.samiCulture.excerpt'),
      category: 'culture',
      date: "2024-03-05",
      readTime: 10,
      imageUrl: "https://www.campervannorway.com/assets/img/blog/439/shutterstock_1679300731-compressed.jpg"
    },
    {
      title: txKey('journal.articles.norwegianFolkTraditions.title'),
      excerpt: txKey('journal.articles.norwegianFolkTraditions.excerpt'),
      category: 'culture',
      date: "2024-01-05",
      readTime: 9,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiQj28kQeaY366J3zRjT1RcrUzI462Klh7Q&s"
    },
    {
      title: txKey('journal.articles.norwegianWoodCarving.title'),
      excerpt: txKey('journal.articles.norwegianWoodCarving.excerpt'),
      category: 'culture',
      date: "2023-12-15",
      readTime: 7,
      imageUrl: "https://i.pinimg.com/474x/1d/64/6a/1d646a4e98d49bfc0a29e385f5c55e31.jpg"
    },
    {
      title: "Arctic Wildlife: Polar Bears & More",
      excerpt: "Discover Norway's incredible Arctic wildlife from majestic polar bears to elusive Arctic foxes in their natural habitat.",
      category: 'wildlife',
      date: "2024-02-28",
      readTime: 6,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeAK479EEWPxVxsUEFfD6m684Z7_yfwo2qw&s"
    },
    {
      title: "Arctic Cuisine: Traditional Sami Dishes",
      excerpt: "Explore authentic Sami reindeer stew and other traditional Arctic dishes that warm the soul in Norway's frozen north.",
      category: 'food',
      date: "2024-02-15",
      readTime: 9,
      imageUrl: "https://images.ctfassets.net/7mmwp5vb96tc/2zN1yCqB8A6kOswIowdocQ/fc86dff2674d8b399a8242d56469eee0/bidos-sami-reindeer-stew-Broadstone-Ren__Bjerregaard___Visit_Norway.png"
    },
    {
      title: "Traditional Norwegian Food Guide",
      excerpt: "Savor Norway's classic dishes from hearty fish soups to sweet cloudberry desserts that define Nordic cuisine.",
      category: 'food',
      date: "2024-02-10",
      readTime: 7,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZD7K_MxTYvzUSaCF7aLVGoOlXs82xXsH1nA&s"
    },
    {
      title: "Lutefisk: Norway's Controversial Delicacy",
      excerpt: "Dive into the world of lutefisk, Norway's traditional dried fish dish that divides opinions but defines heritage.",
      category: 'food',
      date: "2024-02-05",
      readTime: 6,
      imageUrl: "https://www.willflyforfood.net/wp-content/uploads/2021/06/norwegian-food-lutefisk.jpg.webp"
    },
    {
      title: "Arctic Expedition Photography Tips",
      excerpt: "Master the art of capturing Norway's harsh Arctic landscapes with professional photography techniques and gear recommendations.",
      category: 'photography',
      date: "2024-01-20",
      readTime: 10,
      imageUrl: "https://media.istockphoto.com/id/1034301914/photo/nature-photographer-norway-lofoten-archipelago.jpg?s=612x612&w=0&k=20&c=Ld-m38V3XfYKsiBtcYTdCfsNJNj7QgGjyGOxlHIU-a0="
    },
    {
      title: "Wildlife Watching in Tromsø",
      excerpt: "Spot whales, eagles, and Arctic wildlife in Tromsø's pristine fjords with expert guides and prime viewing locations.",
      category: 'wildlife',
      date: "2024-01-15",
      readTime: 8,
      imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/aa/90/78.jpg"
    }
  ];

  

  return (
    <JournalContainer>
      <PageBackdrop />
      <HeroSection>
        <HeroTitle>{tx('journal.title', 'Horizon Travel Journal')}</HeroTitle>
        <HeroSubtitle>{tx('journal.subtitle', 'Discover inspiring stories, expert tips, and breathtaking photography from our Arctic expeditions')}</HeroSubtitle>
      </HeroSection>

      <FeaturedArticle>
        <FeaturedImage style={{
          backgroundImage: 'url(https://a.storyblok.com/f/53624/1600x2400/bb5eb6451b/snl_northernlights_tromso_1600x2400.jpg/m/700x1100)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            {tx('journal.featured.title', 'Winter in Northern Norway: A Complete Safety Guide')}
          </div>
        </FeaturedImage>
        <FeaturedContent>
          <FeaturedTitle>
            {tx('journal.featured.title', 'Winter in Northern Norway: A Complete Safety Guide')}
          </FeaturedTitle>
          <FeaturedExcerpt>
            {tx('journal.featured.description', "Planning your first Arctic adventure? This comprehensive guide covers everything from clothing essentials to emergency protocols. Learn how to stay safe while experiencing the magic of Norway's Arctic winter, including Northern Lights viewing, dog sledding, and ice fishing. Written by our team of certified Arctic guides with over 50 years of combined experience.")}
          </FeaturedExcerpt>
          <ArticleMeta>
            <Category>{getCategoryLabel('safety')}</Category>
            <span>{tx('journal.updated', 'Updated')}: {formatMonthYear('2024-03-01')} • 20 {tx('journal.readTime', 'min read')}</span>
          </ArticleMeta>
        </FeaturedContent>
      </FeaturedArticle>

      <CategoryFilter>
        
        <CategoryButton 
            active={selectedCategory === 'All'} 
            onClick={() => setSelectedCategory('All')}
          >
            {tx('journal.allArticles', 'All Articles')}
          </CategoryButton>
        {Array.from(new Set(articles.map(article => article.category)))
          .sort() // Sort categories alphabetically
          .map(category => (
            <CategoryButton 
              key={category} 
              active={selectedCategory === category} 
              onClick={() => {
                setSelectedCategory(category);
                scrollToCategory(category);
              }}
            >
              {getCategoryLabel(category)}
        </CategoryButton>
        ))}
      </CategoryFilter>
      
      {selectedCategory === 'All' ? (
        // Group articles by category when 'All' is selected
        Object.entries(articles.reduce((acc, article) => {
          if (!acc[article.category]) acc[article.category] = [];
          acc[article.category].push(article);
          return acc;
        }, {}))
        .sort(([a], [b]) => a.localeCompare(b)) // Sort categories alphabetically
        .map(([category, categoryArticles]) => (
          <CategorySection key={category} ref={el => categoryRefs.current[category] = el}>
            <CategoryTitle>{getCategoryLabel(category)}</CategoryTitle>
            <ScrollContainer>
              {categoryArticles
                .sort((a, b) => parseDate(b.date) - parseDate(a.date)) // Sort by date, newest first
                .map((article, index) => (
                <ArticleCard key={index} style={{ minWidth: '300px', maxWidth: '350px' }}>
                  <ArticleImage imageUrl={article.imageUrl}>
                    <span>{!article.imageUrl && getCategoryLabel(article.category)}</span>
                  </ArticleImage>
                  <ArticleContent>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
            <ArticleMeta>
          <Category>{getCategoryLabel(article.category)}</Category>
          <span>{formatDate(article.date)} • {article.readTime} {tx('journal.readTime', 'min read')}</span>
        </ArticleMeta>
                  </ArticleContent>
                </ArticleCard>
              ))}
            </ScrollContainer>
          </CategorySection>
        ))
      ) : (
        // Show only articles of the selected category
        <JournalGrid>
          {articles
            .filter(article => article.category === selectedCategory)
            .sort((a, b) => parseDate(b.date) - parseDate(a.date)) // Sort by date, newest first
            .map((article, index) => (
            <ArticleCard key={index}>
              <ArticleImage imageUrl={article.imageUrl}>
                <span>{!article.imageUrl && getCategoryLabel(article.category)}</span>
              </ArticleImage>
              <ArticleContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleMeta>
                  <Category>{getCategoryLabel(article.category)}</Category>
                  <span>{formatDate(article.date)} • {article.readTime} {tx('journal.readTime', 'min read')}</span>
                </ArticleMeta>
              </ArticleContent>
            </ArticleCard>
          ))}
        </JournalGrid>
      )}

      <SafetySection>
        <SafetyTitle>{tx('journal.featured.title', 'Winter in Northern Norway: A Complete Safety Guide')}</SafetyTitle>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 40px' }}>
          {tx('journal.featured.description', "Planning your first Arctic adventure? This comprehensive guide covers everything from clothing essentials to emergency protocols. Learn how to stay safe while experiencing the magic of Norway's Arctic winter, including Northern Lights viewing, dog sledding, and ice fishing. Written by our team of certified Arctic guides with over 50 years of combined experience.")}
        </p>
        <SafetyGrid>
          <SafetyItem>
            <SafetyIcon>🧭</SafetyIcon>
              <h4>{tx('journal.safety.professionalGuides', 'Professional Guides')}</h4>
              <p>{tx('journal.safety.professionalGuidesDesc', 'Our certified Arctic guides have over 50 years of combined experience in Norway\'s wilderness. They\'re trained in first aid, navigation, and emergency response to ensure your safety throughout your adventure.')}</p>
          </SafetyItem>
          <SafetyItem>
            <SafetyIcon>🌡️</SafetyIcon>
              <h4>{tx('journal.safety.weatherSafety', 'Weather Safety')}</h4>
              <p>{tx('journal.safety.weatherSafetyDesc', 'Arctic weather can change rapidly. We monitor conditions 24/7 and provide real-time updates. Learn to read weather patterns and understand when to postpone activities for your safety.')}</p>
          </SafetyItem>
          <SafetyItem>
            <SafetyIcon>📱</SafetyIcon>
              <h4>{tx('journal.safety.emergencyContacts', 'Emergency Contacts')}</h4>
              <p>{tx('journal.safety.emergencyContactsDesc', 'Always carry emergency numbers including local rescue services, our 24/7 support line, and nearest medical facilities. We provide satellite phones for remote expeditions.')}</p>
          </SafetyItem>
          <SafetyItem>
            <SafetyIcon>🎿</SafetyIcon>
              <h4>{tx('journal.safety.gearRecommendations', 'Gear Recommendations')}</h4>
              <p>{tx('journal.safety.gearRecommendationsDesc', 'Essential Arctic gear includes thermal layers, waterproof outerwear, insulated boots, and emergency supplies. We provide detailed packing lists and can rent specialized equipment.')}</p>
          </SafetyItem>
        </SafetyGrid>
      </SafetySection>
    </JournalContainer>
  );
};

export default JournalPage;