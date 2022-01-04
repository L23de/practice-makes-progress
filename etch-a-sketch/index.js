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

function addColor() {

}

document.getElementById('submit').addEventListener('click', resetGrid);
// document.getElementsByClassName('grid-box').array.forEach(element => { element.addEventListener('hover', addColor)
// });
createGrid(16); // Default page load