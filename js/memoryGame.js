




function generateTiles() {

    let level = parseInt(document.getElementById("level").innerHTML);
    console.log("level: " + level);

    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.setAttribute("style", "grid-template-columns: repeat(3, 80px)");
    grid.setAttribute("style", "grid-template-rows: repeat(3, 80px)");

    var cells = 9;

    for (var i = 0; i < cells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${i+1}`);
        grid.appendChild(cell);
    }
    
    let frame = document.getElementById("gridFrame");
    frame.appendChild(grid);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let tiles = [];

    let Tile = function(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
    };

    var NUM_COLS = 5;
    var NUM_ROWS = 4;

    for (var i = 0; i < NUM_COLS; i++) {

        for (var j = 0; j < NUM_ROWS; j++) {
            var tileX = i * 54 + 5;
            var tileY = j * 54 + 40;
            tiles.push(new Tile(tileX, tileY));
        }
    }
}