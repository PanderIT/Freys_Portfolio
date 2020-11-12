function saveDefinition() {
    let xhttp = new XMLHttpRequest();
    let word = document.getElementById("word").value;
    let definition = document.getElementById("definition").value;
    console.log(word + ": " + definition);
    xhttp.open("POST", `https://isadefinitionsserver.herokuapp.com/api/definitions/add/${word}/${definition}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText + "Helllooo");
        }
    };
}

function getDefinition() {

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
    xhttp.open("GET", `https://isadefinitionsserver.herokuapp.com/api/definitions`, true);
    xhttp.send();
}