<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { game } from "../stores";
  export let flipped: boolean;

  $: cursorX = flipped ? 7-$game.player2Cursor.x : $game.player1Cursor.x;
  $: cursorY = flipped ? 7-$game.player2Cursor.y : $game.player1Cursor.y;
  const animatedX = tweened(cursorX, {
    duration: 200,
    easing: cubicOut,
  });
  const animatedY = tweened(cursorY, {
    duration: 200,
    easing: cubicOut,
  });
  $: animatedX.set(cursorX);
  $: animatedY.set(cursorY);

  $: curSelected = flipped ? $game.player2CurrentlySelected : $game.player1CurrentlySelected
  $: selectedSquareX = curSelected!=null ? curSelected.x : null
  $: selectedSquareY = curSelected!=null ? curSelected.y : null
</script>

<div class="cursor" style="top:{$animatedY * 12.5}%; left: {$animatedX * 12.5}%" />

{#if selectedSquareX != null}
  {#if flipped}
    <div class="selected" style="top:{ (7-selectedSquareY) * 12.5}%; left: { (7-selectedSquareX) * 12.5}%" />
  {:else}
    <div class="selected" style="top:{selectedSquareY * 12.5}%; left: {selectedSquareX * 12.5}%" />
  {/if}
{/if}

<style>
  div {
    box-sizing: border-box;
    position: absolute;
    width: 12.5%;
    height: 12.5%;
  }

  .cursor {
    border: solid 4px var(--selected-frame);
  }

  .selected {
    background-color: var(--selected-background) ;
  }
</style>
