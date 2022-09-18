import React from 'react'
import Cards from './Component/Cards'
import CardInform from './Component/CardInform'

function PaymentPage() {

    const [cardForm, setCardForm] = React.useState({
        name: "",
        cardNo: "",
        expMonth: "",
        expYear: "",
        CVC: "",
      })

      function handleChange(event) {
        const {name, value} = event.target;
        setCardForm(prevCardForm => {
          return {
            ...prevCardForm,
            [name]: value
          }
        })

        if(event.target.name === "name") {
          const value = event.target.value;
          if(value.length > 0) {
            removeErr("");
            // const input = event.target;
            // input.className = "";
            // const errTag = event.target.parentElement.lastChild;
            // errTag.classList.remove("showErr");
          }
        }

        if(event.target.name === "cardNo") {
          const value = event.target.value;
          if (value.length === 19) {
            focusChange(event);
          } else if (value.length > 0) {
            removeErr("");
          }
        }

        if(event.target.name === "expMonth") {
          const value = event.target.value;
          if(value.lenght > 0) {
            const outRangeErrTag = event.target.parentElement.querySelector(".outOfRange");
            outRangeErrTag.className = "error";
            console.log(outRangeErrTag)
          } else if (event.target.value.length === 2) {
            focusChange(event);
          } else if (value.length > 0) {
            removeErr("MM");
          }
        }

        if(event.target.name === "expYear") {
          const value = event.target.value;
          if(value < 1 || value > 99) {
            console.log("pick between 0 and 100");
          } else if (value.length === 2) {
            focusChange(event);
          } else if (value.length > 0) {
            removeErr("YY");
          }
        }

        if(event.target.name === "CVC") {
          const value = event.target.value;
          if(value.length === 3) {
            focusChange(event);
          } else if (value.length > 0){
            removeErr("");
          }
        }

        function removeErr(className) {
            const input = event.target;
            input.className = className;
            const errTag = event.target.parentElement.lastChild;
            errTag.classList.remove("showErr");
        }

        function focusChange (event) {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
      }


      function submitHandler(event) {
        event.preventDefault();
        console.log(cardForm);

        if (cardForm.name.length === 0) {
          const inputContainer = event.target.firstChild;
          putError(inputContainer, "input");
          // const input = inputContainer.querySelector("input");
          // input.className = "errInput";
          // const errTag = inputContainer.lastChild;
          // errTag.classList.add("showErr");
        } 

        if(cardForm.cardNo.length !== 19) {
          const inputContainer = event.target.querySelector(".cardNumber-container");
          putError(inputContainer, "input");
        }

        if(cardForm.expMonth.length === 0) {
          const inputContainer = event.target.querySelector(".expAndCvc").firstChild;
          putError(inputContainer, ".MM");
        } else if (cardForm.expMonth < 1 || cardForm.expMonth > 12) {
          const inputContainer = event.target.querySelector(".expAndCvc").firstChild;
          const outRangeTag = inputContainer.querySelector(".outOfRange");
          outRangeTag.classList.add("showErr");
          console.log(outRangeTag)
        } 

        if(cardForm.expYear.length !== 2) {
          const inputContainer = event.target.querySelector(".expAndCvc").firstChild;
          putError(inputContainer, ".YY");
        }

        if(cardForm.CVC.length !== 3) {
          const inputContainer = event.target.querySelector(".expAndCvc").lastChild;
          putError(inputContainer, "input");
        }

        if(cardForm.name.length > 0 && cardForm.cardNo.length === 19 && 
          cardForm.expMonth > 0 && cardForm.expMonth < 13 && cardForm.expYear > 0 &&
          cardForm.CVC.length === 3) {
            console.log(event.target);
            const form = event.target;
            form.classList.add("filledSuccess")
            console.log(form.parentElement.lastChild);
            const successPage = form.parentElement.lastChild;
            successPage.classList.add("showThank");
        }

        function putError(inputContain, querySelector) {
          const input = inputContain.querySelector(querySelector);
          input.classList.add("errInput");
          const errTag = inputContain.lastChild;
          errTag.classList.add("showErr");
        }
      }

  return (
    <>
      <Cards 
        cardForm={cardForm}
        name={cardForm.name}
        cardNo={cardForm.cardNo}
        expMonth={cardForm.expMonth}
        expYear={cardForm.expYear}
        cvc={cardForm.CVC}
      />
      <CardInform 
        cardForm={cardForm} 
        handleChange={handleChange}
        name={cardForm.name}
        cardNo={cardForm.cardNo}
        expMonth={cardForm.expMonth}
        expYear={cardForm.expYear}
        cvc={cardForm.CVC}
        submitHandler={submitHandler}
      />
    </>
  )
}

export default PaymentPage
