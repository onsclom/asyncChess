/// <reference types="svelte" />

enum PieceTypes {
  Pawn="Pawn",
  Rook="Rook",
  Knight="Knight",
  Bishop="Bishop",
  Queen="Queen",
  King="King"
}

interface Vector2 {
  x: number;
  y: number;
}