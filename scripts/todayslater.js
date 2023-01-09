// Generates Slates to put on the Today

const based = "https://en.wikipedia.org/wiki/Grace_Hopper";
const cringe = "https://en.wikipedia.org/wiki/Special_Economic_Zones_in_Russia";

const bF = document.querySelector(".basedFrame");
const cF = document.querySelector(".cringeFrame");
bF.setAttribute("src", based);
cF.setAttribute("src", cringe);