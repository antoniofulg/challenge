<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger py-3">
    <div class="container">
      <a class="navbar-brand">Olá, Paguru</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <!-- To put UL to right margin -->
        <div class="mr-auto"></div>
        <ul class="navbar-nav">
          <li class="nav-item active mr-2">
            <a class="nav-link" @click="$emit('showModal')"><i class="fas fa-shopping-cart fa-lg"></i></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link"><i class="fas fa-sign-out-alt fa-lg"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>