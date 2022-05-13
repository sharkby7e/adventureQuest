const res = require("express/lib/response");

let selectedClass;

function classLists() {
  fetch(`api/adventurer`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        $("#classAdv").append($("<option>").text(data));
      }
      return data;
    });
}
classLists()

$('#classAdv').on('change',()=>{
  selectedClass = $('#calssAdv option:selected').value();
})


async function createBubba(Class, Strength, Dexterity, Intelligence, Name){
  try{
  const bubba = await fetch('api/adventurer', {
    method: 'Post',
    body: json.stringify({Class, Strength, Dexterity, Intelligence, Name})
    })
  }
    catch(err){
        res.status(500).json(err)
    }
  }



//   function stats(maxPicks) {
//     maxPicks = maxPicks || 10; //default
  
//     //make sure all picks have a checked value
//     var checkedCount = 0;
//     var selected = getElementsByTagName('<input>')  
//     console.log(selected)
//     for(var i = 0; i < selected.length; i++) {
//       var rad = selected[i];
  
//       if (rad.checked) checkedCount++;
//     }
  
//     if (checkedCount < maxPicks) {
//       return confirm('You can still increase stats. Do you want to continue?');
//     } else if (checkedCount > maxPicks) {
//       alert('You only have ' + maxPicks + 'stat increase. Choose wisely');
//       return false;
//     }
//     return true;
//   }

  // var selected = getElementsById('selected')

  // selected.onclick(stats(maxPicks))


