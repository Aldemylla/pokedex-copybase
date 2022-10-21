<template>
  <nav>
    <button :disabled="!pages.previous" @click="getPreviousPage">Prev</button>
    <button :disabled="!pages.next" @click="getNextPage">Next</button>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      pages: 'getRequestPages'
    })
  },

  methods: {
    ...mapActions(['getPreviousPage', 'getNextPage'])
  }
};
</script>
