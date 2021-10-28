<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Modelos pedagógicos

    p.mb-5.text-bold.slideInUp  Los modelos pedagógicos son un campo del conocimiento dentro del saber de la pedagogía que establece enlaces directos con componentes propios del contexto, los objetivos, los contenidos, los métodos, los medios, la relación maestro-estudiante, la didáctica, el currículo y la evaluación; por ello, se constituye en una región del conocimiento eminentemente interdisciplinaria. 

    .row.mb-5
      .col-lg-5.slideInLeft
        figure(data-aos="flip-right")
          img(src='@/assets/curso/t4-i1.svg', alt='imagen decorativa')
      .col-lg-7.slideInRight
        p.mb-4  Dicho de otra manera, los modelos pedagógicos responden los siguientes interrogantes:
        ul.lista-ul.mb-4
          li
            i.fas.fa-check
            p.mb-0  ¿Qué tipo de hombre/mujer formar?
          li
            i.fas.fa-check
            p.mb-0  ¿Cómo formarlo?
          li
            i.fas.fa-check
            p.mb-0  ¿A través de qué estrategias?
          li
            i.fas.fa-check
            p.mb-0  ¿Cuáles son los contenidos a través de los cuales lo va a formar?
          li
            i.fas.fa-check
            p.mb-0  ¿Cuáles serán los medios a utilizar?
          li
            i.fas.fa-check
            p.mb-0  ¿Quién dirige el proceso enseñanza y aprendizaje?

        p.mb-4  Así, un modelo es la representación ideal del mundo real de lo educativo, para explicar teóricamente su hacer, es decir, se constituye a partir del ideal de hombre y de mujer que la sociedad concibe según sus necesidades y para ello planifica un tipo de educación a ser impartida en las instituciones educativas.

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4.mb-5.slideInUp
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4.mb-0 Un modelo pedagógico busca comprender, analizar, interpretar y valorar los procesos formativos en las instituciones educativas y enrutar las prácticas pedagógicas en aspectos intencionados desde los parámetros teleológicos de cada institución educativa.
            i.fas.fa-quote-right
            <br>
            .bloque-texto-d__autor 
              p.mb-0 - Flórez, 1994

    .row.mb-5
      .col-lg-12
        figcaption.customCaption <b>Figura</b> Esquema modelos pedagógicos
        figure(data-aos="flip-right")
          img(src='@/assets/curso/t4-i2.svg', alt='imagen decorativa')
        figcaption  Nota: Tomada Flórez (1994).

    #t_4_1.titulo-segundo
      h2  4.1  Tipos   
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="flip-right")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img.nW(src='@/assets/curso/t4-ic1.svg' alt='imagen decorativa')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Se invita a remitirse al texto <i><b>Pedagogía del conocimiento</b></i> (Flórez, 2005) y aunque hay numerosos autores de la pedagogía que explican los tipos de modelos pedagógicos, la recomendación de este autor en particular es porque a partir de una perspectiva histórica, social y económica, permite identificar que los modelos pedagógicos son constructos teóricos que <b>sustentan conceptualmente la formación de cierto tipo de sujeto de acuerdo con el momento histórico particular y el modo de producción de bienes de ese momento.</b>

    .row.mb-5
      .col-lg-7
        p.mb-3(data-aos="slide-left") Los modelos pedagógicos justifican el por qué formar cierto tipo de hombre y mujer con una serie de conocimientos, valores y principios que promueven condiciones de posibilidad para dar continuidad a un sistema político y económico imperante en un periodo concreto, o por el contrario para transformar el estado de cosas. Los modelos pedagógicos son intencionados en el sistema educativo para mantener pilares de una sociedad y al mismo tiempo permiten conocer la realidad para transformarla. 
        p.mb-3(data-aos="slide-left") En este orden de ideas, el formador es un sujeto fundamental, este tiene inmerso en sus prácticas de enseñanza para el aprendizaje un modelo pedagógico implícito o explícito, a partir del cual promoverá el conocimiento del contexto, saberes específicos, valores para formar seres humanos que mantengan la sociedad como la encontraron o generen las bases para transformarla a la medida de sus sueños. 
        p.mb-3(data-aos="slide-left") Cada modelo pedagógico estará sustentado en cuatro criterios mínimos necesarios: filosóficos, antropológicos, sociológicos y psicológicos. Esta construcción responde a las preguntas <b><i>¿qué se enseña?, ¿a quién se le enseña?, ¿dónde se enseña? y ¿cómo se enseña?</i></b>, las que se ajustan a los objetivos del sistema donde se están implementado. 
      .col-lg-5
        figure
          img.nW(src='@/assets/curso/t4-i3.jpg' alt='imagen decorativa')
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-0  <b>Es importante resaltar que</b>, en la actualidad, es difícil encontrar instituciones que estén plenamente adscritas a una sola corriente o modelo, entendiendo la diversidad de métodos existentes y sumando la variación histórica en el ideal de ciudadanos e individuos; siendo estos factores determinantes en la elección de las corrientes a emplear. 

    //-- Aqui vienen los tabs

    p.mb-5  En la siguiente tabla se presenta una síntesis que evidencia de qué manera los modelos pedagógicos responden los interrogantes <b><i>¿qué se enseña?, ¿a quién se le enseña?, ¿dónde se enseña? y ¿cómo se enseña?</i></b> (Flórez, 2005)

    .row.mb-5.justify-content-center
      .col-lg-10
        figcaption.customCaption  <b>Tabla</b> Estructura didáctica de los modelos pedagógicos
        figure
          img(src='@/assets/curso/t4-t1.svg' alt='Estructura didáctica de los modelos pedagógicos')
        figcaption  Nota: Tomada de Flórez (2005)
    p.mb-5  Para lograr una síntesis sobre los modelos pedagógicos, lo invitamos a consultar el video que se encuentra en material complementario, denominado “Modelos pedagógicos (línea de tiempo)” de Gamba (2014).

    .row.mb-5.justify-content-center
      .col-lg-10  
        .cajon.color-secundario.p-4(data-aos="flip-left")
          p.mb-0  El SENA, como institución formadora no es ajena a dar respuesta a las preguntas que orientan la formación; su modelo pedagógico debe permitir formar y cualificar a los trabajadores colombianos habilidades en específicas que promuevan el desarrollo de los sectores de la economía nacional.

    Separador
    br
    br

    #t_4_2.titulo-segundo
      h2  4.2  Modelo pedagógico del SENA
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t4-t1.svg' alt='Estructura didáctica de los modelos pedagógicos')
      .col-lg-10  
        p.mb-0  El modelo pedagógico de la formación profesional integral es un documento de 2012 coherente con la Ley 119 de 1994 que recoge los principios formativos del SENA, amalgamando los aspectos técnicos de la vocación original de la institución, con los aspectos humanos en clave de las complejidades individuales. Esa mirada equilibrada posibilita interacciones potentes desde el punto de vista del hacer y sensibles desde las dinámicas humanas enfocando las acciones educativas en la formación integral mediado por el desarrollo y fortalecimiento de las competencias.     
    
    .row.mb-5.justify-content-center
      .col-lg-2
        //-- Aqui viene el box
    .row.mb-5
      .col-lg-7
        p El modelo pedagógico construido a la medida del SENA se basa en las posturas conceptuales de múltiples teóricos y organizaciones que responden a diversas áreas de conocimiento, en diferentes momentos históricos, construcción necesaria dadas las características institucionales y entendiendo la formación para el trabajo y el desarrollo humano como punto de llegada. Para el SENA, es una gran responsabilidad asumir un modelo pedagógico ecléctico dado que la preparación para la vida laboral estuvo ubicada de manera clásica en el conductismo que favorecía la respuesta, el desempeño y la obediencia por encima de los procesos humanos, sin embargo, la formación para el trabajo y el desarrollo humano exige modelos pedagógicos flexibles y lo suficientemente completos como para incluir valores y competencias que permitan la edificación de la personalidad y la capacidad de vivir en sociedad empleando prácticas de buena ciudadanía. 
               
      .col-lg-5    
        figure
          img(src='@/assets/curso/t4-i10.jpg' alt='profesor de pie explicando a un alumno en el salon de clases')



</template>

<script>
export default {
  name: 'Tema4',
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
