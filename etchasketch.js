const container = document.getElementById("container");

function initializeGrid(items){
    for (i = 0; i < items; i++){
        let child = document.createElement("div");
        console.log(i);
        container.appendChild(child).className = "grid-child";
    }
};

initializeGrid(256);

const childrenArray = document.querySelectorAll(".grid-child");

childrenArray.forEach(function(child){
    child.addEventListener('mouseout', function(){
        child.style.backgroundColor = "mediumvioletred";
    })
});
