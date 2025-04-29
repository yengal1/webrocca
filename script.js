/* js/script.js */
$(document).ready(function() {
    // Ejemplo de interactividad para el menú
    $('.navbar-nav .nav-link').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Estilo para el hover del menú
    $('head').append('<style>.navbar-nav .nav-link.hovered { color: #3AAFA9 !important; }</style>');

    //Envío de formulario de contacto
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Evitar el envío real del formulario
        // Aquí podrías agregar lógica para enviar los datos a un servidor
        console.log("Formulario de contacto enviado (simulado)");
        $('#mensaje-enviado').removeClass('d-none');
        $('#contactForm')[0].reset(); // Limpiar el formulario
        setTimeout(function() {
            $('#mensaje-enviado').addClass('d-none');
        }, 3000); // Ocultar el mensaje después de 3 segundos
    });
});