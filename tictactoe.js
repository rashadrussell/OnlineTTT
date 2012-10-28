var ttt = {

  currentTurn: "",

  board: null,

  init: function() {

    this.currentTurn = "O";
    ttt.initBoard();

    $('td').click(function () {
      var tileId = $(this).attr('id');
      socket.emit('sendmove',  {tileId: tileId});
      ttt.markBoard(tileId);
    });
  },

  initBoard: function() {
    this.board = new Array(3);

    for (var i = 0; i < 3; i += 1) {
      this.board[i] = ["", "", ""];
    }
  },

  markBoard: function (tileId) {
    var row, col;
    $('#'+tileId).text(ttt.currentTurn); 

    tileIndex = Number(tileId.charAt(1)) - 1;
    row = Math.floor(tileIndex / 3);
    col = tileIndex % 3;
    console.log(row);
    console.log(col);
    (this.board)[row][col] = this.currentTurn;

    ttt.checkWinner(row, col, this.currentTurn);

    if (this.currentTurn === "O") {
      this.currentTurn = "X";
    } else {
      this.currentTurn = "O";
    }
  },
 

  checkWinner: function(row, col, lastMove) {

    var board = this.board;
    var methods = {
      checkRow: function () {
        var i;
        for (i = 0; i < 3; i++) {
          if (this.board[row][i] !== lastMove) {
            return false;
          }
        }
        return true;
      },

      checkCol: function () {
        var i;
        for (var i = 0; i < 3; i++) {
          if (this.board[i][col] !== lastMove) {
            return false;
          }
        }
        return true;
      },

      checkDiag: function (argument) {
        return false;
      },
    };
    var winnerFound = ttt.checkRow(row) || ttt.checkCol(col) || ttt.checkDiag();
    if (winnerFound) {
      prompt("SHIITITT"");
    } else {

    }
  }
};

