const tileRoot = document.querySelector(".tileRoot");

var id_count = 0;

function addTile(tile_id, content, pos_x, pos_y) {
    var tile = document.createElement("div");
    tile.setAttribute("id", tile_id);
    tile.classList.add("tile");
    tile.textContent = content;
    tileRoot.append(tile);
    tile.style.top = pos_y + "px";
    tile.style.left = pos_x + "px";
}

function moveTile(tile_id, pos_x, pos_y) {
    var tile = document.getElementById(tile_id);
    tile.style.top = pos_y + "px";
    tile.style.left = pos_x + "px";
}

const contentArea = document.querySelector(".content-input");
const pushButton = document.querySelector(".menu-button");
pushButton.addEventListener("click", function() {
    var content = contentArea.value;
    var pos_x = (200 * id_count) + 50;
    var pos_y = 150;
    addTile(id_count, content, pos_x, pos_y);
    id_count = id_count + 1;
    contentArea.value = "";
  });

function drawLine(src_id, dest_id) {
    console.log("attempt to draw line");
}
