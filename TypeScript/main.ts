
///new terminal tsc --init
window.onload = function(){
    initializeBuyButtons();
    DisplayNumberOfItems();

    let cartIcon = <HTMLElement>document.querySelector("div#shopping-cart");
    cartIcon.onclick = showCartContent;
}

function showCartContent(){
    let displayDiv = document.querySelector("#display-cart");
    displayDiv.innerHTML = "";

    let allProds = ProductStorage.getAllProducts();

    for (let i = 0; i < allProds.length; i++) {
        const prod = allProds[i];
        //H2 widget and price
        //p description
        let prodDiv = document.createElement("div");
        prodDiv.classList.add("display-product");

        let h2 = document.createElement("h2");
        h2.innerHTML = prod.title + " - $" + prod.price;

        let p = document.createElement("p");
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
    let buyBtn = document.querySelectorAll("div.buy");
    for (let i = 0; i < buyBtn.length; i++) {
        let currBuyBtn = <HTMLElement>buyBtn[i];
        currBuyBtn.onclick = buyProduct;
    }
}

function buyProduct() {
    ///console.log("You clicked buy");
    let currBtn = this; ///buy button was clicked
    let prod = getProduct(currBtn);
    ///console.log("The current div");
    ///console.log(currBtn);
    saveProductToCart(prod);

    DisplayNumberOfItems();
}

function DisplayNumberOfItems(){
    let numItems = ProductStorage.getNumberOfProducts();
    let cartSpan = document.querySelector("div#shopping-cart > span");
    if(numItems == 0){
        cartSpan.innerHTML = "";
    }
    else{
        cartSpan.innerHTML = numItems.toString();
    }
}

/**
 * get the product object of the current selected buy product
 */
function getProduct(currBuyBtn:HTMLElement) {
    let currProdDiv = currBuyBtn.parentElement;
    //console.log("The parent Product div");
    //console.log(currProdDiv);

    ///Grab the product off the page 
    ///add title, price, etc.
    let prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    ///console.log(currProdDiv.querySelector("div.title"));
    let price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    prod.discription = currProdDiv.querySelector("div.description").innerHTML;
    return prod;
}

function saveProductToCart(p:Product):Product[]{
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}