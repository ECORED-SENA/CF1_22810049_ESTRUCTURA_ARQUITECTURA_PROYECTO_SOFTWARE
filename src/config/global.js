export default {
  global: {
    componenteFormativo: 'Introducción a la arquitectura de <em>software<em>',
    descripcionCurso: 'BREVE DESCRIPCIÓN (No está en el documento de word)',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/f1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/f2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/f3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/f4.png'),
      },
    ],
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
        titulo:
          'Conocimientos en metodologías de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción a la educción de requisitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Establecer las necesidades del negocio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Identificar los <em>stakeholders</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Definición de requerimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Definir el tipo de arquitectura',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Conocimientos en Metodologías de desarrollo de <em>Software</em>',
      referencia:
        'Rivas, C. I., Corona, V. P., Gutiérrez, J. F., & Hernández, L. (2015). Metodologías actuales de desarrollo de <em>software</em>. <em>Revista de Tecnología e Innovación, 2(5), 980-986.</em> ',
      tipo: 'Articulo web',
      descarga: '/downloads/Tecnologia_e_Innovacion_Vol2_Num5_6.pdf',
    },
    {
      tema: 'Definir el tipo de arquitectura.',
      referencia:
        'Garlan, D., & Shaw, M. (1994). An Introduction to <em>software</em> Architecture. School of Computer Science, Carnegie Mellon University.',
      tipo: 'Articulo web',
      descarga: '/downloads/intro_softarch.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Arquetipos',
      significado: 'Son patrones arquitectónicos en <em>software</em>.',
    },
    {
      termino: 'Artefactos',
      significado:
        'Un artefacto es la especificación de un componente físico de información que es usado o producido por un proceso de desarrollo de <em>software.</em>',
    },
    {
      termino: 'Stakeholders',
      significado:
        'Traducido al español como "grupos de interés" o "partes interesadas", son las personas, grupos u organizaciones que se ven afectadas por las acciones y decisiones de una empresa. Para identificarlos, es fundamental la realización de un mapeo.',
    },
    {
      termino: 'Requerimientos',
      significado:
        'Es una descripción completa del comportamiento del sistema que se va a desarrollar.',
    },
  ],
  referencias: [
    {
      referencia:
        'ItMadris Digital School. (2020). Qué es y para qué sirve Design Thinking.',
      link: 'https://www.itmadrid.com/que-es-y-para-que-sirve-design-thinking/',
    },
    {
      referencia: 'Ittgweb (2016). Descomposición modular',
      link: 'https://ittgweb.wordpress.com/2016/05/29/descomposicion-modular/',
    },
    {
      referencia:
        'Garlan, D., & Shaw, M. (1994). An Introduction to <em>software</em> Architecture. School of Computer Science, Carnegie Mellon University.',
      link: 'http://sunnyday.mit.edu/16.355/intro_softarch.pdf ',
    },
    {
      referencia: 'Lorbada, G. (2017), Diferentes metodologías ágiles.',
      link:
        'https://lorbada.com/blog/2017/02/10/diferentes-metodologias-agiles/',
    },
    {
      referencia:
        'Maida, EG, Pacienzia, J. (2015). Metodologías de desarrollo de <em>software</em>. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería “Fray Rogelio Bacon”. Universidad Católica Argentina.',
      link: 'https://repositorio.uca.edu.ar/handle/123456789/522',
    },
    {
      referencia:
        'Martínez, S. (2013). La relación entre cliente, analista y programador: ¿condenados a no entenderse? ',
      link:
        'https://www.mundoerp.com/blog/relacion-cliente-analista-y-programador/',
    },
    {
      referencia: 'Master marketing. (2020). ¿Qué es el método Lean Startup? ',
      link:
        'https://www.mastermarketing-valencia.com/marketing-digital/wp-content/uploads/sites/1/2020/06/Infograf%C3%ADa-fases-metodolog%C3%ADa-Lean-Startup.jpg',
    },
    {
      referencia:
        'Rivas, C. I., Corona, V. P., Gutiérrez, J. F., & Hernández, L. (2015). Metodologías actuales de desarrollo de <em>software</em>. Revista de Tecnología e Innovación, 2(5), 980-986.',
      link:
        'https://www.ecorfan.org/bolivia/researchjournals/Tecnologia_e_innovacion/vol2num5/Tecnologia_e_Innovacion_Vol2_Num5_6.pdf',
    },
    {
      referencia:
        'Sommerville, I. (2005). Ingeniería del <em>software</em>. Pearson educación.',
      link: '',
    },
    {
      referencia: 'Tenea. (2021). DevOps: Qué es y cómo beneficia a tu empresa',
      link:
        'https://blog.tenea.com/devops-que-es-y-como-beneficia-a-tu-empresa/',
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
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
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
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
