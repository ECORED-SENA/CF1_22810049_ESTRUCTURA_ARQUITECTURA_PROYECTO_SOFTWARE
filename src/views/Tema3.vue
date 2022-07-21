<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Establecer las necesidades del negocio    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade")
        p Esta parte del proceso (customer requirements), tiene como objetivo principal el conocimiento del negocio del cliente, los procesos de este y el dominio de su problemática, enfocando el esfuerzo, en obtener todas las nuevas necesidades y características requeridas que el cliente considere necesarias para que el producto o servicio sea mínimamente viable frente al usuario final. 
        .row(data-aos="fade")
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/recursos/square_04.svg", alt="alt").img30
          .col
            p.mb-0 #[span.txt--blue.strong Además, como resultado de esta etapa del proceso, es imperativo que se genere  para cada requerimiento identificado su respectiva documentación en un lenguaje entendible para los involucrados en el proceso de construcción, a fin de lograr un entendimiento universal entre clientes y desarrolladores;] siendo clave, encontrar un espacio compartido donde se almacenen las versiones finales aprobadas y pactadas por ambas partes; buscando que, no existan inconformidades entre lo solicitado por el cliente y lo construido en el software, permitiendo además, que todos dentro del equipo de desarrollo puedan acceder a ellas sin dificultad o restricción alguna (ver figura 3). 
      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.svg", alt="alt")

    
    .bg_img_02
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Versiones del producto final 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t3/t3_02.png", alt="alt") 
            figcaption.mt-3 Nota. Martínez (2013).  

      .bloque-texto-g.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t3/t3_03.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Aunque no es obligatorio cumplir rigurosamente con ciertas reglas o ítems, se han identificado algunas actividades que permiten de una manera incremental y efectiva capturar las necesidades del negocio, que se listan a continuación:   

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="zoom-in")
        .row.justify-content-center(titulo="Analizar el dominio del problema")
          .col-lg-9.mb-4.mb-lg-0
            p Comprender su negocio, tener clara las necesidades y poder proponer una solución efectiva. La primera etapa del proceso, busca obtener el conocimiento suficiente del universo del discurso con el cual, el equipo comprenderá el negocio y sus necesidades, con la intención de lograr una comunicación bidireccional eficaz con los usuarios e interesados finales que no tienen conocimiento técnico y así plantear una solución adecuada y a la medida de este.
            p Omitir esta actividad podría ocasionar que la solución final no sea lo que espera el cliente, afectando el esfuerzo y el tiempo invertido en la propuesta. Además, al momento de interactuar con los usuarios en reuniones sin el conocimiento del problema, disminuirá la confianza en la capacidad del equipo de desarrollo y por ende la imagen de la empresa en general.        
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_04.svg', alt='')

        .row.justify-content-center(titulo="Identificar aspectos positivos y negativos de la situación actual")
          .col-lg-9.mb-4.mb-lg-0
            p El objetivo de esta actividad es identificar qué aspectos actualmente funcionan adecuadamente y cuáles no del proceso o sistema (si se desea cambiar de sistema o se desea sistematizar algo que no existe aún), antes de iniciar a desarrollar el nuevo componente, esto buscando que se puedan conservar los aspectos positivos y enfocarse en dar solución a los negativos. 
            p Omitir esta actividad podría conducir al equipo de desarrollo a repetir errores que se presenten actualmente y a dejar de lado prácticas o procesos que funcionan muy bien y solo deben replicarse, generando rechazo y resistencia por parte del usuario final.        
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t3/t3_05.svg', alt='')

        .row.justify-content-center(titulo="Analizar el modelo de negocio del cliente")
          .col-lg-9.mb-4.mb-lg-0
            p En este caso la prioridad es comprender el funcionamiento y los procesos del negocio actualmente, sean estos manuales o automatizados, permitiendo comprender de manera holística el contexto en el cual se desenvuelve la solución a desarrollar.
            p Omitir este punto puede generar que la solución propuesta no se integre de manera correcta con lo que el negocio del cliente solicita, llevando a que esta sea poco usada por su complejidad en la solución o por no ser lo esperado.
    
          .col-lg-3.col-8
            figure
              img(src='@/assets/curso/temas/t3/t3_06.svg', alt='')

        .row.justify-content-center(titulo="Obtener y documentar las necesidades de clientes y usuarios")
          .col-lg-9.mb-4.mb-lg-0
            p El último punto y el más importante, consiste en obtener de manera clara, concisa y sintetizada las necesidades del cliente como objetivos del negocio, incluyendo los modelos de procesos; para luego ser trasladados a un documento base que explícitamente indique lo deseado por el cliente final.

            p Omitir esta actividad tan crítica, podría generar un producto final que no sea lo esperado por el cliente, puesto que, él inicialmente pidió una solución a un problema presente que no fue plasmado en un documento; el cual con el paso del tiempo, para el equipo de desarrollo se convirtió en otra solución tergiversada con respecto a la inicial, creando al final una solución incongruente con la idea primaria. Sumado a ello, esta idea transmutada presenta integración pobre o baja con el antiguo proceso o sistema por ser inconsistente con lo planteado inicialmente; lo cual, desencadena en una baja usabilidad del cliente por no ser lo esperado y una pérdida de tiempo y esfuerzo, dado que no es posible aplicar mejoras a dicho sistema que inició con errores.
    
          .col-lg-3.col-6
            figure
              img(src='@/assets/curso/temas/t3/t3_07.svg', alt='')

    p.strong(data-aos="fade").mb-5 Estas actividades generan un concepto claro en cuanto a: 

    .row.justify-content-center.mb-5
      .col-lg-3
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Precio
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Calidad
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Funcionalidad
        .hr_line(data-aos="fade")

      .col-lg-3
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Fiabilidad
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Rendimiento
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Sustentabilidad
        .hr_line(data-aos="fade")

      .col-lg-3
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Eficiencia
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Seguridad
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Compatibilidad
        .hr_line(data-aos="fade")

      .col-lg-3
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Diseño
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--orange02
            | Accesibilidad
        .hr_line(data-aos="fade")

    .tarjeta.bg_grad_Blue01.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t3/t3_08.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0            
              p.text-white.mb-0 Para determinar los requisitos del cliente, las empresas pueden investigar su mercado objetivo comprendiendo sus deseos y necesidades, también pueden adoptar un enfoque directo solicitando a sus clientes comentarios a través de encuestas, sondeos o redes sociales. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/infografia.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
        
        
            

    

</template>

<script>
export default {
  name: 'Tema3',
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
