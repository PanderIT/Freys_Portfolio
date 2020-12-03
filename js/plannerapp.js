function today() {

}

function save() {
    let xhttp = new XMLHttpRequest();
    let date = document.getElementById("date").innerHTML;
    let t06 = document.getElementById("t06").value;
    console.log(t06);
    let t07 = document.getElementById("t07").value;
    let t08 = document.getElementById("t08").value;
    let t09 = document.getElementById("t09").value;
    let t10 = document.getElementById("t10").value;
    let t11 = document.getElementById("t11").value;
    let t12 = document.getElementById("t12").value;
    let t13 = document.getElementById("t13").value;
    let t14 = document.getElementById("t14").value;
    let t15 = document.getElementById("t15").value;
    let t16 = document.getElementById("t16").value;
    let t17 = document.getElementById("t17").value;
    let t18 = document.getElementById("t18").value;
    let t19 = document.getElementById("t19").value;
    let t20 = document.getElementById("t20").value;
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