(function ($) {
    // FormHandler module for managing form submission and API interaction
    const FormHandler = (function () {
        const $form = $('#form');
        const $result = $('#result');
        const apiEndpoint = 'https://api.web3forms.com/submit';

        // Private method to handle form submission
        function handleSubmit(event) {
            event.preventDefault();

            const formData = new FormData($form[0]); // Convert jQuery object to DOM element
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            $result.html('Please wait...'); // Use jQuery for DOM manipulation

            fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    const data = await response.json();
                    if (response.ok) {
                        $result.html(data.message);
                    } else {
                        console.error('API Error:', data);
                        $result.html(data.message || 'An error occurred.');
                    }
                })
                .catch(error => {
                    console.error('Fetch Error:', error);
                    $result.html('Something went wrong!');
                })
                .finally(() => {
                    $form[0].reset(); // Reset the form
                    setTimeout(() => {
                        $result.hide(); // Use jQuery hide method
                    }, 3000);
                });
        }

        // Public method to initialize the module
        function init() {
            if ($form.length) {
                $form.on('submit', handleSubmit);
            } else {
                console.warn('FormHandler: #form element not found.');
            }
        }

        return { init };
    })();

    // NavigationHeight module for setting the --scroll-padding CSS variable
    const NavigationHeight = (function () {
        const $navigation = $('.primary-navigation');

        // Private method to set the CSS custom property
        function setScrollPadding() {
            if ($navigation.length) {
                const navigationHeight = $navigation.outerHeight(); // Use jQuery outerHeight
                document.documentElement.style.setProperty(
                    '--scroll-padding',
                    `${navigationHeight}px`
                );
            } else {
                console.warn('NavigationHeight: .primary-navigation element not found.');
            }
        }

        // Public method to initialize the module
        function init() {
            setScrollPadding();
            // Optional: Update on window resize if navigation height is dynamic
            $(window).on('resize', debounce(setScrollPadding, 100));
        }

        // Debounce function to limit resize event frequency
        function debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }

        return { init };
    })();

    // Main initialization function
    function initializeApp() {
        FormHandler.init();
        NavigationHeight.init();
    }

    // Initialize everything when the DOM is ready
    $(document).ready(initializeApp);

})(jQuery);