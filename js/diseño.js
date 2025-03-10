(function ($) {
    // Navbar module for handling scroll behavior
    const NavbarModule = (function () {
        const $navbar = $('.navbar');
        const scrollThreshold = 10; // Threshold for adding/removing 'scrolled' class

        // Private method to handle scroll behavior
        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                $navbar.addClass('scrolled');
            } else {
                $navbar.removeClass('scrolled');
            }
        }

        function debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }

        // Public method to initialize the module
        function init() {
            if ($navbar.length) {
                $(window).on('scroll', debounce(handleScroll, 100));
            } else {
                console.warn('NavbarModule: .navbar element not found.');
            }
        }

        return { init };
    })();

    // CopyModule for handling copy-to-clipboard functionality with toast
    const CopyModule = (function () {
        const $copyButtons = $('.copy-btn');
        const $toastElement = $('#copyToast');
        let toast = null;

        // Private method to initialize the Bootstrap toast
        function initializeToast() {
            if ($toastElement.length) {
                toast = new bootstrap.Toast($toastElement, {
                    autohide: true,
                    delay: 2500
                });
            } else {
                console.warn('CopyModule: #copyToast element not found.');
            }
        }

        // Private method to handle copy action
        function handleCopy(event) {
            const $button = $(event.currentTarget);
            const textToCopy = $button.attr('data-copy');

            if (!textToCopy) {
                console.error('CopyModule: data-copy attribute is missing or empty.');
                return;
            }

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    if (toast) {
                        toast.show();
                    } else {
                        console.warn('CopyModule: Toast not initialized.');
                    }
                })
                .catch(err => {
                    console.error('CopyModule: Failed to copy text:', err);
                });
        }

        // Public method to initialize the module
        function init() {
            if ($copyButtons.length) {
                initializeToast();
                $copyButtons.on('click', handleCopy);
            } else {
                console.warn('CopyModule: No .copy-btn elements found.');
            }
        }

        return { init };
    })();

    // OffcanvasModule for handling offcanvas display behavior
    const OffcanvasModule = (function () {
        const $offcanvas = $('#mobileMenu');

        // Private method to handle offcanvas shown event
        function handleShown() {
            $offcanvas.css('display', 'block');
            $('body').addClass('offcanvas-open');
        }

        // Private method to handle offcanvas hidden event
        function handleHidden() {
            $offcanvas.css('display', 'none');
            $('body').removeClass('offcanvas-open');
        }

        // Public method to initialize the module
        function init() {
            if ($offcanvas.length) {
                $offcanvas
                    .on('shown.bs.offcanvas', handleShown)
                    .on('hidden.bs.offcanvas', handleHidden);
            } else {
                console.warn('OffcanvasModule: #mobileMenu element not found.');
            }
        }

        return { init };
    })();

    // Main initialization function
    function initializeApp() {
        NavbarModule.init();
        CopyModule.init();
        OffcanvasModule.init();
    }

    // Initialize everything when the DOM is ready
    $(document).ready(initializeApp);

})(jQuery);