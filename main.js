

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

const showTranslation =
    document.getElementById("showTranslation");

const nextWord =
    document.getElementById("nextWord");

const favoriteWord =
    document.getElementById("favoriteWord");

let currentWord = 0;
let favorites = [];

translation.style.display = "none";


/* ПОКАЗАТИ ПЕРЕКЛАД */
showTranslation.addEventListener("click", function () {
    translation.style.display = "block";
});


/* НАСТУПНЕ СЛОВО */
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


/* ДОДАТИ У ВИБРАНЕ */

favoriteWord.addEventListener("click", function () {
    const selectedWord =
        words[currentWord];
    favorites.push(selectedWord);
    console.log(favorites);

});