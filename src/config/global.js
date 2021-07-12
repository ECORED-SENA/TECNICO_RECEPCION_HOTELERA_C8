export default {
  global: {
    componenteFormativo:
      'Sistema turístico: atractivo, facilidades, accesibilidad y servicios',
    descripcionCurso:
      'La información turística es una de las habilidades más importantes a desarrollar para el servicio de recepción hotelera. Los visitantes de los hoteles identifican a los recepcionistas del hotel como el personal capacitado y conocedor sobre cualquier información acerca del accionar de la cadena cultural y turística y/o de la actividad local. Por este motivo, esperan calidad y veracidad en la información que reciben y llevar a feliz término su actividad de ocio o trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipología',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistema turístico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Producto turístico',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Cadena de valor',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atractivo turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación de los atractivos turísticos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bienes y recursos turísticos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Zona turística',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Información turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características del informador turístico',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Atención y orientación al visitante',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Diferencia entre promoción e información turística',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Fuentes de información turística',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ubicación espacial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Puntos cardinales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas de ubicación y orientación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Puntos de referenciación en el destino',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Mapas turísticos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Brindar información asertivamente',
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
        'Boullón, R. (2006). Planificación del espacio turístico. Trillas. ',
      link:
        'http://prepacihuatlan.sems.udg.mx/sites/default/files/planificaciondelespacioturisticorobertoc.boullon.pdf',
    },
    {
      referencia:
        'Cobo, C. (2013). Orientación geográfica. La geoperspectiva integral. Geograficando, 9(9). ',
      link:
        'http://www.geograficando.fahce.unlp.edu.ar/article/view/GEOv09n09a03',
    },
    {
      referencia:
        'Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económico, Naciones Unidas y Вanco Mundial. (2008). Sistema de Cuentas Nacionales 2008. ',
      link:
        'https://www.cepal.org/sites/default/files/document/files/sna2008_web.pdf',
    },
    {
      referencia:
        'Coque, M. y Arroyo, E. (2017). Información y atención al visitante. Paraninfo.',
    },
    {
      referencia: 'FONTUR. (s. f.). Glosario. FONTUR Colombia. ',
      link: 'https://fontur.com.co/es/glosario?q=es/glosario',
    },
    {
      referencia:
        'García, A. (1970). Clasificación de los recursos turísticos. Investigaciones Geográficas, 1(3). ',
      link: 'https://doi.org/10.14350/rig.58846',
    },
    {
      referencia:
        'Luna, N. (s. f.). Comunicación Asertiva con turistas. FAVA - Formación en Ambientes Virtuales de Aprendizaje. SENA - Servicio Nacional de Aprendizaje. DOCPLAYER. ',
      link:
        'https://docplayer.es/19843613-Comunicacion-asertiva-con-turistas-fava-formacion-en-ambientes-virtuales-de-aprendizaje-sena-servicio-nacional-de-aprendizaje.html',
    },
    {
      referencia:
        'Martín, B. (2013). Cadena de valor en turismo. turismo y sostenibilidad. ',
      link:
        'https://turismoysostenibilidad.wordpress.com/2013/10/24/cadena-de-valor-en-turismo/',
    },
    {
      referencia: 'OMT. (s. f.). Glosario de términos de turismo.',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos',
    },
    {
      referencia:
        'Ruano, C. (2012). Promoción y comercialización de productos y servicios turísticos locales. Alianza Editorial.',
    },
  ],
  glosario: [
    {
      termino: 'Plano cartesiano',
      significado:
        'se conoce como plano cartesiano a dos rectas numéricas perpendiculares, una horizontal y otra vertical, que se cortan en un punto llamado origen o punto cero. La finalidad del plano cartesiano es describir la posición o ubicación de un punto en el plano, la cual está representada por el sistema de coordenadas.',
    },
  ],
  complementario: [
    {
      texto: 'Procolombia. (s.f.). Colombia.',
      tipo: 'Página web',
      link: 'https://colombia.travel/es',
    },
    {
      texto:
        'Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económico, Naciones Unidas y Вanco Mundial. (2008). Sistema de Cuentas Nacionales 2008.',
      tipo: 'Libro',
      link:
        'https://unstats.un.org/unsd/nationalaccount/docs/sna2008spanish.pdf',
    },
    {
      texto:
        'García, A. (s. f.). Capítulo 2. Clasificación de los recursos turísticos.',
      tipo: 'Capítulo',
      link:
        'http://www.igeograf.unam.mx/Geodig/antologia/index.html/pdf/2_garcia.pdf ',
    },
    {
      texto:
        'Cobo, C. (2013). Orientación geográfica. La geoperspectiva integral. Geograficando, 9(9).',
      tipo: 'Documento ',
      link:
        'http://www.geograficando.fahce.unlp.edu.ar/article/view/GEOv09n09a03',
    },
    {
      texto:
        'Luna, N. (s. f.). Comunicación Asertiva con turistas. FAVA - Formación en Ambientes Virtuales de Aprendizaje. SENA - Servicio Nacional de Aprendizaje. DOCPLAYER.',
      tipo: 'Cartilla',
      link:
        'https://docplayer.es/19843613-Comunicacion-asertiva-con-turistas-fava-formacion-en-ambientes-virtuales-de-aprendizaje-sena-servicio-nacional-de-aprendizaje.html',
    },
    {
      texto: 'OMT. (s. f.). Glosario de términos de turismo.',
      tipo: 'Blog',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos',
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
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Harbey Castelblanco',
        cargo: 'Experto temático',
        centro: 'Centro Nacional Colombo Alemán',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: '  ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
