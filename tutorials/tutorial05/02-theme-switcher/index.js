/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   // your code here...
   console.log('Change theme to default');
   document.querySelector("header").style.color = '#555';
   document.querySelector("header").style.borderBottom = "#CCC";
   document.querySelector("header").style.backgroundColor = "#F2F2F2";
   document.querySelector("nav").style.borderBottom = "#CCC";
   // document.querySelector("#default").style.color = "#666";
   // document.querySelector("#desert").style.color = "#666";
   // document.querySelector("#ocean").style.color = "#666";
   // document.querySelector("#high-contrast").style.color = "#666";
   document.querySelector("button").style.color = "#666";
   document.querySelector(".content").style.color = "#666";
   document.querySelector(".content").style.backgroundColor = "transparent";
};

const makeDesert = () => {
   // your code here...
   console.log('Change theme to desert');
   document.querySelector("header").style.color = '#EFDEC2';
   document.querySelector("header").style.backgroundColor = "#A8651E";
   document.querySelector("nav").style.borderBottom = "#774713";
   // document.querySelector("#default").style.color = "#A8651E";
   // document.querySelector("#deser").style.color = "#A8651E";
   // document.querySelector("#ocean").style.color = "#A8651E";
   // document.querySelector("#high-contrast").style.color = "#A8651E";
   document.querySelector("button").style.color = "#A8651E";
   document.querySelector(".content").style.color = "#A8651E";
   document.querySelector(".content").style.backgroundColor = "#EFDEC2";
};

const makeOcean = () => {
   // your code here...
   console.log('Change theme to ocean');
   document.querySelector("header").style.color = 'white';
   document.querySelector("header").style.backgroundColor = "#434A6C";
   document.querySelector("nav").style.borderBottom = "#434A6C";
   document.querySelector("button").style.color = "#434A6C";
   document.querySelector(".content").style.color = "#434A6C";
   document.querySelector(".content").style.backgroundColor = "#99CCCC";
};

const makeHighcontrast = () => {
   // your code here...
   console.log('Change theme to ocean');
   document.querySelector("header").style.color = 'white';
   document.querySelector("header").style.backgroundColor = "black";
   document.querySelector("nav").style.borderBottom = "black";
   document.querySelector("button").style.color = "black";
   document.querySelector(".content").style.color = "black";
   document.querySelector(".content").style.backgroundColor = "white";
};

document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHighcontrast);