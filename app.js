// phone & case Button event Handler
function handleProductChange(product, isIncrese , multiplyValue) {
    const productCount = document.getElementById( product + 'QuantityValue').value;
    const convertProductCount = parseFloat(productCount);
    let presentProductQuantity = convertProductCount;
    if(isIncrese == true) {
        presentProductQuantity = convertProductCount + 1;
    }
    if(isIncrese == false && productCount > 0) {
        presentProductQuantity = convertProductCount - 1;
    }
    document.getElementById(product + 'QuantityValue').value = presentProductQuantity;
    let productTotal = presentProductQuantity;
    if(product == 'phone') {
        productTotal = presentProductQuantity * 1219;
    }
    if(product == 'case') {
        productTotal = presentProductQuantity * 59;
    }
    document.getElementById(product + 'TotalPrice').innerText = productTotal;
}
