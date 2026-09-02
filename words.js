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


const searchInput =
    document.getElementById("searchInput");
const wordsList =
    document.getElementById("wordsList");
function displayWords(wordsToDisplay) {

    wordsList.innerHTML = "";

    wordsToDisplay.forEach(function (item) {
        const card =
            document.createElement("div");
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
    const searchText =
        searchInput.value.toLowerCase();

    const filteredWords =
        words.filter(function (item) {
            return item.polish
                .toLowerCase()
                .includes(searchText);
        });
    displayWords(filteredWords);

});