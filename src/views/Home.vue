<template>
  <div class="row text-center mt-5 pt-5">
    <div class="offset-4 col-4 mt-5 pt-5">
      <div class="card rounded-0 shadow-sm">
        <div class="card-body py-5">
          <h5 class="card-title text-danger px-4"><strong>Olá Ermitão, seja<br>bem-vindo a nossa loja</strong></h5>
          <p class="card-text text-muted">Faça o login para ter acesso<br>à loja de conchas</p>
          <form>
            <div class="form-group text-left">
              <label for="yourName">Seu nome</label>
              <input type="text" class="form-control rounded-0" id="yourName">
            </div>
            <router-link tag="button" :to="{ name: 'store' }" class="btn btn-danger btn-block py-3 px-5 rounded-0"><strong>ACESSAR LOJA</strong></router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
