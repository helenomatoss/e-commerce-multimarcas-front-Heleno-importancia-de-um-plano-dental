<template>

    <body>
        <div>
            <div class="escrita">
                <div class="titulo">
                    <h1>Clube de benefícios Odontoprev</h1>
                </div>
                <div class="info">
                    <h5>Aproveite as vantagens de ser cliente Odontoprev e utilize os benefícios como descontos em
                        produtos<br>
                        entre outros. Temos diversos parceiros entre farmácias, planos odontológicos pet e tratamentos
                        especiais<br>
                        como Invisalign*. Veja abaixo alguns de nossos parceiros.</h5>

                </div>

            </div>

            <div class="basemarcas">
                <div class="base1">
                    <div class="im1"><img alt="saopaulo" src="img/saopaulo.png" /></div>
                    <div class="im1"><img alt="pacheco" src="img/pacheco.png" /></div>
                    <div class="im1"><img alt="invisaling" src="img/invisaling.png" /></div>
                </div>

                <div class="base2">
                    <div class="im1"><img alt="amigo" src="img/amigoo.png"></div>
                    <div class="im1"><img alt="livelo" src="img/livelo.png"></div>
                    <div class="im1"><img alt="picpay" src="img/picpay.png"></div>
                </div>
            </div>
            <div class="principal2">
                <img alt="imgprinciapl2" src="img/imgparceiros.png">
            </div>
            <div class="bbeneficios">
                <v-btn elevation="24">
                    <div class="fontcor">Conheça os benefícios</div>
                </v-btn>
            </div>
        </div>

    </body>
</template>

<script>
export default {}

</script>

<style scoped>
.im1 {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
}

.base2 {
    margin-top: 30px;
    margin-left: 35px;
}

.basemarcas {
    margin-top: 80px;
    line-height: 10px;
    margin-left: 50px;
}

.titulo {
    text-size-adjust: 32px;
    margin-left: 70px;

}

.info {
    margin-top: 30px;
    margin-left: 70px;
}

.escrita {
    margin-top: 230px;
    color: rgb(255, 255, 255);
}

.principal2 {
    margin-left: 815px;
    margin-top: -457px;
    width: 100px;
}

.bbeneficios {
    margin-top: -70px;
    margin-left: 70px;
}

.fontcor {
    color: #0066ff;
}

.allmarcas {}
</style>
