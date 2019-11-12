
///new terminal tsc --init
window.onload = function(){
    initializeBuyButtons();
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
    //console.log("You clicked buy");
    let currBuyBtn = <HTMLElement> this;
    /* console.log("The current div");
    console.log(currBuyBtn); */

    let currProdDiv = currBuyBtn.parentElement;
    /* console.log("The parent Product div");
    console.log(currProdDiv); */

    ///Grab the product off the page 
    ///add title, price, etc.
    let prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    //console.log(currProdDiv.querySelector("div.title"));
    let price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    prod.discription = currProdDiv.querySelector("div.description").innerHTML;

    /*alert("Do you want to add " + prod.title + ", " + prod.discription 
        + "to cart for " + prod.price);*/
}

