


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
const nextWord = document.getElementById("nextWord");
const favoriteWord = document.getElementById("favoriteWord");
const knowWord = document.getElementById("knowWord");

const progressCount = document.getElementById("progressCount");
const progressTotal = document.getElementById("progressTotal");
const progressFill = document.getElementById("progressFill");

if (
    word &&
    translation &&
    showTranslation &&
    nextWord &&
    favoriteWord &&
    knowWord
) {

    let currentWord = 0;

    let learned = JSON.parse(
        localStorage.getItem("learned")
    ) || [];

    let favorites = JSON.parse(
        localStorage.getItem("favorites")
    ) || [];


    // Кількість вивчених слів
    let learnedWords = learned.filter(function (learnedWord) {

        return words.some(function (wordItem) {
            return wordItem.polish === learnedWord;
        });

    }).length;


    // Загальна кількість слів
    if (progressTotal) {
        progressTotal.textContent = words.length;
    }


    // Початковий прогрес
    if (progressCount) {
        progressCount.textContent = learnedWords;
    }


    if (progressFill) {
        progressFill.style.width =
            (learnedWords / words.length) * 100 + "%";
    }


    // Початковий переклад прихований
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

        const selectedWord =
            words[currentWord];


        const alreadyFavorite =
            favorites.some(function (item) {

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

            console.log(
                "Це слово вже у вибраному"
            );

        }

    });

    knowWord.addEventListener("click", function () {

        const currentWordText =
            words[currentWord].polish;


        if (learned.includes(currentWordText)) {
            return;
        }


        learned.push(currentWordText);


        localStorage.setItem(
            "learned",
            JSON.stringify(learned)
        );


        learnedWords++;


        if (progressCount) {
            progressCount.textContent =
                learnedWords;
        }


        if (progressFill) {

            progressFill.style.width =
                (learnedWords / words.length) * 100 + "%";

        }

    });

}

const plmatCategories =
    document.querySelectorAll(".plmat-category");

const topicsList =
    document.getElementById("topicsList");

const topicsTitle =
    document.getElementById("topicsTitle");


// Перевіряємо, чи існує блок PLMAT
if (
    plmatCategories.length > 0 &&
    topicsList &&
    topicsTitle &&
    typeof topics !== "undefined"
) {

    function showCategoryTopics(category) {

        const filteredTopics =
            topics.filter(function (topic) {

                return topic.category === category;

            });


        topicsList.innerHTML = "";


        filteredTopics.forEach(function (topic) {

            const topicCard =
                document.createElement("div");

            topicCard.classList.add(
                "topic-card"
            );


            topicCard.innerHTML = `
                <div class="topic-icon">
                    ${topic.icon}
                </div>

                <h3>
                    ${topic.title}
                </h3>

                <p>
                    ${topic.description}
                </p>

                <button class="open-topic">
                    Відкрити
                </button>
            `;


            topicsList.appendChild(topicCard);


            const openButton =
                topicCard.querySelector(
                    ".open-topic"
                );


            openButton.addEventListener(
                "click",
                function () {

                    openTopic(topic);

                }
            );

        });

    }

    plmatCategories.forEach(
        function (categoryCard) {

            const button =
                categoryCard.querySelector(
                    "button"
                );


            button.addEventListener(
                "click",
                function () {

                    const category =
                        categoryCard.dataset.category;


                    showCategoryTopics(
                        category
                    );


                    topicsTitle.textContent =
                        categoryCard.querySelector(
                            "h3"
                        ).textContent;


                    topicsList.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        }
    );

    function openTopic(topic) {

        topicsTitle.textContent =
            topic.title;


        topicsList.innerHTML = `

            <article class="topic-details">

                <button class="back-to-topics">
                    ← Назад до тем
                </button>


                <div class="topic-details-icon">
                    ${topic.icon}
                </div>


                <h2>
                    ${topic.title}
                </h2>


                <p class="topic-description">
                    ${topic.description}
                </p>


                <section>

                    <h3>
                        Що потрібно зробити?
                    </h3>

                    <ol>

                        ${topic.steps.map(
                            function (step) {

                                return `
                                    <li>
                                        ${step}
                                    </li>
                                `;

                            }
                        ).join("")}

                    </ol>

                </section>


                <section>

                    <h3>
                        Необхідні документи
                    </h3>

                    <ul>

                        ${topic.documents.map(
                            function (document) {

                                return `
                                    <li>
                                        ${document}
                                    </li>
                                `;

                            }
                        ).join("")}

                    </ul>

                </section>


                <section>

                    <h3>
                        Куди звернутися?
                    </h3>

                    <ul>

                        ${topic.whereToGo.map(
                            function (place) {

                                return `
                                    <li>
                                        ${place}
                                    </li>
                                `;

                            }
                        ).join("")}

                    </ul>

                </section>


                <section>

                    <h3>
                        💬 Що сказати польською?
                    </h3>


                    ${topic.polishPhrases.map(
                        function (phrase) {

                            return `
                                <div class="phrase">

                                    <strong>
                                        ${phrase.polish}
                                    </strong>
                                    <span>
                                        ${phrase.ukrainian}
                                    </span>
                                </div>
                            `;
                        }
                    ).join("")}
                </section>
                <section class="topic-source">
                    <h3>
                        🔗 Офіційне джерело
                    </h3>
                    <p>
                        Остання перевірка:
                        ${topic.source?.checkedAt || "Не перевірено"}
                    </p>
                    ${
                        topic.source?.url
                        ? `
                            <a
                                href="${topic.source.url}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Перейти до офіційного джерела
                            </a>
                        `
                        : `
                            <span>
                                Офіційне джерело ще не додано.
                            </span>   `
                    }
                </section>
            </article>
        `;
        const backButton =
            document.querySelector(
                ".back-to-topics"
            );
        backButton.addEventListener(
            "click",
            function () {
                showCategoryTopics(
                    topic.category
                );
                const categoryCard =
                    document.querySelector(
                        `.plmat-category[data-category="${topic.category}"]`
                    );
                if (categoryCard) {
                    topicsTitle.textContent =
                        categoryCard.querySelector(
                            "h3"
                        ).textContent;
                }
            }
        );
    }

}