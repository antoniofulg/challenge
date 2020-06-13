<template>
  <span>
    <div class="text-center">
      <h4 class="text-danger mt-5"><strong>CATÁLOGO DE CONCHAS</strong></h4>
    </div>

    <div class="row mt-5">
      <div v-for="item in itemsList" :key="item.id" class="col-4 mt-5">
        <shop-item
          :image_url="item.image_url"
          :name="item.name"
          :price="item.price"
        ></shop-item>
      </div>
    </div>
  </span>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
    ...mapActions(['setItemsList'])
  },

  mounted () {
    this.setItemsList()
  },
  
  name: 'Store',
}
</script>
