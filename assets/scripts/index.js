const cells = document.querySelectorAll('.cell');
const x_class = 'x';
const circle_class = 'circle';
let circleTurn;

cells.forEach((cell) => {
	cell.addEventListener('click', clickedCell, { onde: true });
});

function clickedCell(e) {
	const cell = e.target;
	const currentClass = circleTurn ? circle_class : x_class;
	placeMark(cell, currentClass);
	switchTurns();
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}
