<template>
  <div class="m-container">
    <header class="header header-inner">
      <Dheader>
        作品详情
      </Dheader>
      <Dmenu></Dmenu>
    </header>
    <div class="wrapbox">
      <div class="book-profile-module">
        <img class="book-profile-blur" src="@/assets/images/book/977563.jpg" />
        <dl>
          <dt>
            <img src="@/assets/images/book/977563.jpg" />
          </dt>
          <dd>
            <h2 class="book-title">农家丑妻</h2>
            <p class="book-author">
              <a href="#">晗路<span class="pipe">·</span>银牌作家</a>
            </p>
            <p class="book-tatus">古言<span class="pipe">/</span>连载中</p>
            <p class="book-metas">
              108万字<span class="pipe">|</span>174万阅读
            </p>
            <span class="month">4小时前更新</span>
          </dd>
        </dl>
      </div>
    </div>
    <Honor></Honor>
    <div class="book-info-btns">
      <BookButton :status="true">立即阅读</BookButton>
      <BookButton>加入书架</BookButton>
      <BookButton>离线阅读</BookButton>
    </div>
    <BookHd title="简介">
      <a href="javascript:;" class="icon-more icon-more-tags"></a>
    </BookHd>
    <BookSummary></BookSummary>
    <BookHd title="目录">
      <a
        href="javascript:;"
        style="padding-left: 15px"
        class="icon-more icon-more-chapter"
        >4小时前 · 连载至 · 第443章 完了，小命不保！（2更）</a
      >
      <template v-slot:img>
        <img class="icon" src="@/assets/images/icon/right-icon.png" alt="" />
      </template>
    </BookHd>
    <!-- 作者信息 -->
    <div class="module">
      <div class="module-header">
        <div class="module-header-l">
          <h3 class="module-title">本书作者</h3>
        </div>
      </div>
      <div class="module-content">
        <ol class="book-ol book-ol-author">
          <li class="book-li">
            <a href="#" class="book-layout">
              <div class="book-author-vv" role="option">
                <img
                  class="book-author-avatar"
                  src="@/assets/images/avatar/avatar-2.jpg"
                  alt="米饭饭呀的头像."
                />
                <div>
                  <aria>作者等级：</aria>
                  <em class="tag-honor orange"><i>Lv.9</i></em>
                </div>
              </div>
              <div class="book-cell">
                <div class="book-title-x">
                  <h4 class="book-title">米饭饭呀</h4>
                </div>
                <p class="book-desc">暂无作者简介</p>
              </div>
              <img
                class="icon"
                src="@/assets/images/icon/right-icon.png"
                alt=""
              />
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="bottom-part bottom-part-inner">
      <div class="copyrite-bottom">
        <p class="bottom-nav">
          <a href="javascript:;">客户端</a>
          <a href="#">电脑版</a>
          <a href="#">帮助反馈</a>
          <a href="#">广告举报</a>
        </p>
        <div class="wechat">
          <img class="icon" src="@/assets/images/icon/wechat-icon.png" alt="" />
          微信号：廖某某前端日志
        </div>
        <p class="copyrite">备案许可：桂xxx备xxxxxxx号</p>
      </div>
    </div>
  </div>
</template>

<script>
import Dmenu from "./d-menu/d-menu.vue";
import Honor from "./honor/Honer.vue";
import BookSummary from "./book-summary/Book-summary.vue";
import BookHd from "./book-hd/BookHd.vue";
export default {
  name: "Detail",
  components: { Dmenu, Honor, BookSummary, BookHd },
};
</script>

