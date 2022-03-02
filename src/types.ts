import BlackBishop from './components/svg_components/BlackBishop.svelte'
import BlackKing from './components/svg_components/BlackKing.svelte'
import BlackKnight from './components/svg_components/BlackKnight.svelte'
import BlackPawn from './components/svg_components/BlackPawn.svelte'
import BlackQueen from './components/svg_components/BlackQueen.svelte'
import BlackRook from './components/svg_components/BlackRook.svelte'
import WhiteBishop from './components/svg_components/WhiteBishop.svelte'
import WhiteKing from './components/svg_components/WhiteKing.svelte'
import WhiteKnight from './components/svg_components/WhiteKnight.svelte'
import WhitePawn from './components/svg_components/WhitePawn.svelte'
import WhiteQueen from './components/svg_components/WhiteQueen.svelte'
import WhiteRook from './components/svg_components/WhiteRook.svelte'

export let PieceSVGs = {
  "BlackBishop": BlackBishop,
  "BlackKing": BlackKing,
  "BlackKnight": BlackKnight,
  "BlackPawn": BlackPawn,
  "BlackQueen": BlackQueen,
  "BlackRook": BlackRook,
  "WhiteBishop": WhiteBishop,
  "WhiteKing": WhiteKing,
  "WhiteKnight": WhiteKnight,
  "WhitePawn": WhitePawn,
  "WhiteQueen": WhiteQueen,
  "WhiteRook": WhiteRook,
}

export enum PieceTypes {
  Pawn = "Pawn",
  Rook = "Rook",
  Knight = "Knight",
  Bishop = "Bishop",
  Queen = "Queen",
  King = "King"
}

export enum Player {
  ONE,
  TWO
}

export class Piece {
  type: PieceTypes
  isWhite: boolean
  x: number;
  y: number;
  /** 1.0 is full cooldown, 0 is none */
  cooldown: number = 0;

  constructor(type: PieceTypes, isWhite: boolean, x: number, y: number) {
    this.type = type
    this.isWhite = isWhite
    this.x = x
    this.y = y
  }
}

export class AsyncChessGame {
  /** grid is 8x8 of chess squares. squares that dont have piece are null */
  grid: Piece | null[][]
  // making pieces nullable allows for nice svelte transitions (splicing from array breaks continuos effect)
  pieces: Nullable<Piece>[]

  player1Cursor: Vector2 = { x: 4, y: 7 }
  player1CurrentlySelected: Vector2 | null
  player2Cursor: Vector2 = { x: 4, y: 0 }
  player2CurrentlySelected: Vector2 | null

  constructor() {
    //add pieces
    this.pieces = [
      //row 1
      new Piece(PieceTypes.Rook, true, 0, 7),
      new Piece(PieceTypes.Knight, true, 1, 7),
      new Piece(PieceTypes.Bishop, true, 2, 7),
      new Piece(PieceTypes.Queen, true, 3, 7),
      new Piece(PieceTypes.King, true, 4, 7),
      new Piece(PieceTypes.Bishop, true, 5, 7),
      new Piece(PieceTypes.Knight, true, 6, 7),
      new Piece(PieceTypes.Rook, true, 7, 7),
      //row 2
      new Piece(PieceTypes.Pawn, true, 0, 6),
      new Piece(PieceTypes.Pawn, true, 1, 6),
      new Piece(PieceTypes.Pawn, true, 2, 6),
      new Piece(PieceTypes.Pawn, true, 3, 6),
      new Piece(PieceTypes.Pawn, true, 4, 6),
      new Piece(PieceTypes.Pawn, true, 5, 6),
      new Piece(PieceTypes.Pawn, true, 6, 6),
      new Piece(PieceTypes.Pawn, true, 7, 6),

      //row 7
      new Piece(PieceTypes.Pawn, false, 0, 1),
      new Piece(PieceTypes.Pawn, false, 1, 1),
      new Piece(PieceTypes.Pawn, false, 2, 1),
      new Piece(PieceTypes.Pawn, false, 3, 1),
      new Piece(PieceTypes.Pawn, false, 4, 1),
      new Piece(PieceTypes.Pawn, false, 5, 1),
      new Piece(PieceTypes.Pawn, false, 6, 1),
      new Piece(PieceTypes.Pawn, false, 7, 1),
      //row 8
      new Piece(PieceTypes.Rook, false, 0, 0),
      new Piece(PieceTypes.Knight, false, 1, 0),
      new Piece(PieceTypes.Bishop, false, 2, 0),
      new Piece(PieceTypes.Queen, false, 3, 0),
      new Piece(PieceTypes.King, false, 4, 0),
      new Piece(PieceTypes.Bishop, false, 5, 0),
      new Piece(PieceTypes.Knight, false, 6, 0),
      new Piece(PieceTypes.Rook, false, 7, 0),
    ]
  }

  attemptMove(player: Player, from: Vector2, to: Vector2) {
    let pieceOnStart = this.pieces.find(piece => piece && piece.x == from.x && piece.y == from.y)
    let pieceOnEnd = this.pieces.find(piece => piece && piece.x == to.x && piece.y == to.y)

    if (pieceOnEnd) {
      //this.pieces.splice( this.pieces.indexOf(pieceOnEnd), 1 )
      this.pieces[this.pieces.indexOf(pieceOnEnd)] = null
    }

    if (pieceOnStart) {
      pieceOnStart.x = to.x
      pieceOnStart.y = to.y
    }

    if (player == Player.ONE)
      this.player1CurrentlySelected = null
    else
      this.player2CurrentlySelected = null
  }

  playerSelect(player: Player) {
    let cursor: Vector2
    if (player == Player.ONE)
      cursor = { x: this.player1Cursor.x, y: this.player1Cursor.y }
    else
      cursor = { x: this.player2Cursor.x, y: this.player2Cursor.y }

    // if player already has selection
    if (player == Player.ONE && this.player1CurrentlySelected != null || player == Player.TWO && this.player2CurrentlySelected != null) {
      // attempt move
      this.attemptMove(player, player == Player.ONE ? this.player1CurrentlySelected : this.player2CurrentlySelected, cursor)
    } else
      // otherwise make new selection
      if (player == Player.ONE)
        this.player1CurrentlySelected = { x: cursor.x, y: cursor.y }
      else
        this.player2CurrentlySelected = { x: cursor.x, y: cursor.y }
  }
}