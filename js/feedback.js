// The class project has no server: show feedback locally instead of claiming to send it.
const form = document.querySelector('#feedback-form');
const result = document.querySelector('#form-status');
if (form && result) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.querySelector('#visitor-name').value.trim();
        const topic = document.querySelector('#visitor-topic').value;
        const message = document.querySelector('#visitor-message').value.trim();
        if (!topic || !message) return;
        result.textContent = `Thank you${name ? ', ' + name : ''}! You chose ${topic}. Your feedback: “${message}”`;
        form.reset();
    });
}
