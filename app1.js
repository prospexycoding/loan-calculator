// build response for form submit

document.querySelector('form').addEventListener('submit', (event)=>{
      
      event.preventDefault() // prevent the form from auto refreshing the page
      // get the value from the inputs
      let principal = Number(document.querySelector('.principal').value);
      let time = Number(document.querySelector('.time').value);
      let rate = 25;

      // calculate the interest
      let interest = (principal * time * rate)/100;

      // calculating the amount
      let amount = interest + principal

      //  converting to two decimal place
      amount = amount.toFixed(2);

      // target the p that displays the result
      let result_displayer = document.querySelector('.result-display');
      
      // target the span that contains the result value
      let result_span = document.querySelector('.result')

      // put the calculated amount inside the result span
        result_span.innerHTML = '₦' + amount

      // display the result_displayer (the p tag)
      result_displayer.style.display = "flex"




      
})
