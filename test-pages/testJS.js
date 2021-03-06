allQuestions = [{
    "question_string": "I __________ working all afternoon and have just finished the assignment.",
    "choices": {
      "correct": "had been",
      "wrong": ["have been", "am", "shall be"]
    }
  },
  {
    "question_string": "Rohan __________ the movie before he read the review.",
    "choices": {
      "correct": "had watched",
      "wrong": ["have watched", "watches", "was watching"]
    }
  },
  {
    "question_string": "He __________ in the States but he still does not have a command over the English language.",
    "choices": {
      "correct": "has been living",
      "wrong": ["have lived", "have been living", "lived"]
    }
  },
  {
    "question_string": "By the next month, we shall __________ the project.",
    "choices": {
      "correct": "have completed",
      "wrong": ["completed", "has completed", "completing"]
    }
  },
  {
    "question_string": "Every boy and girl  __________ in the class today.",
    "choices": {
      "correct": "is present",
      "wrong": ["are present", "have present", "had present"]
    }
  },
  {
    "question_string": "He __________ daily for a year now.",
    "choices": {
      "correct": "has been exercising",
      "wrong": ["was exercising", "exercises", "have been exercising"]
    }
  },
  {
    "question_string": "I __________ this book since morning.",
    "choices": {
      "correct": "had been reading",
      "wrong": ["has been reading", "have had read", "shall be reading"]
    }
  },
  {
    "question_string": "Which tense is used to express general truths and facts?",
    "choices": {
      "correct": "Present indefinite tense",
      "wrong": ["Present continuous tense", " Past perfect tense", "Present perfect tense"]
    }
  },
  {
    "question_string": "Back in my native place, I __________ a smartphone.",
    "choices": {
      "correct": "did not have",
      "wrong": ["do not have", "did not had", "do not had"]
    }
  },
  {
    "question_string": "Choose the correct sentence.",
    "choices": {
      "correct": "When I woke up, he had already eaten breakfast.",
      "wrong": ["When I woke up, he has already eaten breakfast.", "When I had woken up, he had already ate breakfast.", "When I had woken up, he has already ate breakfast."]
    }
  }
]

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
  <input class="form-check-input" type="radio" name="${i}" value="${allOptions[0]}" checked>
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

document.querySelector("#displayQuestions").innerHTML = content;

checkMyAnswers = () => {
  let givenAnswers = [];
  for (let i = 0; i < allQuestions.length; i++) 
  {
    let allTheDamnOptions = document.getElementsByName(i.toString());
    for (let j = 0; j < allTheDamnOptions.length; j++) {
      if(allTheDamnOptions[j].checked === true)
      {
        givenAnswers.push(allTheDamnOptions[j].value);
        break;
      }
    }
  }
  console.log(givenAnswers);
  console.log(answerList);

}