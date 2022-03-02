<script lang="ts">
  import Chessboard from "./Chessboard.svelte";
	import { game } from "../stores"
	import { Player } from "../types";
	import * as gamepad from "../gamepad"


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
			case "e":
				$game.playerSelect(Player.ONE)
				$game=$game
				break;

			case "ArrowUp":
				move(Player.TWO, {x:0,y:1})
				break;
			case "ArrowDown":
				move(Player.TWO, {x:0,y:-1})
				break;
			case "ArrowLeft":
				move(Player.TWO, {x:1,y:0})
				break;
			case "ArrowRight":
				move(Player.TWO, {x:-1,y:0})
				break;
			case "/":
				$game.playerSelect(Player.TWO)
				$game=$game
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

	const inputMap = {
		"P0B15": () => {move(Player.ONE, {x:1,y:0})},
		"P0B14": () => {move(Player.ONE, {x:-1,y:0})},
		"P0B13": () => {move(Player.ONE, {x:0,y:1})},
		"P0B12": () => {move(Player.ONE, {x:0,y:-1})},
		"P0B0": () => {$game.playerSelect(Player.ONE)},
		"P0B2": () => {$game.playerSelect(Player.ONE)},

		"P1B15": () => {move(Player.TWO, {x:-1,y:0})},
		"P1B14": () => {move(Player.TWO, {x:1,y:0})},
		"P1B13": () => {move(Player.TWO, {x:0,y:-1})},
		"P1B12": () => {move(Player.TWO, {x:0,y: 1})},
		"P1B0": () => {$game.playerSelect(Player.TWO)},
		"P1B2": () => {$game.playerSelect(Player.TWO)},
	}
	const cooldownSeconds = 5;
	
	function animateLoop() {
		// get delta
		let current = Date.now()
		let delta = current - lastFrame
		lastFrame = current

		let pressed = gamepad.getButtonsJustPushed()
		for (let button in pressed) {
			if (button in inputMap)
				inputMap[button]()
		}

		for (let piece of $game.pieces) {
			if (piece && piece.cooldown) {
				piece.cooldown -= delta/1000/cooldownSeconds
				if (piece.cooldown < 0)
					piece.cooldown = 0
			}
		}

		$game=$game
		requestAnimationFrame(animateLoop)
	}
	let lastFrame = Date.now()
	animateLoop()
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
