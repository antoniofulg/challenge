<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header shadow-sm">
                    <h4 class="text-danger mt-2"><strong>Carrinho de Compras</strong></h4>
                    <button @click="$emit('hideModal')" type="button" class="btn mt-1">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div v-if="cartList.length > 0" class="modal-body">
                    <div class="row mb-3">
                        <div class="col-7"><h5 class="text-danger"><strong>Itens</strong></h5></div>
                        <div class="col-5"><h5 class="text-danger"><strong>Qtd.</strong></h5></div>
                    </div>
                    <div class="row" v-for="(item, index) in cartList" :key="item.id">
                        <span v-if="index >= 1" class="col-12"><hr></span>
                        <div class="col-7">
                            <img class="mb-2" :src="item.image_url" width="200px">
                            <h6 class="text-danger text-center"><strong>
                                {{item.name}}
                            </strong></h6>
                        </div>
                        <div class="col-5">
                            <div class="row">
                                <div class="col-3 text-danger">
                                    <span @click="removeItemQtyOnCartList(item)">
                                        <i class="fas fa-minus-square"></i>
                                    </span>
                                </div>
                                <div class="col-3">
                                    {{item.qty}}
                                </div>
                                <div class="col-3 text-danger">
                                    <span @click="addItemQtyOnCartList(item)">
                                        <i class="fas fa-plus-square"></i>
                                    </span>
                                </div>
                                <div class="col-3 text-danger">
                                    <span @click="removeItemCartList(item)">
                                        <i class="fas fa-trash"></i>
                                    </span>
                                </div>
                                <div class="col-12">
                                    <h6 class="text-muted text-center"><strong>
                                        PG$ {{item.price.toLocaleString('pt-BR', {'minimumFractionDigits':2,'maximumFractionDigits':2})}}
                                    </strong></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="modal-body text-center">
                    <h6 class="text-danger mt-2"><strong>Seu carrinho de compras está vazio!</strong></h6>
                </div>
                <div v-if="cartList.length > 0" class="modal-footer top-shadow-sm">
                    <div class="row">
                        <div class="col-4">
                            <h5><strong class="text-danger">TOTAL</strong></h5>
                        </div>
                        <div class="col-8 text-right">
                            <h5><strong class="text-secondary">PG$ {{totalPrice}}</strong></h5>
                        </div>
                        <div class="col-12 mt-3">
                            <button @click="checkout" class="btn btn-danger btn-block py-3 px-5 rounded-0"><strong>EFETUAR PAGAMENTO</strong></button>
                        </div>
                    </div>
                </div>
                <div v-else class="modal-footer top-shadow-sm">
                    <div class="row">
                        <div class="col-12">
                            <button class="btn btn-danger btn-block py-3 px-5 rounded-0" @click="$emit('hideModal')"><strong>ADICIONAR CONCHAS AO CARRINHO</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
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
        ...mapActions(['addItemQtyOnCartList', 'removeItemCartList', 'removeItemQtyOnCartList']),

        checkout() {
            this.$emit('hideModal')
            this.$router.push({name: 'checkout'})
        },
    },
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