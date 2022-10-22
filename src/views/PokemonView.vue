<template>
  <div v-if="pokemon" class="pokemon">
    <header>
      <a href=""> {{ '<-' }} </a>
      <h1>Bulbasaur</h1>
      <h2>#001</h2>
    </header>
    <main>
      <section>
        <img src="" alt="" />
        <div class="types">
          <a
            href="https://bulbapedia.bulbagarden.net/wiki/Grass_(type)"
            target="_blank"
            >Grass</a
          >
          <a
            href="https://bulbapedia.bulbagarden.net/wiki/Poison_(type)"
            target="_blank"
            >Poison</a
          >
        </div>
      </section>
      <section class="pokemon__about">
        <h3>About</h3>
        <main>
          <dl>
            <dt>
              <img src="" alt="" />
              <p>6,9 kg</p>
            </dt>
            <dt>Weight</dt>

            <dd>
              <img src="" alt="" />
              <p>6,9 kg</p>
            </dd>
            <dt>Height</dt>

            <dd>Chlorophyll</dd>
            <dt>Special Move</dt>
          </dl>
        </main>
        <p class="more">
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </p>
      </section>
      <section class="pokemon__base-stats">
        <h3>Base Stats</h3>

        <div>
          <dt>HP</dt>
          <dd>
            <label for="hp">045</label>
            <progress id="hp" value="45" max="100">45%</progress>
          </dd>

          <dt>ATTACK</dt>
          <dd>
            <label for="attack">049</label>
            <progress id="attack" value="49" max="100">49%</progress>
          </dd>

          <dt>DEFENSE</dt>
          <dd>
            <label for="defense">049</label>
            <progress id="defense" value="49" max="100">49%</progress>
          </dd>

          <dt>SPECIAL-ATTACK</dt>
          <dd>
            <label for="special-attack">065</label>
            <progress id="special-attack" value="65" max="100">65%</progress>
          </dd>

          <dt>SPECIAL-DEFENSE</dt>
          <dd>
            <label for="special-defense">065</label>
            <progress id="special-defense" value="65" max="100">65%</progress>
          </dd>

          <dt>SPEED</dt>
          <dd>
            <label for="speed">045</label>
            <progress id="speed" value="45" max="100">45%</progress>
          </dd>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      error: 'getError',
      pokemon: 'getFilteredPokemon'
    })
  },
  watch: {
    error() {
      if (this.error && !this.pokemon) {
        this.$router.push({ path: '/error' });
      }
    }
  },

  created() {
    this.getPokemon();
  },

  methods: {
    ...mapActions(['getPokemon'])
  }
};
</script>
