import React from 'react';
import { Image } from 'react-bootstrap';
import Line from './Line';

const LocationCard = (props) => {
  const { image, name, description } = props;

  return (
    <div className='location-card'>
      <Image fluid={false} src={image} className='location-card__image' />
      <div className='location-card__name'>{name}</div>
      <Line type='large' />
      <p className='location-card__text'>{description}</p>
    </div>
  );
};

export default LocationCard;
