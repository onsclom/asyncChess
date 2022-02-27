<script lang="ts">
  import ChessGrid from './ChessGrid.svelte'
  import ChessPieces from './ChessPieces.svelte'
  import PremoveMarkers from './PremoveMarkers.svelte'
  import PlayerSelector from './PlayerSelector.svelte'

  export let flipped = false;
</script>

<div class="mainHolder">
  <ChessGrid/> 
  <ChessPieces/>
  <PremoveMarkers/>
  <PlayerSelector/>
</div>

<style>
  .mainHolder {
    position: relative;
    width: 500px;
    height: 500px;
  }
</style>