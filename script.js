let numRows = 0;
let numCols = 0;
let colorSelected;

const tr = "<tr></tr>";
const td = "<td></td>";
const table = document.querySelector("tbody");

//Adds a row
function addR() {
    numRows++;
    updateRowCounter()
    table.innerHTML += tr;

    for (let i=0; i<numCols; i++)
        table.querySelectorAll("tr")[numRows - 1].innerHTML += td;
}
//Adds a column
function addC() {
    numCols++;
    updateColCounter();

    for (let i = 0; i < numRows; i++) {
        table.querySelectorAll("tr")[i].innerHTML += td;
    }
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    alert("Clicked Fill All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}

function updateRowCounter() {
    document.querySelector("#row").innerHTML = "ROW: " + numRows;
}

function updateColCounter() {
    document.querySelector("#col").innerHTML = "COL: " + numCols;
}