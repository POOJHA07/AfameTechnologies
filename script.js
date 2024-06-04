document.addEventListener('DOMContentLoaded', () => {
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);


// // script.js
// const toggleButton = document.getElementById('toggleButton');

// toggleButton.addEventListener('change', function() {
//   if (this.checked) {
//     console.log('Toggle button is ON');
//     // Perform actions for ON state
//   } else {
//     console.log('Toggle button is OFF');
//     // Perform actions for OFF state
//   }
// });


arr.forEach(button => {
    button.addEventListener('click' , (e) =>{

        let buttonVal = e.target.innerHTML;

        if(buttonVal === '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML=='DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
});