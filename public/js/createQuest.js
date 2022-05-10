var urlDND='https://www.dnd5eapi.co/api/monsters'
var monsterData=[]

function monsterMash() {
  fetch(urlDND)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
        var listSelect = $('#monster')
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

// $('#create').on('click', (res,req)=> {
//   if(){

//   } else {
      
//   }
// })


