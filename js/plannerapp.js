function today() {

}

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

$('#search').datepicker({
    format: "dd/mm/yy",
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true
});