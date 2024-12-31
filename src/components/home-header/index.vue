<script setup lang="ts">
import type { HomeHeaderItem } from '../../types/data'

const props = withDefaults(
  defineProps<{
    datas: HomeHeaderItem[]
  }>(),
  {
    datas: () => []
  }
)
</script>

<template>
  <div class="home-header">
    <div class="container">
      <template v-for="data in datas" :key="data.id">
        <router-link class="item" :to="data.path">{{ data.title }}</router-link>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/** 公共样式  */
a {
  color: #333;
  text-decoration: none;
}

.home-header {
  border-bottom: 1px solid #d3d4d5;

  .container {
    display: flex;
    justify-content: start;
    margin: 0 auto;
    width: 1280px;
    height: var(--header-height);

    .item {
      line-height: var(--header-height);
      padding: 0 10px;
    }
  }
}
</style>
