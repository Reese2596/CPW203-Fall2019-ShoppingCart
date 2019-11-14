///new terminal tsc --init
window.onload = function () {
    initializeBuyButtons();
    DisplayNumberOfItems();
    var cartIcon = document.querySelector("div#shopping-cart");
    cartIcon.onclick = showCartContent;
};
function showCartContent() {
    var displayDiv = document.querySelector("#display-cart");
    displayDiv.innerHTML = "";
    var allProds = ProductStorage.getAllProducts();
    for (var i = 0; i < allProds.length; i++) {
        var prod = allProds[i];
        //H2 widget and price
        //p description
        var prodDiv = document.createElement("div");
        prodDiv.classList.add("display-product");
        var h2 = document.createElement("h2");
        h2.innerHTML = prod.title + " - $" + prod.price;
        var p = document.createElement("p");
        p.innerHTML = prod.discription;
        prodDiv.appendChild(h2);
        prodDiv.appendChild(p);
        displayDiv.appendChild(prodDiv);
    }
}
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
    ///console.log("You clicked buy");
    var currBtn = this; ///buy button was clicked
    var prod = getProduct(currBtn);
    ///console.log("The current div");
    ///console.log(currBtn);
    saveProductToCart(prod);
    DisplayNumberOfItems();
}
function DisplayNumberOfItems() {
    var numItems = ProductStorage.getNumberOfProducts();
    var cartSpan = document.querySelector("div#shopping-cart > span");
    if (numItems == 0) {
        cartSpan.innerHTML = "";
    }
    else {
        cartSpan.innerHTML = numItems.toString();
    }
}
/**
 * get the product object of the current selected buy product
 */
function getProduct(currBuyBtn) {
    var currProdDiv = currBuyBtn.parentElement;
    //console.log("The parent Product div");
    //console.log(currProdDiv);
    ///Grab the product off the page 
    ///add title, price, etc.
    var prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    ///console.log(currProdDiv.querySelector("div.title"));
    var price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    prod.discription = currProdDiv.querySelector("div.description").innerHTML;
    return prod;
}
function saveProductToCart(p) {
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
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
var ProductStorage = /** @class */ (function () {
    function ProductStorage() {
    }
    ///Add Product
    ProductStorage.addProduct = function (p) {
        ///Get existing products in storage first
        var prods = ProductStorage.getAllProducts();
        prods.push(p);
        ///Convert to string and add to storage
        var data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
    };
    ///Retrieve Products
    /**
     * returns all products or empty array if there is no storage
     */
    ProductStorage.getAllProducts = function () {
        var data = localStorage.getItem("prods");
        if (data == null) {
            return new Array();
        }
        return JSON.parse(data);
    };
    ///Get number of Products
    /**
     * Grab the number of items in cart based on Product array length
     */
    ProductStorage.getNumberOfProducts = function () {
        var prods = ProductStorage.getAllProducts();
        return prods.length;
    };
    return ProductStorage;
}());
