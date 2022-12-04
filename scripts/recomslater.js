// Generates Slates to put on the Jericho Wall

// Slate root
const topLevel = document.querySelector(".slateRoot");

// create new Slate
function templateSlate(slate, name, short, link, description, tags) {
    slate.classList.add("entryDiv");

    let rhs = document.createElement("div");
    rhs.classList.add("rightDiv");

    let header = document.createElement("h2");
    let headerLink = document.createElement("a");
    headerLink.setAttribute("href", link);
    headerLink.textContent = name;    

    let desc = document.createElement("p");
    desc.textContent = description;

    let tag = document.createElement("p");
    tag.classList.add("tags");
    tag.textContent = tags;

    slate.append(rhs);
    rhs.append(header);
    header.append(headerLink);
    header.innerHTML += short;
    rhs.append(desc);
    rhs.append(tag);
}


// parse out json
fetch("../structures/recomslates.json", { 
  method: 'GET'
})
    .then(function(response) { return response.json(); })
    .then(function(json) {
        var slates = json.entries;
        for (var i = 0; i < slates.length; i++) {
            let sName = slates[i].name;
            let sShort = slates[i].short;
            let sLink = slates[i].source;
            let sDesc = slates[i].description;
            let sTags = slates[i].tags;
    
            var newSlate = document.createElement("div");
            templateSlate(newSlate,
                            sName,
                            sShort,
                            sLink,
                            sDesc,
                            sTags);
            
            topLevel.appendChild(newSlate);
        }
});







