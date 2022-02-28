/// <reference types="svelte" />

enum PieceTypes {
  Pawn="Pawn",
  Rook="Rook",
  Knight="Knight",
  Bishop="Bishop",
  Queen="Queen",
  King="King"
}

interface VisualPiece {
  type: PieceTypes
  isWhite: boolean
  x: number;
  y: number;
  /** 1.0 is full cooldown, 0 is none */
  cooldown: number; 
}

interface Vector2 {
  x: number;
  y: number;
}