

const container = document.getElementById("grid-container");
const mode = document.getElementById("mode");
const colors = document.getElementById("colors");
const colorPicker = document.getElementById("color-picker");
const resetButton = document.querySelector("button");
const sizeInput = document.getElementById("size");

let getColor;
let colorModeColor;
let colorModeChanged;
let rgbValue;
let colorSelected;




//change the size of the pixels/cells

function changeSize() {
    container.innerHTML = "";

    let size = parseInt(sizeInput.value);

    makeGrid(size, size);
}


//reset the grid

resetButton.addEventListener("click", function reset() {
    container.innerHTML = "";
    
    
    let defaultSize = 16;
        
        makeGrid(defaultSize, defaultSize);
    
});



function makeGrid(rows, columns) {
   
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    
    //make a grid using user input
    for(i = 0; i < (rows * columns); i++) {
        const cell = document.createElement("div");
    
        container.appendChild(cell).className = "grid-cell";

        cell.addEventListener('mouseover', function color(){
            
            //generate opacity, based on cell's previous opacity
            window.opacity = function() {

                let opacity = window.getComputedStyle(cell).backgroundColor;

                const myArray = opacity.split(", ");
                let previousOpacity = myArray.slice(-1)[0];
                let previousOpacityInt = parseFloat(previousOpacity);
                let newOpacity =  previousOpacityInt + modeChange(); //grab opacity from modeChange fxn

                return newOpacity;
            }

  



            //create color based on color Selected
            if(colorSelected === true) {

                

                colorPick();

                getColor = rgbValue;

            } else if(colorModeChanged === true) {
            

                colorChange();

                getColor = colorModeColor;
            } else {
                getColor = "rgb(0, 0, 0)"
            }           

            //onload color is black
            

            
            cell.style.backgroundColor = getColor;
        });


        cell.addEventListener('touchmove', function color(){
            
            //generate opacity, based on cell's previous opacity
            window.opacity = function() {

                let opacity = window.getComputedStyle(cell).backgroundColor;

                const myArray = opacity.split(", ");
                let previousOpacity = myArray.slice(-1)[0];
                let previousOpacityInt = parseFloat(previousOpacity);
                let newOpacity =  previousOpacityInt + modeChange(); //grab opacity from modeChange fxn

                return newOpacity;
            }

  



            //create color based on color Selected
            if(colorSelected === true) {

                

                colorPick();

                getColor = rgbValue;

            } else if(colorModeChanged === true) {
            

                colorChange();

                getColor = colorModeColor;
            } else {
                getColor = "rgb(0, 0, 0)"
            }           

            //onload color is black
            

            
            cell.style.backgroundColor = getColor;
        });
        
    }
   
}

makeGrid(16, 16);


//increament the opacity depending on the Mode selected
function  modeChange() {

    colorSelected = false;

    let opChange = 0.00;

    if(mode.value == "modern") {
        opChange = 0.10;
    } else if(mode.value == "classic") {
        opChange = 1.00;
    } else if(mode.value == "mixed") {
        opChange = 0.25;
    }

    return(opChange);
}


//change the color
function colorChange() {

    colorSelected = false;
    colorModeChanged = true;
    

    
    //generate random color
            
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    

    
    // create color with generated opacity
    if(colors.value == "rainbow") {


        //range is between all colors
        const randomByte = () => randomNumber(0, 255);

        colorModeColor = `rgba(${[randomByte(), randomByte(), randomByte(), opacity()].join(',')})`;
    } else if(colors.value == "greyscale") {


        //range between greys(all rbg values same eg. rbg(16, 16, 16))
        const randomByte = () => randomNumber(0, 125);

        let colorGenerated = randomByte();

        colorModeColor = `rgba(${[colorGenerated, colorGenerated, colorGenerated, opacity()].join(',')})`;
    } 

    return colorModeColor;

}



    
//convert hex from input element to RGB without opacity
function colorPick() {

    let hex = colorPicker.value;

    colorSelected = true;
    colorModeChanged = false;

    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    rgbValue = "rgb(" + r + "," + g + "," + b + ")";

    
    return rgbValue;

}


