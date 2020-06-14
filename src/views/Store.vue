<template>
  <span>
    <div class="text-center">
      <h4 class="text-danger mt-5"><strong>CATÁLOGO DE CONCHAS</strong></h4>
    </div>

    <div class="row mt-4">
      <div v-for="item in itemsList" :key="item.id" class="col-4 mt-5">
        <shop-item
          :item="item"
          @addToCart="addToCart"
        ></shop-item>
      </div>
    </div>
  </span>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ShopItem from '@/components/ShopItem.vue'

export default {
  components: {
    ShopItem
  },

  computed: {
    ...mapState([
      'itemsList'
    ])
  },

  methods: {
    ...mapActions(['addToCartList', 'setItemsList']),

    addToCart(item) {
      this.addToCartList(item)
    }
  },

  mounted () {
    this.setItemsList()
  },
  
  name: 'Store',
}
</script>
