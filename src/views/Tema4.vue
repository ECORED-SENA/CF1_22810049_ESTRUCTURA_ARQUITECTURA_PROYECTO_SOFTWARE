<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Identificar los <em>stakeholders</em>    

    .bg_img_02
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")
        .col-lg-8(data-aos="fade")
          .row.mb-4
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_05.svg", alt="alt").img30
            .col
              p.mb-0 Los #[em stakeholders] son las partes interesadas en el proyecto, hacen referencia a todas las personas que se relacionan con las actividades y decisiones de la empresa para la cual se hará la solución informática; estos generan un papel fundamental en la elicitacion, especificación y validación de requisitos del proyecto.
          .cajon.cjn--yellow
            p.strong Los  #[em stakeholders] pueden ser internos y externos,  y se debe evaluar qué función o relación tienen con el negocio. Sin su aporte, los desarrolladores están trabajando a partir de una lista incompleta de requisitos.

      .bloque-texto-g.cstm.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
        .bloque-texto-g__texto.p-4
          p.mb-0 Es probable que surjan necesidades sorpresa durante el desarrollo; estas adiciones repentinas provocan un aumento del alcance, donde el proyecto aumenta más allá de sus límites establecidos y los requisitos iniciales de tiempo y presupuesto se ven obligados a estirarse para cubrir los nuevos requisitos. Eso no siempre es posible, es mucho más probable que haya que eliminar algunas características para cumplir con los plazos.
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_04.jpg')})`}" 
        )

      p.strong(data-aos="fade") Para definir las partes interesadas (ver figura 4) se debe tener en cuenta los siguientes conceptos:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t4/t4_02.png", alt="alt")
        .col-lg-8(data-aos="fade")
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Quién sabe lo suficiente sobre ellos para asesorar al equipo de desarrollo.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Quién tiene autoridad para realizar cambios en el plan de desarrollo una vez finalizado.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Hay alguna persona cuyo apoyo sea absolutamente vital para el éxito del proyecto.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | De quién es necesaria la participación.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Quién usará o se verá afectado por el producto final.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Quién usa la herramienta actual o el #[em software] que reemplazará el nuevo #[em software].
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Qué departamentos utilizan los productos del #[em software] actual y propuesto.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Cómo cambiarán los flujos de trabajo.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Se modificarán o crearán puestos.
            li
              i.fa-li.fas.fa-check-circle.txt--orange02
              | Qué restricciones legales y normativas se aplican.   

    .row.justify-content-center
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-botones
          h5 Figura 4.
          span Identificación de los #[em stakeholders]    
        figure
          img(src="@/assets/curso/temas/t4/t4_03.svg", alt="alt") 
          figcaption.mt-3 Nota. SENA (2022). Identificación de las partes interesadas de un proyecto.    

    

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
