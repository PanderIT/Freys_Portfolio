function getHighscores() {
    console.log("Hello World");

    let xhttp = new XMLHttpRequest();
    console.log(name + " " + score);
    xhttp.open("GET", `https://memorygamedbserver.herokuapp.com`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
}