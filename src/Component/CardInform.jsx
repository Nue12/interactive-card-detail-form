import React from 'react'
import completeLogo from '../images/icon-complete.svg'

function CardInform(props) {

  function insertSpace(event) {
    event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    console.log(event.target.value);
  }

  function continueHandle(event) {
    const thankPageTag = event.target.parentElement;
    const formTag = event.target.parentElement.parentElement.firstChild;
    thankPageTag.className = "thankPage";
    formTag.className = "form-container"
    console.log(event.target.parentElement.parentElement.firstChild);
  }


  return (
    <section className='right-section'>
      <form className='form-container' onSubmit={props.submitHandler}>

        <div className='cardholder-container'>
          <label>CARDHOLDER NAME</label>
          <input 
            type="text" 
            placeholder='e.g. Jane Appleseed'
            onChange={props.handleChange}
            name="name"
            value={props.name}
          />
          <span className='error'>Fill the name, please.</span>
        </div>

        <div className='cardNumber-container'>
          <label>CARD NUMBER</label>
          <input 
            type="text" 
            placeholder='e.g. 1234 5678 9123 0000'
            onChange={props.handleChange}
            onInput={insertSpace}
            name="cardNo"
            value={props.cardNo}
          />
          <span className='error'>Fill the card number completely.</span>
        </div>

        <div className='expAndCvc'>
          <div className='expDate-container'>
            <label>EXP. DATE (MM/YY)</label>
            <input 
              type='number'
              placeholder='MM' 
              onChange={props.handleChange}
              name="expMonth"
              value={props.expMonth}
              className="MM"
            />
            <input 
              type="number" 
              placeholder='YY' 
              onChange={props.handleChange}
              name="expYear"
              value={props.expYear}
              className="YY"
            />
            <span className='error outOfRange'>This is out of range.</span>
            <span className='error'>Can't be blank</span>
          </div>
          <div className='CVC'>
            <label>CVC</label>
            <input 
            type='number' 
            placeholder='e.g. 123' 
            onChange={props.handleChange}
            name="CVC"
            value={props.cvc}
          />
          <span className='error cvcErr'>Can't be blank</span>
          </div>
        </div>

        <button>Confirm</button>

      </form>

      <div className='thankPage'>
        <img src={completeLogo} alt='completeLogo' className='completeLogo' />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button onClick={continueHandle}>Continue</button>
      </div>
    </section>
  )
}

export default CardInform
