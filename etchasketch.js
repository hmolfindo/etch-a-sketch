const container = document.getElementById("container");

//Initialize sketchpad
function initializeGrid(items){
    let itemsSquared = items * items;
    for (i = 0; i < itemsSquared; i++){
        let child = document.createElement("div");
        console.log(i);
        child.style.width = ((720/items)-2) + "px";
        child.style.height = ((720/items)-2) + "px";
        container.appendChild(child).className = "grid-child"; //Fills container with squares
        child.addEventListener('mouseover', () => { //Randomize color on hover
            child.style.backgroundColor = getRandomColor();
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


//Button for changing sketchpad dimensions
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



