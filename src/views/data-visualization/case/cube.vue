<script setup lang="ts"></script>

<template>
  <div class="cube">
    <h2>案例：正方体</h2>
    <div class="container">
      <div class="box">
        <div class="item item1">front</div>
        <div class="item item2">back</div>
        <div class="item item3">left</div>
        <div class="item item4">right</div>
        <div class="item item5">top</div>
        <div class="item item6">bottom</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
h2 {
  margin: 50px auto 0;
  width: 600px;
}
.container {
  margin: 10px auto;
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  background: url(@/assets/images/grid.png), rgba(255, 0, 0, 0.1);
}
.box {
  width: 100px;
  height: 100px;
  /* background: skyblue; */
}

.box {
  position: relative;
  transform: translate(100px, 100px) rotateX(-33.5deg) rotateY(45deg) scaleZ(2);
  perspective: -1;
  transform-style: preserve-3d;
}
.box .item {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: visible;
}
.box .item1 {
  background-color: #ff00ff99;
  transform: translateZ(50px);
}
.box .item2 {
  background-color: #ffff0099;
  transform: rotateX(180deg) translateZ(50px);
}
.box .item3 {
  background-color: #00ffff99;
  transform: rotateY(-90deg) translateZ(50px);
}
.box .item4 {
  background-color: #f7730099;
  transform: rotateY(90deg) translateZ(50px);
}
.box .item5 {
  background-color: #ffff0099;
  transform: rotateX(90deg) translateZ(50px);
}
.box .item6 {
  background-color: #4000ff99;
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
