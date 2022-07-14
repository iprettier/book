<template>
  <div class="common-list common-list-one" v-for="i in 4" :key="i">
    <div class="common-list common-list-one">
      <router-link to="/detail" href="" class="details-part">
        <div class="common-img">
          <img src="@/assets/images/book/1358093.jpg" />
        </div>
        <dl class="common-info">
          <dt>八十年代之悍妻有点闲</dt>
          <dd class="book-profile">
            摔倒前，林冬雪觉得：婆婆是老不死，大姑子是扫把星，外甥女是拖...
          </dd>
          <dd class="book-module">
            列无暇<span class="pipe">·</span>现言<span class="pipe">·</span
            >连载<span class="pipe">·</span>111万字
          </dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookRecommend',
  props: {
    type: Object,
    default: ()=>{{}}
  }
};
</script>

<style scoped>
.classfication-list {
  margin: 0 0.3rem;
}
.common-list {
  overflow: hidden;
}
.common-list-inner {
  padding: 0 0 0.15rem;
}
.common-list-inner .details-part {
  margin: 0 0 0.3rem;
}
.common-list-inner .details-part .common-info dt {
  color: #000;
}
.common-list-inner .details-part .common-info .book-profile {
  color: #666;
}
.common-list-close .details-part {
  border: none;
  padding: 0;
}
.details-part {
  display: -webkit-box;
  margin: 0.28rem 0.23rem;
  padding: 0 0 0.28rem;
  border-bottom: 1px solid #efefef;
}
.details-part .common-img {
  padding: 0.05rem 0 0 0.05rem;
  overflow: hidden;
  height: 2rem;
}
.details-part .common-info {
  -webkit-box-flex: 1;
  padding-left: 0.2rem;
}
.details-part .common-info dt {
  font-size: 0.4rem;
  font-weight: normal;
  line-height: 0.45rem;
  height: 0.45rem;
  margin: 0.05rem 0 0;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.details-part .common-info .book-profile {
  color: #999;
  font-size: 0.35rem;
  margin: 0.17rem 0;
  line-height: 0.42rem;
  height: 0.84rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.details-part .common-info .book-module {
  font-size: 0.24rem;
  color: #999;
  float: left;
  text-align: right;
}
.details-part .common-info .book-module .pipe {
  margin: 0 0.1rem;
}
.common-img {
  position: relative;
}
.common-img img {
  display: block;
  background-color: #fff;
  position: relative;
  z-index: 1;
  height: 2rem;
  width: 1.6rem;
  border: 1px solid #dedede;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.common-img .mark-yellow {
  display: block;
  width: 0.62rem;
  height: 0.34rem;
  line-height: 0.34rem;
  text-align: center;
  position: absolute;
  right: 1px;
  top: calc(0.05rem + 1px);
  border-radius: 0.05rem 0 0 0.05rem;
  background: #f9ae08;
  color: #fff;
  font-size: 0.22rem;
  z-index: 2;
}
</style>