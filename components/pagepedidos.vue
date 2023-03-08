<template>
    <div class="text-caption">
        <div class="container1">
            <div class="cabecalho"></div>
            <div class="logo">
                <img alt="logoodp" src="img/logoodonto.png">
            </div>
            <div class="icon12">
                icon 1 e 2
            </div>
        </div>
        <div class="container2">
            <div class="conj1">
                <div>
                    <div class="circulo1"></div>
                </div>
                <div class="imgcheck">
                    <img alt="check" src="img/check2.png">
                </div>

            </div>
            <div>
                <hr width="14%">
            </div>
            <div class="conj2">
                <div>
                    <div class="circulo2"> </div>
                </div>
                <div>
                    <div class="infocirculo2">2</div>
                </div>

            </div>

        </div>
        <div class="container3">
            <div class="infocirculos">
                <div class="textc1">Cadatrar o titular<br>Do plano</div>
                <div class="textc2">Detalhes e pagamento</div>

            </div>
        </div>
        <div class="container4">
            <img alt="sorrindo" src="img/mascara-mulher-sorrindo.png">
        </div>
        <div class="carrinho-resumo">
            <img alt="carrinho" src="img/carrinhoodp.png">
            <div class="textresu">Resumo do pedido</div>
        </div>

        <div class="plano">
            <v-card elevation="2" outlined shaped width="392" height="172">
                <div>
                    <img src="img/sorriso-transformed.png" alt="sorriso">
                    <div class="planos">
                        <img src="img/Plano.png" alt="planos">
                    </div>
                    <div class="dental">
                        <img src="img/Dental.png" alt="dental">
                    </div>

                </div>
                <hr class="linha2" width="90%">
                <div>
                    <div class="contrato">
                        <img src="img/ContratoMensal.png" alt="contrato">
                    </div>
                    <div class="carencia">Carência: 90 dias para<br>tratamento e 180 dias<br>para prótese.</div>
                </div>
                <div class="valor-mensal">
                    <div class="rs">R$</div>
                    <div class="num">100</div>
                    <div class="num2">,72</div>
                    <div class="mensal2">Mensal</div>
                    <div class="forma">débito em conta / cartão</div>

                </div>
            </v-card>
        </div>
        <div class="pagamento">
            <v-card elevation="2" outlined shaped width="450" height="550">
                <div class="mais">+</div>
                <h2 class="confirme">Confirme os beneficiários</h2>
                <div class="titular">Titular</div>
                <div class="nome">Kleber Gomes De Lima </div>
                <div class="valor">R$100,72</div>
                <div class="dependente">Adicionar dependente</div>
                <hr class="linha1" width="90%">
                <div class="vidas">Vidas</div>
                <div class="total">Total: R$ 100, 72</div>
                <div class="total2">Total:01
                    <div class="mensal">Mensal</div>
                </div>
                <div class="proposta">Aceite da proposta</div>
                <div class="btprop">
                    <v-btn elevation="2" small color="#ff6052">
                        <div class="verprop">VER PROPOSTA</div>
                    </v-btn>
                </div>

            </v-card>
        </div>
        <div class="rodape"></div>
        <div class="container-rodape">

            <div class="logope">
                <img alt="logope" src="img/logoodonto.png">
            </div>
            <div class="linkodp">odontoprev.com.br</div>
            <div class="linha-vertical"></div>
            <div class="termosall">
                <div class="privacidade">Política de privacidade</div>
                <div class="termos">Termos e condições</div>
            </div>
        </div>
        <div class="container-ans">
            <img src="img/anvisa.png" alt="anvisa" class="ans">
            <div class="inf1">OdontoPrev - CRO/SP nº 2728 | RT J. M. Benozatti - CRO/SP nº 19009</div>
            <div class="inf2">© Odontoprev. S/A / CNPJ: 58.119.199/0001-51 - Av. Dr. Marcos Penteado de Ulhôa Rodrigues,
                939 - 14º andar - Edifício Jatobá Torre II - Tamboré - Barueri-SP - CEP-06460-040</div>
        </div>
    </div>

</template>

<script>


export default {}
</script>

<style scoped>
.forma {
    font-size: 8px;
    margin-left: 280px;
}

.mensal2 {
    margin-left: 330px;
    font-size: 12px;
    font-weight: bold;
    color: #0066ff;

}

.num2 {
    margin-left: 330px;
    margin-top: -25px;
    color: #0066ff;
    font-weight: bold;
    font-size: 20px;
}

.num {
    margin-left: 225px;
    margin-top: -5px;
    font-size: 60px;
    font-weight: bold;
    color: #0066ff;
}

