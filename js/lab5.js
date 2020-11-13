function saveDefinition() {
    let xhttp = new XMLHttpRequest();
    let word = document.getElementById("word").value;
    let definition = document.getElementById("definition").value;
    console.log(word + ": " + definition);
    xhttp.open("POST", `https://isadefinitionsserver.herokuapp.com/api/definitions/add/${word}/${definition}`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
}

function getDefinition() {

    let search = document.getElementById("search").value;

    let xhttp = new XMLHttpRequest();
    let arr = [];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arr = JSON.parse(this.responseText);
            console.log(arr);
            arr.forEach(row => {
                showDefinition(row["word"], row["definition"]);
            });
        }
    };
    xhttp.open("GET", `https://isadefinitionsserver.herokuapp.com/api/definitions/get/${search}`, true);
    xhttp.send();
}

function showDefinition(word, definition) {
    let display = document.getElementById("display");

    let w = document.createElement("div");

    w.setAttribute("class", "col-4");
    w.innerHTML = word+": "+definition;

    display.appendChild(w);
}