import html from "./chatbot.html?raw";
import "./chatbot.css";

export function mountChatbot() {
  // inject widget into <body> once
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html.trim();
  const chatbotRoot = wrapper.firstElementChild;

  document.body.appendChild(chatbotRoot);

  const toggleBtn = document.getElementById("chatbotToggle");
  const windowEl = document.getElementById("chatbotWindow");
  const closeBtn = document.getElementById("chatbotClose");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");
  const messages = document.getElementById("chatbotMessages");

  const openWindow = () => {
    windowEl.classList.add("chatbot__window--open");
    windowEl.setAttribute("aria-hidden", "false");
    setTimeout(() => input?.focus(), 100);
  };

  const closeWindow = () => {
    windowEl.classList.remove("chatbot__window--open");
    windowEl.setAttribute("aria-hidden", "true");
  };

  toggleBtn.addEventListener("click", () => {
    if (windowEl.classList.contains("chatbot__window--open")) {
      closeWindow();
    } else {
      openWindow();
    }
  });

  closeBtn.addEventListener("click", closeWindow);

  function appendMessage(text, type = "bot") {
    const wrapper = document.createElement("div");
    wrapper.className = `chatbot__message chatbot__message--${type}`;
    wrapper.innerHTML = `<p>${text}</p>`;
    messages.appendChild(wrapper);
    messages.scrollTop = messages.scrollHeight;
  }

  // Placeholder "bot" answer logic
  async function getBotReply(userText) {
    // 👉 Here you can call your real backend, e.g.:
    // const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: userText }) });
    // const data = await res.json();
    // return data.reply;

    // For now, a simple canned + echo answer
    if (/planimetrii|plan|apartament/i.test(userText)) {
      return "Îți pot spune mai multe despre tipurile de apartamente și planimetrii. De exemplu, apartamente cu 1, 2 sau 3 camere, cu diferite suprafețe utile și logii. Spune-mi ce tip de apartament cauți.";
    }

    if (/preț|pret|cost/i.test(userText)) {
      return "Pentru detalii exacte de preț, te poate contacta un manager. Lasă-mi un număr de telefon sau sună direct la butonul „Sună acum”.";
    }

    return "Mulțumesc pentru întrebare! În versiunea reală, aici răspunde un asistent care știe toate detaliile proiectului. Momentan îți pot răspunde generic sau te pot ghida spre secțiunile paginii.";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    input.value = "";

    // simulate typing delay
    appendMessage("Se procesează întrebarea ta…", "bot");
    const typingBubble = messages.lastElementChild;

    try {
      const reply = await getBotReply(text);
      typingBubble.remove();
      appendMessage(reply, "bot");
    } catch (err) {
      typingBubble.remove();
      appendMessage("A apărut o eroare. Te rog încearcă din nou sau contactează-ne telefonic.", "bot");
    }
  });
}
