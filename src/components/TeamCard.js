import React from 'react';
import { Image } from 'react-bootstrap';
import Line from './Line';

const TeamCard = (props) => {
  const { image, name, description } = props;

  return (
    <div className='team-card'>
      <Image fluid={false} src={image} className='team-card__image' />
      <div className='team-card__name'>{name}</div>
      <Line type='large' />
      <p className='team-card__text'>{description}</p>
    </div>
  );
};

export default TeamCard;
