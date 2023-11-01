import React from 'react';
import useHomeGetData from "./HomeGetData";

const Offers = () => {
  const offers = useHomeGetData("http://localhost:4000/offers");

  return (
    <section>
      <div className='container'>
        <div className='row'>


          <h2 className='text-center'>OFFERS</h2>
          <div className="wrapper">

            <div className="circle-container">

              <div className="circle"></div>
            </div>
            {offers.map((item) => {
              return (
                <div className="sub" key={item.id}>
                  <div className="container-left" >
                    <p className="speech-left"><h5>{item.name}</h5></p>
                  </div>
                  <div className="container-right">
                    <p className="speech"><h5>{item.offer}</h5></p>
                  </div>
                </div>

              )
            })}
            {/*
  <div className="circle-container">
    Dentist Service
    <div className="circle"></div>
  </div>
  <div className="sub">
    <div className="container-left">
      <p className="speech-left">15% OFF</p>
    </div>
    <div className="container-right"></div>
  </div>
  <div className="circle-container">
    Pharmacy Service
    <div className="circle"></div>
  </div>
  <div className="sub">
    <div className="container-left"></div>
    <div className="container-right">
      <p className="speech">25% OFF</p>
    </div>
  </div>
  <div className="circle-container">
  MidWifery Service
    <div className="circle"></div>
  </div>
  <div className="sub">
    <div className="container-left">
      <p className="speech-left">25% OFF</p>
    </div>
    <div className="container-right"></div>
  </div>
  <div className="circle-container">
    Nursing Service
    <div className="circle"></div>
  </div>
  <div className="sub">
    <div className="container-left"></div>
    <div className="container-right">
      <p className="speech">20% OFF</p>
    </div>
  </div>
  <div className="circle-container">
  Optometry Service
    <div className="circle"></div>
  </div>
  <div className="sub">
    <div className="container-left">
      <p className="speech-left">15% OFF</p>
    </div>
    <div className="container-right"></div>
  </div>
  <div className="circle-container">
  Audiology Service
    <div className="circle"></div>
  </div>
  <div className="sub">
    <div className="container-left"></div>
    <div className="container-right">
      <p className="speech">30% OFF</p>
    </div>
  </div>
  
  */}

          </div>
        </div>
      </div>
    </section>

  )
}

export default Offers