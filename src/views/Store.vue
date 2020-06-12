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
import ShopItem from '@/components/ShopItem.vue'

export default {
  components: {
    ShopItem
  },

  data () {
    return {
      endpoint: 'https://paguru-challenge-api.herokuapp.com/products',

      itemsList: []
    }
  },

  methods: {
    async getItems() {
      try {
        const response = await this.axios.get(`${this.endpoint}`)
        console.log(response.data)
        if (response.data) {
          this.itemsList = response.data
        }
      } catch (error) {
        console.log(error.response)
      }
    }
  },

  mounted () {
    this.getItems()
  },
  
  name: 'Store',
}
</script>
