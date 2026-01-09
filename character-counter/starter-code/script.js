const textarea = document.querySelector("textarea");

const characterCountEl = document.querySelector(".characters strong");
const wordCountEl = document.querySelector(".words strong");
const sentenceCountEl = document.querySelector(".sentences strong");
const readingTimeEl = document.querySelector(".reading-time");

const themeToggle = document.querySelector(".theme-toggle");

// Restore theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

textarea.addEventListener("input", updateTextStats);
themeToggle.addEventListener("click", toggleTheme);

function updateTextStats() {
  const text = textarea.value;

  updateCharacterCount(text);
  updateWordCount(text);
  updateSentenceCount(text);
  updateReadingTime(text);
}

function updateCharacterCount(text) {
  characterCountEl.textContent = text.length;
}

function updateWordCount(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCountEl.textContent = text.trim() === "" ? 0 : words.length;
}

function updateSentenceCount(text) {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  sentenceCountEl.textContent = sentences ? sentences.length : 0;
}

function updateReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const minutes = Math.max(1, Math.ceil(words.length / 200));

  readingTimeEl.textContent = `Approx. reading time: ${minutes} minute${minutes > 1 ? "s" : ""}`;
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
