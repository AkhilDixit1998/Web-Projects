
function Option(index,option)
{
    this.index=index;
    this.option=option;
}

var quesOperations={
    quesarr:["Hello this is the question 1","Hello this is the question 2",
            "Hello this is the question 3","Hello this is the question 4",
            "Hello this is the question 5"],
    
    optionArr:["options 1","options 2","options 3"],
    
    
    attemptOtions:[],
    
    addToOptionArray:function(index,option)
    {
      var obj=new Option(index,option);
        this.attemptOtions.push(obj);
    },
    
    
    editQuestions:function(index,ques){
        this.quesarr[index]=ques;
    },
    addQuestions:function(ques){
        this.quesarr.push(ques);
    },
    deleteQuestions:function(index)
    {
        this.quesarr.splice(index,1);
    }
    
    
}