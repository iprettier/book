<template>
  <nav class="module">
    <slot name="module">
      <a id="logout" href="#" class="center-logout">退出登录</a>
    </slot>
  </nav>
</template>

<script>
export default {
  name: "Module",
};
</script>

<style scoped>
.module {
  background-color: #fff;
  border-top: 0.3rem solid #f2f2f2;
}
.center-logout {
  font-size: 0.4rem;
  display: block;
  color: #ed424b;
  background: 0 0;
  text-align: center;
  line-height: 1.2rem;
}
</style>