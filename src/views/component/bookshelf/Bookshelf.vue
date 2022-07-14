<template>
  <div class="m-container">
    <header class="header header-inner">
      <Dheader>
        <div class="btn-group btn-group-small">
          <h3 class="btn-group-cell" role="navigation" aria-label="已选择">
            <a href="#" class="btn-tab active">我的书架</a>
          </h3>
          <h3 class="btn-group-cell" role="navigation" aria-label="">
            <a href="#" class="btn-tab">最近阅读</a>
          </h3>
        </div>
      </Dheader>
      <Dmenu></Dmenu>
    </header>
    <div id="editBtnHeader" class="mybook-module-header">
      <header class="mybook-default-header" style="">
        <div class="module-header-l">
          <a
            href="javascript:"
            id="filterGroup"
            class="mybook-sub-title"
            role="combobox"
            title="点击出现浮层，可更换选项，选项列表在浮层底部"
          >
            <aria>请选择书架分组：</aria>
            <ul class="select-ul" id="bookGroupListSwitchtContainer">
              <li class="select-option selected" data-group-id="-100">
                默认书架(
                <span class="group-cnt">7</span>
                )
              </li>
            </ul>
            <i class="select-tri"></i>
          </a>
          <a
            href="javascript:"
            id="timeOrder"
            class="select-a"
            role="combobox"
            title="点击出现浮层，可更换选项，选项列表在浮层底部"
          >
            <aria>当前书架排序是按照：</aria>
            <ul class="select-ul">
              <li class="select-option selected" data-value="2" @click="show">阅读时间</li>
              <li class="select-option" data-value="0">更新时间</li>
            </ul>
            <img
              class="icon icon-order"
              src="@/assets/images/icon/sort-icon.png"
              alt=""
            />
          </a>
        </div>
        <a
          href="javascript:"
          id="bookEditBtn"
          class="header-opt-a-r"
          role="button"
          data-on="close"
          title="可对书架书籍分组或删除，操作栏在底部，选中任意一本书籍操作栏即出现"
          v-if="showOhide === true"
          @click="changeShow"
          >编辑</a
        >
        <a
          href="javascript:"
          id="bookEditBtn"
          class="header-opt-a-r"
          role="button"
          data-on="close"
          title="可对书架书籍分组或删除，操作栏在底部，选中任意一本书籍操作栏即出现"
          v-else
          @click="changeHide"
          >取消</a
        >
      </header>
    </div>
    <ListContent></ListContent>
    <!--页面脚本-->
    <aside class="aside" data-is-bind-scroll="true" @click="hide" :class="{active:isShow===false}">
        <i class="aside-overlay" role="button" title="点击关闭浮层"></i>
        <div class="aside-popup">
            <div class="select-select scrollable" role="listbox">
                <a href="javascript:" role="option" title="点击可选择该项，并隐藏浮层" class="select-option selected">阅读时间</a>
                <a href="javascript:" role="option" title="点击可选择该项，并隐藏浮层" class="select-option">更新时间</a>
            </div>
        </div>
    </aside>
    <Footer></Footer>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ListContent from "./list-content/ListContent.vue"
export default {
  name: "Bookshelf",
  components: { ListContent },
  setup() {
    const store = useStore()
    const show = () => {
      store.commit('search/changeState')
    }
    const hide = () => {
      store.commit('search/hideState')
    }
    const isShow = computed(()=>store.state.search.isShow)
    const showOhide = computed(()=>store.state.search.show)
    const changeShow = () => {
      store.commit('search/changeShow')
      console.log(store.state.search.show);
    }
    const changeHide = () => {
      store.commit('search/changeHide')
    }
    return { show,hide,isShow,changeShow,changeHide,showOhide }
  }
};
</script>

