<template>
  <nav class="home__nav">
    <button :disabled="!pages.previous" @click="getPreviousPage">
      &#129044; Prev
    </button>
    <button :disabled="!pages.next" @click="getNextPage">Next &#129042;</button>
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

<style lang="scss" scoped>
.home__nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    padding: 1px 25px;
    font-size: 1.2rem;
    color: $white;

    border: none;
    border-radius: 10px;
    background: $gray;

    cursor: pointer;

    &:hover {
      background: $medium-gray;
    }

    &:active {
      background: $dark-gray;
    }

    &:disabled {
      color: $gray;
      background: $light-gray;

      cursor: not-allowed;
    }
  }
}
</style>
