<template>
  <div class="m-container">
    <Header></Header>
    <div class="menu-classify">
      <div class="menu-full">
        <div class="icon-toggle-nav">
          <img src="@/assets/images/icon/down-icon.png" alt="" />
        </div>
        <ul class="menu-list">
          <li class="" v-for="(item, index) in navList" :key="index">
            <router-link to="/">{{ item }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="def">
      <!-- 轮播图 -->
      <Carsourer></Carsourer>
      <!-- 热门 -->
      <div class="module">
        <div class="contentbox">
          <More>
            <template v-slot:icon>
              <img
                class="icon"
                src="@/assets/images/icon/hot-icon.png"
                alt=""
              />
            </template>
            热门
          </More>
          <div class="boxbd">
            <BookRecommend></BookRecommend>
          </div>
        </div>
      </div>
      <!-- 新书力荐 -->
      <div class="xslj">
        <div class="contentbox">
          <More>
            <template v-slot:icon>
              <img
                src="@/assets/images/icon/reco-icon.png"
                class="icon"
                alt=""
              />
            </template>
            新书力荐
          </More>
          <div class="boxbd">
            <div
              class="common-list common-list-justify common-list-combination"
            >
              <router-link to="/detail" href="" class="vertical-part">
                <div class="common-img">
                  <img src="@/assets/images/book/1388021.jpg" />
                </div>
                <p class="book-name">重生八零我养大了世界首富</p>
                <p class="book-author">大雪人</p>
              </router-link>
              <router-link to="/detail" href="" class="vertical-part">
                <div class="common-img">
                  <img src="@/assets/images/book/1392704.jpg" />
                </div>
                <p class="book-name">重生福晋求和离</p>
                <p class="book-author">羽且</p>
              </router-link>
              <router-link to="/detail" href="#" class="vertical-part">
                <div class="common-img">
                  <img src="@/assets/images/book/1115738.jpg" />
                </div>
                <p class="book-name">豪门隐婚之竹马抢青梅</p>
                <p class="book-author">肥肉拜拜</p>
              </router-link>
            </div>
            <div class="common-list common-list-combination">
              <router-link to="/detail" href="" class="details-part">
                <dl class="common-info">
                  <dt>
                    婚后成了大佬的掌中宝<span class="iconBook-right"
                      ><span>连载</span><span class="pipe">·</span
                      ><span>现言</span></span
                    >
                  </dt>
                  <dd class="book-profile">
                    “孩子生下来，我养！”她本以为他们两个是因为孩子才绑在一起，...
                  </dd>
                </dl>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 分类 -->
      <div class="category">
        <div class="contentbox">
          <More>
            <template v-slot:icon>
              <img class="icon" src="@/assets/images/icon/category-icon.png" alt="">
            </template>
            分类推荐
          </More>
          <div class="tab-box tab-classify">
            <CategoryNav></CategoryNav>
            <Category></Category>
          </div>
        </div>
      </div>
      <!-- 排行榜单 -->
      <div class="order">
        <div class="contentbox">
          <More>
            <template v-slot:icon>
              <img class="icon" src="@/assets/images/icon/list-icon.png" alt="">
            </template>
            排行榜单
          </More>
          <div class="tab-box tab-classify">
            <CategoryNav></CategoryNav>
            <Category></Category>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import More from "@/components/more/More.vue";
import Header from "../components/Header/Header.vue";
import Carsourer from "./component/carsourer/Carsourer.vue";
export default {
  name: "Layout",
  components: { Header, Carsourer, More },
  setup() {
    const navList = ["分类", "排行", "免费", "完本", "包月"];
    return { navList };
  },
};
</script>