const favoritesList =
    document.getElementById("favoritesList");

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
function displayFavorites() {
    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-favorites">
                <h2>Тут поки порожньо 😢</h2>
                <p>
                    Додай своє перше слово у вибране!
                </p>
                <a href="index.html">
                    Почати навчання
                </a>
            </div>
        `;
        return;
    }


    favorites.forEach(function (item, index) {
        const card = document.createElement("div");
        card.classList.add("favorite-card");
        card.innerHTML = `
            <div>
                <h2>${item.polish}</h2>
                <p>${item.ukrainian}</p>
            </div>
            <button onclick="removeFavorite(${index})">
                ❌
            </button>
        `;

        favoritesList.appendChild(card);
    });

}

function removeFavorite(index) {
    favorites.splice(index, 1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

displayFavorites();