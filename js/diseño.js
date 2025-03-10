document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const toastElement = document.getElementById('copyToast');
    
    if (toastElement) {
        const toast = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 2500
        });

        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const textToCopy = button.getAttribute('data-copy');
                navigator.clipboard.writeText(textToCopy).then(() => {
                    toast.show();
                });
            });
        });
    }
});

$(document).ready(function () {
    const $offcanvas = $("#mobileMenu");

    $offcanvas.on("shown.bs.offcanvas", function () {
        $(this).css("display", "block");
    });

    $offcanvas.on("hidden.bs.offcanvas", function () {
        $(this).css("display", "none");
    });
});