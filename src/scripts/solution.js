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

function caucusRace(e) {
    e.preventDefault();
    
    // if the input is an empty string
    if (input.value === "") {
        return;
    }

    // extract all numbers with eregex and make them integers
    let inputArray = input.value.match(/-?\d+/gm).map(element => Number(element));
    // console.log(inputArray);

    let output = [];
    for (let currIndex = 0; currIndex < inputArray.length; currIndex++) {
        let shouldBeAdded = checkValidIndex(inputArray, currIndex);
        
        if (shouldBeAdded) {
            output.push(currIndex);
        }
    }

    output = output.sort((a, b) => a - b);

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

    // prepare output section
    let info = document.createElement("div");
    info.setAttribute("class", "col-md-4 offset-md-4");
    info.innerHTML = "<h3>Output</h3><hr>";
    outputDiv.appendChild(info);

    // set values for output and append
    let div = document.createElement("div");
    div.setAttribute("class", "col-md-4 offset-md-4 alert alert-success ml-1 mt-1 mb-1 mr-1");
    
    // real array version
    // let outputPrepared = output;

    // styled as array version
    let outputStyled = "[";
    for (let m = 0; m < output.length; m++) {
        if(m == output.length - 1) {
            outputStyled += output[m];
        }
        else {
            outputStyled += output[m] + ", ";
        }
    }

    outputStyled = outputStyled + "]";

    div.innerHTML = outputStyled;
    outputDiv.appendChild(div);
    console.log(output);
}
