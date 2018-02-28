
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
    var kitten = 0;
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
       
    }
    
    function userLoss(){
        loss++;
        $("#loss").html(" Loss : "+ loss);
    }

    $("#blue").on('click',function(){

        kitten = totalScore += blue;
        console.log("kitten = " + kitten);
        $("#score").html(" Your score is : " + kitten);

        if(kitten === randomNumber){
            userWin();
            reset();
        }else if(kitten > randomNumber){
            userLoss();
            reset();
        }
    })

    $("#green").on('click',function(){

        kitten = totalScore += green;
        console.log(totalScore);
        $("#score").html(" Your score is : " + kitten);

        if(kitten === randomNumber){
            userWin();
            reset();
        }else if(kitten > randomNumber){
            userLoss();
            reset();
        }
    })

    $("#red").on('click',function(){

        kitten = totalScore += red;
        console.log(totalScore);
        $("#score").html(" Your score is : " + kitten);

        if(kitten === randomNumber){
            userWin();
            reset();
        }else if(kitten > randomNumber){
            userLoss();
            reset();
        }
    })

    $("#orange").on('click',function(){

        kitten = totalScore += orange;
        console.log(totalScore);
        $("#score").html(" Your score is : " + kitten);

        if(kitten === randomNumber){
            userWin();
            reset();
        }else if(kitten > randomNumber){
            userLoss();
            reset();
        }
    });
});

