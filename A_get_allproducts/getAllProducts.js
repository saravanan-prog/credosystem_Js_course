const productDiv = document.getElementById("productList");



const url = "https://fakestoreapi.com/products"

const option = {
  method: "GET"
}



async function apicall() {

  try {
    let response = await fetch(url, option)
    let data     = await response.json()
    var tableView = `
    <table>
      <tr>    
          <th>title </th>
          <th>price </th>
          <th>image </th>
      </tr>
      ${data.map((value) => {

        return `
          <tr>
            <td> ${value?.title} </td>
            <td>  ${value?.price} </td>
            <td> <img src =${value?.image}  height=100 width=100 /> </td>
          </tr>
        
        `
    })}
    </table>
 `

    productDiv.innerHTML = tableView
  }
  catch (error) {
    throw new error(error)
  }




}

apicall()