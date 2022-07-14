import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import More from "./components/more/More.vue"
import Category from "./components/category/Category.vue"
import CategoryNav from "./components/category-nav/Category-nav.vue"
import Footer from "./components/Footer/Footer.vue"
import BookRecommend from "./components/book/Book-recommend.vue"
import BookButton from "./components/Book-Button/Book-Button.vue"
import Dheader from "./components/d-header/Dheader.vue"
const app = createApp(App)
app.component('More',More)
app.component('Category',Category)
app.component('CategoryNav',CategoryNav)
app.component('Footer',Footer)
app.component('BookRecommend',BookRecommend)
app.component('BookButton',BookButton)
app.component('Dheader',Dheader)
app.use(store).use(router).mount('#app')
