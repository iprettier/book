<template>
  <header class="header header-inner">
    <nav class="nav-wrap">
      <a href="javascript:;" onclick="back();" class="back-icon">
        <img class="icon" src="@/assets/images/icon/back-icon.png" alt="" />
      </a>
      <div class="top-search">
        <div class="search-wrap">
          <input
            type="search"
            placeholder="她儿砸被大佬盯上了"
            class="clearinput"
          />
          <!--<svg aria-hidden="true" class="icon icon-action icon-clearinput" style="display: none;"><use xlink:href="#icon-guanbi"></use></svg>-->
          <img
            src="@/assets/images/icon/close-icon.png"
            class="icon icon-action icon-clearinput"
            style="display: none"
            alt=""
          />
        </div>
      </div>
      <div class="menu-side">
        <a href="javascript:;" class="nav-icon">
          <img class="icon" src="@/assets/images/icon/search-icon2.png" alt="" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SearchHeader'
};
</script>

<style scoped>
.header-inner .top-search {
  -webkit-box-flex: 1;
}
.top-search .search-wrap {
  width: 7.12rem;
  height: 0.8rem;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 0.6rem;
  -webkit-border-radius: 0.6rem;
  position: relative;
}
.top-search .search-wrap input {
  vertical-align: top;
  font-size: 0.4rem;
  color: #333;
  width: 100%;
  height: 0.8rem;
  border: 0;
  background: none;
  padding: 0 0.6rem 0 0.34rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
</style>