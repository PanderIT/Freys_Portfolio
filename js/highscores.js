function getHighscores() {
    console.log("HTTTTTTTTP");

    let xhttp = new XMLHttpRequest();
    let arr = [];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arr = JSON.parse(this.responseText);
            console.log(JSON.parse(this.responseText));

            arr.forEach(row => {
                console.log(row["name"] + " " + row["score"]);
            });
        }
    };
    xhttp.open("GET", `https://memorygamedbserver.herokuapp.com/`, true);
    xhttp.send();
}