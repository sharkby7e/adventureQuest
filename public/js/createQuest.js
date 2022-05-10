var urlDND='https://www.dnd5eapi.co/api/monsters'
var list = $('#monster')
var monsterData=[]

function monsterMash() {
  fetch(urlDND)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          for (var i = 0; i < data.results.length; i++) {
              var listEl = $('<option>')
              listEl.text(data.results[i].name)
              list.append(listEl)
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


