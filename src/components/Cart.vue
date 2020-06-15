<template>
<div class="wrapper shadow-sm">
    <div class="header">
        <div class="inner text-center align-middle px-3 border-bottom">
            <h4 class="text-danger d-inline">
                <strong class="mt-2">
                    Carrinho de Compras
                </strong>
            </h4>
            <span @click="$emit('hideModal')" class="btn ml-3 text-danger"><i class="fas fa-times"></i></span>
        </div>
    </div>
    <div class="content">
        <div class="inner">
        <div class="scrollable">
            <div v-if="cartList.length > 0" class="modal-body">
                <div class="row mb-3">
                    <div class="col-7"><h5 class="text-danger"><strong>Itens</strong></h5></div>
                    <div class="col-5"><h5 class="text-danger"><strong>Qtd.</strong></h5></div>
                </div>
                <div class="row" v-for="(item, index) in cartList" :key="item.id">
                    <span v-if="index >= 1" class="col-12"><hr></span>
                    <div class="col-7">
                        <img class="mb-2" :src="item.image_url" width="100%">
                        <h6 class="text-danger text-center"><strong>
                            {{item.name}}
                        </strong></h6>
                    </div>
                    <div class="col-5">
                        <div class="row pt-5">
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
        </div>
        </div>
    </div>
    <div class="footer">
        <div class="inner">
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

@media (min-width: 1800px) {
    .wrapper {
        margin-top: 78px;
        right: 0;
        height: 90%;
        width: 20%;
    }
}

@media (min-width: 1200px) and (max-width: 1799px) {
    .wrapper {
        margin-top: 78px;
        right: 0;
        height: 90%;
        width: 30%;
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .wrapper {
        margin-top: 78px;
        right: 0;
        height: 90%;
        width: 35%;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .wrapper {
        margin-top: 78px;
        right: 0;
        height: 90%;
        width: 50%;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    .wrapper {
        margin-top: 78px;
        left: 25%;
        height: 90%;
        width: 50%;
    }
}

@media (max-width: 575px) {
    .wrapper {
        margin-top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
}

.wrapper {
    position: fixed;
    z-index: 9998;
    top: 0;
    display: table;
}

.header, .content, .footer {
    display: table-row;
}
.header, .footer {
    height: 100px;
    background: #FFF;
}
.inner {
display: table-cell;
}
.content .inner {
    height: 100%;
    position: relative;
    background: #FFF;
}
.scrollable {
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    overflow: auto;
}
</style>