// Generates Slates to put on the Today

const based = "https://en.wikipedia.org/wiki/J._Robert_Oppenheimer";
const cringe = "https://en.wikipedia.org/wiki/Tour_de_France";

const bF = document.querySelector(".basedFrame");
const cF = document.querySelector(".cringeFrame");
bF.setAttribute("src", based);
cF.setAttribute("src", cringe);