const addTheNumbers = (ev) => {
    // Your code here...
    console.log('add the numbers...');
    let num1 = document.querySelector('#num1').value;
    console.log(num1);

    let num2 = document.querySelector('#num2').value;
    console.log(num2);

    let result = Number(num1) + Number(num2);
    console.log(result);

    document.querySelector('#answer').innerHTML = result;

}

const subtractTheNumbers = (ev) => {
    // Your code here...
    console.log('subtract the numbers...');
}

const multiplyTheNumbers = (ev) => {
    // Your code here...
    console.log('multiply the numbers...');
}

const divideTheNumbers = (ev) => {
    // Your code here...
    console.log('divide the numbers...');
}

document.getElementById('add').onclick = add_numbers;