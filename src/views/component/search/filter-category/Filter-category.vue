<template>
    <div :class="{'filtrate-wrap':isShow===true,'filtrate-wrap-active':isShow===false}">
      <div class="filtrate-mian">
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active">
                <h2 class="title">筛选</h2>
                <div class="filtrate-detail">
                <dl>
                    <dt>频道</dt>
                    <dd>
                    <span class="active">不限</span>
                    <span class="">女生</span>
                    <span class="">男生</span>
                    </dd>
                </dl>
                <dl>
                    <dt>类型</dt>
                    <dd>
                    <span class="active">不限</span>
                    <span class="">古言</span>
                    <span class="">现言</span>
                    <span class="">玄幻</span>
                    <span class="">仙侠</span>
                    <span class="">悬疑</span>
                    <span class="">青春</span>
                    <span class="">科幻</span>
                    <span class="">游戏</span>
                    <span class="">轻小说</span>
                    <span class="">短篇</span>
                    <span class="">玄幻(男)</span>
                    <span class="">奇幻(男)</span>
                    <span class="">武侠(男)</span>
                    <span class="">仙侠(男)</span>
                    <span class="">都市(男)</span>
                    <span class="">历史(男)</span>
                    <span class="">军事(男)</span>
                    <span class="">悬疑(男)</span>
                    <span class="">科幻(男)</span>
                    <span class="">游戏(男)</span>
                    <span class="">体育(男)</span>
                    <span class="">轻小说(男)</span>
                    <span class="">现实(男)</span>
                    <span class="">短篇(男)</span>
                    </dd>
                </dl>
                <dl>
                    <dt>状态</dt>
                    <dd>
                    <span class="active">不限</span>
                    <span class="">连载</span>
                    <span class="">完结</span>
                    </dd>
                </dl>
                <dl>
                    <dt>资费</dt>
                    <dd>
                    <span class="active">不限</span>
                    <span class="">免费</span>
                    <span class="">VIP</span>
                    <span class="">包月</span>
                    <span class="">特价</span>
                    </dd>
                </dl>
                <dl>
                    <dt>字数</dt>
                    <dd>
                    <span class="active">不限</span>
                    <span class="">30万以下</span>
                    <span class="">30-50万</span>
                    <span class="">50-100万</span>
                    <span class="">100-200万</span>
                    <span class="">200万以上</span>
                    </dd>
                </dl>
                </div>
            </div>
            </div>
            <div class="swiper-scrollbar" style="display: none">
            <div
                class="swiper-scrollbar-drag"
                style="transform: translate3d(0px, 0px, 0px); height: 0px"
            ></div>
            </div>
            <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
            ></span>
        </div>
      </div>
      <div class="filtrate-btns">
        <input type="button" value="重置" class="btn-reset" />
        <input type="submit" value="完成" class="btn-sure" />
      </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';
export default {
  name: "FilterCategory",
  setup() {
    const store = useStore();
    const isShow = computed(() => store.state.search.isShow);
    return {
      isShow,
    };
  },
};
</script>

<style scoped>
.filtrate-wrap {
  -webkit-transform: translateX(105%);
          transform: translateX(105%);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  width: 8.13rem;
  height: 100%;
  background: #fff;
  z-index: 892;
}
.filtrate-wrap .title {
  text-align: center;
  font-weight: normal;
  line-height: 1.2rem;
  font-size: 0.4rem;
}
.filtrate-wrap-active {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  width: 8.13rem;
  height: 100%;
  background: #fff;
  z-index: 892;
}
.filtrate-mian {
  height: calc(100% - 0.8rem);
}
.swiper-fltrate {
  width: 100%;
  height: 100%;
}
.filtrate-detail {
  line-height: 0.48rem;
  padding: 0 0.28rem 0.28rem;
  font-size: 0.34rem;
}
.filtrate-detail dt {
  line-height: 0.8rem;
}
.filtrate-detail dd {
  margin: 0 0 0 -0.06rem;
  overflow: hidden;
}
.filtrate-detail dd .active {
  background: #ffe1e1;
  color: #f47983;
  border-radius: 0.1rem;
}
.filtrate-detail dd span {
  float: left;
  width: 1.7rem;
  text-align: center;
  margin: 0 0 0.3rem 0.06rem;
  color: #666;
}
.filtrate-btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.filtrate-btns .btn-reset {
  background: #f7f6f9;
}
.filtrate-btns input {
  height: 0.8rem;
  text-align: center;
  border: none;
  width: 50%;
  border-radius: 0;
  font-size: 0.28rem;
}
.filtrate-btns .btn-sure {
  background: #f47983;
  color: #fff;
}
</style>