<template>
  <div class="classfication-sort">
    <div class="sort-filtrate" id="sort-btn" @click.stop="change">
      筛选
      <img class="icon icon-show" src="@/assets/images/icon/sort-icon.png" alt="" />
    </div>
    <div class="sort-wrap">
      <a href="javascript:;" class="active">综合</a>
      <a href="javascript:;" class="">热门</a>
      <a href="javascript:;" class="">点击</a>
      <a href="javascript:;" class="">收藏</a>
      <a href="javascript:;" class="">更新</a>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: "SearchNav",
  setup() {
    const store = useStore();
    const change = () => {
      store.commit("search/changeState");
    };
    return { change };
  },
};
</script>

<style scoped>
.classfication-sort {
  line-height: 0.66rem;
  height: 0.76rem;
  color: #999;
  font-size: 0.4rem;
  padding: 0.1rem 0 0.24rem;
}
.classfication-sort .sort-wrap {
  margin: 0.1rem 0 0 0.1rem;
  overflow: hidden;
}
.classfication-sort .sort-wrap a {
  margin: 0 0.35rem;
  float: left;
  color: #999;
}
.classfication-sort .sort-wrap .active {
  font-size: 0.45rem;
  color: #f47983;
  position: relative;
  height: 0.8rem;
}
.sort-filtrate {
  float: right;
  margin: 0.1rem 0.3rem 0 0.3rem;
  color: #f47983;
}
.sort-filtrate .icon {
  font-size: 0.1rem;
  vertical-align: middle;
  margin: -0.04rem 0 0 0.1rem;
}
.sort-filtrate .icon-show {
  width: 0.4rem;
  height: 0.4rem;
}
</style>