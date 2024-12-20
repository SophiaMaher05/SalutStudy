
// VERB PRONUNCIATION BUTTON
function playPronunciation(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    speechSynthesis.speak(utterance);
}

function playPronunciation(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "fr-FR"; 
    speech.text = text;
    speech.rate = 0.9; 
    window.speechSynthesis.speak(speech)}


// INTERACTIVE TESTS/FLASHCARDS
const flashcardData = {
    greeting: [
        {english: "Hello", french: "Bonjour" },
        {english: "Goodbye", french: "Au revoir" },
        {english: "How are you?", french: "Comment ça va ?" },
        {english: "Good morning", french: "Bonjour" },
        {english: "Good evening", french: "Bonsoir" },
        {english: "Good night", french: "Bonne nuit" },
        {english: "How is it going?", french: "Comment ça se passe ?" },
        {english: "See you later", french: "À bientôt" },
        {english: "Welcome", french: "Bienvenue" },
        {english: "Take care", french: "Prends soin de toi" },
        {english: "Hi", french: "Salut" },
        {english: "Good day", french: "Bonne Journée" },
    ],
    number: [
        {english: "One", french: "Un" },
        {english: "Two", french: "Deux" },
        {english: "Three", french: "Trois" },
        {english: "Four", french: "Quatre" },
        {english: "Five", french: "Cinq" },
        {english: "Six", french: "Six" },
        {english: "Seven", french: "Sept" },
        {english: "Eight", french: "Huit" },
        {english: "Nine", french: "Neuf" },
        {english: "Ten", french: "Dix" }
    ],
    color: [
        {english: "Red", french: "Rouge" },
        {english: "Blue", french: "Bleu" },
        {english: "Green", french: "Vert" },
        {english: "Yellow", french: "Jaune" },
        {english: "Purple", french: "Violet" },
        {english: "Orange", french: "Orange" },
        {english: "Pink", french: "Rose" },
        {english: "White", french: "Blanc" },
        {english: "Black", french: "Noir" },
        {english: "Gray", french: "Gris" },
        {english: "Purple", french: "Violet" }
    ]};

const currentIndex = {greeting: 0,
                    number: 0,
                    color: 0};

function toggleFlashcard(category) {
    const card = document.getElementById(`${category}-card`);
    const front = card.querySelector(".card-front");
    const back = card.querySelector(".card-back");
    const isFlipped = card.classList.contains("flipped");

    if (isFlipped) {
        currentIndex[category] = (currentIndex[category] + 1) % flashcardData[category].length;
        front.textContent = flashcardData[category][currentIndex[category]].english;
        back.textContent = flashcardData[category][currentIndex[category]].french;}

    card.classList.toggle("flipped");}

document.addEventListener("DOMContentLoaded", () => {
    const categories = Object.keys(flashcardData);
    categories.forEach((category) => {
        const card = document.getElementById(`${category}-card`);
        if (card) {
            card.addEventListener("click", () => toggleFlashcard(category));}});});


