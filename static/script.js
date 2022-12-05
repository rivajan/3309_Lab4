document.getElementById('get-cost').addEventListener('click', getTotalCost);

function getTotalCost() {
  const totalCost = document.getElementById('find-cost').value;
  if (totalCost.value != "") {
    fetch(`/api/get-total-cost/${totalCost}`)
      .then(res => res.json()
        .then(data => {
          if (!totalCost.match(/[a-z]/i) && totalCost.match(/[0-9]/i)) {
            const l = document.getElementById('cost-data');
            l.innerHTML = "";
            totalCost.value = "";
            const item = document.createElement('li');
            console.log(data[0]["Total Cost"])
            item.appendChild(document.createTextNode(data[0]["Total Cost"]))
            l.appendChild(item);

          } else {
            totalCost.value = "";
            alert("PLEASE ENTER NUMBERS ONLY!");
          }
        }))
  }
}