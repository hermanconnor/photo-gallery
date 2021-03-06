import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = (props) => {
  const results = props.data;

  let photos;

  // If Photos, Iterate Array & Pass Props To Photo Component
  if (results.length > 0) {
    photos = results.map((photo) => (
      <Photo
        title={photo.title}
        id={photo.id}
        secret={photo.secret}
        server={photo.server}
        key={photo.id}
      />
    ));
  } else {
    // If No Photos, Display Not Found Component
    photos = <NotFound />;
  }

  return (
    <div className="photo-container">
      <h2>{props.query}</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default Gallery;
