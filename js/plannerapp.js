function today() {

}

function save() {
    let xhttp = new XMLHttpRequest();
    let date = document.getElementById("date").innerHTML;
    let t06 = document.getElementById("t06").value;
    if(t06 == "") {t06 = null}
    let t07 = document.getElementById("t07").value;
    if(t07 == "") {t07 = null}
    let t08 = document.getElementById("t08").value;
    if(t08 == "") {t08 = null}
    let t09 = document.getElementById("t09").value;
    if(t09 == "") {t09 = null}
    let t10 = document.getElementById("t10").value;
    if(t10 == "") {t10 = null}
    let t11 = document.getElementById("t11").value;
    if(t11 == "") {t11 = null}
    let t12 = document.getElementById("t12").value;
    if(t12 == "") {t12 = null}
    let t13 = document.getElementById("t13").value;
    if(t13 == "") {t13 = null}
    let t14 = document.getElementById("t14").value;
    if(t14 == "") {t14 = null}
    let t15 = document.getElementById("t15").value;
    if(t15 == "") {t15 = null}
    let t16 = document.getElementById("t16").value;
    if(t16 == "") {t16 = null}
    let t17 = document.getElementById("t17").value;
    if(t17 == "") {t17 = null}
    let t18 = document.getElementById("t18").value;
    if(t18 == "") {t18 = null}
    let t19 = document.getElementById("t19").value;
    if(t19 == "") {t19 = null}
    let t20 = document.getElementById("t20").value;
    if(t20 == "") {t20 = null}
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