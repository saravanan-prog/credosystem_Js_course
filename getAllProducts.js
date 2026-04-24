const url = "https://fakestoreapi.com/products";

const option = {
  method: "GET",
};

const productDiv = document.getElementById("productList");

var tableView = `<table>
    <tr>    
        <th>title </th>
        <th>price </th>
        <th>image </th>
    </tr>
 `;

fetch(url, option)
  .then((response) => response.json())
  .then((data) => {
    data.map(
      (value) =>
        (tableView += `
                <tr>
                    <td>${value?.title}</td>
                    <td>${value?.price}</td>
                    <td> <img src =${value?.image} height=100  widht=100/></td>
                </tr>
            `),
    );

    tableView += `</table>`;
    productDiv.innerHTML = tableView;
  })
  .catch((error) => console.log(error));
