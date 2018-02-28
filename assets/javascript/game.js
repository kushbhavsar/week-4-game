
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
    var win = 0;
    var loss = 0;

 //   $("#score").html(" Your score is : " + totalScore);
    $("#win").html(" Win : " + win);
    $("#loss").html("Loss : " + loss);

    

    function reset(){

        var randomNumber = Math.floor(Math.random()*102 + 19);
        $("#randm").text(randomNumber);
    
         blue = Math.floor(Math.random() * 12 + 1);
         green = Math.floor(Math.random() * 12 + 1);
         red = Math.floor(Math.random() * 12 + 1);
         orange = Math.floor(Math.random() * 12 + 1);
    
        totalScore = 0;
        $("#score").html(" Your score is : " + totalScore);
    }
    
    function userWin(){
        win++;
        $("#win").html(" Win : " + win);
        reset();
    }
    
    function userLoss(){
        loss++;
        $("#loss").html(" Loss : "+ loss);
        reset();
    }

    $("#blue").on('click',function(){

        totalScore = totalScore + blue;
        console.log(totalScore);
        $("#score").html(" Your score is : " + totalScore);

        if(totalScore === randomNumber){
            userWin();
        }else if(totalScore > randomNumber){
            userLoss();
        }
    });

    $("#green").on('click',function(){

        totalScore = totalScore + green;
        console.log(totalScore);
        $("#score").html(" Your score is : " + totalScore);

        if(totalScore === randomNumber){
            userWin();
        }else if(totalScore > randomNumber){
            userLoss();
        }
    });

    $("#red").on('click',function(){

        totalScore = totalScore + red;
        console.log(totalScore);
        $("#score").html(" Your score is : " + totalScore);

        if(totalScore === randomNumber){
            userWin();
        }else if(totalScore > randomNumber){
            userLoss();
        }
    });

    $("#orange").on('click',function(){

        totalScore = totalScore + orange;
        console.log(totalScore);
        $("#score").html(" Your score is : " + totalScore);

        if(totalScore === randomNumber){
            userWin();
        }else if(totalScore > randomNumber){
            userLoss();
        }
    });
});

