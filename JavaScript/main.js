
const plmatCategories = document.querySelectorAll(".plmat-category");
const topicsList = document.getElementById("topicsList");
const topicsTitle = document.getElementById("topicsTitle");


// Перевіряємо, чи всі необхідні елементи існують
if (
    plmatCategories.length > 0 &&
    topicsList &&
    topicsTitle &&
    typeof topics !== "undefined"
) {

    plmatCategories.forEach(function (categoryElement) {

        const button = categoryElement.querySelector("button");

        if (!button) {
            return;
        }

        button.addEventListener("click", function () {

            const categoryName =
                categoryElement.dataset.category;

            const categoryTopics = topics.filter(function (topic) {
                return topic.category === categoryName;
            });

            showTopics(categoryTopics, categoryName);
        });
    });

    function showTopics(categoryTopics, categoryName) {

        topicsList.innerHTML = "";

        if (categoryTopics.length === 0) {

            topicsTitle.textContent = "Нічого не знайдено";

            topicsList.innerHTML = `
                <div class="topic-details">
                    <h2>У цій категорії поки немає тем</h2>
                    <p>
                        Спробуй обрати іншу категорію.
                    </p>
                </div>
            `;

            return;
        }

        const categoryNames = {
            documents: "Документи",
            work: "Робота",
            housing: "Житло",
            medicine: "Медицина",
            education: "Освіта",
            polish: "Польська"
        };

        topicsTitle.textContent =
            categoryNames[categoryName] || "Теми";

        categoryTopics.forEach(function (topic) {

            const topicCard = document.createElement("div");

            topicCard.classList.add("topic-card");

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
                topicCard.querySelector(".open-topic");

            openButton.addEventListener("click", function () {

                openTopic(topic);

            });

        });

    }
    function openTopic(topic) {

        topicsTitle.textContent = topic.title;

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

                        ${topic.steps.map(function (step) {

                            return `
                                <li>
                                    ${step}
                                </li>
                            `;

                        }).join("")}

                    </ol>

                </section>


                <section>

                    <h3>
                        Необхідні документи
                    </h3>

                    <ul>

                        ${topic.documents.map(function (document) {

                            return `
                                <li>
                                    ${document}
                                </li>
                            `;

                        }).join("")}

                    </ul>

                </section>


                <section>

                    <h3>
                        Куди звернутися?
                    </h3>

                    <ul>

                        ${topic.whereToGo.map(function (place) {

                            return `
                                <li>
                                    ${place}
                                </li>
                            `;

                        }).join("")}

                    </ul>

                </section>


                <section>

                    <h3>
                        💬 Що сказати польською?
                    </h3>

                    <div class="phrases-list">

                        ${topic.polishPhrases.map(function (phrase) {

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

                        }).join("")}

                    </div>

                </section>

            </article>
        `;
        const backButton =
            document.querySelector(".back-to-topics");


        if (backButton) {

            backButton.addEventListener("click", function () {
 сторінки
                const currentCategory =
                    topic.category;

                const categoryTopics =
                    topics.filter(function (item) {

                        return item.category === currentCategory;

                    });

                showTopics(
                    categoryTopics,
                    currentCategory
                );

            });

        }

    }

    const plmatSearch =
        document.getElementById("plmatSearch");


    if (plmatSearch) {

        plmatSearch.addEventListener("input", function () {

            const searchText =
                plmatSearch.value
                    .toLowerCase()
                    .trim();
            if (searchText === "") {

                topicsList.innerHTML = "";

                topicsTitle.textContent =
                    "Оберіть категорію";

                return;

            }
            const results =
                topics.filter(function (topic) {

                    const text = (

                        topic.title +
                        " " +
                        topic.description +
                        " " +
                        (topic.keywords || []).join(" ")

                    ).toLowerCase();


                    return text.includes(searchText);

                });


            topicsTitle.textContent =
                "Результати пошуку";


            topicsList.innerHTML = "";
            if (results.length === 0) {

                topicsList.innerHTML = `

                    <div class="topic-details">

                        <h2>
                            Нічого не знайдено
                        </h2>

                        <p>
                            Спробуй інше слово або обери категорію вище.
                        </p>

                    </div>

                `;

                return;

            }
            results.forEach(function (topic) {

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
                topicsList.appendChild(
                    topicCard
                );
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
        });
    }
}