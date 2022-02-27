import App from './components/App.svelte';

declare global {
  enum PieceTypes {
    Pawn,
    Rook,
    Knight,
    Bishop,
    Queen,
    King
  }
}

const app = new App({
	target: document.body
});

export default app;