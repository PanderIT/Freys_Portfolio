




function generateGame() {

    //Return level 0 if score reaches below zero
    let level = determineLevel();

    //Continue game?
    if (level === 0) {
        gameOver();
        return level;
    }

                                                                                        console.log("level: " + level);

    //reset frame
    let frame = document.getElementById("gridFrame");
    while (frame.lastChild){
        frame.removeChild(frame.lastChild);
    }

    
    //determine x dimension
    let cols = (level + 5) % 2 === 0 ? (level + 5) / 2 : Math.round((level+5)/2);

    //determine y dimension
    let rows = (level + 5) % 2 === 0 ? (level + 5) / 2 : Math.round((level+5)/2) -1;

    //generate grid dimensions
    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.setAttribute("style", `grid-template-columns: repeat(${cols}, 80px)`);
    grid.setAttribute("style", `grid-template-rows: repeat(${rows}, 80px)`);

    //determine total cells
    let cells = cols * rows;                                                            console.log(`Cols: ${cols} \nRows: ${rows}`);

    //determine total memoryCells
    let memoryCells = level + 2;

    let fakeCells = cells - memoryCells;
                                                                                        console.log(`FakeCells: ${fakeCells}`);
    //generate array of mixed cells
    for (var i = 0; i < fakeCells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${"cell"+(i+1)}`);
        cell.setAttribute("style", "background: orange");
        grid.appendChild(cell);
    }
                                                                                        console.log(`memoryCells: ${memoryCells}`);
    for (var i = 0; i < memoryCells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${"cell"+(i+1)}`);
        cell.setAttribute("style", "background: white");
        let randomIndex = grid.childNodes[randomInt(grid.childNodes)];
        grid.insertBefore(cell, randomIndex);
    }
    frame.appendChild(grid);
}

function determineLevel() {
    let currentLevel = parseInt(document.getElementById("level").innerHTML);
    let currentScore = parseInt(document.getElementById("score").innerHTML);
    if (currentScore < 0) return 0;     //Game Over
    if (currentScore < 3) return 1;     //Level 1, no need to check level requirements

    let levelReq     = currentLevel*(currentLevel + 5)/2;
                                                                                        console.log(`Next Ascension: ${levelReq}`);
                                                                                        console.log(`Current Scoire:  ${currentScore}`);
    return (currentScore > levelReq) ? currentLevel+1 : currentLevel;
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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