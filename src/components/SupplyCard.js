import React from 'react';
import { Image } from 'react-bootstrap';
import Line from './Line';

const SupplyCard = (props) => {
  const { title, text, image } = props;

  return (
    <div className='supply-card'>
      <div className='supply-card-inner'>
        <div className='supply-card-front'>
          <Image className='supply-card-image' fluid={true} src={image} />
          <Line />
          <div className='supply-card-title-wrapper'>
            <div className='supply-card-title'>{title}</div>
          </div>
        </div>
        <div className='supply-card-back'>
          <div className='supply-card-back-wrapper'>
            <div className='supply-card-back-phone'>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyCard;
