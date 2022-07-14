<template>
  <nav class="nav-wrap" :style="{'background-color': cstyle.bgc,color:cstyle.color}">
    <a
      id="newheaderback"
      href="javascript:;"
      onclick="back();"
      class="back-icon"
    >
      <img src="@/assets/images/icon/back-icon.png" class="icon" alt="" />
    </a>
    <h1><slot></slot></h1>
    <div class="menu-side">
      <a id="detailMenuSearch" href="#" class="nav-icon">
        <img class="icon" src="@/assets/images/icon/search-icon2.png" alt="" />
      </a>
      <a href="javascript:;" class="nav-icon menu-switch">
        <img
          src="@/assets/images/icon/menu-icon.png"
          class="icon icon-show"
          alt=""
          v-if="isShow"
          @click="change"
        />
        <img
          src="@/assets/images/icon/close-icon.png"
          class="icon icon-close"
          alt=""
          v-else
          @click="hide"
        />
      </a>
    </div>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: "Dheader",
  props: {
    bgc: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const store = useStore()
    const change = () => {
      store.commit('search/changeState')
    }
    const hide = () => {
      store.commit('search/hideState')
    }
    const isShow = computed(() => store.state.search.isShow)
    const cstyle = {
      bgc: props.bgc,
      color: props.color
    }
    return { change,isShow,hide,cstyle }
  }
};
</script>

<style scoped>
.nav-wrap {
  height: 1.2rem;
  line-height: 1rem;
  display: -webkit-box;
  -webkit-box-align: center;
}
.icon {
  width: 1.6em;
  height: 1.6em;
  vertical-align: -0.1em;
  fill: currentColor;
  overflow: hidden;
}
.header-inner {
  padding: 0;
}
.header-inner .nav-wrap {
  position: relative;
  color: #666;
  height: 1.3rem;
  z-index: 900;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.header-inner .nav-wrap .back-icon {
  position: absolute;
  left: 0.3rem;
  top: 0.4rem;
  display: block;
}
.header-inner .nav-wrap h1 {
  text-align: center;
  -webkit-box-flex: 1;
  font-size: 0.4rem;
  font-weight: normal;
}
.header-inner .nav-wrap .menu-side {
  position: absolute;
  right: 0.15rem;
  top: 0.4rem;
}
.header-inner .nav-wrap .menu-side .nav-icon {
  float: left;
  padding: 0 0.35rem;
}
.header-inner .nav-wrap .menu-side .menu-switch .icon-close {
  display: inline-block;
}
</style>