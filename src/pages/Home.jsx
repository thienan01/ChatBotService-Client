
import React from 'react'
import { Container, Row, Col } from "reactstrap"
import "../styles/home.css"
import Background from '../assets/Background.png';
import Object from '../components/Home/Object';
import Label from '../components/Home/Label';
import Howitwork from '../components/Home/Howitwork';


const Home = () => {


  return (
    
    <div className='homePage'>
    <div className='homePage__container'>
        <img className='homePage__img' src={Background} alt="homePageImage"></img>
        <Container>
          <Object />
          <div className='label__container'>
          <Label />
          <Label />
          <Label />
          <Label />
          </div>
          <Howitwork/>
    </Container>
    </div>
</div>
  )
}

export default Home