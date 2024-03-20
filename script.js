const gridContainer = document.getElementById('grid-container');
let color = 'black'; 
// Create the grid of 16x16 divs
function make_grid(size){
    for (let i = 0; i < size * size; i++) {
        // Create a new div element
        const div = document.createElement('div');
        
        // Add a class to the div for styling
        div.classList.add('grid-item');
        div.style.width = "calc(100%/"+size+")";
        div.style.height = "calc(100%/"+size+")";
        div.addEventListener("mouseover",colorSquare)
        // Optionally, set content or attributes for each div
        
        // Append the div to the grid container
        gridContainer.appendChild(div);
      }
}

make_grid(16)

function colorSquare(){
    if(color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = color
    }
}

function changeColor(choice){
    color = choice;
}
