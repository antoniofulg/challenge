<template>
  <span>
    <div class="row mt-5">
      <div class="col-sm-12 col-lg-4">
        <card>
          <div>
            <h4 class="text-danger mt-3 mb-3"><strong>RECIBO</strong></h4>
          </div>
          <div v-for="(item, index) in cartList" :key="item.id" class="row">
            <span v-if="index >= 1" class="col-12"><hr></span>
            <div class="col-3 col-lg-12 col-xl-3 image-container">
              <img :src="item.image_url">
            </div>
            <div class="col-6 pt-3 pt-md-4 col-lg-9 pt-lg-0 col-xl-7">
                <strong class="text-danger">
                  {{ item.name }}
                </strong>
            </div>
            <div class="col-3 pt-3 pt-md-4 col-lg-3 pt-lg-0 col-xl-2 text-right">
              <strong class="text-muted">
                x{{ item.qty }}
              </strong>
            </div>
          </div>
        </card>
        <card>
          <div class="row">
            <div class="col-4">
              <strong class="text-danger">TOTAL</strong>
            </div>
            <div class="col-8 text-right">
              <strong class="text-secondary">PG$ {{totalPrice}}</strong>
            </div>
          </div>
        </card>
      </div>
      <div class="col-sm-12 col-lg-8">
        <card class="card rounded-0 shadow-sm">
          <div>
            <h4 class="text-danger mt-3"><strong>CHECKOUT DE PAGAMENTO</strong></h4>
          </div>
          <form>
            <h5 class="text-danger mt-5 mb-4"><strong>Cadastre o seu BeachCard</strong></h5>
            <div class="row">
              <div class="col-12">
                <div class="form-group text-left">
                  <label class="text-danger" for="cardNumber"><small>Número do BeachCard</small></label>
                  <input type="text" class="form-control border-danger rounded-0" placeholder="0000 0000 0000 0000" id="cardNumber">
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group text-left">
                  <label class="text-danger" for="cardDate"><small>Data de Validade</small></label>
                  <input type="text" class="form-control border-danger rounded-0" placeholder="MM/AA" id="cardDate">
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="form-group text-left">
                  <label class="text-danger" for="cardCode"><small>Código de Segurança</small></label>
                  <input type="text" class="form-control border-danger rounded-0" placeholder="***" id="cardCode">
                </div>
              </div>
            </div>
            <hr>
            <h5 class="text-danger mt-4 mb-4"><strong>Endereço de Cobrança</strong></h5>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="form-group text-left">
                  <label class="text-danger" for="cep"><small>CEP</small></label>
                  <input type="text" class="form-control border-danger rounded-0" placeholder="000000-000" id="cep">
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="form-group text-left">
                  <label class="text-danger" for="addressNumber"><small>Nº</small></label>
                  <input type="text" class="form-control border-danger rounded-0" placeholder="00" id="addressNumber">
                </div>
              </div>
              <div class="col-6 col-md-4">
                <div class="form-group text-left">
                  <label class="text-danger" for="uf"><small>UF</small></label>
                  <input type="text" class="form-control border-danger rounded-0" placeholder="Ceará" id="uf">
                </div>
              </div>
              <div class="col-sm-12 col-lg-7 col-xl-8">
                <button @click.prevent="checkout" class="btn btn-danger btn-block py-3 px-5 rounded-0"><strong>EFETUAR PAGAMENTO</strong></button>
              </div>
              <div class="col-sm-12 mt-2 col-lg-5 mt-lg-0 col-xl-4">
                <router-link tag="button" :to="{name: 'store'}" class="btn btn-outline-danger btn-block py-3 px-5 rounded-0"><strong>CANCELAR</strong></router-link>
              </div>
            </div>
          </form>
        </card>
      </div>
    </div>
  </span>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Card from '@/components/Card'

export default {
  components: {Card},

  computed: {
    ...mapState([
      'cartList'
    ]),

    totalPrice() {
      let value = 0
      this.cartList.map(val => {
        value += (val.price * val.qty)
      })
      return value.toLocaleString('pt-BR', {'minimumFractionDigits':2,'maximumFractionDigits':2}) 
    }
  },

  methods: {
    ...mapActions(['clearCartList']),
    
    checkout() {
      this.$router.push({name: 'concluded'})
      this.clearCartList
    }
  },

  name: 'Checkout',
}
</script>

<style>
  .image-container {
    overflow: hidden;
  }

  .image-container > img {
    width: 100%;
  }
</style>