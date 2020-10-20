




function generateTiles() {

    let level = parseInt(document.getElementById("level").innerHTML);
    console.log("level: " + level);













    let frame = document.getElementById("gridFrame");

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