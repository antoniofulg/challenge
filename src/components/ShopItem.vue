<template>
    <card>
        <div class="text-center">
            <img :src="item.image_url" width="100%">
        </div>
        <div>
            <h5 class="text-danger mt-3">
                <strong>
                    {{ item.name }}
                </strong>
            </h5>
            <h5 class="text-secondary mt-3">
                <strong>
                    PG$ {{ item.price.toLocaleString('pt-BR', {'minimumFractionDigits':2,'maximumFractionDigits':2}) }}
                </strong>
            </h5>
            <button @click="$emit('addToCart', item)" class="btn btn-danger btn-block mt-4 py-3 px-4 rounded-0">
                <strong>
                    ADD CARRINHO
                </strong>
            </button>
        </div>
    </card>
</template>

<script>
import Card from './Card'

export default {
    components: {Card},

    props: ['item']
}
</script>