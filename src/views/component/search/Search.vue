<template>
  <div class="m-container">
    <!-- 搜索头部 -->
    <SearchHeader></SearchHeader>
    <!-- 搜索导航 -->
    <SearchNav></SearchNav>
    <FilterCategory></FilterCategory>
    <div class="margin2"></div>
    <BookRecommend></BookRecommend>
    <div class="over-wrap over-wrap-up" @click="hide" v-show="isShow===false"></div>
  </div>
</template>

<script>
import SearchHeader from "./search-header/Search-header.vue"
import SearchNav from "./search-nav/Search-nav.vue"
import FilterCategory from "./filter-category/Filter-category.vue"
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Search',
  components: { SearchHeader,SearchNav,FilterCategory },
  setup() {
    const store = useStore()
    const isShow = computed(() => store.state.search.isShow)
    const hide = () => {
      store.commit('search/hideState')
    }
    return { hide,isShow }
  }
}
</script>

<style scoped>
.over-wrap-up {
  z-index: 891;
}
.over-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
}
</style>