import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?client_id=JsoASrl4SdrrbhBHBsvcYYVqOUVWOOx8OKwrmS6XO3Y&query=fashion&page=10&per_page=30`);
      const data = await response.json();
      setPhotos(data.results);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleRefreshPhotos = () => {
    fetchPhotos();
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="photos">
        {photos.map(photo => (
          <div key={photo.id} className="photo">
            <img src={photo.urls.small} alt={photo.alt_description} />
            <p>{photo.alt_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
