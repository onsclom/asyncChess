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
  Pawn="Pawn",
  Rook="Rook",
  Knight="Knight",
  Bishop="Bishop",
  Queen="Queen",
  King="King"
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