<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg_img_01.pt-5
      .row.justify-content-center.mb-5
        .col-lg-4.col-8(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/intro/intro_01.png", alt="alt")
        .col-lg-8(data-aos="fade")
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 La teoría de la arquitectura de #[em software], se refiere a los fundamentos y componentes básicos para ejecutar procesos de computación, estos sirven para desarrollar las habilidades de los programadores al momento de construir una aplicación, permitiendo tener conceptos sobre patrones de desarrollo, abordando las teorías más importantes y utilizadas en la industria del desarrollo de <em>software</em>.
          .cajon.cjn--yellow
            p.strong En el siguiente video, se dan a conocer más detalles y generalidades relacionadas a la temática de arquitectura de #[em software]. 

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/plwzcGedFpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
          
              

        

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
