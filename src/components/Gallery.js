import React, { useState } from 'react';
import './Gallery.css';

// Список аборигенов с их изображениями
const aborigines = [
  {
    name: 'Толстяк',
    images: [
      '/mutants/tolstyak1.jpg',
      '/mutants/tolstyak2.webp',
      '/mutants/tolstyak3.jpg',
      '/mutants/tolstyak4.jpg',
    ],
  },
  {
    name: 'Рукастый',
    images: [
      '/mutants/rukasty1.jpg',
      '/mutants/rukasty2.jpg',
      '/mutants/rukasty3.webp',
      '/mutants/rukasty4.webp',
    ],
  },
  {
    name: 'Вирджиния',
    images: [
      '/mutants/virginia1.webp',
      '/mutants/virginia2.webp',
      '/mutants/virginia3.webp',
      '/mutants/virginia4.png',
    ],
  },
  {
    name: 'Червь',
    images: [
      '/mutants/cherwv1.jpg',
      '/mutants/cherwv2.jpg',
      '/mutants/cherwv3.png',
      '/mutants/cherwv4.jpg',
    ],
  },
  {
    name: 'Младенец-мутант',
    images: [
      '/mutants/mladenets1.jpg',
      '/mutants/mladenets2.jpeg',
      '/mutants/mladenets3.png',
      '/mutants/mladenets4.jpg',
    ],
  },
  {
    name: 'Меган Кросс',
    images: [
      '/mutants/megancross1.jpg',
      '/mutants/megancross2.webp',
      '/mutants/megancross3.webp',
      '/mutants/megancross4.webp',
    ],
  },
];

const Gallery = () => {
  const [selectedAborigine, setSelectedAborigine] = useState(aborigines[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  const handleAborigineClick = (index) => {
    setSelectedAborigine(aborigines[index]);
    setCurrentIndex(0); // Сброс индекса изображений
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Галерея</h2>
      <div className="gallery-nav">
        <ul>
          {aborigines.map((aborigene, index) => (
            <li
              key={index}
              onClick={() => handleAborigineClick(index)}
              className={selectedAborigine === aborigene ? 'active' : ''}
            >
              {aborigene.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <img
            className="carousel-image"
            src={selectedAborigine.images[(currentIndex - 1 + 4) % 4]}
            alt="prev"
            onClick={() => changeImage((currentIndex - 1 + 4) % 4)}
          />
          <img
            className="carousel-image main"
            src={selectedAborigine.images[currentIndex]}
            alt="main"
          />
          <img
            className="carousel-image"
            src={selectedAborigine.images[(currentIndex + 1) % 4]}
            alt="next"
            onClick={() => changeImage((currentIndex + 1) % 4)}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
