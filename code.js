for (let i = 0; i < 16; i++) {
    const bigDivo = document.createElement("div");
    bigDivo.id = "bigBlock";
    for (let j = 0; j < 16; j++) {
        const divo = document.createElement("div");

        divo.id = "block";
        bigDivo.appendChild(divo);
    }
    document.getElementById("parent").appendChild(bigDivo);
}