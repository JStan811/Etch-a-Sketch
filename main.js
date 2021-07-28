/*
Javascript for TOP's Etch-a-Sketch project
coding by: Jake Standley
created: 7/27/2021
*/

const container = document.querySelector('.container');

// change color function to be used by event listener
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

//function to remove existing cells before creating new ones
function removeCells () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function setGrid(squaresPerSide) {
    removeCells();
    let totalSquares = squaresPerSide * squaresPerSide;
    for(i = 1; i <= totalSquares; i++) {
        addCell();
    }
    container.style['grid-template-columns'] = `repeat(${squaresPerSide}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${squaresPerSide}, 1fr)`;
}

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
        break;
    }

    setGrid(userInput);
}

btn.addEventListener("click", changeGrid);


/* Code below is for the Optional step 5 of the project
------------------------------------------------------------------------------------------------------
First part, "have each pass through with the mouse change it to a completely random RGB value.":

//random color generator taken from https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

//change color function from above (line 10), but using random color instead
function changeColor(e) {
    this.style.backgroundColor = '#' + randomColor();
}
------------------------------------------------------------------------------------------------------
Second part, "try having each pass just add another 10% of black to it so that only after 
        10 passes is the square completely black."
        **This doesn't work! Couldn't figure it out :(

//first change the grid color to all white
container.style.backgroundColor = 'white';

//change color function from above (line 10), but instead decreasing lightness by 10%
function changeColor(e) {
    let currentOpacity = this.style.opacity;
    console.log(currentOpacity);
    this.style.opacity = currentOpacity + 0.1;
}

*/