<style scoped>
.m-container {
  background-color: #fff;
  min-height: calc(100vh - 2.9rem - 2px);
}
.header {
  padding: 0 0.3rem;
}
.center-header {
  overflow: hidden;
  min-height: 7.8rem;
  margin-top: -2.75rem;
  text-align: center;
  color: #fff;
  background: #ed424b url("@/assets/images/center-bg.jpg") no-repeat center;
  background-size: cover;
}
.center-header-img {
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 3rem;
  vertical-align: bottom;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 4rem;
}
.center-header-p {
  margin: 0.25rem 0 0.125rem;
  font-size: 0.4rem;
}
.btn-group {
  display: table;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  table-layout: fixed;
}
.btn-group .btn-group-cell {
  font-size: 100%;
  font-weight: 400;
  display: table-cell;
}
.btn-group-cell:first-child > .btn-tab {
  border-radius: 4px 0 0 4px;
}
.btn-group-cell:last-child > .btn-tab {
  border-radius: 0 4px 4px 0;
}
.btn-group-small .btn-tab {
  line-height: 0.75rem;
  padding: 0 0.32rem;
}
.btn-group-small .active {
  color: #fff;
  background-color: #ed524b;
}
.btn-tab {
  font-size: 0.4rem;
  line-height: 0.83rem;
  display: block;
  padding: 0 0.25rem;
  text-align: center;
  color: #ed524b;
  border: 1px solid #ed524b;
}
.mybook-module-header {
  line-height: 0.75rem;
  overflow: hidden;
  height: 1.2rem;
}
aria {
  font-size: 0;
}
.mybook-default-header[style] {
  z-index: 2;
  right: 0;
  left: 0;
  border-bottom: 1px solid #f0f1f2;
  background-color: #fff;
}
.mybook-default-header {
  position: relative;
  height: 0.8rem;
  padding: 0.2rem 0.3rem;
}
.module-header-l {
  float: left;
}
.mybook-sub-title {
  font-size: 0.4rem;
  font-weight: 700;
  line-height: 0.8rem;
  display: inline-block;
  margin-right: 0.15rem;
}
.mybook-sub-title .selected {
  display: inline-block;
  overflow: hidden;
  max-width: 50vw;
  vertical-align: bottom;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.select-ul {
  display: inline-block;
}
.icon-order {
  width: 0.4rem;
  height: 0.4rem;
}
.select-tri {
  display: inline-block;
  margin-left: 0.25ch;
  border: 4px solid transparent;
  border-top-color: currentColor;
}
.select-a {
  font-size: 0.4rem;
  display: inline-block;
  color: #4284ed;
}
.select-option {
  display: none;
}
.selected {
  display: block;
}
.header-opt-a-r {
  right: 0;
  font-size: 0.4rem;
  line-height: 1.25rem;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0 0.3rem;
}
.aside {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  visibility: hidden;
  overflow: hidden;
  -webkit-transition: visibility 0.25s;
  transition: visibility 0.25s;
}
.aside .scrollable {
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.select-select {
  max-height: 90vh;
  max-height: calc(100vh - 2.5rem);
}
.aside-overlay {
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
  opacity: 0;
  background-color: #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: auto;
}
.aside-popup {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition: -webkit-transform 0.15s;
  transition: -webkit-transform 0.15s;
  transition: transform 0.15s;
  transition: transform 0.15s, -webkit-transform 0.15s;
  background-color: #fff;
}
.aside-popup .select-option {
  font-size: 0.4rem;
  line-height: 1.3rem;
  position: relative;
  display: block;
  padding-left: 0.5rem;
}
.aside-popup .selected::after {
  position: absolute;
  top: 0;
  right: 0.5rem;
  bottom: 0;
  width: 15px;
  height: 10px;
  margin: auto;
  content: '';
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNSAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC45NyA5LjUzYS43NS43NSAwIDAgMCAxLjA2IDBsOC04QS43NS43NSAwIDAgMCAxMi45Ny40N2wtOCA4aDEuMDZsLTQuNS00LjVBLjc1Ljc1IDAgMSAwIC40NyA1LjAzbDQuNSA0LjV6IiBmaWxsPSIjRUU0MjRCIi8+PC9zdmc+Cg==") no-repeat center;
}
.active {
  visibility: visible;
  -webkit-transition: none;
  transition: none;
}
.active .aside-overlay {
  opacity: 0.6;
}
.active .aside-popup {
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}
.aside-popup .select-option + .select-option::before {
  display: block;
  content: '';
  border-top: 1px solid #f0f1f2;
}
</style>