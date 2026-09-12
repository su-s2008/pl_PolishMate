

const words = [
    {
        polish: "Dzień dobry",
        ukrainian: "Добрий день"
    },

    {
        polish: "Dziękuję",
        ukrainian: "Дякую"
    },

    {
        polish: "Proszę",
        ukrainian: "Будь ласка"
    },

    {
        polish: "Do widzenia",
        ukrainian: "До побачення"
    }
];


const word = document.querySelector(".word");
const translation = document.querySelector(".translation");
const showTranslation = document.getElementById("showTranslation");
const nextWord =document.getElementById("nextWord");
const favoriteWord =document.getElementById("favoriteWord");
const knowWord =  document.getElementById("knowWord");  
const progressCount = document.getElementById("progressCount");
const progressFill = document.getElementById("progressFill");
const progressTotal = document.getElementById("progressTotal");

let currentWord = 0;

let learned = JSON.parse(localStorage.getItem("learned")) || [];
let learnedWords = learned.length;

progressTotal.textContent = words.length;
progressCount.textContent = learnedWords;
progressFill.style.width = (learnedWords / words.length) * 100 + "%";

setTimeout(function () {
    currentWord = Math.floor(Math.random() * words.length);
    word.textContent = words[currentWord].polish;
    translation.textContent = words[currentWord].ukrainian;
    translation.style.display = "none";
}, 300);

knowWord.addEventListener("click", function () {
    const currentWordText = words[currentWord].polish;
    if (learned.includes(currentWordText)) {
        return;
    }
        learned.push(currentWordText);
        localStorage.setItem("learned", JSON.stringify(learned));
        learnedWords = learnedWords + 1;
        progressCount.textContent = learnedWords;
        progressFill.style.width = (learnedWords /10) * 100 +"%";
});

let favorites =JSON.parse(localStorage.getItem("favorites")) || [];

translation.style.display = "none";

showTranslation.addEventListener("click", function () {
    translation.style.display = "block";
});

nextWord.addEventListener("click", function () {
    currentWord++;
    if (currentWord >= words.length) {
        currentWord = 0;

    }
    word.textContent =
        words[currentWord].polish;
    translation.textContent =
        words[currentWord].ukrainian;
    translation.style.display = "none";
});

favoriteWord.addEventListener("click", function () {
    const selectedWord = words[currentWord];
    const alreadyFavorite = favorites.some(function (item) {

        return item.polish === selectedWord.polish;

    });

    if (!alreadyFavorite) {

        favorites.push(selectedWord);
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
        console.log("Слово додано ⭐");
    } else {
        console.log("Це слово вже у вибраному");
    }
});