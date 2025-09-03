document.addEventListener('submit', function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const metaData = {
        url: window.location.href
    };

    const payload = {
        metaData,
        formData: data
    };

    fetch(process.env.API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}, true);