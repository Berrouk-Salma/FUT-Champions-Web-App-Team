let inputNom = document.querySelector(".input-nom");
let inputPhoto = document.querySelector(".input-photo");
let inputNationality = llllllll.querySelector(".input-nationality");
let inputClub = document.querySelector(".input-club");
let inputFlagNationalite = document.querySelector(".input-flag-nationalite");
let inputLogoClub = document.querySelector(".input-logo-club");
let inputRating = document.querySelector(".input-rating");

let inputShooting = document.querySelector(".input-shooting");

let inputDribbling = document.querySelector(".input-dribbling");
let inputDefending = document.querySelector(".input-defending");
let inputPhysical = document.querySelector(".input-physical");
let inputDiving = document.querySelector(".input-diving");
let inputHandling = document.querySelector(".input-handling");
let inputKicking = document.querySelector(".input-kicking");
let inputReflexes = document.querySelector(".input-reflexes");
let inputSpeed = document.querySelector(".input-speed");
let inputPositioning = document.querySelector(".input-positioning");
let inputPace = document.querySelector(".input-pace");
let inputPassing = document.querySelector(".input-passing");
let btnEnter = document.querySelector(".btn-enter");
let selectPosition = document.querySelector(".select-position");
let inputsDivplayerGk = document.querySelector(".player-gk");
let inputsDivplayerCm = document.querySelector(".player-cm");
let divChangement = document.querySelector(".changement");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let player3 = document.querySelector(".player3");
let player4 = document.querySelector(".player4");
let player5 = document.querySelector(".player5");
let player6 = document.querySelector(".player6");
let player7 = document.querySelector(".player7");
let player8 = document.querySelector(".player8");
let player9 = document.querySelector(".player9");
let player10 = document.querySelector(".player10");
let player11 = document.querySelector(".player11");
let errorPlayerName = document.querySelector(".input-nom");
let errorPlayerPhoto = document.querySelector(".input-photo");
let errorPlayerClub = document.querySelector(".input-club");
let errorPlayerNationality = document.querySelector(".input-flag-nationalite");
let errorClubLogo = document.querySelector(".input-logo-club");
let errorPosition = document.querySelector(".select-position");
let errorRating = document.querySelector(".input-rating");
let errorDiving = document.querySelector(".input-diving");
let errorHandling = document.querySelector(".input-handling");
let errorKicking = document.querySelector(".input-kicking");
let errorReflexes = document.querySelector(".input-reflexes");
let errorSpeed = document.querySelector(".input-speed");
let errorPositioning = document.querySelector(".input-positioning");
let errorShooting = document.querySelector(".input-shooting");
let errorPace = document.querySelector(".input-pace");
let errorDribbling = document.querySelector(".input-dribbling");
let errorDefending = document.querySelector(".input-defending");
let errorPhysical = document.querySelector(".input-physical");
let errorPassing = document.querySelector(".input-passing");
let dataPlayer = [];

selectPosition.addEventListener("change", () => {
  if (selectPosition.value === "GK") {
    inputsDivplayerGk.style.display = "block";
    inputsDivplayerCm.style.display = "none";
  } else {
    inputsDivplayerGk.style.display = "none";
    inputsDivplayerCm.style.display = "block";
  }
});

btnEnter.addEventListener("click", () => {
  inputImpty();
  selectDataFromInputs();
  ajouterPlayers();
  cleanInputs();
  cleanInputs();
});

