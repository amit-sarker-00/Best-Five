const playerArray = [];
function display(playerAdd) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < playerArray.length; i++) {
    const name = playerArray[i].playerName;
    // if (playerArray.length > 5) {
    //   alert("you can not add more than five");
    //   // continue;
    // }
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

// playerCost
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById("playerCost").addEventListener("click", function () {
  const perPlayerCost = getInputFieldValueById("totalPlayer");
  const totalSelectedPlayer = playerArray.length;
  const totalSelectedPlayerCost = perPlayerCost * totalSelectedPlayer;
  setTextElementValueById("totalPlayerCost", totalSelectedPlayerCost);
});

//total team cost

document.getElementById("teamCost").addEventListener("click", function () {
  const managerCost = getInputFieldValueById("managerCost");
  const coachCost = getInputFieldValueById("coachCost");
  const previousPlayerCost = getTextElementValueById("totalPlayerCost");
  console.log(previousPlayerCost);
  const totalTeamCost = previousPlayerCost + managerCost + coachCost;
  setTextElementValueById("totalTeamCost", totalTeamCost);
});
