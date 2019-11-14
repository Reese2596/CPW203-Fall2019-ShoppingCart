
class ProductStorage{
    ///Add Product
    static addProduct(p:Product):void{
        ///Get existing products in storage first
        let prods = ProductStorage.getAllProducts();
        prods.push(p);
        
        ///Convert to string and add to storage
        let data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
        
    }

    ///Retrieve Products
    /**
     * returns all products or empty array if there is no storage
     */
    static getAllProducts():Product[]{
        let data = localStorage.getItem("prods");
        if(data == null){
            return new Array<Product>();
        }
        return <Product[]>JSON.parse(data);
    }


    ///Get number of Products
    /**
     * Grab the number of items in cart based on Product array length
     */
    static getNumberOfProducts(){
        let prods = ProductStorage.getAllProducts();
        return prods.length;
    }

}