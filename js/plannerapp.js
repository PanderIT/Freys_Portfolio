const search = document.getElementById("search");
search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      search();
    }
})

function save() {
    console.log("hello World");
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