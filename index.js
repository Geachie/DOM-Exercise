//  BASIC DOM MANIPULATION

"use strict";
// Change link content
// const link = document.querySelector("a");
// const backgrd = document.querySelector("body");

// link.textContent = "Mozilla Developer Network";

// link.href = "https://developer.mozilla.org";

// const sect = document.querySelector("section");
// const para = document.createElement("p");
// para.textContent = "We hope you enjoyed the ride.";

// sect.appendChild(para);

// const text = document.createTextNode(
//   " — the premier source for web development knowledge."
// );

// const linkPara = document.querySelector("p");

// linkPara.appendChild(text);

// linkPara.remove();

// Manipulating Styles

// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// para.setAttribute("class", "highlight");

const div = document.querySelector("div");
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

div.style.width = `${winWidth}px`;
div.style.height = `${winHeight}px`;

window.onresize = () => {
  winWidth = window.innerWidth;
  winHeight = window.innerHeight;
  div.style.width = `${winWidth}px`;
  div.style.height = `${winHeight}px`;
};
