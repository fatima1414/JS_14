function ADD() {
    alert("first")
    let value1 = document.getElementById("value1").value;
    console.log(value1);

    let value2 = document.getElementById("value2").value;
    console.log(value2);

    const sum = Number(value1) + Number(value2);
    const result = ` <b> Addition of :</B> ${value1} and ${value2} =${sum}` 
    document.getElementById("output").innerHTML = result
    console.log(sum);
    
}


function SUB() {
    alert("first")
    let value1 = document.getElementById("value1").value;
    console.log(value1);

    let value2 = document.getElementById("value2").value;
    console.log(value2);

    const sum = (value1) - (value2);
    const result = `<b> Subtraction of :</b> ${value1} and ${value2} =${sum}` 
    document.getElementById("output").innerHTML = result
    console.log(sum);
}



function MULTI() {
    alert("first")
    let value1 = document.getElementById("value1").value;
    console.log(value1);

    let value2 = document.getElementById("value2").value;
    console.log(value2);

    const sum = (value1) * (value2);
    const result = `<b> Multiplication of :</b> ${value1} and ${value2} =${sum}` 
    document.getElementById("output").innerHTML = result
    console.log(sum);
}



function DIVI() {
    alert("first")
    let value1 = document.getElementById("value1").value;
    console.log(value1);

    let value2 = document.getElementById("value2").value;
    console.log(value2);

    const sum = (value1) / (value2);
    const result = `<b> Division of :</b> ${value1} and ${value2} =${sum}` 
    document.getElementById("output").innerHTML = result
    console.log(sum);

}
