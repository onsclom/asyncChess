<script lang="ts">
  import { PieceTypes } from '../types';
  import ChessPiece from './ChessPiece.svelte'
  // import { PieceTypes } from '../types';

  export let pieces: VisualPiece[] = [ 
    {
      type: PieceTypes.King,
      isWhite: true,
      x: 0,
      y: 2,
      cooldown: 0
    }
   ]
</script>

<div>
  {#each pieces as piece}
    <ChessPiece {piece}/>
  {/each}
</div>

<style>
</style>