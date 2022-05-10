var urlDND='https://www.dnd5eapi.co/api/monsters'
var monsterData=[]
var questList = $('#questList')
var listSelect = $('#monster')

function monsterMash() {
  fetch(urlDND)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          for (var i = 0; i < data.results.length; i++) {
              var listEl = $('<option>');
              listEl.text(data.results[i].name);
              console.log(listEl)
              listSelect.append(listEl)
          }
          monsterData = data
      })
}
monsterMash()

var monsterSelected = listSelect.val()

var adventureQuest = [
    `Defeat the ${monsterSelected} that has been ravaging the city`,
    `Beat this ${monsterSelected} for looking at me funny.`,
    `This ${monsterSelected} had been a menace to society and needs to be eliminated before he destroys everything`,
    `This is your only chance to defeat this ${monsterSelected} before he snaps his fingers and makes half of us disappear`,
    `Defeat this ${monsterSelected} for kicking my dog. They will feel the wrath of mine pain`,
    `${monsterSelected} is getting away with my lucky charms hurry and stop the ${monsterSelected} before they finish them`
]

function questLines(adventureQuest){
    for(var i =0; i<adventureQuest.length; i++){
        var form = $(" <div class= 'form-check" + i +">");
        var formInput = $('<input class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">');
        var formLable = $('<label class="form-check-label inline-block text-warning" for="flexCheckDefault">');
    }
    formLable.text(adventureQuest[i]);
    form.append(formInput);
    formInput.append(formLable);
}

// $('#create').on('click', (res,req)=> {
//   if(){

//   } else {
      
//   }
// })


