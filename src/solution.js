let gameDiv = document.getElementById("game");
let outputDiv = document.getElementById("output");
let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", caucusRace);

function caucusRace(e) {
    e.preventDefault();

    let input = document.getElementById("input").value;
    
    // if the input is an empty string
    if (input === "") {
        return;
    }

    // remove brackets - "[" and "]"
    input = input.replace('[', '').replace(']', '');

    // split by ", " and make each element an integer
    let inputArray = input.split(/[ ,]+/).map(element => Number(element));
    console.log(inputArray);

    // set values for race track 
    inputArray.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = element;
        div.setAttribute("class", "btn btn-sm btn-outline-success ml-1 mt-1 mb-1 mr-1");
        gameDiv.appendChild(div);
    });

    let output = [];

    for (let currIndex = 0; currIndex < inputArray.length; currIndex++) {
        let returnedIndex = checkValidIndex(inputArray, currIndex);
        
        if (returnedIndex !== undefined) {
            output.push(returnedIndex);
        }
    }

    function checkValidIndex(inputArray, currIndex) {
        let innerScore = 0;
 
        for (let j = currIndex; j < inputArray.length; j++) {
            innerScore += inputArray[j];

            if (innerScore <= 0) {
                return;
            }  
        }

        for (let k = 0; k < currIndex; k++) {
            innerScore += inputArray[k];

            if (innerScore <= 0) {
                return;
            }  
        }
      
        if (innerScore > 0) {
            return currIndex;
        }
    }

    // prepare output section
    let info = document.createElement("div");
    info.setAttribute("class", "col-md-4 offset-md-4");
    info.innerHTML = "<h3>Output</h3><hr>";
    outputDiv.appendChild(info);

    // set values for output and append
    let div = document.createElement("div");
    div.setAttribute("class", "col-md-4 offset-md-4 alert alert-success ml-1 mt-1 mb-1 mr-1");
    
    let outputPrepared = "[";
    for (let m = 0; m < output.length; m++) {
        if(m == output.length - 1) {
            outputPrepared += output[m];
        }
        else {
            outputPrepared += output[m] + ", ";
        }
    }

    outputPrepared = outputPrepared + "]";

    div.innerHTML = outputPrepared;
    outputDiv.appendChild(div);

    console.log(output);
}
