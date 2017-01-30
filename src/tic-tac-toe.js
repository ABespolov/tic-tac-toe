class TicTacToe {
    constructor() {
        this.field = [];
        this.current_symbol = 'x';
        this.FIELD_SIZE = 3;

        for (var i = 0; i < this.FIELD_SIZE; i++) {
            this.field[i] = [];
            for (var j = 0; j < this.FIELD_SIZE; j++) {
                this.field[i][j] = 0;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.current_symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == 0) {
            this.field[rowIndex][columnIndex] = this.current_symbol;
            if (this.current_symbol == 'x') {
                this.current_symbol = 'o';
            } else {
                this.current_symbol = 'x';
            }
        }
    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner() != null) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        
        //check rows
        for (var i = 0; i < this.FIELD_SIZE; i++) {
            var response = this.check(this.field[i].join(''));
            if (response != null) return response;
        }
        //check columns
        var str = '';
        for (var i = 0; i < this.FIELD_SIZE; i++) {
            for (var j = 0; j < this.FIELD_SIZE; j++) {
                str += this.field[j][i];
            }
            var response = this.check(str);
            if (response != null) return response;
            var str = '';
        }

        //check diagonals
        var str = '';
        for (var j = 0, i = 0; j < this.FIELD_SIZE; j++) {
            str += this.field[j][i];
            i++;
        }
        var response = this.check(str);
        if (response != null) return response;

        var str = '';
        for (var j = this.FIELD_SIZE - 1, i = 0; j >= 0; j--) {
            str += this.field[j][i];
            i++;
        }

        var response = this.check(str);
        if (response != null) return response;

        return null;
    }

    noMoreTurns() {
        var turns = true;
        this.field.forEach(function (item, i, arr) {
            item.forEach(function (item, i, arr) {
                console.log(item);
                if (item == 0) turns = false;
            });
        });
        return turns;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] != 0) {
            return this.field[rowIndex][colIndex];
        } else {
            return null;
        }
    }

    check(str) {
        if (str == 'xxx') {
            return 'x';
        } else if (str == 'ooo') {
            return 'o';
        }
        return null;
    }
}

module.exports = TicTacToe;
