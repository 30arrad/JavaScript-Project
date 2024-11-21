// Chat Box Logic
document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");

    // Function to add messages to the chat
    const addMessage = (message, type) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    };

    // Event Listener for Send Button
    sendBtn.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, "sent"); // User's message
            messageInput.value = "";

            // Simulate a reply
            setTimeout(() => {
                addMessage("This is a reply message.", "received");
            }, 1000);
        }
    });

    // Allow Enter Key to Send Messages
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
});
