console.log('hello i am e-Comerce ');
let myP1Price = 15;
let myP2Price = 20;
let shippingCharge = 15;

let allP1Price =0;
let allP2Price = 0;
let FinalPriceVar = 0;

let decBtnP1 = document.getElementById('decBtnP1');
let incBtnP1 = document.getElementById('incBtnP1');

let quantityP1 = document.getElementById('quantityP1');
let quantityP1Value = parseInt(document.getElementById('quantityP1').innerHTML);

let totalP1Price = document.getElementById('totalP1Price');

let AllProductAmt = document.getElementById('AllProductAmt');
let FinalPrice = document.getElementById('FinalPrice');

let couponPass = document.getElementById('couponPass');

incBtnP1.addEventListener('click', () => {
    if (quantityP1Value >= 5) {
        alert("max 5 quantity allowd");
        quantityP1.style.background = 'red';
    } else {
        quantityP1Value += 1;
        document.getElementById('quantityP1').innerHTML = quantityP1Value;
        quantityP1.style.background = 'white';
        allP1Price = quantityP1Value * myP1Price;
        totalP1Price.innerHTML = allP1Price;
        AllProductAmt.innerHTML = allP1Price +  allP2Price;
        FinalPrice.innerHTML =  allP1Price +  allP2Price + shippingCharge;
    }
});
decBtnP1.addEventListener('click', () => {
    if (quantityP1Value <= 0) {
    } else {
        quantityP1Value -= 1;
        document.getElementById('quantityP1').innerHTML = quantityP1Value;
        quantityP1.style.background = 'white';
        allP1Price = quantityP1Value * myP1Price;
        totalP1Price.innerHTML = allP1Price;

        AllProductAmt.innerHTML = allP1Price +  allP2Price;
        FinalPrice.innerHTML =  allP1Price +  allP2Price + shippingCharge;
    }
});



let decBtnP2 = document.getElementById('decBtnP2');
let incBtnP2 = document.getElementById('incBtnP2');

let quantityP2 = document.getElementById('quantityP2');
let quantityP2Value = parseInt(document.getElementById('quantityP2').innerHTML);

let totalP2Price = document.getElementById('totalP2Price');


incBtnP2.addEventListener('click', () => {
    if (quantityP2Value >= 5) {
        alert("max 5 quantity allowd");
        quantityP2.style.background = 'red';
    } else {
        quantityP2Value += 1;
        document.getElementById('quantityP2').innerHTML = quantityP2Value;
        quantityP2.style.background = 'white';
        allP2Price = quantityP2Value * myP2Price;
        totalP2Price.innerHTML = allP2Price;
        AllProductAmt.innerHTML = allP1Price +  allP2Price;
        FinalPrice.innerHTML =  allP1Price +  allP2Price + shippingCharge;
    }
});
decBtnP2.addEventListener('click', () => {
    if (quantityP2Value <= 0) {
    } else {
        quantityP2Value -= 1;
        document.getElementById('quantityP2').innerHTML = quantityP2Value;
        quantityP2.style.background = 'white';
        allP2Price = quantityP2Value * myP2Price;
        totalP2Price.innerHTML = allP2Price;
        AllProductAmt.innerHTML = allP1Price +  allP2Price;
        FinalPrice.innerHTML =  allP1Price +  allP2Price + shippingCharge;
    }
});




couponApply = () => {
    console.log('btn pressed')

    if (couponPass.value == 'parth') {
        if ( parseInt( document.getElementById('AllProductAmt').innerHTML)  == 0) {
            alert('you have not shopping yet!')
        }
        else {
            let temp = parseInt(FinalPrice.innerHTML);
            FinalPrice.innerHTML = temp - 15;
            alert('you got $15 off')
        }
    }
}


checkout = () => {
    alert('Thank you For Shopping WITH AP Webdesign');
}