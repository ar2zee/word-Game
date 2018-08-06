window.addEventListener('load', init)

// Globals

// available lvls 
const levels = {
    easy: 5,
    medium: 4,
    hard: 3
}

// To change the lvls
const currentLvl = levels.medium

let time = currentLvl;
let score = 0;
let isPlaying;

// DOM Elements 

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initial Game
function init () {
    //show number of scns of UI
    seconds.innerHTML = currentLvl;
    // load word from array
    showWord(words);
    // Start mathing on word Input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // check status of the game 
    setInterval(checkStatus, 50);
}

// Start Match
function startMatch(){
    if(matchWords()) {
       isPlaying = true;
       time = currentLvl+1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match current word to word input
function matchWords(){
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Word is Matched!'
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and Show randow word
function showWord(words) {
    // generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex]
}

// countdown timer
function countdown() {
    // make sure time is not run out
    if(time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time 
    timeDisplay.innerHTML = time;
}

// check game status 
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'GAME IS OVER !'
        score = -1;
    }
}