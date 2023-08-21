const socket = io('http://localhost:8000'); // Connect to the Socket.io server

function submitForm() {
    const form = document.querySelector('form');
    const formData = new FormData(form);

    // Convert FormData to JSON object
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Emit the form data to the server
    socket.emit('submitFormData', formDataObject);

    // Prevent the form from submitting through traditional HTTP
    return false;
}