function cleanInputs() {
  inputNom.value = "";

  inputNationality.value = "";
  inputClub.value = "";

  selectPosition.value = "";
  inputRating.value = "";

  inputHandling.value = "";

  inputKicking.value = "";

  inputReflexes.value = "";

  inputSpeed.value = "";

  inputPositioning.value = "";

  inputShooting.value = "";
  inputPace.value = "";

  inputDribbling.value = "";

  inputDefending.value = "";

  inputPhysical.value = "";

  inputPassing.value = "";
}
function cleanInputs() {
  inputHandling.value === "";

  inputKicking.value === "";

  inputReflexes.value === "";

  inputSpeed.value === "";

  inputPositioning.value === "";

  inputShooting.value === "";

  inputPace.value === "";

  inputDribbling.value === "";

  inputDefending.value === "";

  inputPhysical.value === "";

  inputPassing.value === "";
}
function inputImpty() {
  if (selectPosition.value === "GK") {
    if (inputDiving.value === "") {
      errorDiving.innerHTML = "Diving skill is required";
    } else {
      errorDiving.innerHTML = "";
    }
    if (inputHandling.value === "") {
      errorHandling.innerHTML = "Handling skill is required";
    } else {
      errorHandling.innerHTML = "";
    }
    if (inputKicking.value === "") {
      errorKicking.innerHTML = "Kicking skill is required";
    } else {
      errorKicking.innerHTML = "";
    }
    if (inputReflexes.value === "") {
      errorReflexes.innerHTML = "Reflexes skill is required";
    } else {
      errorReflexes.innerHTML = "";
    }
    if (inputSpeed.value === "") {
      errorSpeed.innerHTML = "Speed skill is required";
    } else {
      errorSpeed.innerHTML = "";
    }
    if (inputPositioning.value === "") {
      errorPositioning.innerHTML = "Positioning skill is required";
    } else {
      errorPositioning.innerHTML = "";
    }

    if (inputShooting.value === "") {
      errorShooting.innerHTML = "Shooting skill is required";
    } else {
      errorShooting.innerHTML = "";
    }
    if (inputPace.value === "") {
      errorPace.innerHTML = "Pace skill is required";
    } else {
      errorPace.innerHTML = "";
    }
    if (inputDribbling.value === "") {
      errorDribbling.innerHTML = "Dribbling skill is required";
    } else {
      errorDribbling.innerHTML = "";
    }
    if (inputDefending.value === "") {
      errorDefending.innerHTML = "Defending skill is required";
    } else {
      errorDefending.innerHTML = "";
    }
    if (inputPhysical.value === "") {
      errorPhysical.innerHTML = "Physical skill is required";
    } else {
      errorPhysical.innerHTML = "";
    }
    if (inputPassing.value === "") {
      errorPassing.innerHTML = "Passing skill is required";
    } else {
      errorPassing.innerHTML = "";
    }
  }
}

