<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Atractivo turístico

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.jpg", alt="Turismo")  

    p(data-aos="fade") Son todos aquellos elementos naturales, bienes creados por la mano del hombre y hechos sociales que crean el interés de ser conocidos y permiten su disfrute. En este sentido, es importante señalar que la evolución de los viajeros (demanda turística) ha obligado al sector a ofertar productos cada vez más especializados. Esta realidad ha derivado en una diversificación turística sin precedentes. A continuación, se clasifican los atractivos turísticos con el fin de ayudar al entendimiento de este concepto.

    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1.  Clasificación de los atractivos turísticos

    p(data-aos="fade") En primer lugar, están los elementos naturales, los cuales pueden ser montañas, planicies, valles, quebradas, cañones, lagos y lagunas, pantanos, ríos, caídas agua, manantiales, costas, grutas y cavernas, áreas protegidas.
    p(data-aos="fade") Colombia es un país privilegiado, cuenta con dos (2) costas y variados climas, lo que redunda en una multiplicidad de paisajes y diversidad natural.
    p.mb-4(data-aos="fade") A continuación, se realiza un recorrido por algunos de los más famosos y hermosos sitios de la naturaleza.

    .row.color-naranja2.justify-content-center.mb-5.redondeado(data-aos="fade-down")
      .col-lg-11.p-lg-5
        SlyderB(:datos="datosSlyder")

    p.mb-4(data-aos="fade") En segundo lugar, están las manifestaciones culturales. Estas hablan de la historia y de la realización de la humanidad como sociedad. A través del mundo, es posible observar muestras, como son museos, arquitectura, espacios urbanos, lugares históricos, restos y lugares arqueológicos y pueblos.

    .row.color-naranja2.justify-content-center.mb-5.redondeado(data-aos="fade-down")
      .col-lg-11.p-lg-5
        SlyderB(:datos="datosSlyderB")

    p.mb-4(data-aos="fade") Por última, pero no menos importante, está la clasificación de los usos y costumbres de la gente: el folclor, que se conoce como el conjunto de expresiones religiosas y populares, ferias, mercados, música, danza, artes, artesanías y gastronomía.

    .row.color-naranja2.justify-content-center.redondeado(data-aos="fade-down")
      .col-lg-11.p-lg-5
        SlyderB(:datos="datosSlyderC")  

    Separador         


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2.  Bienes y recursos turísticos

    p.mb-4(data-aos="fade") En este aparte, es necesario partir de la conceptualización de los términos bienes y recursos turísticos; de esta forma, y con base en la diferencia de estos conceptos, se apropiará el conocimiento de este.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .row 
          .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                h4 Según describe el documento conocido como Sistema de Cuentas Nacionales:
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  .bloque-texto-b2
                    .bloque-texto-b2__texto
                      .row
                        .col-lg-1.comilla-inicial
                          i.fas.fa-quote-left
                        .col-lg-11.p-4
                          p.mb-2 Los bienes son objetos físicos producidos para los que existe una demanda, sobre los que se pueden establecer derechos de propiedad y que pueden transferirse de una unidad institucional a otra mediante transacciones realizadas en los mercados.
                          p.mb-0 (Comisión Europea et al., 2008)  
                        .col-lg-1.comilla-final
                          i.fas.fa-quote-right  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1_CF08__Sistema_Cuentas_Nacionales_2008.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo. 
              |   Si estos bienes son usados para desarrollar la actividad turística, se pueden asimilar a bienes turísticos.                        

    p.mb-4(data-aos="fade") Por otra parte, como recursos turísticos, se denotan aquellos elementos que podrían llegar a ser un atractivo turístico pero que aún no cuentan con los acomodamientos necesarios para atender visitantes. Es decir, si se analiza en términos económicos, serían los bienes o activos turísticos que están en el inventario esperando a ser vendidos.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2_CF08_Clasificacion_Recursos_Turisticos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo. 
              |   La autora Ana García Silberman brinda la clasificación más aceptada de estos recursos turísticos. García Silberman divide estos recursos en dos grandes grupos: recursos naturales y recursos culturales) y estos a su vez en otros (García Silberman, 1970).

    p.mb-4(data-aos="fade") La siguiente imagen presenta un resumen del PDF estudiado anteriormente.

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        .tarjeta.color-naranja5.py-3.px-lg-5.px-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-3
              img.px-lg-3(src="@/assets/curso/tema2-2-ico.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Figura 2
                  p.mb-0.text-small Clasificación de los recursos turísticos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Linea_de_tiempo_La_CAN_historia.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador  


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.3.  Zona turística

    p(data-aos="fade") Es un espacio territorial físico que contiene atractivos turísticos y que por lo tanto genera un flujo de personas (turistas) hacia ella. Su tamaño es variable y debe contar con unas cualidades homogéneas y un conjunto paisajístico común. Una zona turística puede agrupar extensiones territoriales de tamaño más pequeño y que se denominan áreas turísticas. Como rasgo relevante, la zona turística debe contar con infraestructura y servicios de comunicación entre las áreas que la integran. 
    p(data-aos="fade") El autor Boullón (2006) destaca la zona turística como la unidad de mayor tamaño dentro de la organización del espacio turístico y determina que, para que exista una zona turística, esta debe contar con un número mínimo de diez (10) atractivos turísticos próximos, sin importar de qué tipo o categoría son.
    p.mb-4(data-aos="fade") Esta característica hace que la zona turística sea por excelencia la unidad más importante de clasificación y organización del espacio turístico moderno.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0
            strong Figura 3.  
            | Zona turística
        figure.mb-5
          img.mb-1(src='@/assets/curso/tema2-3-fig3.svg', alt='Zona turística')
          figcaption Nota. Tomada de Boullón (2006).   



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Montañas y lago',
        texto: 'Fantástico panorama del Lago Bachalp / Bachalpsee, Suiza.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img1.jpg'),
      },
      {
        titulo: 'Cañones',
        texto:
          'El más famoso de los cañones del mundo es el Gran Cañón del Colorado. <br> <br> En Colombia, está el cañón del río Chicamocha en Santander.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img2.jpg'),
      },
      {
        titulo: 'Ríos',
        texto:
          'El más hermoso de los ríos del mundo está en Colombia, es el Caño Cristales o río de los siete colores.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img3.jpg'),
      },
      {
        titulo: 'Pantanos',
        texto:
          'Son de gran importancia para la conservación de ecosistemas. En esta imagen, una vista aérea de los Everglades de la Florida en Estados Unidos.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img4.jpg'),
      },
      {
        titulo: 'Caídas de agua',
        texto:
          'El Salto Ángel es la cascada más alta del mundo, con 979 metros, y se encuentra en el Parque Nacional Canaima, Venezuela.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img5.jpg'),
      },
      {
        titulo: 'Costas',
        texto:
          'Las costas tienen una especial atracción para el ser humano. Whitehaven, en Australia, tiene el título de la playa mas linda del mundo.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img6.jpg'),
      },
      {
        titulo: 'Grutas y cavernas',
        texto:
          'Cueva de Eisriesenwelt (interior de esta cueva de hielo) está situada en Austria, a 40 kilómetros de Salzburgo.',
        imagen: require('@/assets/curso/tema2-1-slyder1-img7.jpg'),
      },
    ],
    datosSlyderB: [
      {
        titulo: 'Museos',
        texto: 'Museo del Oro – Bogotá (Colombia).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img1.jpg'),
      },
      {
        titulo: 'Arquitectura',
        texto:
          'Burj Khalifa (edificio más alto del mundo) – Dubái (Emiratos Árabes).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img2.jpg'),
      },
      {
        titulo: 'Arquitectura icónica',
        texto: 'Opera House – Sídney (Australia).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img3.jpg'),
      },
      {
        titulo: 'Espacios urbanos',
        texto: 'Jardines de Luxemburgo – París (Francia).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img4.jpg'),
      },
      {
        titulo: 'Lugares históricos',
        texto: 'Ciudad amurallada – Cartagena (Colombia).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img5.jpg'),
      },
      {
        titulo: 'Lugares históricos',
        texto: 'Gran Muralla China – (China).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img6.jpg'),
      },
      {
        titulo: 'Lugares arqueológicos',
        texto: 'Machu Picchu – (Perú).',
        imagen: require('@/assets/curso/tema2-1-slyder2-img7.jpg'),
      },
    ],
    datosSlyderC: [
      {
        titulo: 'Expresiones religiosas',
        texto: 'Semana Santa en  Popayán – Colombia.',
        imagen: require('@/assets/curso/tema2-1-slyder3-img1.jpg'),
      },
      {
        titulo: 'Expresiones populares',
        texto: 'Día de Muertos – México.',
        imagen: require('@/assets/curso/tema2-1-slyder3-img2.jpg'),
      },
      {
        titulo: 'Mercados',
        texto: 'Jemaa Antigua Medina - Marruecos.',
        imagen: require('@/assets/curso/tema2-1-slyder3-img3.jpg'),
      },
      {
        titulo: 'Danza',
        texto: 'Tango en Buenos Aires – Argentina.',
        imagen: require('@/assets/curso/tema2-1-slyder3-img4.jpg'),
      },
      {
        titulo: 'Artesanías',
        texto: 'Ráquira - Colombia.',
        imagen: require('@/assets/curso/tema2-1-slyder3-img5.jpg'),
      },
      {
        titulo: 'Gastronomía',
        texto: 'Pizza - Italia.',
        imagen: require('@/assets/curso/tema2-1-slyder3-img6.jpg'),
      },
    ],
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
