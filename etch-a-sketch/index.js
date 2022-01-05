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
            gridCol.appendChild(gridBox);
        }
        mainGrid.append(gridCol);
    }
}

function resetGrid() {
    const newLength = document.getElementById('grid-input').value
    createGrid(parseInt(newLength));
}


// SkEtching functions
function colorIn() {
    // Applies the other color functions on 'this' context
    // colorRGB.call(this);
    colorBlack.call(this);
}

function colorBlack() {
    this.classList.toggle('black-box');
}

function colorRGB(event) {
    // Source for random color: https://css-tricks.com/snippets/javascript/random-hex-color/
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
}


// On load (Default behavior)
createGrid(20);

// Set up event listeners
document.getElementById('submit').addEventListener('click', resetGrid);

var boxes = document.getElementsByClassName('grid-box');
Array.from(boxes).forEach((box) => {
    box.addEventListener('mouseover', colorIn)
});



