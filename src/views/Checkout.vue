<template>
  <span>
    <div class="row mt-5">
      <div class="col-4">
        <div class="card rounded-0 shadow-sm">
          <div class="card-body">
              <div>
                <h4 class="text-danger mt-3"><strong>RECIBO</strong></h4>
              </div>
              <div v-for="item in itemsList" :key="item.id" class="row">
                <div class="col-4 image-container">
                  <img :src="item.image_url">
                </div>
                <div class="col-6">
                  <strong class="text-danger">
                    {{ item.name }}
                  </strong>
                </div>
                <div class="col-2">
                  <strong class="text-muted">
                    x1
                  </strong>
                </div>
              </div>
          </div>
        </div>
          <div class="card rounded-0 shadow-sm">
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <strong class="text-danger">TOTAL</strong>
                </div>
                <div class="col-8 text-right">
                  <strong class="text-secondary">PG$ 159,90</strong>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="card rounded-0 shadow-sm">
          <div class="card-body">
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
                <div class="col">
                  <div class="form-group text-left">
                    <label class="text-danger" for="cardDate"><small>Data de Validade</small></label>
                    <input type="text" class="form-control border-danger rounded-0" placeholder="MM/AA" id="cardDate">
                  </div>
                </div>
                <div class="col">
                  <div class="form-group text-left">
                    <label class="text-danger" for="cardCode"><small>Código de Segurança</small></label>
                    <input type="text" class="form-control border-danger rounded-0" placeholder="***" id="cardCode">
                  </div>
                </div>
              </div>
              <hr>
              <h5 class="text-danger mt-4 mb-4"><strong>Endereço de Cobrança</strong></h5>
              <div class="row">
                <div class="col-6">
                  <div class="form-group text-left">
                    <label class="text-danger" for="cep"><small>CEP</small></label>
                    <input type="text" class="form-control border-danger rounded-0" placeholder="000000-000" id="cep">
                  </div>
                </div>
                <div class="col-2">
                  <div class="form-group text-left">
                    <label class="text-danger" for="addressNumber"><small>Nº</small></label>
                    <input type="text" class="form-control border-danger rounded-0" placeholder="00" id="addressNumber">
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group text-left">
                    <label class="text-danger" for="uf"><small>UF</small></label>
                    <input type="text" class="form-control border-danger rounded-0" placeholder="Ceará" id="uf">
                  </div>
                </div>
                <div class="col-8">
                  <button class="btn btn-danger btn-block py-3 px-5 rounded-0"><strong>EFETUAR PAGAMENTO</strong></button>
                </div>
                <div class="col-4">
                  <button class="btn btn-outline-danger btn-block py-3 px-5 rounded-0"><strong>CANCELAR</strong></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
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

  name: 'Buyout',
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