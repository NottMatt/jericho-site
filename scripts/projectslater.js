// Generates Slates to put on the Artbook Page

// Slate root
const projectLevel = document.querySelector(".projectRoot");

// create new Slate
function gallerySlate(slate, name, link, image_src, description, tags) {
    slate.classList.add("projectDiv");

    let lhs = document.createElement("div");
    let rhs = document.createElement("div");
    rhs.classList.add("rightDiv");
    lhs.classList.add("leftDiv");

    let image = document.createElement("img");
    image.setAttribute("src", image_src);
    image.classList.add("galleryImg");

    lhs.append(image);


    let header = document.createElement("h2");
    let headerLink = document.createElement("a");    
    headerLink.textContent = name;
    headerLink.setAttribute("src", link);

    let desc = document.createElement("p");
    desc.textContent = description;

    let tag = document.createElement("p");
    tag.classList.add("tags");
    tag.textContent = tags;

    slate.append(lhs);
    slate.append(rhs);
    rhs.append(header);
    header.appendChild(headerLink);
    rhs.append(desc);
    rhs.append(tag);
    
}

// parse out json
fetch("../structures/projectslates.json", { 
    method: 'GET'
})
    .then(function(response) { return response.json(); })
    .then(function(json) {
        var slates = json.pieces;
        for (var i = 0; i < slates.length; i++) {
        let sName = slates[i].name;
        let sLink = slates[i].link;
        let sImage = slates[i].image;
        let sDesc = slates[i].description;
        let sTags = slates[i].tags;
    
        var newSlate = document.createElement("div");
        gallerySlate(newSlate,
                        sName,
                        sLink,
                        sImage,
                        sDesc,
                        sTags);
        
                        projectLevel.appendChild(newSlate);
        }
});
