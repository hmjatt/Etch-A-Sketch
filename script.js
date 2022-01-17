

const container = document.getElementById("grid-container");
const mode = document.getElementById("mode");
const colors = document.getElementById("colors");
const colorOption = document.getElementById("color-option");
const colorPicker = document.getElementById("color-picker");
const resetButton = document.querySelector("button");


let red = {};
let green = {};
let blue = {};


resetButton.addEventListener("click", function reset() {
    container.innerHTML = "";
    
    
    let usrInput = parseInt(prompt("What size grid do you want(Max. 80), e.g, 64 gives you 64 rows and 64 columns"));
    
    if(typeof(usrInput) === "number" && usrInput < 81) {
        
        makeGrid(usrInput, usrInput);

    }   else if(usrInput >= 81 || usrInput === null) {
        alert("Please Enter a Number less than 80");

    }   else if(typeof(usrInput) != "number") {
        alert("Please Enter a Number");
    }
    
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
            function opacity() {
                let opacity = window.getComputedStyle(cell).backgroundColor;
                const myArray = opacity.split(", ");
                let previousOpacity = myArray.slice(-1)[0];
                let previousOpacityInt = parseFloat(previousOpacity);
                let newOpacity =  previousOpacityInt + modeChange(); //grab opacity from modeChange fxn
                return newOpacity;
            }
            

            //change the color depending on the Color selected
            window.colorChange = function() {


                let color;
                //generate random color
                        
                const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

                // create color with generated opacity
                


                if(colors.value == "rainbow") {
                    //range is between all colors
                    const randomByte = () => randomNumber(0, 255);
                    color = `rgba(${[randomByte(), randomByte(), randomByte(), opacity()].join(',')})`;
                } else if(colors.value == "greyscale") {
                    //range between greys(all rbg values same eg. rbg(16, 16, 16))
                    const randomByte = () => randomNumber(0, 125);
                    let colorGenerated = randomByte();
                    // console.log(randomByte());
                    color = `rgba(${[colorGenerated, colorGenerated, colorGenerated, opacity()].join(',')})`;
                } else {
                    
                    color = `rgba(${[red.r, green.g, blue.b, opacity()].join(',')})`;
                }
                // else if(colors.value == "color") {

                //     //show the player a rbg chart and grab value of color from there
                //     colorOption = '<input type="color" id="color" name="color" value="red">';


                //     const randomByte = () => randomNumber(0, 255);
                //     randomColor = `rgba(${[randomByte(), randomByte(), randomByte(), opacity()].join(',')})`;
                // }

                // console.log(randomColor);






                console.log(color);
                return(color);

            }
            
    
            cell.style.backgroundColor = colorChange();
        });

    


        // cell.style.backgroundColor = colorPick();
        
    }
   
}

makeGrid(16, 16);


//increament the opacity depending on the Mode selected
function  modeChange() {

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


function colorPick() {
    let h = colorPicker.value;

    let r = 0, g = 0, b = 0;

    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      red.r = "0x" + h[1] + h[2];
      green.g = "0x" + h[3] + h[4];
      blue.b = "0x" + h[5] + h[6];
    }

    
}