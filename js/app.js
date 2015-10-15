// Button JS - place in app

$(document).ready(function(){
   
    //raw JS way
//     var buttonThing = document.getElementById("guessButton");
//     guessButton.addEventListener("click", readInput);
//     function (){
//       console.log('hello');
//   }
    
    $('#guessButton').click(function(){
      console.log("hello");
        console.log($('#userGuess').val()); 
//       make sure this value is right before proceeding
         var answerFeedBack = parseInt(document.getElementById("user-input").textContent();
        
        
    });
    
});


//ACtual Code - Start Here 

// $(document).ready(function(){

//    $('guessButton').click(function)
  
//   /*--- Display information modal box ---*/
//     $(".what").click(function(){
//       $(".overlay").fadeIn(1000);

//     });

//     /*--- Hide information modal box ---*/
//     $("a.close").click(function(){
//       $(".overlay").fadeOut(1000);
//     });

// });



    function answerFeedBack(delta){
        
         if (delta > 20){
         return "Cold!";
        }
         if (delta <= 20 && delta > 10){
  
         console.log('warm!');
       }        
         if (delta <= 10){
  
         console.log('hot!');
       }
     }



     function mainGame(){
         var ask = document.getElementById("userGuess").value;
         var rightAnswer = Math.random()*100;
         var delta = Math.abs(rightAnswer - ask);
         var numGuesses = 0;
        
         var guessesAllowed = 5;
        
         while(delta !== 0 || numGuesses === guessesAllowed){
             numGuesses += 1;
          var ask = prompt("Take a Guess");            
       delta = Math.abs(rightAnswer - ask);    
             document.getElementById("#answerContainer").textContent = answerFeedBack(delta);
         }
        
         if (delta === 0 && numGuesses < guessesAllowed){
             alert("Congratulations! You won a new car! It took you " + numGuesses + " guesses, so you win nothing!");
         }
     }
        
        
//     function startNewGame(){

//     }

//    mainGame();


