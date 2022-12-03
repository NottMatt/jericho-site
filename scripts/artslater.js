// Generates Slates to put on the Artbook Page

// Slate root
const topLevel = document.querySelector(".galleryRoot");

// create new Slate
function gallerySlate(slate, name, images, description, tags) {
    slate.classList.add("galleryDiv");

    let lhs = document.createElement("div");
    let rhs = document.createElement("div");
    rhs.classList.add("rightDiv");
    lhs.classList.add("leftDiv");

    for (var i = 0; i < images.length; i++) {
        let imgdiv = document.createElement("div");
        let image = document.createElement("img");
        image.classList.add("galleryImg");
        image.setAttribute("src", images[i].source);
        image.setAttribute("alt", "image missing");
        imgdiv.append(image);
        lhs.append(imgdiv);
    }

    let header = document.createElement("h2");    

    let desc = document.createElement("p");
    desc.textContent = description;

    let tag = document.createElement("p");
    tag.classList.add("tags");
    tag.textContent = tags;

    slate.append(lhs);
    slate.append(rhs);
    rhs.append(header);
    rhs.append(desc);
    rhs.append(tag);
}

// parse out json
fetch("../structures/artslates.json", { 
    method: 'GET'
})
    .then(function(response) { return response.json(); })
    .then(function(json) {
        var slates = json.pieces;
        for (var i = 0; i < slates.length; i++) {
        let sName = slates[i].name;
        let sImages = slates[i].images;
        let sDesc = slates[i].description;
        let sTags = slates[i].tags;
    
        var newSlate = document.createElement("div");
        gallerySlate(newSlate,
                        sName,
                        sImages,
                        sDesc,
                        sTags);
        
        topLevel.appendChild(newSlate);
        }
});
