// iPhone Value Plus Button and price plus Event Handler
const phonePlusBtn = document.getElementById('iPhonePlus');
phonePlusBtn.addEventListener('click', ()=>  {
    const phoneInputValuePlus = document.getElementById('iPhoneInput').value;
    const phoneInputNumberPlus = parseFloat(phoneInputValuePlus);
    document.getElementById('iPhoneInput').value = (phoneInputNumberPlus + 1);
    const iPhonePricePlus = document.getElementById('iPhonePrice').innerText;
    const iPhonePriceNumber = parseFloat(iPhonePricePlus);
    document.getElementById('iPhonePrice').innerText = iPhonePriceNumber + 1219;
    const casePriceUnder = document.getElementById('casePrice').innerText;
    const casePriceUnderNumber = parseFloat(casePriceUnder);
    console.log(iPhonePriceNumber + casePriceUnderNumber);

    
})

// iphone value Minus Button and  Price Minus Event Handler
const phoneMinusBtn = document.getElementById('iPhoneMinus');
phoneMinusBtn.addEventListener('click', () => {
    const phoneInputValueMinus = document.getElementById('iPhoneInput').value;
    const phoneInputNumberMinus = parseFloat(phoneInputValueMinus);
    document.getElementById('iPhoneInput').value = phoneInputNumberMinus - 1;
    const iPhonePriceMinus = document.getElementById('iPhonePrice').innerText;
    const iPhonePriceMinusNumber = parseFloat(iPhonePriceMinus);
    document.getElementById('iPhonePrice').innerText = iPhonePriceMinusNumber - 1219;
})

// case button plus event handler
const casePlusBtn = document.getElementById('casePlus');
casePlusBtn.addEventListener('click', () => {
    const caseValuePlus = document.getElementById('caseValue').value;
    const caseValuePlusNumber = parseFloat(caseValuePlus);
    document.getElementById('caseValue').value = caseValuePlusNumber + 1;
    const casePricePlus = document.getElementById('casePrice').innerText;
    const casePriceNumberPlus = parseFloat(casePricePlus);
    document.getElementById('casePrice').innerText = casePriceNumberPlus + 59;
})

// case button minus event handler
const caseMinusBtn = document.getElementById('caseMinus');

caseMinusBtn.addEventListener('click',() => {
    const constValueMinus = document.getElementById('caseValue').value;
    const constValueMinusNumber = parseFloat(constValueMinus);
    document.getElementById('caseValue').value = constValueMinusNumber - 1;
    const casePriceMinus = document.getElementById('casePrice').innerText;
    const casePriceNumberMinus = parseFloat(casePriceMinus);
    document.getElementById('casePrice').innerText = casePriceNumberMinus - 59;
})