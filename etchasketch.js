const container = document.getElementById("container");

function initializeGrid(items){
    for (i = 0; i < items; i++){
        let child = document.createElement("div");
        console.log(i);
        container.appendChild(child).className = "grid-child";
    }
};

initializeGrid(256);