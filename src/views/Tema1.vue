<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conocimientos en metodologías de desarrollo de <em>software</em>     

    .bg_gray_left.pt-4.mb-5
      .row.justify-content-center
        .col-lg-8
          p(data-aos="fade") Las metodologías en el desarrollo de software son parámetros o modelo utilizados para estructurar, controlar y planificar el proceso de desarrollo de sistemas de información, estos sirven en cualquier ámbito y no importa el lenguaje de programación que se utilice, son de suma importancia, convirtiéndose en una hoja de ruta para llegar a la consolidación de un producto satisfactorio. 
          .row.mb-5(data-aos="fade")
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_02.svg", alt="alt").img115
            .col
              p.txt--blue.strong.mb-0 La metodología de desarrollo de software que más se conocen por su utilidad son las ágiles y tradicionales o clásicas:
          .row.justify-content-center
            .col-lg-6.col-8(data-aos="flip-left").mb-4.mb-lg-0
              .crd.crd_custom_01.shadow(data-number="01")
                figure.mb-3
                  img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt").img75
                p.mb-0 Metodologías tradicionales o clásicas 
            .col-lg-6.col-8(data-aos="flip-left")
              .crd.crd_custom_01.shadow(data-number="02")
                figure.mb-3
                  img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt").img75
                p.mb-0 Metodologías agiles 

        .col-lg-4(data-aos="zoom-in").d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t1/t1_01.png", alt="alt")

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Metodologías tradicionales o clásicas 

    p(data-aos="fade").mb-5 También conocidas como modelos de proceso descriptivo, fueron creadas con el fin de mitigar el desorden del desarrollo de software, que existía cuando se empezó a producir de manera masiva en la década de los 60, según Maida y Pacienzia (2015), constituyen un mapa razonablemente eficaz para los desarrolladores, aquí se pueden encontrar algunas de estas metodologías:

    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="zoom-in").d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt")
      .col-lg-7(data-aos="fade")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Modelo cascada")
            .col-12
              p También se lo conoce como ciclo de vida o secuencial, este enfoque ordena los procesos de desarrollo por etapas: análisis, diseño, codificación,  pruebas y mantenimiento.opionion.  
              figure
                img(src="@/assets/curso/temas/t1/t1_05.svg", alt="alt").img180.m-auto     
                figcaption.mt-3 SENA (2022). Fases de la metodología Cascada o Ciclo de Vida.

          .row(numero="2" titulo="Modelo incremental")
            .col-12
              p.mb-0 Aquí el producto se diseña, implementa y prueba de forma incremental hasta la entrega del software. 

          .row(numero="3" titulo="Modelo evolutivo")
            .col-12
              p.mb-0 Aquí se desarrolla un software beta el cual se va mejorando según los comentarios o requerimientos por parte de los stakeholders. 

          .row(numero="4" titulo="Modelo de desarrollo basado en componentes")
            .col-12
              p.mb-0 En este modelo se desarrollan componentes abiertos y distribuidos de forma aislada, estos pueden ser reutilizables y al final se los une para conformar un producto final.

    .row.mb-4(data-aos="fade")
      .col-auto
        h4.cstmH4 Dentro de las ventajas y desventajas al utilizar metodologías tradicionales en el desarrollo de software están:

    .bg_img_02.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="flip-left").mb-4.mb-lg-0
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_06.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Ventajas
                ul.fa-ul
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Seguimiento detallado en cada una de las fases.              
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Son de fácil uso ya que siguen pasos necesarios al momento de desarrollar la aplicación.              
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Son muy usadas en proyectos de innovación.               
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Evalúan cada fase del proyecto obteniendo cambios con objetividad.             
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Determinan etapas claramente definiendo los roles.
        .col-lg-6(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Desventajas
                ul.fa-ul
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Presenta complejidad en la evaluación de riesgo.            
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Altos costos para implantar cambios.              
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Incomodidad para el cliente, ya que debe ser capaz de describir muchos detalles para realizar el proyecto.          
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Es muy flexible para algunos proyectos.

      .row.justify-content-center.mb-4
        .col-lg-8.mb-4.mb-lg-0
          .row.mb-3(data-aos="fade")
            .col-auto
              h3.cstmH3 Metodologías ágiles 
            p(data-aos="fade") Estas metodologías permiten adaptar la forma de trabajo a las condiciones de un proyecto, dando un enfoque para la toma de decisiones ágil y flexible, basándose en el desarrollo iterativo e incremental, lo cual se verá reflejado en el producto final. 
            .row(data-aos="fade")
              .col-auto.d-none.d-lg-flex
                figure
                  img(src="@/assets/curso/recursos/square_03.svg", alt="alt").img65
              .col
                p.strong.mb-0 Este tipo de metodologías ágiles se centra más en el software que en la documentación exhaustiva. De acuerdo con Maida y Pacienzia, (2015), la alta competitividad actual hace que los sistemas de información se tengan que desarrollar de forma rápida para adaptarse a la organización.
        .col-lg-4.col-8
          figure
            img(src="@/assets/curso/temas/t1/t1_08.png", alt="alt")

      .row.mb-4(data-aos="fade")
        .col-auto
          h4.cstmH4 Estas metodologías se renuevan constantemente, aquí se muestran las más utilizadas: 

      TabsC.color-primario(data-aos="fade")
        .py-3.py-md-4(titulo="SCRUM")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 SCRUM
              p Es utilizada por toda clase de empresas debido a su capacidad para proporcionar colaboración de alto nivel y eficiencia para el proyecto de software.  Scrum consta de dos métodos diferentes y se pueden usar por separado; sin embargo, sus beneficios combinados hacen que esta metodología sea de las más populares. Scrum significa incremental, lo cual permite que los equipos desarrollen proyectos por separado; a esta división de los proyectos en partes considerables se les conoce como “sprints” o proyectos rápidos. Implementa el método científico   del empirismo y reemplaza un enfoque algorítmico programado por uno heurístico.          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/t1/t1_09.svg', alt='')
                figcaption.mt-2 Nota. Lorbada (2017).

        .py-3.py-md-4(titulo="eXtreme")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 eXtreme
              p También conocido como eXtreme Programming (XP), su objetivo es producir software de mayor calidad y mejorar la dinámica para el equipo de desarrollo, XP es la más específica de las metodologías ágiles con respecto a las prácticas de ingeniería.         
            .col-md-6
              figure.mb-3
                img(src='@/assets/curso/temas/t1/t1_10.svg', alt='')
                figcaption.mt-2 Nota. Lorbada (2017).
              .row
                .col-auto
                  a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
                    span Ampliar #[i.ms-2.fas.fa-search-plus]
                    .indicador--click(v-if="mostrarIndicador")

              ModalA(:abrir-modal.sync="modal1")
                .row.align-items-center               
                  .col-12
                    figure
                      img(src='@/assets/curso/temas/t1/t1_10.svg')
                      figcaption.mt-3 Nota. Lorbada (2017).
              
          
        .py-3.py-md-4(titulo="Kanban")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Kanban
              p Esta metodología es muy popular al momento de implementarla en el desarrollo de software ágil y de DevOps. Requiere una comunicación en tiempo real, y una total transparencia de trabajo. Los elementos de trabajo se representan visualmente en un tablero de Kanban, lo que permite al equipo ver el estado de cada proceso en cualquier momento, logrando resultados más flexibles, rápidos, un enfoque más claro y transparencia a lo largo del ciclo de desarrollo.        
            .col-md-6
              figure.mb-3
                img(src='@/assets/curso/temas/t1/t1_11.svg', alt='')
                figcaption.mt-2 Nota. Lorbada (2017).

        .py-3.py-md-4(titulo="Lean Startup")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Kanban
              p Este enfoque tiene sus raíces en el movimiento Lean manufacturing de la década de 1980. Sin embargo, ahora se considera una parte integral de la metodología de desarrollo de software agile, que está basada en siete principios:      
              ul.fa-ul
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Evitar pérdida de tiempo en el desarrollo. 
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Construcción de calidad.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Amplifica el aprendizaje.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Retrasar compromisos innecesarios. 
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Entregas rápidas.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Respeto a personas.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange
                  | Optimizar el proyecto.
            .col-md-6
              figure.mb-3
                img(src='@/assets/curso/temas/t1/t1_12.svg', alt='').img350.m-auto
                figcaption.mt-2 Nota. Master marketing. (2020).

        .py-3.py-md-4(titulo="DevOPs")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 DevOPs
              p Es un enfoque de desarrollo de software por medio del cual se puede desarrollar aplicaciones de alta calidad, de manera rápida y con mayor confiabilidad. Consta de varias etapas, desarrollo continuo, integración continua, pruebas continuas, implementación continua y monitoreo continuo.        
            .col-md-6
              figure.mb-3
                img(src='@/assets/curso/temas/t1/t1_13.svg', alt='')
                figcaption.mt-2 Nota. Tenea. (2021). DevOps: Qué es y cómo beneficia a tu empresa.

        .py-3.py-md-4(titulo="Design Thinking ")
          .row
            .col-md-12.mb-4
              h4 Design Thinking 
              p Ayuda a los desarrolladores de software a diseñar productos que tienen más probabilidades de acoplarse con el usuario, para crear productos que satisfagan sus necesidades y requisitos más fácilmente. Los desarrolladores de software deben pensar con empatía y comprender mejor al usuario final para hacer lograr un producto óptimo. Este enfoque Design Thinking, se desarrolla en cinco pasos: empatía, definición, ideación, prototipos y prueba.        
            .row.justify-content-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_14.svg", alt="alt").img145.m-auto
                p.text-center Empatía
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_15.svg", alt="alt").img145.m-auto
                p.text-center Definir
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_16.svg", alt="alt").img145.m-auto
                p.text-center Idear
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_17.svg", alt="alt").img145.m-auto
                p.text-center Prototipar
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_18.svg", alt="alt").img145.m-auto
                p.text-center Probar

    p.strong(data-aos="fade").mb-5 Algunas funciones claves que caracterizan a estas metodologías son:

    .row.justify-content-center(data-aos="fade")
      .col-lg-7
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/t1_19.svg', alt='')          

          .crd.bg--white.brd--rad_01.shadow(x="22%" y="15%" numero="+")
            .bg--mint.shadow.brd--top.p-3
              h5.text-center.mb-0 Design Thinking
            .p-4
              p.mb-0 Ayuda a los desarrolladores a diseñar mejor su trabajo e integrar elementos centrados en el usuario, durante todas las etapas de desarrollo.

          .crd.bg--white.brd--rad_01.shadow(x="2%" y="47%" numero="+")
            .bg--mint.shadow.brd--top.p-3
              h5.text-center.mb-0 DevOPs
            .p-4
              p.mb-0 Permite conseguir mejores resultados a corto plazo, sin dejar a un lado la  calidad y la funcionalidad del producto.

          .crd.bg--white.brd--rad_01.shadow(x="22%" y="86%" numero="+")
            .bg--mint.shadow.brd--top.p-3
              h5.text-center.mb-0 Lean Startup
            .p-4
              p.mb-0 Permite conseguir mejores resultados a corto plazo, sin dejar a un lado la  calidad y la funcionalidad del producto.  

          .crd.bg--white.brd--rad_01.shadow(x="79%" y="15%" numero="+")
            .bg--mint.shadow.brd--top.p-3
              h5.text-center.mb-0 SCRUM
            .p-4
              p.mb-0 Disminuye la imprevisibilidad y resuelve problemas complejos.

          .crd.bg--white.brd--rad_01.shadow(x="100%" y="47%" numero="+")
            .bg--mint.shadow.brd--top.p-3
              h5.text-center.mb-0 eXtreme
            .p-4
              p.mb-0 Se enfatiza más   en la adaptabilidad que en la previsibilidad.

          .crd.bg--white.brd--rad_01.shadow(x="80%" y="86%" numero="+")
            .bg--mint.shadow.brd--top.p-3
              h5.text-center.mb-0 Kanban
            .p-4
              p.mb-0 Requiere una comunicación en tiempo real, y una total transparencia de trabajo.

    .bg_img_03
      .row.mb-5(data-aos="fade")
        .col-auto
          h5.cstmH5 La aplicación de las metodologías ágiles también tiene unas ventajas y desventajas:
    
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="flip-left").mb-4.mb-lg-0
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_20.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Ventajas
                ul.fa-ul
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Soluciones inmediatas durante el proceso.         
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Simplificación en la sobrecarga de procesos.         
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Calidad optimizada.         
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Mejora la previsibilidad a través de una mejor gestión de riesgos.        
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Acompañamiento del cliente y mejor interacción.          
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | La entrega del producto y retroalimentación es más rápida.          
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Se optimizan recursos y resultados.        
        .col-lg-6(data-aos="flip-left")
          .crd.crd--avatarH
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_21.svg", alt="alt").img115
              .col
                h5.text-white.pt-2 Desventajas
                ul.fa-ul
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Dificultad en determinar con precisión la cantidad de recursos debido a sus constantes cambios.      
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | El equipo necesita tener habilidades sólidas.      
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange
                    | Hay que estar muy pendiente de la documentación que se genere.     

      .row.justify-content-center(data-aos="zoom-in")
        .col-10
          .row.justify-content-center.align-items-center.mb-5
            .col-auto 
              figure
                img(src="@/assets/curso/temas/t1/t1_22.png", alt="alt").img145
            .col
              p Para ampliar los conocimientos en este tema consultar en el material complementario el artículo sobre #[strong “Metodologías actuales de desarrollo de #[em software]”].
    
           

              
                                                           
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
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
