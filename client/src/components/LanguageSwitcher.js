import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  background: linear-gradient(135deg, rgba(15, 20, 25, 0.8) 0%, rgba(26, 35, 50, 0.9) 100%);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-weight: 500;
  
  &:hover {
    background: linear-gradient(135deg, rgba(26, 35, 50, 0.9) 0%, rgba(59, 130, 246, 0.3) 100%);
    border-color: #3b82f6;
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const LanguageDropdown = styled.div`
  position: absolute !important;
  top: 100% !important;
  right: 0 !important;
  background: rgba(15, 20, 25, 0.95) !important;
  border: 1px solid rgba(59, 130, 246, 0.4) !important;
  border-radius: 12px !important;
  margin-top: 8px !important;
  min-width: 180px !important;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7) !important;
  z-index: 9999 !important;
  opacity: ${props => props.isOpen ? '1' : '0'} !important;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'} !important;
  transform: translateY(${props => props.isOpen ? '0' : '-10px'}) !important;
  transition: all 0.3s ease !important;
  overflow: hidden !important;
  backdrop-filter: blur(15px) !important;
  
  @media (max-width: 768px) {
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    transform: translate(-50%, -50%) !important;
    margin-top: 0 !important;
    min-width: 220px !important;
  }
`;

const FlagIcon = styled.span`
  font-size: 1.4rem;
  display: inline-block;
  width: 24px;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 28px;
  }
`;

const LanguageOption = styled.button`
  display: flex !important;
  align-items: center !important;
  width: 100% !important;
  padding: 15px 20px !important;
  text-align: left !important;
  background: transparent !important;
  border: none !important;
  color: #ffffff !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  font-size: 1rem !important;
  gap: 15px !important;
  font-family: inherit !important;
  font-weight: 500 !important;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2) !important;
    color: #ffffff !important;
    border-left: 4px solid #3b82f6 !important;
    transform: translateX(2px) !important;
  }
  
  &:first-child {
    border-radius: 12px 12px 0 0 !important;
  }
  
  &:last-child {
    border-radius: 0 0 12px 12px !important;
  }
  
  &:disabled {
    opacity: 1 !important;
    cursor: default !important;
    background: rgba(59, 130, 246, 0.3) !important;
    color: #ffffff !important;
    border-left: 4px solid #3b82f6 !important;
    font-weight: 600 !important;
  }
  
  &:disabled:hover {
    background: rgba(59, 130, 246, 0.3) !important;
    color: #ffffff !important;
  }
  
  @media (max-width: 768px) {
    padding: 18px 25px !important;
    font-size: 1.1rem !important;
  }
`;

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Save to localStorage
    localStorage.setItem('preferredLanguage', languageCode);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = languageCode;
    
    // Update text direction for Arabic
    if (languageCode === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    
    // Force a re-render of the entire app
    window.location.reload();
  };

  return (
    <LanguageContainer ref={dropdownRef}>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        <FlagIcon>{currentLanguage.flag}</FlagIcon>
        <span>{currentLanguage.code.toUpperCase()}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ fontSize: '0.7rem' }}></i>
      </LanguageButton>
      
      <LanguageDropdown isOpen={isOpen}>
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            disabled={lang.code === currentLanguage.code}
            style={{ backgroundColor: 'transparent' }}
          >
            <FlagIcon>{lang.flag}</FlagIcon>
            <span style={{ color: '#ffffff' }}>{lang.name}</span>
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;