// makes a region collapsible
var coll = document.getElementsByClassName("collapser");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = 0;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }