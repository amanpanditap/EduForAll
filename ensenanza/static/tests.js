const allTests = [
    {
        "id": 1,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Mathematics Part 1",
        "Chapter": "Linear Equations in Two Variables",
        "Location": "/ques/english/M1_C1.json"
    },
    {
        "id": 2,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Mathematics Part 2",
        "Chapter": "Similarity",
        "Location": "/ques/english/M2_C1.json"
    },
    {
        "id": 3,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Science & Technology Part 1",
        "Chapter": "Gravitation",
        "Location": "/ques/english/S1_C1.json"
    },
    {
        "id": 4,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Science & Technology Part 2",
        "Chapter": "Heredity and Evolution",
        "Location": "/ques/english/S2_C1.json"
    },
    {
        "id": 5,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "History and Political Science",
        "Chapter": "Historiography : Development in the West",
        "Location": "/ques/english/H_C1.json"
    },
    {
        "id": 6,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Geography",
        "Chapter": "Field Visit",
        "Location": "/ques/english/G_C1.json"
    },
    {
        "id": 7,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Hindi",
        "Chapter": "Grammar - Sentence distinction(वाक्य भेद)",
        "Location": "/ques/english/LH_G1.json"
    },
    {
        "id": 8,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "Marathi",
        "Chapter": "Grammar",
        "Location": "/ques/english/MH_G1.json"
    },
    {
        "id": 9,
        "Board": "SSC",
        "Class": 10,
        "Medium": "English",
        "Subject": "English",
        "Chapter": "Grammar - Tenses",
        "Location": "/ques/english/E_G1.json"
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
        <p class="card-text" style="text-align: center">Board: ${p.Subject}</p><br>
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
    for(let i=0; i<allTests.length; i++)
    {
        if(allTests[i].id === Number(questionsID))
        {
            getThatInstance = allTests[i];
            break;
        }
    }
    console.log(getThatInstance);

}