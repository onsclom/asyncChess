<script lang="ts">
  import ChessPiece from './ChessPiece.svelte'
  import { game } from '../stores';
  
  export let flipped: boolean;

 $: pieces = $game.pieces
</script>

<div>
  {#each pieces as piece}
    {#if piece != null}
       <ChessPiece {piece} {flipped}/>
    {/if}
  {/each}
</div>

<style>
</style>