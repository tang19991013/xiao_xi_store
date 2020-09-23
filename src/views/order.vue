<template>
    <div class="order">
        <Order-Header></Order-Header>
        <router-view></router-view>
        <MyFooter></MyFooter>
    </div>
</template>
<script>
import MyFooter from '../components/MyFooter'
import OrderHeader from '../components/OrderHeader'
export default {
    name:"order",
    components:{
        MyFooter,
        OrderHeader
    }
}
</script>