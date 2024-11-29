let inputNom = document.querySelector(".input-nom");
let inputPhoto = document.querySelector(".input-photo");
let inputNationality = document.querySelector(".input-nationality");
let inputClub = document.querySelector(".input-club");
let inputFlagNationalite = document.querySelector(".input-logo-nationalite");
let inputLogoClub = document.querySelector(".input-logo-club");
let inputRating = document.querySelector(".input-rating");

let inputShooting = document.querySelector(".input-shooting");
let title = document.getElementsByClassName("daka");
let changement= document.querySelector(".changement");
// changement.innerHTML="";

console.log(title);



let inputDribbling = document.querySelector(".input-dribbling");
let inputDefending = document.querySelector(".input-defending");
let inputPhysical = document.querySelector(".input-physical");
let inputDiving = document.querySelector(".input-diving");
let inputHandling = document.querySelector(".input-handling");
let inputKicking = document.querySelector(".input-kicking");
let inputReflexes = document.querySelector(".input-reflexes");
let inputSpeed = document.querySelector(".input-vitesse");
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
  selectDataFromInputs();
  ajouterPlayers();
});





function createPlayerCard(player) {
  return `
    <div class="daka">
      <div class="card rounded-l shadow-l p-4 max-w-[170px] text-white">
        <div class="mt-2 rounded-l p-2 flex items-start justify-around">
          <div class="text-sm font-bold">${player.position}</div>
          <img src="${player.image}" alt="${player.name}" class="rounded-full w-16 h-16" />
          <div class="text-lg font-bold">${player.rating}</div>
        </div>
        <div class="text-center text-sm font-bold mb-2">${player.name}</div>
        <div class="flex justify-between items-center mb-4">
          <div class="text-xs">${player.special}</div>
          <div class="flex space-x-2">
            <img src="${player.nationFlag}" alt="${player.nation}" class="w-5 h-3" />
            <img src="${player.clubLogo}" alt="${player.club}" class="w-5 h-5" />
          </div>
        </div>
        <div class="grid grid-cols-6 gap-1 text-center">
          ${Object.entries(player.stats)
            .map(
              ([stat, value]) => `
            <div>
              <div class="text-xs">${stat.toUpperCase()}</div>
              <div class="text-sm font-bold">${value}</div>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="flex justify-around items-center mt-4">
          <div class="text-xs">${player.rank}</div>
          <div class="text-xs">${player.weakFoot}</div>
          <div class="text-xs">${player.skillStars}</div>
        </div>
      </div>
    </div>
  `;
}


const players = [
  {
    position: "GK",
    image: "./images/courtois.jpg",
    name: "Thibaut Courtois",
    rating: 90,
    special: "Goalkeeper ++",
    nationFlag: "./images/belgium.jpg",
    nation: "Belgium",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 50,
      sho: 45,
      pas: 65,
      dri: 60,
      def: 45,
      phy: 80
    },
    rank: "R1",
    weakFoot: "2 W.F",
    skillStars: "1*"
  },
  {
    position: "RB",
    image: "./images/carvajal.jpg",
    name: "Dani Carvajal",
    rating: 85,
    special: "Defender ++",
    nationFlag: "./images/spain.jpg",
    nation: "Spain",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 80,
      sho: 60,
      pas: 78,
      dri: 75,
      def: 84,
      phy: 82
    },
    rank: "R2",
    weakFoot: "3 W.F",
    skillStars: "3*"
  },
  {
    position: "CB",
    image: "./images/rudiger.jpg",
    name: "Antonio Rüdiger",
    rating: 86,
    special: "Defender ++",
    nationFlag: "./images/germany.jpg",
    nation: "Germany",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 78,
      sho: 45,
      pas: 70,
      dri: 70,
      def: 89,
      phy: 88
    },
    rank: "R3",
    weakFoot: "2 W.F",
    skillStars: "2*"
  },
  {
    position: "CB",
    image: "./images/alaba.jpg",
    name: "David Alaba",
    rating: 86,
    special: "Defender ++",
    nationFlag: "./images/austria.jpg",
    nation: "Austria",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 78,
      sho: 65,
      pas: 80,
      dri: 78,
      def: 85,
      phy: 83
    },
    rank: "R4",
    weakFoot: "4 W.F",
    skillStars: "3*"
  },
  {
    position: "LB",
    image: "./images/ferland.jpg",
    name: "Ferland Mendy",
    rating: 83,
    special: "Defender ++",
    nationFlag: "./images/france.jpg",
    nation: "France",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 88,
      sho: 58,
      pas: 75,
      dri: 81,
      def: 82,
      phy: 85
    },
    rank: "R5",
    weakFoot: "5 W.F",
    skillStars: "4*"
  },
  {
    position: "CDM",
    image: "./images/vini.jpg",
    name: "Vinicius",
    rating: 87,
    special: "CDM ++",
    nationFlag: "./images/brazil.jpg",
    nation: "Brazil",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 77,
      sho: 78,
      pas: 82,
      dri: 86,
      def: 85,
      phy: 89
    },
    rank: "R6",
    weakFoot: "4 W.F",
    skillStars: "3*"
  },
  {
    position: "CM",
    image: "./images/modric.jpg",
    name: "Luka Modrić",
    rating: 89,
    special: "Playmaker ++",
    nationFlag: "./images/croatia.jpg",
    nation: "Croatia",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 75,
      sho: 80,
      pas: 90,
      dri: 89,
      def: 76,
      phy: 70
    },
    rank: "R7",
    weakFoot: "4 W.F",
    skillStars: "4*"
  },
  {
    position: "CM",
    image: "./images/kroos.jpg",
    name: "Toni Kroos",
    rating: 88,
    special: "Playmaker ++",
    nationFlag: "./images/germany.jpg",
    nation: "Germany",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 65,
      sho: 82,
      pas: 91,
      dri: 81,
      def: 72,
      phy: 70
    },
    rank: "R8",
    weakFoot: "5 W.F",
    skillStars: "3*"
  },
  {
    position: "RW",
    image: "./images/rodrygo.jpg",
    name: "Rodrygo",
    rating: 84,
    special: "Dribbler ++",
    nationFlag: "./images/brazil.jpg",
    nation: "Brazil",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 90,
      sho: 80,
      pas: 77,
      dri: 88,
      def: 45,
      phy: 70
    },
    rank: "R9",
    weakFoot: "4 W.F",
    skillStars: "4*"
  },
  {
    position: "ST",
    image: "./images/joselu.jpg",
    name: "Joselu",
    rating: 80,
    special: "Target Man ++",
    nationFlag: "./images/spain.jpg",
    nation: "Spain",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 70,
      sho: 85,
      pas: 65,
      dri: 75,
      def: 50,
      phy: 82
    },
    rank: "R10",
    weakFoot: "3 W.F",
    skillStars: "3*"
  },
  {
    position: "LW",
    image: "./images/vini.jpg",
    name: "Vinícius Júnior",
    rating: 90,
    special: "Dribbler ++",
    nationFlag: "./images/brazil.jpg",
    nation: "Brazil",
    clubLogo: "./images/real.png",
    club: "Real Madrid",
    stats: {
      pac: 95,
      sho: 79,
      pas: 80,
      dri: 92,
      def: 35,
      phy: 70
    },
    rank: "R11",
    weakFoot: "4 W.F",
    skillStars: "5*"
  }
];




// players.forEach(player => {
//   changement.innerHTML += createPlayerCard(player);
// });









function selectDataFromInputs() {
  // let PhotosUrl = inputPhoto.files[0];
  // let photoPlayer = URL.createObjectURL(PhotosUrl);

  // let flagUrl = inputFlagNationalite.files[0] ?? "";

  // let flagNationalite = URL.createObjectURL(flagUrl);
  // let logoUrl = inputLogoClub;
  // let logoClub = URL.createObjectURL(logoUrl);
  
  let myObject = {};
  console.log(inputNom.value)
  console.log(selectPosition.value.toUpperCase())
  if (selectPosition.value.toUpperCase() === "GK") {
    myObject = {
      nom: inputNom.value,
      photo: "",
      nationality: inputNationality.value,
      club: inputClub.value,
      flagNationalite: "",
      logoClub: "",
      position: selectPosition.value,
      rating: inputRating.value,

      // diving: inputDiving.value,
      // handling: inputHandling.value,
      // kicking: inputKicking.value,
      reflexes: inputReflexes.value,
      speed: inputSpeed.value,
      positioning: selectPosition.value,
    };
    dataPlayer.push(myObject);
    console.log(dataPlayer[0]);
  } else if (
    selectPosition.value.toUpperCase() === "CM" ||
    selectPosition.value.toUpperCase() === "CB" ||
    selectPosition.value.toUpperCase() === "LB" ||
    selectPosition.value.toUpperCase() === "RB" ||
    selectPosition.value.toUpperCase() === "RB" ||
    selectPosition.value.toUpperCase() === "CDM" ||
    selectPosition.value.toUpperCase() === "LW" ||
    selectPosition.value.toUpperCase() === "ST" ||
    selectPosition.value.toUpperCase() === "RW"||
  ) {
    myObject = {
      nom: inputNom.value,
      photo: "photoPlayer",
      nationality: inputNationality.value,
      club: inputClub.value,
      flagNationalite: "flagNationalite",
      logoClub: "logoClub",
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
    console.log(dataPlayer[0]);
  }
}
function ajouterPlayers() {
  console.log("ajouterPlayers");
  console.log(selectPosition.value.toUpperCase())
  console.log(dataPlayer)
  switch (selectPosition.value.toUpperCase()) {
    case "GK":
      player1.innerHTML=""
      if (player1.innerHTML.trim() === "") {
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "gk") {
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
        let lastLBIndex = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LB") {
            lastLBIndex = i;
          }
        }
        if (lastLBIndex !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[lastLBIndex]);
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
        let indexCMD = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "LW") {
            indexCMD = i;
          }
        }
        if (indexCMD !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCMD]);
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
        let indexCMD = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "ST") {
            indexCMD = i;
          }
        }
        if (indexCMD !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCMD]);
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
        let indexCMD = -1;
        for (let i = 0; i < dataPlayer.length; i++) {
          if (dataPlayer[i].position === "RW") {
            indexCMD = i;
          }
        }
        if (indexCMD !== -1) {
          divChangement.innerHTML += divPlayerCard(dataPlayer[indexCMD]);
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