<script lang="ts">
  import { onMount } from 'svelte';

  let today = new Date();

  $: hours = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
  $: minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
  $: seconds = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();

  let checkedValue = true;

  function handleChange(e) {
    const { checked } = e.detail;
    checkedValue = checked;
  }

  onMount(() => {
    const interval = setInterval(() => {
      today = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<article
  class="tile is-child notification"
  style="background-image: url(https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/49ers/ngl9kqasejtsekk6i7rw);     background-size: cover;
"
>
  <div class="columns mb-0">
    <div class="column py-1">
      <p class="title is-size-4">Suite 201</p>
    </div>
    <div class="column is-flex-direction-column py-1 is-flex is-justify-content-flex-end is-align-items-flex-end">
      <p class="title m-0 mb-1 is-size-7">{today.toDateString()}</p>
      <div class="is-flex">
        <div class="title has-text-weight-bold clock is-size-7">{hours}</div>
        <div class="title has-text-weight-bold is-size-7">:</div>
        <div class="title has-text-weight-bold clock is-size-7">{minutes}</div>
        <div class="title has-text-weight-bold is-size-7">:</div>
        <div class="title has-text-weight-bold clock is-size-7">{seconds}</div>
      </div>
    </div>
  </div>
</article>

<style>
  .is-brand-background {
    object-fit: cover;
  }

  .clock {
    width: 1.2rem;
  }

  hr {
    background-color: hsl(0, 0%, 21%);
    margin: 0 auto;
    border: 0;
    height: 1px;
  }
</style>
