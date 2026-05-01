document.addEventListener("DOMContentLoaded", () => {
    const publicPageBaseUrl = "https://haniwara.github.io/";
    const languageButtons = document.querySelectorAll("[data-lang]");
    const languageBlocks = {
        en: document.querySelectorAll(".lang-en"),
        ja: document.querySelectorAll(".lang-jp"),
    };

    function getInitialLanguage() {
        const params = new URLSearchParams(window.location.search);
        return params.get("lang") === "en" ? "en" : "ja";
    }

    function updatePageUrl(language) {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set("lang", language);

        try {
            window.history.replaceState(null, "", currentUrl.toString());
        } catch {
            // Some local file environments can block history updates.
        }

        const publicUrl = `${publicPageBaseUrl}?lang=${language}`;
        const canonical = document.querySelector('link[rel="canonical"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');

        if (canonical) {
            canonical.setAttribute("href", publicUrl);
        }

        if (ogUrl) {
            ogUrl.setAttribute("content", publicUrl);
        }
    }

    function setLanguage(language) {
        const normalizedLanguage = language === "en" ? "en" : "ja";
        const isJapanese = normalizedLanguage === "ja";

        document.documentElement.lang = isJapanese ? "ja" : "en";

        languageBlocks.en.forEach((element) => {
            element.style.display = isJapanese ? "none" : "inline";
        });

        languageBlocks.ja.forEach((element) => {
            element.style.display = isJapanese ? "inline" : "none";
        });

        languageButtons.forEach((button) => {
            const isActive = button.dataset.lang === normalizedLanguage;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        updatePageUrl(normalizedLanguage);
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    setLanguage(getInitialLanguage());
});
