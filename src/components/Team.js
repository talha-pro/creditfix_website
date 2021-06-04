import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './TeamCard';
import Line from './Line';
import owais from '../images/owais.jpeg';

const Team = () => {
  return (
    <div className='team'>
      <Container>
        <Row>
          <Col xl={12}>
            <div className='team__heading-wrapper'>
              <h2 className='team__heading'>OUR TEAM</h2>
              <Line type='large' />
              <p className='team__text'>
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
                sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
                dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                ipsum dolor sit
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='team__col' xl={4}>
            <TeamCard
              image={owais}
              name='Owais Zaidi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
          <Col className='team__col' xl={4}>
            <TeamCard
              image={owais}
              name='Owais Zaidi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
          <Col className='team__col' xl={4}>
            <TeamCard
              image={owais}
              name='Owais Zaidi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
        </Row>
        <Row>
          <Col className='team__col' xl={4}>
            <TeamCard
              image={owais}
              name='Owais Zaidi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
          <Col className='team__col' xl={4}>
            <TeamCard
              image={owais}
              name='Owais Zaidi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
          <Col className='team__col' xl={4}>
            <TeamCard
              image={owais}
              name='Owais Zaidi'
              description='Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
