<script lang="ts">
  let powerButton = 'power';
</script>

<article
  class="tile is-child notification is-flex is-align-items-center is-justify-content-center"
  style="background-color: #5e5e45b0"
>
  <div class="buttons">
    <button class="button lutronButton">
      <span class="icon is-small">
        <i class="mdi mdi-brightness-5 mdi-48px" />
      </span>
    </button>
    <button class="button lutronButton">
      <span class="icon is-small">
        <i class="mdi mdi-brightness-6 mdi-48px" />
      </span>
    </button>
    <button class="button lutronButton">
      <span class="icon is-small">
        <i class="mdi mdi-brightness-7 mdi-48px" />
      </span>
    </button>
    <button
      class="button lutronButton"
      on:click={() => {
        powerButton = powerButton === 'power' ? 'power-sleep' : 'power';
      }}
    >
      <span class="icon is-small">
        <i class="mdi mdi-{powerButton} mdi-48px" />
      </span>
    </button>
  </div>
</article>

<style>
  .lutronButton {
    border-radius: 50%;
    background-color: #bfbb9a;
  }
</style>
