// src/mocks/handlers.js
import { rest } from 'msw'
import type { IEspecialidade, IPlan, IProduct } from '~~/types/product'

const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
const randomFloatFromInterval = (min: number, max: number) => parseFloat((Math.random() * (max - min + 1) + min).toFixed(2))

const generateEspecialidades = (codigoPlano: number): IEspecialidade[] => {
  return new Array(randomIntFromInterval(1, 10)).fill({
    codigo: Math.floor(Math.random() * 100),
    codigoPlano,
    nome: 'Especialidade',
    diasCarencia: Math.floor(Math.random() * 100),
  }).map((e, i) => ({ ...e, nome: `Especialidade ${i}` }))
}

const generatePlans = (nomeFantasia: string): IPlan[] => {
  const precoMensal = randomFloatFromInterval(23, 150)
  const precoAnual = (precoMensal * 12) - (precoMensal * 12 * 0.10)
  const codigoPlano = Math.floor(Math.random() * 10000)
  const especialidades = generateEspecialidades(codigoPlano)

  return [
    {
      nomeFantasia,
      registroAns: '',
      codigoPlano,
      tipoNegociacao: 'MENSAL',
      valorTitular: precoMensal,
      valorDependente: precoMensal,
      coParticipacao: 'S',
      especialidades,
    },
    {
      nomeFantasia,
      registroAns: '',
      codigoPlano,
      tipoNegociacao: 'ANUAL',
      valorTitular: precoAnual,
      valorDependente: precoAnual,
      coParticipacao: 'N',
      especialidades,
    },
  ]
}

const generateProducts = (): IProduct[] => [
  {
    nome: 'Dente de Leite',
    faxaEtaria: 'de 0 a 7 anos',
    sku: '',
    destaque: true,
    mais_vendido: false,
    vantagens: '',
    coberturas: [
      {
        cobertura: 'Cobertura Rol ANS',
        link: {
          text: 'Rol ANS',
          href: 'https://www.odontoprevonline.com.br/sites/default/files/Plano-Dente-de-Leite.pdf',
        },
      },
    ],
    logo: 'bebe',
    planos: generatePlans('Dente de Leite'),
  },
  {
    nome: 'Dental Júnior',
    faxaEtaria: 'de 8 a 16 anos',
    sku: '',
    destaque: true,
    mais_vendido: false,
    vantagens: '',
    coberturas: [{
      cobertura: 'Cobertura Rol ANS',
      link: {
        text: 'Rol ANS',
        href: 'https://www.odontoprevonline.com.br/sites/default/files/Plano%20Dental%20Junior.pdf',
      },
    }],
    logo: 'controle',
    planos: generatePlans('Dental Júnior'),
  },
  {
    nome: 'bem-estar mais',
    sku: '',
    destaque: true,
    mais_vendido: true,
    vantagens: '',
    coberturas: [{
      cobertura: 'Cobertura Rol ANS',
      link: {
        text: 'Rol ANS',
        href: 'https://www.odontoprevonline.com.br/sites/default/files/bem-estar.pdf',
      },
    }, { cobertura: 'Documentação Ortodôntica' }, { cobertura: 'Concorra a R$ 10.000 mensalmente' }],
    logo: 'coracao',
    planos: generatePlans('Dental \nbem-estar\n mais'),
  },
  {
    nome: 'Estética mais',
    sku: '',
    destaque: true,
    mais_vendido: false,
    vantagens: '',
    coberturas: [{
      cobertura: 'Cobertura Rol ANS',
      link: {
        text: 'Rol ANS',
        href: 'https://www.odontoprevonline.com.br/sites/default/files/Plano-Dental-Estetica_0.pdf',
      },
    }, { cobertura: 'Placa de clareamento + Gel' }, { cobertura: 'Documentação Ortodôntica' }, { cobertura: 'Concorra a R$ 10.000 mensalmente' }],
    logo: 'sorriso',
    planos: generatePlans('Dental \nEstética\n mais'),
  },
  {
    nome: 'Orto Total',
    sku: '',
    destaque: true,
    mais_vendido: false,
    vantagens: '',
    coberturas: [{
      cobertura: 'Cobertura Rol ANS',
      link: {
        text: 'Rol ANS',
        href: 'https://www.odontoprevonline.com.br/sites/default/files/Plano-Dental-Orto.pdf',
      },
    }, { cobertura: 'Colocação + Manutenção de Aparelho' }, { cobertura: 'Placa de clareamento + Gel' }, { cobertura: 'Documentação Ortodôntica' }, { cobertura: 'Concorra a R$ 10.000 mensalmente' }],
    logo: 'dente-aparelho',
    planos: generatePlans('Dental\n Orto\n Total'),
  },
]

export default [
  rest.get('https://api.odontoprev.com.br:8243/products', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),

      ctx.json(generateProducts()),
    )
  }),
]
