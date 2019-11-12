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
        var currBtn = buyBtn[i];
        currBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    console.log("You clicked buy");
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
