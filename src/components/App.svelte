<script lang="ts">
  import Chessboard from "./Chessboard.svelte";
	import { game } from "../stores"
	import { Player } from "../types";
	import PlayerSelector from "./PlayerSelector.svelte";


	window.onkeydown = (ev) => {
		switch (ev.key) {
			case "w":
				move(Player.ONE, {x:0,y:-1})
				break;
			case "s":
				move(Player.ONE, {x:0,y:1})
				break;
			case "a":
				move(Player.ONE, {x:-1,y:0})
				break;
			case "d":
				move(Player.ONE, {x:1,y:0})
				break;


			case "ArrowUp":
				move(Player.TWO, {x:0,y:-1})
				break;
			case "ArrowDown":
				move(Player.TWO, {x:0,y:1})
				break;
			case "ArrowLeft":
				move(Player.TWO, {x:-1,y:0})
				break;
			case "ArrowRight":
				move(Player.TWO, {x:1,y:0})
				break;
		}
	}

	// TODO: refactor this to be a game function
	function move(player: Player, dir: Vector2) {
		if (player == Player.ONE) {
			$game.player1Cursor.x += dir.x
			$game.player1Cursor.y += dir.y
		}
		else if (player == Player.TWO) {
			$game.player2Cursor.x += dir.x
			$game.player2Cursor.y += dir.y
		}
	}
</script>

<main>
  <h1>asynchess</h1>
  <!-- I should probably have game state in global store instead of passing that to these -->
	<div class="boardsHolder">
		<div>
			<h3>White (Player 1)</h3>
			<Chessboard />
		</div>
	
		<div>
			<h3>Black (Player 2)</h3>
			<Chessboard flipped={true} />
		</div>
	</div>
</main>

<style>
	.boardsHolder {
		display: flex;
		justify-content: space-around;
	}
</style>
