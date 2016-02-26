$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            overlay: {
                locked: false,
                css: {
                    'background': 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    });
});