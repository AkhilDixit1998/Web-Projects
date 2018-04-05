var index = 0;

window.addEventListener("load", bindEvents);



function bindEvents() {
    document.getElementById("next").addEventListener("click", nextQues);
    document.getElementById("previous").addEventListener("click", prevQues);


    var first = function firstQues() {
        var ques = quesOperations.quesarr[index];
        printQues(ques);
        index++;

    }

    first();

    var printButtonsOnTop = function () {
        var index = 0;
        var thead = document.getElementById("thead");
        var tr = thead.insertRow();
        for (index = 0; index < (quesOperations.quesarr.length); index++) {
            var button = document.createElement("button");
            button.innerHTML = "U have answered- " + (index + 1);
            button.className = "attempt";
            button.id = index;

            tr.insertCell(index).appendChild(button); /*If we heree in event listener give the complete function it takes only the last index why???*/

            button.addEventListener("click", goToQuestion);
        }
    }

    printButtonsOnTop();


    var printOptions = function () {
        var label1 = document.getElementById("label_1");
        var label2 = document.getElementById("label_2");
        var label3 = document.getElementById("label_3");

        label1.innerHTML = quesOperations.optionArr[0];
        label2.innerHTML = quesOperations.optionArr[1];
        label3.innerHTML = quesOperations.optionArr[2];
    }

    printOptions();
}


function goToQuestion(event) {

    var t = event.srcElement.id;
    var div = document.getElementById("questions_guest");
    div.innerHTML = quesOperations.quesarr[t];

    console.log(t + "j");
}


function nextQues() {
    if (index < (quesOperations.quesarr.length)) {
        var ques = quesOperations.quesarr[index];
        printQues(ques);
        index++;
    } else {
        alert("questions finsihed");
    }

    saveDoneOptions();


    /*
    if(index>1)
        {
    var selected=quesOperations.attemptOtions[index].index;
        
        
    
    if(selected==index)
        {
            alert("hello guys");
        }
    
        }
    */
    getOptionsIndex(index);


}

function getOptionsIndex(ind) {
    console.log("this is thee " + quesOperations.attemptOtions[ind - 2].index);
    for (var i = 0; i < quesOperations.quesarr.length; i++) {
        if (i == (ind - 2)) {
            var button = document.getElementById(ind - 2);
            button.className = "notAttempt";
        }

    }
}

function saveDoneOptions() {

    var radiobuttons = document.getElementsByName("options");
    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            quesOperations.addToOptionArray(index - 1, i);
        }

        console.log(radiobuttons[i].value);
    }
}


function prevQues() {
    if (index > 0) {
        index--;
    }
    var ques = quesOperations.quesarr[index];
    printQues(ques);
}


function printQues(ques) {
    var div = document.getElementById("questions_guest");
    div.innerHTML = ques;
}
