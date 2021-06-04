import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Line from './Line';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const AboutUs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "laptop.PNG" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 612, maxHeight: 340) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const laptop = data.desktop.childImageSharp.fluid;
  return (
    <section id='about' className='about'>
      <Container>
        <Row>
          <Col className='about__col-left' md={12} lg={6} xl={6}>
            <Img fluid={laptop} className='about__image' />
          </Col>
          <Col className='about__col-right' md={12} lg={6} xl={6}>
            <Line type='large' />
            <h1 className='about__heading'>What's CreditFix</h1>
            <p className='about__text'>
              Creditfix is a licensed lending platform that does data driven
              decision making and assessment for individual and small businesses
              with speed, with the ability to entertain.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
