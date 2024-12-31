<script setup lang="ts">
import HomeHeader from '@/components/home-header/index.vue'
import HomeFooter from '@/components/home-footer/index.vue'

import { homeHeader } from '../data/home-header.ts'
</script>

<template>
  <div class="home">
    <home-header :datas="homeHeader" />
    <router-view />
    <!-- <home-footer /> -->
  </div>
</template>

<style lang="less" scoped>
.home {
  color: inherit;
}
</style>
