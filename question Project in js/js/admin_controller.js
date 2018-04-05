window.addEventListener("load",bindevents);

function bindevents()
{
    document.getElementById("add").addEventListener("click",addQuestion);
    document.getElementById("edit").addEventListener("click",editQuestion);
    document.getElementById("delete").addEventListener("click",deleteQuestion);
    
    printRecords();
}

function addQuestion()
{
    var question=document.getElementById("question_input").value;
    quesOperations.addQuestions(question);
}

function editQuestion(event)
{
    var question=document.getElementById("question_input").value;
    var tr=event.srcElement.parentNode.parentNode;
    var index=tr.getAttribute("index");
    quesOperations.editQuestions(index,question);
    reprintRecord();
}


function deleteQuestion(event)
{
   var tr=event.srcElement.parentNode.parentNode;
    var index=tr.getAttribute("index");
    
    alert("the index is "+index);
    quesOperations.deleteQuestions(index);
    reprintRecord();
    
    
}

function reprintRecord()
{
    var tbody=document.getElementById("admin_tbody");
    tbody.innerHTML="";
    for(var index=0;index<(quesOperations.quesarr.length);index++)
        {
             var tr=tbody.insertRow();
            tr.setAttribute("index",index);
            tr.insertCell(0).innerHTML=quesOperations.quesarr[index];
          //  tr.innerHTML=quesOperations.quesarr[index];
            var button=printDeleteButton();
            tr.insertCell(1).appendChild(button);
            
            var editButton=printEditButton();
            tr.insertCell(2).appendChild(editButton);
            
        }
}

function printRecords()
{
    var index;
    var tbody=document.getElementById("admin_tbody");
    for(index=0;index<(quesOperations.quesarr.length);index++)
        {
            var tr=tbody.insertRow();
            tr.setAttribute("index",index);
            tr.insertCell(0).innerHTML=quesOperations.quesarr[index];
          //  tr.innerHTML=quesOperations.quesarr[index];
            var button=printDeleteButton();
            tr.insertCell(1).appendChild(button);
            
            var editButton=printEditButton();
            tr.insertCell(2).appendChild(editButton);
            
        }
}

function printDeleteButton()
{
    var button=document.createElement("button");
    button.innerHTML="Click here to delete";
    button.addEventListener("click",deleteQuestion)
    
    return button;
    
}

function printEditButton()
{
    var button=document.createElement("button");
    button.innerHTML="Click here to edit";
    button.addEventListener("click",editQuestion);
    
    return button;
}