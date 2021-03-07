//jshint esversion: 6

const allTests = [{
        "id": 1,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Mathematics Part 1",
        "Chapter": "Linear Equations in Two Variables",
        "Location": "/files/ques/english/M1_C1.json"
    },
    {
        "id": 2,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Mathematics Part 2",
        "Chapter": "Similarity",
        "Location": "/files/ques/english/M1_C1.json"
    },
    {
        "id": 3,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Science & Technology Part 1",
        "Chapter": "Gravitation",
        "Location": "/files/ques/english/S1_C1.json"
    },
    {
        "id": 4,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Science & Technology Part 2",
        "Chapter": "Heredity and Evolution",
        "Location": "/files/ques/english/S2_C1.json"
    },
    {
        "id": 5,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "History and Political Science",
        "Chapter": "Historiography : Development in the West",
        "Location": "/files/ques/english/H_C1.json"
    },
    {
        "id": 6,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Geography",
        "Chapter": "Field Visit",
        "Location": "/files/ques/english/G_C1.json"
    },
    {
        "id": 7,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Hindi",
        "Chapter": "Grammar - Sentence distinction(वाक्य भेद)",
        "Location": "/files/ques/english/LH_G1.json"
    },
    {
        "id": 8,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Marathi",
        "Chapter": "Grammar",
        "Location": "/files/ques/english/MH_G1.json"
    },
    {
        "id": 9,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "English",
        "Chapter": "Grammar - Tenses",
        "Location": "/files/ques/english/E_G1.json"
    }
];




getBooks = () => {
    let board = document.querySelector('#board').value;
    let medium = document.querySelector('#medium').value;
    let acadYear = document.querySelector('#acadYear').value;
    let subject = document.querySelector('#subject').value;
    let booksToShow = []

    for (let i = 0; i < allTests.length; i++) {
        //console.log(allTests[i].Board, board)
        //console.log(allTests[i].Class, Number(acadYear))
        //console.log(allTests[i].Medium, medium)
        if (allTests[i].Board === board && allTests[i].Class === Number(acadYear) && allTests[i].Medium === medium && allTests[i].Subject === subject) {
            booksToShow.push(allTests[i]);
        }
    }

    let content = '';

    booksToShow.forEach(p => {
        content += `
    <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" style="text-align: center">${p.Chapter}</h5>
        <p class="card-text" style="text-align: center">Subject: ${p.Subject}</p>
        <p class="card-text" style="text-align: center">Board: ${p.Board}<br>Class: ${p.Class}<br>Medium: ${p.Medium}</p>
        <div class="text-center">
        <button type="button" class="btn btn-primary" onclick="letsGiveTheTest(${p.id})">Give Test</button>
        </div>
      </div>
    </div>
  </div>
`
    });

    document.querySelector("#wantedBooks").innerHTML = content;

}

letsGiveTheTest = (questionsID) => {
    //console.log(questionsID);
    document.querySelector("#thisMustGo").innerHTML = '';
    let getThatInstance;
    for (let i = 0; i < allTests.length; i++) {
        if (allTests[i].id === Number(questionsID)) {
            getThatInstance = allTests[i];
            break;
        }
    }
    let thatLocation = getThatInstance.Location;


    /*var allQuestions = fetch(thatLocation)
    .then(response => {
        return response.json();
    });*/

    function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }



    fetch(thatLocation)
        .then(response => {
            return response.json();
        })
        .then((data)=>{
            let allQuestions = data;
            allQuestions = shuffle(allQuestions);
            let answerList = [];
            content = "";
            for (let i = 0; i < allQuestions.length; i++) {

                let allOptions = [];
                allOptions.push(allQuestions[i].choices.correct);
                allOptions.push(allQuestions[i].choices.wrong[0]);
                allOptions.push(allQuestions[i].choices.wrong[1]);
                allOptions.push(allQuestions[i].choices.wrong[2]);
              
                answerList.push(allQuestions[i].choices.correct);
              
                allOptions = shuffle(allOptions)
              
                content +=
                  `
                <div class="question">
                <h3>${allQuestions[i].question_string}</h3>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${i}" value="${allOptions[0]}">
                <label class="form-check-label" for="${i}">
                ${allOptions[0]}
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${i}" value="${allOptions[1]}">
                <label class="form-check-label" for="${i}">
                ${allOptions[1]}
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${i}" value="${allOptions[2]}">
                <label class="form-check-label" for="${i}">
                ${allOptions[2]}
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="${i}" value="${allOptions[3]}">
                <label class="form-check-label" for="${i}">
                ${allOptions[3]}
                </label>
                </div>
              </div>
                `
              }
              
              content += `<br><br><button type="button" class="btn btn-primary btn-lg" onclick="checkMyAnswers()">Submit</button><br><br>`
              
              document.querySelector("#testComesHere").innerHTML = content;
              
              checkMyAnswers = () => {
                let givenAnswers = [];
                for (let i = 0; i < allQuestions.length; i++) 
                {
                  let allTheDamnOptions = document.getElementsByName(i.toString());
                  let countMeSenpai = 0;
                  for (let j = 0; j < allTheDamnOptions.length; j++) {
                    if(allTheDamnOptions[j].checked === true)
                    {
                      givenAnswers.push(allTheDamnOptions[j].value);
                      break;
                    }
                    countMeSenpai += 1;
                  }
                  if(countMeSenpai === allTheDamnOptions.length)
                  {
                    givenAnswers.push(null);
                  }
                }
              
              
                correctAnswers = 0;
                for(let i = 0; i < answerList.length; i++) {
                  if(givenAnswers[i]==answerList[i]) {
                    correctAnswers += 1;
                  }
                }
              
                content = `
                <h2>Your Score: ${correctAnswers}/${answerList.length}</h2>
                `;
              
                document.querySelector("#testComesHere").innerHTML = content;
              }
        })

    


}