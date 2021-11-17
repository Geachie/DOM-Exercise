"use strict";
// Change link content
const link = document.querySelector("a");
const backgrd = document.querySelector("body");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);
