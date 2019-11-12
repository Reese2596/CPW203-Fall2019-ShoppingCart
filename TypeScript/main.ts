
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
        let currBtn = <HTMLElement>buyBtn[i];
        currBtn.onclick = buyProduct;
    }
}

function buyProduct() {
    console.log("You clicked buy")
}