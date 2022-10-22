<template>
  <a
    :href="'https://bulbapedia.bulbagarden.net/wiki/' + type + '_(type)'"
    target="_blank"
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
  }
};
</script>
