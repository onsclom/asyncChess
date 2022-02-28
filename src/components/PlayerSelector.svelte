<script lang="ts">
    import { game } from '../stores';

    export let flipped: boolean;

  //if flipped, show player2's selector
  $: position = flipped ? $game.player2Cursor : $game.player1Cursor
  
</script>

<div style="top:{position.y * 12.5}%; left: {position.x * 12.5}%"> </div>

<style>
  div {
    box-sizing: border-box;
    position: absolute;
    width: 12.5%;
    height: 12.5%;
    border: solid 4px green;
  }
</style>