import React from 'react'
import cardLogo from '../images/card-logo.svg'

function cards(props) {
  return (
    <section className='left-section'>
      <div className='cardFront-container'>
        <div className='card-bg-front'>
            <img src={cardLogo} alt='logo' className='logo' />
            <p className='cardNo'>{props.cardNo.length == 0 ? "0000 0000 0000 0000" : props.cardNo}</p>
            <div className='nameAndExpire'>
                <p>{props.name.length == 0 ? "JANE APPLESEED" : props.name}</p>
                <p>
                  <span>{props.expMonth.length == 0 ? "00" : props.expMonth}</span>
                  /
                  <span>{props.expYear.length == 0 ? "00" : props.expYear}</span>
                </p>
            </div>
        </div>
      </div>
      <div className='cardBack-container'>
        <div className='card-bg-back'>{props.cvc.length == 0 ? "000" : props.cvc}</div>
      </div>
    </section>
  )
}

export default cards