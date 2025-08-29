document.addEventListener('submit', function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
}, true);