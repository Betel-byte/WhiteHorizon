import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import { FaTrophy, FaUserTie, FaLeaf } from 'react-icons/fa';

// Global styles to ensure full-screen effect
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    background: #0f172a;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    overflow-x: hidden;
    background: #0f172a;
  }
  
  #root {
    height: 100%;
  }
`;



const HeroSection = styled.section`
  position: relative;
  height: 10vh;
  min-height: 80px;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  animation: fadeInUp 1.2s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  line-height: 1.3;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(249, 115, 22, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const Section = styled.section`
  padding: 6rem 0;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
  
  &:nth-child(even) {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TripsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const TripCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TripImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const TripContent = styled.div`
  padding: 1.5rem;
`;

const TripTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--deep-blue);
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const TripButton = styled(Link)`
  display: inline-block;
  background: var(--deep-blue);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1a365d;
  }
`;

const ImageCarouselSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
`;

const CarouselContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

const CarouselSectionTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: white;
  z-index: 8;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
  font-weight: 700;
  letter-spacing: -0.5px;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding: 0.6rem 1.5rem;
    top: 1rem;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 1.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  transform: translateX(-${props => props.currentSlide * 100}%);
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
`;

const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 1s ease-in-out;
  opacity: ${props => props.active ? 1 : 0.5};
  transform: scale(${props => props.active ? 1.02 : 1});
  filter: brightness(${props => props.active ? 1 : 0.8});
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(11, 18, 32, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%);
    z-index: 2;
  }
`;

const CarouselContent = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 0;
  right: 0;
  color: white;
  padding: 3rem 3rem 2rem;
  transition: all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  opacity: ${props => props.active ? 1 : 0};
  transform: ${props => props.active ? 'translateY(0)' : 'translateY(40px)'};
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  pointer-events: none;
  
  @media (max-width: 768px) {
    bottom: 7rem;
    padding: 2rem 2rem 1rem;
  }
`;

const CategoryLabel = styled.span`
  display: inline-block;
  background: transparent;
  padding: 0.6rem 1.4rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 11;
  pointer-events: auto;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const CarouselTitle = styled.h3`
  font-size: 2.8rem;
  margin: 0.5rem 0;
  font-weight: 800;
  color: white;
  max-width: 800px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  letter-spacing: 0.5px;
  line-height: 1.2;
  position: relative;
  padding-bottom: 5px;
  display: inline-block;
  z-index: 11;
  pointer-events: auto;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CarouselDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 700px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
  margin-top: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.3px;
  opacity: 1;
  position: relative;
  z-index: 11;
  pointer-events: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
`;

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: ${props => props.active ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  outline: none;
  pointer-events: auto;
  z-index: 12;
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.3);
  }
  
  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    background: transparent;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${props => props.active && `
    &::after {
      opacity: 1;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    }
  `}
`;

const CategoryNavigation = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
  position: relative;
  z-index: 12;
  pointer-events: auto;
`;

const CategoryButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0 5px;
  position: relative;
  z-index: 12;
  pointer-events: auto;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    font-weight: 700;
  }
  
  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: #1e293b;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: white;
  display: inline-block;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const AdventureSection = styled.section`
  position: relative;
  color: white;
  padding: 6rem 0;
  overflow: hidden;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://www.qantas.com/content/travelinsider/en/travel-tips/how-to-see-the-northern-lights/jcr:content/parsysTop/hero.img.full.medium.jpg/1587980552111.jpg') center/cover;
    opacity: 0.2;
    z-index: 1;
  }
`;

const AdventureContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AdventureTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AdventureSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const AdventureButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ExperienceSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ExperienceBackground = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(11, 18, 32, 0.7) 0%, rgba(15, 23, 42, 0.5) 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: auto;
  }
`;

const ExperienceContent = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: white;
  z-index: 2;
`;

const ExperienceTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  margin-top: 1rem;
  color: white;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const ExperienceDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 4rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  opacity: 0.95;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const ExperienceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  ${ExperienceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ExperienceCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
`;

const ExperienceCardText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1.1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    border-radius: 15px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const HeroImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(11, 18, 32, 0.6) 0%, rgba(15, 23, 42, 0.4) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const HeroImageTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeroImageSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TitleWrap = styled.div`
  background: url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat;
  border-radius: 14px;
  padding: 40px 20px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  > * { 
    position: relative; 
    z-index: 1; 
  }
`;

const ImageCarousel = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = React.useRef(null);

  // Define image categories using local images from uploads folder
  const northernLightsImages = [
    {
      src: "https://s.yimg.com/ny/api/res/1.2/C_6PxwYiMbVf9vUw6ZqZRg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MTQ7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2025-08/1e7c55d0-739d-11f0-b66f-ffc10fa4c7b6",
      title: t('carousel.auroraBorealis.title'),
      description: t('carousel.auroraBorealis.description'),
      category: t('carousel.categories.northernLights'),
    }
  ];

  const arcticWildlifeImages = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/6455d3d82007782c081fad44/1691866239045-5VECRU9TF1ZV9YHIU6S8/image-asset.jpeg",
      title: t('carousel.polarBear.title'),
      description: t('carousel.polarBear.description'),
      category: t('carousel.categories.wildlife'),
    },
    {
      src: "https://www.bornfree.org.uk/wp-content/uploads/2023/11/hans-jurgen-mager-CHqbiMhQ_wE-unsplash-scaled.jpg",
      title: t('carousel.polarBearExpedition.title'),
      description: t('carousel.polarBearExpedition.description'),
      category: t('carousel.categories.wildlife'),
    },
  ];

  const fjordImages = [
    {
      src: "https://v.imgi.no/3f2f8lqzxt",
      title: t('carousel.majesticFjords.title'),
      description: t('carousel.majesticFjords.description'),
      category: t('carousel.categories.fjords'),
    },
    {
      src: "https://www.hollandamerica.com/blog/wp-content/uploads/2023/08/norway-fjords.webp",
      title: t('carousel.fjordCruise.title'),
      description: t('carousel.fjordCruise.description'),
      category: t('carousel.categories.fjords'),
    },
    {
      src: "https://www.lifeinnorway.net/wp-content/uploads/2024/04/norway-fjord-cruise-with-pink-sky-768x432.jpg",
      title: t('carousel.scenicFjords.title'),
      description: t('carousel.scenicFjords.description'),
      category: t('carousel.categories.fjords'),
    },
  ];

  // Create a properly organized array with all images grouped by category
  const attractionImages = [
    // Northern Lights category
    ...northernLightsImages,
    // Arctic Wildlife category
    ...arcticWildlifeImages,
    // Fjord Tours category
    ...fjordImages,
  ];

  const categories = Array.from(new Set(attractionImages.map(img => img.category)));

  useEffect(() => {
    let interval;
    
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % attractionImages.length);
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [attractionImages.length, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToCategory = (category) => {
    const categoryIndex = attractionImages.findIndex(img => img.category === category);
    if (categoryIndex !== -1) {
      setCurrentSlide(categoryIndex);
    }
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => 
          prev === 0 ? attractionImages.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => 
          (prev + 1) % attractionImages.length
        );
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [attractionImages.length]);

  return (
    <ImageCarouselSection>
      <CarouselContainer>
        <CarouselSectionTitle>{t('carousel.title')}</CarouselSectionTitle>
        <CarouselWrapper 
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <CarouselTrack currentSlide={currentSlide}>
            {attractionImages.map((image, index) => (
              <div key={index} style={{ position: 'relative', minWidth: '100%', height: '100%' }}>
                <CarouselImage 
                  src={image.src} 
                  active={index === currentSlide}
                  role="img"
                  aria-label={image.title}
                />
                <CarouselContent active={index === currentSlide}>
                  <CategoryLabel>{image.category}</CategoryLabel>
                  <CarouselTitle>{image.title}</CarouselTitle>
                  <CarouselDescription>{image.description}</CarouselDescription>
                </CarouselContent>
              </div>
            ))}
          </CarouselTrack>
          <CarouselDots>
            <CategoryNavigation>
              {categories.map(category => (
                <CategoryButton 
                  key={category} 
                  onClick={() => goToCategory(category)}
                  className={currentSlide === attractionImages.findIndex(img => img.category === category) ? 'active' : ''}
                  aria-label={`View ${category} category`}
                >
                  {category}
                </CategoryButton>
              ))}
            </CategoryNavigation>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {attractionImages.map((_, index) => (
                <CarouselDot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </CarouselDots>
        </CarouselWrapper>
      </CarouselContainer>
    </ImageCarouselSection>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  
  // Simple initialization effect
  useEffect(() => {
    // No scroll effects needed
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <GlobalStyle />
      <ImageCarousel />
      <div style={{ height: '1rem', background: '#0f172a' }}></div>
      <HeroSection className="hero-section">
        <HeroContent>
        </HeroContent>
      </HeroSection>
      
      <div style={{ height: '1rem' }}></div>

      <div style={{ height: '1rem' }}></div>
      <ExperienceSection>
        <ExperienceBackground>
          <ExperienceContent>
            <ExperienceTitle>{t('home.experiences.title')}</ExperienceTitle>
            <ExperienceDescription>
              {t('home.experiences.description')}
            </ExperienceDescription>
            <HeroImageContainer>
              <HeroImage src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop" alt="Northern Lights over Norwegian Arctic landscape" />
              <HeroImageOverlay>
                <HeroImageTitle>{t('home.hero.title')}</HeroImageTitle>
                <HeroImageSubtitle>{t('home.hero.subtitle')}</HeroImageSubtitle>
              </HeroImageOverlay>
            </HeroImageContainer>
            <ExperienceGrid>
              <ExperienceCard>
                <ExperienceImage src="/uploads/Northern Light.jpg" alt="Northern Lights" />
                <ExperienceCardTitle>{t('home.experiences.northernLights.title')}</ExperienceCardTitle>
                <ExperienceCardText>
                  {t('home.experiences.northernLights.description')}
                </ExperienceCardText>
              </ExperienceCard>
              
              <ExperienceCard>
                <ExperienceImage src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" alt="Arctic Fjords" />
                <ExperienceCardTitle>{t('home.experiences.fjords.title')}</ExperienceCardTitle>
                <ExperienceCardText>
                  {t('home.experiences.fjords.description')}
                </ExperienceCardText>
              </ExperienceCard>
              
              <ExperienceCard>
                <ExperienceImage src="/uploads/Polar Bear.jpg" alt="Arctic Wildlife" />
                <ExperienceCardTitle>{t('home.experiences.wildlife.title')}</ExperienceCardTitle>
                <ExperienceCardText>
                  {t('home.experiences.wildlife.description')}
                </ExperienceCardText>
              </ExperienceCard>
            </ExperienceGrid>
          </ExperienceContent>
        </ExperienceBackground>
      </ExperienceSection>

      <div style={{ height: '1rem' }}></div>
      <Section>
        <TitleWrap>
          <SectionTitle>{t('home.why.title')}</SectionTitle>
        </TitleWrap>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon>
              <FaTrophy />
            </FeatureIcon>
            <FeatureTitle>{t('home.features.excellence.title')}</FeatureTitle>
            <FeatureDescription>
              {t('home.features.excellence.description')}
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <FaUserTie />
            </FeatureIcon>
            <FeatureTitle>{t('home.features.guides.title')}</FeatureTitle>
            <FeatureDescription>
              {t('home.features.guides.description')}
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <FaLeaf />
            </FeatureIcon>
            <FeatureTitle>{t('home.features.sustainable.title')}</FeatureTitle>
            <FeatureDescription>
              {t('home.features.sustainable.description')}
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      <div style={{ height: '1rem' }}></div>

      <div style={{ height: '1rem' }}></div>
      <AdventureSection>
        <AdventureContent>
          <AdventureTitle>{t('home.adventure.title')}</AdventureTitle>
          <AdventureSubtitle>
            {t('home.adventure.description')}
          </AdventureSubtitle>
          <AdventureButtons>
            <CTAButton to="/gallery" style={{ background: 'white', color: '#1e40af' }}>
              {t('home.adventure.gallery')}
            </CTAButton>
            <CTAButton to="/contact" style={{ background: 'transparent', border: '2px solid white' }}>
              {t('home.adventure.contact')}
            </CTAButton>
          </AdventureButtons>
        </AdventureContent>
      </AdventureSection>

    </div>
  );
};

export default HomePage;