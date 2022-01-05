// Grid functions
function createGrid(length) {
    const mainGrid = document.querySelector('#grid');
    mainGrid.innerHTML = ''; // Clears previous grid contents
    const boxLength = mainGrid.clientHeight / (length + 1);

    for (let i = 0; i < length; i++) {
        const gridCol = document.createElement('div');
        gridCol.className = 'grid-col';

        for (let j = 0; j < length; j++) {
            const gridBox = document.createElement('div');
            gridBox.className = 'grid-box';
            gridBox.addEventListener('mouseover', colorIn); // Add event listener for coloring
            gridCol.appendChild(gridBox);
        }
        mainGrid.append(gridCol);
    }
}

function resetGrid() {
    const newLength = document.getElementById('grid-input').value;
    createGrid(parseInt(newLength));
}


// SkEtching functions
function colorIn() {
    // Applies the other color functions on 'this' context
    if (truthy) {
        colorRGB.call(this);
    } else {
        let color = document.getElementById('color-picker').value
        colorChoice.call(this, [color]);
    }
    // Saves local state to local storage, not the most efficient, since it saves entire HTML document
    // But with such a simple program, there does not seem to be a good interval to save the document in between coloring
    // Even with constant saving, performance tab on Chrome looks reasonable
    localStorage.setItem('saveData', document.documentElement.innerHTML); 
}

function colorChoice(bgColor) {
    this.style.backgroundColor = bgColor;
}

function colorRGB() {
    // Source for random color: https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
}


// On load (Default behavior)
let truthy = false; // Global var modified by sliding switch

var prevData = localStorage.getItem('saveData') // Retrieve data from local storage if exists
if (prevData) {
    document.documentElement.innerHTML = prevData
    // Make sure that the color picker color stays the same
    document.getElementById('switch-slider').style.backgroundColor = 'black';
} else {
    createGrid(20); // Create default grid if fresh start
}

var boxes = document.getElementsByClassName('grid-box');
Array.from(boxes).forEach((element) => {
    element.addEventListener('mouseover', colorIn);
})

document.getElementById('submit').addEventListener('click', resetGrid);
document.getElementById('switch-box').addEventListener('change', () => truthy = !truthy);
document.getElementById('color-picker').addEventListener('change', (event) => {
    document.getElementById('switch-slider').style.backgroundColor = event.target.value
})



