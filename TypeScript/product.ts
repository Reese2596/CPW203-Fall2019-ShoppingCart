
/**
 * Represents a single shopping cart item
 */
class Product{
    /**
     * Name of the product
     */
    title:string;
    /**
     * Short desription of product 300 characters or less
     */
    discription:string;
    /**
     * Price of product (ex.0.00)
     */
    price:Number;
}

/*TestCode
let prod = new Product();
prod.title = "Product";
prod.discription = "nothing";
prod.price = 8.75;
console.log(prod);*/
