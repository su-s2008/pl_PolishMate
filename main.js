

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

let learnedWords = 0;
knowWord.addEventListener("click", function () {
learnedWords = learnedWords + 1;
progressCount.textContent = learnedWords;

});

let currentWord = 0;
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