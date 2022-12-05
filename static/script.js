document.getElementById('get-cost').addEventListener('click', getTotalCost);
document.getElementById('get-stock').addEventListener('click', getStocks);
document.getElementById('post-stock').addEventListener('click', updateStocks);
document.getElementById('put-procurement').addEventListener('click', createProcuremnt);
document.getElementById('get-procurement').addEventListener('click', getProcurement);


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

function updateStocks() {
  const ingredientName = document.getElementById('ingredientName-val').value;
  const ingredientStock = document.getElementById('ingredientStock-val').value;
  if (ingredientName.value != "" && ingredientStock.value != "") {
    fetch(`/api/update-stock/${ingredientName}/${ingredientStock}`, {
      method: 'POST'
    })
      .then(res => res.json()
        .then(data => {
          if (ingredientName.match(/[a-z]/i) && !ingredientName.match(/[0-9]/i) && ingredientStock.match(/[0-9]/i) && !ingredientStock.match(/[a-z]/i)) {
            ingredientName.value = "";
            ingredientStock.value = "";
            console.log(data)
          } else {
            ingredientName.value = "";
            ingredientStock.value = "";
            alert("PLEASE ENTER APPROPRIATE VALUES!");
          }
        }))
  }
}

function createProcuremnt() {
  const totalCost = document.getElementById('totalCost-val').value;
  if (totalCost.value != "") {
    fetch(`/api/add-procurement/${totalCost}`, {
      method: 'PUT'
    })
      .then(res => res.json()
        .then(data => {
          if (!totalCost.match(/[a-z]/i) && totalCost.match(/[0-9]/i)) {
            totalCost.value = "";
            console.log(data)
          } else {
            totalCost.value = "";
            alert("PLEASE ENTER APPROPRIATE VALUES!");
          }
        }))
  }
}

function getProcurement() {
  var totalCost = document.getElementById('find-procurement').value;
  if (totalCost != "") {
    fetch(`/api/procurementCost/getCost/${totalCost}`)
      .then(res => res.json()
        .then(data => {
          if (!totalCost.match(/[a-z]/i) && totalCost.match(/[0-9]/i)) {
            const l = document.getElementById('procurement-data');
            l.innerHTML = "";
            totalCost= "";
            data.forEach(e => {
              console.log(e);
              const item = document.createElement('li');
              item.appendChild(document.createTextNode("Total Cost: " + e.totalCost + " Procurement Number: " + e.procurementNum))
              l.appendChild(item);
            })
          } else {
            totalCost = "";
            alert("PLEASE ENTER NUMBERS ONLY!");
          }
        }))
  }
}

