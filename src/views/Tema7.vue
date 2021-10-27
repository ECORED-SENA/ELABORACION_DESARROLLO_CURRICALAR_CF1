<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Enseñanza
    .row.mb-5
      .col-lg-8.slideInLeft
        p.mb-4  Al hablar de enseñanza es importante distinguirla como un concepto complejo que requiere una serie de consideraciones reflexivas y pedagógicas, entendiendo la enseñabilidad y la educabilidad como dos elementos movilizadores de cualquiera de los modelos pedagógicos. Enseñar se refiere al acto docente por antonomasia “docere”, y se encarga de establecer puentes entre los saberes disciplinares, científicos, epistemológicos, entre otros y las estructuras cognitivas de los discentes logrando una didáctica de contenidos académicos, haciéndolos más accesibles, comprensibles y aplicables. 
        .cajon.color-secundario.p-4.mb-4
          p.mb-0  La concepción de enseñanza está directamente ligada a la corriente pedagógica elegida por la institución y la práctica específica del instructor, en el caso del SENA, dado que cada expresión pedagógica proporciona un rol protagónico a unos, a otros o a todos dentro del proceso educativo.
        p Como componente educativo, la enseñanza también está expuesta a ser reflexionada, entendiendo que la manera clásica de intervenir la investigación educativa ha recaído sobre el rol de quien aprende, pero es necesario que las maneras de enseñar también entren en tensiones que permitan la reflexión sobre los procedimientos, métodos y estrategias utilizadas para la transmisión u orientación para adquirir los conocimientos.
      .col-lg-4.slideInRight
        figure
          img(src='@/assets/curso/t7-i1.svg' alt='imagen decorativa')

    h3.titulo-tercero
      i.fas.fa-angle-double-right 
      | &nbsp; Enseñabilidad

    .row.mb-5
      .col-lg-2
        figure(data-aos="flip-up")
          img.nW(src='@/assets/curso/t7-i2.svg' alt='imagen decorativa')
      .col-lg-10
        p.mb-3   Gallego y Pérez (1998), sostienen que la enseñabilidad es competencia y jurisdicción de los docentes quienes, sustentados en los saberes epistemológicos, pedagógicos y didácticos, de carácter investigativo, están en capacidad de poner en planos digeribles los conocimientos para que posteriormente sean tomados por los discentes. Esta concepción es importante dado que alberga la necesidad de didactizar, buscando la accesibilidad, como ya se había mencionado.


    p.mb-5  Por otro lado, de acuerdo con Gallego y Pérez (1998) la enseñabilidad puede ser planteada desde múltiples interrogantes: 

    .row.mb-5.justify-content-center
      .col-lg-10
        figcaption.customCaption  <b>Figura</b> Tipos de proyectos
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t7-i3.svg' alt='imagen decorativa')
        figcaption  Nota. Tomada de Pecore (s.f.)

    .row.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-5(data-aos="slide-left")
          p.mb-0  El ejercicio de los instructores SENA, debe girar en torno a estas y otras preguntas, dado que el aprendizaje significativo, como ideal de los procesos de formación, no solo está sujeto a las condiciones cognoscitivas de los aprendices, también a la elección correcta de las formas didácticas a aplicar dependiendo de la identidad de los grupos, pasando por la identificación y reconocimiento de la heterogeneidad entre ellos y los individuos y, finalmente, perseverando en el empeño de fijar de la mejor manera y por el mayor tiempo posible los conceptos y procedimientos, <i>episteme y tekhné</i>.
        p(data-aos="slide-right") Si bien pueden ser conceptos de fácil confusión, la enseñabilidad y la educabilidad generan complementos en la labor que, finalmente, pretenden los procesos formativos. Así, educar, <i>“educare”</i>, se refiere a un acto donde confluyen muchos actores, escenarios, contextos, cosmovisiones y que finalmente redundan en la edificación de la personalidad, los saberes y las aplicaciones prácticas de los individuos inmersos en los procesos educativos.
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t7-i5.jpg' alt='imagen decorativa')        






</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
