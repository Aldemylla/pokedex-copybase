<template>
  <section class="pokemon__base-stats">
    <h3>Base Stats</h3>

    <div class="stats">
      <PokemonStat :stat="hp.stat.name" :base-stat="hp.base_stat" />
      <PokemonStat :stat="attack.stat.name" :base-stat="attack.base_stat" />
      <PokemonStat :stat="defense.stat.name" :base-stat="defense.base_stat" />
      <PokemonStat
        :stat="specialAttack.stat.name"
        :base-stat="specialAttack.base_stat"
      />
      <PokemonStat
        :stat="specialDefense.stat.name"
        :base-stat="specialDefense.base_stat"
      />
      <PokemonStat :stat="speed.stat.name" :base-stat="speed.base_stat" />
    </div>
  </section>
</template>

<script>
import PokemonStat from './PokemonStat.vue';
export default {
  components: { PokemonStat },

  props: {
    stats: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      hp: this.statisticsFilter('hp'),
      attack: this.statisticsFilter('attack'),
      defense: this.statisticsFilter('defense'),
      specialAttack: this.statisticsFilter('special-attack'),
      specialDefense: this.statisticsFilter('special-defense'),
      speed: this.statisticsFilter('speed')
    };
  },

  methods: {
    statisticsFilter(statistic) {
      const foundStat = this.stats.find((stat) => stat.stat.name === statistic);
      return foundStat;
    }
  }
};
</script>

<style lang="scss" scoped>
.pokemon__base-stats {
  width: 100%;
  display: grid;
  justify-items: center;
  .stats {
    width: 100%;
  }
}
</style>
