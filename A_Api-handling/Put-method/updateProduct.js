
async function addProductInServer(endPointUrl,option){
    try{
        const response = await fetch(endPointUrl,option)
        const responseData = await response.json()
        if(responseData){
            console.log("responseData :::::",responseData)
        }
    }
    catch(error){
        console.log("Error::::",error?.message)
    }
    
}

const product = {
  id: 3,
  title: 'Apple Iphone',
  price: 55000.99,
  description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
  rating: { rate: 4.7, count: 500 }
}

const option = {
    method : "PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body : JSON.stringify(product)
}
const endpointURL = "https://fakestoreapi.com/products/3"
addProductInServer(endpointURL,option)