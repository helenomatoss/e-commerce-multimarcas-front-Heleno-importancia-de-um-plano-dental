<template>
    <div>
        <div class="container">
            <div class="styerodape">

                <infosrodape />

            </div>
        </div>
    </div>

</template>

<script>
import infosrodape from '~~/components/infosrodape.vue';

export default {
    name: 'rodape',
    components: {
        infosrodape,
    }
}
</script>

<style scoped>
.container {
    background-image: url(img/mascara3.png);
    width: 1274px;
    height: 746px;
    margin-left: -35px;
}
</style>