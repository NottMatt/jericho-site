// Generates Slates to put on the Today

const based = "https://en.wikipedia.org/wiki/Human_radiation_experiments";
const cringe = "https://en.wikipedia.org/wiki/British_royal_family";

const bF = document.querySelector(".basedFrame");
const cF = document.querySelector(".cringeFrame");
bF.setAttribute("src", based);
cF.setAttribute("src", cringe);