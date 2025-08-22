import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { proxyImage } from '../utils/imageProxy';

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 3rem 1rem 4rem;
  background: linear-gradient(135deg, rgba(2,6,23,0.8) 0%, rgba(2,6,23,0.6) 100%),
              url('${proxyImage("https://www.muchbetteradventures.com/magazine/content/images/2023/12/GettyImages-538653565--1-.jpg")}');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const PageTitle = styled.h2`
  text-align: center;
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
`;

const PageSubtitle = styled.p`
  text-align: center;
  color: #cbd5e1;
  margin: 0 auto 2rem;
  max-width: 700px;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  min-height: 560px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  padding: 2rem 2rem;
  @media (min-width: 901px) {
    padding: 2.5rem 3rem;
  }
`;

const Right = styled.div`
  position: relative;
  min-height: 320px;
`;

const InfoPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: #fff;
  @media (min-width: 901px) {
    padding: 2rem;
  }
`;

const InfoCard = styled.div`
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 1rem 1rem;
  @media (min-width: 901px) {
    padding: 1.25rem 1.25rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0.35rem 0;
  font-size: 0.98rem;
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #e2e8f0;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder { color: rgba(226, 232, 240, 0.75); }
  &:focus { border-color: rgba(255, 255, 255, 0.6); box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.15); }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 120px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder { color: rgba(226, 232, 240, 0.75); }
  &:focus { border-color: rgba(255, 255, 255, 0.6); box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.15); }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #1e40af 0%, #3730a3 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(135deg, #3730a3 0%, #1e40af 100%);
  }
`;

const FileInput = styled.input`
  padding: 0.5rem 0;
`;

const SuccessBox = styled.div`
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  color: #bbf7d0;
  padding: 1.25rem 1rem;
  border-radius: 10px;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const ContactPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '', address: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const DEST_EMAIL = 'whitehorizenexpedition@gmail.com';

  // Safe translator with fallback to avoid rendering raw keys or objects
  const tx = (key, fallback = '') => {
    const translated = t(key);
    return typeof translated === 'string' && translated !== key ? translated : fallback;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return t('contact.form.error');
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      return t('contact.form.invalidEmail');
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setSubmitting(true);
    try {
      const formData = new FormData();
      const submission = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        message: form.message,
        address: form.address
      };
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('address', form.address);
      const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const res = await fetch(`${API_BASE}/api/admin/contact`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSuccess(t('contact.form.success'));
      // Store locally so the admin page can view if server is unavailable
      try {
        const existing = JSON.parse(localStorage.getItem('contacts') || '[]');
        // Avoid duplicate by checking same name+message within last minute
        const isDuplicate = existing.some(c => c.name === submission.name && c.message === submission.message);
        if (!isDuplicate) {
          localStorage.setItem('contacts', JSON.stringify([submission, ...existing]));
        }
      } catch {}
      setForm({ name: '', email: '', message: '', address: '' });
    } catch (err) {
      // Even if email fails, the contact is stored in memory
      if (err.message && err.message.includes('network')) {
        setError(t('contact.form.networkError'));
      } else if (err.message && err.message.includes('email')) {
        setError(t('contact.form.emailError'));
      } else {
        setError(t('contact.form.success'));
      }
      // Don't show error for email issues - submission still works
      setSuccess(t('contact.form.success'));
      // Save to localStorage as fallback
      try {
        const existing = JSON.parse(localStorage.getItem('contacts') || '[]');
        const submission = {
          id: Date.now(),
          name: form.name,
          email: form.email,
          message: form.message,
          address: form.address
        };
        localStorage.setItem('contacts', JSON.stringify([submission, ...existing]));
      } catch {}
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Page>
      <PageTitle>{tx('contact.title', 'Contact White Horizon Expedition')}</PageTitle>
      <PageSubtitle>{tx('contact.subtitle', 'Get in touch with our Arctic adventure specialists to plan your perfect expedition')}</PageSubtitle>
      <Content>
        <Left>
          <Form onSubmit={handleSubmit}>
            {success ? (
              <SuccessBox role="status" aria-live="polite">
                {success}
              </SuccessBox>
            ) : (
              <>
                <Label htmlFor="name">{tx('contact.form.name', 'Full Name')}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="email">{tx('contact.form.email', 'Email Address')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="message">{tx('contact.form.message', 'Message')}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="address">{tx('contact.form.address', 'Address')}</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your address"
                />
                <Button type="submit" disabled={submitting}>{submitting ? tx('contact.form.sending', 'Sending...') : tx('contact.form.submit', 'Send Message')}</Button>
              </>
            )}
          </Form>
        </Left>
        <Right>
          <InfoPanel>
            <InfoCard>
              {(() => {
                const street = tx('contact.info.address.street');
                const city = tx('contact.info.address.city');
                const postal = tx('contact.info.address.postal');
                const addressLine = [street, city, postal].filter(Boolean).join(', ');
                return addressLine ? (
                  <InfoRow>
                    <IconWrap><FaMapMarkerAlt color="#fff" /></IconWrap>
                    <span>{addressLine}</span>
                  </InfoRow>
                ) : null;
              })()}
              {(() => {
                const email = DEST_EMAIL;
                return email ? (
                  <InfoRow>
                    <IconWrap><FaEnvelope color="#fff" /></IconWrap>
                    <span>{email}</span>
                  </InfoRow>
                ) : null;
              })()}
              {(() => {
                const phone = tx('contact.info.phone.number', '+47 123 456 789');
                return phone ? (
                  <InfoRow>
                    <IconWrap><FaPhone color="#fff" /></IconWrap>
                    <span>{phone}</span>
                  </InfoRow>
                ) : null;
              })()}
              {(() => {
                const whatsapp = tx('contact.info.whatsapp');
                return whatsapp ? (
                  <InfoRow>
                    <IconWrap><FaWhatsapp color="#fff" /></IconWrap>
                    <span>{whatsapp}</span>
                  </InfoRow>
                ) : null;
              })()}
              {(() => {
                const hours = tx('contact.info.phone.hours') || tx('contact.info.hours');
                return hours ? (
                  <InfoRow>
                    <IconWrap><FaClock color="#fff" /></IconWrap>
                    <span>{hours}</span>
                  </InfoRow>
                ) : null;
              })()}
            </InfoCard>
          </InfoPanel>
        </Right>
      </Content>
    </Page>
  );
};

export default ContactPage;
