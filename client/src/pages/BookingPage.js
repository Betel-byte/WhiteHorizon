import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const BookingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BookingTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--deep-blue);
  margin-bottom: 1rem;
`;

const BookingSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--medium-gray);
`;

const BookingForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormSectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--deep-blue);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--accent-orange);
  padding-bottom: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--deep-blue);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--accent-orange);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--accent-orange);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--accent-orange);
  }
`;

const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

const SubmitButton = styled.button`
  background: var(--accent-orange);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  max-width: 300px;
  margin: 0 auto;
  
  &:hover {
    background: #ff8c42;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const PriceSummary = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--deep-blue);
  border-top: 2px solid var(--accent-orange);
  padding-top: 0.5rem;
  margin-top: 0.5rem;
`;

const BookingPage = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    fetchTripDetails();
  }, [tripId]);

  const fetchTripDetails = async () => {
    try {
      const response = await axios.get(`/api/trips/${tripId}`);
      setTrip(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching trip details:', error);
      setLoading(false);
    }
  };

  const calculateTotalPrice = () => {
    if (!trip) return 0;
    const adultPrice = trip.price * adults;
    const childPrice = trip.price * 0.7 * children; // 30% discount for children
    return adultPrice + childPrice;
  };

  const onSubmit = async (data) => {
    try {
      const bookingData = {
        ...data,
        tripId: parseInt(tripId),
        adults,
        children,
        totalPrice: calculateTotalPrice(),
        date: selectedDate,
        language: i18n.language
      };

      await axios.post('/api/bookings', bookingData);
      
      toast.success(t('booking.success'));
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(t('booking.error'));
    }
  };

  if (loading) {
    return <BookingContainer>Loading...</BookingContainer>;
  }

  if (!trip) {
    return <BookingContainer>Trip not found</BookingContainer>;
  }

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Norway', 'Sweden', 'Denmark', 'Netherlands', 'Australia', 'Japan', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Other'
  ];

  return (
    <BookingContainer>
      <ToastContainer position="top-right" />
      
      <BookingHeader>
        <BookingTitle>{t('booking.title')}</BookingTitle>
        <BookingSubtitle>
          {trip.title[i18n.language] || trip.title.en}
        </BookingSubtitle>
      </BookingHeader>

      <BookingForm onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FormSectionTitle>{t('booking.personalInfo')}</FormSectionTitle>
          
          <FormGroup>
            <Label>{t('booking.firstName')} *</Label>
            <Input
              {...register('firstName', { required: t('validation.required') })}
            />
            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>{t('booking.lastName')} *</Label>
            <Input
              {...register('lastName', { required: t('validation.required') })}
            />
            {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>{t('booking.email')} *</Label>
            <Input
              type="email"
              {...register('email', { 
                required: t('validation.required'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('validation.email')
                }
              })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>{t('booking.phone')} *</Label>
            <Input
              type="tel"
              {...register('phone', { required: t('validation.required') })}
            />
            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>{t('booking.country')} *</Label>
            <Select {...register('country', { required: t('validation.required') })}>
              <option value="">{t('booking.country')}</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </Select>
            {errors.country && <ErrorMessage>{errors.country.message}</ErrorMessage>}
          </FormGroup>
        </FormSection>

        <FormSection>
          <FormSectionTitle>{t('trip.dates')}</FormSectionTitle>
          
          <FormGroup>
            <Label>{t('booking.date')} *</Label>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>{t('booking.adults')} *</Label>
            <Select 
              value={adults} 
              onChange={(e) => setAdults(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>{t('booking.children')}</Label>
            <Select 
              value={children} 
              onChange={(e) => setChildren(parseInt(e.target.value))}
            >
              {[0, 1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </Select>
          </FormGroup>

          <PriceSummary>
            <PriceRow>
              <span>Adults ({adults} × ${trip.price})</span>
              <span>${trip.price * adults}</span>
            </PriceRow>
            {children > 0 && (
              <PriceRow>
                <span>Children ({children} × ${Math.round(trip.price * 0.7)})</span>
                <span>${Math.round(trip.price * 0.7 * children)}</span>
              </PriceRow>
            )}
            <TotalPrice>
              <span>{t('booking.totalPrice')}</span>
              <span>${calculateTotalPrice()}</span>
            </TotalPrice>
          </PriceSummary>

          <FormGroup>
            <Label>{t('booking.specialRequests')}</Label>
            <TextArea
              {...register('specialRequests')}
              placeholder="Any dietary requirements, accessibility needs, or special requests..."
            />
          </FormGroup>
        </FormSection>

        <SubmitButton type="submit">
          {t('booking.submit')}
        </SubmitButton>
      </BookingForm>
    </BookingContainer>
  );
};

export default BookingPage;