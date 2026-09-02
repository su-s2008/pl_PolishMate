const words = [
    {
        polish: "Dzień dobry",
        ukrainian: "Добрий день",
        category: "daily"
    },

    {
        polish: "Dziękuję",
        ukrainian: "Дякую",
        category: "daily"
    },

    {
        polish: "Proszę",
        ukrainian: "Будь ласка",
        category: "daily"
    },

    {
        polish: "Do widzenia",
        ukrainian: "До побачення",
        category: "daily"
    },

    {
        polish: "Boli mnie brzuch",
        ukrainian: "У мене болить живіт",
        category: "doctor"
    },

    {
        polish: "Potrzebuję lekarza",
        ukrainian: "Мені потрібен лікар",
        category: "doctor"
    },

    {
        polish: "Mam gorączkę",
        ukrainian: "У мене температура",
        category: "doctor"
    },

    {
        polish: "Szukam pracy",
        ukrainian: "Я шукаю роботу",
        category: "work"
    },

    {
        polish: "Mam doświadczenie",
        ukrainian: "У мене є досвід",
        category: "work"
    },

    {
        polish: "Szukam pracy na pełny etat",
        ukrainian: "Я шукаю роботу на повний робочий день",
        category: "work"
    }
];


const searchInput = document.getElementById("searchInput");
const wordsList = document.getElementById("wordsList");
const categoryButtons = document.querySelectorAll(".category-buttons button");
function displayWords(wordsToDisplay) {

    wordsList.innerHTML = "";

    wordsToDisplay.forEach(function (item) {
        const card = document.createElement("div");
        card.classList.add("word-list-card");
        card.innerHTML = `
            <h2>${item.polish}</h2>
            <p>${item.ukrainian}</p>
        `;
        wordsList.appendChild(card);
    });
}
displayWords(words);
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    const filteredWords = words.filter(function (item) {
            return item.polish
                .toLowerCase()
                .includes(searchText);
        });
    displayWords(filteredWords);
});

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;

        if (selectedCategory === "all") { displayWords(words);
        return;
        }
        const filteredWords =words.filter(function (item) { return item.category === selectedCategory;
            });
        displayWords(filteredWords);
    });

});