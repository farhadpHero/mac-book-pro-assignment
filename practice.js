function productPrice(productId, price) {
    document.getElementById(productId).innerText = price;
    updateTotal();
    finaleTotal();
}


function updateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('extra-memory').innerText;
    const storagePrice = document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryCharge);
    document.getElementById('total-price').innerText = totalPrice;
    return totalPrice;
}

function finaleTotal() {
    document.getElementById('final-price').innerText = updateTotal();
}

document.getElementById('eight-gb-memory').addEventListener('click', function () {
    productPrice('extra-memory', 0);
});
document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    productPrice('extra-memory', 180);
});

//storage
document.getElementById('twoHundradFifttySix-gb-stroage').addEventListener('click', function () {
    productPrice('extra-storage', 0)
});
document.getElementById('fiveHundradtwelve-gb-stroage').addEventListener('click', function () {
    productPrice('extra-storage', 100);
});
document.getElementById('one-tb-stroage').addEventListener('click', function () {
    productPrice('extra-storage', 180);
});

//delivery charge
document.getElementById('free-delivery').addEventListener('click', function () {
    productPrice('delivery-charge', 0);
});
document.getElementById('chargable-delivery').addEventListener('click', function () {
    productPrice('delivery-charge', 20);
});

//apply cupon code 
document.getElementById('apply-button').addEventListener('click', function () {
    const cuponInput = document.getElementById('promo-input');
    if (cuponInput.value == 'stevekaku') {
        const discount = document.getElementById('final-price').innerText * 0.2;
        const discountPrice = document.getElementById('final-price').innerText - discount;
        document.getElementById('final-price').innerText = discountPrice;
    }
})
