const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value.trim();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    if (location.length === 0) {
        messageOne.textContent = 'Please provide an address.';
        messageTwo.textContent = '';
        return
    }

    fetch(`http://localhost:3000/weather?address="${location}"`).then(response => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error;
                return weatherForm.reset();
            }

            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            return weatherForm.reset();
        })
    })
})
