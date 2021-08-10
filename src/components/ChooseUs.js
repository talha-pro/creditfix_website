import React from 'react';
import ChooseUsCard from './ChooseUsCard';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Line from './Line';
import EasyProcess from '../images/easy-process.svg';
import Fast from '../images/fast-loan.svg';
import Capacity from '../images/capacity.svg';
import digital from '../images/digital.svg';
import time from '../images/time.svg';
import risk from '../images/risk.svg';
import cost from '../images/cost.svg';
import advantage from '../images/advantage.svg';
import simple from '../images/simple.svg';
import configure from '../images/configure.svg';
import choice from '../images/choice.svg';

import AliceCarousel from 'react-alice-carousel';

// import backgroundPattern from "../images/backgroundPattern.svg"

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  992: { items: 2 },
  1200: { items: 3 },
};

const items = [
  <ChooseUsCard image={EasyProcess} text='Easy Application Process' />,

  <ChooseUsCard image={time} text='24/7 access to active financings' />,

  <ChooseUsCard image={cost} text='Lowest Rates in the market' />,

  <ChooseUsCard image={simple} text='No manual paperwork required ' />,

  <ChooseUsCard image={choice} text='Shariah Compliant' />,
];

const ChooseUS = () => {
  return (
    <section className='choose-us'>
      {/* <Image fluid={true} className="background" src={backgroundPattern} /> */}
      <Container>
        <Row>
          <Col className='choose-us__col'>
            <Line type='large' />
            <h1 className='choose-us__heading'>Why Choose Us?</h1>
            <div className='choose-us__wrapper'>
              <AliceCarousel
                infinite={true}
                autoPlay={true}
                items={items}
                responsive={responsive}
                animationDuration={4000}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUS;
