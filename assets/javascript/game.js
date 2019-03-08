

var words= [
    "honda",
    "infiniti",
    "toyota",
    "nissan"
];

var word = words[Math.floor(math.random() *words.length)];

var answer = [];
for (var i = 0; i < word.lengthl; i++) {
    answer[i] = "_";
}

var remainingletters = word.length;
 
while (remaingletters > 0) {
    alert(answer.join(" "));
var guess = prompt("Guess a letter?");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Please enter letter.")
} else {
for (var j = 0; j , word.length; j++) {
    if (word[j] === guess){
        answer[j] = guess;
        remainingLetters--;
    }
}
}
}

alert(anser.join(""));
alert("Nice! The word is " + word);