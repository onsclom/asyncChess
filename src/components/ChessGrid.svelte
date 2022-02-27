<script lang="ts">
  // Background is an 8x8 white and black checkered pattern

  let grid: boolean[][] = [
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true],
    [true, false, true, false, true, false, true, false],
    [false, true, false, true, false, true, false, true]
  ];
</script>

<div class="gridHolder">
  {#each grid as row}
    {#each row as white}
      <div class="square" class:white/>
    {/each}
  {/each}
</div>

<style>
  .gridHolder {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .square {
    position: block;
    float: left;
    width: 12.5%;
    height: 12.5%;
    background-color: var(--black-square-color);
  }

  .white {
    background-color: var(--white-square-color);
  }
</style>
