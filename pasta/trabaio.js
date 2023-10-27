// Preços das pizzas
const pizzaPrices = {
    '4queijos': 20.00,
    'portuguesa': 18.00,
    'pepperoni': 16.00,
    'strogonoff': 22.00
};

// Atualiza o preço total
function updateTotalPrice() {
    let totalPrice = 0;
    for (const pizza in pizzaPrices) {
        const quantity = parseInt(document.getElementById(`quantity-${pizza}`).value);
        totalPrice += quantity * pizzaPrices[pizza];
    }
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Atualiza o preço individual da pizza
function updatePizzaPrice(pizza) {
    const quantity = parseInt(document.getElementById(`quantity-${pizza}`).value);
    const price = quantity * pizzaPrices[pizza];
    document.getElementById(`price-${pizza}`).textContent = price.toFixed(2);
    updateTotalPrice();
}

// Adiciona event listeners para atualizar os preços
for (const pizza in pizzaPrices) {
    const quantityInput = document.getElementById(`quantity-${pizza}`);
    quantityInput.addEventListener('input', () => updatePizzaPrice(pizza));
}

updateTotalPrice();
