var ourProduct = [ 
    {
        productName : "apple",
        category:"fruit"
    },
    {
        productName : "orange",
        category:"fruit"
    },
    {
        productName : "fat milk",
        category:"milk"
    },
    {
        productName : "fatless milk",
        category:"milk"
    },
    {
        productName : "Buffalo milk",
        category:"milk"
    },
    {
        productName : "curd",
        category:"milk"
    }


]

function seachProduct(){
    const searchProduct = document.querySelector("#product").value
    const FilterArr = ourProduct.filter(value =>  value.category === searchProduct)



    console.log("FilterArr =======>",FilterArr)
}