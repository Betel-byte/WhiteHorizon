import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  padding: 60px 0 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  h3 {
    color: #00bcd4;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;

const FooterLink = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00bcd4;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #b0b0b0;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00bcd4;
  }
`;

const ContactInfo = styled.div`
  p {
    margin-bottom: 10px;
    color: #b0b0b0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid #333;
  color: #b0b0b0;
  font-size: 0.9rem;
`;

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>{t('footer.about.title')}</h3>
          <p style={{ color: '#b0b0b0', lineHeight: '1.6' }}>
            {t('footer.about.description')}
          </p>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/wheo.fficial" aria-label="Instagram @wheo.fficial" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> @wheo.fficial
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#" aria-label="YouTube">
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.explore.title')}</h3>
          <FooterLink href="/trips">{t('footer.explore.trips')}</FooterLink>
          <FooterLink href="/gallery">{t('footer.explore.gallery')}</FooterLink>
          <FooterLink href="/about">{t('footer.explore.about')}</FooterLink>
          <FooterLink href="/blog">{t('footer.explore.blog')}</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.support.title')}</h3>
          <FooterLink href="/contact">{t('footer.support.contact')}</FooterLink>
          <FooterLink href="/faq">{t('footer.support.faq')}</FooterLink>
          <FooterLink href="/terms">{t('footer.support.terms')}</FooterLink>
          <FooterLink href="/privacy">{t('footer.support.privacy')}</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>{t('footer.contact.title')}</h3>
          <ContactInfo>
            <p><strong>{t('footer.contact.address')}:</strong><br />
              {t('footer.contact.addressDetail')}</p>
            <p><strong>{t('footer.contact.phone')}:</strong><br />
              +47 123 456 789</p>
            <p><strong>{t('footer.contact.email')}:</strong><br />
              info@whitehorizonexpedition.com</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} White Horizon Expedition. {t('footer.copyright')}</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;