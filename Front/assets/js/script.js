const q = el => document.querySelector(el);
const qAll = el => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
    let pizzaItem = q(".models .pizza-item").cloneNode(true);

    q(".pizza-area").appendChild(pizzaItem);
});