

const container = document.getElementById("container");
const resetButton = document.querySelector("button");


resetButton.addEventListener("click", function reset() {
    container.innerHTML = "";
    
    
    let usrInput = parseInt(prompt("What size grid do you want(Max. 100), e.g, 64 gives you 64 rows and 64 columns"));
    
    if(typeof(usrInput) === "number" && usrInput < 100) {
        
        makeGrid(usrInput, usrInput);

    }   else if(usrInput >= 100 || usrInput === null) {
        alert("Please Enter a Number less than 100");

    }   else if(typeof(usrInput) != "number") {
        alert("Please Enter a Number");
    }
    
});



function makeGrid(rows, columns) {
   
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    
    //make a grid using user input
    for(i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
    
        container.appendChild(cell).className = "grid-cell";
        cell.addEventListener('mouseover', function color(){
            //generate random color
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            
            //add color to the grid-cell
            cell.style.backgroundColor = randomColor;
        });
        
    }
   
}

makeGrid(16, 16);


