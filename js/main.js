let collec = Number(prompt("Qanday soni kubini olmohchisiz: "));

function collection() {
    return collec ** 2;
};

btn.addEventListener("click", () => {
    document.getElementById("text").innerHTML = collection();
});
