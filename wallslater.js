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
var wallslates = `{
        "entries": [
            {
                "name": "Artbook",
                "short": " | demonstrative portfolio",
                "description": "A collection of pieces I have done over the years, for personal, professional, or educational purposes.",
                "tags": "2022-12-01",
                "source": "artbook.html"
            },
            {
                "name": "Github",
                "short": " | development projects",
                "description": "Not many projects have been migrated here, more will come in the future.",
                "tags": "2022-12-02",
                "source": "https://github.com/NottMatt"
            }
        ]
    }`

var slateStructure = JSON.parse(wallslates);
var slates = slateStructure.entries;

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





