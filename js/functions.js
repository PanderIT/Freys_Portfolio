var count = 0;

function howmany(){
    count += 1;
    if (count % 2 === 1){
        document.getElementById('xlanguages').innerHTML = 'I know Six languages if you count html and css.';
    }
    else{
        document.getElementById('xlanguages').innerHTML = 'Click Me to Find Out.'
    }
}

function lab1Solution() {
    var score = 0;

    if (document.getElementById("Q1D").checked) {
        score++
    }

    if (document.getElementById("Q2D").checked) {
        score++
    }

    if (document.getElementById("Q3A").checked) {
        score++
    }

    if (document.getElementById("Q4D").checked) {
        score++
    }

    if (document.getElementById("Q5B").checked) {
        score++
    }

    console.log(score);

    alert("You scored \n" + score + " / " + 5);
}

function lab2Solution() {

    let x = parseInt(document.getElementById("numberInput").value);
    let letter = String.fromCharCode(64 + x);

    if (isNaN(x) || x < 1 || x > 26) {
        alert("Invalid input, please enter a number from 1 - 26!~");
        return;
    }  

    lab2Reset();

    for (var i = 1; i <= x; i++) {

        addButton(String.fromCharCode(64 + i))
    }
}

function addButton(letter) {
    //Create an input type dynamically.   
    var element = document.createElement("button");
    //Assign different attributes to the element. 
    element.setAttribute("value", letter);
    element.setAttribute("type", "button");
    element.setAttribute("name", letter);
    element.setAttribute("onclick", alert(letter));

    var buttons = document.getElementById("buttons");
    //Append the element in page (in span).  
    buttons.appendChild(element);
}

function lab2Reset() {

    var lab2 = document.getElementById("lab2");

    var buttons = document.getElementById("buttons");
    buttons.remove();
    buttons = document.createElement("div");
    buttons.setAttribute("class", "col-12 narrow text-center")

    lab2.appendChild(buttons)
}


// var db = firebase.firestore();

// function send() {
//     alert("adding data");
//     var first_name = document.getElementById("firstName").value;
//     var last_name = document.getElementById("lastName").value;
//     var query = document.getElementById("comments").value;
//     var e_mail = document.getElementById("emails").value;
//     db.collection("contact").add({
//         comment: query,
//         email: e_mail,
//         fName: first_name,
//         lName: last_name
//     }).then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//         //update the products view
//         getProducts();
//     }).catch(function (error) {
//         console.error("Error adding document: ", error);
//     });
//     alert('Information Sent to Freys Database.')
// }


// var productdisplay = document.getElementById('products');
// productdisplay.innerHTML = "";var db = firebase.firestore();
// db.collection("game").get().then((querySnapshot) =>{

//     alert("Data Recieved");
//     productdisplay.innerHTML = "";
//     querySnapshot.forEach((doc) => {
//         productdisplay.innerHTML += (doc.data().productName + " " + doc.data().productPrice + " "
//             + "<img src='images/" + doc.data().productImage + "'>" +"<br>");
//     });
// });