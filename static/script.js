document.getElementById('get-cost').addEventListener('click', getTotalCost);
document.getElementById('get-stock').addEventListener('click', getStocks);
document.getElementById('post-stock').addEventListener('click', updateStocks);
document.getElementById('put-procurement').addEventListener('click', createProcuremnt);
document.getElementById('get-procurement').addEventListener('click', getProcurement);
document.getElementById('get-label').addEventListener('click', getTotalCount);
document.getElementById('get-label-hide').addEventListener('click', getTotalCountHide);
document.getElementById('get-LabelDel').addEventListener('click', deleteLabels);
document.getElementById('get-batchMix').addEventListener('click', getProcuredFor);
document.getElementById('get-batchMix-hide').addEventListener('click', getProcuredForHide);
document.getElementById('get-packages').addEventListener('click', getPackages);
document.getElementById('get-packages-hide').addEventListener('click', getPackagesHide);
document.getElementById('put-shipment').addEventListener('click', createShipment);
document.getElementById('get-shipment').addEventListener('click', getShipments);


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
            totalCost = "";
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


// WAIT FOR RIVA DATA TO TEST
function getProcuredFor() {
  fetch(`/api/data/procurement/procure`)
    .then(res => res.json()
      .then(data => {
        const l = document.getElementById('batchMix-data');
        l.innerHTML = "";
        data.forEach(e => {
          console.log(e);
          const item = document.createElement('li');
          item.appendChild(document.createTextNode("Procurement Number: " + e.procurementNum))
          l.appendChild(item);
        })
      }))
}

function getProcuredForHide() {
  const l = document.getElementById('batchMix-data');
  l.innerHTML = "";
}

function getTotalCount() {
  fetch(`/api/get-cost/totalCount`)
    .then(res => res.json()
      .then(data => {
        const l = document.getElementById('label-data');
        l.innerHTML = "";
        data.forEach(e => {
          console.log(e);
          const item = document.createElement('li');
          item.appendChild(document.createTextNode("Package Label: " + e.packageLabel + " Count: " + e["COUNT(barcode)"]))
          l.appendChild(item);
        })
      }))
}
function getTotalCountHide() {
  const l = document.getElementById('label-data');
  l.innerHTML = "";
}

function deleteLabels() {
  const labelType = document.getElementById('find-LabelDel').value;
  if (labelType.value != "" && labelType.value != "") {
    fetch(`/api/delete/${labelType}`, {
      method: 'DELETE'
    })
      .then(res => res.json()
        .then(data => {
          if (labelType.match(/[a-z]/i) && !labelType.match(/[0-9]/i)) {
            labelType.value = "";
            console.log(data)
          } else {
            labelType.value = "";
            alert("PLEASE ENTER APPROPRIATE VALUES!");
          }
        }))
  }
}

function getPackages() {
  fetch(`/api/import-Emp-Ship`)
    .then(res => res.json()
      .then(data => {
        const l = document.getElementById('package-data');
        l.innerHTML = "";
        data.forEach(e => {
          console.log(e);
          const item = document.createElement('li');
          item.appendChild(document.createTextNode("Package Type: " + e.packageType + " Package Stock: " + e.packageStock))
          l.appendChild(item);
        })
      }))
}

function getPackagesHide() {
  const l = document.getElementById('package-data');
  l.innerHTML = "";
}

function createShipment() {
  var city = document.getElementById('city-val').value;
  var streetName = document.getElementById('streetName-val').value;
  var streetNumber = document.getElementById('streetNumber-val').value;
  var postalCode = document.getElementById('postalCode-val').value;

  if (city != "" && streetName != "" && streetNumber != "" && postalCode != "") {
    fetch(`/api/import-Emp-Ship/${city}/${streetName}/${streetNumber}/${postalCode}`, {
      method: 'PUT'
    })
      .then(res => res.json()
        .then(data => {
          if (city.match(/[a-z]/i) && !city.match(/[0-9]/i) && !streetNumber.match(/[a-z]/i) && streetNumber.match(/[0-9]/i) && streetName.match(/[a-z]/i) && !streetName.match(/[0-9]/i) && !postalCode.match(/[a-z]/i) && postalCode.match(/[0-9]/i)) {
            city = "";
            streetName = "";
            streetNumber = "";
            postalCode = ""
            console.log(data)
          } else {
            city = "";
            streetName = "";
            streetNumber = "";
            postalCode = ""
            alert("PLEASE ENTER APPROPRIATE VALUES!");
          }
        }))
  }
}

function getShipments() {
  var city = document.getElementById('find-shipment').value;
  if (city != "") {
    fetch(`/api/get-shipment/ship/${city}`)
      .then(res => res.json()
        .then(data => {
          if (city.match(/[a-z]/i) && !city.match(/[0-9]/i)) {
            const l = document.getElementById('shipment-data');
            l.innerHTML = "";
            city = "";
            data.forEach(e => {
              console.log(e);
              const item = document.createElement('li');
              item.appendChild(document.createTextNode("Order Number: " + e.orderNumber))
              l.appendChild(item);
            })
          } else {
            city = "";
            alert("PLEASE ENTER NUMBERS ONLY!");
          }
        }))
  }
}