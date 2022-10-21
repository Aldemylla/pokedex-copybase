<template>
  <div>
    <HomeHeader />
    <HomeSearch />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeSearch from '@/components/HomeSearch.vue';

export default {
  components: { HomeHeader, HomeSearch }
};
</script>
