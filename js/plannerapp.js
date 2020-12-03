function today() {

}

function save() {
    let xhttp = new XMLHttpRequest();
    let date = document.getElementById("date").innerHTML;
    let t06 = document.getElementById("t06").innerHTML;
    let t07 = document.getElementById("t07").innerHTML;
    let t08 = document.getElementById("t08").innerHTML;
    let t09 = document.getElementById("t09").innerHTML;
    let t10 = document.getElementById("t10").innerHTML;
    let t11 = document.getElementById("t11").innerHTML;
    let t12 = document.getElementById("t12").innerHTML;
    let t13 = document.getElementById("t13").innerHTML;
    let t14 = document.getElementById("t14").innerHTML;
    let t15 = document.getElementById("t15").innerHTML;
    let t16 = document.getElementById("t16").innerHTML;
    let t17 = document.getElementById("t17").innerHTML;
    let t18 = document.getElementById("t18").innerHTML;
    let t19 = document.getElementById("t19").innerHTML;
    let t20 = document.getElementById("t20").innerHTML;
    console.log(date);
    xhttp.open("POST", `https://isa-planner.herokuapp.com/api/events/add/${date}/${t06}/${t07}/${t08}/${t09}/${t10}/${t11}/${t12}/${t13}/${t14}/${t15}/${t16}/${t17}/${t18}/${t19}/${t20}/`, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
}

function previous() {
    save();

}

function next() {
    save();

}

function search() {
    save();
}