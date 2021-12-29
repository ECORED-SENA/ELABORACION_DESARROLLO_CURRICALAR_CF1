<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t0-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este material se considera una guía para los equipos de desarrollo curricular, en la resignificación de los conceptos relativos con la <b>Formación para el Trabajo y el Desarrollo Humano (FTDH)</b>, por lo que se invita a observar la introducción al mismo.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VTs3BK5zjuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    







</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