function selectDataFromInputs() {
  let PhotosUrl = inputPhoto.files[0];
  let photoPlayer = URL.createObjectURL(PhotosUrl);

  let flagUrl = inputFlagNationalite.files[0];

  let flagNationalite = URL.createObjectURL(flagUrl);
  let logoUrl = inputLogoClub.files[0];
  let logoClub = URL.createObjectURL(logoUrl);
  let myObject = {};
  if (selectPosition.value === "GK") {
    if (
      inputNom.value != "" &&
      inputNationality.value !== "" &&
      inputClub.value != "" &&
      selectPosition.value !== "" &&
      inputRating.value != "" &&
      inputHandling.value != "" &&
      inputKicking.value != "" &&
      inputReflexes.value != "" &&
      inputSpeed.value != "" &&
      inputPositioning.value != ""
    ) {
      myObject = {
        nom: inputNom.value,
        photo: photoPlayer,
        nationality: inputNationality.value,
        club: inputClub.value,
        flagNationalite: flagNationalite,
        logoClub: logoClub,
        position: selectPosition.value,
        rating: inputRating.value,

        diving: inputDiving.value,
        handling: inputHandling.value,
        kicking: inputKicking.value,
        reflexes: inputReflexes.value,
        speed: inputSpeed.value,
        positioning: inputPositioning.value,
      };
      dataPlayer.push(myObject);
    } else {
    }
  } else if (
    selectPosition.value === "CM" ||
    selectPosition.value === "CB" ||
    selectPosition.value === "LB" ||
    selectPosition.value === "RB" ||
    selectPosition.value === "RB" ||
    selectPosition.value === "CDM" ||
    selectPosition.value === "LW" ||
    selectPosition.value === "ST" ||
    selectPosition.value === "RW"
  ) {
    if (
      inputNom.value !== "" &&
      inputNationality.value !== "" &&
      inputClub.value !== "" &&
      selectPosition.value !== "" &&
      inputRating.value !== "" &&
      inputShooting.value !== "" &&
      inputPace.value !== "" &&
      inputDribbling.value !== "" &&
      inputDefending.value !== "" &&
      inputPhysical.value !== "" &&
      inputPassing.value !== ""
    ) {
      myObject = {
        nom: inputNom.value,
        photo: photoPlayer,
        nationality: inputNationality.value,
        club: inputClub.value,
        flagNationalite: flagNationalite,
        logoClub: logoClub,
        position: selectPosition.value,
        rating: inputRating.value,

        shooting: inputShooting.value,
        pace: inputPace.value,
        dribbling: inputDribbling.value,
        defending: inputDefending.value,
        physical: inputPhysical.value,
        passing: inputPassing.value,
      };
      dataPlayer.push(myObject);
    }
  }
}
function ajouterPlayers() {
  switch (selectPosition.value) {
    case "GK":
      if (player1.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "GK") {
            player1.innerHTML = `
            <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
              <div class="mt-2 rounded-l p-2 flex items-start justify-around">
                <div class="text-sm font-bold">GK</div>
                <img src="${dataPlayer[i].photo}" class="rounded-full w-16 h-16" />
                <div class="text-lg font-bold">${dataPlayer[i].rating}</div>
              </div>
              <div class="text-center text-sm font-bold mb-2">
                ${dataPlayer[i].nom}
              </div>
              <div class="flex justify-between items-center mb-4">
                <div class="text-xs">CDM ++</div>
                <div class="flex space-x-2">
                  <img src="${dataPlayer[i].flagNationalite}" class="w-5 h-3" />
                  <img src="${dataPlayer[i].logoClub}" class="w-5 h-5" />
                </div>
              </div>
              <div class="grid grid-cols-6 gap-1 text-center">
                <div>
                  <div class="text-xs">DIV</div>
                  <div class="text-sm font-bold">${dataPlayer[i].diving}</div>
                </div>
                <div>
                  <div class="text-xs">HAN</div>
                  <div class="text-sm font-bold">${dataPlayer[i].handling}</div>
                </div>
                <div>
                  <div class="text-xs">KIC</div>
                  <div class="text-sm font-bold">${dataPlayer[i].kicking}</div>
                </div>
                <div>
                  <div class="text-xs">SPD</div>
                  <div class="text-sm font-bold">${dataPlayer[i].speed}</div>
                </div>
                <div>
                  <div class="text-xs">POS</div>
                  <div class="text-sm font-bold">${dataPlayer[i].positioning}</div>
                </div>
              </div>
              <div class="flex justify-around items-center mt-4">
                <div class="text-xs">R!</div>
                <div class="text-xs">4 W.F</div>
                <div class="text-xs">3*</div>
              </div>
            </div>
            `;
            break;
          }
        }
      } else if (player1.innerHTML.trim() !== "") {
        let lastIndexGK = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "GK") {
            lastIndexGK = i;
          }
        }

        if (lastIndexGK !== -1) {
          divChangement.innerHTML += `
            <div class="">
              <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
                <div class="mt-2 rounded-l p-2 flex items-start justify-around">
                  <div class="text-sm font-bold">GK</div>
                  <img src="${dataPlayer[lastIndexGK].photo}" class="rounded-full w-16 h-16" />
                  <div class="text-lg font-bold">${dataPlayer[lastIndexGK].rating}</div>
                </div>
                <div class="text-center text-sm font-bold mb-2">
                  ${dataPlayer[lastIndexGK].nom}
                </div>
                <div class="flex justify-between items-center mb-4">
                  <div class="text-xs">CDM ++</div>
                  <div class="flex space-x-2">
                    <img src="${dataPlayer[lastIndexGK].flagNationalite}" class="w-5 h-3" />
                    <img src="${dataPlayer[lastIndexGK].logoClub}" class="w-5 h-5" />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-1 text-center">
                  <div>
                    <div class="text-xs">DIV</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].diving}</div>
                  </div>
                  <div>
                    <div class="text-xs">HAN</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].handling}</div>
                  </div>
                  <div>
                    <div class="text-xs">KIC</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].kicking}</div>
                  </div>
                  <div>
                    <div class="text-xs">SPD</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].speed}</div>
                  </div>
                  <div>
                    <div class="text-xs">POS</div>
                    <div class="text-sm font-bold">${dataPlayer[lastIndexGK].positioning}</div>
                  </div>
                </div>
                <div class="flex justify-around items-center mt-4">
                  <div class="text-xs">R!</div>
                  <div class="text-xs">4 W.F</div>
                  <div class="text-xs">3*</div>
                </div>
              </div>
            </div>
          `;
        }
      }
      break;

    case "LB":
      if (player2.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LB") {
            player2.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player2.innerHTML.trim() !== "") {
        let indexLB = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LB") {
            indexLB = i;
          }
        }
        if (indexLB !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexLB]);
        }
      }
      break;

    case "CB":
      if (player3.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CB") {
            player3.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player4.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CB") {
            player4.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player3.innerHTML.trim() !== "") {
        let indexCB = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CB") {
            indexCB = i;
          }
        }
        if (indexCB !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCB]);
        }
      }
      break;

    case "RB":
      if (player5.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RB") {
            player5.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player5.innerHTML.trim() !== "") {
        let indexRB = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RB") {
            indexRB = i;
          }
        }
        if (indexRB !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexRB]);
        }
      }
      break;
    case "CM":
      if (player6.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CM") {
            player6.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else if (player8.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CM") {
            player8.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexCM = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CM") {
            indexCM = i;
          }
        }
        if (indexCM !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCM]);
        }
      }
      break;
    case "CDM":
      if (player7.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CDM") {
            player7.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexCMD = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "CDM") {
            indexCMD = i;
          }
        }
        if (indexCMD !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCMD]);
        }
      }
      break;
    case "LW":
      if (player9.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LW") {
            player9.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexLW = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LW") {
            indexLW = i;
          }
        }
        if (indexLW !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexLW]);
        }
      }
      break;
    case "ST":
      if (player10.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "ST") {
            player10.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexST = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "ST") {
            indexST = i;
          }
        }
        if (indexST !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexST]);
        }
      }
      break;
    case "RW":
      if (player11.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RW") {
            player11.innerHTML = divPlayerCard(dataPlayer[i]);
            break;
          }
        }
      } else {
        let indexRW = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RW") {
            indexRW = i;
          }
        }
        if (indexRW !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexRW]);
        }
      }
      break;
  }

  function divPlayerCard(player) {
    return `
        <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
    <div class="mt-2 rounded-l p-2 flex items-start justify-around">
          <div class="text-sm font-bold">${player.position}</div>
          <img src="${player.photo}" class="rounded-full w-16 h-16" />
          <div class="text-lg font-bold">${player.rating}</div>
        </div>
        <div class="text-center text-sm font-bold mb-2">
          ${player.nom}
        </div>
        <div class="flex justify-between items-center mb-4">
          <div class="text-xs">CDM ++</div>
          <div class="flex space-x-2">
            <img src="${player.flagNationalite}" class="w-5 h-3" />
            <img src="${player.logoClub}" class="w-5 h-5" />
          </div>
        </div>
        <div class="grid grid-cols-6 gap-1 text-center">
        
        
          <div>
            <div class="text-xs">SHO</div>
            <div class="text-sm font-bold">${player.shooting}</div>
          </div>
          <div>
            <div class="text-xs">PAC</div>
            <div class="text-sm font-bold">${player.pace}</div>
          </div>
          <div>
            <div class="text-xs">DRI</div>
            <div class="text-sm font-bold">${player.dribbling}</div>
          </div>
          <div>
            <div class="text-xs">DEF</div>
            <div class="text-sm font-bold">${player.defending}</div>
          </div>
          <div>
            <div class="text-xs">PHY</div>
            <div class="text-sm font-bold">${player.physical}</div>
          </div>
          <div>
            <div class="text-xs">PAS</div>
            <div class="text-sm font-bold">${player.passing}</div>
          </div>
        </div>
        <div class="flex justify-around items-center mt-4">
          <div class="text-xs">R!</div>
          <div class="text-xs">4 W.F</div>
          <div class="text-xs">3*</div>
        </div>
      </div>
    `;
  }
}