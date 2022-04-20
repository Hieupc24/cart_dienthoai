const btn = document.querySelectorAll('button');
// console.log(btn);
btn.forEach(function (button, index) {
    // console.log(button,index);
    button.addEventListener('click', function (event) {
        var btnItem = event.target;
        // console.log(btnItem);
        var product = btnItem.parentElement;
        //  console.log(product);
        var productImg = product.querySelector('img').src;
        // console.log(productImg);
        var productName = product.querySelector('h1').innerText;
        // console.log(productName);
        var productPrice = product.querySelector('span').innerText;
        // console.log(productPrice);
        addCart(productImg, productName, productPrice);
    })
})
function addCart(productImg, productName, productPrice) {
    var addtr = document.createElement('tr');
    // console.log(addtr);
    var cartItem = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll('.title');
        // var productV = document.querySelector('input');
        if (productT[i].innerHTML == productName) {
            alert("Không thể nha");
            // productV.value+=Number(1);
            return
        }
    }
    // var trContent = productPrice;
    addtr.innerHTML = ` <tr>
                            <td style="display: flex; align-items: center"><img src="${productImg}" style="width: 100px;" /><span class="title">${productName}</span></td>
                            <td><p><span class="prices">${productPrice}</span><sup>đ</sup></p></td>
                            <td><input type="number" value="1" min="0" style="width: 35px;outline: none;" ></td>
                            <td style="cursor: pointer;"><span class="delete">Xóa</span></td>
                        </tr>`
    // console.log(trContent);
    var cartTable = document.querySelector('tbody');
    // console.log(cartTable);
    cartTable.append(addtr);
    carttotal();
    cartDelete();
}
// ....................................cartPrice
function carttotal() {
    var cartItem = document.querySelectorAll('tbody tr');
    // console.log(cartItem)
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input').value;
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector('.prices').innerText;
        // console.log(productPrice);
        totalA = inputValue * productPrice * 1000000;
        // console.log(totalA);
        totalC = totalC + totalA;
        // console.log(totalC);
        // totalD = totalC.toLocaleString('de-DE');
    }
    var carttotalA = document.querySelector('.price-total span');
    var cartprice = document.querySelector('.cart-icon span')
    carttotalA.innerHTML = totalC.toLocaleString('de-DE');
    cartprice.innerHTML = totalC.toLocaleString('de-DE');
    changcart();
}

function cartDelete() {
    var cartItem = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItem.length; i++) {
        var productDelete = document.querySelectorAll(".delete");
        productDelete[i].addEventListener('click', function (event) {
            var cartDelete = event.target;
            var cartDeleteXoa = cartDelete.parentElement.parentElement;
            // console.log(cartDeleteXoa);
            cartDeleteXoa.remove();
            carttotal();
        })
    }
}

function changcart() {
    var cartItem = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('input');
        inputValue.addEventListener('change',function(event){
            carttotal();
        })

    }
}
const clear = document.querySelector(".bx-x");
const showcart = document.querySelector(".bxs-cart");
showcart.addEventListener('click',function(){
    document.querySelector('.cart').style.right = '0';
})
clear.addEventListener('click',function(){
    document.querySelector('.cart').style.right = '-100%';
})