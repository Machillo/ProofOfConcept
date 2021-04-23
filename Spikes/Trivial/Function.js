function CheckAnswer(){
    var Total = 3;
    var Points = 0;

    //Get user Input
    var myForm = document.forms["TrivialForm"];
    var Answer = ["a", "b", "b"]

    //Validation
    for(var i = 1; i <= Total;i++){
        if(myForm["p" + i].value === null ||
           myForm["p" + i].value === ''){
               alert('Please answer question '+ i);
               return false;
           }else{
               if(myForm["p" + i].value === Answer[i - 1]){
                   Points++;
               }
           }
    }

    //Display Results
    var Outcome = document.getElementById('Outcome');
    Outcome.innerHTML = '<h3>You got <span> '+Points+' </span> of <span> '+Total+' points</span></h3>';
    //alert('You scored '+score+' out of ' +total);

    return false;
}