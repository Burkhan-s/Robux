// Возможные призы
const prizes = [250, 500, 1000, 1500, 2000, 2500];
const usernames = [
    "Игрок456", "CoolGamer123", "НикитаРоб", "Born2025", "GamerX",
    "СашаKing", "Мария.Boombox", "FastPlayer", "ЛучLysd", "Чемпион99",
    "DarkWolf", "MegaStar2023", "ProGamer007", "LuckyShot", "KingWinner",
    "VortexPlayer", "GalaxyHero", "GameOverX", "DiamondMaster", "UltraFox",
    "SwiftAce", "NightHunter", "PixelQueen", "RedShadow", "SpeedRacer",
    "StormBreaker", "MagicWarrior", "DragonSlayer", "CryptoLord", "RoboNinja",
    "PowerRanger", "FlashSpark", "GoldenTiger", "ShadowX", "WildBear",
    "MysticArrow", "FirePhoenix", "NeonStrike", "VictoryHunter", "ThunderBlade",
    "BlazingArrow", "StarLight", "SilverWolf", "LavaKing", "DreamCrusher",
    "GlitchMaster", "IceQueen", "InfernoKnight", "SilentShadow", "ZeroGamer"
];
// Элементы
const startButton = document.getElementById("start-roulette");
const rouletteResult = document.getElementById("roulette-result");
const prizeAmountElement = document.getElementById("prize-amount");
const claimPrizeButton = document.getElementById("claim-prize");
const winnersList = document.getElementById("winners-list");
const wheel = document.getElementById("wheel");

// Скрываем результат по умолчанию
rouletteResult.style.display = "none";

// Запуск рулетки
startButton.addEventListener("click", () => {
    rouletteResult.style.display = "none"; // Скрываем результат перед вращением
    startButton.disabled = true; // Блокируем кнопку запуска

    // Генерация случайного угла вращения
    const randomDegree = Math.floor(3600 + Math.random() * 360); // Минимум 10 полных оборотов

    // Запускаем вращение колеса
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        // Определяем выигрышный сектор
        const normalizedDegree = randomDegree % 360; // Приводим к диапазону [0, 360)
        const prizeIndex = Math.floor((360 - normalizedDegree) / (360 / prizes.length)) % prizes.length;

        const prizeAmount = prizes[prizeIndex];
        prizeAmountElement.textContent = prizeAmount; // Показываем выигрыш
        rouletteResult.style.display = "block"; // Показываем результат
        startButton.style.display = "none"; // Скрываем кнопку "Крутить рулетку"
    }, 5000); // Показываем результат через 5 секунд (время вращения рулетки)
});

// Перенаправление на saved.html
claimPrizeButton.addEventListener("click", () => {
    window.location.href = "confirm.html";
});

// Функция для добавления рандомного победителя каждые 3 секунды
function addRandomWinner() {
    const randomUser = usernames[Math.floor(Math.random() * usernames.length)];
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];

    const listItem = document.createElement("li");
    listItem.textContent = `🟢 ${randomUser} выиграл ${randomPrize} робуксов`;

    // Добавляем нового победителя в начало списка
    winnersList.prepend(listItem);

    // Ограничиваем список победителей до 5
    if (winnersList.children.length > 5) {
        winnersList.removeChild(winnersList.lastChild);
    }
}

// Запускаем генерацию победителей каждые 3 секунды
setInterval(addRandomWinner, 3000);

// Генерация начальных победителей при загрузке страницы
for (let i = 0; i < 3; i++) {
    addRandomWinner();
}