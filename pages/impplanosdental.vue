<template>
    <div class="font-soleto">
        <div class="font-soleto">
            <InfPlanosDentais />
        </div>
        <div class="BLeft">
            <div class="B1">
                <bloco1 />
            </div>
            <div class="B2">
                <bloco2 />
            </div>
        </div>
        <div class="BRight">
            <div class="B3">
                <bloco3 />
            </div>
            <div class="B4">
                <bloco4 />
            </div>
        </div>
        <div class="principal">

            <principal />

        </div>
    </div>
    <div>
        <div class="sessao2">
            <div class="marca">
                <marcas />
            </div>
        </div>
    </div>




</template>

<script>
import InfPlanosDentais from '~~/components/InfPlanosDentais.vue'
import bloco1 from '~~/components/bloco1.vue'
import bloco2 from '~~/components/bloco2.vue'
import bloco3 from '~~/components/bloco3.vue'
import bloco4 from '~~/components/bloco4.vue'
import principal from '~~/components/principal.vue'
import marcas from '~~/components/marcas.vue'

export default {
    name: 'Impplanosdental',
    components: {
        InfPlanosDentais,
        bloco1,
        bloco2,
        bloco3,
        bloco4,
        principal,
        marcas,
    },
}
</script>

<style>
.BRight {

    margin-left: 880px;
    margin-top: -200px;

}

.BLeft {

    margin-left: 100px;
    margin-top: 80px;
}

.principal {
    margin-left: 480px;
    margin-top: -230px;
}

.B4 {
    margin-top: 82px;
}

.B2 {
    margin-top: 82px;
    margin-left: 15px;
}

.sessao2 {

    width: 1274px;
    height: 746px;
    background-image: url(img/mascara1.png);
    margin-left: -30px;
    position: absolute;
}
</style>
