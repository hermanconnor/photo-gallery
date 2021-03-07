import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {
  const results = props.data;

  let photos;

  if (results.length > 0) {
    photos = results.map(photo => (
      <Photo
        title={photo.title}
        id={photo.id}
        secret={photo.secret}
        server={photo.server}
        key={photo.id}
      />
    ));
  } else {
    photos = <NotFound />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoContainer;
