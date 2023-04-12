<script lang="ts">
  let mute = 'volume-off';
</script>

<article class="tile is-child notification is-info">
  <div class="buttons is-fullheight">
    <div class="tile is-fullheight is-ancestor">
      <div class="tile is-fullheight is-vertical is-12">
        <div class="tile is-parent is-justify-content-space-between">
          <button
            class="button powerButton"
            on:click={() => {
              mute = mute === 'volume-off' ? 'volume-high' : 'volume-off';
            }}
          >
            <span class="icon is-small">
              <i class="mdi mdi-{mute} mdi-48px" />
            </span>
          </button>
          <button class="button powerButton">
            <span class="icon is-small">
              <i class="mdi mdi-power mdi-48px" />
            </span>
          </button>
        </div>
        <div class="tile is-fullheight is-parent">
          <div class="tile is-justify-content-space-evenly is-vertical">
            <button class="button volumeButton"
              ><span class="icon is-large">
                <i class="mdi mdi-volume-plus mdi-48px" />
              </span></button
            >
            <button class="button volumeButton"
              ><span class="icon is-large">
                <i class="mdi mdi-volume-minus mdi-48px" />
              </span></button
            >
          </div>
          <div class="tile is-justify-content-space-evenly is-vertical">
            <button class="button utilityButton"
              ><span class="icon is-large">
                <i class="mdi mdi-import mdi-48px" />
              </span></button
            >
            <button class="button utilityButton"
              ><span class="icon is-large">
                <i class="mdi mdi-monitor-share mdi-48px" />
              </span></button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</article>

<style>
  .buttons {
    height: 100%;
  }

  .powerButton {
    border-radius: 50%;
    background-color: #bfbb9a;
  }

  .volumeButton {
    height: 10rem;
    width: 5rem;
  }

  .utilityButton {
    height: 10rem;
    width: 20rem;
  }
</style>
