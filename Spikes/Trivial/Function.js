function CheckAnswer(){
    var Total = 3;
    var Points = 0;

    var myForm = document.forms["TrivialForm"];
    var Answer = ["a", "b", "b"]

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
    picture();

    var Outcome = document.getElementById('Outcome');
    Outcome.innerHTML = '<h3>You got <span> '+Points+' </span> of <span> '+Total+' points</span></h3>';
    
    if (myForm["p" + i].value === Answer){
        window.alert(function picture(){ 
            var pic = "Images/Ibba.png"
            document.getElementById("Image").src = pic;
            document.getElementById("Image").style.display='block';
            });
   } else if (myForm["p" + i].value === 2){
        window.alert(function picture(){
            var pic = "Images/Homero.png"
            document.getElementById("Image").src = pic;
            document.getElementById("Image").style.display= 'block';
            });
   } else{
       window.alert(function picture(){ 
        var pic = "Images/cat_craying.jpg"
        document.getElementById("Image").src = pic;
        document.getElementById("Image").style.display='block';
        });
   }

    

    return false;

};