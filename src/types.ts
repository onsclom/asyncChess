export enum PieceTypes {
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King
}

interface ChessSquare {
  type: PieceTypes
  isWhite: boolean
  x: number;
  y: number;
  timeLastMoved: Date;
}

interface AsyncChessGame {
  /** grid is 8x8 of chess squares. squares that dont have piece are null */
  grid: ChessSquare | null [][]

  player1Cursor: Vector2
  player1CurrentlySelected: Vector2 | null
  player2Cursor: Vector2
  player2CurrentlySelected: Vector2 | null
}