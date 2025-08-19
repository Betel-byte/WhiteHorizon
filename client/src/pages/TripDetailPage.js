import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturedArticle = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  height: 300px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
  }
  
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    padding: 2rem;
  }
`;

const FeaturedContent = styled.div`
  padding: 2rem;
`;

const FeaturedTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--deep-blue);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const FeaturedExcerpt = styled.p`
  color: var(--medium-gray);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--medium-gray);
`;

const Category = styled.span`
  background: var(--accent-orange);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const CategoryFilter = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.active ? 'var(--accent-orange)' : '#ddd'};
  background: ${props => props.active ? 'var(--accent-orange)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--medium-gray)'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:hover {
    border-color: var(--accent-orange);
    color: var(--accent-orange);
  }
`;

const CategorySection = styled.section`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--deep-blue);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent-orange);
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--accent-orange);
    border-radius: 10px;
  }
`;

const ArticleCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 0 0 auto;
  width: 300px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleImage = styled.div`
  height: 180px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ArticleContent = styled.div`
  padding: 1.5rem;
`;

const ArticleTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--deep-blue);
  margin-bottom: 0.5rem;
  line-height: 1.3;
  height: 2.6rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ArticleExcerpt = styled.p`
  color: var(--medium-gray);
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  height: 3.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ArticleMetaSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--medium-gray);
`;

const TripDetailPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categoryRefs = useRef({});

  const articles = [
    {
      title: "Tromsø in Winter: The Ultimate Arctic City Guide",
      excerpt: "Discover why Tromsø is the perfect base for your Arctic adventure. Explore local culture, cuisine, and the best spots for Northern Lights viewing.",
      category: "Destinations",
      date: "March 10, 2024",
      readTime: "12 min read",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYzqOr-_maGJCWrS9u4kX3SAy1DP7lhg2UA&s"
    },
    {
      title: "Sami Culture: Traditions of the Arctic",
      excerpt: "Explore the rich cultural heritage of the Sami people, Norway's indigenous Arctic community. Learn about reindeer herding, traditional crafts, and joik singing.",
      category: "Culture",
      date: "March 5, 2024",
      readTime: "10 min read",
      imageUrl: "https://www.campervannorway.com/assets/img/blog/439/shutterstock_1679300731-compressed.jpg"
    },
    {
      title: "Norwegian Folk Traditions: A Cultural Journey",
      excerpt: "Discover the rich tapestry of Norwegian folk traditions, from ancient customs and celebrations to modern interpretations that keep cultural heritage alive.",
      category: "Culture",
      date: "January 5, 2024",
      readTime: "9 min read",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiQj28kQeaY366J3zRjT1RcrUzI462Klh7Q&s"
    },
    {
      title: "The Art of Norwegian Wood Carving",
      excerpt: "An in-depth look at the traditional Norwegian craft of wood carving, its historical significance, and how modern artisans are preserving this cultural treasure.",
      category: "Culture",
      date: "December 15, 2023",
      readTime: "7 min read",
      imageUrl: "https://i.pinimg.com/474x/1d/64/6a/1d646a4e98d49bfc0a29e385f5c55e31.jpg"
    },
    {
      title: "Arctic Wildlife: Safe Encounters with Polar Bears",
      excerpt: "Essential safety guidelines for wildlife viewing in Svalbard. Learn how to respectfully observe Arctic animals while staying safe in their natural habitat.",
      category: "Wildlife",
      date: "February 28, 2024",
      readTime: "6 min read",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeAK479EEWPxVxsUEFfD6m684Z7_yfwo2qw&s"
    },
    {
      title: "Norwegian Fjords: Hidden Gems Beyond the Tourist Trail",
      excerpt: "Discover secret fjords and hidden valleys that most tourists never see. Our insider guide to Norway's best-kept Arctic secrets.",
      category: "Adventure",
      date: "February 20, 2024",
      readTime: "15 min read",
      imageUrl: "https://adventuretogether.com/wp-content/uploads/2018/10/Norway-Photo-1-1024x683.jpg"
    },
    {
      title: "Arctic Cuisine: Traditional Foods of Northern Norway",
      excerpt: "From dried fish to cloudberries, explore the unique flavors of Arctic cuisine. Learn about traditional preservation methods and seasonal delicacies.",
      category: "Food",
      date: "February 15, 2024",
      readTime: "9 min read",
      imageUrl: "https://images.ctfassets.net/7mmwp5vb96tc/2zN1yCqB8A6kOswIowdocQ/fc86dff2674d8b399a8242d56469eee0/bidos-sami-reindeer-stew-Broadstone-Ren__Bjerregaard___Visit_Norway.png"
    },
    {
      title: "Traditional Norwegian Dishes You Must Try",
      excerpt: "From hearty stews to delicate seafood, discover the authentic tastes of Norway's Arctic region that have sustained generations through harsh winters.",
      category: "Food",
      date: "February 10, 2024",
      readTime: "7 min read",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZD7K_MxTYvzUSaCF7aLVGoOlXs82xXsH1nA&s"
    },
    {
      title: "Lutefisk: Norway's Most Controversial Dish",
      excerpt: "The history, preparation, and cultural significance of lutefisk, the traditional dried whitefish treated with lye that divides opinion even among Norwegians.",
      category: "Food",
      date: "February 5, 2024",
      readTime: "6 min read",
      imageUrl: "https://www.willflyforfood.net/wp-content/uploads/2021/06/norwegian-food-lutefisk.jpg.webp"
    },
    {
      title: "Fjord Camping: The Ultimate Guide",
      excerpt: "Everything you need to know about camping along Norway's spectacular fjords, from the best locations to essential gear and local regulations.",
      category: "Adventure",
      date: "January 25, 2024",
      readTime: "11 min read",
      imageUrl: "https://skyhookcontentful.imgix.net/4OlxRSIDTTmwPMFdZqN9B4/70a7c23311b7c810c4c331afe0cee2de/norwegian_fjord_campsite.jpg?auto=compress%2Cformat%2Cenhance%2Credeye&crop=faces%2Ccenter&fit=crop&ar=5%3A1.7&w=1400px&ixlib=react-9.10.0"
    },
    {
      title: "Arctic Expedition Photography Tips",
      excerpt: "Professional advice for capturing stunning images in challenging Arctic conditions, from equipment protection to composition techniques for snow and ice.",
      category: "Photography",
      date: "January 20, 2024",
      readTime: "10 min read",
      imageUrl: "https://media.istockphoto.com/id/1034301914/photo/nature-photographer-norway-lofoten-archipelago.jpg?s=612x612&w=0&k=20&c=Ld-m38V3XfYKsiBtcYTdCfsNJNj7QgGjyGOxlHIU-a0="
    },
    {
      title: "Wildlife Watching in Tromsø",
      excerpt: "A comprehensive guide to spotting and photographing the diverse wildlife around Tromsø, from sea eagles and whales to reindeer and Arctic foxes.",
      category: "Wildlife",
      date: "January 15, 2024",
      readTime: "8 min read",
      imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/aa/90/78.jpg"
    },
    {
      title: "Norway's Most Spectacular Hiking Trails",
      excerpt: "Discover breathtaking trails through mountains, fjords, and forests that showcase the best of Norway's natural beauty and wilderness.",
      category: "Adventure",
      date: "January 10, 2024",
      readTime: "14 min read",
      imageUrl: "https://aex-web.imgix.net/getContentAsset/6de03d8e-4d0e-4e28-990c-7987ce41b30d/8e265d97-ee24-47b6-a823-0d8b4ca7c908/Norway-SubPage-Hero.jpg?language=en&auto=format&w=3024&fit=cover"
    },
    {
      title: "Arctic Adventure: Chasing the Northern Lights",
      excerpt: "An unforgettable journey through the Arctic wilderness in pursuit of the magical aurora borealis, with tips on the best viewing locations and photography techniques.",
      category: "Adventure",
      date: "January 5, 2024",
      readTime: "12 min read",
      imageUrl: "https://a.storyblok.com/f/53624/1600x2400/bb5eb6451b/snl_northernlights_tromso_1600x2400.jpg/m/700x1100"
    }
  ];

  const parseDate = (dateString) => {
    const months = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const [month, day, year] = dateString.split(' ');
    return new Date(parseInt(year), months[month.replace(',', '')], parseInt(day.replace(',', '')));
  };

  const scrollToCategory = (category) => {
    const element = categoryRefs.current[category];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <DetailContainer>
      <HeroSection image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
        <HeroTitle>{t('tripDetail.title')}</HeroTitle>
        <HeroSubtitle>
          {t('tripDetail.subtitle')}
        </HeroSubtitle>
      </HeroSection>

      <FeaturedArticle>
        <FeaturedImage imageUrl="https://a.storyblok.com/f/53624/1600x2400/bb5eb6451b/snl_northernlights_tromso_1600x2400.jpg/m/700x1100">
          <div>Arctic Adventure Stories</div>
        </FeaturedImage>
        <FeaturedContent>
          <FeaturedTitle>
            {t('tripDetail.featuredTitle')}
          </FeaturedTitle>
          <FeaturedExcerpt>
            {t('tripDetail.featuredExcerpt')}
          </FeaturedExcerpt>
          <ArticleMeta>
            <Category>{t('tripDetail.category')}</Category>
            <span>{t('tripDetail.updated')}: March 2024 • 20 {t('tripDetail.readTime')}</span>
          </ArticleMeta>
        </FeaturedContent>
      </FeaturedArticle>

      <CategoryFilter>
        <CategoryButton 
          active={selectedCategory === 'All'} 
          onClick={() => setSelectedCategory('All')}
        >
          {t('tripDetail.allArticles')}
        </CategoryButton>
        {Array.from(new Set(articles.map(article => article.category)))
          .sort()
          .map(category => (
            <CategoryButton 
              key={category} 
              active={selectedCategory === category} 
              onClick={() => {
                setSelectedCategory(category);
                scrollToCategory(category);
              }}
            >
              {category}
            </CategoryButton>
        ))}
      </CategoryFilter>
      
      {selectedCategory === 'All' ? (
        Object.entries(articles.reduce((acc, article) => {
          if (!acc[article.category]) acc[article.category] = [];
          acc[article.category].push(article);
          return acc;
        }, {}))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([category, categoryArticles]) => (
          <CategorySection key={category} ref={el => categoryRefs.current[category] = el}>
            <CategoryTitle>{category}</CategoryTitle>
            <ScrollContainer>
              {categoryArticles
                .sort((a, b) => parseDate(b.date) - parseDate(a.date))
                .map((article, index) => (
                <ArticleCard key={index}>
                  <ArticleImage imageUrl={article.imageUrl} />
                  <ArticleContent>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                    <ArticleMetaSmall>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </ArticleMetaSmall>
                  </ArticleContent>
                </ArticleCard>
              ))}
            </ScrollContainer>
          </CategorySection>
        ))
      ) : (
        <CategorySection>
          <CategoryTitle>{selectedCategory}</CategoryTitle>
          <ScrollContainer>
            {articles
              .filter(article => article.category === selectedCategory)
              .sort((a, b) => parseDate(b.date) - parseDate(a.date))
              .map((article, index) => (
              <ArticleCard key={index}>
                <ArticleImage imageUrl={article.imageUrl} />
                <ArticleContent>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                  <ArticleMetaSmall>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </ArticleMetaSmall>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ScrollContainer>
        </CategorySection>
      )}
    </DetailContainer>
  );
};

export default TripDetailPage;