let sixteenXsixteen = true;
let elements = document.querySelectorAll("div.sketch");
let containers = document.querySelectorAll("div.container");

function colorChange() {
    if (this.id == "1") {
        this.style.backgroundColor = "black";
        this.style.opacity = 0.1;
        this.id = "0.1";
    }
    else if (this.id == "0.1") {
        this.style.opacity = 0.2;
        this.id = "0.2";
    }
    else if (this.id == "0.2") {
        this.style.opacity = 0.3;
        this.id = "0.3";
    }
    else if (this.id == "0.3") {
        this.style.opacity = 0.4;
        this.id = "0.4";
    }
    else if (this.id == "0.4") {
        this.style.opacity = 0.5;
        this.id = "0.5";
    }
    else if (this.id == "0.5") {
        this.style.opacity = 0.6;
        this.id = "0.6";
    }
    else if (this.id == "0.6") {
        this.style.opacity = 0.7;
        this.id = "0.7";
    }
    else if (this.id == "0.7") {
        this.style.opacity = 0.8;
        this.id = "0.8";
    }
    else if (this.id == "0.8") {
        this.style.opacity = 0.9;
        this.id = "0.9";
    }
    else if (this.id == "0.9") {
        this.style.opacity = 1;
        this.id = "-1";
    }
}

function colorReset(element) {
    element.style.backgroundColor = "white";
}

function rescaleSize() {
    let size;
    if (sixteenXsixteen == true) {
        size = 16;
        sixteenXsixteen = false;
    }
    else {
        size = window.prompt("Give a size: ");
    }
    if (size <= 100){
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
        for (let i = 0; i < containers.length; i++) {
            containers[i].remove();
        }
        for (let i = 0; i < size; i++) {
            const bigDivo = document.createElement("div");
            bigDivo.classList.add("container");
            for (let j = 0; j < size; j++) {
                const divo = document.createElement("div");
        
                divo.id = "1";
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
    elements[i].addEventListener("mouseover", colorChange);
}

document.getElementById("reset").onclick = function() {
    for (let i = 0; i < elements.length; i++){
        colorReset(elements[i])
    }
};

document.getElementById("rescale").onclick = rescaleSize;

rescaleSize();
