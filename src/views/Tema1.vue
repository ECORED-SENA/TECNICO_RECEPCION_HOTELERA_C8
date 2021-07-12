<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Turismo

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.jpg", alt="Turismo")  

    p.mb-5(data-aos="fade") La OMT (s. f.) define el turismo como:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-naranja2
          .bloque-texto-b__texto
            .row
              .col-lg-1.comilla-inicial
                i.fas.fa-quote-left
              .col-lg-10.p-4
                p.mb-0 Las empresas interesadas en prestar el servicio público de transporte o constituidas para tal fin, deberán solicitar y obtener habilitación para operar. La habilitación, para efectos de esta Ley, es la autorización expedida por la autoridad competente en cada Modo de transporte para la prestación del servicio público de transporte (Art. 11).
              .col-lg-1.comilla-final
                i.fas.fa-quote-right  

    p(data-aos="fade") Esta definición evidencia cada uno de los componentes que se articulan alrededor del turismo, las actividades y principales protagonistas en su desarrollo. 

    p.mb-5(data-aos="fade") Existe un buen número de definiciones respecto al turismo y sus componentes, las cuales han venido evolucionando a través del tiempo. Es de suma importancia manejar un lenguaje técnico y planificado, que le permita transmitir la información de la forma como la espera el cliente. Así lo manifiesta el autor Roberto Boullón, en su obra Planificación del espacio turístico:  

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-naranja2
          .bloque-texto-b__texto
            .row
              .col-lg-1.comilla-inicial
                i.fas.fa-quote-left
              .col-lg-10.p-4
                p.mb-0 “La necesidad de un lenguaje técnico unificado es aún mucho mayor en los sistemas de capacitación y en la enseñanza escolarizada que operan en el sector, que para otros segmentos participantes en su función comercial”. (Boullón, 2006).
              .col-lg-1.comilla-final
                i.fas.fa-quote-right

    p.mb-4(data-aos="fade") El turismo se considera una de las actividades más importantes a nivel mundial. Y lo es, no solo por la generación de riqueza a su alrededor (ha sido llamado el “nuevo petróleo”), sino también por sus componentes: 

    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/curso/tema1-img1-1.png' alt='AvatarTop').img2
              img(src='@/assets/curso/tema1-img1.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf
                .p-4
                  h3.text-center Socio cultural
                  p.text-center Intercambio de experiencias
          .col-md-2.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema1-img2-1.png' alt='AvatarTop').img2
              img(src='@/assets/curso/tema1-img2.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf
                .p-4
                  h3.text-center Generador de empleo
                  p.text-center Es uno de los sectores de la economía que mayor número de empleos aporta.

    p(data-aos="fade") Estos aspectos hacen que el turismo sea un dinamizador importante de la economía nacional.

    Separador 
  

    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1.  Tipología 

    p(data-aos="fade") El turismo es una actividad diversa y estrechamente relacionada con el entorno y la motivación del viaje. En esta relación del turismo con entorno/motivación/duración, se crean los diferentes tipos de turismo que cada día tienden a ser más dinámicos y a crear nuevos tipos de experiencias. En la siguiente infografía se reconocen algunos tipos de turismo. 

    .row
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema1-1-hover1.svg", alt="Turismo cultural")
          .text
            p.text-center.mb-3.h4 
              strong Turismo cultural
            p.text-center.mb-0 Gastronómico
            p.text-center.mb-0 Enoturismo 
            p.text-center.mb-0 Educativo
            p.text-center.mb-0 Científico
            p.text-center.mb-0 Musical
            p.text-center.mb-0 Literario 
            p.text-center.mb-0 Cinematográfico
            p.text-center.mb-0 Industrial
            p.text-center.mb-0 Arquitectónico
            p.text-center.mb-0 Arqueológico
            p.text-center.mb-0 Creativo
            p.text-center.mb-0 Museos
            p.text-center.mb-0 Político
      .col-lg-4
        .nav-holder(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema1-1-hover2.svg", alt="Turismo de naturaleza")
          .text
            p.text-center.mb-3.h4 
              strong Turismo de naturaleza
            p.text-center.mb-0 Ecoturismo
            p.text-center.mb-0 Rural
            p.text-center.mb-0 De aventura
            p.text-center.mb-0 Agroturismo
            p.text-center.mb-0 De nieve
            p.text-center.mb-0 Aviturismo (ornitológico)
            p.text-center.mb-0 De montaña
            p.text-center.mb-0 Astroturismo
            p.text-center.mb-0 De animales
            p.text-center.mb-0 Camping
            p.text-center.mb-0 Geoturismo
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema1-1-hover3.svg", alt="Turismo temático")
          .text
            p.text-center.mb-3.h4 
              strong Turismo temático
            p.text-center.mb-0 Espacial
            p.text-center.mb-0 Ufológico
            p.text-center.mb-0 Atómico 
            p.text-center.mb-0 Rojo
            p.text-center.mb-0 Caza
            p.text-center.mb-0 Urbano
            p.text-center.mb-0 De lujo
            p.text-center.mb-0 De carretera
            p.text-center.mb-0 Funerario (necroturismo)
            p.text-center.mb-0 De cruceros
            p.text-center.mb-0 Pop
            p.text-center.mb-0 De moda
            p.text-center.mb-0 Genealógico 
            p.text-center.mb-0 Set-Jetting
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema1-1-hover4.svg", alt="Turismo de salud")
          .text
            p.text-center.mb-3.h4 
              strong Turismo de salud
            p.text-center.mb-0 De bienestar
            p.text-center.mb-0 Médico
            p.text-center.mb-0 Estético
            p.text-center.mb-0 Reproductivo
            p.text-center.mb-0 Abortivo
            p.text-center.mb-0 De nacimientos
            p.text-center.mb-0 Dental
      .col-lg-4
        .nav-holder(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema1-1-hover5.svg", alt="Turismo de experiencias ")
          .text
            p.text-center.mb-3.h4 
              strong Turismo de experiencias 
            p.text-center.mb-0 De compras
            p.text-center.mb-0 Negro
            p.text-center.mb-0 Hipster
            p.text-center.mb-0 Sexual
            p.text-center.mb-0 De drogas
            p.text-center.mb-0 De juego
            p.text-center.mb-0 Militarista
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema1-1-hover6.svg", alt="Turismo de fe")
          .text
            p.text-center.mb-3.h4 
              strong Turismo de fe
            p.text-center.mb-0 Espiritual
            p.text-center.mb-0 Religioso
            p.text-center.mb-0 Esotérico
            p.text-center.mb-0 Halal     
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema1-1-hover7.svg", alt="Turismo de negocios")
          .text
            p.text-center.mb-3.h4 
              strong Turismo de negocios
            p.text-center.mb-0 De reuniones
            p.text-center.mb-0 De eventos
            p.text-center.mb-0 De congresos
            p.text-center.mb-0 Ferial
      .col-lg-4
        .nav-holder(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema1-1-hover8.svg", alt="Turismo social")
          .text
            p.text-center.mb-3.h4 
              strong Turismo social 
            p.text-center.mb-0 Accesible
            p.text-center.mb-0 Comunitario
            p.text-center.mb-0 Solidario
            p.text-center.mb-0 Voluntariado
      .col-lg-4
        .nav-holder
          img(src="@/assets/curso/tema1-1-hover9.svg", alt="Otros tipos")
          .text
            p.text-center.mb-3.h4 
              strong Otros tipos
            p.text-center.mb-0 Sostenible 
            p.text-center.mb-0 De sol y playa
            p.text-center.mb-0 Deportivo
            p.text-center.mb-0 De guerra
            p.text-center.mb-0 PobristaDe solteros
            p.text-center.mb-0 De tercera edad
            p.text-center.mb-0 De ríos
            p.text-center.mb-0 De beneficios 
            p.text-center.mb-0 De jardines
            p.text-center.mb-0 Lunas de miel 
            p.text-center.mb-0 LGBTQI+ 
            p.text-center.mb-0 Viajes virtuales y 3D


    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2.  Características

    p(data-aos="fade") El turismo, como se ha explicado anteriormente, es una actividad en la cual se involucran diferentes actores, y se denota por unas características bien definidas, la principal es:

    .row.justify-content-center
      .col-lg-9
        .row 
          .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1-2-image.svg", alt="Características")
              .col-lg-8
                .bloque-texto-a__texto.p-4
                  p.mb-4 Característica principal
                  .bloque-texto-b2
                    .bloque-texto-b2__texto
                      .row
                        .col-lg-1.comilla-inicial
                          i.fas.fa-quote-left
                        .col-lg-11.p-4
                          strong.mb-0 “El traslado temporal de un individuo a una localidad o país diferente al de residencia habitual”.
                        .col-lg-1.comilla-final
                          i.fas.fa-quote-right

    p.mb-4(data-aos="fade") Adicionalmente se pueden mencionar otras características transversales a la actividad turística, como son:

    AcordionA(tipo="a" clase-tarjeta="tarjeta color-naranja3")
      .row(titulo="Intangibilidad")
        p.px-lg-5 Es la característica que distingue a los productos de los servicios y supone tanto un elemento palpable como mental; conlleva a que el consumidor tenga un elevado grado de incertidumbre durante el proceso de compra.     
      div(titulo="Variabilidad")
        p.px-lg-5 Es ofrecida y prestada por personas distintas y en circunstancias diferentes y es difícil evaluar la calidad antes de la compra, ya que las percepciones varían según las personas.
      div(titulo="Caducidad")
        p.px-lg-5 Son susceptibles de perecer y no se pueden almacenar.
      div(titulo="Temporalidad")
        p.px-lg-5 La compra de servicios solo da el derecho de ser usados en un tiempo y lugar determinado. 
      div(titulo="Inseparabilidad")
        p.px-lg-5 La creación y realización del servicio puede ocurrir al mismo tiempo que su consumo (in situ). 
      div(titulo="No devolución")
        p.px-lg-5 Los servicios una vez utilizados no se pueden devolver. 
      div(titulo="Interdependencia")
        p.px-lg-5 El número de empresas que intervienen en la prestación del servicio hacen que la satisfacción del turista no dependa de una sola empresa sino del conjunto de prestadores.
      div(titulo="Estacionalidad")
        p.px-lg-5 Hace alusión a la concentración de la demanda turística en ciertos periodos del año. Ejemplo: temporadas, vacaciones, fines de semana. 
      div(titulo="Intransferibilidad")
        p.px-lg-5 Una vez recibido no se puede ceder a otra persona el derecho sobre un servicio ya prestado.
      div(titulo="Servucción")
        p.px-lg-5 Significa el proceso de elaboración de un servicio, la organización de los elementos físicos y humanos en la relación cliente–empresas necesaria para la prestación de un servicio, cuyas características esenciales y niveles de calidad han sido determinadas. (Ruano, 2012).            

    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3. Sistema turístico

    p.mb-4(data-aos="fade") Para la prestación de servicios turísticos, es necesario conocer el funcionamiento del sistema turístico, que se define como el conjunto de elementos interrelacionados entre sí que evolucionan de forma dinámica para configurar la naturaleza de la actividad turística, y está conformado por cinco subsistemas: 

    .row
      .col-lg-8
         PestanasA.color-acento-botones.mb-5
          .tarjeta.color-naranja4.p-4(titulo="Estructura turística")
            p 
              strong Reservas con garantía
            p.mb-0 Denominada también planta turística, hace posible la permanencia del turista o visitante en el lugar de destino. Está conformada por el conjunto de atractivos turísticos, instalaciones y equipamiento encargados para la prestación de servicios al turista, ofreciendo comodidad en el destino visitado, para satisfacer las necesidades y superar sus expectativas en términos de calidad (Boullón, 2006).
          .tarjeta.color-naranja4.p-4(titulo="Infraestructura turística")
            p.mb-0 Es el conjunto de bienes y servicios con los que cuenta un destino turístico para contribuir a la satisfacción de las necesidades y expectativas de los turistas, facilitando la accesibilidad y desplazamiento al lugar de destino, como vías de comunicación, terminales de transporte (aéreo, terrestre, ferroviario, marítimo, fluvial y lacustre), sistemas de comunicación (satelital, telefonía, acceso a la red), sistema de sanidad (acueducto, alcantarillado, recolección de basuras, primeros auxilios y servicios hospitalarios) y servicios de energía eléctrica (red eléctrica, alumbrado público, domiciliario). 
          .tarjeta.color-naranja4.p-4(titulo="Superestructura turística")
            p.mb-0 Está conformada por todos los organismos oficiales, privados y mixtos que se encargan de la regulación del Sistema Turístico (normatividad, legislación turística), con el fin de lograr la optimización, facilitación, producción y venta de los servicios que integran la actividad turística (Ministerio de Industria, Comercio y Turismo, Dirección Nacional de Turismo, PROCOLOMBIA, FONTUR, ANATO, ACODRES, clústeres de turismo) (FONTUR, s. f.). 
          .tarjeta.color-naranja4.p-4(titulo="Oferta turística")
            p.mb-0 Es el conjunto de productos y servicios asociados a un determinado espacio geográfico y sociocultural, que permite facilitar y propiciar el aprovechamiento de los atractivos turísticos de ese lugar y cuyos oferentes pueden vender en el mercado a un precio establecido y en un periodo de tiempo determinado, para ser usado o consumido por los turistas.   
          .tarjeta.color-naranja4.p-4(titulo="Demanda turística")
            p.mb-0 Se define como el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades; opera en el contexto de un mercado en el que intervienen diversos prestadores de servicios turísticos que ponen a disposición del turista los servicios y productos que requieren para satisfacer determinadas necesidades (viajes, ocio, vacaciones, esparcimiento, tiempo libre). Desde el punto de vista económico, la oferta turística está dada por bienes o servicios que son comercializados como producto turístico.     
      .col-lg-4
        img(src="@/assets/curso/tema1-3-image.jpg", alt="Sistema turístico")
      

    p.mb-4(data-aos="fade") En la siguiente infografía, se comparte cómo se encuentra organizado el sistema turístico. 

    .row.justify-content-center.mb-4
      .col-lg-8
        .row
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar2
              img(src='@/assets/curso/tema1-3-ico1.svg' alt='AvatarTop')
              .tarjeta.color-naranja3
                .p-4
                  h4.text-center Estructura turística
                  p.text-center.mb-0 Atractivos
                  p.text-center.mb-0 Instalacione
                  p.text-center Equipamiento

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar2
              img(src='@/assets/curso/tema1-3-ico2.svg' alt='AvatarTop')
              .tarjeta.color-naranja3
                .p-4
                  h4.text-center INFRAESTRUCTURA turística
                  p.text-center.mb-0 Vías
                  p.text-center.mb-0 Sistemas Comunicación
                  p.text-center.mb-0 Sistema Sanitario
                  p.text-center Terminales de transporte

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar2
          img(src='@/assets/curso/tema1-3-ico3.svg' alt='AvatarTop')
          .tarjeta.color-naranja3
            .p-4
              h4.text-center SUPERESTRUCTURA turística
              p.text-center Organismos oficiales, privados y mixtos que se encargan de la regulación del Sistema Turístico.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar2
          img(src='@/assets/curso/tema1-3-ico4.svg' alt='AvatarTop')
          .tarjeta.color-naranja3
            .p-4
              h4.text-center OFERTA turística
              p.text-center  Productos y servicios asociados a un determinado espacio geográfico.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar2
          img(src='@/assets/curso/tema1-3-ico5.svg' alt='AvatarTop')
          .tarjeta.color-naranja3
            .p-4
              h4.text-center DEMANDA turística
              p.text-center Conjunto de turistas que están motivados a utilizar una serie de productos o servicios turísticos para satisfacer sus necesidades.

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4. Producto turístico 

    p.mb-4(data-aos="fade") Lo integra la sumatoria de los atractivos turísticos, los servicios de la planta turística y la accesibilidad dentro de un destino, que integrados logran satisfacer las necesidades y motivaciones del turista. Los elementos que conforman el producto turístico se resumen en:  

    .row(data-aos="fade-down")
      .col-lg-4
        .nav-holder2
          img(src="@/assets/curso/tema1-4-imagen1.jpg", alt="Atractivos turísticos")
          .text
            p.text-center.mb-3.h4 
              strong Atractivos turísticos
            p.text-center Son todos aquellos elementos naturales, bienes creados por la mano del hombre y hechos sociales que crean el interés de ser conocidos y permiten su disfrute.
      .col-lg-4
        .nav-holder2(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema1-4-imagen2.jpg", alt="Servicios o planta turísticos")
          .text
            p.text-center.mb-3.h4 
              strong Servicios o planta turísticos
            p.text-center Son el conjunto de medios y actividades que facilitan la estancia y el bienestar del viajero, convergiendo en ellos elementos tangibles e intangibles, los cuales son, en su etapa final de consumo, interdependientes (Instituto Distrital de Turismo y Asociación Colombiana de Agencias de Viajes y Turismo ANATO, 2007). 
      .col-lg-4
        .nav-holder2
          img(src="@/assets/curso/tema1-4-imagen3.jpg", alt="Accesibilidad")
          .text
            p.text-center.mb-3.h4 
              strong Accesibilidad
            p.text-center La accesibilidad en el diseño de producto hace relación solamente a las vías de comunicación que se disponen para acceder al destino y a cada uno de los lugares de interés.


    Separador


    // 1.5
    #t_1_5.titulo-segundo(data-aos="fade-right")
      .h2 1.5. Cadena de valor

    p.mb-5(data-aos="fade") Una cadena en su forma literal es una serie de eslabones que crean una estructura más grande y fuerte. Cuando este concepto se aplica al sector turístico se expresa de forma clara en el siguiente postulado, publicado en el blog Turismo y sostenibilidad:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-naranja2
          .bloque-texto-b__texto
            .row
              .col-lg-1.comilla-inicial
                i.fas.fa-quote-left
              .col-lg-10.p-4
                p.mb-0 La cadena de valor del turismo es una forma de organización del sector turístico que integra a los proveedores de todos los productos y servicios que forman parte de la experiencia del turista, desde la planificación de su viaje, la permanencia en el destino turístico, hasta el regreso a su lugar de residencia” (Martín, 2013).
              .col-lg-1.comilla-final
                i.fas.fa-quote-right  

    
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0
        strong Figura 1.  
        | Cadena de valor del turismo
    h4.text-center Cadena de valor del turismo

    figure.mb-5
      img(src='@/assets/curso/tema1-5-figura1.svg', alt='Cadena de valor del turismo')

</template>

<script>
import PestanasA from '../components/PestanasA'
export default {
  name: 'Tema1',
  components: {
    PestanasA,
  },
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass" scoped>
.nav-holder
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFD494
  opacity: 1
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 16px

.nav-holder:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 70%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder .h4
  margin: 0
  opacity: 1

.nav-holder:hover
  .text
    top: 0%
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
  h4, p
    opacity: 1;
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s


.nav-holder2
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFB74D
  opacity: 0.8
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease


.nav-holder2:before
  -webkit-transform: translateY(85%)
  -moz-transform: translateY(85%)
  transform: translateY(85%)

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.9
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-top-left-radius: 14px
  border-top-right-radius: 14px

.nav-holder2
  .text
    position: absolute
    top: 83%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
    color: #FFF
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder2 .h4
  margin: 0
  opacity: 1
  color: #FFF

.nav-holder2:hover
  .text
    top: 5%
  h4, p
    color: #12263F
    opacity: 1
</style>
