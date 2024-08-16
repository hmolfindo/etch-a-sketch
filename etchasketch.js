const container = document.getElementById("container");

//Initialize sketchpad
function initializeGrid(items){
    let itemsSquared = items * items;
    for (i = 0; i < itemsSquared; i++){
        let child = document.createElement("div");
        console.log(i);
        child.style.width = (720/items) + "px";
        child.style.height = (720/items) + "px";
        container.appendChild(child).className = "grid-child"; //Fills container with squares
        let opacity = child.style.opacity
        child.addEventListener('mouseover', () => { //Randomize color on hover
            let opacity = parseFloat(child.style.opacity);
            child.style.backgroundColor = getRandomColor();
            child.style.opacity = opacity - 0.1;
        });
    }
};

initializeGrid(32);

//Randomize color path
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    };
    console.log(color);
    return color;
};


//Change sketchpad button
const button = document.getElementById("changeSP");

button.addEventListener("click", () => {
    const dimensions = prompt("Enter dimensions of new sketchpad. (max 100)");
    let input = Number(dimensions);
    if(input < 101){
        container.innerHTML = "";
        initializeGrid(input);
        console.log("success");
    }else{
        alert("Exceeded maximum capacity for squares.");
    }
});

//Clear button
const clearBtn = document.getElementById("clear");
const gridItems = document.getElementsByClassName("grid-child");

clearBtn.addEventListener("click", () => {
    console.log("peepo");
    Array.from(gridItems).forEach((child) => {
        child.style.backgroundColor = "wheat";
    });
});


