# adventureQuest

## Description

Have you ever found yourself unable to find an outlet for your imagnination?

Maybe you wish to delve deep into the imagination of another.

If so then this app is for you!

Adventure Quest is a single player high fantasy data driven user experience.

Whether you are an Adventurer seeking a Quest or a Questmaster seeking an Adventurer, this is an app within which you can loose yourself to fantasy!


## Link to Deployed Application

[Click to view the deployed application](https://warm-falls-71074.herokuapp.com/)

![Preview of tech today](./public/img/sitePreview.gif)

## Table of contents

- [Technologies Employed](#technologies-employed)
- [Key Functions](#key-functions)
- [Final Product](#final-product)
- [Video](#video)
- [License](#license)
- [Contact/Questions](#questions)
- [Summary](#summary-and-learning-points)

## Technologies Employed

| Techlogy             | Implementation/Use       |
| -------------------- | ------------------------ |
| Node.js              | JavaScript runtime       |
| Node Package Manager | Manage node packages     |
| dotenv               | Environment Variables    |
| Express.js           | Web framework            |
| sequelize            | ORM                      |
| bcrypt               | password encryption      |
| Heroku               | Deployment               |
| Handlebars           | Template and View engine |

## Key Functionality

### adventureQuest

A client side function, listening for a click event, that makes a request to the sever, which in turn queries the database.
It was particularly interesting because we used the URL to give the primary key for the "AdventureQuest" that was creted.

```javascript
adventureQuest.on("click", async () => {
  aid = await getAid();
  qid = await getQid();
  const res = await fetch(`api/adventurequest`, {
    method: "POST",
    body: JSON.stringify({ adventurerId: aid, questId: qid }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    res.json().then((data) => {
      const aq = data.pk.id;
      document.location.replace(`gameplay/${aq}`);
    });
  }
});
```

### game mechanics

This was the big brains of our UX. Once the Questmaster had chosen a quest and adventurer, they were shown gameplay, all of which
was calculated using these functions. This file was in charge of calculating a win or a loss, as well as displaying hits landed by the 
Adventurer, and the Monster.

```md
function gameMechanics(adventurer, quest) {
  var strWinPercentage =
    (adventurer.strength * adventurer.class.strMultiplier) / 50 + quest.difficulty + (0 - quest.monsterStr / 100);
  var dexWinPercentage =
    (adventurer.dexterity * adventurer.class.dexMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterDex / 100);
  var intWinPercentage =
    (adventurer.intelligence * adventurer.class.intMultiplier) / 100 +
    quest.difficulty +
    (0 - quest.monsterInt / 100);


  fightArray = [strWinPercentage, dexWinPercentage, intWinPercentage];
  adventurerHitPointsPersistant = adventurer.strength + adventurer.dexterity + adventurer.intelligence - 30;
  adventurerHitPoints = adventurer.strength + adventurer.dexterity + adventurer.intelligence - 30;
  adventurerPower = (((strWinPercentage + dexWinPercentage + intWinPercentage) / 3) / 1);
  monsterHitPoints = quest.monsterHitPoints;

  var tookDamageArr = [
    `Gahhhhh! Lucky blow... That won't happen again! - You've taken damage!`,
    `That one was free... I need to make to even the odds for a challenge! - You've taken damage!`,
    `You're not getting away with that! Come here!!! - You've taken damage!`,
    `You think that hurt?! Think again, I'm just getting started! - You've taken damage!`,
    `If I wanted a kiss I'd have called your mother! - You've taken damage!`
  ]
  var dealtDamageArr = [
    `Die you foul beast! You don't stand a chance! - You've landed a blow!`,
    `Not today! I will purify this land of your filth! - You've landed a blow!`,
    `Go on... Try again and witness the pain I wrought upon your flesh! - You've landed a blow!`,
    `I'm in need of some good practice!... and you're in need of a lesson! - You've landed a blow!`,
    `I shall bathe in your blood as I rain hellfire down upon your damned soul!!! - You've landed a blow!`
  ]


  damage = 0;
  injury = 0;
  let i = 0;

  while (monsterHitPoints > 0 && adventurerHitPoints > 0) {
    if (Math.random() < fightArray[i] + adventurerPower) {
      damage = Math.ceil(Math.floor((Math.random() * 3) + 1) + adventurerPower);
      damageString = damageString.concat(damage.toString() + '|');
      injuryString = injuryString.concat(' ' + '|');
      battleString = battleString.concat(dealtDamageArr[Math.floor((Math.random() * (dealtDamageArr.length - 1)) + 1)] + '|');
      monsterHitPoints = monsterHitPoints - damage;
      monsterHPStr = monsterHPStr.concat(monsterHitPoints.toString() + '|');
      adventurerHPStr = adventurerHPStr.concat(adventurerHitPoints.toString() + '|');
      if (i === fightArray.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    } else {
      injury = Math.ceil(Math.floor((Math.random() * 5) + 1) - adventurerPower);
      injuryString = injuryString.concat(injury.toString() + '|');
      damageString = damageString.concat(' ' + '|');
      battleString = battleString.concat(tookDamageArr[Math.floor((Math.random() * (tookDamageArr.length - 1)) + 1)] + '|');
      adventurerHitPoints = adventurerHitPoints - injury;
      adventurerHPStr = adventurerHPStr.concat(adventurerHitPoints.toString() + '|');
      monsterHPStr = monsterHPStr.concat(monsterHitPoints.toString() + '|');
      if (i === fightArray.length - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
    }
  }

  if (monsterHitPoints < 1) {
    win = true;
  } else {
    win = false;
  }
```


### router.get("/questBoard")

This was a key route in our program because it gets all data for the current users adventurers, as well as all quests
made by any QuestMaster registered on AdventureQuest. It then sends all of the information to the Handlebars template.

```javascript
router.get("/questBoard", auth, async (req, res) => {
  try {
    const questData = await Quest.findAll({
      order: [["created_at", "DESC"]],
    });

    const adventurerData = await Adventurer.findAll({
      include: [{ model: Class }],
      order: [["created_at", "DESC"]],
      where: { questMasterId: req.session.questMasterId },
    });

    //serializedata
    const quests = questData.map((quest) => quest.get({ plain: true }));
    const adventurers = adventurerData.map((adventure) =>
      adventure.get({ plain: true })
    );

    res.render("questBoard", {
      quests,
      adventurers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("Error fetching data");
  }
});
```

## Final Product

<img title="image" alt="Style Showcase Page Screenshot" src="./public/img/landing-page.jpg">
<img title="image" alt="Style Showcase Page Screenshot" src="./public/img/AdventureQuest.gif">



## License

This software is licensed under the MIT [LICENSE](./LICENSE)

MIT License

Copyright (c) 2022 Brennan LeClair, Sid Quinsaat, Krystopher Quintero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



## Questions?

Please visit our gitHubs

[Sid (sharkby7e)](https://www.github.com/sharkby7e)

[Krystopher (KrystopherQ)](https://github.com/KrystopherQ)

[Brennan (blec333)](https://github.com/Blec333)


## Summary and Learning Points

### Sid
This was an extremely fun application to build. Not only because of my team, but because we got to be creative. We had to find
solutions to "problems" that we "created" ourselves, and I really enjoyed the process. I enjoyed working in a group, and definitely
learned a lot about how I personally deal with teamwork.


### Acknowledgements

©Brennan LeClair
©Sid Quinsaat
©Krystopher Quintero
