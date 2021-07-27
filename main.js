/*
Javascript for TOP's Etch-a-Sketch project
coding by: Jake Standley
created: 7/27/2021
*/

const container = document.querySelector('.container');

//create 4 (easier than 16 to start) divs and place inside "container" div
for(i = 1; i <= 16; i++) {
    container.appendChild(document.createElement('div'));
}