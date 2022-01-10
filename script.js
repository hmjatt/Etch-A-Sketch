//grab container and add 16x16 grid with 1fr for row and 1fr for column. make it using a fxn
//so you can create as big of a grid you want

const container = document.getElementById("container");



function makeGrid(rows, columns) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    

    for(i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-cell";
        
    }
    
    
   
}

makeGrid(16, 16);



