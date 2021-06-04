import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LocationCard from './LocationCard';
import Line from './Line';
import owais from '../images/owais.jpeg';

const Locations = () => {
  return (
    <div className='locations'>
      <Container>
        <Row>
          <Col xl={12}>
            <div className='locations__heading-wrapper'>
              <h2 className='locations__heading'>OUR LOCATIONS</h2>
              <Line type='large' />
              <p className='locations__text'>
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
                sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
                dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                ipsum dolor sit
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='locations__col' xl={4}>
            <LocationCard
              image={owais}
              name='Islamabad'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
          <Col className='locations__col' xl={4}>
            <LocationCard
              image={owais}
              name='Lahore'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
          <Col className='locations__col' xl={4}>
            <LocationCard
              image={owais}
              name='Karachi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Locations;
