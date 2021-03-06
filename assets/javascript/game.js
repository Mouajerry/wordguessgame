

var carNames= [ "honda", "infiniti","toyota","nissan","chevrolet","ford","lexus","suzuki","mazda","astonmartin","mitsubishi","audi"];

const maxTries = 8;           

var guessedLetters = [];       
var currentWordIndex;           
var guessingWord = [];          
var remainingGuesses = 0; 
var wins = 0;        
var gameStarted = false;      
var hasFinished = false;    

function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    
    currentWordIndex = Math.floor(Math.random() * (carNames.length));

 
    guessedLetters = [];
    guessingWord = [];

    
    for (var i = 0; i < carNames[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
   
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";
 
    updateDisplay();
};


function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block";
        hasFinished = true;
    }
};

document.onkeydown = function(event) {
    
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
       
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }

    updateDisplay();
    checkWin();
};


function evaluateGuess(letter) {
  
    var positions = [];

   
    for (var i = 0; i < carNames[currentWordIndex].length; i++) {
        if(carNames[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }


    if (positions.length <= 0) {
        remainingGuesses--;
        updateHangmanImage();
    } else {
   
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        hasFinished = true;
    }
};