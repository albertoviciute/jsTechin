let divs = document.querySelectorAll('#mainBox > div');
let randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1);
let moveInfo = document.getElementById('moveInfo');
let start = randomNumber;

if (randomNumber == 1) {
    moveInfo.textContent = 'The computer starts first move';
    let x = document.getElementById(Math.floor(Math.random() * 9) + 1);
    setTimeout(() => {
        game(x);
    }, 2000);
} else {
    moveInfo.textContent = 'You start first move';
}

divs.forEach((div) => {
    div.addEventListener('click', function () {
        if (start == 1) {
            computerMove();
        } else {
            game(div);
        }
    });
});

function computerMove() {
    let move = getRandomNumberExcluding();
    let div = document.getElementById(move)
    game(div);
}

function getRandomNumberExcluding() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 9) + 1;
    } while (document.getElementById(randomNumber).textContent != '');

    return randomNumber;
}

function game(div) {

    if (div.textContent == '') {
        if (start == 1) {
            div.textContent = 'X';
            start = 2;
            moveInfo.textContent = 'Your move';
        } else {
            div.textContent = 'O';
            start = 1;
            setTimeout(computerMove, 2000);
            moveInfo.textContent = 'Computer move';
        }
    } else {
        moveInfo.textContent = 'Box is already taken, please choose another';
    }
}

// TO DO:
function isWinner(){
    let div1 = document.getElementById('1');
    let div2 = document.getElementById('2');
    let div3 = document.getElementById('3');
    let div4 = document.getElementById('4');
    let div5 = document.getElementById('5');
    let div6 = document.getElementById('6');
    let div7 = document.getElementById('7');
    let div8 = document.getElementById('8');
    let div9 = document.getElementById('9');
    
    if (div1.textContent === div2.textContent && div2.textContent === div3.textContent) {
        div1.classList.add('container');
        div2.classList.add('container');
        div3.classList.add('container');
    }
}