<script lang="ts">
	import Chessboard from './Chessboard.svelte'

</script>

<main>
	<h1> asynchess </h1>
	<!-- I should probably have game state in global store instead of passing that to these -->
	<h3>board 1</h3>
	<Chessboard/>

	<h3>board 2</h3>
	<Chessboard flipped={true}/>
</main>

<style>

</style>