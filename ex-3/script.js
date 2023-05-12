const chatWindow = document.getElementById("chatWindow");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const geoButton = document.getElementById("geoButton");

const socket = new WebSocket("wss://echo-ws-service.herokuapp.com");

socket.onmessage = (event) => {
    const receivedMessage = event.data;
    if (!receivedMessage.startsWith("geo:")) {
        chatWindow.innerHTML += `<p><b>Server:</b> ${receivedMessage}</p>`;
    }
};

sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    messageInput.value = "";
    chatWindow.innerHTML += `<p><b>You:</b> ${message}</p>`;
    socket.send(message);
});

geoButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
        chatWindow.innerHTML += "<p>Геолокация не поддерживается вашим браузером.</p>";
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const mapLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
            chatWindow.innerHTML += `<p><b>You:</b> <a href="${mapLink}" target="_blank">Моя гео-локация</a></p>`;
            socket.send(`geo:${latitude},${longitude}`);
        }, () => {
            chatWindow.innerHTML += "<p>Не удалось получить геолокацию.</p>";
        });
    }
});
