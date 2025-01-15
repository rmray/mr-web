<script setup lang="ts"></script>

<template>
  <div class="webpack-logo">
    <h2>案例：webpack logo</h2>
    <div class="container">
      <div class="box box-outer">
        <div class="item item1"></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
      </div>
      <div class="box box-inner">
        <div class="item item1"></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  /* 背面是否可见 */
  --backface: visible;
  /* 透视设置 */
  --perspective: -1;
  /* z轴是否放大 */
  --zoom: 1;
}
* {
  padding: 0;
  margin: 0;
}
h2 {
  margin: 50px auto 0;
  width: 600px;
}
.container {
  position: relative;
  margin: 10px auto;
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  background-color: #2e3a41;
  /* background: url(../assets//images//grid.png), rgba(255, 0, 0, 0.1); */
}
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  /* background: skyblue; */
}

.box {
  position: absolute;
  transform: translate(100px, 100px) rotateX(-33.5deg) rotateY(45deg);
  perspective: var(--perspective);
  transform-style: preserve-3d;
}
.box .item {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: var(--backface);
  border: 1px solid #fff;
  background-color: #8dd6f980;
}
.box .item1 {
  transform: translateZ(50px);
}
.box .item2 {
  transform: rotateX(180deg) translateZ(50px);
}
.box .item3 {
  transform: rotateY(-90deg) translateZ(50px);
}
.box .item4 {
  transform: rotateY(90deg) translateZ(50px);
}
.box .item5 {
  transform: rotateX(90deg) translateZ(50px);
}
.box .item6 {
  transform: rotateX(-90deg) translateZ(50px);
}

/** 小盒子的单独样式 */
.box-inner {
  width: 50px;
  height: 50px;
  transform: translate(125px, 125px) rotateX(-33.5deg) rotateY(45deg);
}
.box-inner .item {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: var(--backface);
  background-color: #6399c4;
  border: 1px solid #fff;
}
.box-inner .item1 {
  transform: translateZ(25px);
}
.box-inner .item2 {
  transform: rotateX(180deg) translateZ(25px);
}
.box-inner .item3 {
  transform: rotateY(-90deg) translateZ(25px);
}
.box-inner .item4 {
  transform: rotateY(90deg) translateZ(25px);
}
.box-inner .item5 {
  transform: rotateX(90deg) translateZ(25px);
}
.box-inner .item6 {
  transform: rotateX(-90deg) translateZ(25px);
}

/** 动画-大盒子  */
.box-outer {
  animation: rotate 4s linear infinite;
}
@keyframes rotate {
  0%,
  75% {
    transform: translate(100px, 100px) rotateX(-33.5deg) rotateY(45deg);
  }
  100% {
    transform: translate(100px, 100px) rotateX(-33.5deg) rotateY(135deg);
  }
}

/** 动画-小盒子  */
.box-inner {
  animation: rotate-reverse 4s linear infinite;
}
@keyframes rotate-reverse {
  0%,
  75% {
    transform: translate(125px, 125px) rotateX(-33.5deg) rotateY(45deg);
  }
  100% {
    transform: translate(125px, 125px) rotateX(-33.5deg) rotateY(-45deg);
  }
}
</style>
