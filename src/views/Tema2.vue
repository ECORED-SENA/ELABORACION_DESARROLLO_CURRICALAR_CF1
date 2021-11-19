<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Formación Profesional Integral
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4.mb-5.slideInUp
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4.mb-0 La formación profesional integral es el proceso mediante el cual la persona adquiere y desarrolla de manera permanente conocimientos, destrezas y aptitudes e identifica, genera y asume valores y actitudes para su realización humana y su participación en el trabajo productivo y en la toma de decisiones sociales.
            i.fas.fa-quote-right
            <br>
            .bloque-texto-d__autor 
              p.mb-0 - SENA, 2012

        .tarjeta.color-secundario.bg-gradiente.p-3(data-aos="flip-left")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t2-i1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Modelo pedagógico de la formación profesional integral del SENA
                  p.text-small Descargue aquí el modelo pedagógico de la formación profesional integral en el enfoque para el desarrollo de competencias y el aprendizaje por proyectos. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/modelo-pedagogico-sena.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5(data-aos="slide-left")  <b>El cumplir con la misión institucional asignada al SENA, implica la cualificación permanente del Instructor</b>, como agente estratégico en la atención a los aprendices, en primera instancia, como seres humanos en proceso inacabado de perfeccionamiento; en segunda instancia, como sujetos cognoscentes en capacidad de aprehender y aportar con sus actuaciones a las necesidades personales y del entorno. Esta atención de los aprendices se realiza mediante procesos formativos, en los que la construcción y reconstrucción del conocimiento es una apuesta metodológica necesaria para la acción con sentido.
    .row.mb-5
      .col-lg-7
        p.mb-3(data-aos="slide-up")  El asumir este proceso, le implica al instructor un rol de alta complejidad, dado que, a este, le es inherente, además del dominio y la experticia tecnológica propia del programa de formación que orienta, el dominio y la experticia pedagógica y didáctica relacionada con modelos, enfoques, metodologías, estrategias propias de la formación profesional integral, que fieles a su naturaleza, aseguren el impacto en el crecimiento personal y profesional de los aprendices; así como, el impacto en el desarrollo social y productivo del país.
        p.mb-3(data-aos="slide-up")  El desempeño del instructor en estas condiciones requiere de procesos de formación y actualización permanentes, que le posibiliten una práctica pedagógica y técnica de calidad, idónea y coherente con las exigencias que plantean tanto, la actual sociedad de conocimiento, las tendencias del mercado laboral en el marco de la industria 4.0; tal como lo plantea la Unesco (2016) “Fortalecer la calidad de los programas de formación docente, especialmente los contenidos curriculares, las estrategias de formación y evaluación de aprendizajes y la calidad de los formadores” (p. 11). 
        p.mb-3(data-aos="slide-up")  La atención a las condiciones de formación y actualización permanente de los instructores <b>implica el tratamiento prospectivo y contextualizado de la formación profesional integral</b>, en el que se trascienda el tratamiento epistemológico y metodológico de carácter instrumental, para dar paso a procesos de comprensión que le otorgan sentidos y significados en función de la calidad y la pertinencia.

      .col-lg-5
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t2-i2.svg' alt='imagen decorativa')

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="flip-up")
          p.mb-0  En este sentido, <b>es el instructor el actor principal a quien corresponde ejecutar la política formativa institucional</b>, dicha ejecución se basa en comprensiones profundas sobre la naturaleza técnica y tecnológica de la formación profesional integral, en función de la habilitación de las personas para insertarse en el mundo laboral; sobre las metodologías que le son propias y en las que se articula de manera sistémica e integrada la teoría con la práctica en función del desarrollo de las competencias para la vida y para el trabajo.

    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="2.1  Características de la formación profesional integral " :icono="require('@/assets/curso/t2-ic1.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            #t_2_1.titulo-segundo
              h2  2.1  Características de la formación profesional integral 
            p.mb-3  La formación profesional integral que imparte el SENA se caracteriza por estar organizada en currículos modulares, cuyos procesos de aprendizaje son teórico-prácticos, están mediados por pedagogías que integran conocimientos científicos, tecnológicos y técnicos, con elementos conceptuales de comprensión del ámbito social y ambiental, y parten de un diseño basado en competencias (SENA, 1997).
            p.mb-3  Los módulos de formación permiten salidas ocupacionales para el desarrollo de funciones específicas en el medio laboral en tanto está asociada a una unidad de competencia.
          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-i3.jpg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="2.2 Principios de la formación profesional integral" :icono="require('@/assets/curso/t2-ic2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            #t_2_2.titulo-segundo
              h2  2.2  Principios de la formación profesional integral
            p.mb-4  Los procesos formativos en el marco de la formación para el trabajo y el desarrollo humano requieren la potenciación de habilidades en la tríada ser, saber y hacer, elementos clave de la formación basada en el desarrollo de competencias. Desde este punto de vista es necesario comprender los principios movilizadores de la propuesta formativa institucional.
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  La aceptación del desarrollo de las facultades humanas a través del trabajo.
              li
                i.fas.fa-check
                p.mb-0  El reconocimiento de derechos y deberes.
              li
                i.fas.fa-check
                p.mb-0  La aceptación del carácter social del conocimiento.   
              li
                i.fas.fa-check
                p.mb-0  La vinculación con la realidad socioeconómica.
              li
                i.fas.fa-check
                p.mb-0  La orientación de la formación profesional integral.
              li
                i.fas.fa-check
                p.mb-0  La apertura crítica al avance tecnológico.
              li
                i.fas.fa-check
                p.mb-0  El reconocimiento de las condiciones y características específicas de las personas.
              li
                i.fas.fa-check
                p.mb-0  La activa participación del mundo del trabajo.
              li
                i.fas.fa-check
                p.mb-0  La participación social.
              li
                i.fas.fa-check
                p.mb-0  El reconocimiento de que la persona humana aprende permanentemente.
              li
                i.fas.fa-check
                p.mb-0  La desescolarización.
              li
                i.fas.fa-check
                p.mb-0  La descentralización de la acción del SENA.
              li
                i.fas.fa-check
                p.mb-0  El acercamiento al sistema educativo formal.

          .col-md-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-i4.jpg', alt='imagen decorativa')

    .row.mb-5
      .col-lg-2
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-i5.svg', alt='imagen decorativa')
      .col-lg-10
        p.mb-0.text-bold(data-aos="slide-left")  Para la comprensión de los elementos fundamentales de la formación profesional integral, es necesario la ampliación conceptual pormenorizando las características y los principios que se detallan en el siguiente recurso:

    .row.mb-5.justify-content-center
      .col-lg-10
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-i6.svg', alt='ilustracion de conceptos de formación profesional')







</template>

<script>
export default {
  name: 'Tema2',
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
