<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Brindar información asertivamente

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.jpg", alt="Brindar información asertivamente")  

    p.mb-4(data-aos="fade") La comunicación asertiva facilita el flujo de información entre las partes de manera clara, precisa y concisa. (Servicio Nacional de Aprendizaje - SENA, 2021). Recuerde que, en su papel de comunicador, quien guía tendrá unos pocos segundos para crear empatía con la persona que le pregunta, por lo que conocer las bases de la comunicación asertiva le ayudará en el proceso de ser eficiente en su forma de transmitir información.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo4_CF08_Comunicacion_asertiva_con_turistas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo. 
              |  Este PDF nos presenta cómo realizar una comunicación asertiva con los turistas.

    .row
      .col-lg-7.mb-4(data-aos="fade-right")
        p Para finalizar, y luego de consultar el documento anexo, siempre tenga en mente que la información que se proporciona a un turista debe ser garantía de verdad. Por tanto, como parte de las rutinas de trabajo, mantenga la información turística actualizada. Los clientes, respecto de atractivos turísticos, siempre indagarán por temas como:
        ul.lista-ul--color.px-lg-5.px-2
          li 
            i.fas.fa-atom
            | Ubicación.
          li 
            i.fas.fa-atom
            | Horarios.
          li 
            i.fas.fa-atom
            | Tarifas.   
        p También serán cuestionamientos recurrentes la mejor forma de llegar a un sitio determinado y en general:
        ul.lista-ul--color.px-lg-5.px-2
          li 
            i.fas.fa-atom
            | Recomendaciones para la visita.
          li 
            i.fas.fa-atom
            | Recomendaciones de seguridad.
      .col-lg-5(data-aos="fade-left")              
        figure
          img(src="@/assets/curso/tema5-image.jpg", alt="Imagen decorativa")

        


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
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
