<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { PieceSVGs, Piece } from "../types";

  export let flipped: boolean;
  export let piece: Piece;
  $: pieceString = `${piece.isWhite ? "White" : "Black"}${piece.type}`;
  $: pieceSVG = PieceSVGs[pieceString];
  $: top = flipped ? 87.5 - 12.5 * piece.y : 12.5 * piece.y;
  $: left = flipped ? 87.5 - 12.5 * piece.x : 12.5 * piece.x;

  const animatedX = tweened(top, {
    duration: 200,
    easing: cubicOut,
  });
  const animatedY = tweened(left, {
    duration: 200,
    easing: cubicOut,
  });
  $: animatedX.set(left);
  $: animatedY.set(top);
</script>

<div class="pieceContainer" style="top:{$animatedY}%; left:{$animatedX}%">
  <!-- piece should have cooldown thing in back -->
  <div class="cooldown" style="bottom: 0; height:{100 * piece.cooldown}%" />
  <!-- piece should have piece svg on front -->
  <div class="piece">
    <svelte:component this={pieceSVG} />
  </div>
</div>

<style>
  .pieceContainer {
    position: absolute;
    width: 12.5%;
    height: 12.5%;
  }

  .cooldown {
    position: absolute;
    width: 100%;
    background-color: var(--cooldown-color);
  }

  .piece {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
