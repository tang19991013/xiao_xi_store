<template>
  <div class="home">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import MyHeader from "../components/MyHeader.vue"
import MyFooter from '../components/MyFooter.vue'
export default {
  name: 'Home',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
