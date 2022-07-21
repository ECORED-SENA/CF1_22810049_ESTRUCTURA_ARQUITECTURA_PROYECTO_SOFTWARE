<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Introducción a la educción de requisitos

    .bg_img_02
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
      .row.justify-content-center.top--negMargin(data-aos="fade").mb-5
        .col-10
          .crd.bg--gray.shadow.brd--rad_01.p-4
            p.mb-0 #[span.txt--blue.strong Maida y Pacienzia (2015)] plantean que la educción de requisitos también conocida como elicitation, consiste en hallar e identificar los requisitos que deben satisfacer una aplicación o software, en palabras sencillas es el modo en que se deben obtener estos requisitos. Es una actividad inherente a la ingeniería de software y forma parte de las metodologías ágiles, como una antesala al análisis de requisitos. Algunos procesos para la identificación de requisitos son:         

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8(data-aos="zoom-in").d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t2/t2_02.png", alt="alt")
        .col-lg-8(data-aos="fade")
          SlyderF.cstmSlyderF(columnas="col-lg-6 col-xl-4")
            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_03.svg", alt="alt").img90.m-auto               
              p.text-center Definir la pregunta de investigación. 

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt").img90.m-auto               
              p.text-center Alcance de la revisión.  

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_05.svg", alt="alt").img90.m-auto               
              p.text-center Criterios de exclusión e inclusión.   

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt").img90.m-auto               
              p.text-center Conducta de búsqueda.  

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_07.svg", alt="alt").img90.m-auto               
              p.text-center Selección de trabajos primarios.  

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_08.svg", alt="alt").img90.m-auto               
              p.text-center Definición de criterios de análisis.  

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_09.svg", alt="alt").img90.m-auto               
              p.text-center Esquema de caracterización.  

            .crd.bg--white.brd--rad_02.shadow.p-4
              figure.mb-4
                img(src="@/assets/curso/temas/t2/t2_10.svg", alt="alt").img90.m-auto               
              p.text-center Análisis de resultados. 

      .row.mb-3(data-aos="fade")
        .col-auto
          h5.cstmH5 La aplicación de las metodologías ágiles también tiene unas ventajas y desventajas:

      .crd.bg_slider_01.brd--rad_02.p-4(data-aos="zoom-in")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.pt-5
            .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="01")
                h4 Entrevista
                p El objetivo de realizar una entrevista es comprender las expectativas del cliente con respecto a la solución de software. Es imposible entrevistar a todas los stakeholders, por lo que los representantes de los grupos se seleccionan en función de su experiencia y credibilidad; las entrevistas pueden ser abiertas o estructuradas.         
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/t2/t2_11.svg', alt='').img350.m-auto

          .row.justify-content-around.align-items-center.pt-5                
            .col-lg-4.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/t2_12.svg', alt='').img350.m-auto
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="02")
                h4 Sesiones de lluvias de ideas
                p Es una técnica grupal, su objetivo es generar muchas ideas nuevas y compartir puntos de vista diferentes.

          .row.justify-content-center.align-items-center.pt-5
            .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="03")
                h4 Técnica de especificación de aplicación facilitada (FAST)
                p Su fin es cerrar la brecha de expectativas, la diferencia entre lo que los desarrolladores creen que deben construir y lo que los clientes creen que obtendrán.          
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/t2/t2_13.svg', alt='').img350.m-auto

          .row.justify-content-around.align-items-center.pt-5                
            .col-lg-4.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/t2_14.svg', alt='').img350.m-auto
            .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-2.ps-5.ps-lg-0.position-relative
              .cont
                .numb(data-number="04")
                h4 Despliegue de la función de calidad (QFD)
                p Esta técnica mide la satisfacción del cliente, lo cual es la principal preocupación, por lo tanto, enfatiza los requisitos que son valiosos para el cliente.  Se identifican tres tipos de requisitos que son: normales, esperados y emocionales.

          .row.justify-content-center.align-items-center.pt-5
            .col-lg-7.mb-4.mb-lg-0.ps-5.ps-lg-2.position-relative
              .cont
                .numb(data-number="05")
                h4 Enfoque de caso de uso
                p En esta técnica se combina texto e imágenes para proporcionar una mejor comprensión de los requisitos, los casos de uso describen el “qué” de un sistema y no el “cómo”; por lo tanto, solo dan una visión funcional del sistema. Los componentes del diseño de casos de uso incluyen tres cosas principales: actor, casos de uso y diagrama de casos de uso.       
            .col-lg-4.col-8
              figure
                img(src='@/assets/curso/temas/t2/t2_15.svg', alt='').img350.m-auto
 
             




</template>

<script>
export default {
  name: 'Tema2',
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
