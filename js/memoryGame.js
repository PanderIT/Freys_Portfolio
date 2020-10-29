function generateGame() {
    console.clear();
    //Return level 0 if score reaches below zero
    let level = (determineLevel() > 8) ? 9 : determineLevel();
    document.getElementById("level").innerHTML = level;

    //Continue game?
    if (level === 0) {
        gameOver();
        return level;
    }

    console.log("level: " + level);

    //reset frame
    let frame = document.getElementById("gridFrame");
    while (frame.lastChild) {
        frame.removeChild(frame.lastChild);
    }

    //determine x dimension
    let cols = (level + 5) % 2 === 0 ? (level + 5) / 2 : Math.round((level + 5) / 2);

    //determine y dimension
    let rows = (level + 5) % 2 === 0 ? (level + 5) / 2 : Math.round((level + 5) / 2) - 1;

    let style = document.createElement("style");
    style.innerHTML = `
    .grid {
        display: grid;
        grid-template-columns: repeat(${cols}, 80px);
        grid-template-rows: repeat(${rows}, 80px);
        grid-gap: 5px;
      }
    .spinning {
        transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        }
    #grid {
        transition: 2s;
        -moz-transition: 2s;
        -ms-transition: 2s;
        -webkit-transition: 2s;
        -o-transition: 2s;
        }`;
    
    let ref = document.querySelector("script");
    ref.parentNode.insertBefore(style, ref);
    //generate grid dimensions
    let grid = document.createElement("div");
    // grid.setAttribute("style", `grid-template-columns: repeat(${cols}, 80px)`);
    // grid.setAttribute("style", `grid-template-rows: repeat(${rows}, 80px)`);
    // grid.setAttribute("style", "grid-template-columns: repeat(3, 80px)");
    // grid.setAttribute("style", "grid-template-rows: repeat(3, 80px)");
    grid.setAttribute("class", "grid");
    grid.setAttribute("id", "grid");


    //determine total cells
    let cells = cols * rows; console.log(`Cols: ${cols} \nRows: ${rows}`);

    //determine total memoryCells
    let memoryCells = level + 2;
    document.getElementById("cells").innerHTML = memoryCells;
    
    let fakeCells = cells - memoryCells;

    console.log(`FakeCells: ${fakeCells}`);
    //generate array of mixed cells
    for (let i = 0; i < fakeCells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${"cell" + (i + 1)}`);
        cell.setAttribute("style", "background: orange");
        setTimeout(function(){ 
            cell.setAttribute("onclick", "incorrect(this);");
        }, 1000);
        grid.appendChild(cell);
    }
    console.log(`memoryCells: ${memoryCells}`);
    for (let i = 0; i < memoryCells; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", `${"cell" + (i + 1)}`);
        cell.setAttribute("style", "background: beige");
        setTimeout(function(){ 
            cell.setAttribute("style", "background: orange");
            cell.setAttribute("onclick", "correct(this);");
        }, 1000);
        let randomChild = grid.childNodes[randomInt(grid.childNodes.length+1)];
        let randomIndex = randomInt(grid.childNodes.length);
        grid.insertBefore(cell, randomChild);
    }
    frame.appendChild(grid);
    grid.setAttribute("class", "grid spinning");
}

function correct(cell) {
    console.log("Correct");
    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) +1;
    cell.setAttribute("style", "background: greenyellow");
    cell.setAttribute("onclick", "");
    cellClicked();
}

function incorrect(cell) {
    console.log("inCorrect");
    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) -1;
    cell.setAttribute("style", "background: tomato");
    cell.setAttribute("onclick", "");
    cellClicked();
}

function cellClicked() {
    let cellsClicked = parseInt(document.getElementById("cells").innerHTML);
    console.log(cellsClicked);
    if(cellsClicked === 1) {
        endRound();
    } else {
        document.getElementById("cells").innerHTML = cellsClicked -1;
    }
}

function endRound() {
    document.getElementById("grid").childNodes.forEach(cell => {
        cell.setAttribute("onclick", "");
    });
    setTimeout(generateGame, 1000);
}

function determineLevel() {
    let currentLevel = parseInt(document.getElementById("level").innerHTML);
    let currentScore = parseInt(document.getElementById("score").innerHTML);
    if (currentScore < 0) return 0;     //Game Over
    if (currentScore < 3) return 1;     //Level 1, no need to check level requirements
    let levelReq = currentLevel * (currentLevel + 5) / 2;
    let pastReq = (currentLevel-1) * ((currentLevel-1) + 5) / 2;
    console.log(`Current Score:  ${currentScore}`);
    return (currentScore >= levelReq) ? currentLevel + 1 : 
            (currentScore <= pastReq) ? currentLevel - 1 : currentLevel;
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function gameOver() {
    console.log("Game Over");
}
