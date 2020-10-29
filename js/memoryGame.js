function generateGame() {

    console.clear();
    //Return level 0 if score reaches below zero
    let level = determineLevel();
    document.getElementById("level").innerHTML = level;

    //Continue game?
    if (level === 0) {
        gameOver();
        return level;
    }

    //reset frame
    let frame = document.getElementById("gridFrame");
    // frame.setAttribute("class", "gridframe");
    while (frame.lastChild) {
        frame.removeChild(frame.lastChild);
    }

    //determine x dimension
    let cols = (level + 5) % 2 === 0 ? (level + 5) / 2 : Math.round((level + 5) / 2) - 1;

    //determine y dimension
    let rows = (level + 5) % 2 === 0 ? (level + 5) / 2 : Math.round((level + 5) / 2);

    let style = document.createElement("style");
    style.innerHTML = `
    .grid {
        display: grid;
        grid-template-columns: repeat(${cols}, 80px);
        grid-template-rows: repeat(${rows}, 80px);
        grid-gap: 5px;
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
    let cells = cols * rows; 

    //determine total memoryCells
    let memoryCells = level + 2;
    document.getElementById("cells").innerHTML = memoryCells;
    
    let fakeCells = cells - memoryCells;

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
    // frame.setAttribute("class", "gridframe spinning");
    grid.setAttribute("class", "grid spinning");
    setTimeout(() => {
        // frame.setAttribute("class", "gridframe");
        grid.setAttribute("class", "grid");
    }, 1000);

    console.log(`level: ${level}`);
    console.log(`Current Score:  ${document.getElementById("score").innerHTML}`);
    console.log(`Cols: ${cols} \nRows: ${rows}`);
    console.log(`FakeCells: ${fakeCells}`);
    console.log(`memoryCells: ${memoryCells}`);

    let name = document.getElementById("name").value;
    console.log(name);
    if(name === "") {
        alert("Warning, Please enter your name if you want your score to be recorded.");
        return;
    }
    recordScore();
}

function correct(cell) {
    console.log("Correct");
    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) +1;
    cell.setAttribute("style", "background: greenyellow");
    cell.setAttribute("onclick", "");
    cellClicked();
    updateHighscore();
}

function incorrect(cell) {
    console.log("inCorrect");
    document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) -1;
    cell.setAttribute("style", "background: tomato");
    cell.setAttribute("onclick", "");
    cellClicked();
}

function cellClicked() {
    let cellsLeft = parseInt(document.getElementById("cells").innerHTML);
    if(cellsLeft === 1) {
        endRound();
    } else {
        document.getElementById("cells").innerHTML = cellsLeft -1;
    }
}

function updateHighscore() {
    let score = parseInt(document.getElementById("score").innerHTML);
    let highscore = parseInt(document.getElementById("highscore").innerHTML);
    document.getElementById("highscore").innerHTML = (score > highscore) ? score : highscore;
}

function recordScore() {
    let xhttp = new XMLHttpRequest();
    let name = document.getElementById("name").value;
    let score = document.getElementById("highscore").innerHTML;
    console.log(name + " " + score);
    xhttp.open("POST", `https://memorygamedbserver.herokuapp.com/sethighscore/${name}/${score}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
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
    let level = (currentScore >= levelReq) ? currentLevel + 1 : 
                 (currentScore <= pastReq) ? currentLevel - 1 : currentLevel;
    return (level > 8) ? 9 : level;
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function reset() {
    document.getElementById("score").innerHTML = 0;
    generateGame();
}

function gameOver() {
    console.log("Game Over");
    recordScore();
    window.open("https://freyden.studio/assignments/highscores.html");
    reset()
}
