<template>
  <div class="book-summary">
    <section>
      <p>夏曦穿越以后，恨不得老天爷来道雷再把她劈死过去。</p>
      <p>丑就算了，竟然还成了孩子娘。</p>
      <p>更让她崩溃的是，竟然嫁了个白眼狼。</p>
      <p>夏曦怒了，</p>
      <p>虐极品，踹渣渣，休了白眼狼。</p>
      <p>
        小日子过得风生水起，却不小心招惹了一个大人物，自此一宠再宠，变成了最尊贵的人。
      </p>
      <p>小剧场：一月黑风高夜，两千兵士手持火把，肩抬聘礼来到一农户前。</p>
      <p>某人下马，上前敲门。</p>
      <p>无人应。</p>
      <p>“夏娘子，我来求亲！”</p>
      <p>无人应。</p>
      <p>“我带来一千抬聘礼。”</p>
      <p>无人应。</p>
      <p>某人鼓起勇气，提高声音，“娘子，孩子是我的！”</p>
      <p>屋内默。</p>
      <p>然后一道清亮的声音传出来，“进来！”</p>
      <p>某人大喜，推门而进，</p>
      <p>一把闪着寒光的砍刀迎面而来，</p>
      <p>“你去死！”</p>
      <span class="toggle-btn">
        <img class="icon" src="@/assets/images/icon/down-icon.png" alt="" />
      </span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BookSummary'
};
</script>

<style scoped>
.book-summary {
  padding: 0 0.3rem 0.3rem;
  border-bottom: 1px solid #eee;
}
.book-summary section {
  color: #999;
  font-size: 0.35rem;
  line-height: 0.4rem;
  height: 1.2rem;
  position: relative;
  overflow: hidden;
}
.book-summary section .toggle-btn {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.48rem;
  background: #fff;
  text-align: right;
  background: -webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), color-stop(0.2rem, #fff));
  background: linear-gradient(left, rgba(255,255,255,0), #fff 0.2rem);
  background: -webkit-linear-gradient(left, rgba(255,255,255,0), #fff 0.2rem);
}
.book-summary section .toggle-btn .icon {
  transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.book-summary section .toggle-btn-overturn .icon {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
</style>