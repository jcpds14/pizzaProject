let modalAmount = 1;
const q = el => document.querySelector(el);
const qAll = el => document.querySelectorAll(el);


//Pizzas listing
pizzaJson.map((item, index) => {
    const pizzaItem = q(".models .pizza-item").cloneNode(true);

    pizzaItem.setAttribute("data-key", index);
    pizzaItem.querySelector(".pizza-item--img img").src = item.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        const key = e.target.closest(".pizza-item").getAttribute("data-key");
        modalAmount = 1;

        q(".pizzaBig img").src = pizzaJson[key].img;
        q(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
        q(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
        q(".pizzaInfo--size.selected").classList.remove("selected");
        qAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
            if (sizeIndex === 2) {
                size.classList.add("selected");
            }
            size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        q(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`

        q(".pizzaInfo--qt").innerHTML = modalAmount;

        q(".pizzaWindowArea").style.opacity = 0;
        q(".pizzaWindowArea").style.display = "flex";
        setTimeout(() => {
            q(".pizzaWindowArea").style.opacity = 1;
        });
    });

    q(".pizza-area").appendChild(pizzaItem);
});

//Modal Events
function closeModal() {
    q(".pizzaWindowArea").style.opacity = 0;
    setTimeout(() => {
        q(".pizzaWindowArea").style.display = "none";
    }, 500);
}
qAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) => {
    item.addEventListener("click", closeModal);
});

q(".pizzaInfo--qtplus").addEventListener("click", () => {
    modalAmount++;
    q(".pizzaInfo--qt").innerHTML = modalAmount;
});

q(".pizzaInfo--qtminus").addEventListener("click", () => {
    if (modalAmount > 1) modalAmount--;
    q(".pizzaInfo--qt").innerHTML = modalAmount;
});