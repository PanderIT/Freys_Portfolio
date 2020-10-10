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

function generateButtons() {

    let x = parseInt(document.getElementById("numberInput").value);
    let letter = String.fromCharCode(64 + x);

    if (isNaN(x) || x < 1 || x > 26) {
        alert("Invalid input, please enter a number from 1 - 26!~");
        return;
    }  

    let buttons = document.getElementById("buttons");
    while (buttons.firstChild) {
        buttons.removeChild(buttons.lastChild);
    }

    for (let i = 1; i <= x; i++) {

        addButton(String.fromCharCode(64 + i))
    }
}

function addButton(letter) {
    //Create an input type dynamically.   
    let element = document.createElement("button");
    //Assign different attributes to the element. 
    element.textContent = letter
    element.setAttribute("id", letter)
    element.setAttribute("value", letter);
    element.setAttribute("type", "button");
    element.setAttribute("name", letter);
    element.setAttribute("class", "btn btn-secondary btn-lg")
    element.setAttribute("onclick", "console.log(`Button ${this.textContent} was clicked.`)");

    let buttons = document.getElementById("buttons");
    //Append the element in page (in span).  
    buttons.appendChild(element);
}

class Recipe {
    constructor(title, servings, ingredients = []) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;

        this.print()
    }

    print() {
        let recipes = document.getElementById("recipes");

        let title = document.createElement("p");
        title.textContent = `Title: ${this.title}`;
        recipes.appendChild(title)

        let servings = document.createElement("p");
        servings.textContent = `Serves: ${this.servings}`;
        recipes.appendChild(servings)

        let ingredients = document.createElement("p");
        ingredients.textContent = `Ingredients:`
        recipes.appendChild(ingredients)

        for (let i = 0; i < this.ingredients.length; i++) {
            let element = document.createElement("p");
            element.textContent = `${this.ingredients[i]}`
            recipes.appendChild(element)
        }
    }
}

function getTime() {
    let xhttp = new XMLHttpRequest();
    let str = document.getElementById("numberInput").value;
    xhttp.open("GET", "http://localhost:8888/?name=" + str, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
}
