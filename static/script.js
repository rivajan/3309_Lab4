document.getElementById('get-cost').addEventListener('click', getTotalCost);
document.getElementById('get-stock').addEventListener('click', getStocks);


function getTotalCost() {
  const recipeID = document.getElementById('find-cost').value;
  if (recipeID.value != "") {
    fetch(`/api/get-total-cost/${recipeID}`)
      .then(res => res.json()
        .then(data => {
          if (!recipeID.match(/[a-z]/i) && recipeID.match(/[0-9]/i)) {
            const l = document.getElementById('cost-data');
            l.innerHTML = "";
            recipeID.value = "";
            const item = document.createElement('li');
            console.log(data[0]["Total Cost"])
            item.appendChild(document.createTextNode(data[0]["Total Cost"]))
            l.appendChild(item);

          } else {
            recipeID.value = "";
            alert("PLEASE ENTER NUMBERS ONLY!");
          }
        }))
  }
}

function getStocks() {
  const recipeID = document.getElementById('find-stock').value;
  if (recipeID.value != "") {
    fetch(`/api/get-stock/${recipeID}`)
      .then(res => res.json()
        .then(data => {
          if (!recipeID.match(/[a-z]/i) && recipeID.match(/[0-9]/i)) {
            const l = document.getElementById('stock-data');
            l.innerHTML = "";
            recipeID.value = "";
            data.forEach(e => {
              console.log(e);
              const item = document.createElement('li');
              item.appendChild(document.createTextNode("Ingredient Name: " + e.ingredientName + " Ingredient Stock: " + e.ingredientStock + " City: " + e.ingredientName + " Ingredient Amount: " + e.ingredientAmount))
              l.appendChild(item);
            })

          } else {
            recipeID.value = "";
            alert("PLEASE ENTER NUMBERS ONLY!");
          }
        }))
  }
}


