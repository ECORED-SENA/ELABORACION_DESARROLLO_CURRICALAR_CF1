<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Formación para el trabajo y el desarrollo humano

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.slideInUp 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW(src='@/assets/curso/t1-i1.svg' alt='imagen decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 En el recurso que se presenta a continuación, se pueden revisar los momentos y soportes legales que dieron apertura a la formación para el trabajo y el desarrollo humano en Colombia. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CsNbP8jeE2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5  Para comprender la concepción actual de formación para el trabajo y el desarrollo humano, se invita a consultar la siguiente línea de tiempo que ubica, cronológicamente, las leyes y artículos que, desde la organización y disposición del Estado, se han propuesto para tal fin:

    .scrrollBox-H
      ImagenInfografica.color-primario.mb-5.customInfografica
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/t1-i2-1.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="5%" y="90%")
          a.mb-4.mb-lg-0(href="https://padlet.com/hernancordobaescobar/9zxpjoq331sf7ipa" target="_blank")  
            i.fas.fa-check
            | Ver más

        .tarjeta.color-acento-botones.p-3(x="20%" y="90%")
          a.mb-4.mb-lg-0(href="https://padlet.com/hernancordobaescobar/9zxpjoq331sf7ipa" target="_blank")  
            i.fas.fa-check
            | Ver más

        .tarjeta.color-acento-botones.p-3(x="35%" y="90%")
          a.mb-4.mb-lg-0(href="https://padlet.com/hernancordobaescobar/9zxpjoq331sf7ipa" target="_blank")  
            i.fas.fa-check
            | Ver más

        .tarjeta.color-acento-botones.p-3(x="50%" y="90%")
          a.mb-4.mb-lg-0(href="https://padlet.com/hernancordobaescobar/9zxpjoq331sf7ipa" target="_blank")  
            i.fas.fa-check
            | Ver más

        .tarjeta.color-acento-botones.p-3(x="65%" y="90%")
          a.mb-4.mb-lg-0(href="https://padlet.com/hernancordobaescobar/9zxpjoq331sf7ipa" target="_blank")  
            i.fas.fa-check
            | Ver más            

        .tarjeta.color-acento-botones.p-3(x="80%" y="90%")
          a.mb-4.mb-lg-0(href="http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1673231" target="_blank")  
            i.fas.fa-check
            | Ver más    

        .tarjeta.color-acento-botones.p-3(x="93%" y="90%")
          a.mb-4.mb-lg-0(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38477" target="_blank")  
            i.fas.fa-check
            | Ver más    


    p.mb-5  Una vez haya logrado la comprensión del concepto de la formación para el trabajo y el desarrollo humano, se invita a revisar los tipos, las características y la normativa que corresponden:
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="1.1 Tipos de formación para el trabajo y el desarrollo humano" :icono="require('@/assets/curso/t1-ic1.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            #t_1_1.titulo-segundo
              h2  1.1. Tipos de formación para el trabajo y el desarrollo humano
            p La formación para el trabajo y el desarrollo se equipara con la educación no formal en Colombia y es coherente con la Clasificación Nacional de Ocupaciones (CON) existente en el país desde 1996 y la Clasificación Internacional Unificada de Ocupaciones (CIUO) de la OIT de 1968 que permite identificar las áreas de conocimiento y desempeño en las que un trabajador puede desarrollar funciones específicas, marcan la pauta tanto para la calificación del talento humano, como para la determinación de necesidades de los empresarios cuando se abren cargos en las diferentes empresas (SENA, 2021). La formación técnica promueve habilidades procedimentales en el marco de normas sectoriales de competencia laboral relacionadas con un perfil laboral específico, en tanto que la formación técnica promueve habilidades y destrezas en el marco de las normas sectoriales de competencia laboral, sustentadas en la fundamentación conceptual de teorías y principios de las ciencias básicas y aplicadas que le permitirán al egresado insertarse en el mercado laboral o continuar en cadena de formación hacia la educación superior universitaria (SENA, 2019). 

          .col-md-4
            figure
              img(src='@/assets/curso/t1-t1.png', alt='imagen decorativa')
      .py-4.py-md-5(titulo="1.2 Características de la formación para el trabajo y el desarrollo humano" :icono="require('@/assets/curso/t1-ic2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            #t_1_2.titulo-segundo
              h2  1.2 Características de la formación para el trabajo y el desarrollo humano
            p.mb-3  La formación para el trabajo y el desarrollo humano busca promover la formación en contextos reales de trabajo, el desarrollo de conocimientos técnicos y habilidades, la capacitación para el desempeño artesanal, artístico, recreacional y ocupacional, así como la protección y aprovechamiento de los recursos naturales y la participación ciudadana y comunitaria para el desarrollo de competencias laborales específicas.
            p.mb-3  Además, pretende contribuir al proceso de formación integral y permanente de las personas complementando, actualizando y formando en aspectos académicos o laborales, mediante la oferta de programas flexibles y coherentes con las necesidades y expectativas de la persona, la sociedad, las demandas del mercado laboral, del sector productivo y las características de la cultura y el entorno (Universidad Católica del Norte, 2021).

          .col-md-4
            figure
              img(src='@/assets/curso/t1-t2.png', alt='imagen decorativa')
      .py-4.py-md-5(titulo="1.3 Normativa de la formación para el trabajo y el desarrollo humano" :icono="require('@/assets/curso/t1-ic3.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            #t_1_3.titulo-segundo
              h2  1.3 Normativa de la formación para el trabajo y el desarrollo humano
            p.mb-3  La formación para el trabajo y el desarrollo humano está regulada por la Constitución Política de 1991 en el artículo 54, la Ley General de Educación de 1994, la Ley 119 que reestructuró el SENA y define de manera explícita el tipo de institución, la formación que imparte y de qué manera lo hace (SENA, 1997). Adicionalmente, está normalizada por la Ley 749 de 2002 que organiza la educación técnica y técnica y la Resolución 2198 de 2019 por la cual se modifica la clasificación y los niveles de formación.

          .col-md-4
            figure
              img(src='@/assets/curso/t1-t3.png', alt='imagen decorativa')    






  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
