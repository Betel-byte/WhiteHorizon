import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaBus, FaCar, FaUsers, FaStar } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  color: #333;
  line-height: 1.8;
  background: url('https://image-tc.galaxy.tf/wijpeg-7kw8jk41fn17ayr9yzj70x49l/file.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: transparent;
  color: white;
  padding: 140px 0;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.3);
  backdrop-filter: blur(3px);
`;

const HeroTitle = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 1.5rem;
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
  font-size: 1.5rem;
  opacity: 0.85;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  font-weight: 500;
  background: rgba(0, 0, 0, 0.15);
  padding: 15px 30px;
  border-radius: 8px;
  backdrop-filter: blur(2px);
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.15);
  padding: 15px 30px;
  border-radius: 10px;
  display: inline-block;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  position: relative;
  z-index: 2;
`;

const TitleWrap = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
              url('/uploads/northern-lights-qantas.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 14px;
  padding: 40px 20px;
  margin-bottom: 30px;
  backdrop-filter: blur(2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: white;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  border-left: 4px solid transparent;
  border-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 45px rgba(102, 126, 234, 0.25);
    background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
  }
`;

const CardTitle = styled.h3`
  color: #667eea;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const CardText = styled.p`
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  margin-top: 12px;
`;

const TeamImageSection = styled.section`
  margin: 60px 0;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 400px;
  background: rgba(0, 0, 0, 0.15);
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

const TeamImageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2;
  
  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  p {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 600px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  }
`;

const TeamSection = styled.section`
  background: #f8f9fa;
  padding: 60px 20px;
  border-radius: 15px;
  margin: 40px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
  padding: 30px;
`;

const MemberName = styled.h4`
  color: #ffffff;
  font-size: 1.3rem;
  margin: 15px 0 5px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const MemberRole = styled.p`
  color: #a5b4fc;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const MemberBio = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
`;

const ValuesSection = styled.section`
  margin: 60px 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.8)),
              url('/uploads/tips-lg-fjord-norway.webp') center/cover no-repeat;
  padding: 40px 20px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TourOptionsSection = styled.section`
  margin: 60px 0;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.85) 0%, rgba(51, 65, 85, 0.85) 100%),
              url('/uploads/norway-campervan-blue-fjord-mountains-thumb.jpg') center/cover no-repeat;
  padding: 60px 20px;
  border-radius: 15px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
`;

const TourOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TourCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  color: #1e293b;
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid transparent;
  border-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1;
  backdrop-filter: blur(2px);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 45px rgba(102, 126, 234, 0.25);
  }
`;

const TourIcon = styled.div`
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 15px;
`;

const TourTitle = styled.h3`
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const TourDescription = styled.p`
  color: #2d3748;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  margin-top: 12px;
`;

const ValueItem = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.7);
  border-left: 4px solid #667eea;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(2px);
  overflow: hidden;
  color: #1e293b;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    border-left-color: #764ba2;
  }
`;

const ValueTitle = styled.h4`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  
  &::before {
    content: '✦';
    color: #a5b4fc;
    margin-right: 8px;
    font-size: 1.1rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
  background: rgba(0, 0, 0, 0.15);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.65));
  color: white;
  padding: 30px 20px 20px;
  transition: opacity 0.3s ease;
`;

const GalleryTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 5px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const GallerySubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>{t('about.title')}</HeroTitle>
        <HeroSubtitle>
          {t('about.subtitle')}
        </HeroSubtitle>
      </HeroSection>

      <Section>
        <TitleWrap>
          <SectionTitle>{t('about.story.title')}</SectionTitle>
        </TitleWrap>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: '#fff' }}>
          {t('about.story.paragraph1')}
        </p>
        <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          {t('about.story.paragraph2')}
        </p>
      </Section>

      <ValuesSection>
        <TitleWrap>
          <SectionTitle>{t('about.values.title')}</SectionTitle>
        </TitleWrap>
        <ValuesGrid>
          <ValueItem>
            <ValueTitle>{t('about.values.sustainability')}</ValueTitle>
            <p>{t('about.values.sustainabilityDesc')}</p>
          </ValueItem>
          <ValueItem>
            <ValueTitle>{t('about.values.expertise')}</ValueTitle>
            <p>{t('about.values.expertiseDesc')}</p>
          </ValueItem>
          <ValueItem>
            <ValueTitle>{t('about.values.authenticity')}</ValueTitle>
            <p>{t('about.values.authenticityDesc')}</p>
          </ValueItem>
          <ValueItem>
            <ValueTitle>{t('about.values.smallGroups')}</ValueTitle>
            <p>{t('about.values.smallGroupsDesc')}</p>
          </ValueItem>
        </ValuesGrid>
      </ValuesSection>

      <Section>
        <TitleWrap>
          <SectionTitle>{t('about.whyChoose.title')}</SectionTitle>
        </TitleWrap>
        <Grid>
          <Card>
            <CardTitle>{t('about.whyChoose.localExpertise')}</CardTitle>
            <CardText>
              {t('about.whyChoose.localExpertiseDesc')}
            </CardText>
          </Card>
          <Card>
            <CardTitle>{t('about.whyChoose.safety')}</CardTitle>
            <CardText>
              {t('about.whyChoose.safetyDesc')}
            </CardText>
          </Card>
          <Card>
            <CardTitle>{t('about.whyChoose.photography')}</CardTitle>
            <CardText>
              {t('about.whyChoose.photographyDesc')}
            </CardText>
          </Card>
          <Card>
            <CardTitle>{t('about.whyChoose.culture')}</CardTitle>
            <CardText>
              {t('about.whyChoose.cultureDesc')}
            </CardText>
          </Card>
        </Grid>
      </Section>



      <TourOptionsSection>
        <TitleWrap>
          <SectionTitle>{t('about.tours.title')}</SectionTitle>
        </TitleWrap>
        <TourOptionsGrid>
          <TourCard>
            <TourIcon>
              <FaBus />
            </TourIcon>
            <TourTitle>{t('about.tours.premiumBus.title')}</TourTitle>
            <TourDescription>
              {t('about.tours.premiumBus.description')}
            </TourDescription>
          </TourCard>
          
          <TourCard>
            <TourIcon>
              <FaCar />
            </TourIcon>
            <TourTitle>{t('about.tours.private.title')}</TourTitle>
            <TourDescription>
              {t('about.tours.private.description')}
            </TourDescription>
          </TourCard>
          
          <TourCard>
            <TourIcon>
              <FaUsers />
            </TourIcon>
            <TourTitle>{t('about.tours.smallGroup.title')}</TourTitle>
            <TourDescription>
              {t('about.tours.smallGroup.description')}
            </TourDescription>
          </TourCard>
          
          <TourCard>
            <TourIcon>
              <FaStar />
            </TourIcon>
            <TourTitle>{t('about.tours.luxury.title')}</TourTitle>
            <TourDescription>
              {t('about.tours.luxury.description')}
            </TourDescription>
          </TourCard>
        </TourOptionsGrid>
      </TourOptionsSection>
    </AboutContainer>
  );
};

export default AboutPage;