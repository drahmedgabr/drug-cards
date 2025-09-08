let drugs = [];

function getList() {
    drugs = JSON.parse(localStorage.getItem("drugs")) ?? [];
}

getList();

var printArea = document.getElementById("printArea");

drugs.forEach((drug, index) => {
    
    drug = JSON.parse(drug);

    const card = document.createElement("div");
    card.className = `card ${drug.class}`;
    card.innerHTML = `<h3>${drug.title}</h3><div class="inputDiv"><p>Expire</p><div></div></div><div class="inputDiv"><p>Batch</p><div></div>`;
    printArea.appendChild(card);

    // Start a new page after 4 cards
    if ((index + 1) % 4 === 0 && index !== drugs.length - 1) {
        const newPage = document.createElement("div");
        newPage.className = "page";
        printArea.parentNode.appendChild(newPage);
        printArea = newPage;
    }
});
