<template>
  <div class="boxhd">
    <div class="title">{{title}}</div>
    <slot></slot>
    <slot name="img"></slot>
  </div>
</template>

<script>
export default {
  name: 'BookHd',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.boxhd {
  height: 1.2rem;
  line-height: 1.2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.boxhd .title {
  -webkit-box-flex: 1;
  padding: 0 0 0 0.3rem;
  color: #000;
  font-size: 0.4rem;
}
.boxhd .icon-more-tags {
  padding: 0 0.3rem 0 0;
}
.boxhd .icon-more {
  display: block;
  padding: 0 0.3rem;
  color: #666;
  font-size: 0.35rem;
}
.boxhd .icon-more-chapter {
  color: #333;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 8rem;
}
</style>