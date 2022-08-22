<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Definición de requerimientos

    .bloque-texto-a.bt_cstm_01.p-4.p-md-5(data-aos="zoom-in").mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t5/t5_01.svg", alt="alt")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 #[span.txt--blue.strong Según Sommeville (2005)], requerimiento son las necesidades que provienen del negocio de parte de los usuarios y #[em stakeholders]. Un requisito son las especificaciones puntuales sobre el sistema o #[em software], que dan una solución específica a las necesidades o carencias del negocio. #[span.strong Los dos tipos de requerimientos son:] 
    
    .bg_img_02.mb-5
      .row.mb-3(data-aos="fade")
        .col-auto
          h3.cstmH3 Requerimientos funcionales (RF)

      p.mb-5(data-aos="fade") Describen la actividad que la aplicación debe realizar, como el comportamiento o funciones particulares. Son las características que tendrá la solución de #[em software] que pueden dividirse en dos partes:

      .row.justify-content-center.mb-5
        .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t5/t5_02.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Requerimientos funcionales del sistema
                p.text-white.mb-0 Establece los detalles del servicio y restricciones de la aplicación.
        .col-lg-6(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t5/t5_03.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Requerimientos funcionales del usuario
                p.text-white.mb-0 Son los servicios o funciones que la aplicación debe hacer y que interactúan directamente con el usuario; como son las  interfaces, diseños menú, imágenes, entre otras.

      .row.justify-content-around
        .col-lg-5(data-aos="fade")
          h4.mb-5 Algunos ejemplos de Requisitos Funcionales (RF) son:
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[strong Describe los datos a ser ingresados en el sistema.]
          .hr_line
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[strong Describe las operaciones que se realizarán por cada pantalla.]
          .hr_line
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[strong Describen los flujos de trabajo realizados por el sistema.]
          .hr_line
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[strong Descripción de los reportes del sistema y otras salidas.]
          .hr_line
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | #[strong Define quién puede ingresar datos en el sistema.]
          

        .col-lg-6(data-aos="flip-left")
          figure
            img(src="@/assets/curso/temas/t5/t5_04.png", alt="alt")     

    
    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Requerimientos no funcionales (RNF)   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8 
        p.mb-4(data-aos="fade") Son los encargados de que la solución de #[em software] cumpla con su fin o dé cumplimiento al objetivo de la aplicación o solución de informática. También se les conoce como restricciones o requisitos de calidad; estos requerimientos no pueden ser vistos ni tocados por el usuario, están inmersos en las funciones de la programación y se dividen en tres partes:
        .row.justify-content-center
          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray_02.brd--rad_01.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t5/t5_06.svg", alt="alt").img75.m-auto
              h5.text-center Requisitos de producto
              p.text-center.mb-0 Especifican el comportamiento de la aplicación.

          .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="flip-left")
            .crd.bg--gray_02.brd--rad_01.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t5/t5_07.svg", alt="alt").img75.m-auto
              h5.text-center Requisitos de organización
              p.text-center.mb-0 Se producen a partir de las políticas y procedimientos de la organización.

          .col-lg-4.col-10(data-aos="flip-left")
            .crd.bg--gray_02.brd--rad_01.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t5/t5_08.svg", alt="alt").img75.m-auto
              h5.text-center Requisitos externos
              p.text-center.mb-0 Se derivan de los factores externos del sistema.

      .col-lg-4(data-aos="fade").d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t5/t5_05.png", alt="alt")

    .row.justify-content-center.align-items-center
      .col-lg-4(data-aos="flip-left").d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t5/t5_09.svg", alt="alt")
          
      .col-lg-7(data-aos="fade")
        h5 Algunos ejemplos de Requisitos no funcionales (RNF) son:
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Cualidades en los tiempos de ejecución, usabilidad y la seguridad.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El sistema debe ser capaz de procesar N transacciones por segundo.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | El sistema será capaz de trabajar hasta con un millón de usuarios.
          .hr_line
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Cualidades relacionadas con la evolución del sistema, como, comprobación, extensibilidad, escalabilidad y mantenibilidad, las cuales están inmersas en la estructura del sistema de #[em software].
          .hr_line
      



            

    

</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass"></style>
