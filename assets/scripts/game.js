class Game {
	startGame() {
		const board = document.querySelector('.board');
		const img = document.querySelector('#img-start');
		img.style.display = 'none';
		board.style.display = 'grid';
	}

	placeMark(cell, currentClass) {
		cell.classList.add(currentClass);
	}

	endGame(draw) {
		const message = document.querySelector('#results');
		if (draw) {
			message.innerText = 'Draw!';
		} else {
			message.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
		}
	}

	checkWin(currentClass) {
		return winCombinations.some((combination) => {
			return combination.every((index) => {
				return cells[index].classList.contains(currentClass);
			});
		});
	}

	checkDraw() {
		return [...cells].every((cell) => {
			return (
				cell.classList.contains(x_class) ||
				cell.classList.contains(circle_class)
			);
		});
	}

	switchTurns() {
		circleTurn = !circleTurn;
	}

	reset() {
		location.reload();
		return false;
	}
}
