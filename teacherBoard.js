
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => console.log("data===>",data))
  .catch(error => console.log("error===>",error))