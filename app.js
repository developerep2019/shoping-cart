// phone & case Button event Handler
function handleProductChange(product, isIncrese , multiplyValue) {
    const convertProductCount = getInputValue(product);
    let presentProductQuantity = convertProductCount;
    if(isIncrese == true) {
        presentProductQuantity = convertProductCount + 1;
    }
    if(isIncrese == false && convertProductCount > 0) {
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

    // Connection of subtotal and separate product function
    calculateTotal()
}

//Subtotal Handler
function getInputValue(product) {
    const productInput = document.getElementById( product + 'QuantityValue').value;
    const productCount = parseFloat(productInput);
    return productCount;
}

function calculateTotal() {
    const phoneCount = getInputValue('phone') * 1219;
    const caseCount = getInputValue('case') * 59;
    const totalCount = phoneCount + caseCount;
    document.getElementById('subtotalPrice').innerText = totalCount;
    const tax = Math.round(totalCount * 0.1);
    document.getElementById('taxAmount').innerText = tax;
    document.getElementById('grandTotal').innerText = totalCount + tax;
}