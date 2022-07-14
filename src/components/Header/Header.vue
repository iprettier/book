<template>
  <header class="header">
    <nav class="nav-wrap nav-index">
      <a href="javascript:;" class="nav-logo">
        <h1>
          <img src="@/assets/images/logo.png" alt="" />
        </h1>
      </a>
      <router-link to="/search" class="nav-link">
        <img src="@/assets/images/icon/search-icon.png" alt="" />
      </router-link>
      <router-link to="/shelf" class="nav-link">
        <img src="@/assets/images/icon/book-icon.png" alt="" />
      </router-link>
      <router-link to="/login" class="nav-link">
        <img src="@/assets/images/icon/user-icon.png" alt="" />
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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
.header-inner .nav-wrap .menu-side .icon-close {
  display: none;
}
.header-inner .nav-wrap .menu-side .menu-switch-active .icon-show {
  display: none;
}
.header-inner .nav-wrap .menu-side .menu-switch-active .icon-close {
  display: inline-block;
  -webkit-animation: rotateIn 0.5s ease both;
}
.menu-dropdown {
  z-index: 899;
  position: absolute;
  left: 0;
  padding: 1rem 0 0.8rem;
  width: 100%;
  background: #fff;
  -webkit-box-shadow: 0 0 5px #ddd;
  box-shadow: 0 0 5px #ddd;
  -webkit-transform: translateY(-141%);
  transform: translateY(-141%);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.menu-dropdown .dropdown-wrap {
  overflow: hidden;
}
.menu-dropdown .dropdown-wrap a {
  text-align: center;
  float: left;
  width: 20%;
  line-height: 1.5rem;
  font-size: 0.4rem;
}
.menu-dropdown .dropdown-wrap a .icon {
  display: block;
  margin: 0 auto;
  width: 0.7rem;
  height: 0.7rem;
}
.menu-dropdown .btn-center {
  background: #f47983;
  color: #fff;
  width: 6.52rem;
  display: block;
  text-align: center;
  line-height: 1.2rem;
  margin: 0.8rem auto 0;
  border-radius: 0.2rem;
  font-size: 0.5rem;
}
.menu-dropdown-active {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
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
.nav-index .nav-logo {
  display: block;
  -webkit-box-flex: 1;
}
.nav-index .nav-logo h1 {
  display: block;
  width: 2.52rem;
  height: 0.9rem;
}
.nav-index .nav-logo img {
  width: 100%;
  height: 100%;
}
.nav-index .nav-link {
  display: block;
  font-size: 0.4rem;
  margin: 0 0 0 0.35rem;
}
.nav-index .nav-link img {
  width: 0.65rem;
  height: 0.65rem;
  vertical-align: -0.1em;
}
</style>