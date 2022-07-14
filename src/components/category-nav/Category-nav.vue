<template>
  <div class="tab-hd">
    <span class="">古言</span>
    <span class="">现言</span>
    <span class="">玄幻</span>
    <span class="active">仙侠</span>
  </div>
</template>

<script>
export default {
  name: "CategoryNav",
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  }
};
</script>
