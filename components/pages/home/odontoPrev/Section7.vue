<script setup lang="ts">
const logos = [
  'drogaria-sao-paulo',
  'drogaria-pacheco',
  'invisalign',
  'amigoo',
  'livelo',
  'picpay',
]
</script>

<template>
  <v-container id="odp-home-section-7" tag="section" class="bg-primary-darken-2 text-white pb-8">
    <div class="text-center text-md-left">
      <h2 class="font-weight-bold mb-6">
        Clube de benefícios Odontoprev
      </h2>
      <p class="mb-16" style="max-width: 600px">
        Aproveite as vantagens de ser cliente Odontoprev e utilize os benefícios como descontos em produtos entre
        outros.
        Temos diversos parceiros entre farmácias, planos odontológicos pet e tratamentos especiais como Invisalign*.
        Veja
        abaixo alguns de nossos parceiros.
      </p>

      <v-row class="mb-16">
        <v-col v-for="(logo, i) in logos" :key="i" cols="6" md="4" class="px-8 d-flex align-center">
          <v-img :src="`/images/odontoPrev/partners/${logo}.png`" contain max-width="200px" max-height="100px" />
        </v-col>
      </v-row>

      <v-btn class="text-primary" size="large" rounded="lg">
        Conheça os benefícios
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss">
$padding: 200px;

#odp-home-section-7 {
  position: relative;
  overflow: hidden;
  padding-top: $padding;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: calc($padding * 2);
    top: 0;
    left: 0;
    background-color: #F9FDFF;
    border-radius: 100%;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 600px) {
    &::before {
      height: $padding;
    }
  }

  @media screen and (min-width: 600px) {

    > div {
        max-width: 50%;
        margin-right: auto;
      }

    &::after {
      content: '';
      position: absolute;
      width: 40%;
      max-width: 750px;
      height: calc(100% - $padding);
      top: $padding;
      right: 0;
      background-size: 100% 100%;
      background-image: url(/images/odontoPrev/home/img-3.png);
    }
  }

}
</style>
