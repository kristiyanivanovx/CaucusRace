let outputDiv = document.getElementById("output");
let submitButton = document.getElementById("submit-btn");
let clearButton = document.getElementById("clear-btn");
let input = document.getElementById("input");

submitButton.addEventListener("click", caucusRace);
clearButton.addEventListener("click", clearInputOutput);

function clearInputOutput(e) {
    e.preventDefault();
    outputDiv.innerHTML = "";
    input.value = "";
}

function checkValidIndex(inputArray, currIndex) {
    let shouldBeAdded = true;
    let innerScore = 0;

    for (let j = currIndex; j < inputArray.length; j++) {
        innerScore += inputArray[j];

        if (innerScore <= 0) {
            shouldBeAdded = false;
        }  
    }

    for (let k = 0; k < currIndex; k++) {
        innerScore += inputArray[k];

        if (innerScore <= 0) {
            shouldBeAdded = false;
        }  
    }
  
    return shouldBeAdded;
}

function caucusRace(e) {
    e.preventDefault();
    
    // if the input is an empty string
    if (input.value === "") {
        return;
    }

    // extract all numbers with regex and make them integers
    let inputArray = input.value.match(/-?\d+/gm).map(element => Number(element));

    let output = [];
    for (let currIndex = 0; currIndex < inputArray.length; currIndex++) {
        let shouldBeAdded = checkValidIndex(inputArray, currIndex);
        
        if (shouldBeAdded) {
            output.push(currIndex);
        }
    }

    output = output.sort((a, b) => a - b);

    // prepare output heading section
    let headingDiv = document.createElement("div");
    headingDiv.setAttribute("class", "col-md-4 offset-md-4");
    headingDiv.innerHTML = "<h3>Output</h3><hr>";
    outputDiv.appendChild(headingDiv);

    // set values for output and append
    let answerDiv = document.createElement("div");
    answerDiv.setAttribute("class", "col-md-4 offset-md-4 alert alert-success ml-1 mt-1 mb-1 mr-1");
    
    // styled as array version
    let outputStyled = "[" + output.join(', ') + "]";

    // real array version
    // let outputStyled = output;

    answerDiv.innerHTML = outputStyled;
    outputDiv.appendChild(answerDiv);
    console.log(output);
}
