<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { game } from "../stores";
  export let flipped: boolean;

  $: cursorX = flipped ? $game.player2Cursor.x : $game.player1Cursor.x;
  $: cursorY = flipped ? $game.player2Cursor.y : $game.player1Cursor.y;
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
</script>

<div style="top:{$animatedY * 12.5}%; left: {$animatedX * 12.5}%" />

<style>
  div {
    box-sizing: border-box;
    position: absolute;
    width: 12.5%;
    height: 12.5%;
    border: solid 4px green;
  }
</style>
