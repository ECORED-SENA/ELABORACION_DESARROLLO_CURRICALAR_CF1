<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Programa de formación

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <b>Los lineamientos rectores de la FPI se encuentran explícitos en la Unidad Técnico-pedagógica de 1985 y el Estatuto de la Formación Profesional Integral.</b> Apropiar el sentido de la formación como el fundamento de la misión del SENA está mediado por la compresión de estos documentos. Los documentos formulados por la institución como el proyecto educativo institucional y el modelo pedagógico se alimentan de los primeros. 

    
    
    #t_3_1.titulo-segundo
      h2 3.1  Tipos
    p.mb-5  La Resolución 2198 de 2019 indica que la formación profesional integral se clasifica como se muestra en la siguiente tabla.
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption <b>Tabla 1</b> Clasificación de la FPI
        .tabla-b.color-primario.mb-5
          table
            thead.tabla-b__header
              tr
                th Clasificación
                th Niveles de programas de Formación profesional integral
            tr
              td Formación Laboral
              td 
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Operario
                  li
                    i.fas.fa-check
                    p.mb-0  Auxiliar
                  li
                    i.fas.fa-check
                    p.mb-0  Técnico laboral
                  li
                    i.fas.fa-check
                    p.mb-0  Profundización técnica                               
                                    
            tr
              td Formación Tecnológica
              td 
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Tecnólogos
                  li
                    i.fas.fa-check
                    p.mb-0  Especialización tecnológica              
            tr
              td Formación complementaria
              td 
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p.mb-0  Formación complementaria
                  li
                    i.fas.fa-check
                    p.mb-0  Eventos de divulgación tecnológica     
        
          figcaption Nota: Tomada de SENA (2019)


    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2  Componentes
    p.mb-5  El Estatuto de la Formación Profesional Integral del SENA de 1997 enuncia los componentes de la FPI:
    .row.mb-5
      .col-lg-4
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t3-i2.svg', alt='imagen decorativa')
      .col-lg-8
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0  Cambios científicos, tecnológicos y técnicos veloces, acompañados de exigencias crecientes en la calidad de los bienes y servicios.  
          li
            i.fas.fa-check
            p.mb-0 Desarrollos revolucionarios de la microelectrónica, la biotecnología, la informática y la telemática, que modifican sustancialmente los procesos y procedimientos del trabajo productivo en todos los sectores económicos.
          li
            i.fas.fa-check
            p.mb-0 Transformaciones en las organizaciones y las empresas orientadas a elevar en forma sostenida su competitividad en mercados abiertos y menos protegidos. 
          li
            i.fas.fa-check
            p.mb-0 Requerimientos de aprendizajes y competencias acordes con las nuevas metas de productividad y competitividad. 
          li
            i.fas.fa-check
            p.mb-0 Transformaciones de los entornos socioculturales que requieren individuos y comunidades capaces de establecer interrelaciones, abstraer información, interpretar símbolos, resolver problemas y tomar decisiones, provistos de sólidos valores éticos.
          li
            i.fas.fa-check
            p.mb-0  Crisis de los modelos económicos que inciden en las relaciones entre los individuos, acompañadas por la valoración de los grupos étnicos y el redimensionamiento de las minorías sociales y culturales.  
          li
            i.fas.fa-check
            p.mb-0  Conflicto permanente de la sociedad colombiana donde se observa violencia, discriminación, intolerancia, degradación del medio ambiente, atraso económico y crecimiento indiscriminado de lo urbano. Aspectos que se manifiestan en altas tasas de pobreza y miseria, de desempleo y subempleo, deterioro de los salarios reales y poblaciones desplazadas por la violencia.   
          li
            i.fas.fa-check
            p.mb-0  Desequilibrio de los sectores económicos en el país; el sector de comercio, financiero y servicios se incrementa en mayor medida frente a los demás sectores; el industrial -con grandes desequilibrios tecnológicos- permanece estático, y el primario y extractivo atraviesa una de sus crisis más agudas, con una agricultura de subsistencia y niveles de tecnología artesanal.  

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0  Los programas de formación titulada y complementaria en su diseño y, fundamentalmente, en su desarrollo curricular evidencia la problematización de la realidad para la construcción y fortalecimiento de las habilidades técnicas y humanas para el desempeño laboral; es en este contexto las características de la FPI se materializan. 





    Separador
    br
    br
    #t_3_3.titulo-segundo
      h2 3.3. Modalidad de formación

    p.mb-5  La categoría modalidad de formación está relacionada con la temporalidad, la territorialidad y la interacción entre instructor y aprendices, de la siguiente manera.
    
    figcaption.customCaption <b>Figura 1</b>  Modalidades de formación
    .row.mb-5.justify-content-center
      .col-xs-6.col-sm-8.col-md-7.col-lg-6.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t3-c1.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Modalidad presencial
              p.small Se lleva a cabo en los ambientes de aprendizaje físico, el proceso de formación en competencias se lleva a cabo en interacción con el instructor y en colaboración entre los aprendices, en el SENA el porcentaje de trabajo autónomo es del 80%. Esta modalidad no excluye la mediación de las TIC. 

      .col-xs-6.col-sm-8.col-md-7.col-lg-6.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t3-c2.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Modalidad a distancia
              p.small Las interacciones se llevan a cabo en tiempo real en los ambientes de aprendizaje físico y de forma desterritorializada apoyadas por las TIC. La relación presencialidad/virtualidad es 40/60 (Res. 2198 de 2019).

      .col-xs-6.col-sm-8.col-md-7.col-lg-6.col-xl-4
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t3-c3.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Modalidad virtual
              p.small Las interacciones entre instructor y aprendices están completamente mediadas por las TIC de manera sincrónica y asincrónica. 
















</template>

<script>
export default {
  name: 'Tema3',
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
