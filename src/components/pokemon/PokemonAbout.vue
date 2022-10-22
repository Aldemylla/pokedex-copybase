<template>
  <section class="pokemon__about">
    <h3>About</h3>
    <main>
      <dl>
        <dt>
          <img src="" alt="" />
          <p>{{ weight }} kg</p>
        </dt>
        <dt>Weight</dt>

        <dd>
          <img src="" alt="" />
          <p>{{ height }} m</p>
        </dd>
        <dt>Height</dt>

        <dd>{{ specialMove }}</dd>
        <dt>Special Move</dt>
      </dl>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    weight: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    specialMove: {
      type: String,
      required: true
    }
  }
};
</script>
