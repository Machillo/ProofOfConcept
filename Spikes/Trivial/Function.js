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

    if(Points[3].value === 3){function picture(){ 
        var pic = "Images/Ibba.png"
        document.getElementById("Image").src = pic;
        document.getElementById("Image").style.display='block';
        }
    }else{
        if(Points[2] === 2){function picture(){
            var pic1 = "Images/Homero.png"
            document.getElementById("Image").src = pic1;
            document.getElementById("Image").style.display= 'block';
            }}
    }

    var Outcome = document.getElementById('Outcome');
    Outcome.innerHTML = '<h3>You got <span> '+Points+' </span> of <span> '+Total+' points</span></h3>'; 

       return false;
   
    
};