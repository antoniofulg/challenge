<template>
    <card :padding="true">
        <div class="text-center">
            <img :src="item.image_url">
        </div>
        <div>
            <h4 class="text-danger mt-3">
                <strong>
                    {{ item.name }}
                </strong>
            </h4>
            <h4 class="text-secondary mt-3">
                <strong>
                    PG$ {{ item.price }}
                </strong>
            </h4>
            <button @click="$emit('addToCart', item)" class="btn btn-danger btn-block mt-4 py-3 px-5 rounded-0">
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