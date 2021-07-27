/*
Javascript for TOP's Etch-a-Sketch project
coding by: Jake Standley
created: 7/27/2021
*/

const container = document.querySelector('.container');

//change color function to be used by event listener
function changeColor(e) {
    this.style.backgroundColor = 'black';
}

//create div with class gridCell, add event listener on mouseover that runs changeColor(), then insert it into container
function addCell() {
    const gridCell = document.createElement('div');
    gridCell.classList.add('gridCell');
    gridCell.addEventListener('mouseover', changeColor);
    container.appendChild(gridCell);
}

//create 256 (16x16) divs and place inside "container" div
for(i = 1; i <= 256; i++) {
    addCell();
}


//code for button allowing user to set own grid size
const btn = document.querySelector('button');

function changeGrid(e) {
    let userInput;
    
    //loop to make sure user's input is an integer and max 100
    while(true) {
        userInput = parseFloat(prompt('How many square per side would you like for your grid?', '16')); //conversion to float needed to check isInteger later
        if (userInput >= 100) {
            alert("Sorry! Your grid can only have up to 100 squares per side.");
            continue;
        }
        if (!(Number.isInteger(userInput))) { //here is where we check to make sure the input is an integer
            alert("Please enter a whole number.");
            continue;
        }
        console.log(userInput);
        break;
    }

    

}

btn.addEventListener("click", changeGrid);