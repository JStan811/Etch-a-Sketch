/*
Javascript for TOP's Etch-a-Sketch project
coding by: Jake Standley
created: 7/27/2021
*/

const container = document.querySelector('.container');

//change color function to be used by event listener
function changeColor(e) {
    this.style.backgroundColor = '#757575';
}

//create div with class gridCell, add event listener on mouseover that runs changeColor(), then insert it into container
function addCell() {
    const gridCell = document.createElement('div');
    gridCell.classList.add('gridCell');
    gridCell.addEventListener('mouseover', changeColor);
    container.appendChild(gridCell);
}

function setGrid(squaresPerSide) {
    let totalSquares = squaresPerSide * squaresPerSide;
    for(i = 1; i <= totalSquares; i++) {
        addCell();
    }
    container.style['grid-template-columns'] = `repeat(${squaresPerSide}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${squaresPerSide}, 1fr)`;
}

//create 256 (16x16) divs and place inside "container" div

setGrid(16);

//code for button allowing user to set own grid size
const btn = document.querySelector('button');

function changeGrid(e) {
    let userInput;
    
    //loop to make sure user's input is an integer and max 100
    while(true) {
        userInput = parseFloat(prompt('How many squares per side would you like for your grid?', '16')); //conversion to float needed to check isInteger later
        if (userInput > 100) {
            alert("Sorry! Your grid can only have up to 100 squares per side.");
            continue;
        }
        if (!(Number.isInteger(userInput)) || userInput < 1) { 
            alert("Please enter an integer greater than 0.");
            continue;
        }
        console.log(userInput);
        break;
    }

    setGrid(userInput);
}

btn.addEventListener("click", changeGrid);