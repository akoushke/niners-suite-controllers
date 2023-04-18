<script lang="ts">
  import Logo from '../widgets/logo.svelte';
  import Lutron from '../widgets/lutron.svelte';
  import NEC from '../widgets/nec.svelte';
</script>

<section>
  <div class="main tile is-ancestor p-4">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <Logo />
          <Lutron />
        </div>
        <div class="tile is-parent">
          <NEC />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  * {
    border: 1px black dashed;
  }
  .main {
    height: 100vh;
  }
</style>
