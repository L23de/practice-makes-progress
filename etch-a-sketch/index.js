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

createGrid(20);
document.getElementById('submit').addEventListener('click', resetGrid);
document.getElementById('switch-box').addEventListener('change', () => truthy = !truthy);
document.getElementById('color-picker').addEventListener('change', (event) => {
    console.log(event.target.value)
    document.getElementById('switch-slider').style.backgroundColor = event.target.value
})



