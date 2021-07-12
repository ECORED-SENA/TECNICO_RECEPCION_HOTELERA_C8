<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
     
    figure.mb-5
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")

    p(data-aos="fade") En el ámbito social y económico, 
      strong.etiqueta el turismo se consolida como una actividad recreativa, placentera y relajante, que lleva a que las personas se desplacen de un lugar a otro conociendo nuevas costumbres, personas y espacios.
      | El turismo se puede llevar a cabo por motivos personales, profesionales o de negocios, y se espera recibir la adecuada atención en los espacios que se visita, así como la pertinencia de la información brindada por las personas que acompañan la estadía y visita a estos lugares. 

    p(data-aos="fade") En este componente formativo se abordarán los conceptos básicos del turismo (mayormente los emitidos por la Organización Mundial del Turismo - OMT), como punto de partida para entender un fenómeno de masas que dentro de la profesión hotelera se hace preponderante.

    p(data-aos="fade") Para la elaboración de este componente, se abordaron varios autores conocidos en el sistema turístico, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del servicio de recepción hotelera.


    
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
