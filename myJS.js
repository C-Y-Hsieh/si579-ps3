(function() {
/*
* Excercise 1
*
*/

const colorBlock = document.querySelector('#color-block');
const colorText = document.querySelector('#color-name');
//console.log(colorBlock);
let isClicked = false;
if(colorBlock){
    colorBlock.addEventListener('click', (e) => {
        isClicked = !isClicked;
        changeColor();
        });
}



/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to

    if(isClicked){
        //change the background color using JS
        colorBlock.style.backgroundColor = '#97CBF0';

        //Change the text of the color using the span id color-name
        colorText.textContent = '#97CBF0';

    }
    else{
        //change the background color using JS
        colorBlock.style.backgroundColor = '#F08080';

        //Change the text of the color using the span id color-name
        colorText.textContent = '#F08080';
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const degreeF = document.querySelector('#f-input');
const convertButton = document.querySelector('#convertbtn');
const outputC = document.querySelector('#c-output');

if(convertButton){
    convertButton.addEventListener('click', (e) => {
        convertTemp();
    });
}

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let degreeC = (degreeF.value - 32) * 5 / 9;

    //Send the calculated temperature to HTML
    outputC.textContent = degreeC;

}


})();