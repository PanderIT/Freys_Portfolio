function getHighscores() {
    console.log("Hello World");

    let xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", `https://memorygamedbserver.herokuapp.com`, true);
    xhttp.send();
    
}