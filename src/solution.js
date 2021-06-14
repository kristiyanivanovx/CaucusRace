let pointsSpan = document.getElementById("points");
let gameDiv = document.getElementById("game");
let selectStart = document.getElementById("select-start");
let submitButton = document.getElementById("submit-btn");

// set points to 0 initially
if (pointsSpan.innerHTML === ""){
    pointsSpan.innerHTML = 0;
}

// set index to 0 initially
let index = 0;

submitButton.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e);

    let selected = document.getElementById("select-start");
    let splitted = selected.value.split("@");

    pointsSpan.innerHTML = Number(pointsSpan.innerHTML) + Number(splitted[0]);

    console.log(splitted);
    
    index = Number(index) + Number(splitted[1]);
    console.log(index + " index");

});

// get input dynamically
let input = [-1, 4, -1, 3, -2, 2, 2, -3, 1, 3, -2];
let counter = 0;

// set values for initial picker
input.forEach(e => {
    let option = document.createElement("option");
    let value = e + "@" + counter;
    option.setAttribute("value", value);
    option.innerHTML = "Value " + e + " at " + counter + "th place.";
    counter++;
    selectStart.appendChild(option);
});

// set values for race track 
input.forEach(e => {
    let div = document.createElement("div");
    div.innerHTML = e;
    div.setAttribute("class", "btn btn-sm btn-outline-success ml-1 mt-1 mb-1 mr-1");
    gameDiv.appendChild(div);
});
