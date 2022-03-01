function productPrice(productId, price) {
    document.getElementById(productId).innerText = price;
    getValues();
    finaTotal();
};

function getValues() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemory = document.getElementById('extra-memory').innerText;
    const extraStorage = document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(extraMemory) + parseFloat(extraStorage) + parseFloat(deliveryCharge);
    document.getElementById('total-price').innerText = totalPrice;
    return totalPrice;
};

function finaTotal() {
    document.getElementById('final-price').innerText = getValues();
};

//extra memory start
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    productPrice('extra-memory', 0);
});

document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    productPrice('extra-memory', 180);
});

//extra storage start
document.getElementById('twoHundradFifttySix-gb-stroage').addEventListener('click', function () {
    productPrice('extra-storage', 0);
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

//add promo-code
document.getElementById('apply-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const inputValue = promoInput.value;
    if (inputValue == 'stevekaku') {
        const discountValue = document.getElementById('total-price').innerText;
        const discount = parseFloat(discountValue) * .2;
        const discountPrice = parseFloat(discountValue) - discount;
        document.getElementById('final-price').innerText = discountPrice;;
    }

});
