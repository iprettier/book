<template>
  <div :class="{'menu-dropdown':isShow===true,'menu-dropdown-active':isShow===false}">
    <div class="dropdown-wrap">
      <a href="index.html">
        <img class="icon" src="@/assets/images/icon/home-icon.png" alt="" />
        首页
      </a>
      <a href="#">
        <img class="icon" src="@/assets/images/icon/category-icon.png" alt="" />
        分类
      </a>
      <a href="#">
        <img class="icon" src="@/assets/images/icon/list-icon.png" alt="" />
        排行
      </a>
      <a href="#">
        <img class="icon" src="@/assets/images/icon/complete-icon.png" alt="" />
        完本
      </a>
      <a href="#">
        <img class="icon" src="@/assets/images/icon/user-icon.png" alt="" />
        账户
      </a>
    </div>
    <a href="#" class="btn-center">我的书架</a>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: 'Dmenu',
  setup() {
    const store = useStore()
    const isShow = computed(() => store.state.search.isShow)
    console.log(isShow);
    return { isShow }
  }
};
</script>

<style scoped>
.menu-dropdown {
  z-index: 899;
  position: absolute;
  left: 0;
  padding: 1rem 0 0.8rem;
  width: 100%;
  background: #fff;
  -webkit-box-shadow: 0 0 5px #ddd;
          box-shadow: 0 0 5px #ddd;
  -webkit-transform: translateY(-141%);
          transform: translateY(-141%);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.menu-dropdown .dropdown-wrap {
  overflow: hidden;
}
.menu-dropdown .dropdown-wrap a {
  text-align: center;
  float: left;
  width: 20%;
  line-height: 1.5rem;
  font-size: 0.4rem;
}
.menu-dropdown .dropdown-wrap a .icon {
  display: block;
  margin: 0 auto;
  width: 0.7rem;
  height: 0.7rem;
}
.menu-dropdown .btn-center {
  background: #f47983;
  color: #fff;
  width: 6.52rem;
  display: block;
  text-align: center;
  line-height: 1.2rem;
  margin: 0.8rem auto 0;
  border-radius: 0.2rem;
  font-size: 0.5rem;
}

.menu-dropdown-active {
  z-index: 899;
  position: absolute;
  left: 0;
  padding: 1rem 0 0.8rem;
  width: 100%;
  background: #fff;
  -webkit-box-shadow: 0 0 5px #ddd;
          box-shadow: 0 0 5px #ddd;
  -webkit-transform: translateY(0);
          transform: translateY(0);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
</style>