// Generates Slates to put on the Music Page

// Slate root
const topLevel = document.querySelector(".musicRoot");

// create new Slate
function musicSlate(slate, name, source) {
    slate.classList.add("galleryDiv");

    let lhs = document.createElement("div");
    let rhs = document.createElement("div");
    rhs.classList.add("rightDiv");
    lhs.classList.add("leftDiv");

    let musicdiv = document.createElement("div");
    var sound      = document.createElement('audio');
    sound.id       = 'audio-player';
    sound.controls = 'controls';
    sound.src      = source;
    sound.type     = 'audio/mpeg';

    lhs.appendChild(musicdiv);
    musicdiv.appendChild(sound);

    let header = document.createElement("h2");    
    header.textContent = name;

    slate.append(lhs);
    slate.append(rhs);
    rhs.append(header);
}

// parse out json
fetch("../structures/musicslates.json", { 
    method: 'GET'
})
    .then(function(response) { return response.json(); })
    .then(function(json) {
        var slates = json.pieces;
        for (var i = 0; i < slates.length; i++) {
        let sName = slates[i].name;
        let sSource = slates[i].source;
    
        var newSlate = document.createElement("div");
        musicSlate(newSlate,
                        sName,
                        sSource);
        
        topLevel.appendChild(newSlate);
        }
});