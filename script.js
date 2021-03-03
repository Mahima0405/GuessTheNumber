let SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score= 20;
let maximumscore= 0;

function displayfail(){
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector('img').src= "wrong.png";
}

function displaywin(){
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector('img').src= "correct.png";
}

function changedom(msg){
    document.querySelector(".message").textContent = msg;
}

function guessing(){
    let guess = document.querySelector('#num').value;

    if (!guess || guess <= 0 || guess > 20) {
        changedom("Invalid Number")
    }
    else if (guess == SecretNumber) {
        changedom("You Won")
        document.querySelector("h1").textContent= "🍷🍷YOU WON🍷🍷"
        displaywin();
        maximumscore = Math.max(maximumscore, score)
        MaxScore.innerHTML = maximumscore;
    }
    else if (guess < SecretNumber) {
        changedom("Too Low")
        score -= 2;
        curr.innerHTML = score;

    }
    else {
        changedom("Too High");
        score -= 2;
        curr.innerHTML = score;
    }

    if(score == 0){
        changedom("You Lost")
        document.querySelector("h1").textContent= "😭😭YOU LOST😭😭"
        displayfail();
        return;
    }
}

function startAgain(){
    score = 20;
    curr.innerHTML = 20;
    changedom("Start Guessing...")
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('img').src = "images.png"
    SecretNumber = Math.trunc(Math.random() * 20 + 1)
    document.querySelector('h1').textContent = "🎊🎊Guess the Number🎊🎊"
}