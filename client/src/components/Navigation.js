import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { proxyImage } from '../utils/imageProxy';

const Nav = styled.nav`
  background: transparent;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    color: var(--accent-orange);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-280px'};
    width: 280px;
    height: 100vh;
    background: #1a1a2e;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    box-shadow: 4px 0 25px rgba(0, 0, 0, 0.4);
    overflow-y: auto;
    
    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent-orange);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
    letter-spacing: 0.5px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(10px);
      color: #ff6b35;
      font-weight: 500;
    }
  }
`;



const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    margin-top: auto;
    margin-bottom: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('sidebar-open', !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('sidebar-open');
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">White Horizon Expedition</Logo>
          
          <NavLinks isOpen={isMobileMenuOpen} className="mobile-menu">
          <NavLink to="/" onClick={closeMobileMenu}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/#trips" onClick={closeMobileMenu}>
            {t('nav.trips')}
          </NavLink>
          <NavLink to="/gallery" onClick={closeMobileMenu}>
            {t('nav.gallery')}
          </NavLink>
          <NavLink to="/journal" onClick={closeMobileMenu}>
            {t('nav.journal')}
          </NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu}>
            {t('nav.contact')}
          </NavLink>
          
          <LanguageSelector>
            <LanguageSwitcher />
          </LanguageSelector>
        </NavLinks>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContainer>
      </Nav>
      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
    </>
  );
};

export default Navigation;