const title = document.getElementById("title");
const result = document.getElementById("result");

function omikuji() {
    const r = Math.random();
    if (r < 0.2) {
        result.textContent = "大吉";
        result.style.color = "red";
    } else if (r < 0.5) {
        result.textContent = "中吉";
        result.style.color = "blue";
    } else {
        result.textContent = "凶";
        result.style.color = "green";
    }
}
title.onclick = omikuji;