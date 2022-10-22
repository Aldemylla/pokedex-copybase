<template>
  <div class="stat">
    <dt class="title">{{ stat }}</dt>
    <dd class="description">
      <label for="hp">0{{ baseStat }}</label>
      <!-- <progress id="hp" :value="baseStat" max="100">45%</progress> -->
      <div class="progress-bar">
        <div
          class="progress-value"
          :style="{ width: baseStat + '%', background: pokeTypeColor }"
        ></div>
      </div>
    </dd>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    stat: {
      type: String,
      required: true
    },
    baseStat: {
      type: Number,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      pokeTypeColor: 'getFilteredPokemonTypeColor'
    })
  }
};
</script>

<style lang="scss" scoped>
.stat {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &:not(:last-child) {
    border-bottom: 2px solid $light-gray;
    border-box: 10px;
    padding: 15px 0;
  }
  .title {
    text-transform: uppercase;
    font-weight: 600;
  }
  .description {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;

    color: $dark-gray;

    .progress-bar {
      width: 100%;
      height: 100%;

      background: $light-gray;
      border-radius: 100px;
      .progress-value {
        height: 100%;

        border-radius: inherit;
      }
    }
  }
}
</style>
