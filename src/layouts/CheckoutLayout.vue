<template>
<span>
    <nav-bar @showModal="showModal = true"></nav-bar>
    <div class="container">
        <router-view></router-view>
    </div>
    <cart 
        v-if="showModal"
        @hideModal="showModal = false"
    />
</span>
</template>

<script>
import NavBar from '@/components/CheckoutNavBar.vue'
import Cart from '@/components/Cart.vue'

export default {
    components: {
        Cart,
        NavBar
    },

    data () {
        return {
            showModal: false
        }
    },
}
</script>