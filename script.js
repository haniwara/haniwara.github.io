document.addEventListener("DOMContentLoaded", () => {
    const languageButtons = document.querySelectorAll("[data-lang]");
    const languageBlocks = {
        en: document.querySelectorAll(".lang-en"),
        jp: document.querySelectorAll(".lang-jp"),
    };

    function setLanguage(language) {
        const isJapanese = language === "jp";

        document.documentElement.lang = isJapanese ? "ja" : "en";

        languageBlocks.en.forEach((element) => {
            element.style.display = isJapanese ? "none" : "inline";
        });

        languageBlocks.jp.forEach((element) => {
            element.style.display = isJapanese ? "inline" : "none";
        });

        languageButtons.forEach((button) => {
            const isActive = button.dataset.lang === language;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage("jp");
});
