document.addEventListener('DOMContentLoaded', () => {

  // create new element and intiate already existing element 
    const addNumberBtn = document.querySelector('form button');
    const sort1Btn = document.getElementById('sortOne');
    const sortAllBtn = document.getElementById('sortAll');
    const numberInput = document.querySelector('input[name="number"]');
    const numberBankInput = document.getElementById('numberBankInput');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');
  
    // create new empty array 
    let numbers = [];
  
    // add listener for click and add preventDefault to prevent after clicking page refreshing automatically. 
    addNumberBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const number = parseInt(numberInput.value);
      if (!isNaN(number)) {
        numbers.push(number);
        updateNumberBank();
      }
      numberInput.value = '';
    });
  
     // create new function to updateThevalue
    const updateNumberBank = () => {
      numberBankInput.value = numbers.join(', ');
    };
  
    const sortNumber = (number) => {
      if (number % 2 === 0) {
        evensOutput.textContent += `${number}, `;
      } else {
        oddsOutput.textContent += `${number}, `;
      }
    };
  
    // add another listener for sort1 button for clicking the button 
    sort1Btn.addEventListener('click', () => {
      if (numbers.length > 0) {
        const number = numbers.shift();
        sortNumber(number);
        updateNumberBank();
      }
    });

    // add event listener for sortAll button for sortAll button for clicking the button
  
    sortAllBtn.addEventListener('click', () => {
      while (numbers.length > 0) {
        const number = numbers.shift();
        sortNumber(number);
      }
      updateNumberBank();
    });
  });
  