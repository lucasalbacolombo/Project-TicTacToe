class Game {
	startGame() {
		const board = document.querySelector('.board');
		const img = document.querySelector('#img-start');
		img.style.display = 'none';
		board.style.display = 'grid';
	}

	endGame(draw) {
		if (draw) {
			message.innerText = 'Draw!';
		} else {
			message.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
		}
	}

	checkDraw() {
		return [...cells].every((cell) => {
			return (
				cell.classList.contains(x_class) ||
				cell.classList.contains(circle_class)
			);
		});
	}

	reset() {
		location.reload();
		return false;
	}
}
