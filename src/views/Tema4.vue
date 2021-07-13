<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Ubicación espacial

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.jpg", alt="Ubicación espacial")  


    .row
      .col-lg-7(data-aos="fade-right")
        p La ubicación hace referencia al lugar físico que cada persona ocupa. La orientación espacial es la habilidad natural de los seres vivos que les permite saber y determinar la posición del propio cuerpo en relación con el espacio. En síntesis, la ubicación espacial es el lugar físico que ocupamos en un momento dado en relación con el espacio.
        .cajon.color-naranjaa.p-4.mb-4
          p La orientación es una habilidad necesaria para poder desarrollar la actividad turística. El saber dónde estoy y hacia dónde me dirijo o deseo dirigirme es la primera condición que debe cumplirse para realizar un desplazamiento.
        p La utilización de nuevas tecnologías (teléfonos inteligentes y sistemas de posicionamiento global - GPS) hace cada vez más fácil determinar la ubicación espacial sin la utilización de mapas. 
        p El GPS ayuda a los viajeros a saber dónde se encuentran, para luego determinar a dónde se dirigen. Sin embargo, es necesario saber ubicarse espacialmente para no depender de tecnologías externas y desubicarse en sitios donde estas no estén disponibles. Para este fin se darán a conocer varios métodos para lograrlo.  
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4-imagen.jpg", alt="Imagen decorativa") 

    Separador


    // 4.1
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h2 4.1.  Puntos cardinales

    p.mb-4(data-aos="fade") Los puntos cardinales son los cuatro sentidos que definen el sistema de representación cartesiano para ubicarse en un mapa o en la superficie terrestre. Para que haya una comprensión del sentido de la orientación, es de vital importancia entender la perspectiva que se tendrá del entorno desde cualquier parte en la que uno se ubique sobre la superficie de la Tierra y desde donde se podrán comprender las diferentes direcciones: oriente, occidente, norte y sur. Esta comprensión del horizonte es elemental para la determinación de la posición geográfica. A continuación, se repasan brevemente estos puntos (Cobo, 2013):

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-7
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4-1.svg', alt='Puntos cardinales')

          .tarjeta.color-naranja3.p-3(x="49.6%" y="4.6%")
            p 
              strong Norte: 
              | proviene del vocablo norð, del inglés antiguo, y este deriva del protoindoeuropeo ner, que significa “izquierda”, puesto que el norte está a la izquierda cuando uno enfrenta el Sol por la mañana. El uso del norte como referente geográfico es un costumbrismo histórico que surgió por la necesidad en la navegación y la cartografía temprana.
          .tarjeta.color-naranja3.p-3(x="95%" y="50%")
            p 
              strong Este - Oriente: 
              | al mencionar la expresión “orientación”, posición de un punto, lugar, objeto o persona sobre la superficie terrestre respecto a un sistema de referencia. El término orientación procede del vocablo “oriente” (oriens-entis, participio activo del verbo latino oriri), que significa ‘aparecer’ y que designaba el lugar por el que aparecía el Sol, por contraposición a occidente.
          .tarjeta.color-naranja3.p-3(x="49.5%" y="95%")
            p
              strong Sur: 
              | debe su origen al indio “Surya”, que significa Sol, debido a que este astro es el que domina este punto cardinal cuando se lo observa al norte del Trópico de Cáncer. El sur o meridión (también llamado sud o incluso austral) es uno de los cuatro puntos cardinales colocados sobre el horizonte, ubicado diametralmente opuesto al norte. 
          .tarjeta.color-naranja3.p-3(x="4%" y="49.5%")
            p
              strong Occidente: 
              | Opuesto al oriente, del verbo latino occidere, ‘caer’, que denominaba el lugar por el que se ocultaba el Sol. De “occidente” obtenemos palabras como ocaso, occiso, occiduo

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo3_CF08_Orientacion_Geografica.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo. 
              |   Este PDF nos presenta un artículo muy interesante sobre la orientación geográfica.

    Separador


    // 4.2
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h2 4.2. Técnicas de ubicación y orientación

    p.mb-4(data-aos="fade") Existen varios métodos en que es posible orientarse. El primero de ellos empieza con la información que brindan los puntos cardinales:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Orientación con el oriente")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-2-imagen1.jpg', alt='Orientación con el oriente')
          .col-md-1
          .col-md-5
            h5 Orientación con el oriente
            p Si queremos orientarnos correctamente, debemos dirigirnos hacia el oriente. La indicación a seguir es “por donde aparece el Sol”. Este es el referente o la dirección geográfica integral. Una vez localicemos donde está el oriente, podemos extender y dirigir nuestro brazo derecho hacia ese punto. Al hacer esto, estaremos mirando hacia el norte, que es el punto con el cual se construyen los mapas.
   
      .py-3.py-md-4(titulo="Orientación con la sombra de un palo")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-2-imagen2.jpg', alt='Orientación con la sombra de un palo')
          .col-md-1
          .col-md-5
            h5 Orientación con la sombra de un palo
            p Este método solo funciona cuando hay sol. Clavamos en un terreno abierto y llano un palo que proyecte una sombra de unos 30 o 40 cm. Luego de esto marcamos el extremo de la sombra. A continuación, con un cordón de un zapato, una rama u otro método improvisado, trazaremos una semicircunferencia usando como radio la longitud de la sombra. Ahora debemos esperar el movimiento del Sol. La sombra se irá reduciendo a medida que nos acercamos a las 12:00 del día. Momento en que alcanzará su menor tamaño para después volver a crecer. En el punto en el que la sombra vuelva a alcanzar la semicircunferencia pondremos una marca. Al unir las dos marcas trazaremos una línea 
              strong occidente 
              | (primera marca) – 
              strong oriente 
              | (segunda marca). En la perpendicular se encontrarán el norte y el sur. Obviamente no es un método rápido.
        
      .py-3.py-md-4(titulo="Orientarse con las estrellas (hemisferio norte)")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-2-imagen3.jpg', alt='Orientarse con las estrellas (hemisferio norte)')
          .col-md-1
          .col-md-5
            h5 Orientarse con las estrellas (hemisferio norte)
            p En el hemisferio norte del planeta, la estrella polar indica siempre el norte. Esta estrella es la última de la cola de la Osa Menor y, a pesar de que en casi todas las ilustraciones se muestra como una estrella muy brillante, su luz es tan pálida que con frecuencia no es fácil de ver. No obstante, es fácil guiarse por la Osa Mayor para localizar el punto donde se encuentra la estrella polar. Para ello sólo tenemos que prolongar cuatro veces la distancia que separa las dos estrellas frontales de la Osa Mayor. 

      .py-3.py-md-4(titulo="Orientarse con las estrellas (hemisferio sur)")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-2-imagen4.jpg', alt='Orientarse con las estrellas (hemisferio sur)')
          .col-md-1
          .col-md-5
            h5 Orientarse con las estrellas (hemisferio sur)
            p En el hemisferio sur debemos buscar la “Cruz del Sur”, una constelación con forma de rombo o cometa. Si prolongamos la longitud de la cometa cuatro veces y media, el punto imaginario que localicemos indicará siempre el sur.
            
    p.mb-4(data-aos="fade") Estas son algunas de las formas que la naturaleza brinda para orientarse. De otro lado, están las herramientas inventadas por el hombre, dentro de las que es posible mencionar:

    .row(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar3
          img(src='@/assets/curso/tema4-2-ico1.svg' alt='Brújula')
          .tarjeta.color-naranja3
            .p-4
              h4.text-center Brújula
              p.text-center Existen aplicativos web que funcionan desde teléfonos inteligentes.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar3
          img(src='@/assets/curso/tema4-2-ico2.svg' alt='Mapa')
          .tarjeta.color-naranja3
            .p-4
              h4.text-center Mapa
              p.text-center  Contamos con versiones digitales, como Google Maps.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar3
          img(src='@/assets/curso/tema4-2-ico3.svg' alt='GPS')
          .tarjeta.color-naranja3
            .p-4
              h4.text-center GPS
              p.text-center Son plataformas globales de posicionamiento, de origen militar, que funcionan sobre la red mundial de satélites.

    Separador


    // 4.3
    #t_4_3.titulo-segundo(data-aos="fade-right")
      .h2 4.3. Puntos de referenciación en el destino

    p.mb-4(data-aos="fade") Los puntos de referencia también son un método válido para ubicarse. Para ilustrar esta forma de orientación, será necesario remitirse imaginariamente a París (Francia). En esta ciudad existen muchos puntos de referencia, como edificios y monumentos. Pero quizás los más relevantes y famosos y que es común escuchar mencionar son:

    .row.justify-content-center
      .col-lg-5.align-items-center(data-aos="fade-right")
        .nav-holder2.align-items-center
          img(src="@/assets/curso/tema4-3-img1.jpg", alt="La Torre Eiffel")
          .text.p-lg-3.p-4
            .row.px-lg-4.mb-4.mb-lg-2
              h4.text-center.mb-3 La Torre Eiffel
              p.text-center Este famoso monumento se levanta 300 metros sobre el suelo, lo que la hace fácilmente visible desde casi cualquier punto de la ciudad, de día o de noche.
              
      .col-lg-5.align-items-center(data-aos="fade-left")
        .nav-holder2.align-items-center(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema4-3-img2.jpg", alt="Rio Sena")
          .text.p-lg-3.p-4
            .row.align-items-center.px-lg-4.mb-3.mb-lg-4
              h4.text-center.mb-3 Rio Sena
              p.text-center Este importante afluente atraviesa París de sur a norte, por lo que también es un buen referente para ubicarse en la ciudad luz.
              
    Separador


    // 4.4
    #t_4_4.titulo-segundo(data-aos="fade-right")
      .h2 4.4. Mapas turísticos      

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        img(src='@/assets/curso/tema4-4.jpg' alt='Mapas turísticos')

    p(data-aos="fade") Los mapas turísticos son mapas impresos que tienen resaltados en sus convenciones los sitios de interés y los puntos de referencia de un destino turístico. Por lo general, se consiguen de forma gratuita en hoteles y puntos de información turística.
    p(data-aos="fade") Por lo general, tienen una temática, es decir, pueden mostrar por ejemplo los museos de una ciudad, o los mejores restaurantes. También los hay generales, que muestran todo.
    p(data-aos="fade") Los mapas, aunque aún están vigentes, cada vez más son reemplazados por aplicaciones de ubicación de uso en teléfonos móviles.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
.nav-holder2
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)
  border-radius: 15px

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 15px

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFB74D
  opacity: 0.9
  z-index: 888
  border-radius: 15px
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)
  border-radius: 15px

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.9
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-radius: 15px

.nav-holder2
  .text
    position: absolute
    top: 100%
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
  p, h4, i, li, ul
    margin: 0
    opacity: 0

.nav-holder2:hover
  .text
    top: 0
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
  h4, p, i, li, ul
    z-index: 999
    opacity: 1
    -webkit-transition-delay: 0.2s
    transition-delay: 0.2s
</style>
