<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 PEI

    .row.mb-5
      .col-lg-7.slideInUp
        p.mb-3.text-bold  De manera general un Proyecto Educativo Institucional - PEI, es la hoja de ruta de una organización que tenga la misión de formar sujetos; es el documento rector que plasma de manera explícita el tipo de sujetos que forma y de qué manera lo harán. 
        p.mb-3  Los proyectos educativos institucionales en la actualidad están reglamentados por la Ley 1075 de 2015, Decreto Reglamentario Único del Sector Educación, por el cual se establecen normas para el ofrecimiento de la educación de adultos y se dictan otras disposiciones. El PEI expresa cómo se van a alcanzar los fines de la educación teniendo en cuenta las condiciones sociales, económicas y culturales del medio.
        p.mb-3  Componentes del PEI:
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0  Componente teleológico.
          li
            i.fas.fa-check
            p.mb-0  Componente curricular y pedagógico.           
          li
            i.fas.fa-check
            p.mb-0  Interacción con la comunidad. 
          li
            i.fas.fa-check
            p.mb-0  Administrativo, regulación y organización.

      .col-lg-5.slideInLeft
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t5-i1.png', alt='imagen decorativa')    


    p.mb-5  De manera esquemática se muestran los componentes del PEI SENA.
    .row.mb-5.justify-content-center
      .col-lg-6
        figcaption.customCaption  <b>Figura</b> Componentes del PEI
        figure(data-aos="flip-left")
          img.mb-3(src='@/assets/curso/t5-i2.svg', alt='imagen decorativa')    
        figcaption.mb-5  Tomada de Presidencia de Colombia (1994)
         

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          p.mb-0  A continuación, se describirán los componentes fundamentales del PEI del SENA, documento elaborado en 2013, y para su apropiación en profundidad se invita a su lectura y análisis.


    TabsA.color-primario.mb-5

      .tarjeta.color-secundario.p-4(titulo="5.1 Objetivo")
        .row
          .col-lg-8
            h4 5.1 Objetivo
            p El proyecto educativo institucional del SENA describe de qué manera cumplirá la misión que el Estado le encomendó de brindar la formación profesional integral de las personas residentes en Colombia para promover su inserción pertinente al mundo del trabajo o su articulación por cadena de formación a niveles educativos siguientes. El PEI responde la pregunta: ¿qué tipo de sujeto formar? A partir del saber, hacer y ser, en el marco de la dimensión humanista, para que con sus habilidades teóricas y prácticas contribuya a la solución de problemas de los sectores de la producción y con ello a su desarrollo humano y al del país. 
          .col-lg-4
            figure(data-aos="flip-left")
              img.mb-3(src='@/assets/curso/t5-i3.png', alt='imagen decorativa') 
        
      .tarjeta.color-secundario.p-4(titulo="5.2 Alcance")
        .row
          .col-lg-8
            h4 5.2 Alcance
            p El PEI es el documento orientador que materializa la formación profesional integral alineado con la unidad técnica y el estatuto de la formación profesional integral en competencias básicas, transversales y específicas; enuncia de manera explícita que la formación en el SENA se lleva a cabo mediada por la estrategia de la formación por proyectos, en el que problemas del mundo de la vida y del trabajo se traen a los ambientes de aprendizaje para que los aprendices durante su proceso formativo los resuelvan a partir del desarrollo de proyectos.
          .col-lg-4
            figure(data-aos="flip-left")
              img.mb-3(src='@/assets/curso/t5-i4.png', alt='imagen decorativa') 

      .tarjeta.color-secundario.p-4(titulo="5.3 Componentes")
        .row
          .col-lg-8
            h4 5.3 Componentes
            p El proyecto educativo institucional en el SENA describe la situación histórica, contextual internacional e internacional, jurídica y política, como marco para la formulación de la teleología; es decir, la misión, la visión, los objetivos formativos, los principios, valores los cuales los retoman del estatuto de la formación profesional. Definen la FPI a partir de competencias, describe cuál es el contexto pedagógico del SENA en el marco de teorías de aprendizaje en donde el aprendiz es el centro del proceso y como estrategia pedagógica la formación por proyectos, perfiles, modalidades de formación, políticas de selección de aprendices, evaluación de los aprendizajes y políticas de permanencia.
          .col-lg-4
            figure(data-aos="flip-left")
              img.mb-3(src='@/assets/curso/t5-i5.png', alt='imagen decorativa') 















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
