function today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);
    document.getElementById("date").innerHTML = today;
    loadEvents(today);
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
    incrementDate(-1);
}

function next() {
    incrementDate(1);

}

function search() {
    let date = document.getElementById("search").value;
    loadEvents(date);
}

function loadEvents(date) {

    let xhttp = new XMLHttpRequest();
    let arr = [];
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            arr = JSON.parse(this.responseText);
            arr.forEach(row => {
                console.log(row);
                document.getElementById("date").innerHTML = row["date"];
                document.getElementById("t06").value = checknull(row["t06"]);
                document.getElementById("t07").value = checknull(row["t07"]);
                document.getElementById("t08").value = checknull(row["t08"]);
                document.getElementById("t09").value = checknull(row["t09"]);
                document.getElementById("t10").value = checknull(row["t10"]);
                document.getElementById("t11").value = checknull(row["t11"]);
                document.getElementById("t12").value = checknull(row["t12"]);
                document.getElementById("t13").value = checknull(row["t13"]);
                document.getElementById("t14").value = checknull(row["t14"]);
                document.getElementById("t15").value = checknull(row["t15"]);
                document.getElementById("t16").value = checknull(row["t16"]);
                document.getElementById("t17").value = checknull(row["t17"]);
                document.getElementById("t18").value = checknull(row["t18"]);
                document.getElementById("t19").value = checknull(row["t19"]);
                document.getElementById("t20").value = checknull(row["t20"]);
            });
        } else if (date !== ""){
            document.getElementById("date").innerHTML = date;
            document.getElementById("t06").value = "";
            document.getElementById("t07").value = "";
            document.getElementById("t08").value = "";
            document.getElementById("t09").value = "";
            document.getElementById("t10").value = "";
            document.getElementById("t11").value = "";
            document.getElementById("t12").value = "";
            document.getElementById("t13").value = "";
            document.getElementById("t14").value = "";
            document.getElementById("t15").value = "";
            document.getElementById("t16").value = "";
            document.getElementById("t17").value = "";
            document.getElementById("t18").value = "";
            document.getElementById("t19").value = "";
            document.getElementById("t20").value = "";
        }
    };
    xhttp.open("GET", `https://isa-planner.herokuapp.com/api/events/get/${date}`, true);
    xhttp.send();
}

function checknull(s) {
    return (s === "null") ? "" : s;
}

function incrementDate(i) {
    let date = document.getElementById("date").innerHTML;
    console.log(date);
    let mdy = date.split("-");
    let mm = parseInt(mdy[0]);
    let dd = parseInt(mdy[1]);
    let yy = parseInt(mdy[2]);
    var d = new Date(yy, mm, dd);
    let output = d.toISOString();
    console.log(output);
    d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * i)

    dd = String(d.getDate()).padStart(2, '0');
    mm = String(d.getMonth()+1).padStart(2, '0'); //January is 0!
    yy = d.getFullYear();

    date = mm + '-' + dd + '-' + yy;
    console.log(date);
}