<style scoped>
.m-container {
  background-color: #fff;
  min-height: calc(100vh - 2.9rem - 2px);
}
.wrapbox {
  border-bottom: 0.1rem solid #f5f5f5;
}
.book-profile-module {
  position: relative;
  overflow: hidden;
}
.book-profile-module .book-profile-blur {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  display: block;
  width: 100%;
  z-index: 0;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  opacity: 0.1;
}
.book-profile-module dl {
  height: 4.3rem;
  display: -webkit-box;
  padding: 0.13rem 0.4rem 0 0.2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#fff),
    color-stop(40%, rgba(255, 255, 255, 0))
  );
  background: linear-gradient(bottom, #fff 0%, rgba(255, 255, 255, 0) 40%);
  background: -webkit-linear-gradient(
    bottom,
    #fff 0%,
    rgba(255, 255, 255, 0) 40%
  );
}
.book-profile-module dt {
  position: relative;
  width: 2.2rem;
  height: 3.02rem;
  margin: 0 0.42rem 0 0;
}
.book-profile-module dt img {
  display: block;
  width: 2.3rem;
  height: 2.8rem;
  margin: 0.17rem 0 0 0.1rem;
  position: relative;
  z-index: 2;
}
.book-profile-module dt::after {
  content: "";
  display: block;
  width: 1.64rem;
  height: 2.46rem;
  background: #fff;
  z-index: 1;
  position: absolute;
  left: 0.28rem;
  top: 0.28rem;
  -webkit-box-shadow: 0 0 0.3rem #9c9c9c;
  box-shadow: 0 0 0.3rem #9c9c9c;
}
.book-profile-module dd {
  -webkit-box-flex: 1;
  line-height: 0.5rem;
  font-size: 0.24rem;
  color: #999;
}
.book-profile-module dd .pipe {
  margin: 0 0.1rem;
}
.book-profile-module .book-title {
  color: #000;
  font-size: 0.5rem;
  font-weight: normal;
  height: 0.6rem;
  line-height: 0.6rem;
  overflow: hidden;
  margin: 0.24rem 0 0;
}
.book-profile-module .book-author {
  font-size: 0.4rem;
  margin: 0.2rem 0 0;
}
.book-profile-module .book-author a {
  color: #f47983;
}
.book-profile-module .book-tatus {
  font-size: 0.35rem;
}
.honor-labels {
  overflow: hidden;
}
.book-info-btns {
  margin: 0.35rem 0.3rem 0;
  padding: 0 0 0.3rem;
  border-bottom: 1px solid #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.wrapbox .boxhd {
  height: 1.2rem;
  line-height: 1.2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.wrapbox .boxhd .title {
  -webkit-box-flex: 1;
  padding: 0 0 0 0.3rem;
  color: #000;
  font-size: 0.4rem;
}
.wrapbox .boxhd .icon-more-tags {
  padding: 0 0.3rem 0 0;
}
.wrapbox .boxhd .icon-more {
  display: block;
  padding: 0 0.3rem;
  color: #666;
  font-size: 0.35rem;
}
.wrapbox .boxhd .icon-more-chapter {
  color: #333;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 8rem;
}
/* 作者 */

.module {
  background-color: #fff;
  border-top: 0.15rem solid #f5f5f5;
}
.module .module-header {
  line-height: 1.75rem;
  display: block;
  overflow: hidden;
  padding: 0.4rem 0.2rem;
  border-top: 0;
}
.module .module-header::after {
  display: table;
  clear: both;
  content: '';
}
.module .module-title {
  font-weight: 700;
  display: inline;
  font-size: 0.4rem;
  color: #33373d;
}
.module-header-l {
  float: left;
}
.module-content {
  position: relative;
  padding: 0 0.3rem;
}
.module-content::before {
  display: block;
  content: '';
  position: absolute;
  border-top: 1px solid #f0f1f2;
  top: -6%;
  left: 0;
  width: 100%;
}
.book-layout {
  position: relative;
  display: block;
  overflow: hidden;
  padding: 0.2rem;
  -webkit-transition: padding-left 0.15s;
  transition: padding-left 0.15s;
}
.book-author-vv {
  position: relative;
  float: left;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
}
.book-author-avatar {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.1);
          box-shadow: 0 0 1px rgba(0,0,0,0.1);
}
aria {
  font-size: 0;
  position: absolute;
  clip: rect(0 0 0 0);
}
.tag-honor {
  position: absolute;
  bottom: -12%;
  left: 50%;
  margin-left: -0.8rem;
  font-size: 0.5rem;
  line-height: calc(0.5rem - 2px);
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 1.5rem;
  height: 0.55rem;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
  border-radius: 40px;
  background-color: currentColor;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0.2)), color-stop(50%, rgba(255,255,255,0.2)), color-stop(50%, rgba(255,255,255,0)));
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 50%);
}
.orange {
  color: #f0643a;
}
.orange i {
  font-size: 0.2rem;
  color: #fff;
}
.book-cell {
  overflow: hidden;
}
.book-li .icon {
  position: absolute;
  right: 0;
  top: 33%;
}
.book-title-x {
  display: block;
  overflow: hidden;
}
.book-title-x .book-title {
  font-size: 0.5rem;
  font-weight: 700;
  line-height: 1.4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.book-ol-author .book-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.45rem;
  overflow: hidden;
  margin: 0.375rem 0;
  color: #969ba3;
}
.book-ol-author .book-desc:last-child {
  margin-right: 1.5rem;
}


/* 底部 */
.bottom-part {
  border-top: 0.18rem solid #f5f5f5;
  background: #fff;
}
.bottom-part-inner {
  border: none;
  overflow: hidden;
  padding: 0.15rem 0 0;
  border-top: 0.1rem solid #f5f5f5;
  margin: -0.1rem 0 0;
}
.copyrite-bottom {
  text-align: center;
}
.copyrite-bottom .bottom-nav {
  color: #424242;
}
.copyrite-bottom .bottom-nav a {
  display: inline-block;
  padding: 0 0.4rem;
  line-height: 0.73rem;
  font-size: 0.35rem;
}
.copyrite-bottom .wechat {
  width: 5.5rem;
  margin: 0.15rem auto;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.3rem;
  color: #999;
  border: 1px solid #999;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
}
.copyrite-bottom .wechat .icon {
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  margin: 0 0.08rem 0 0;
  vertical-align: middle;
}
.copyrite-bottom .copyrite {
  font-size: 0.3rem;
  color: #999;
  line-height: 0.6rem;
  margin: 0.225rem 0 0.125rem;
}
</style>