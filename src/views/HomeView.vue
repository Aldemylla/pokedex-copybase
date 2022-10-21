<template>
  <main>
    <p>Hello, World!</p>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getAllPokemons();
  },

  methods: {
    ...mapActions(['getAllPokemons'])
  }
};
</script>
