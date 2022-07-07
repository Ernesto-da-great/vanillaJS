window.onload = function () {
    let button = document.getElementById('calc');
    button.addEventListener('click', validate);
}

//this function checks for unfilled inputs
function validate() {
    let n1 = document.getElementById('productID');
    let n2 = document.getElementById('price');
    if (n1.value != "" && n2.value != "") {
        func();
    }
    else{
        alert('Please input the details of the product you have bought');
    }
}
 //onclicking the calculate button
function func() {
    var itemName = readName();
    var itemPrice = parseInt(readPrice(), 10);
        if (itemPrice >= 2000) {
            var x = itemPrice * 0.25;
            var newPrice = itemPrice - x;
        }
        else {
            var newPrice = itemPrice;
            alert(`You are NOT eligible for a discount`);
            alert(`Discount applied to goods above $2000`);
        }
    //var x = itemPrice - 40;
    var c = document.getElementsByTagName('span');
    c[0].innerHTML = `on ${itemName}`;
    c[1].innerHTML = `$ ${newPrice}`;
}

function readName() {
    let c = document.getElementById('productID').value;
    return c;
}
function readPrice() {
    let d = document.getElementById('price').value;
    return d;
}