<template>
  <ol id="bookEditOl" class="book-ol book-ol-progress" :class="{enabled:showOhide===false}" v-for="i in 6" :key="i">
    <!-- 加载更多 -->
    <span class="list-split-1">
      <!-- 单本书 -->
      <li class="book-li">
        <i class="radio">
          <img class="icon icon-ok" src="@/assets/images/icon/ok-icon.png" alt="" />
        </i>
        <div class="book-layout">
          <div class="rel">
            <a href="" class="mybook-to-detail" aria-hidden="true">
              <img
                src="@/assets/images/book/90-1.jpg"
                class="book-cover"
                alt="我欲封天 限时免费"
              />
            </a>
            <a href="" class="book-title-x">
              <h4 class="book-title">
                我欲封天
                <span class="tag-small-group">
                  <em class="tag-solid orange recomm-toggle">推荐</em>
                </span>
              </h4>
            </a>
          </div>
          <!-- 继续阅读 -->
          <a href="" class="mybook-to-goon">
            <div class="book-title-x">
              <div class="book-title-r">
                <span class="gray">继续阅读</span>
                <img
                  class="icon icon-arrow-r"
                  src="@/assets/images/icon/right-icon.png"
                  alt=""
                />
              </div>
            </div>
            <div class="book-meta">
              <p class="ell">
                <img
                  class="icon icon-human"
                  src="@/assets/images/icon/author-icon.png"
                  alt=""
                />
                耳根 | 读至第二卷 初入南域 第180章 山靈！（第一更）章
              </p>
            </div>
          </a>
          <div class="rel">
            <!-- 最新章节 -->
            <a href="#" class="mybook-to-new">
              <div class="book-meta">
                <time class="book-meta-r">1年前</time>
                <p class="ell">
                  <i class="dot red"></i>
                  更新至 《三寸人间》40万字啦，可以开宰啦~~
                </p>
              </div>
            </a>
          </div>
        </div>
        <a
          href="javascript:"
          class="mybook-cover-btn"
          role="checkbox"
          aria-checked="false"
          title="书名：我欲封天"
        ></a>
      </li>
    </span>
  </ol>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  name: "ListContent",
  props: {
    bookData: {
      type: Object,
      default: () => {{}}
    }
  },
  setup() {
    const store = useStore()
    const showOhide = computed(() => store.state.search.show)
    return { showOhide }
  }
};
</script>

<style scoped>
.book-ol-progress .book-cover {
  width: 1.7rem;
  height: 2.25rem;
}
.book-ol-progress .book-meta {
  font-size: 0.4rem;
  color: #969ba3;
}
.book-cover {
  font-size: 0;
  float: left;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.book-title-x {
  display: block;
  overflow: hidden;
}
.book-title {
  line-height: 0.6rem;
  font-size: 0.45rem;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mybook-to-goon {
  display: block;
  min-height: 2.25rem;
  margin: 0 -0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 2.125rem;
}
.mybook-to-goon .book-meta {
  margin: 0.15rem 0;
}
.book-title-r {
  font-size: 0.4rem;
  line-height: 0.7rem;
  float: right;
  margin-left: 0.5rem;
  color: #969ba3;
}
.book-title-r:first-child {
  margin-left: 0.5rem;
}
.gray {
  color: #969ba3;
}
.book-meta {
  font-size: 0.4rem;
  overflow: hidden;
}
.ell {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mybook-to-new {
  line-height: 0.7rem;
  position: absolute;
  top: -1.1rem;
  right: 0;
  left: 2.125rem;
}
.red {
  color: #ed424b;
}
.dot {
  font-size: 0;
  position: absolute;
  overflow: hidden;
  width: 4px;
  height: 4px;
  margin-top: 8px;
  margin-left: -8px;
  border-radius: 15px;
  background-color: currentColor;
}
.book-meta-r:first-child {
  margin-left: 0.25rem;
}
.book-meta-r {
  position: relative;
  float: right;
}
.icon-human {
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.2rem;
}
.icon-arrow-r {
  width: 0.35rem;
  height: 0.35rem;
}
.icon-ok {
  margin-top: 0.05rem;
  margin-left: 0.05rem;
  width: 0.6rem;
  height: 0.6rem;
}
.book-li .radio {
  left: 0.25rem;
  margin-top: 1.25rem;
}
.book-li::after {
  display: block;
  margin-top: -1px;
  content: "";
  -webkit-transition: margin-left 0.15s;
  transition: margin-left 0.15s;
  border-bottom: 1px solid #f0f1f2;
}
.radio {
  font-size: 0.25rem;
  position: absolute;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 0.8rem;
  height: 0.8rem;
  -webkit-transition: background-color 0.15s, border-color 0.15s;
  transition: background-color 0.15s, border-color 0.15s;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  color: #fff;
  border: 1px solid #c0c5cc;
  border-radius: 2rem;
  background-color: #fff;
}
.book-layout {
  padding: 0 0.4rem;
  position: relative;
  display: block;
  overflow: hidden;
  -webkit-transition: padding-left 0.15s;
  transition: padding-left 0.15s;
}
.rel {
  position: relative;
}
.mybook-to-detail {
  position: absolute;
  top: 0.5rem;
  white-space: nowrap;
}
.mybook-to-detail .book-cover {
  margin-right: 0;
}
.mybook-to-detail + .book-title-x {
  position: absolute;
  top: 0.5rem;
  right: 2.05rem;
  left: 2.05rem;
}
.book-ol-progress .book-cover {
  width: 1.7rem;
  height: 2.25rem;
}
.book-ol-progress .book-meta {
  font-size: 0.4rem;
  color: #969ba3;
}
.book-cover {
  font-size: 0;
  float: left;
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
.enabled .book-li {
  position: relative;
}
.enabled .book-layout {
  padding-left: 1.25rem;
}
.checked .radio {
  background-color: #ed524b;
  border-color: transparent;
}
</style>