import React from 'react'
import "../../styles/howitwork.css"
import howitworkimg from '../../assets/howitwork.png'

function Howitwork() {
  return (
    <div className='how__ToWork'>
    <h2>How it works</h2>
    <p>Amazon Lex is a fully managed artificial intelligence (AI) service with advanced natural language models to design, build, test, and deploy conversational interfaces in applications</p>
    <img src={howitworkimg} alt="howitworking"></img>
  </div>
  )
}

export default Howitwork