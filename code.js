for (let i = 0; i < 16; i++) {
    const bigDivo = document.createElement("div");
    bigDivo.id = "bigBlock";
    bigDivo.classList.add("container");
    for (let j = 0; j < 16; j++) {
        const divo = document.createElement("div");

        divo.id = "block";
        divo.classList.add("sketch");
        bigDivo.appendChild(divo);
    }
    document.getElementById("parent").appendChild(bigDivo);
}

let elements = document.querySelectorAll("div.sketch");
let containers = document.querySelectorAll("div.container");

function colorChange() {
    this.style.backgroundColor = "grey";
}

function colorReset(element) {
    element.style.backgroundColor = "white";
}

function rescaleSize() {
    let size = window.prompt("Give a size: ");
    if (size <= 100){
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
        for (let i = 0; i < containers.length; i++) {
            containers[i].remove();
        }
        for (let i = 0; i < size; i++) {
            const bigDivo = document.createElement("div");
            bigDivo.id = "bigBlock";
            bigDivo.classList.add("container");
            for (let j = 0; j < size; j++) {
                const divo = document.createElement("div");
        
                divo.id = "block";
                divo.classList.add("sketch");
                bigDivo.appendChild(divo);
            }
            document.getElementById("parent").appendChild(bigDivo);
        }
        elements = document.querySelectorAll("div.sketch");
        containers = document.querySelectorAll("div.container");

        for (let i = 0; i < elements.length; i++){
            elements[i].addEventListener("mouseover", colorChange)
        }
    }
    else {
        size = window.prompt("Give a smaller size: ");
    }
}

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener("mouseover", colorChange)
}

document.getElementById("reset").onclick = function() {
    for (let i = 0; i < elements.length; i++){
        colorReset(elements[i])
    }
};

document.getElementById("rescale").onclick = rescaleSize;