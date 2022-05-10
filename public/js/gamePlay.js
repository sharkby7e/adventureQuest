
  var activeAdventurerId = 1;

  async function attackProbability(activeAdventurerId) {
    adventurerData = await fetch(`/api/adventurer/${activeAdventurerId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      return data;
    });
  
  
  
    strPercentage = (adventurerData.strength * adventurerData.class.strMultiplier) / 100;
    dexPercentage = (adventurerData.dexterity * adventurerData.class.dexMultiplier) / 100;
    intPercentage = (adventurerData.intelligence * adventurerData.class.intMultiplier) / 100;
  
  
  
  
  }
  
  
  
  init();