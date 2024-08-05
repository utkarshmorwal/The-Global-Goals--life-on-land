document.addEventListener('DOMContentLoaded', function () {
    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Add event listener to all buttons with class 'popover-btn'
    const buttons = document.querySelectorAll('.popover-btn');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            // Hide all popovers except the one that was clicked
            popoverList.forEach((popover) => {
                if (popover._element !== event.currentTarget) {
                    popover.hide();
                }
            });
        });
    });

    // Hide popovers when clicking outside
    document.addEventListener('click', (event) => {
        popoverList.forEach((popover) => {
            if (!popover._element.contains(event.target) && popover._popper !== null) {
                popover.hide();
            }
        });
    });
});
