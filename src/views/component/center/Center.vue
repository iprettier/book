<template>
  <div class="m-container">
    <header class="header header-inner center_header">
      <Dheader bgc="#ed424b" color="#fff">用户中心</Dheader>
      <Dmenu></Dmenu>
    </header>
    <div class="center-header">
      <img
        src="@/assets/images/avatar/avatar-2.jpg"
        class="center-header-img"
        alt="一个小用户"
      />
      <p class="center-header-p">一个小用户</p>
      <img
        class="icon-level-2"
        src="@/assets/images/icon/range-icon.png"
        alt=""
      />
    </div>
    <dl class="piao_list">
      <dd v-for="(item, index) in ticket" :key="index">
        <span>{{ item.total }}</span
        >{{ item.text }}
      </dd>
    </dl>
    <Module>
      <template v-slot:module>
        <ul class="center-nav-ol">
          <li
            class="book-li"
            role="link"
            v-for="(item, index) in data"
            :key="index"
          >
            <a href="#" class="book-layout" role="option">
              <h3 class="book-title">
                <img
                  class="icon"
                  src="@/assets/images/icon/ling-icon.png"
                  alt=""
                />
                {{ item.text }}
              </h3>
              <span class="book-author">
                <img
                  class="icon icon-arrow-r"
                  src="@/assets/images/icon/right-icon.png"
                  alt=""
                />
              </span>
            </a>
          </li>
        </ul>
      </template>
    </Module>
    <Module>
    </Module>
    <Footer></Footer>
  </div>
</template>

<script>
import Dmenu from "../detail/d-menu/d-menu.vue";
import Module from "./module/Module.vue";
export default {
  name: "center",
  components: { Dmenu, Module },
  setup() {
    const ticket = [
      { id: 1, total: 0, text: "虚拟币" },
      { id: 2, total: 0, text: "月票" },
      { id: 3, total: 0, text: "评价票" },
    ];
    const data = [
      { id: 1, imgsrc: "", text: "消息中心" },
      { id: 2, imgsrc: "", text: "会员等级" },
      { id: 3, imgsrc: "", text: "经验等级" },
    ];
    return { ticket, data };
  },
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

::v-deep .Dheader {
  background-color: #ed424b;
  color: #fff;
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
.icon-level-2 {
  width: 0.55rem;
  height: 0.55rem;
}
.piao_list {
  display: -webkit-box;
  display: -moz-box;
  width: 100%;
  margin-top: -1.65rem;
}
.piao_list dd {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  text-align: center;
  font-size: 12px;
  color: #878787;
  padding: 8px 0 10px;
  border-top: 1px dashed #fff;
  border-bottom: 1px solid #e5e5e5;
  width: 25%;
  background: rgba(255, 255, 255, 0.8);
}
.piao_list dd span {
  display: block;
  font-size: 16px;
  color: #ff6000;
}
.center-nav-ol {
  line-height: 1.25rem;
}
.center-nav-ol .book-title {
  font-size: 0.4rem;
  float: left;
}
.center-nav-ol .book-title img {
  margin-right: 0.3rem;
  vertical-align: -0.8ex;
}
.center-nav-ol .book-author {
  float: right;
}
.book-author {
  font-size: 0.4rem;
  display: block;
  overflow: hidden;
  max-width: 10em;
  max-width: calc(100vw - 2rem);
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #969ba3;
}
.book-author i {
  vertical-align: 0.5ex;
}
.book-layout {
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0.4rem 0.5rem;
  -webkit-transition: padding-left 0.15s;
  transition: padding-left 0.15s;
}
.book-li::after {
  display: block;
  margin-top: -1px;
  content: '';
  -webkit-transition: margin-left 0.15s;
  transition: margin-left 0.15s;
  border-bottom: 1px solid #f0f1f2;
}
</style>