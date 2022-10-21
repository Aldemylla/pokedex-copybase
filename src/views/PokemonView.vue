<template>
  <p>Pokemon</p>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.getPokemon();
  },

  methods: {
    ...mapActions(['getPokemon'])
  }
};
</script>
