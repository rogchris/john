document.addEventListener('DOMContentLoaded', function() {
  // Menü-Button-Funktionalität
  const menuToggle = document.getElementById('menu-toggle');
  const verticalMenu = document.querySelector('.vertical-menu');

  menuToggle.addEventListener('click', function(event) {
      event.stopPropagation();
      if (verticalMenu.style.display === 'none' || verticalMenu.style.display === '') {
          verticalMenu.style.display = 'block';
      } else {
          verticalMenu.style.display = 'none';
      }
  });

  document.addEventListener('click', function(event) {
      if (verticalMenu.style.display === 'block' && !verticalMenu.contains(event.target) && event.target !== menuToggle) {
          verticalMenu.style.display = 'none';
      }
  });

  // Ladebalken
  window.addEventListener('load', function() {
      const loadingBar = document.getElementById('loading-bar');
      loadingBar.style.width = '100%';
      setTimeout(function() {
          loadingBar.style.display = 'none';
      }, 1000);
  });

  // Konsolensimulation im Hacker-Stil
  const consoleInput = document.createElement('input');
  consoleInput.id = 'console-input';
  consoleInput.placeholder = 'Enter command...';
  document.body.appendChild(consoleInput);

  consoleInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          const command = consoleInput.value.trim().toLowerCase();
          handleCommand(command);
          consoleInput.value = '';
      }
  });

  function handleCommand(command) {
      const eastereggSection = document.querySelector('.easteregg');

      switch (command) {
          case 'help':
              alert('Available commands: help, easteregg, about');
              break;
          case 'easteregg':
              alert('Congratulations! You found the Easteregg!');
              eastereggSection.style.display = 'block';
              break;
          case 'about':
              alert('Christian Lukowski - aspiring software developer with a passion for IT security and hacking.');
              break;
          default:
              alert('Unknown command. Type "help" for a list of commands.');
      }
  }

  // Chatbot-Funktionalität
  document.getElementById("chatbot-header").addEventListener("click", function() {
      const chatbotBody = document.getElementById("chatbot-body");
      chatbotBody.style.display = chatbotBody.style.display === "none" ? "flex" : "none";
  });

  document.getElementById("chatbot-send").addEventListener("click", sendMessage);
  document.getElementById("chatbot-input").addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          sendMessage();
      }
  });

  // Spracherkennung aktivieren
  if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'de-DE';
      recognition.interimResults = false;

      document.getElementById("chatbot-input").addEventListener("dblclick", function() {
          recognition.start();
      });

      recognition.onresult = function(event) {
          document.getElementById("chatbot-input").value = event.results[0][0].transcript;
          sendMessage();
      };

      recognition.onerror = function(event) {
          console.error("Spracherkennung fehlgeschlagen:", event.error);
      };
  }

  function sendMessage() {
      const input = document.getElementById("chatbot-input");
      const message = input.value.trim();
      if (message) {
          appendMessage("Du", message);
          getChatbotResponse(message);
          input.value = "";
      }
  }

  function appendMessage(sender, message) {
      const chatMessages = document.getElementById("chatbot-messages");
      const messageElement = document.createElement("div");
      messageElement.className = "message";
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function getChatbotResponse(message) {
      let response;
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes("hallo") || lowerMessage.includes("hi")) {
          response = "Hey! Schön, dass du hier bist. Wie kann ich dir helfen? 😊";
      } else if (lowerMessage.includes("hilfe")) {
          response = "Du kannst mir Fragen zu IT-Sicherheit, Hacken oder Anwendungsentwicklung stellen!";
      } else if (lowerMessage.includes("wer bist du")) {
          response = "Ich bin dein virtueller Assistent, entwickelt von Christian, um dir bei Fragen zu helfen!";
      } else if (lowerMessage.includes("easteregg")) {
          response = "Gratulation! Du hast das Easteregg gefunden! 🎉";
      } else {
          response = "Interessante Frage! Ich werde mein Bestes tun, um dir zu helfen.";
      }

      appendMessage("Chatbot", response);
      speakResponse(response);
  }

  // Sprachausgabe für den Chatbot
  function speakResponse(response) {
      const speech = new SpeechSynthesisUtterance(response);
      speech.lang = "de-DE";
      window.speechSynthesis.speak(speech);
  }
});
