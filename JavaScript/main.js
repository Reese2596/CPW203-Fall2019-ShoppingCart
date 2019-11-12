///new terminal tsc --init
window.onload = function () {
    initializeBuyButtons();
};
/**
 * Wire up "buy"" buttons
 */
function initializeBuyButtons() {
    var buyBtn = document.querySelectorAll("div.buy");
    for (var i = 0; i < buyBtn.length; i++) {
        var currBuyBtn = buyBtn[i];
        currBuyBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    //console.log("You clicked buy");
    var prod = getProduct();
    saveProductToCart(prod);
}
/**
 * get the product object of the current selected buy product
 */
function getProduct() {
    var currBuyBtn = this;
    console.log("The current div");
    console.log(currBuyBtn);
    var currProdDiv = currBuyBtn.parentElement;
    console.log("The parent Product div");
    console.log(currProdDiv);
    ///Grab the product off the page 
    ///add title, price, etc.
    var prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    //console.log(currProdDiv.querySelector("div.title"));
    var price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    prod.discription = currProdDiv.querySelector("div.description").innerHTML;
    return prod;
}
function saveProductToCart(prod) {
}
/**
 * Represents a single shopping cart item
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
/*TestCode
let prod = new Product();
prod.title = "Product";
prod.discription = "nothing";
prod.price = 8.75;
console.log(prod);*/
