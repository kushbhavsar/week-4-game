
$(document).ready(function (){

    var randomNumber = Math.floor(Math.random()*102 + 19);
   // console.log(randomNumber);

    $("#randm").text(randomNumber);

    var blue = Math.floor(Math.random() * 12 + 1);
    var green = Math.floor(Math.random() * 12 + 1);
    var red = Math.floor(Math.random() * 12 + 1);
    var orange = Math.floor(Math.random() * 12 + 1); 
   // console.log(blue,green,red,orange);

    var totalScore = 0;
    var finalScore = 0;
    var win = 0;
    var loss = 0;

 //   $("#score").html(" Your score is : " + totalScore);
    $("#win").html(" Win : " + win);
    $("#loss").html("Loss : " + loss);

    

    function reset(){

        randomNumber = Math.floor(Math.random()*102 + 19);
        $("#randm").text(randomNumber);
    
         blue = Math.floor(Math.random() * 12 + 1);
         green = Math.floor(Math.random() * 12 + 1);
         red = Math.floor(Math.random() * 12 + 1);
         orange = Math.floor(Math.random() * 12 + 1);
        finalScore = 0;
        totalScore = 0;
        $("#score").html(" Your score is : " + totalScore);
    }
    
    function userWin(){
        win++;
        $("#win").html(" Win : " + win);
       
    }
    
    function userLoss(){
        loss++;
        $("#loss").html(" Loss : "+ loss);
    }

    $("#blue").on('click',function(){

        finalScore = totalScore += blue;
        console.log("finalScore = " + finalScore);
        $("#score").html(" Your score is : " + finalScore);

        if(finalScore === randomNumber){
            userWin();
            reset();
        }else if(finalScore > randomNumber){
            userLoss();
            reset();
        }
    })

    $("#green").on('click',function(){

        finalScore = totalScore += green;
      //  console.log(totalScore);
        $("#score").html(" Your score is : " + finalScore);

        if(finalScore === randomNumber){
            userWin();
            reset();
        }else if(finalScore > randomNumber){
            userLoss();
            reset();
        }
    })

    $("#red").on('click',function(){

        finalScore = totalScore += red;
     //   console.log(totalScore);
        $("#score").html(" Your score is : " + finalScore);

        if(finalScore === randomNumber){
            userWin();
            reset();
        }else if(finalScore > randomNumber){
            userLoss();
            reset();
        }
    })

    $("#orange").on('click',function(){

        finalScore = totalScore += orange;
     //   console.log(totalScore);
        $("#score").html(" Your score is : " + finalScore);

        if(finalScore === randomNumber){
            userWin();
            reset();
        }else if(finalScore > randomNumber){
            userLoss();
            reset();
        }
    });
});

