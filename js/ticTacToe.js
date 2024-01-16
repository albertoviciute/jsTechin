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

function computerMove(start) {
    let move = getRandomNumberExcluding();
    let div = document.getElementById(move)
    game(div, start);
}

function game(div, start) {
    let checkDiv = document.getElementsByClassName('container');
    if (div.textContent == '' && checkDiv.length === 0) {
        if (start == 1) {
            div.textContent = 'X';
            if (isWinner()) {
                moveInfo.textContent = `Congrats winner is ${start == 2 ? 'user' : 'computer'}!`;
                return;
            }
            start = 2;
            moveInfo.textContent = 'Your move';
        } else {
            div.textContent = 'O';
            if (isWinner()) {
                moveInfo.textContent = `Congrats winner is ${start == 2 ? 'user' : 'computer'}!`;
                return;
            }
            start = 1;
            setTimeout(() => computerMove(start), 500);
            moveInfo.textContent = 'Computer move';
        }
    } else {
        if (checkDiv.length > 0) {
            moveInfo.textContent = `Congrats winner is ${start == 2 ? 'user' : 'computer'}!`;
        } else {
            moveInfo.textContent = 'Box is already taken, please choose another';
        }
    }
}

function getRandomNumberExcluding() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 9) + 1;
    } while (document.getElementById(randomNumber).textContent != '');

    return randomNumber;
}



function isWinner() {
    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const divA = document.getElementById(a.toString());
        const divB = document.getElementById(b.toString());
        const divC = document.getElementById(c.toString());

        if (divA.textContent === divB.textContent && divB.textContent === divC.textContent && divA.textContent !== '') {
            divA.classList.add('container');
            divB.classList.add('container');
            divC.classList.add('container');
            return true;
        }
    }

    return false;
}
