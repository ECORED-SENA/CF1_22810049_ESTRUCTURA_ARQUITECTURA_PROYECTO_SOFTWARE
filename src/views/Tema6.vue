<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Definir el tipo de arquitectura 

    .bg_img_02
      figure(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t6/t6_01.png", alt="alt")
      .row.justify-content-center.top--negMargin.mb-5(data-aos="zoom-in")
        .col-lg-10
          .crd.bg--gray.shadow.brd--rad_01.p-4
            p.mb-0 #[span.txt--blue.strong La arquitectura de #[em software] es también denominada arquitectura lógica.] #[strong De acuerdo a Garlan y Shaw (1994), la arquitectura de #[i software] se refiere a la estructuración de la aplicación que generalmente se aplica al inicio del desarrollo del #[i software].] Por lo general se adopta un patrón de arquitectura o “arquetipo” existente, sin necesidad de inventar una nueva arquitectura de #[em software], esto en función de sus ventajas e inconvenientes para cada proyecto. Las arquitecturas más utilizadas son:  

      .row.mb-3(data-aos="fade")
        .col-auto
          h3.cstmH3 Arquitectura de descomposición modular

      p.mb-5(data-aos="fade") También conocida como modularización, consiste en la descomposición de un sistema en módulos más simples, con el fin de resolverlos de manera fácil y sencilla como indica la imagen. Cada submódulo es una tarea completa la cual se programa de manera independiente, a esto se lo conoce como refinamiento por pasos:

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-botones(data-aos="fade")
            h5 Figura 5.
            span Modelo descomposición modular 

          figure.mb-5(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t6/t6_02.svg", alt="alt")
            figcaption.mt-3  Nota. Ittgweb (2016).

          .tabla-cst 
            table.cstm_table_01(data-aos="zoom-in")
              thead
                tr.text-center
                  th Ventajas
                  th Pasos que se deben realizar para la descomposici&oacute;n modular
                  th Cualidades de la descomposici&oacute;n modular
              tbody
                tr
                  td
                    ul.fa-ul.mb-0
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Claridad.
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Reducci&oacute;n de costos.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Reutilizaci&oacute;n               
                  td
                    ul.fa-ul.mb-0
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Identificar los m&oacute;dulos.
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Describir los m&oacute;dulos.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Describir la relaci&oacute;n entre los m&oacute;dulos.                 
                  td
                    ul.fa-ul.mb-0
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Independencia funcional.
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Acoplamiento.
                      li.mb-3
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Cohesi&oacute;n.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Comprensibilidad.                 

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Arquitectura cliente-servidor

    p(data-aos="fade") De acuerdo a #[span.txt--blue.strong Gar lan y Shaw (1994)], #[span.strong este tipo de arquitectura consiste en un diseño, en el cual las tareas se reparten entre los servidores  “proveedores de recursos o servicios”,  y los clientes  “cada uno de los usuarios”.]  Un cliente ejecuta peticiones a otro programa, el servidor y es el que da la respuesta, en este arquetipo la capacidad de proceso está repartida entre los clientes y los servidores. #[span.strong Algunos ejemplos que utilizan este modelo son: #[em World Wide Web], correo electrónico, servidor de impresión (ver figura 6).]

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-botones(data-aos="fade")
          h5 Figura 6.
          span Arquitectura cliente-servidor

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t6/t6_03.svg", alt="alt")
          figcaption.mt-3  Nota. SENA.  (2022). Representación gráfica de la arquitectura cliente-servidor. 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarH
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t6/t6_04.svg", alt="alt").img115
            .col
              h5.text-white.pt-2 Ventajas
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Facilita la integración entre distintos sistemas y comparte información.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Favorece las interfases gráficas con lo cual mejora la comunicación con los usuarios.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Estructura modular lo cual facilitando la escalabilidad y permiten la integración de la información. 

      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarH
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t6/t6_05.svg", alt="alt").img115
            .col
              h5.text-white.pt-2 Desventajas
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Mantenimiento complejo de los sistemas ya que implica la interacción de diferentes partes de #[em hardware] y de #[em software], distribuidas por distintos proveedores, entorpeciendo el diagnóstico de fallas.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Pocas herramientas para la administración y ajuste del desempeño de los sistemas.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | El desempeño o (#[em performance]), se presentan problemas por congestión en la red, dificultad de tráfico de datos.

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Arquitectura de tres niveles
    
    p.mb-5(data-aos="fade") También se la conoce como multinivel, es una arquitectura de #[em software] de aplicación correctamente establecida, que aísla las aplicaciones en tres niveles como se observa en el siguiente recurso:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Y9a9__7QEfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           

    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        img(src="@/assets/curso/temas/t6/t6_06.svg", alt="alt")
      .col-lg-7
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | #[span.txt--blue.strong El nivel de presentación usuarios] hace referencia a la interfaz de usuario por medio de la cual el usuario final interactúa con la aplicación, su función específica es mostrar datos al usuario y recopilar datos de este, por lo general se desarrollan en los lenguajes de programación HTML, CSS y JavaScript.
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | #[span.txt--blue.strong El nivel de aplicación o negocios], también conocido  como nivel lógico o medio. Es la parte medular de la aplicación que procesa la información recopilada en el nivel de presentación, aquí también puede añadir, suprimir o modificar datos en el nivel de datos, se desarrolla utilizando Python, Java, Perl, PHP o Ruby, y se comunica con el nivel de datos mediante llamadas a las API.
        .hr_line(data-aos="fade")
        ul.fa-ul.mb-0(data-aos="fade")
          li
            i.fa-li.fas.fa-check-circle.txt--mint
            | #[span.txt--blue.strong El nivel de datos], conocido también con los nombres de nivel de base de datos, nivel de acceso a datos o #[em backend], es donde se almacena y gestiona la información procesada por el #[em software] o aplicación, por lo general son sistemas de gestión de base de datos como  Microsoft SQL Server, MySQL, MariaDB, Oracle, PostgreSQL,  DB2, Informix  o un  servidor de bases de datos NoSQL como MongoDB, Cassandra o CouchDB.
        

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
        .crd.crd--avatarH
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t6/t6_04.svg", alt="alt").img115
            .col
              h5.text-white.pt-2 Ventajas
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Desarrollo más ágil.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Escalabilidad mejorada.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Mejor confiabilidad.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Seguridad mejorada.

      .col-lg-6(data-aos="flip-left")
        .crd.crd--avatarH
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t6/t6_05.svg", alt="alt").img115
            .col
              h5.text-white.pt-2 Ventajas
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Aumenta el tráfico en la red.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Gasto de espacio de la aplicación dependencia.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | A veces realiza trabajos innecesarios. 

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Arquitecturas monolíticas 

    p.mb-5(data-aos="fade") Este tipo de arquitecturas #[span.txt--blue.strong según Garlan y Shaw (1994)], #[strong se enfocan en desarrollar aplicaciones que sean autosuficiente y desarrollen toda la funcionalidad necesaria para realizar la tarea para la cual fue diseñada, sin depender de otros módulos o dependencias externas que complementen su funcionalidad.]

    .bloque-texto-a.bt_cstm_01.p-4.p-md-5.mb-5(data-aos="zoom-in") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t6/t6_07.svg", alt="alt").img115.m-auto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p.mb-0 Al inicio de la computación todos los programas eran desarrollados con este estilo arquitectónico; es solo recordar los sistemas antiguos, donde todo funcionaba en una sola computadora. #[span.strong Con la aparición de internet se hace posible consumir servicios externos, por lo que se crearon las arquitecturas modulares que permitieron separar el código en unidades de #[em software] cohesivas, fáciles de administrar y más manejables (ver figura 7)].

    .bg_img_02
      .row.justify-content-center.mb-5
        .col-lg-5.col-8
          .titulo-sexto.color-acento-botones(data-aos="fade")
            h5 Figura 7.
            span Arquitectura Monolítica

          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t6/t6_08.svg", alt="alt")
            figcaption.mt-3  Nota. SENA (2022). Unidades de #[em software] en la arquitectura monolítica.

      .tabla-a.tabla-cst.mb-5
        table.cstm_table_01(data-aos="zoom-in")
          thead
            tr.text-center
              th Características
              th Ventajas
              th Desventajas
          tbody
            tr
              td(style="vertical-align: top;")
                ul.fa-ul.mb-0
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Las aplicaciones autosuficientes no requieren paquetes externos para funcionar.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Realizan todas las operaciones para finiquitar una tarea.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Todo el sistema corre bajo una plataforma.             
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Son sitios de datos privados, cada instalación administra su propia base de datos.             
              td(style="vertical-align: top;")
                ul.fa-ul.mb-0
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Fácil de desarrollar.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Fácil de escalar.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Pocos puntos de fallo.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Autónomo.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | #[em Performance].
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Fácil de probar.
              td(style="vertical-align: top;")
                ul.fa-ul.mb-0
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Anclado a un #[em Stack] tecnológico.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Escalado monolítico.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Si falla, falla todo.
                  li.mb-3
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Es fácil perder el rumbo.
                  li
                    i.fa-li.fas.fa-caret-right.txt--orange02
                    | Se debe conocer todo el código para encontrar errores.                


    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Arquitectura  orientada a servicios (SOA - #[em Service Oriented Architecture])

    p.mb-5(data-aos="fade") #[span.txt--blue.strong Garlan y Shaw (2011)], #[strong plantean que SOA está enfocada a los servicios disponibles, es la conexión que une las metas de negocio con la solución de #[em software]. Un servicio es una representación lógica de una actividad de negocio, está por lo general  tiene un resultado de negocio específico, como por ejemplo: comprobar estados de cuenta, obtener datos del tránsito o clima en la ciudad y comprar #[em tkts]]. El SOA, funciona como un marco de trabajo el cual permite que las empresas unan los objetivos de negocio con la infraestructura tecnológica, permitiendo integrar los datos de sistemas que se encuentran separados, ya sea por plataforma, lenguaje de programación o base de datos (ver figura 8).

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones(data-aos="fade")
          h5 Figura 8.
          span Características de la Arquitectura SOA   

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/t6/t6_09.svg", alt="alt")
          figcaption.mt-3 Nota. SENA (2022). Funcionamiento de la arquitectura orientada a servicios (SOA). 

    .tabla-a.tabla-cst.mb-5 
      table.cstm_table_01(data-aos="zoom-in")
        thead
          tr.text-center
            th Características
            th Ventajas
            th Desventajas
        tbody
          tr
            td(style="vertical-align: top;")
              ul.fa-ul
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Agiliza los procesos para que hagan los negocios de manera más eficiente.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Facilita la adaptación al cambio, habilitando la posibilidad de implementar nuevas estrategias, conformes con la actividad de mercado.                          
            td(style="vertical-align: top;")
              ul.fa-ul.mb-0
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Aumenta la eficiencia en los procesos.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Amortiza la inversión realizada en sistemas.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Reduce costes de mantenimiento.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Fomenta la innovación orientada al desarrollo de servicios.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Simplifica el diseño, optimizando la capacidad de organización.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Optimizan el trabajo con datos y su coordinación.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Versatilidad, que posibilita que los servicios se consuman por los clientes en aplicaciones o procesos distintos de negocio.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Flexibilidad, lo cual permite su reutilización.

            td(style="vertical-align: top;")
              ul.fa-ul.mb-0
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | SOA depende de la implementación de estándares.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | No es óptima para aplicaciones con alto nivel de transferencia de datos.
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Implica conocer los procesos del negocio, clasificarlos y extraer las funciones que son comunes para formar con ellas capas de servicios que serán requeridas por cualquier proceso de negocio.

    .row.mb-3(data-aos="fade")
      .col-auto
        h3.cstmH3 Arquitectura MVC (Modelo Vista Controlador)

    p.mb-5(data-aos="fade") #[span.strong Es un tipo de arquitectura de #[em software] que separa los datos de una solución de #[em software], la interfaz de usuario, y la lógica de control en tres componentes diferentes]. Este modelo muy consolidado, ha demostrado su validez a lo largo del tiempo en todo tipo de aplicaciones y sobre muchos lenguajes y plataformas de desarrollo.  #[span.txt--blue.strong En el gráfico a continuación se pueden observar los tres componentes claves de esta arquitectura (ver figura 9)].

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones(data-aos="fade")
          h5 Figura 9.
          span Arquitectura MVC

        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t6/t6_10.svg', alt='')
              

          .crd.bg--white.brd--rad_01.shadow(x="98%" y="17%" numero="+")
            .bg_grad_Blue01.shadow.brd--top.p-3
              h5.text-white.text-center.mb-0 Controlador
            .p-4
              p.text-center.mb-0 Actúa como intermediario entre el Modelo y la Vista, su función es gestionar el flujo de información entre estos y las transformaciones para adaptar los datos a las necesidades de cada uno.

          .crd.bg--white.brd--rad_01.shadow(x="98%" y="83%" numero="+")
            .bg_grad_Blue01.shadow.brd--top.p-3
              h5.text-white.text-center.mb-0 Modelo
            .p-4
              p.text-center.mb-0 Representa   los datos que maneja el sistema, la lógica de negocio, y los mecanismos de persistencia.


          .crd.bg--white.brd--rad_01.shadow(x="31%" y="79%" numero="+")
            .bg_grad_Blue01.shadow.brd--top.p-3
              h5.text-white.text-center.mb-0 Vista
            .p-4
              p.text-center.mb-0 Es la interfaz, por medio de la cual interactúa el usuario, está compuesta por la información que se envía.

      .col-lg-8
        figcaption.mt-3 Nota. SENA (2022). Estructura de la arquitectura. Modelo Vista Controlador (MVC).
              
    .tabla-a.tabla-cst.mb-5
      table.cstm_table_01(data-aos="zoom-in")
        thead
          tr.text-center
            th Modelo
            th Vista
            th Controlador
        tbody
          tr
            td(style="vertical-align: top;")
              ul.fa-ul.mb-0
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Accede a la capa de almacenamiento de los datos.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Define las reglas de negocio “cómo funciona el sistema”.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Registra el número de las vistas y controladores del sistema.            
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Notifica a las vistas los cambios que en los datos se producen por un agente externo, ya que es un modelo activo.         
            td(style="vertical-align: top;")
              ul.fa-ul.mb-0
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Recibe los datos del modelo y los muestra al usuario.
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Lleva el registro de su controlador asociado. 
                li
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Pueden dar el servicio de "Actualización ()", para que sea invocado por el controlador o por el modelo. 
            td(style="vertical-align: top;")
              ul.fa-ul.mb-0
                li.mb-3
                  i.fa-li.fas.fa-caret-right.txt--orange02
                  | Recibir los eventos de entrada contiene reglas de gestión de eventos.

    .crd--gray.p-4.mb-5
      p.text-center.mb-0 Para ampliar la información sobre arquitectura de #[em software], consultar en el material complementario el artículo #[em "An introduction to Software Architecture"].       

    .bg_img_02
      .row.mb-3(data-aos="fade")
        .col-auto
          h3.cstmH3 Otras arquitecturas

      p.mb-5(data-aos="fade") Existen otros tipos de arquitecturas aún vigentes, las cuales son menos utilizadas y poco conocidas como son:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4(data-aos="zoom-in").d-none.d-lg-flex
          img(src="@/assets/curso/temas/t6/t6_11.svg", alt="alt")

        .col-lg-6(data-aos="flip-left")
          .row.justify-content-center
            .col-lg-12.mb-4
              .crd.crd--avatarH
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t6/t6_04.svg", alt="alt").img115
                  .col
                    h5.text-white.pt-2 Arquitectura  Máquinas virtuales
                    ul.fa-ul.mb-0
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Factory.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Singleton.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | En pipeline.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Entre pares.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | En pizarra.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Orientada a servicios (SOA del inglés Service-Oriented Architecture).

            .col-lg-12(data-aos="flip-left")               
              .crd.crd--avatarH
                .row
                  .col-auto
                    figure
                      img(src="@/assets/curso/temas/t6/t6_05.svg", alt="alt").img115
                  .col
                    h5.text-white.pt-2 Arquitectura de microservicios (MSA del inglés #[em MicroServices Architecture]). Algunos consideran que es una especialización de una forma de implementar SOA.
                    ul.fa-ul.mb-0
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Dirigida por eventos.
                      li
                        i.fa-li.fas.fa-caret-right.txt--orange02
                        | Máquinas virtuales.

      .bloque-texto-g.cstm.bg--mint.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[span.txt--blue.strong En el entorno de los programadores existe una confusión con los temas de arquitectura de #[em software], patrones de #[em software] y estilos arquitectónicos],  como se ha mencionado antes, la arquitectura de #[em software] hace referencia a la estructura con la cual se construye una aplicación al más alto nivel, organizando todos sus componentes e inter relacionándolos entre sí; #[strong los patrones arquitectónicos son soluciones recurrentes a un problema de diseño que se presentan entre componentes y su interacción, y los estilos arquitectónicos son marcos de referencia o estilos de trabajo que se componen de uno o más patrones arquitectónicos.]
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t6/t6_12.jpg')})`}" 
        ) 
            

    

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
