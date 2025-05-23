// // let num = [];
// // function number() {
// //   // alert("sum")
// //   let value = parseInt(document.getElementById("value1").value);

  
// //   document.getElementById("output").innerHTML=num.join (",");
// //   number.push(value);


// // }



// let values = [];
// function result(){
// // document.querySelectorAll('.btn-light').forEach(button => {
// //   button.addEventListener('click', function () {
//     const input = document.getElementById('value1');
//     const number = Number(input.value);

//     if (isNaN(number)) {
//       document.getElementById('output').innerText = 'Please enter a valid number.';
//       return;
//     }

//     // Add the number to array
//     values.push(number);

//     // Perform all operations
//     const elements = values.join(', ');
//     const sum = values.reduce((a, b) => a + b, 0);
//     const avg = (sum / values.length).toFixed(2);
//     const min = Math.min(...values);
//     const max = Math.max(...values);

//     // Display all in output
//     const result = `
//       Values: ${elements}<br>
//       Sum: ${sum}<br>
//       Average: ${avg}<br>
//       Min: ${min}<br>
//       Max: ${max}
//     `;

//     document.getElementById('output').innerHTML = result;
//     input.value = ''; // clear input after processing
//   // });
// // });
//   }
let values = [];

const buttons = document.querySelectorAll('.btn-light');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const input = document.getElementById('value1');
    const number = Number(input.value);

    if (isNaN(number)) {
      document.getElementById('output').innerText = 'Please enter a valid number.';
      return;
    }

    // Add number to array
    values.push(number);
    input.value = ''; // clear input after use

    const text = this.innerText.toLowerCase();
    let output = '';

    if (text === 'element') {
      output = `Elements: ${values.join(', ')}`;
    } else if (text === 'sum') {
      output = `Sum: ${values.reduce((a, b) => a + b, 0)}`;
    } else if (text === 'average') {
      let sum = values.reduce((a, b) => a + b, 0);
      output = `Average: ${(sum / values.length).toFixed(2)}`;
    } else if (text === 'min') {
      output = `Minimum: ${Math.min(...values)}`;
    } else if (text === 'max') {
      output = `Maximum: ${Math.max(...values)}`;
    }

    document.getElementById('output').innerHTML = output;
  });
});