.rs {
    margin-left: 200px;
    margin-top: -60px;
    font-size: 18px;
    font-weight: bold;
    color: #0066ff;
}

.carencia {
    line-height: 12px;
    font-size: 9px;
    margin-left: 22px;
}

.contrato {
    margin-left: 20px;
    margin-top: 10px;
}

.planos {
    margin-top: -50px;
    margin-left: 90px;
}

.dental {
    margin-left: 89px;
    margin-top: -17px;
}

.linha2 {
    margin-left: 20px;
    margin-top: 5px;
    opacity: 0.5;
    color: #0066ff;
}



.btprop {
    margin-left: 30px;
    margin-top: 15px;
}

.verprop {
    color: white;
    font-weight: bold;
    text-align: center;
}

.proposta {
    font-size: 24px;
    color: #0066ff;
    font-weight: bold;
    margin-left: 22px;
    margin-top: 65px;
}

.mais {
    font-weight: bold;
    margin-top: 20px;
    margin-left: 25px;
    color: #ff6052;
}

.mensal {
    margin-left: 360px;
    margin-top: -18px;
}

.total2 {
    font-weight: bold;
    margin-left: 22px;
}

.total {
    margin-left: 325px;
    margin-top: -18px;
}

.vidas {
    margin-left: 22px;
    margin-top: 2px;
}

.linha1 {
    margin-left: 20px;
    margin-top: 25px;
    opacity: 0.5;
}

.dependente {
    color: #ff6052;
    font-weight: bold;
    margin-left: 60px;
    margin-top: 10px;
}

.valor {
    margin-left: 370px;
    margin-top: -20px;
}

.nome {
    margin-left: 30px;
    font-weight: bold;
    color: #4d4e53;
    margin-top: 2px;
}

.titular {
    margin-left: 30px;
    margin-top: 10px;

}

.confirme {
    color: #0066ff;
    margin-left: 30px;
    margin-top: 25px;
    font-size: 24px;
    font-weight: bold;
}

.inf2 {
    color: white;
    margin-left: 109px;
    margin-top: 4px;

}

.inf1 {
    color: white;
    margin-left: 360px;
    margin-top: -25px;

}

.ans {
    margin-top: 100px;
    margin-left: 150px;
}

.container-rodape {
    margin-left: 100px;
}

.linha-vertical {
    height: 100px;
    border-left: 1px solid;
    color: black;
    margin-left: 350px;
    margin-top: -80px;
    color: white;
}

.termosall {
    margin-left: 400px;
    margin-top: -90px;
    color: white;
}

.termos {
    margin-left: 170px;
    margin-top: -19px;
}

.privacidade {}

.linkodp {

    margin-left: 70px;
    margin-top: 10px;
    color: white;

}

.logope {
    margin-top: -190px;
    margin-left: 50px;
}

.rodape {
    width: 100%;
    height: 224px;
    background-color: #0066ff;
    margin-top: 300px;
}

.pagamento {
    margin-left: 65px;
    margin-top: 20px;
}

.plano {
    margin-left: 65px;
    margin-top: 20px;
}

.carrinho-resumo {
    margin-top: -530px;
    margin-left: 70px;
}

.textresu {
    color: #0066ff;
    margin-left: 70px;
    margin-top: -25px;
    font-weight: bold;
    font-size: 30px;
}

.container4 {
    margin-left: 670px;
    margin-top: -192px;
}

.textc2 {
    margin-top: -40px;
    margin-left: 340px;
    color: #0066ff
}

.textc1 {
    margin-top: 20px;
    text-align: center;
    margin-right: 900px;
    color: #67deff;
}


.cabecalho {
    width: 100%;
    height: 70px;
    background-color: #0066ff;
}

.logo {
    width: 238px;
    height: 40px;
    margin-top: -58px;
    margin-left: 15px;
}

.circulo1 {
    background: #67deff;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-top: 100px;
    margin-left: 130px;
}

.circulo2 {
    background: #0066ff;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-top: -10px;
    margin-left: 370px;
}

hr {
    margin-left: 190px;
    margin-top: -16px;
    opacity: 0.4;
}


.infocirculo2 {
    margin-left: 388px;
    margin-top: -34px;
    color: white;

}

.conj1 {
    margin-top: -80px;
}


.conj2 {
    margin-left: 10px;
    margin-top: -20px;
}

.imgcheck {
    margin-left: 146px;
    margin-top: -32px;
}

.container2 {
    margin-top: 150px;
}

.icon12 {
    margin-left: 1050px;
}
</style>
