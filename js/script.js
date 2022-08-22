const playerArray = [];
function display(playerAdd) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < playerArray.length; i++) {
    const name = playerArray[i].playerName;
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <tr>
    <th  class="text-light">${i + 1}</th>
    <td  class="text-light">${name}</td>
    </tr>
    `;
    tableBody.appendChild(tr);
  }
}
function addPlayer(playerNames) {
  const playerName = playerNames.parentNode.children[0].innerText;
  const playerObject = {
    playerName: playerName,
  };
  playerArray.push(playerObject);

  document.getElementById("total-selected").innerText = playerArray.length;
  display(playerArray);
}
