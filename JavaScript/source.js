const officialSources = {

    pesel: {
        name: "Gov.pl — Numer PESEL",
        url: "https://www.gov.pl/web/gov/uzyskaj-numer-pesel-oraz-profil-zaufany--usluga-dla-obywateli-ukrainy",
        checkedAt: "2026-08"
    },
    peselUkr: {
        name: "Gov.pl — PESEL dla obywateli Ukrainy",
        url: "https://www.gov.pl/web/gov/uzyskaj-numer-pesel-oraz-profil-zaufany--usluga-dla-obywateli-ukrainy",
        checkedAt: "2026-08"
    },
    kartaPobytu: {
        name: "MOS — Karta pobytu",
        url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/dokumenty/dokumenty-op3/karta-pobytu/",
        checkedAt: "2026-08"
    },
    passport: {
        name: "Gov.pl — Dokumenty dla obywateli Ukrainy",
        url: "https://www.gov.pl/web/udsc/dokumenty-podrozne",
        checkedAt: "2026-08"
    },
    lostDocument: {
        name: "Gov.pl — Utrata dokumentu",
        url: "https://www.gov.pl/web/gov/zastrzez-utracony-dokument-tozsamosci",
        checkedAt: "2026-08"
    },
    personalData: {
        name: "MOS — Wymiana karty pobytu",
        url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/dokumenty/dokumenty-op3/karta-pobytu/wymiana-dokumentu/",
        checkedAt: "2026-08"
    },
    addressChange: {
        name: "Gov.pl — Zmiana danych",
        url: "https://www.gov.pl/web/gov/zmien-dane-w-rejestrze-pesel",
        checkedAt: "2026-08"
    },
    meldunek: {
        name: "Gov.pl — Zameldowanie",
        url: "https://www.gov.pl/web/gov/zamelduj-sie-na-pobyt-staly",
        checkedAt: "2026-08"
    },
    profilZaufany: {
        name: "Gov.pl — Profil Zaufany dla obywateli Ukrainy",
        url: "https://www.gov.pl/web/gov/uzyskaj-numer-pesel-oraz-profil-zaufany--usluga-dla-obywateli-ukrainy",
        checkedAt: "2026-08"
    },

    employmentContract: {
        name: "Państwowa Inspekcja Pracy — Umowa o pracę",
        url: "https://www.pip.gov.pl/dla-pracownikow/niezbednik-pracownika/formy-zatrudnienia-oraz-podstawowe-prawa-i-obowiazki",
        checkedAt: "2026-08"
    },
    contractMandate: {
        name: "Państwowa Inspekcja Pracy — Umowa zlecenie",
        url: "https://www.pip.gov.pl/dla-pracownikow/niezbednik-pracownika/formy-zatrudnienia-oraz-podstawowe-prawa-i-obowiazki",
        checkedAt: "2026-08"
    },
    jobSearch: {
        name: "Praca.gov.pl — Oferty pracy",
        url: "https://oferty.praca.gov.pl/",
        checkedAt: "2026-08"
    },
    salary: {
        name: "Państwowa Inspekcja Pracy — Wynagrodzenie",
        url: "https://www.pip.gov.pl/",
        checkedAt: "2026-08"
    },
    dismissal: {
        name: "Państwowa Inspekcja Pracy — Rozwiązanie umowy",
        url: "https://www.pip.gov.pl/dla-pracownikow/niezbednik-pracownika/formy-zatrudnienia-oraz-podstawowe-prawa-i-obowiazki",
        checkedAt: "2026-08"
    },
    pit: {
        name: "podatki.gov.pl — PIT",
        url: "https://www.podatki.gov.pl/podatki-osobiste/pit/",
        checkedAt: "2026-08"
    },
    employeeRights: {
        name: "Państwowa Inspekcja Pracy — Prawa pracownika",
        url: "https://www.pip.gov.pl/dla-pracownikow/niezbednik-pracownika/formy-zatrudnienia-oraz-podstawowe-prawa-i-obowiazki",
        checkedAt: "2026-08"
    },

    apartmentRental: {
        name: "Gov.pl — Informacje dla cudzoziemców",
        url: "https://www.gov.pl/web/udsc",
        checkedAt: "2026-08"
    },
    rentalContract: {
        name: "Gov.pl — Najem mieszkania",
        url: "https://www.gov.pl/web/gov",
        checkedAt: "2026-08"
    },
    housingMeldunek: {
        name: "Gov.pl — Zameldowanie",
        url: "https://www.gov.pl/web/gov/zamelduj-sie-na-pobyt-staly",
        checkedAt: "2026-08"
    },
    deposit: {
        name: "Gov.pl — Najem lokalu",
        url: "https://www.gov.pl/web/gov",
        checkedAt: "2026-08"
    },
    utilities: {
        name: "Gov.pl — Informacje dla obywateli",
        url: "https://www.gov.pl/",
        checkedAt: "2026-08"
    },
    landlordProblems: {
        name: "Gov.pl — Informacje dla obywateli",
        url: "https://www.gov.pl/",
        checkedAt: "2026-08"
    },

    nfz: {
        name: "Narodowy Fundusz Zdrowia",
        url: "https://www.nfz.gov.pl/",
        checkedAt: "2026-08"
    },
    doctor: {
        name: "Pacjent.gov.pl — Opieka zdrowotna",
        url: "https://pacjent.gov.pl/",
        checkedAt: "2026-08"
    },
    appointment: {
        name: "Pacjent.gov.pl — Znajdź placówkę",
        url: "https://pacjent.gov.pl/",
        checkedAt: "2026-08"
    },
    prescription: {
        name: "Pacjent.gov.pl — E-recepta",
        url: "https://pacjent.gov.pl/e-recepta",
        checkedAt: "2026-08"
    },
    nightCare: {
        name: "Pacjent.gov.pl — Nocna i świąteczna opieka zdrowotna",
        url: "https://pacjent.gov.pl/nocna-i-swiateczna-opieka-zdrowotna",
        checkedAt: "2026-08"
    },
    emergency: {
        name: "Pacjent.gov.pl — Pomoc w nagłym przypadku",
        url: "https://pacjent.gov.pl/nagle-zachorowanie",
        checkedAt: "2026-08"
    },

    school: {
        name: "Gov.pl — Edukacja",
        url: "https://www.gov.pl/web/edukacja",
        checkedAt: "2026-08"
    },
    technikum: {
        name: "Gov.pl — Szkoły ponadpodstawowe",
        url: "https://www.gov.pl/web/edukacja",
        checkedAt: "2026-08"
    },
    university: {
        name: "Study in Poland — Studia",
        url: "https://studia.gov.pl/",
        checkedAt: "2026-08"
    },
    studentDocuments: {
        name: "Study in Poland — Informacje dla studentów",
        url: "https://studia.gov.pl/",
        checkedAt: "2026-08"
    },
    scholarships: {
        name: "Study in Poland — Stypendia",
        url: "https://studia.gov.pl/studia/stypendia/",
        checkedAt: "2026-08"
    },
    recognitionEducation: {
        name: "NAWA — Uznawalność wykształcenia",
        url: "https://www.nawa.gov.pl/uznawalnosc",
        checkedAt: "2026-08"
    },

    officePhrases: {
        name: "Gov.pl — Usługi dla obywateli",
        url: "https://www.gov.pl/web/gov",
        checkedAt: "2026-08"
    },
    doctorPhrases: {
        name: "Pacjent.gov.pl",
        url: "https://pacjent.gov.pl/",
        checkedAt: "2026-08"
    },
    workPhrases: {
        name: "Państwowa Inspekcja Pracy",
        url: "https://www.pip.gov.pl/",
        checkedAt: "2026-08"
    },
    policePhrases: {
        name: "Policja — Oficjalny portal",
        url: "https://www.policja.pl/",
        checkedAt: "2026-08"
    },
    shopPhrases: {
        name: "Gov.pl — Informacje dla konsumentów",
        url: "https://www.gov.pl/web/uokik",
        checkedAt: "2026-08"
    },
    officialLetters: {
        name: "Gov.pl — Usługi dla obywateli",
        url: "https://www.gov.pl/web/gov",
        checkedAt: "2026-08"
    }
};