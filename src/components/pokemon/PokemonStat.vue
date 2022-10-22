<template>
  <dt>{{ stat }}</dt>
  <dd>
    <label for="hp">0{{ baseStat }}</label>
    <progress id="hp" :value="baseStat" max="100">45%</progress>
  </dd>
</template>

<script>
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
  }
};
</script>
