
import React from 'react'
import { Container, Row, Col } from "reactstrap"
import Object from '../components/Home/Object';
import "../styles/home.css"
import Background from '../assets/Background.png';

const Home = () => {


  return (
    
    <div className='homePage'>
    
    <div className='homePage__container'>
        <img className='homePage__img' src={Background} alt="homePageImage"></img>
        <Container>
        <Object/>
    </Container>
    </div>

</div>
  )
}

export default Home