<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Teorías de aprendizaje

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.slideInUp 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.nW(src='@/assets/curso/t6-i1.svg' alt='imagen decorativa')
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-0 <b>La psicología cognitiva ha desarrollado diversos constructos para explicar cómo aprende un individuo y a través de que estrategias y acciones se promueve este aprendizaje.</b> Este documento en particular hará referencia a dos teorías en las que el sujeto que aprende es protagonista en la construcción de nuevos conceptos y categorías para su aplicación en problemas y situaciones del mundo real; son ellas las teorías del aprendizaje significativo de David Ausubel y la teoría sociocultural de Lev Vygotsky. Este marco posibilitará la comprensión del cómo operan las estrategias de aprendizaje activo para su puesta en práctica en el desarrollo curricular en el SENA.
    
    #t_6_1.titulo-segundo
      h2  6.1  Aprendizaje significativo
    .row.mb-5
      .col-lg-7
        p.mb-3(data-aos="slide-right")  La teoría del aprendizaje significativo de David Ausubel plantea que el aprendizaje del sujeto depende de los conocimientos ya que tiene incorporados en su estructura cognitiva y cómo estos le permiten construir nuevo conocimiento a partir de organizarlos, articularlos y jerarquizarlos con los conocimientos que ya posee. Para los instructores, quienes de manera intencionada promueven y orientan la construcción de saber, es importante saber la cantidad de información que poseen los aprendices, cuáles son los conceptos y proposiciones que manejan y su grado de estabilidad.
        p.mb-3(data-aos="slide-right")  Los principios de aprendizaje propuestos por Ausubel ofrecen el marco para el diseño de habilidades metacognitivas que permiten conocer la organización de las ideas, conceptos y categorías con que viene el aprendiz al iniciar un proceso de construcción de nuevo conocimiento, así, guiar mejor el proceso de adquisición y fortalecimiento de competencias que le permitirán desempeñarse en ámbitos reales, pues ellos tienen una serie de experiencias y conocimientos que afectan su aprendizaje y pueden ser aprovechados para su beneficio.
      
      .col-lg-5
        figure(data-aos="slide-left")
          img(src='@/assets/curso/t6-i2.png' alt='imagen decorativa')
    .row.mb-5.justify-content-center
      .col-lg-10 
        .tarjeta.color-secundario.p-3(data-aos="flip-left")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t6-m1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Aprendizaje Significativo y Aprendizaje Mecánico
                  p.text-small Para ampliar las características generales y requisitos del aprendizaje significativo, se invita a consultar el anexo 2 “Aprendizaje significativo”. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download




    Separador
    br
    br

    #t_6_2.titulo-segundo
      h2  6.2  Teoría de aprendizaje sociocultural


    #t_6_3.titulo-segundo
      h2  6.3  Estrategias de aprendizaje
      
      

    #t_6_4.titulo-segundo
      h2  6.4  Aprendiz



    #t_6_5.titulo-segundo
      h2  6.5  Estilos de aprendizaje


    Separador
    br
    br

    #t_6_6.titulo-segundo
      h2  6.6 Aprendizaje con TIC

    .row.mb-5
      .col-lg-8
        p.mb-4 Cuando la incorporación de la tecnología lleva implícita una reflexión previa de los instructores como los encargados de planear y diseñar las actividades de aprendizaje y la práctica de enseñanza se centra en el aprendizaje, creando ambientes donde las Tecnologías de la Información y las Comunicaciones (TIC) con su diversidad de lenguajes simbólicos, promueven la actividad cognitiva del estudiante, se cualifican las interacciones entre los sujetos del proceso, permitiendo establecer relaciones entre los conocimientos previos y los nuevos, posibilitando así la construcción de nuevos conocimientos.
        .cajon.color-secundario.p-4
          p.mb-0  El SENA propone una experiencia de aprendizaje significativo mediada por las TIC, en la que los aprendices tengan el protagonismo en la construcción de nuevo conocimiento a través de estrategias didácticas que integran situaciones reales que les permitan aplicar sus competencias para evidenciar sus aprendizajes. 

      .col-lg-4


      

</template>

<script>
export default {
  name: 'Tema5',
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
