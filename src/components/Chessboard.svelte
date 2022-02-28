<script lang="ts">
  import ChessGrid from "./ChessGrid.svelte";
  import ChessPieces from "./ChessPieces.svelte";
  import PremoveMarkers from "./PremoveMarkers.svelte";
  import PlayerSelector from "./PlayerSelector.svelte";
  import { game } from "../stores";
  import { Player } from "../types";

  export let flipped = false;
</script>

<div class="mainHolder">
  <ChessGrid />
  <ChessPieces {flipped} />
  <PremoveMarkers />
  <PlayerSelector {flipped} />
</div>

<style>
  .mainHolder {
    position: relative;
    width: 500px;
    height: 500px;

    -webkit-box-shadow: 5px 5px 15px 5px #7d7d7d;
    box-shadow: 5px 5px 15px 5px #7d7d7d;
  }
</style>
