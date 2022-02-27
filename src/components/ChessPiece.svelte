<script lang="ts">
  import BlackKing from './svg_components/BlackKing.svelte'
  export let piece: VisualPiece
  
  let pieceSVG = BlackKing
</script>

<div class="pieceContainer" style="top:{12.5*piece.y}%; left:{12.5*piece.x}%">
  <!-- piece should have cooldown thing in back -->
  <div class="cooldown" style="bottom: 0; height:{100*piece.cooldown}%"></div>
  <!-- piece should have piece svg on front -->
  <div class="piece">
    <svelte:component this={pieceSVG}/>
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
    background-color: red;
  }

  .piece {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>