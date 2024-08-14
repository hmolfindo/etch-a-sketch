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
        child.addEventListener('mouseout', function(){
            child.style.backgroundColor = "mediumvioletred"; //Function to keep div color after hover
        });
    }
};

initializeGrid(32);


//Button for changing sketchpad dimensions
const button = document.getElementById("changeSP");

button.addEventListener("click", () => {
    const dimensions = prompt("Enter dimensions of new sketchpad. (max 100)");
    let input = Number(dimensions);
    container.innerHTML = "";
    initializeGrid(input);
    console.log("success");
});
