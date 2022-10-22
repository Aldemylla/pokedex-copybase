<template>
  <section class="pokemon__about">
    <h3>About</h3>
    <main>
      <dl>
        <div class="definition__container">
          <dd>
            <img src="@/assets/icons/balance.svg" alt="" />
            <p>{{ weight }} kg</p>
          </dd>
          <dt>Weight</dt>
        </div>

        <div class="definition__container">
          <dd>
            <img src="@/assets/icons/scale.svg" alt="" />
            <p>{{ height }} m</p>
          </dd>
          <dt>Height</dt>
        </div>

        <div class="definition__container">
          <dd>{{ specialMove }}</dd>
          <dt>Special Move</dt>
        </div>
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

<style lang="scss" scoped>
.pokemon__about {
  width: 100%;

  display: grid;
  justify-items: center;
  gap: 30px;

  dl {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 480px) {
      grid-template-columns: none;
      gap: 20px;
    }

    .definition__container {
      display: grid;
      justify-items: center;

      dt {
        color: $gray;
      }

      dd {
        display: flex;
        gap: 10px;

        color: $dark-gray;
      }
    }
  }
}
</style>
