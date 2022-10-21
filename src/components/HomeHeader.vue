<template>
  <header class="weather__header">
    <img src="@/assets/icons/pokedex.svg" alt="Pokédex icon" />
    <h1 class="title">Pokédex</h1>
  </header>
</template>

<style lang="scss" scoped>
.weather__header {
  height: 100%;

  display: flex;
  align-items: center;
  gap: 16px;

  img {
    max-height: 2rem;
  }
  .title {
    font-weight: 600;
    font-size: 2rem;
    color: $dark-gray;
  }
}
</style>
