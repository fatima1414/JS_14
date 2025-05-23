let input_num = [];

function calc() {
  let num = document.getElementById("value1").value;
  num = Number(num);

  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }

  input_num.push(num);


  document.getElementById("elements").innerText = input_num;

  // sum
  let sum = input_num.reduce((a, b) => a + b, 0);
  document.getElementById("sum").innerText = sum;

 // average
  let avg = sum / input_num.length;
  document.getElementById("average").innerText = avg.toFixed(2);

  // min and max
  let max = input_num[0];
  let min = input_num[0];

  for (let i = 1; i < input_num.length; i++) {
    if (input_num[i] > max) {
      max = input_num[i];
    }
    if (input_num[i] < min) {
      min = input_num[i];
    }
  }
  document.getElementById("max").innerText = max;
  document.getElementById("min").innerText = min;


  document.getElementById("value1").value;
}