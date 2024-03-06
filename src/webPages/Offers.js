import React from 'react';
import useHomeGetData from "./HomeGetData";

const Offers = () => {
  const offers = useHomeGetData("https://ehealthcareserviceappdata.onrender.com/offers");

  return (
    <section>
      <div className='container'>
        <div className='row'>


          <h3 className='text-center'><span>OFFERS</span></h3>
          <div className="wrapper">

            <div className="circle-container">

              <div className="circle"></div>
            </div>
            {offers.map((item) => {
             
              if(item.id%2===0)
              {
                return (
                  <div className="row" key={item.id}>
                   
                     <div className='sub'>
                     <div className="col-md-6" >
                     <div className='text-right container-left'>
                        <h5 className=""><p className="speech-left">{item.name}<br />{item.offer}</p></h5>
                      </div>
                      </div>
                    <div className="col-md-6">
                      &nbsp;
                    </div>
                    
                  </div>
                  </div>
  
                )
              }
              else{
                return (
                  <div className="row"  key={item.id}>
                    <div className='sub'>
                   <div className="col-md-6">
                      &nbsp;
                      </div>
                      <div className="col-md-6">
                      <div className='container-right'>
                        <h5 className=""><p className='speech'>{item.name}<br />{item.offer}</p></h5>
                        </div>
                    </div>
                    </div>
                  </div>
  
                )
              }
            })}
           
  </div>

          </div>
        </div>
    </section>

  )
}

export default Offers