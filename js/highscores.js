function requestHighscores() {
    console.log("HTTTTTTTTP");

    let xhttp = new XMLHttpRequest();
    let arr = [];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arr = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));
            let i = 1;
            showHighscores("Rank", "Name", "Score");
            arr.forEach(row => {
                showHighscores(i, row["name"], row["score"]);
                i += 1;
            });
        }
    };
    xhttp.open("GET", `https://memorygamedbserver.herokuapp.com/`, true);
    xhttp.send();
}

function showHighscores(place, name, score) {
    let highscores = document.getElementById("highscores");
    let row = document.createElement("div");
    let p = document.createElement("div"); 
    let n = document.createElement("div"); 
    let s = document.createElement("div");

    p.setAttribute("class", "col-4");
    p.innerHTML = place;

    n.setAttribute("class", "col-4");
    n.innerHTML = name;

    s.setAttribute("class", "col-4");
    s.innerHTML = score;

    row.setAttribute("class", "row");
    row.appendChild(p);
    row.appendChild(n);
    row.appendChild(s);

    highscores.appendChild(row);
}