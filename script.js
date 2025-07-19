document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. Script is starting.');

    // --- DOM ELEMENTS ---
    const screens = document.querySelectorAll('.screen');
    console.log('Screens found:', screens.length);
    const startScreen = document.getElementById('start-screen'); // Yeni başlangıç ekranı
    if (!startScreen) console.error('startScreen elementi bulunamadı!');
    const gameScreen = document.getElementById('game-screen');
    if (!gameScreen) console.error('gameScreen elementi bulunamadı!');
    const settingsScreen = document.getElementById('settings-screen');
    if (!settingsScreen) console.error('settingsScreen elementi bulunamadı!');
    const privacyPolicyScreen = document.getElementById('privacy-policy-screen'); // Yeni gizlilik politikası ekranı
    if (!privacyPolicyScreen) console.error('privacyPolicyScreen elementi bulunamadı!');

    const startLevelBtn = document.getElementById('start-level-btn'); // Yeni başlangıç butonu
    if (!startLevelBtn) console.error('startLevelBtn elementi bulunamadı!');
    const currentLevelDisplay = document.getElementById('current-level-display'); // Mevcut seviye göstergesi
    if (!currentLevelDisplay) console.error('currentLevelDisplay elementi bulunamadı!');
    const settingsIcon = document.getElementById('settings-icon');
    if (!settingsIcon) console.error('settingsIcon elementi bulunamadı!');
    const backBtns = document.querySelectorAll('.back-btn'); // Tüm geri butonlarını seçer
    console.log('backBtns bulunan sayısı:', backBtns.length);
    
    const timerDisplay = document.querySelector('#timer span');
    if (!timerDisplay) console.error('timerDisplay elementi bulunamadı!');
    const currentScoreDisplay = document.getElementById('current-score');
    if (!currentScoreDisplay) console.error('currentScoreDisplay elementi bulunamadı!');
    const targetScoreDisplay = document.getElementById('target-score');
    if (!targetScoreDisplay) console.error('targetScoreDisplay elementi bulunamadı!');
    const foundWordsList = document.getElementById('found-words-list');
    if (!foundWordsList) console.error('foundWordsList elementi bulunamadı!');
    const currentWordDisplay = document.getElementById('current-word-display');
    if (!currentWordDisplay) console.error('currentWordDisplay elementi bulunamadı!');
    const letterWheel = document.getElementById('letter-wheel');
    if (!letterWheel) console.error('letterWheel elementi bulunamadı!');
    const lineSvg = document.getElementById('line-svg');
    if (!lineSvg) console.error('lineSvg elementi bulunamadı!');
    const shuffleBtn = document.getElementById('shuffle-btn');
    if (!shuffleBtn) console.error('shuffleBtn elementi bulunamadı!');

    const exitGameBtn = document.getElementById('exit-game-btn');
    if (!exitGameBtn) console.error('exitGameBtn elementi bulunamadı!');

    const themeToggleInput = document.getElementById('theme-toggle-btn');
    if (!themeToggleInput) console.error('themeToggleInput elementi bulunamadı!');
    const soundToggleInput = document.getElementById('sound-toggle-btn');
    if (!soundToggleInput) console.error('soundToggleInput elementi bulunamadı!');
    
    const modalOverlay = document.getElementById('modal-overlay');
    if (!modalOverlay) console.error('modalOverlay elementi bulunamadı!');
    const winModal = document.getElementById('win-modal');
    if (!winModal) console.error('winModal elementi bulunamadı!');
    const loseModal = document.getElementById('lose-modal');
    if (!loseModal) console.error('loseModal elementi bulunamadı!');
    const nextLevelBtn = document.getElementById('next-level-btn');
    if (!nextLevelBtn) console.error('nextLevelBtn elementi bulunamadı!');
    const retryBtn = document.getElementById('retry-btn');
    if (!retryBtn) console.error('retryBtn elementi bulunamadı!');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    if (!backToMenuBtn) console.error('back-to-menu-btn elementi bulunamadı!');

    const privacyPolicyLink = document.getElementById('privacy-policy-link'); // Gizlilik Politikası bağlantısı
    if (!privacyPolicyLink) console.error('privacyPolicyLink elementi bulunamadı!');
    const privacyPolicyBackBtn = document.getElementById('privacy-policy-back-btn'); // Gizlilik Politikası geri butonu
    if (!privacyPolicyBackBtn) console.error('privacyPolicyBackBtn elementi bulunamadı!');

    const clearProgressBtn = document.getElementById('clear-progress-btn'); // Yeni "Tüm İ ilerlemeyi Sil" butonu
    if (!clearProgressBtn) console.error('clearProgressBtn elementi bulunamadı!');
    const confirmModal = document.getElementById('confirm-modal'); // Onay modalı
    if (!confirmModal) console.error('confirmModal elementi bulunamadı!');
    const confirmYesBtn = document.getElementById('confirm-yes-btn'); // Onay modalı Evet butonu
    if (!confirmYesBtn) console.error('confirmYesBtn elementi bulunamadı!');
    const confirmNoBtn = document.getElementById('confirm-no-btn'); // Onay modalı İptal butonu
    if (!confirmNoBtn) console.error('confirmNoBtn elementi bulunamadı!');


    // --- GLOBAL WORD POOL ---
    const allWords = [
    "ABE", "ABİ", "ABU", "ACE", "ACI", "AÇI", "ADA", "ADİ", "AFİ", "AFT", "AGU", "AĞA", "AĞI", "AHA", "AHİ", "AHU", "AİT", "AKA", "AKI", "AKS", "AKÜ", 
"ALA", "ALG", "ALİ", "ALO", "ALP", "ALT", "AMA", "ANA", "ANI", "ANİ", "ANT", "ARA", "ARI", "ARİ", "ARK", "ARP", "ARŞ", "ART", "ARZ", "ASA", "ASI", 
"ASİ", "ASK", "AST", "AŞI", "AŞK", "ATA", "ATE", "ATİ", "AUT", "AYA", "AYI", "AYN", "AZA", "AZI", "ABO", "ATV", "BAÇ", "BAD", "BAĞ", "BAL", "BAN", 
    ].filter((value, index, self) => self.indexOf(value) === index);

    // --- GAME DATA ---
    const levels = [
        {
            letters: "ALP",
            targetScore: 60,
            initialTime: 90,
            backgroundImage: 'assets/background (1).webp'
        },
        {
            letters: "TİA",
            targetScore: 60,
            initialTime: 90,
            backgroundImage: 'assets/background (2).webp'
        },
        {
            letters: "SKA",
            targetScore: 60,
            initialTime: 90,
            backgroundImage: 'assets/background (3).webp'
        },
        {
            letters: "AKLİ",
            targetScore: 80,
            initialTime: 90,
            backgroundImage: 'assets/background (4).webp'
        },
        {
        letters: "AMTİ",
        targetScore: 85,
        initialTime: 90,
        backgroundImage: "assets/background (5).webp"
    },
    {
        letters: "ŞKIA",
        targetScore: 90,
        initialTime: 90,
        backgroundImage: "assets/background (6).webp"
    },
    {
        letters: "İKTA",
        targetScore: 100,
        initialTime: 90,
        backgroundImage: "assets/background (7).webp"
    },
    {
        letters: "MİLA",
        targetScore: 150,
        initialTime: 90,
        backgroundImage: "assets/background (8).webp"
    },
    {
        letters: "AMNİ",
        targetScore: 200,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMSİ",
        targetScore: 250,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AMSTİ",
        targetScore: 300,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKTŞ",
        targetScore: 350,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLMİ",
        targetScore: 400,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKMTİ",
        targetScore: 450,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLTİ",
        targetScore: 500,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMTİ",
        targetScore: 550,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLSİ",
        targetScore: 600,
        initialTime: 70,
        backgroundImage: ""
    },
    {
        letters: "AKSTİ",
        targetScore: 650,
        initialTime: 70,
        backgroundImage: ""
    },
    {
        letters: "AKMSTİ",
        targetScore: 700,
        initialTime: 70,
        backgroundImage: ""
    },
    {
        letters: "AKLMTİ",
        targetScore: 750,
        initialTime: 85,
        backgroundImage: ""
    },
      {
        letters: "AKLSTİ",
        targetScore: 800,
        initialTime: 90,
        backgroundImage: ""
    },
     {
        letters: "AKLMSİ",
        targetScore: 850,
        initialTime: 90,
        backgroundImage: ""
    },
  {
        letters: "AELMTİ",
        targetScore: 900,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "AIKSTİ",
        targetScore: 950,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "ALMSTİ",
        targetScore: 1000,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKNŞ",
        targetScore: 1050,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALSTİ",
        targetScore: 1100,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ANSTİ",
        targetScore: 1100,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMRİ",
        targetScore: 1150,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AMNSİ",
        targetScore: 1200,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AEKLT",
        targetScore: 1250,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "AEKST",
        targetScore: 1300,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AEKPS",
        targetScore: 1350,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AELTİ",
        targetScore: 1400,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKTİ",
        targetScore: 1450,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKSİ",
        targetScore: 1500,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLOT",
        targetScore: 1525,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "AIKLR",
        targetScore: 1550,
        initialTime: 90,
        backgroundImage: ""
    },
 {
        letters: "AIKLN",
        targetScore: 1575,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "AIKMŞ",
        targetScore: 1600,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "AIKPŞ",
        targetScore: 1650,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AMTİŞ",
        targetScore: 1675,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALORT",
        targetScore: 1700,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKPSTİ",
        targetScore: 1725,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLPSİ",
        targetScore: 1750,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLTŞ",
        targetScore: 1775,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKRTŞ",
        targetScore: 1800,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AEKLTİ",
        targetScore: 825,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLTİ",
        targetScore: 850,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKRSTİ",
        targetScore: 875,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AEKLSİ",
        targetScore: 900,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLPTİ",
        targetScore: 925,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLSİ",
        targetScore: 950,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLMPİ",
        targetScore: 975,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLST",
        targetScore: 1000,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKRST",
        targetScore: 1025,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AMNSTİ",
        targetScore: 1050,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKSTİŞ",
        targetScore: 1075,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMNSİ",
        targetScore: 1100,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AELMSİ",
        targetScore: 1125,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLOTİ",
        targetScore: 1150,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLMNİ",
        targetScore: 1175,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMOTİ",
        targetScore: 1200,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKMTİŞ",
        targetScore: 1225,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKMNSTİ",
        targetScore: 1250,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLMNSİ",
        targetScore: 1275,
        initialTime: 90,
        backgroundImage: ""
    },
{
        letters: "AIKLRTİ",
        targetScore: 1325,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AEIKRTŞ",
        targetScore: 1350,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKMSTİŞ",
        targetScore: 1375,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLSTŞ",
        targetScore: 1400,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKRTİŞ",
        targetScore: 1425,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMOSTİ",
        targetScore: 1450,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLSTİŞ",
        targetScore: 1475,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLMTŞ",
        targetScore: 1500,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "ALMNOTİ",
        targetScore: 1525,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLMTUİ",
        targetScore: 1550,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKMRTİ",
        targetScore: 1575,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKMORTİ",
        targetScore: 1600,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKMNTİ",
        targetScore: 1625,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKNTİŞ",
        targetScore: 1650,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLPRSİ",
        targetScore: 1675,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLPSİ",
        targetScore: 1700,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLSİŞ",
        targetScore: 1725,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLNRT",
        targetScore: 1750,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKLNOT",
        targetScore: 1775,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKNRST",
        targetScore: 1800,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AKLPSTİ",
        targetScore: 1825,
        initialTime: 90,
        backgroundImage: ""
    },
    {
        letters: "AIKMSTİ",
        targetScore: 1850,
        initialTime: 90,
        backgroundImage:""
        }
    ];


    // --- GAME STATE ---
    let gameState = { currentLevelIndex: 0, unlockedLevels: 1, score: 0, timeLeft: 0, foundWords: [], gameInterval: null, isSoundOn: true, currentTheme: 'dark' }; // Default tema dark olarak ayarlandı

    // --- VARIABLES FOR LETTER WHEEL ---
    let isDragging = false;
    let selectedLetters = [];
    let letterElements = [];

    // --- HELPER FUNCTIONS ---
    // showScreen fonksiyonu güncellendi: artık bir callback fonksiyonu alıyor
    const showScreen = (screenId, onScreenShownCallback = null) => {
        console.log('Ekranı göstermeye çalışılıyor:', screenId);

        const currentActiveScreen = document.querySelector('.screen.active');
        const targetScreen = document.getElementById(screenId);

        if (currentActiveScreen && currentActiveScreen !== targetScreen) {
            // Mevcut aktif ekran için fade-out animasyonunu başlat
            currentActiveScreen.classList.remove('fade-in'); // Önceki fade-in'i temizle
            currentActiveScreen.classList.add('fade-out');
            currentActiveScreen.style.pointerEvents = 'none'; // Fade-out sırasında tıklamaları devre dışı bırak

            // Fade-out animasyonu bittiğinde ekranı gizle
            currentActiveScreen.addEventListener('animationend', function handleFadeOutEnd() {
                currentActiveScreen.classList.remove('active', 'fade-out');
                currentActiveScreen.style.display = 'none'; // Animasyon bittikten sonra gizle
                currentActiveScreen.style.pointerEvents = 'auto'; // pointer-events'i sıfırla
                currentActiveScreen.removeEventListener('animationend', handleFadeOutEnd); // Dinleyiciyi kaldır
                console.log(currentActiveScreen.id + ' fade-out animasyonu bitti ve gizlendi.');

                // Hedef ekranı göster (eğer henüz gösterilmediyse)
                if (targetScreen && !targetScreen.classList.contains('active')) {
                    targetScreen.classList.remove('fade-out'); // Önceki fade-out'u temizle
                    targetScreen.classList.add('active', 'fade-in');
                    targetScreen.style.display = 'flex'; // Animasyon için görünür yap
                    targetScreen.style.pointerEvents = 'auto'; // Tıklamaları etkinleştir
                    console.log(targetScreen.id + ' fade-in animasyonu başlatıldı.');

                    // Fade-in animasyonu bittiğinde callback'i çalıştır
                    targetScreen.addEventListener('animationend', function handleTargetFadeInEnd() {
                        if (onScreenShownCallback) {
                            onScreenShownCallback();
                        }
                        targetScreen.removeEventListener('animationend', handleTargetFadeInEnd);
                    }, { once: true });
                }
            }, { once: true }); // Dinleyicinin sadece bir kez çalışmasını sağla
            console.log(currentActiveScreen.id + ' fade-out animasyonu başlatıldı.');
        } else if (currentActiveScreen === targetScreen) {
            // Eğer aynı ekranı göstermeye çalışıyorsak, sadece aktif olduğundan emin ol
            targetScreen.classList.add('active');
            targetScreen.style.display = 'flex';
            targetScreen.classList.remove('fade-out', 'fade-in'); // Animasyon sınıflarını kaldır
            console.log(targetScreen.id + ' zaten aktif, animasyon yapılmadı.');
            if (onScreenShownCallback) { // Eğer aynı ekrana geçiş yapılıyorsa da callback'i çağır
                onScreenShownCallback();
            }
        } else {
            // Başlangıçta aktif ekran yoksa veya doğrudan yeni bir ekrana geçiliyorsa
            if (targetScreen) {
                targetScreen.classList.remove('fade-out'); // Önceki fade-out'u temizle
                targetScreen.classList.add('active', 'fade-in');
                targetScreen.style.display = 'flex'; // Animasyon için görünür yap
                targetScreen.style.pointerEvents = 'auto'; // Tıklamaları etkinleştir
                console.log(targetScreen.id + ' fade-in animasyonu başlatıldı.');

                // Fade-in animasyonu bittiğinde callback'i çalıştır
                targetScreen.addEventListener('animationend', function handleTargetFadeInEnd() {
                    if (onScreenShownCallback) {
                        onScreenShownCallback();
                    }
                    targetScreen.removeEventListener('animationend', handleTargetFadeInEnd);
                }, { once: true });
            } else {
                console.error('Hata: Hedef ekran bulunamadı:', screenId);
            }
        }

        // Diğer tüm ekranların gizli olduğundan emin ol (animasyonlu geçiş dışındakiler)
        screens.forEach(screen => {
            if (screen !== currentActiveScreen && screen !== targetScreen) {
                screen.classList.remove('active', 'fade-in', 'fade-out');
                screen.style.display = 'none';
                screen.style.pointerEvents = 'auto'; // pointer-events'i sıfırla
            }
        });

        window.scrollTo(0, 0);
    };


    const saveState = () => {
        const stateToSave = { currentLevelIndex: gameState.currentLevelIndex, isSoundOn: gameState.isSoundOn, currentTheme: gameState.currentTheme }; // unlockedLevels yerine currentLevelIndex kaydediyoruz
        localStorage.setItem('wordGameSave', JSON.stringify(stateToSave));
    };

    const loadState = () => {
        const savedState = JSON.parse(localStorage.getItem('wordGameSave'));
        if (savedState) {
            gameState.currentLevelIndex = savedState.currentLevelIndex === undefined ? 0 : savedState.currentLevelIndex; // Kaydedilen seviyeyi yüklüyoruz, undefined ise 0
            gameState.isSoundOn = savedState.isSoundOn === undefined ? true : savedState.isSoundOn;
            gameState.currentTheme = savedState.currentTheme || 'dark'; // Default tema dark olarak ayarlandı
        }
        applyTheme();
        updateToggleStates();
        updateStartScreenLevel(); // Başlangıç ekranındaki seviye numarasını güncelliyoruz
        console.log('Oyun durumu yüklendi:', gameState);
    };
    
    const applyTheme = () => { document.body.className = gameState.currentTheme === 'dark' ? 'dark-theme' : 'light-theme'; }; // light-theme sınıfı eklendi
    
    const updateToggleStates = () => {
        if (themeToggleInput) themeToggleInput.checked = gameState.currentTheme === 'dark';
        if (soundToggleInput) soundToggleInput.checked = gameState.isSoundOn;
    };

    const updateStartScreenLevel = () => {
        if (currentLevelDisplay) currentLevelDisplay.textContent = `Level ${gameState.currentLevelIndex + 1}`;
    };

    // Audio objects for sound effects
    const correctWordSound = new Audio('sounds/correct.mp3');
    const wrongWordSound = new Audio('sounds/wrong.mp3');
    const clickSound = new Audio('sounds/click.mp3'); // UI butonları için standart tıklama sesi
    const levelUpSound = new Audio('sounds/levelup.mp3');
    const gameOverSound = new Audio('sounds/yery.mp3');

    // Harf seçimi için özel sesler
    // Bu ses dosyalarını projenizin 'sounds' klasörüne eklemeyi unutmayın!
    const letterSelectSounds = [
        new Audio('sounds/letter_select_1.wav'), // İlk harf seçimi
        new Audio('sounds/letter_select_2.wav'), // İkinci harf seçimi
        new Audio('sounds/letter_select_3.wav'), // Üçüncü harf seçimi
        new Audio('sounds/letter_select_4.wav'), // Dördüncü harf seçimi
        new Audio('sounds/letter_select_5.wav'), // Beşinci harf seçimi
        new Audio('sounds/letter_select_6.wav'), // Altıncı harf seçimi
        new Audio('sounds/letter_select_7.wav')  // Yedinci harf seçimi (ve sonrası için fallback)
    ];

    const playSound = (sound) => {
        if (gameState.isSoundOn) {
            sound.currentTime = 0;
            sound.play().catch(e => console.error("Ses çalma hatası:", e));
        }
    };

    // --- GAME MECHANICS ---
    const startGame = (levelIndex) => {
        gameState.currentLevelIndex = levelIndex;
        const level = levels[levelIndex];
        gameState.score = 0;
        gameState.timeLeft = level.initialTime;
        gameState.foundWords = [];
        clearInterval(gameState.gameInterval);
        if (targetScoreDisplay) targetScoreDisplay.textContent = level.targetScore;
        if (currentScoreDisplay) currentScoreDisplay.textContent = '0';
        if (foundWordsList) foundWordsList.innerHTML = '';
        createLetterWheel(level.letters); // createLetterWheel burada çağrılıyor
        gameState.gameInterval = setInterval(updateTimer, 1000);
        updateTimer();
        // showScreen('game-screen'); // showScreen artık burada çağrılmıyor, startGame'i çağıran yerden yönetiliyor
        if (currentWordDisplay) {
            currentWordDisplay.textContent = ''; 
            currentWordDisplay.classList.remove('visible-word-display'); // Oyun başladığında gizli olduğundan emin ol
        }

        if (level.backgroundImage && gameScreen) {
            gameScreen.style.backgroundImage = `url('${level.backgroundImage}')`;
        } else if (gameScreen) {
            gameScreen.style.backgroundImage = 'none';
        }
        console.log('Oyun seviye için başlatıldı:', levelIndex);
    };

    const updateTimer = () => {
        gameState.timeLeft--;
        if (timerDisplay) timerDisplay.textContent = gameState.timeLeft;
        if (timerDisplay && timerDisplay.parentElement) {
            if (gameState.timeLeft <= 10) {
                timerDisplay.parentElement.style.color = 'var(--accent-color)';
            } else {
                timerDisplay.parentElement.style.color = 'var(--text-color)';
            }
        }
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.gameInterval);
            endGame(false);
        }
    };

    const createLetterWheel = (letters) => {
        letterElements.forEach(el => el.remove()); 
        letterElements = [];
        
        const numLetters = letters.length;
        const allLetters = letters;

        let positioningRadius = 100; // Varsayılan yarıçap

        // Harf sayısına göre yarıçapı ayarla ve uzaklığı artır
        if (numLetters <= 4) {
            positioningRadius = 90; // Az harf için daha küçük yarıçap, biraz daha dışarıda
        } else if (numLetters === 5) {
            positioningRadius = 100; // 5 harf için biraz daha büyük, biraz daha dışarıda
        } else {
            positioningRadius = 105; // 6 veya daha fazla harf için varsayılan, biraz daha dışarıda
        }

        if (!letterWheel) {
            console.error('Hata: letterWheel elementi bulunamadığı için harf çarkı oluşturulamadı.');
            return;
        }
        const wheelWidth = letterWheel.offsetWidth;
        const wheelHeight = letterWheel.offsetHeight;

        const wheelCenterX = wheelWidth / 2;
        const wheelCenterY = wheelHeight / 2;

        const angleStep = 360 / allLetters.length;

        // Harfleri görsel olarak ortalamak için başlangıç açısını hesapla
        // Tek sayıda harf için bir harfi doğrudan üste (-90 derece) yerleştir
        // Çift sayıda harf için ilk harfi iki "eksen" arasına ortala
        let initialAngleOffset = 0;
        if (numLetters % 2 !== 0) { // Tek sayıda harf (örn: 3, 5)
            initialAngleOffset = -90; // Bir harfi doğrudan üste yerleştirerek başla
        } else { // Çift sayıda harf (örn: 4, 6)
            initialAngleOffset = -angleStep / 2; // İlk harfi iki nokta arasına ortala
        }


        allLetters.split('').forEach((letter, i) => {
            const angle = (angleStep * i + initialAngleOffset) * (Math.PI / 180); // Dereceyi radyana çevir
            
            const x = wheelCenterX + positioningRadius * Math.cos(angle); 
            const y = wheelCenterY + positioningRadius * Math.sin(angle); 
            
            const letterDiv = document.createElement('div');
            letterDiv.className = 'letter-circle';
            letterDiv.textContent = letter;
            letterDiv.dataset.letter = letter;
            
            letterDiv.style.left = `${x}px`;
            letterDiv.style.top = `${y}px`;
            letterDiv.style.transform = `translate(-50%, -50%)`; // Harf div'ini kendi merkezine göre ortala
            
            letterWheel.appendChild(letterDiv);
            letterElements.push(letterDiv);
        });

        addDragListeners();
        console.log('Harf çarkı oluşturuldu, harfler:', allWords);
    };

    const shuffleLetters = () => {
        playSound(clickSound); // Karıştırma butonu için standart tıklama sesi
        const level = levels[gameState.currentLevelIndex];
        let currentLetters = level.letters.split('');
        const shuffledLettersArray = currentLetters.sort(() => Math.random() - 0.5);
        
        createLetterWheel(shuffledLettersArray.join(''));
        console.log('Harfler karıştırıldı.');
    };

    const processWord = (word) => {
        if (gameState.foundWords.includes(word) || !allWords.includes(word)) {
            playSound(wrongWordSound);
            if (currentWordDisplay) {
                currentWordDisplay.textContent = word;
                currentWordDisplay.classList.add('shake-animation');
            }
            setTimeout(() => {
                if (currentWordDisplay) {
                    currentWordDisplay.classList.remove('shake-animation');
                    currentWordDisplay.textContent = '';
                    currentWordDisplay.classList.remove('visible-word-display'); // Kelime temizlendiğinde gizle
                }
            }, 500);
            console.log('Kelime ya zaten bulundu ya da kelime listesinde yok:', word);
            return;
        }
        
        if (word.length < 3) {
            playSound(wrongWordSound);
            if (currentWordDisplay) {
                currentWordDisplay.textContent = word;
                currentWordDisplay.classList.add('shake-animation');
            }
            setTimeout(() => {
                if (currentWordDisplay) {
                    currentWordDisplay.classList.remove('shake-animation');
                    currentWordDisplay.textContent = '';
                    currentWordDisplay.classList.remove('visible-word-display'); // Kelime temizlendiğinde gizle
                }
            }, 500);
            console.log('Kelime çok kısa:', word);
            return;
        }

        playSound(correctWordSound);
        gameState.foundWords.push(word);
        const points = word.length * 10;
        gameState.score += points;
        if (currentScoreDisplay) currentScoreDisplay.textContent = gameState.score;
        const timeBonus = word.length * 2;
        gameState.timeLeft += timeBonus;
        if (timerDisplay) timerDisplay.textContent = gameState.timeLeft;

        const wordEl = document.createElement('div');
        wordEl.className = 'found-word new';
        wordEl.textContent = word;
        if (foundWordsList) {
            foundWordsList.appendChild(wordEl);
            foundWordsList.scrollTop = foundWordsList.scrollHeight;
        }

        wordEl.addEventListener('animationend', () => {
            wordEl.classList.remove('new');
        });

        const level = levels[gameState.currentLevelIndex];
        if (gameState.score >= level.targetScore) {
            endGame(true);
        }
        // Kelime doğru bulunduğunda veya yanlış olduğunda temizlendikten sonra gizle
        if (currentWordDisplay) {
            currentWordDisplay.textContent = '';
            currentWordDisplay.classList.remove('visible-word-display');
        }
        console.log('Kelime bulundu ve işlendi:', word, 'Puan:', gameState.score);
    };
    
    const endGame = (isWin) => {
        clearInterval(gameState.gameInterval);
        if (modalOverlay) modalOverlay.classList.remove('hidden');
        if (isWin) {
            playSound(levelUpSound);
            if (winModal) winModal.classList.remove('hidden');
            // Son seviye mi kontrolü
            if (gameState.currentLevelIndex === levels.length - 1) {
                if (nextLevelBtn) nextLevelBtn.textContent = 'Oyunu Bitir';
                if (nextLevelBtn) nextLevelBtn.removeEventListener('click', nextLevelHandler);
                if (nextLevelBtn) nextLevelBtn.addEventListener('click', () => {
                    if (modalOverlay) modalOverlay.classList.add('hidden');
                    if (winModal) winModal.classList.add('hidden');
                    gameState.currentLevelIndex = 0; // Oyunu bitirince ilk seviyeye dön
                    saveState();
                    updateStartScreenLevel();
                    showScreen('start-screen'); // Başlangıç ekranına dön
                    console.log('Oyun bitti. Başlangıç ekranına dönüldü.');
                });
            } else {
                if (nextLevelBtn) nextLevelBtn.textContent = 'Sıradaki Seviye';
                if (nextLevelBtn) nextLevelBtn.removeEventListener('click', nextLevelHandler);
                if (nextLevelBtn) nextLevelBtn.addEventListener('click', nextLevelHandler);
            }

            // Bir sonraki seviyeye geçiş için currentLevelIndex'i güncelliyoruz
            if (gameState.currentLevelIndex + 1 < levels.length) {
                gameState.currentLevelIndex++;
            }
            saveState(); // Yeni seviye durumunu kaydediyoruz
            updateStartScreenLevel(); // Başlangıç ekranındaki seviye numarasını güncelliyoruz
            console.log('Seviye kazanıldı. Sonraki seviyeye veya oyun sonuna geçiliyor.');
        } else {
            playSound(gameOverSound);
            if (loseModal) loseModal.classList.remove('hidden');
            console.log('Oyun bitti. Süre doldu.');
        }
    };

    const nextLevelHandler = () => {
        if (modalOverlay) modalOverlay.classList.add('hidden'); 
        if (winModal) winModal.classList.add('hidden');
        showScreen('start-screen'); // Bir sonraki seviyeye geçmeden önce başlangıç ekranını göster
    };

    // --- NEW LINE DRAWING LOGIC ---

    const getLetterElementFromPoint = (x, y) => letterElements.find(el => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        // Dokunmatik ekranlar için algılama toleransını artırıldı (0.8'den 0.95'e)
        return distance < rect.width / 2 * 0.95; 
    });

    const startDrag = (e) => {
        // **ÖNEMLİ:** Eğer tıklanan element shuffle butonu veya içindeki bir element ise, sürükleme mantığını başlatma.
        if (shuffleBtn && (e.target === shuffleBtn || shuffleBtn.contains(e.target))) {
            // Shuffle butonunun kendi click olayını işlemesine izin ver.
            // Bu durumda sürükleme mantığını başlatmayız.
            return;
        }

        // Dokunmatik olaylar için varsayılan davranışı engelle (kaydırma/yakınlaştırma gibi)
        // Sadece harf çarkı üzerinde bir sürükleme başlatıldığında bu önemlidir.
        if (e.type === 'touchstart') {
            e.preventDefault();
        }

        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        
        const target = getLetterElementFromPoint(clientX, clientY);
        if (!target) {
            // Eğer bir hedef harf bulunamazsa, sürükleme başlatma.
            return;
        }

        isDragging = true;
        selectLetter(target); // İlk harf seçildiğinde ses çalacak
        console.log('Sürükleme harf üzerinde başlatıldı:', target.dataset.letter);

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('touchend', endDrag);
    };

    const drag = (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Dokunmatik hareket sırasında da varsayılan davranışı engelle
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        const target = getLetterElementFromPoint(clientX, clientY);
        if (target && !target.classList.contains('selected')) {
            selectLetter(target); // Sonraki harfler seçildiğinde farklı ses çalacak
            console.log('Sürükleme sırasında harf seçildi:', target.dataset.letter);
        }
        updatePreviewLine(clientX, clientY);
    };

    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        const currentWord = selectedLetters.map(l => l.letter).join('');
        processWord(currentWord);
        selectedLetters.forEach(l => l.element.classList.remove('selected'));
        selectedLetters = [];
        if (lineSvg) lineSvg.innerHTML = '';
        console.log('Sürükleme bitti. İşlenen kelime:', currentWord);

        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', endDrag);
    };
    
    const selectLetter = (letterElement) => {
        letterElement.classList.add('selected');
        selectedLetters.push({ element: letterElement, letter: letterElement.dataset.letter });
        
        // Harf seçimi sırasına göre farklı ses çal
        const soundIndex = selectedLetters.length - 1; // 0'dan başlar
        if (letterSelectSounds[soundIndex]) {
            playSound(letterSelectSounds[soundIndex]);
        } else {
            // Yeterli sayıda özel ses yoksa standart bir ses çalabiliriz (örneğin clickSound)
            playSound(clickSound); 
        }

        if (currentWordDisplay) {
            currentWordDisplay.textContent = selectedLetters.map(l => l.letter).join('');
            currentWordDisplay.classList.add('visible-word-display'); // Kelime yazılmaya başlandığında görünür yap
        }
        updateCommittedLines();
    };

    const createLine = (x1, y1, x2, y2, className) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('class', className);
        return line;
    };

    const updateCommittedLines = () => {
        if (!lineSvg) return;
        lineSvg.querySelectorAll('.committed-line').forEach(line => line.remove());
        for (let i = 0; i < selectedLetters.length - 1; i++) {
            const startEl = selectedLetters[i].element;
            const endEl = selectedLetters[i + 1].element;
            const wheelRect = letterWheel.getBoundingClientRect();
            const startRect = startEl.getBoundingClientRect();
            const endRect = endEl.getBoundingClientRect();
            
            const x1 = startRect.left + startRect.width / 2 - wheelRect.left;
            const y1 = startRect.top + startRect.height / 2 - wheelRect.top;
            const x2 = endRect.left + endRect.width / 2 - wheelRect.left;
            const y2 = endRect.top + endRect.height / 2 - wheelRect.top;
            
            lineSvg.appendChild(createLine(x1, y1, x2, y2, 'committed-line'));
        }
    };
    
    const updatePreviewLine = (cursorX, cursorY) => {
        if (!lineSvg) return;
        lineSvg.querySelector('.preview-line')?.remove();
        if (selectedLetters.length === 0) return;

        const lastLetter = selectedLetters[selectedLetters.length - 1].element;
        const wheelRect = letterWheel.getBoundingClientRect();
        const letterRect = lastLetter.getBoundingClientRect();
        
        const x1 = letterRect.left + letterRect.width / 2 - wheelRect.left;
        const y1 = letterRect.top + letterRect.height / 2 - wheelRect.top;
        const x2 = cursorX - wheelRect.left;
        const y2 = cursorY - wheelRect.top;

        lineSvg.appendChild(createLine(x1, y1, x2, y2, 'preview-line'));
    };

    const addDragListeners = () => {
        if (letterWheel) { // letterWheel'in var olduğundan emin olun
            letterWheel.addEventListener('mousedown', startDrag);
            letterWheel.addEventListener('touchstart', startDrag, { passive: false });
            console.log('letterWheel üzerine sürükleme dinleyicileri eklendi.');
        } else {
            console.error('Hata: letterWheel bulunamadığı için sürükleme dinleyicileri eklenemedi!');
        }
    };

    const resetGameProgress = () => {
        // localStorage'daki kayıtlı veriyi sil
        localStorage.removeItem('wordGameSave');
        // Oyun durumunu başlangıç değerlerine sıfırla
        gameState = { currentLevelIndex: 0, unlockedLevels: 1, score: 0, timeLeft: 0, foundWords: [], gameInterval: null, isSoundOn: true, currentTheme: 'dark' };
        // UI'ı güncelle
        updateStartScreenLevel();
        applyTheme(); // Temayı sıfırladıktan sonra tekrar uygula
        updateToggleStates(); // Toggle butonlarının durumunu sıfırla
        showScreen('start-screen'); // Başlangıç ekranına dön
        playSound(clickSound); // Ses çal
        console.log('Oyun ilerlemesi sıfırlandı.');
    };
    
    // --- EVENT LISTENERS ---
    console.log('Olay dinleyicileri atanıyor...');
    if (startLevelBtn) {
        startLevelBtn.addEventListener('click', () => { // Yeni buton için olay dinleyicisi
            console.log('Oyna Butonu tıklandı!');
            playSound(clickSound);
            showScreen('game-screen', () => startGame(gameState.currentLevelIndex)); // Animasyon bitince startGame çağrılacak
        });
    } else {
        console.error('Hata: startLevelBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    if (settingsIcon) {
        settingsIcon.addEventListener('click', () => { 
            console.log('Ayarlar Simgesi tıklandı!');
            playSound(clickSound); 
            showScreen('settings-screen'); 
        });
    } else {
        console.error('Hata: settingsIcon bulunamadığı için olay dinleyicisi eklenemedi!');
    }
    
    // Tüm geri butonlarına olay dinleyicisi ekle
    backBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => { 
                console.log('Geri Butonu tıklandı:', btn.id);
                playSound(clickSound);
                // Hangi ekrandan geri dönüldüğüne göre farklı davranışlar eklenebilir
                if (btn.id === 'privacy-policy-back-btn') {
                    showScreen('settings-screen'); // Gizlilik politikasından ayarlara dön
                } else {
                    showScreen('start-screen'); // Diğer geri butonları başlangıç ekranına döner
                }
                updateStartScreenLevel(); // Başlangıç ekranındaki seviye numarasını güncelliyoruz
            });
        } else {
            console.error('Hata: Bir geri butonu elementi null!');
        }
    });

    if (shuffleBtn) {
        shuffleBtn.addEventListener('click', shuffleLetters);
    } else {
        console.error('Hata: shuffleBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    if (exitGameBtn) {
        exitGameBtn.addEventListener('click', () => {
            console.log('Oyundan Çıkış Butonu tıklandı!');
            playSound(clickSound);
            clearInterval(gameState.gameInterval);
            showScreen('start-screen'); // Oyundan çıkışta başlangıç ekranına dön
            updateStartScreenLevel(); // Başlangıç ekranındaki seviye numarasını güncelliyoruz
        });
    } else {
        console.error('Hata: exitGameBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    if (themeToggleInput) {
        themeToggleInput.addEventListener('change', () => { 
            console.log('Tema değiştirme anahtarı değişti.');
            playSound(clickSound);
            gameState.currentTheme = themeToggleInput.checked ? 'dark' : 'light'; 
            applyTheme(); 
            saveState(); 
        });
    } else {
        console.error('Hata: themeToggleInput bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    if (soundToggleInput) {
        soundToggleInput.addEventListener('change', () => { 
            console.log('Ses değiştirme anahtarı değişti.');
            gameState.isSoundOn = soundToggleInput.checked; 
            playSound(clickSound);
            saveState(); 
        });
    } else {
        console.error('Hata: soundToggleInput bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    if (nextLevelBtn) {
        nextLevelBtn.addEventListener('click', nextLevelHandler); 
    } else {
        console.error('Hata: nextLevelBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }
    
    if (retryBtn) {
        retryBtn.addEventListener('click', () => { 
            console.log('Tekrar Dene Butonu tıklandı!');
            playSound(clickSound); 
            if (modalOverlay) modalOverlay.classList.add('hidden'); 
            if (loseModal) loseModal.classList.add('hidden'); 
            startGame(gameState.currentLevelIndex); 
        });
    } else {
        console.error('Hata: retryBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => { 
            console.log('Ana Menüye Dön Butonu tıklandı!');
            playSound(clickSound); 
            if (modalOverlay) modalOverlay.classList.add('hidden'); 
            if (loseModal) loseModal.classList.add('hidden'); 
            showScreen('start-screen'); 
            updateStartScreenLevel(); 
        }); // Ana menüye dön butonunu başlangıç ekranına yönlendir
    } else {
        console.error('Hata: backToMenuBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    // Gizlilik Politikası bağlantısı için olay dinleyicisi
    if (privacyPolicyLink) {
        privacyPolicyLink.addEventListener('click', (e) => {
            e.preventDefault(); // Varsayılan bağlantı davranışını engelle
            console.log('Gizlilik Politikası Bağlantısı tıklandı!');
            playSound(clickSound);
            showScreen('privacy-policy-screen'); // Gizlilik politikası ekranını göster
        });
    } else {
        console.error('Hata: privacyPolicyLink bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    // "Tüm İlerlemeyi Sil" butonu olay dinleyicisi
    if (clearProgressBtn) {
        clearProgressBtn.addEventListener('click', () => {
            console.log('Tüm İlerlemeyi Sil Butonu tıklandı!');
            playSound(clickSound);
            if (modalOverlay) modalOverlay.classList.remove('hidden');
            if (confirmModal) confirmModal.classList.remove('hidden');
        });
    } else {
        console.error('Hata: clearProgressBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    // Onay modalı "Evet" butonu
    if (confirmYesBtn) {
        confirmYesBtn.addEventListener('click', () => {
            console.log('Onay Evet Butonu tıklandı!');
            resetGameProgress();
            if (modalOverlay) modalOverlay.classList.add('hidden');
            if (confirmModal) confirmModal.classList.add('hidden');
        });
    } else {
        console.error('Hata: confirmYesBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    // Onay modalı "İptal" butonu
    if (confirmNoBtn) {
        confirmNoBtn.addEventListener('click', () => {
            console.log('Onay İptal Butonu tıklandı!');
            playSound(clickSound);
            if (modalOverlay) modalOverlay.classList.add('hidden');
            if (confirmModal) confirmModal.classList.add('hidden');
        });
    } else {
        console.error('Hata: confirmNoBtn bulunamadığı için olay dinleyicisi eklenemedi!');
    }

    // --- START GAME ---
    loadState();
    showScreen('start-screen'); // Uygulama başladığında başlangıç ekranını göster
    console.log('Başlangıç ekranı ayarlandı. Yukarıdaki hataları veya tıklama günlüklerini konsoldan kontrol edin.');
});
