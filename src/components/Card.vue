<template>
    <div class="card rounded-0 shadow-sm">
        <div
            class="card-body"
            :class="{'py-5': padding}"
        >
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['padding']
    }
</script>