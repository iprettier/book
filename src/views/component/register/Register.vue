<template>
  <div class="m-container">
    <header class="header header-inner">
      <nav class="nav-wrap">
        <a
          id="newheaderback"
          href="javascript:;"
          onclick="back();"
          class="back-icon"
        >
          <img class="icon" src="@/assets/images/icon/back-icon.png" alt="" />
        </a>
        <h1>注 册</h1>
      </nav>
    </header>
    <div class="login-wrap">
      <ul class="login-form login-form-logo">
        <li>
          <input
            id="phone"
            type="text"
            class="text clearinput"
            placeholder="手机号码"
          />
        </li>
        <li>
          <input
            id="smsCode"
            type="text"
            class="text"
            placeholder="短信验证码"
          />
          <div
            id="smsBtn"
            class="message-code"
            data-times="60"
            onclick="getCode();"
          >
            获取验证码
          </div>
        </li>
        <li>
          <input
            id="password"
            type="password"
            class="text"
            placeholder="密码"
          />
        </li>
      </ul>
      <div id="btnlogin" class="common-btn">注册</div>
      <div class="account-guide">
        <router-link to="/login">已有账号，直接登录 ></router-link>
      </div>
      <p class="login-tips">
        登录/注册即表示您已同意<a href="/page/servicedeal"
          >《用户服务和隐私政策协议》</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
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
  display: box;
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
.login-wrap {
  margin: 0 0.45rem;
}
.login-form {
  margin: 0 0 0.65rem;
}
.login-form .active label {
  -webkit-transform: translateY(calc(-60% - 0.75em)) scale(0.75);
  transform: translateY(calc(-60% - 0.75em)) scale(0.75);
  color: #f47983;
}
.login-form li {
  border-bottom: 1px solid #eee;
  height: 1.4rem;
  line-height: 1.2rem;
  overflow: hidden;
  margin: 0.05rem 0 0;
  display: -webkit-box;
  position: relative;
}
.login-form li label {
  color: #bbb;
  font-size: 0.45rem;
  position: absolute;
  top: 65%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  -webkit-transition: margin 0.15s ease, padding 0.15s ease,
    -webkit-transform 0.15s ease;
  transition: margin 0.15s ease, padding 0.15s ease,
    -webkit-transform 0.15s ease;
  transition: margin 0.15s ease, padding 0.15s ease, transform 0.15s ease;
  transition: margin 0.15s ease, padding 0.15s ease, transform 0.15s ease,
    -webkit-transform 0.15s ease;
  z-index: 1;
}
.login-form li .text {
  background: none;
  border: none;
  height: 1rem;
  display: block;
  -webkit-box-flex: 1;
  font-size: 0.4rem;
  color: #333;
  margin-top: 0.5rem;
}
.login-form li input::placeholader {
  color: #aab2bd;
}
.login-form li input::-webkit-input-placeholder {
  color: #aab2bd;
}
.images-code {
  height: 0.8rem;
  vertical-align: middle;
}
.login-form-logo {
  background: url("@/assets/images/logo.png") no-repeat center 0.7rem;
  background-size: 3rem 1.2rem;
  padding: 2rem 0 0;
}
.common-btn {
  height: 1.2rem;
  line-height: 1.2rem;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  background: #f47983;
  border-radius: 0.1rem;
}
.account-guide {
  height: 1.2rem;
  font-size: 0.4rem;
}
.account-guide .guide-pwd {
  float: left;
  line-height: 1.2rem;
}
.account-guide .guide-reg {
  float: right;
  line-height: 1.2rem;
}
.account-guide a {
  color: #59a4df;
}
.quick-login {
  text-align: center;
  border-top: 1px solid #dcdcdc;
  margin: 0.6rem 0 0;
  color: #999;
  font-size: 0.4rem;
}
.quick-login .tit {
  display: inline-block;
  width: 1.6rem;
  background: #fff;
  line-height: 0.4rem;
  margin: -0.2rem auto 0;
  position: relative;
  top: -0.3rem;
}
.quick-login-main {
  text-align: center;
  margin: 0.6rem 0 0;
  color: #999;
  font-size: 0.24rem;
}
.quick-login-main .login-qq {
  background: url("@/assets/images/icon/qq-icon.png") no-repeat center 0;
  background-size: 0.9rem 0.9rem;
  width: 1.2rem;
}
.quick-login-main a {
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
  padding: 0.9rem 0 0;
  margin: 0.6rem 0 0;
}
.login-tips {
  text-align: center;
  font-size: 0.22rem;
  margin: 0.3rem 0 0;
  color: #999;
}
.login-tips a {
  color: #59a4df;
}
.account-guide {
  text-align: center;
}
.account-guide a {
  line-height: 1.4rem;
}
.message-code {
  color: #59a4df;
  font-size: 0.4rem;
  line-height: 1.2rem;
}
</style>