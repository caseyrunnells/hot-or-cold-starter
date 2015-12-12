var secretNumber = null,
    guessCount = null;

$(document).ready(function(){
    
    /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

    /*--- Start a new game ---*/
    $(".new").click(function(){
        newGame();
    });

    /*--- Check users guess - click ---*/
    $("form .button").click(function(){
        checkGuess();
    });

    /*--- Check users guess - click ---*/
    $(document).keypress(function(e){
        if(e.which == 13) {
            e.preventDefault();
            checkGuess();
        }
    });

    /* -- On input change - valid number --*/
    $('#userGuess').change(function() {
        var value = parseInt($('#userGuess').val(), 10);

        if (value < 0 || value > 100) {
            alert('Please enter a valid number between 1 and 100');
        }
    });

    newGame();
});

function newGame() {
    resetGame();
    setRandomNumner();
}

function setRandomNumner() {
    secretNumber = Math.floor((Math.random() * 100) + 1);
}

function resetGame() {
    count = 0;
    secretNumber = null;

    $('#feedback').css('background-color', '#cc324b');
    $('#userGuess').val('');
    $('#count').text(count);
    $('#guessList').empty();
}

function getGuess() {
    return parseInt($('#userGuess').val(), 10);
}

function updateCount() {
    count = count + 1;

    $('#count').text(count);
}

function checkNumber() {
    var guess = getGuess();

    if (guess === secretNumber) {
        return 'correct';
    } else if (guess < secretNumber) {
        return 'low';
    }

    return 'high';
}

function updateGuess() {
    $('#guessList').prepend($('<li />').text(getGuess()));
}

function updateFeedback() {
    var feedback = checkNumber(),
        $feedback = $('#feedback');

    if (feedback === 'correct') {
        $feedback.text('Correct!');
        $feedback.css('background-color', 'green');
        $('#guessButton').disable();
    } else if (feedback === 'low') {
        $feedback.text('Too Low');
    } else if(feedback === 'high') {
        $feedback.text('Too High');
    }

    $('#userGuess').val('');
     
}

function checkGuess() {
    updateCount();
    updateGuess();
    updateFeedback();
}