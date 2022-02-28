<script lang="ts">
  import type { PieceTypes, Piece } from '../types';
  import ChessPiece from './ChessPiece.svelte'
  import { game } from '../stores';
  
  export let flipped: boolean;
  // import { PieceTypes } from '../types';

  export let pieces: Piece[] = $game.pieces
</script>

<div>
  {#each pieces as piece}
    <ChessPiece {piece} {flipped}/>
  {/each}
</div>

<style>
</style>