export default {
  global: {
    componenteFormativo: 'Marco conceptual pedagógico',
    descripcionCurso:
      'A través del desarrollo de este componente se llevará a cabo la contextualización conceptual sobre la educación en Colombia, la formación profesional y los modelos pedagógicos de manera que se cuente sustentos teóricos para realizar procesos de desarrollo curricular de acuerdo con la metodología SENA. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Formación para el trabajo y el desarrollo humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de formación para el trabajo y el desarrollo humano',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Características de la formación para el trabajo y el desarrollo humano',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Normativa de la formación para el trabajo y el desarrollo humano',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formación Profesional Integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de la formación profesional integral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios de la formación profesional integral',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Programa de formación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Componentes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Modalidades de formación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Modelos pedagógicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Modelo pedagógico del SENA',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Modelos pedagógicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Objetivo',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Alcance',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Componentes',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'PEI del SENA',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Teorías del aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Aprendizaje significativo',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Teoría del aprendizaje sociocultural',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Estrategias de aprendizaje',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Aprendiz',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Estilos de aprendizaje',
            hash: 't_6_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.6',
            titulo: 'Aprendizaje con TIC',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Enseñanza',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ausubel, D. (1976). Psicología educativa: Un punto de vista cognoscitivo. Trillas.',
    },
    {
      referencia:
        'Barron, B., y Darling-Hammond, L. (2008). <i>Teaching for Meaningful Learning. A Review of Research on Inquiry-Based and Cooperative Learning. The George Lucas Educational Foundation.</i>',
    },
    {
      referencia:
        'Coll, C., Onrubia, J., y Mauri, T. (2007). Tecnología y prácticas pedagógicas: Las TIC como instrumentos de mediación de la actividad conjunta de profesores y estudiantes. Anuario de Psicología, 38, 25.',
    },
    {
      referencia:
        'Flórez, R. (1994). Hacia una pedagogía del conocimiento. McGraw-Hill.',
    },
    {
      referencia:
        'Flórez, R. (2005). Pedagogía del conocimiento. Editorial Mac-GrawHill. ',
    },
    {
      referencia:
        'Gallego, R., y Pérez R. (1998). Aprendibilidad- enseñabilidad- educabilidad: una discusión. Revista Colombiana de Educación, (36-37).',
      link: 'https://doi.org/10.17227/01203916.5873',
    },
    {
      referencia:
        'Martí, J., Heydrich, M., Rojas, M., y Hernández, A. (2010). Aprendizaje basado en proyectos: Una experiencia de innovación docente. Revista Universidad EAFIT, 46(158), 11-21.',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (2013). Aportes al debate sobre objetos de aprendizaje para el desarrollo de competencias laborales. OIT.',
      link: 'http://www.oitcinterfor.org/l-laborales',
    },
    {
      referencia:
        'Pecore, J. L. (s. f.). From Kilpatrick’s Project Method. TO Project-Based Learning.',
    },
    {
      referencia:
        'Presidencia de Colombia (1994). Decreto 1860 de 1994, por el cual se reglamenta parcialmente la Ley 115 de 1994 en los aspectos pedagógicos y organizativos generales.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1362321',
    },
    {
      referencia:
        'SENA (1997). Acuerdo 008 de 1997. Por medio del cual se adopta el Estatuto de la Formación Profesional del Servicio Nacional de Aprendizaje. SENA',
    },
    {
      referencia:
        'SENA. (2012). Modelo pedagógico de la formación integral. SENA',
    },
    {
      referencia: 'SENA. (2013). proyecto educativo institucional. SENA.',
    },
    {
      referencia:
        'SENA. (2019). Resolución 2198 de 2019, por la cual se modifica la clasificación y los niveles de los programas de formación, su denominación y su duración, las modalidades de formación y otras condiciones especiales relacionadas con el acceso a la Formación Profesional Integral, deroga la Resolución 1444 de 2018 y modifica el artículo 2o de la Resolución 2130 de 2013. SENA',
    },
    {
      referencia:
        'SENA. (2021). Observatorio laboral y ocupacional colombiano.',
      link: 'https://observatorio.sena.edu.co/',
    },
    {
      referencia:
        'Unesco. (2005). Hacia las sociedades del conocimiento. Unesco.',
    },
    {
      referencia:
        'Unesco. (2016). Orientaciones para la elaboración de políticas docentes en América Latina y el Caribe. Unesco.',
    },
    {
      referencia:
        'Universidad Católica del Norte. (2021). ¿Qué es educación o formación para el trabajo y el desarrollo humano?',
      link: 'https://www.ucn.edu.co/gtdh/Paginas/que-es.aspx',
    },
    {
      referencia:
        'Vergara, G. (2021). La teoría de los estilos de aprendizaje.',
      link:
        'https://sociologiaenlaunjfsc.wordpress.com/2020/08/27/la-teoria-de-los-estilos-de-aprendizaje-por-carlos-vergara/2021',
    },
    {
      referencia:
        'Villar, S. (2013). Aprendizaje basado en proyectos. Universidad de Zaragoza.',
    },
    {
      referencia:
        'Vygotsky, L. (1978). El desarrollo de los procesos psicológicos superiores. Grupo Editorial Grijalbo. ',
    },
    {
      referencia:
        'Vygotsky, L. (1995). Pensamiento y lenguaje. Teoría del desarrollo cultural de las funciones psíquicas. Fausto.',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'acción y efecto de aprender algún arte, oficio u otra cosa. Adquisición por la práctica de una conducta duradera.',
    },
    {
      termino: 'Didáctica ',
      significado:
        'propio, adecuado o con buenas condiciones para enseñar o instruir. Que tiene como finalidad fundamental enseñar o instruir.',
    },
    {
      termino: 'Enseñanza',
      significado:
        'ejemplo, acción o suceso que sirve de experiencia, enseñando o advirtiendo cómo se debe obrar en casos análogos. Conjunto de conocimientos, principios, ideas, etc., que se enseñan a alguien.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'ciencia que se ocupa de la educación y la enseñanza. Práctica educativa o de enseñanza en un determinado aspecto o área.',
    },
    {
      termino: 'Teoría',
      significado:
        'serie de las leyes que sirven para relacionar determinado orden de fenómenos.',
    },
  ],
  complementario: [
    {
      texto: 'Gamba, A. (2014) Modelos pedagógicos (Línea de tiempo).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=C6nYnxnwFqU&t=4s',
    },
    {
      texto: 'SENA. (2012). Modelo Pedagógico de la Formación integral. SENA.',
      tipo: 'Documento anexo',
      link:
        'http://rvcmar.org/EDT_MODELO_PEDAG_SENA/MODELO%20PEDAG%20DE%20LA%20FPI%20SENA.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alexandra Hoyos Figueroa',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro para el Desarrollo de Hábitat y la Construcción',
      },
      {
        nombre: 'Hernán Darío Córdoba Escobar',
        cargo: 'Instructor',
        centro: 'Centro para el Desarrollo de Hábitat y la Construcción',
      },
      {
        nombre: 'Adriana López López',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para el Desarrollo de Hábitat y la Construcción',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
