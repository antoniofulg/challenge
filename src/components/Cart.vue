<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header shadow-sm">
                    <h4 class="text-danger mt-3"><strong>Carrinho de Compras</strong></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6"><h5 class="text-danger"><strong>Itens</strong></h5></div>
                        <div class="col-6"><h5 class="text-danger"><strong>Qtd.</strong></h5></div>
                    </div>
                    <div class="row">
                        <div class="col-6"><h5 class="text-danger"><strong>Concha azul</strong></h5></div>
                        <div class="col-6">Ícones</div>
                    </div>
                </div>
                <div class="modal-footer top-shadow-sm">
                    <div class="row">
                        <div class="col-4">
                            <h5><strong class="text-danger">TOTAL</strong></h5>
                        </div>
                        <div class="col-8 text-right">
                            <h5><strong class="text-secondary">PG$ 159,90</strong></h5>
                        </div>
                        <div class="col-12 mt-3">
                            <button class="btn btn-danger btn-block py-3 px-5 rounded-0" @click="$emit('hideModal')"><strong>EFETUAR PAGAMENTO</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Card from './Card'

export default {
    // components: {Card},

    // props: ['id']
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.top-shadow-sm {
    box-shadow: .25rem .125rem 0 rgba(0,0,0,.075)!important;
}
</style>