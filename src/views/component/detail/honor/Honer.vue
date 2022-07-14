<template>
  <div class="honor-labels">
    <a href="#" class="label-a">
      <p class="num">2419</p>
      <p class="tit">粉丝</p>
    </a>
    <a href="#" class="label-a">
      <p class="num">4.3<span>万</span></p>
      <p class="tit">打赏</p>
    </a>
    <a href="#" class="label-a">
      <p class="num">72</p>
      <p class="tit">月票</p>
    </a>
    <a href="#" class="label-a">
      <p class="num">7</p>
      <p class="tit">评价票</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "Honor",
  props: {
    honorInfo: [],
    default: () => []
  }
};
</script>

<style scoped>
.honor-labels {
  overflow: hidden;
}
.honor-labels .label-a {
  float: left;
  width: 25%;
  text-align: center;
  color: #999;
  font-size: 0.3rem;
  line-height: 0.38rem;
}
.honor-labels .label-a .num {
  font-size: 0.4rem;
  color: #333;
}
</style>