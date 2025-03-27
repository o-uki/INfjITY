// HTML取得
const $output = document.getElementById("output");
const $input = document.getElementById("input");
const $score = document.getElementById("score");
const $time = document.getElementById("time");

// ゲームの状態変数
let isInGame = false;
let startKey = " ";
let inputKey = "f";

// タイマー用変数
let time = 15;
$time.textContent = "Time: " + time;
let timer;

// ゲーム終了関数
const gameSet = () => {
    clearInterval(timer);
    time = 15;
    $time.textContent = "Time: " + time;
    isInGame = false;
    inputKey = "f";
    $output.textContent = inputKey;
    $input.textContent = "_";
}

// スコア用変数
let score = 0;
$score.textContent = "Score: " + score;

document.addEventListener("keydown", (event) => {
    if (!(isInGame)) {
        if (event.key === startKey) {
            score = 0;
            $score.textContent = "Score: " + score;
            isInGame = true;
            timer = setInterval(() => {
                time--;
                $time.textContent = "Time: " + time;

                if (time <= 0) {
                    gameSet();
                }
            }, 1000);
        }
    } else {
        $input.textContent = event.key.slice(0, 1);
        if (event.key === inputKey) {
            score++;
            $score.textContent = "Score: " + score;

            if (inputKey === "f") {
                inputKey = "j";
            } else {
                inputKey = "f";
            }
            $output.textContent = inputKey;
        } else {
            gameSet();
        }
    }
});