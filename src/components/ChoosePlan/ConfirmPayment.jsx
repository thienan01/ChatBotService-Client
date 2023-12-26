import { React, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { GET, POST, Base } from '../../functionHelper/APIFunction'
const ConfirmPayment = () => {

  let paymentId = Base.getAllUrlParams().paymentId
  let PayerID = Base.getAllUrlParams().PayerID



  const payNow = () => {
    let apiURL = "api/payment/paypal/execute_payment";
    let body = {
      payment_id: paymentId,
      payer_id: PayerID
    };
    POST(
      process.env.REACT_APP_BASE_URL + apiURL, JSON.stringify(body)
    ).then((res) => {
      if (res.http_status === "OK") {
        window.location.href = "/payment/paypal/success"
      }
    })
    .catch ((e) => {
      console.log(e);
    })
    
  };

  function payMoment() {
    payNow()
    //setShow(!true)
    //setShowLoading(!false)
  }


  return (
    <>
      <div id="generic_price_table">
        <section >
          <div className="container">
            {/* BLOCK ROW START */}
            <div className="row">
              <div class="col-md-12">
                <div class="price-heading clearfix">
                  <h2>Thank you for choosing our Premium service package. </h2>
                  <h3>Please confirm the payment.</h3>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-8">
                {/* PRICE CONTENT START */}
                <div className="generic_content clearfix">
                  {/* HEAD PRICE DETAIL START */}
                  <div className="generic_head_price clearfix">
                    {/* HEAD CONTENT START */}
                    <div className="generic_head_content clearfix">
                      {/* HEAD START */}
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Premium</span>
                      </div>
                      {/* //HEAD END */}
                    </div>
                    {/* //HEAD CONTENT END */}
                    {/* PRICE START */}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">299</span>
                        <span className="cent">.99</span>

                      </span>
                    </div>
                    {/* //PRICE END */}
                  </div>
                  {/* //HEAD PRICE DETAIL END */}
                  {/* FEATURE LIST START */}
                  <div className="generic_feature_list row" style={{ textAlign: "left" }}>
                    <ul className='col-md-6' style={{ paddingLeft: "10px" }}>
                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> Create a chatbot and train it with user-generated data</li>
                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> No limit scripts</li>
                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> Import dataset from file excel</li>
                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> Integrate a chatbot into an existing website</li>

                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> Review the chatbot's conversation history with users</li>
                    </ul>
                    <ul className='col-md-6'>
                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span>Free to view and download all datasets on the platform: Data Everywhere </li>

                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> Create a script with high detail and extensive coverage (support 24/7 by admin) </li>
                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span> Generate training data and train the chatbot based on the information on the user's website (support 24/7 by admin)</li>

                      <li><span className='p-1' style={{ color: "green" }}><i class="ri-checkbox-circle-fill"></i></span><span>24/7</span> Support</li>

                    </ul>
                  </div>
                  {/* //FEATURE LIST END */}
                  {/* BUTTON START */}
                  <div className="generic_price_btn clearfix"
                  onClick={payMoment}
                  >
                    <a className="" href="#">
                      Confirm Payment
                    </a>
                  </div>
                  {/* //BUTTON END */}
                </div>
                {/* //PRICE CONTENT END */}
              </div>
              <div className="col-md-2"></div>

            </div>
            {/* //BLOCK ROW END */}
          </div>
        </section>
        <footer className='p-b-10'>
        </footer>
      </div>
      <Footer />

    </>
  )
}

export default ConfirmPayment