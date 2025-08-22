import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { proxyImage } from '../utils/imageProxy';

const PageBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(2,6,23,0.85), rgba(2,6,23,0.65)),
              url('${proxyImage("https://www.muchbetteradventures.com/magazine/content/images/2019/07/12102929/iStock-992710110.jpg")}') center/cover no-repeat;
  z-index: -1;
  filter: saturate(1.1) brightness(0.9);
  background-attachment: fixed;
`;

const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const GalleryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const GalleryTitle = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const GallerySubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.15);
  padding: 1rem;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.active ? 'var(--accent-orange)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.9)'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: var(--accent-orange);
    color: white;
    background: rgba(255, 140, 66, 0.3);
  }
  
  ${props => props.active && `
    &:hover {
      background: #ff8c42;
      color: white;
    }
  `}
`;

const SearchBar = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto 2rem;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem;
  border-radius: 30px;
  backdrop-filter: blur(5px);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: var(--accent-orange);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.2rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(10px);
  
  ${GalleryItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const ImageLocation = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  
  &:before {
    content: '📍';
    margin-right: 5px;
    font-size: 0.8rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -2rem;
  background: var(--accent-orange);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #ff8c42;
  }
  
  @media (max-width: 768px) {
    top: -1rem;
    right: -1rem;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const GalleryPage = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'wildlife', label: 'Wildlife' },
    { key: 'landscapes', label: 'Landscapes' },
    { key: 'aurora', label: 'Aurora' },
    { key: 'expeditions', label: 'Expeditions' },
    { key: 'icebergs', label: 'Icebergs' }
  ];

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      // Fetch the list of images from the server
      const response = await fetch('/api/gallery-images');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery images');
      }
      const data = await response.json();
      setImages(data);
      setFilteredImages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = images;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(image => 
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredImages(filtered);
  }, [selectedCategory, searchTerm, images]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  if (loading) {
    return (
      <>
        <PageBackdrop />
        <GalleryContainer>
          <LoadingSpinner>{t('common.loading')}</LoadingSpinner>
        </GalleryContainer>
      </>
    );
  }

  return (
    <>
      <PageBackdrop />
      <GalleryContainer>
        <GalleryHeader>
          <GalleryTitle>{t('gallery.title')}</GalleryTitle>
          <GallerySubtitle>
            {t('gallery.subtitle')}
          </GallerySubtitle>
        </GalleryHeader>

      <SearchBar>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      <FilterSection>
        {categories.map(category => (
          <FilterButton
            key={category.key}
            active={selectedCategory === category.key}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </FilterButton>
        ))}
      </FilterSection>

      <GalleryGrid>
        {filteredImages.map(image => (
          <GalleryItem
            key={image.id}
            onClick={() => openModal(image)}
          >
            <img src={image.src} alt={image.title} />
            <ImageOverlay>
              <ImageTitle>{image.title}</ImageTitle>
              <ImageLocation>{image.location}</ImageLocation>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage 
              src={selectedImage.src} 
              alt={selectedImage.title}
            />
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
          </ModalContent>
        </Modal>
      )}
    </GalleryContainer>
    </>
  );
};

export default GalleryPage;