var urlDND='https://www.dnd5eapi.co/api/monsters'
var listSelect = document.getElementById('#monster')
var monsterData=[]

function monsterMash() {
  fetch(urlDND)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          for (var i = 0; i < data.results.length; i++) {
              var listEl = $('<option>');
              listEl.text(data.results[i].name);
              listSelect.append(listEl)
              console.log()
          }
          monsterData = data
      })
}
monsterMash()

// $('#create').on('click', (res,req)=> {
//   if(){

//   } else {
      
//   }
// })


