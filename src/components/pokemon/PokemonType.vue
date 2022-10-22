<template>
  <a
    :href="'https://bulbapedia.bulbagarden.net/wiki/' + type + '_(type)'"
    target="_blank"
    :style="{
      background: pokeTypeColor
    }"
  >
    {{ type }}
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      pokeTypeColor: `var(--poke-type-${this.type})`
    };
  }
};
</script>

<style lang="scss" scoped>
a {
  padding: 5px 10px;

  border-radius: 100px;

  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: $white;

  cursor: pointer;

  &:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
