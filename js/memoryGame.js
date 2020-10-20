




function generateGame() {

    //Return level 0 if score reaches below zero
    let level = determineLevel();

    //Continue game?
    if (level === 0) {
        gameOver();
        return level;
    }

    //reset frame
    let frame = document.getElementById("gridFrame");
    while (frame.lastChild){
        frame.removeChild(frame.lastChild);
    }

    //determine score req nxt lvl           let levelReq = level(level + 5) / 2
    //determine x dimension                 let x = (level +3)%2 === 0 ? (level + 3) / 2 : Math.round((level+3)/2);
    //determine y dimension                 let y = (level +3)%2 === 0 ? (level + 3) / 2 : Math.round((level+3)/2) -1;
    //determine total memoryCells           let memoryCells = level + 2
    //determine total cells                 let cells = (x * y) - memoryCells;

    //generate grid dimensions              createGrid();
    //generate array of mixed cells
    //
    console.log("level: " + level);

    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.setAttribute("style", "grid-template-columns: repeat(3, 80px)");
    grid.setAttribute("style", "grid-template-rows: repeat(3, 80px)");

    var cells = 9;

    for (var i = 0; i < cells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${"cell"+(i+1)}`);
        grid.appendChild(cell);
    }
    
    
    frame.appendChild(grid);
}

function determineLevel() {
    let currentLevel = parseInt(document.getElementById("level").innerHTML);
    let currentScore = parseInt(document.getElementById("score").innerHTML);
    if (currentScore < 3) return 1;
    let levelReq     = currentLevel*(currentLevel + 5)/2;

    console.log("Next Ascension: " + levelReq)
    return (currentScore > levelReq) ? currentLevel+1 : currentLevel;
}

function gameOver() {
    console.log("Game Over");
}



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