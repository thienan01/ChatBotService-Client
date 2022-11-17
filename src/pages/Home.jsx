
import React from 'react'
import { Container, Row, Col } from "reactstrap"

import "../styles/home.css"
import Background from '../assets/Background.png';

const Home = () => {


  return (
    
    <div className='homePage'>
    
    <div className='homePage__container'>
        <img className='homePage__img' src={Background} alt="homePageImage"></img>
        <Container>
        <Row>
          
          <Col lg="6" md="6" sm="6" className="m-auto text-center">
            <h4 className='title__chatbox'>AI ChatBox Customer</h4>
            <h1 className='title__chatboxDescription'>Build Chat Box Using The AI API </h1>
            <div className='started__chatbox'>Get Started With AI</div>
          </Col>
   
          <Col lg="6" md="6" sm="6" className="m-auto text-center">
          <p className='homePage__descriptionRightSideText'>Create Voice Call Using API Support For Sale or Provide Service Better</p>
          </Col>
    </Row>
    </Container>
    </div>

</div>
  )
}

export default Home