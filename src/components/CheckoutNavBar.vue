<template>
<nav class="navbar navbar-expand navbar-dark bg-danger py-1">
    <div class="container">
      <a class="navbar-brand navbar-collapse"><i class="fas fa-circle fa-3x mr-3"></i> Olá, {{userName ? userName : 'Paguru'}}</a>
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