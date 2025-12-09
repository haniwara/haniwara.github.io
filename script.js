// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    
    // 現在の言語状態 (初期値: English)
    let currentLang = 'en';

    toggleBtn.addEventListener('click', () => {
        // 言語を切り替え
        currentLang = currentLang === 'en' ? 'jp' : 'en';
        updateLanguage();
    });

    function updateLanguage() {
        const enElements = document.querySelectorAll('.lang-en');
        const jpElements = document.querySelectorAll('.lang-jp');

        if (currentLang === 'jp') {
            // 日本語モード
            enElements.forEach(el => el.style.display = 'none');
            jpElements.forEach(el => el.style.display = 'inline');
            langLabel.textContent = 'EN'; // ボタンの文字は「英語に戻す」という意味でEN
        } else {
            // 英語モード
            enElements.forEach(el => el.style.display = 'inline');
            jpElements.forEach(el => el.style.display = 'none');
            langLabel.textContent = 'JP'; // ボタンの文字は「日本語にする」という意味でJP
        }
    }
});