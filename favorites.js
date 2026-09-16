const favoritesList = document.getElementById("favoritesList");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
    favoritesList.innerHTML = "";
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-favorites">
                <h2>Тут поки немає слів ⭐</h2>
                <p>Додай слова у вибране, і вони з'являться тут.</p>
                <a href="index.html">Перейти до навчання</a>
            </div>
        `;
        return;
    }

    favorites.forEach(function(item, index) {
        const card = document.createElement("div");

        card.classList.add("favorite-card");
        card.innerHTML = `
            <div>
                <h2>${item.polish}</h2>
                <p>${item.ukrainian}</p>
            </div>
            <button class="remove-favorite" data-index="${index}">
                🗑️
            </button>
        `;
        const removeButton = card.querySelector(".remove-favorite");
        removeButton.addEventListener("click", function() {
            favorites.splice(index, 1);
            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );
            renderFavorites();
        });
        favoritesList.appendChild(card);
    });
}

renderFavorites();