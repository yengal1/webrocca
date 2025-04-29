$(document).ready(function() {
    // ... (Tu código JavaScript existente) ...

    $(document).on('click', '.producto-imagen', function() {
        const imageUrl = $(this).data('full-image');

        // Crea el overlay
        const overlay = $('<div>').addClass('imagen-ampliada-overlay');

        // Crea la imagen ampliada
        const imagenAmpliada = $('<img>').addClass('imagen-ampliada').attr('src', imageUrl);

        // Agrega la imagen al overlay
        overlay.append(imagenAmpliada);

        // Agrega el overlay al body
        $('body').append(overlay);

        // Cierra la vista ampliada al hacer clic en el overlay
        overlay.on('click', function() {
            $(this).remove();
        });
    });

    // ... (El resto de tu código JavaScript) ...
});