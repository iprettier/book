<template>
  <div class="boxhd">
    <div class="title">
      <slot name="icon"></slot>
      <slot></slot>
    </div>
    <router-link to="/" class="icon-more">
      更多
      <img class="more-icon" src="@/assets/images/icon/right-icon.png" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'More'
};
</script>
