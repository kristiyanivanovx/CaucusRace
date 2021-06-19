const invalidStateMessage = "Invalid state, please reload the game.";
const gameHasEndedMessage = ", The game has ended";

// get input
let input = [-1, 4, -1, 3, -2, 2, 2, -3, 1, 3, -2];
let counter = 0;

let pointsSpan = document.getElementById("points");
let gameDiv = document.getElementById("game");
let selectStart = document.getElementById("select-start");
let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", caucusRace);

// set points to 0 initially
if (pointsSpan.innerHTML === ""){
    pointsSpan.innerHTML = 0;
}

// set index to 0 initially
let index = 0;

function caucusRace (e) { 
    e.preventDefault();

    let selected = document.getElementById("select-start");
    // if (selected == "- Select an starting position -") { alert("Please select an number"); continue; }

    let splitted = selected.value.split("@");
    let pointsIncremented = Number(pointsSpan.innerHTML) + Number(splitted[0]);

    // game end checker
    if (pointsIncremented <= 0) {
        pointsSpan.innerHTML = pointsIncremented + gameHasEndedMessage;
    }
    else {
        pointsSpan.innerHTML = pointsIncremented;
    }

    // NaN checker
    if (isNaN(pointsSpan.innerHTML) && !pointsSpan.innerHTML.includes(gameHasEndedMessage)) {
        console.log(invalidStateMessage);
        alert(invalidStateMessage);
    }

    console.log(pointsSpan.innerHTML);
    
    // console.log(splitted);
    index = Number(index) + Number(splitted[1]);
    // console.log(index + " index");
}

// set values for race track 
input.forEach(e => {
    let div = document.createElement("div");
    div.innerHTML = e;
    div.setAttribute("class", "btn btn-sm btn-outline-success ml-1 mt-1 mb-1 mr-1");
    gameDiv.appendChild(div);
});

// set values for initial picker
input.forEach(e => {
    let option = document.createElement("option");
    let value = e + "@" + counter;
    option.setAttribute("value", value);
    option.innerHTML = "Value " + e + " at " + counter + "th place.";
    counter++;
    selectStart.appendChild(option);
});
