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
    p.mb-5  En el recurso teoría del aprendizaje sociocultural se puede consultar información relevante con el propósito de ampliar algunos elementos conceptuales de dicho aprendizaje.    
    
    //-- Aqui viene el slider









    Separador
    br
    br   
    #t_6_3.titulo-segundo
      h2  6.3  Estrategias de aprendizaje
    .row.mb-5
      .col-lg-8
        p.mb-3  Las estrategias de aprendizaje activo permiten hacer prácticas las teorías de aprendizaje descritas en los párrafos precedentes, a su vez, son el piso conceptual de las acciones intencionales de los instructores en los ambientes de aprendizaje para fomentar la construcción de nuevo conocimiento teórico y práctico, evidenciado a través de habilidades que les permiten a los estudiantes desempeñarse en ámbitos académicos y profesionales específicos
        p.mb-3  A continuación, se describirán algunas estrategias que podrán, potencialmente, orientar la implementación didáctica para la elaboración de las guías de aprendizaje y transitar hacia prácticas instruccionales centradas en el aprendiz como protagonista en la construcción de conocimiento. Así, el texto es un acercamiento inicial que evidencia que cuando el instructor tiene definidos los objetivos de aprendizaje e intencionalmente dirige sus acciones para que el aprendiz se haga cargo de la construcción de su propio conocimiento, se logran resultados en términos de la adquisición y fortalecimiento de competencias específicas.
      .col-lg-4
        figure(data-aos="slide-left")
          img(src='@/assets/curso/t6-i3.png' alt='imagen decorativa')

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Método de proyectos
    p.mb-3  El método de proyectos tiene sus orígenes conceptuales y prácticos en Kilpatrick, influenciado por Dewey. Este autor planteó como fundamental para el aprendizaje, proponer a los estudiantes experiencias significativas, involucrar a los estudiantes en oportunidades de aprendizaje que los conecten con el mundo que ellos viven. El conocimiento genera motivación intrínseca, las actividades de aprendizaje serán vistas con alegría y confianza y el profesor es un guía para los estudiantes (Pecore, s.f.).
    p.text-bold Se reconocen cuatro tipos de proyectos así: 
    .row.mb-5.justify-content-center
      .col-xs-6.col-sm-8.col-md-7.col-lg-4.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t6-c1.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.small Aquellos que implican ideas o planes externos como construir un bote, para alcanzar la meta se formula el propósito, se diseña el de plan ejecución, se implementa y se evalúa. 

      .col-xs-6.col-sm-8.col-md-7.col-lg-4.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t6-c2.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.small En segundo lugar, están aquellos que involucran experiencias lúdicas o estéticas como escuchar un poema, una sinfonía o apreciar una pintura, estos no tienen una ruta específica para alcanzar los objetivos de aprendizaje. 

      .col-xs-6.col-sm-8.col-md-7.col-lg-4.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t6-c3.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.small El tercer tipo de proyectos es la solución de problemas, por ejemplo, definir situaciones-problema en ámbitos específicos, interpretar los efectos de la guerra en un experimento, este tipo de proyectos sugiere seguir la racionalidad del método científico, es decir, identificar el problema, determinar las hipótesis, las razones o el porqué de los problemas, recolectar y analizar datos, formular conclusiones, aplicar las conclusiones para probar las hipótesis. 

      .col-xs-6.col-sm-8.col-md-7.col-lg-4.col-xl-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t6-c4.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.small Por último, se identifican los proyectos que implican obtener ciertas habilidades o conocimientos como el uso apropiado de la conjugación de los verbos en la escritura para los cuales se formula propósito, se diseña el plan, se ejecuta y evalúa (Pecore, s. f.).
      figcaption  Nota. Tomada de Pecore (s.f.)
      
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0  El aspecto clave en el éxito del método de proyectos son las habilidades del profesor para guiar a los estudiantes a través del proceso, de tal manera que el estudiante genere conflicto o tensión con el de aprendizaje, el docente a la vez, los motiva a resolverlo, que avance por un proceso gradual de aumento de dificultad en la tarea, el profesor crea puentes entre los objetivos del proyecto y los estudiantes. El profesor es quien guía el proceso de aprender a pensar y orienta las actividades que conducen a alcanzar las metas del proyecto.

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Aprendizaje basado en proyectos
    .row.mb-5
      .col-lg-4
        figure(data-aos="slide-left")
          img(src='@/assets/curso/t6-i4.svg' alt='imagen decorativa')
      .col-lg-8(data-aos="slide-right")
        p.mb-3  En el siglo XXI el método de proyectos se redefine como aprendizaje basado en proyectos que es una estrategia sistemática que compromete a los estudiantes en el aprendizaje de conocimientos y habilidades a través de un proceso de investigación estructurada sobre preguntas complejas, reales y tareas y productos diseñados (Pecore, s. f.; Villar, 2013).
        p.mb-3  El aprendizaje basado en proyectos ha sido influenciado por la teoría del aprendizaje constructivista, mirada filosófica del conocimiento como una construcción individual a través de la interacción con el ambiente y el desarrollo social. Esta construcción implica conflicto cognitivo como estímulo o meta de aprendizaje. Los aprendices traen al aula sus experiencias personales que impactan su visión del mundo. Los estudiantes apoyan la construcción de conocimientos basados en sus propias experiencias, los profesores los guían para que evalúen cómo construyen el conocimiento (Martí, Heydrich, Rojas y Hernández, 2010).
    
    p.mb-5  El aprendizaje basado en proyectos es una interpretación del método de proyectos y sus características son:
    .row.mb-5
      .col-lg-4 
        figure(data-aos="slide-left")
          img(src='@/assets/curso/t6-i5.svg' alt='imagen decorativa')
      .col-lg-8(data-aos="slide-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Definición de un proyecto central.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Focalización en habilidades y conocimientos importantes a partir del constructivismo.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Actividades dirigidas por preguntas, problemas o retos.
          li 
            .lista-ol--cuadro__vineta
              span d
            | El aprendiz dirige el proceso de investigación guiado por el profesor.            
          li 
            .lista-ol--cuadro__vineta
              span e
            | El proyecto está fundamentado en un auténtico problema de la vida real (Barron y Darling-Hammond, 2008), promueve el conflicto cognitivo como un estímulo para alcanzar las metas de aprendizaje. 
          li 
            .lista-ol--cuadro__vineta
              span f
            | El estímulo provee la activación de sus experiencias personales, razón a través de la cual, el aprendiz se compromete en el ambiente de aprendizaje y así en la comprensión y eventualmente el aprendiz construye (Pecore, s. f.).

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Etapas del aprendizaje basado en proyectos
    .row.mb-5
      .col-lg-7
        ul.lista-ul
          li
            i.fas.fa-check  
            p.mb-0 El docente guía el proceso a través de los resultados esperados de aprendizaje. Inicia con la motivación hacia el contenido de aprendizaje, enunciando de forma explícita que se espera de los estudiantes durante el proceso. 
          li
            i.fas.fa-check  
            p.mb-0  El segundo momento será la formulación de preguntas que activen la curiosidad y el deseo de los estudiantes por resolverlas a través de un proyecto.
          li
            i.fas.fa-check  
            p.mb-0  El tercer momento es la definición conjunta de los propósitos del proyecto que permitan responder las preguntas y el diseño de plan. Cuando los estudiantes participan en la formulación de los propósitos y el diseño del plan, los estudiantes se comprometen en la ejecución del plan.
          li
            i.fas.fa-check  
            p.mb-0  Seguidamente con la orientación del profesor, los estudiantes elaboran una visualización gráfica que sirve de mapa del proceso que llevarán a cabo para dar respuesta a las preguntas que originaron el proyecto. En esta etapa las tecnologías son una herramienta útil para ilustrar la globalidad del proyecto dado la diversidad de formatos que tiene.
          li
            i.fas.fa-check  
            p.mb-0  Después se lleva a cabo la etapa de la ejecución de las actividades.
          li
            i.fas.fa-check  
            p.mb-0  La síntesis y análisis de resultados. 
          li
            i.fas.fa-check  
            p.mb-0  Descripción de las conclusiones para la solución de las preguntas inicialmente formuladas.   
          li
            i.fas.fa-check  
            p.mb-0  La retroalimentación y evaluación del proceso es constante a lo largo del desarrollo del proyecto. 
      .col-lg-5
        figcaption.customCaption.mb-2 <b>Figura</b> Etapas del aprendizaje basado en proyectos
        figure(data-aos="slide-left")
          img(src='@/assets/curso/t6-i7.svg' alt='imagen decorativa')

    p.mb-5.text-bold  Según Martí et al. (2010) el aprendizaje basado en proyectos promueve:

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-2 <b>Figura</b> Aprendizaje basado en proyectos
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t6-i8.svg' alt='ciclo Aprendizaje basado en proyectos')
        figcaption  Nota. Tomada de Martí et al. (2010)

    Separador
    br
    br 
    #t_6_4.titulo-segundo
      h2  6.4  Aprendiz

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="flip-up")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img.nW.centered(src='@/assets/curso/t6-i9.svg' alt='imagen decorativa')
            .col-lg-9
              .bloque-texto-a__texto.p-4(data-aos="flip-left")
                p.mb-3 De acuerdo con el PEI del SENA (2013):
                p.mb-0  El aprendiz, tiene un rol activo y sus actitudes positivas frente al aprendizaje. Debe evidenciar un nivel alto de compromiso en relación con sus procesos de desarrollo. Poner en práctica altos niveles de autonomía, de espíritu crítico, de responsabilidad, de persistencia y de autodisciplina. En especial, desarrollar su capacidad para aprender de manera colaborativa con sus pares para autoevaluar y auto-regular sus procesos de aprendizaje.


    Separador
    br
    br 
    #t_6_5.titulo-segundo
      h2  6.5  Estilos de aprendizaje
    .row.mb-5.justify-content-center(data-aos="flip-up")
      .col-lg-7
        p.mb-3  A parir del constructo teórico de Kolb, los estilos de aprendizaje evidencian de qué manera un sujeto construye conocimiento y a partir de este proceso transforma actitudes, comportamientos, resuelve problemas de la cotidianidad y el trabajo. Es útil identificar el estilo de aprendizaje propio y de los aprendices, para tener claridad qué tipo de actividad proponer que estimule y facilite la construcción de conocimiento de manera significativa y este conocimiento como competencia teórica o práctica pueda ser usado para intervenir en el mundo de la vida y el trabajo. 
        p.mb-3  Conocer los estilos de aprendizaje promoverán actividades de aprendizaje pertinentes para la adquisición de competencias de manera incluyente, atendiendo las particularidades de los aprendices, permitirá que las experiencias sean diversas en lenguaje, formatos y acciones y hacia la adquisición de habilidades en los ambientes de aprendizaje físicos y virtuales.
      .col-lg-5
        figure(data-aos="flip-left")
          img.nW.centered(src='@/assets/curso/t6-i10.png' alt='imagen decorativa')

    .row.mb-5.justify-content-center
      .col-lg-12
        .cajon.color-secundario.p-4
          p.mb-0  Los estilos de aprendizaje, de acuerdo con Kolb, se fundamentan en la manera que un sujeto asimila o apropia nuevo conocimiento, puede ser a partir de experiencia directa con objeto de conocimiento; a partir de refuerzos positivos o negativos; a partir de recibir conceptos y categorías de tipo declarativo, escuchando a expertos y a partir de procesos inductivos de lo simple a lo complejo o una combinación de ellas.

    .row.mb-5.justify-content-center
      .col-lg-10
        .border-box
          .row
            .col-lg-6
              p.mb-3  La interacción de estas dimensiones promueve un estilo particular de aprendizaje: 
              ul.lista-ul.mb-4
                li
                  i.fas.fa-check
                  | Divergente, aprende haciendo e identifica los procesos de pensamiento que usa para construir conocimiento.
                li
                  i.fas.fa-check
                  | Asimilador, es reflexivo, requiere refuerzos para construir nuevo conocimiento.
                li
                  i.fas.fa-check
                  | Convergente, construye conocimiento a partir de que se le presente el cuerpo de conocimiento, su estructura y lógica.
                                   
                li
                  i.fas.fa-check
                  | Acomodador, requiere vivir la experiencia, interactuar con el objeto de conocimiento.

             
                                    
            .col-lg-6
              figcaption.customCaption  <b>Figura</b> Dimensiones de aprendizaje Kolb
              figure(data-aos="flip-left")
                img.nW.centered(src='@/assets/curso/t6-p1.png' alt='imagen decorativa')
              figcaption  Nota. Tomada de Vergara (2021)



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
        figure(data-aos="flip-left")
          img.nW.centered(src='@/assets/curso/t6-p2.png' alt='imagen decorativa')

      

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
