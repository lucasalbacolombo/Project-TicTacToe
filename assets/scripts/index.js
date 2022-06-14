const game = new Game();
const startBtn = document.querySelector('#start-button');
const resetBtn = document.querySelector('#reset-button');
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#results');
const img = document.querySelector('#img-start');
const x_class = 'x';
const circle_class = 'circle';
let circleTurn;
const winCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

startBtn.addEventListener('click', () => {
	game.startGame();
});

img.addEventListener('click', () => {
	game.startGame();
});

resetBtn.addEventListener('click', () => {
	game.reset();
});

cells.forEach((cell) => {
	cell.addEventListener('click', clickedCell, { once: true });
});

function clickedCell(e) {
	const cell = e.target;
	const currentClass = circleTurn ? circle_class : x_class;
	placeMark(cell, currentClass);
	if (checkWin(currentClass)) {
		game.endGame(false);
	} else if (game.checkDraw()) {
		game.endGame(true);
	} else {
		switchTurns();
	}
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function switchTurns() {
	circleTurn = !circleTurn;
}

function checkWin(currentClass) {
	return winCombinations.some((combination) => {
		return combination.every((index) => {
			return cells[index].classList.contains(currentClass);
		});
	});
}
