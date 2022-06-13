class Board {
	constructor(grid) {
		this.grid = [
			[new Cell(), new Cell(), new Cell()],
			[new Cell(), new Cell(), new Cell()],
			[new Cell(), new Cell(), new Cell()],
		];
	}

	isBoardFull() {
		let counter = 0;
		for (let i = 0; i < this.grid.length; i++) {
			const collumns = this.grid[i];
			for (let j = 0; j < collumns.length; j++) {
				if (collumns[j] !== '') {
					counter += 1;
				}
			}
		}
		if (counter === 9) {
			return true;
		} else {
			return false;
		}
	}

	directions() {}

	winner() {}
}
