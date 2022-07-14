<template>
  <div class="tab-bd">
    <div class="bd-main">
      <div class="common-list swiper-free-classify">
        <router-link class="vertical-part" v-for="i in 7" :key="i" to="/">
          <div class="common-img">
            <img src="@/assets/images/book/1064756.jpg" />
            <div class="mark-yellow"><span class="corner">完结</span></div>
          </div>
          <p class="book-name">极品女仙</p>
          <p class="book-author">金铃动</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    bookObj: {
      type: Object,
      default: () => {{}}
    }
  }
};
</script>
