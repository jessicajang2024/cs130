const resetButtonBackgrounds = () => {
    const color = "#EEE";
    document.querySelector("#btn1").style.backgroundColor = color;
    document.querySelector("#btn2").style.backgroundColor = color;
    document.querySelector("#btn3").style.backgroundColor = color;
    document.querySelector("#btn4").style.backgroundColor = color;



    // document.querySelector("#btn1").style.backgroundColor = "rgb(133,133,133)";
    // document.querySelector("#btn2").style.backgroundColor = "rgb(133,133,133)";
    // document.querySelector("#btn3").style.backgroundColor = "rgb(133,133,133)";
    // document.querySelector("#btn4").style.backgroundColor = "rgb(133,133,133)"; 
    
};


const makeRed = () => {
    // your code here...
    resetButtonBackgrounds();
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.backgroundColor = "#F46B6B";
};

const makeBlue = () => {
    // your code here...
    resetButtonBackgrounds();
    console.log('Change background to blue');
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("#btn2").style.backgroundColor = "#6BB9F4";
};

const makePink = () => {
    // your code here...
    resetButtonBackgrounds();
    console.log('Change background to pink');
    document.querySelector("body").style.backgroundColor = "pink";
    document.querySelector("#btn3").style.backgroundColor = "#F8BEF8";
};

const makeOrange = () => {
    // your code here...
    resetButtonBackgrounds();
    console.log('Change background to orange');
    document.querySelector("body").style.backgroundColor = "orange";
    document.querySelector("#btn4").style.backgroundColor = "#F7D5A6";
};

