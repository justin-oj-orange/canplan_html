(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

        var subFormTogglebtns = document.getElementsByClassName('btnToggleSubform');
        Array.prototype.filter.call(subFormTogglebtns, function (toggleBtn) {
            toggleBtn.addEventListener('change', function () {
                $(this.getAttribute('data-target')).find('[required]')[this.checked ? 'removeAttr': 'attr']('disabled', '');
            });
        });

    }, false);
})();