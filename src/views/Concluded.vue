<template>
  <div class="row text-center mt-5 pt-5">
    <div class="col-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-4 col-xl-4 mt-5 pt-5">
      <card :padding="true">
        <div class="text-danger text-center mb-3">
          <i class="fas fa-check-circle fa-5x"></i>
        </div>
        <h5 class="text-danger px-4"><strong>Compra efetuada<br>com sucesso!</strong></h5>
        <p class="card-text text-muted">Esperamos que você se<br>adapte a sua nova concha</p>
        <button @click.prevent="login" class="btn btn-danger btn-block py-3 px-5 rounded-0"><strong>VOLTAR PARA LOJA</strong></button>
      </card>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '@/components/Card'

export default {
  components: {
    Card
  },

  data () {
    return {
      userName: ""
    }
  },

  methods: {
    ...mapActions(['setUserName']),

    login () {
      this.setUserName(this.userName)
      this.$router.push({name: 'store'})
    }
  },

  name: 'Home',
}
</script>
