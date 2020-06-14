<template>
  <nav class="navbar navbar-expand navbar-dark bg-danger py-3">
    <div class="container">
      <a class="navbar-brand">Olá, {{userName ? userName : 'Paguru'}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <!-- To put UL to right margin -->
        <div class="mr-auto"></div>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link btn" @click="logout"><i class="fas fa-sign-out-alt fa-lg"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'userName'
    ])
  },

  methods: {
    ...mapActions(['setUserName', 'clearCartList']),

    logout () {
      this.setUserName("")
      this.clearCartList()
      this.$router.push({name: 'home'})
    }
  }
}
</script>