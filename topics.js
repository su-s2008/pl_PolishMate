

const topics = [
    {
    id: "pesel",
    category: "documents",
    title: "PESEL",
    icon: "📄",
    description:
        "PESEL — це 11-значний ідентифікаційний номер, який використовується в Польщі. Для іноземців спосіб його отримання залежить від ситуації.",
    keywords: [
        "pesel",
        "номер pesel",
        "ідентифікаційний номер",
        "номер",
        "pesel ukr",
        "ukr"
    ],
    steps: [
        "Перевір, чи отримуєш PESEL автоматично через meldunek або чи тобі потрібно подати заяву.",
        "Підготуй документ, який підтверджує твою особу та дані.",
        "Заповни заяву на отримання номера PESEL.",
        "Подай заяву у відповідному urzędzie gminy."
    ],
    documents: [
        "Заява на отримання номера PESEL.",
        "Документ, який підтверджує особу та дані, зазначені в заяві."
    ],
    whereToGo: [
        "Urząd gminy."
    ],
    polishPhrases: [
        {
            polish: "Chciałbym uzyskać numer PESEL.",
            ukrainian: "Я хотів би отримати номер PESEL."
        },
        {
            polish: "Chciałbym złożyć wniosek o nadanie numeru PESEL.",
            ukrainian: "Я хотів би подати заяву на отримання номера PESEL."
        }
    ],
    source: {
        name: "Gov.pl — Uzyskaj numer PESEL – usługa dla cudzoziemców",
        url: "https://www.gov.pl/web/gov/uzyskaj-numer-pesel--usluga-dla-cudzoziemcow-ua",
        checkedAt: "16.09.2026"
    }
},
{
    id: "pesel-ukr",
    category: "documents",
    title: "PESEL UKR",
    icon: "📄",
    description:
        "Інформація про PESEL зі статусом UKR та пов'язані з ним правила для громадян України.",
    keywords: [
        "pesel ukr",
        "ukr",
        "статус ukr",
        "українці",
        "тимчасовий захист"
    ],
    steps: [
        "Перевір, чи маєш актуальний статус UKR.",
        "Перевір, чи твої персональні дані та документ посвідчення особи актуальні.",
        "Якщо твою особу потрібно підтвердити документом, звернися до органу гміни.",
        "Перед поданням або зміною даних перевір актуальні вимоги на офіційному сайті."
    ],
    documents: [
        "Документ, що посвідчує особу.",
        "Інші документи залежно від конкретної ситуації."
    ],
    whereToGo: [
        "Urząd gminy — у випадках, коли потрібно підтвердити або оновити дані."
    ],
    polishPhrases: [
        {
            polish: "Chciałbym sprawdzić mój status UKR.",
            ukrainian: "Я хотів би перевірити мій статус UKR."
        },
        {
            polish: "Chciałbym potwierdzić swoją tożsamość.",
            ukrainian: "Я хотів би підтвердити свою особу."
        }
    ],
    source: {
        name: "Urząd do Spraw Cudzoziemców / Urząd Wojewódzki",
        url: "https://www.gov.pl/web/udsc/wazna-informacja-dla-obywateli-ukrainy-posiadajacych-numer-pesel-ze-statusem-ukr",
        checkedAt: "16.09.2026"
    }
},

    {
        id: "meldunek",
        category: "documents",
        title: "Meldunek",
        icon: "🏠",
        description: "Інформація про реєстрацію місця проживання.",
        keywords: [
            "meldunek",
            "реєстрація",
            "адреса",
            "місце проживання"
        ],
        steps: [],
        documents: [],
        whereToGo: [],
        polishPhrases: [],
        source: {
            name: "",
            url: "",
            checkedAt: null
        }
    },

    {
        id: "umowa-o-prace",
        category: "work",
        title: "Umowa o pracę",
        icon: "💼",
        description: "Основна інформація про трудовий договір.",
        keywords: [
            "umowa o pracę",
            "робота",
            "договір",
            "працевлаштування"
        ],
        steps: [],
        documents: [],
        whereToGo: [],
        polishPhrases: [],
        source: {
            name: "",
            url: "",
            checkedAt: null
        }
    },

    {
        id: "wynagrodzenie",
        category: "work",
        title: "Зарплата",
        icon: "💰",
        description: "Корисна інформація про зарплату та виплати.",
        keywords: [
            "зарплата",
            "wynagrodzenie",
            "виплата",
            "гроші"
        ],
        steps: [],
        documents: [],
        whereToGo: [],
        polishPhrases: [],
        source: {
            name: "",
            url: "",
            checkedAt: null
        }
    },

    {
        id: "lekarz",
        category: "medicine",
        title: "Як знайти лікаря",
        icon: "🏥",
        description: "Що робити, якщо потрібно звернутися до лікаря.",
        keywords: [
            "лікар",
            "lekarz",
            "лікарня",
            "медицина",
            "NFZ"
        ],
        steps: [],
        documents: [],
        whereToGo: [],
        polishPhrases: [],
        source: {
            name: "",
            url: "",
            checkedAt: null
        }
    },

    {
        id: "szkola",
        category: "education",
        title: "Школа",
        icon: "🎓",
        description: "Корисна інформація про навчання в Польщі.",
        keywords: [
            "школа",
            "szkoła",
            "technikum",
            "навчання",
            "освіта"
        ],
        steps: [],
        documents: [],
        whereToGo: [],
        polishPhrases: [],
        source: {
            name: "",
            url: "",
            checkedAt: null
        }
    },

    {
        id: "urzad",
        category: "polish",
        title: "Фрази для urzędu",
        icon: "💬",
        description: "Корисні польські фрази для спілкування в державній установі.",
        keywords: [
            "urząd",
            "urzędnik",
            "державна установа",
            "документи",
            "польська"
        ],
        steps: [],
        documents: [],
        whereToGo: [],
        polishPhrases: [],
        source: {
            name: "",
            url: "",
            checkedAt: null
        }
    },
    {
    id: "pesel",
    category: "documents",
    title: "PESEL",
    icon: "📄",
    description: "Інформація про номер PESEL у Польщі.",
    keywords: [
        "pesel",
        "номер",
        "ідентифікаційний номер"
    ],
    steps: [
        "Тут будуть перевірені офіційні кроки."
    ],
    documents: [
        "Тут будуть вказані перевірені документи."
    ],
    whereToGo: [
        "Тут буде вказано, куди звертатися."
    ],
    polishPhrases: [
        {
            polish: "Chciałbym uzyskać numer PESEL.",
            ukrainian: "Я хотів би отримати номер PESEL."
        }
    ],
    source: {
        name: "",
        url: "",
        checkedAt: null
    }
}
];

