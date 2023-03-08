<template>
    <div class="text-caption">
        <div class="container2">
            <img alt="odontoprev" src="img/logoodonto.png" />
            <div class="infoslogo">
                odontoprev.com.br<br><br>

                Política de privacidade<br>
                Termos e condições<br>
                ANS<br>
                Institucional<br>
                Imprensa<br>
                Trabalhe conosco<br>
                Fornecedor
            </div>
            <div class="linha-vertical"></div>
            <div class="infoslogo2">
                Porque comprar?<br>
                Encontre seu dentista<br>
                Conheça os planos<br>
                Dúvidas<br>
                Login
            </div>
        </div>
        <div class="text-caption">
            <div class="container3">
                <v-card elevation="10" outlined shaped width="247" height="204">
                    <div class="novidades">
                        Receba novidades
                    </div>
                    <div class="email">
                        <v-form v-model="valid">
                            Seu email
                            <v-text-field v-model="email" :rules="emailRules" label="email@email.com.br"
                                required></v-text-field>
                        </v-form>
                    </div>
                    <div class="inscrever">
                        <v-btn elevation="8" small color="#ff6052">
                            <div class="textinscrever">INSCREVER</div>
                        </v-btn>

                    </div>
                </v-card>
            </div>
        </div>
        <div class="container4">
            <div class="redes">
                Siga-nos nas redes sociais

            </div>
            <div class="logo1">
                <input type="image" src="img/logofacebook.png"
                    style="border: solid; border-radius: 10px; border-color: #67deff;" height="42" width="42" />
            </div>
            <div class="logo1">
                <input type="image" src="img/logolink.png"
                    style="border: solid; border-radius: 10px; border-color: #67deff;" height="42" width="42" />

            </div>
            <div class="logo1">
                <input type="image" src="img/logoyoutube.png"
                    style="border: solid; border-radius: 10px; border-color: #67deff;" height="42" width="42" />
            </div>
            <div class="logo1">
                <input type="image" src="img/logoinstagram.png"
                    style="border: solid; border-radius: 10px; border-color: #67deff;" height="42" width="42" />
            </div>

        </div>
        <div class="container5">
            <div class="anv">
                <img alt="anvisa" src="img/anvisa.png" height="20" width="140" />
                OdontoPrev - CRO/SP nº 2728 | RT J. M. Benozatti - CRO/SP nº 19009
            </div>
            <div class="cep">
                © Odontoprev. S/A / CNPJ: 58.119.199/0001-51 - Av. Dr. Marcos Penteado de Ulhôa Rodrigues, 939 - 14º
                andar - Edifício Jatobá Torre II - Tamboré - Barueri-SP - CEP-06460-040
            </div>

        </div>
    </div>
</template>

<script>


export default {}
</script>

<style scoped>
.container2 img {
    margin-top: 220px;
    margin-left: 132px;
}

.infoslogo {
    margin-top: 2px;
    margin-left: 130px;
    font-size: 12px;
    color: rgb(252, 250, 250);

}

.infoslogo2 {
    margin-top: -124px;
    margin-left: 320px;
    font-size: 12px;
    color: rgb(252, 250, 250);
}

.linha-vertical {
    height: 130px;
    border-left: 1px solid;
    color: black;
    margin-left: 280px;
    margin-top: -132px;
    color: white;
}

.container3 {
    margin-left: 850px;
    margin-top: -90px;
}

.novidades {
    margin-top: 20px;
    margin-left: 30px;
    color: #0066ff;
    font-weight: bold;
    font-size: 18px;
}

.email {
    width: 200px;
    margin-left: 24px;
    margin-top: 10px;

}

.inscrever {
    margin-left: 60px;
}

.textinscrever {
    color: white;
}

.logo1 {
    height: 52px;
    width: 52px;
    display: inline-block;
    margin-left: 3px;
    margin-right: 3px;

}



.redes {
    font-weight: bold;
    font-size: 18px;
    color: white;
    margin-bottom: 10px;
    margin-left: 3px;
}

.container4 {
    margin-left: 500px;
    margin-top: -100px;
}

.container5 {
    margin-left: 220px;
    margin-top: 50px;
    color: white;
    font-size: 10px;
}
</style>
