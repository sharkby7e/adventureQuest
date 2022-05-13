console.log("script is linked");

let selectedClass;
const bubba = $("#bubba");
const stats = $("#stats");

// User selects Class
$("#classAdv").on("change", async () => {
  selectedClass = $("#classAdv option:selected").text();
  console.log(selectedClass);
});

// async function createBubba(Class, Strength, Dexterity, Intelligence, Name) {
//   try {
//     const bubba = await fetch("api/adventurer", {
//       method: "Post",
//       body: json.stringify({ Class, Strength, Dexterity, Intelligence, Name }),
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

bubba.on("click", (e) => {
  e.preventDefault();
  console.log("click");
  const name = document.getElementById(`newAdvName`).value.trim(); // const text = document.querySelector('input[id="newAdvName"]').value.trim();
  console.log(name);
  createBubba(name, selectedClass);
});

stats.on("click", (e) => {
  e.preventDefault;
  console.log("click");
  const strengths = $("#strength").children();
  console.log(strengths);
});

function picker(maxPicks) {
  var checkedCount = 0;
  var selected = getElementsByTagName("<input>");
  console.log(selected);
  for (var i = 0; i < selected.length; i++) {
    var rad = selected[i];

    if (rad.checked) {
    }
    checkedCount++;
  }
}

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
