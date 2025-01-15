<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <div class="box box1">
      <img src="@/assets/images/moon.jpg" width="200" height="250" alt="" />
      <div class="mask"></div>
    </div>

    <div class="box box2">
      <img src="@/assets/images/moon.jpg" width="200" height="250" alt="" />
    </div>

    <div class="box3">
      <!-- 出错：没有设置高度，导致图片显示不全 -->
      <svg height="300">
        <defs>
          <filter id="blur">
            <!-- 出错：单次写错了 -->
            <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          </filter>
        </defs>
        <image href="@/assets/images/moon.jpg" width="200" height="250" filter="url(#blur)"></image>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box1 {
  position: relative;
  width: 200px;
  height: 250px;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /** 高斯模糊效果1 */
    background-color: transparent;
    backdrop-filter: blur(3px);
  }
}

.box2 img {
  /** 高斯模糊效果2 */
  filter: blur(3px);
}
</style>
