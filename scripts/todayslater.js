// Generates Slates to put on the Today

const based = "https://en.wikipedia.org/wiki/F.J._Fuchs";
const cringe = "https://en.wikipedia.org/wiki/Proposed_Japanese_invasion_of_Sichuan";

const bF = document.querySelector(".basedFrame");
const cF = document.querySelector(".cringeFrame");
bF.setAttribute("src", based);
cF.setAttribute("src", cringe);