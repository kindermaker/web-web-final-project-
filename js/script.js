document.addEventListener("DOMContentLoaded", function () {
    createRaindrops();
});

function createRaindrops() {
    const container = document.querySelector(".rain-container");

    for (let i = 0; i < 100; i++) { // 可根据需要调整雨滴数量
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");
        raindrop.style.left = `${Math.random() * 100}vw`; // 随机水平位置
        raindrop.style.top = `${Math.random() * 100}vh`; // 随机垂直位置
        raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // 随机下落速度
        container.appendChild(raindrop);
    }
}

function expandUserCenter() {
    $("#user_center").css("display", "block");
}

function collapseUserCenter() {
    $("#user_center").css("display", "none");
}
