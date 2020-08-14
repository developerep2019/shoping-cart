// iPhone Value Plus Button Event Handler
const phonePlusBtn = document.getElementById('iPhonePlus');
phonePlusBtn.addEventListener('click', ()=>  {
    const phoneInputValuePlus = document.getElementById('iPhoneInput').value;
    var phoneInputNumberPlus = parseFloat(phoneInputValuePlus);
    document.getElementById('iPhoneInput').value = (phoneInputNumberPlus + 1);
    
})

// iphone value Minus Button Event Handler
const phoneMinusBtn = document.getElementById('iPhoneMinus');

phoneMinusBtn.addEventListener('click', () => {
    const 
})