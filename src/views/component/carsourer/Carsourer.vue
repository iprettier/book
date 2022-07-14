<template>
  <div class="swiper-container swiper-show">
    <div class="swiper-wrapper">
      <router-link to="/detail" class="swiper-slide" href="javascript:;"
        ><img src="@/assets/images/banner/index-banner1.png"
      /></router-link>
      <router-link to="/detail" class="swiper-slide" href="javascript:;"
        ><img src="@/assets/images/banner/index-banner2.png"
      /></router-link>
      <router-link to="/detail" class="swiper-slide" href="javascript:;"
        ><img src="@/assets/images/banner/index-banner3.jpg"
      /></router-link>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="swiper-container swiper-free-nav">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <router-link to="/detail" href="" class="menu-block">
          <img src="@/assets/images/banner/bookorder.png" />
        </router-link>
      </div>
      <div class="swiper-slide">
        <router-link to="/detail" href="" class="menu-block">
          <img src="@/assets/images/banner/author.png" />
        </router-link>
      </div>
      <div class="swiper-slide">
        <router-link to="/detail" href="" class="menu-block">
          <img src="@/assets/images/banner/task.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carsourer",
  setup() {},
};
</script>