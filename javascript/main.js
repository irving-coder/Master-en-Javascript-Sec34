/* 
    1. (HECHO) Maquetar una web 
    2. (HECHO) Buscar un plugin de jQuery para hacer un slider
    3. (HECHO) Listado de post almacenado en un json y mostrado dinámicamente  (Se puede corregir la fecha con format. Video 132)
    4. (HECHO) Cambiador de temas (cambio colores y fondos de la web)
    5. (HECHO) Al final de la web habrá un botón para subir al principio de la web haciendo una
        animación en el scroll automático
    6. (HECHO) Hacer un formulario de login falso que nos permita guardar en el localstorage el
        nombre del usuario y en el caso de que exista la 'sesión', mostrarla
    7. (HECHO) Sección 'Sobre mi' en la que habrá un acordeón de jQuery UI (Podría hacer cada funcionalidad en un archivo Javascript)
    8. (HECHO) Sección de 'Reloj' en la que habrá un reloj dinámico con javascript
    9. Sección de contacto con formulario y validación    */
$(document).ready(function(){
    // 2. Slider
    if(window.location.href.indexOf('index') > -1){ // Necesaro el '> -1'
        $('.slider').bxSlider(
            {
                speed: 1000,
                auto: true
            }
        );
    }

    // 3. Listado de post almacenado en un json y mostrado dinámicamente
    // Las fechas se pueden mejorar con la librería 'moment.js'

    if(window.location.href.indexOf('index') > -1){
        var article = [
            {
                title: 'Titulo principal',
                date: 'Fecha: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'), // + new Date(2020, 8, 14),
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Titulo principal',
                date: 'Fecha: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),// + moment.format('MMMM Do YYYY, h:mm:ss a'), // + new Date(2020, 8, 14),
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Titulo principal',
                date: 'Fecha: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),// + moment.format('MMMM Do YYYY, h:mm:ss a'), // + new Date(2020, 8, 14),
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Titulo principal',
                date: 'Fecha: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),// + moment.format('MMMM Do YYYY, h:mm:ss a'), // + new Date(2020, 8, 14),
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                title: 'Titulo principal',
                date: 'Fecha: ' + moment().format('dddd') + ' ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),// + moment.format('MMMM Do YYYY, h:mm:ss a'), // + new Date(2020, 8, 14),
                paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
        ];
    
        article.forEach((currentValue, index) => {
            var section = `
            <article class="article">
            <h2>${currentValue.title} ${index+1}</h2>
            <span class="date">${currentValue.date}</span>
    
            <!-- <button class="coments">Comentarios</button> Se puede dar interctividad con la cantidad -->
            <p class="letra-post">
                ${currentValue.paragraph}
            </p>
    
            <a href="#" class="read-more">Leer más</a>
            </article>
            `;
    
            $('#section').append(section);
        });
    }

    // 4. Cambiar tema (cambio de colores y fondos de la web)
    $('#green-theme').click(() => {
        $('#theme').attr('href', 'styles/green.css');
    });

    $('#red-theme').click(() => {
        $('#theme').attr('href', 'styles/red.css');
    });

    $('#blue-theme').click(() => {
        $('#theme').attr('href', 'styles/blue.css');
    });

    // 5. Botón para hacer scroll hasta arriba de la web
    $('#up').click((e) => { //Aunque no ponga el 'preventDefault' y el 'return' se tiene el mismo resultado (se probó en local)
        e.preventDefault(); // Para que no se active el enlace y nos mande a la pag del href

        $('html, body').animate({ // Si sólo pogo html obtengo el mismo resultado (se probó en local)
            scrollTop: 0
        }, 1000);

        return false;
    });

    // 6. Hacer un formulario de login falso que nos permita guardar en el localstorage el
    // nombre del usuario y en el caso de que exista la 'sesión' (el usuario), mostrarla
    $('#form').submit(function(){
        var name = $('#name').val();
        console.log(name);
    
        localStorage.setItem('nombre', name);
    });
        
    var name = localStorage.getItem('nombre');
    if(name != null && name != undefined){
        var user = $('#user');

        user.html('<br><strong>Bienvenido, ' + name + ' </strong>');
        user.append('<a href="#" id="logout" style="text-decoration: none"> Cerrar sesión</a>');

        $('#login').hide();

        $('#logout').click(() => {
            localStorage.clear();
            location.reload();
        });
    }

    // 7. Sección 'Sobre mi' en la que habrá un acordeón de jQuery UI
    if(window.location.href.indexOf('about') > -1){
        $('#accordion').accordion({
            animate: 500
        });
    }

    // 8. Sección de 'Reloj' en la que habrá un reloj dinámico con javascript
    if(window.location.href.indexOf('watch') > -1){
        var watch = $('#watch');

        setInterval(() => {
            watch.html(moment().format('LTS'));
        }, 1000);
                
        function foo(i){
            if(i < 0)
                return;
            console.log('inicio: ' + i);
            foo(i - 1);
            console.log('fin: ' + i);
        }
        foo(3);
    }

    // 9. Sección de contacto con formuario y validación (usar localStorage)
    if(window.location.href.indexOf('contact') > -1){
        jQuery.validator.setDefaults({
            debug: true,
            succes: 'valid'
        });
        $('#formValidate').validate({
            rules:{
                name: 'required',
                lastName: 'required',
                email: {
                    required: true,
                    email: true
                },
                gender: 'required',
                fechaNac: 'required',
                edad: 'required'
            },
            messages:{
                name: 'Escriba su nombre',
                lastName: 'Escriba su apellido', 
                email: 'El e-mail lleva "@"'
            }
        });
    }


});