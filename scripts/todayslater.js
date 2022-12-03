// Generates Slates to put on the Today

const based = "https://en.wikipedia.org/wiki/Human_radiation_experiments";
const cringe = "https://en.wikipedia.org/wiki/Alabama_Historical_Society";

const bF = document.querySelector(".basedFrame");
const cF = document.querySelector(".cringeFrame");
bF.setAttribute("src", based);
cF.setAttribute("src", cringe);