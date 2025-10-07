const question = document.getElementById("js-question");
const answer = document.getElementById("js-answer");
const submit = document.getElementById("js-submit");
const next = document.getElementById("js-next");
const result = document.getElementById("js-result");
const score = document.getElementById("js-score");
const correct = document.getElementById("js-correct");
const countDown = document.getElementById("js-countdown");

// 問題数
const sum = 3;
// 出題数
let questionNum = 1;
// 一つ目の数値をランダムで取得
let num1 = Math.floor(Math.random() * 9) + 1;
// 二つ目の数値をランダムで取得
let num2 = Math.floor(Math.random() * 9) + 1;
// 正解数
let scoreNum = 0;
// タイマーの時間
let remaining = 10;

window.addEventListener("DOMContentLoaded", read)
submit.addEventListener("click", answerSubmit);
next.addEventListener("click", answerNext);
const timerId = setInterval(timer, 1000);

// ページ読み込みと同時に処理
function read() {
    // 二つの数値を合わせて問題作成
    let formula = num1 + "×" + num2;
    question.innerText = "問題：" + formula + "=?";
    // 正解数表示欄を作成
    score.innerText = "";
}

// カウントダウン
function timer() {
    countDown.textContent = "残り時間：" + remaining;
    if (remaining <= 0) {
        // カウントダウン停止
        clearInterval(timerId);
        alert("残念！時間切れです！");
        // 回答ボタンを非表示
        submit.disabled = true;
        // 次の問題ボタンを非表示
        next.disabled = true;
    }
    remaining--;
}

// 回答ボタンクリック時に処理
function answerSubmit() {
    // 回答ボタンを非表示
    submit.disabled = true;
    // 問題の回答を取得
    let correctAnswer = parseInt(num1 * num2);

    // ユーザーが入力した回答を取得
    let userAnswer = parseInt(answer.value);

    if (correctAnswer === userAnswer) {
        // 正解
        result.innerText = "正解!";
        result.style.color = "green";
        // 正解数+1
        scoreNum += 1;
        // 正解数表示欄を更新
        score.innerText = "正解数：" + scoreNum;
    } else {
        // 不正解
        result.innerText = "残念！正解は" + correctAnswer + "です";
        result.style.color = "red";
    }

    // 出題数分回答したら、結果を表示
    if (sum === questionNum) {
        correct.innerText = sum + "問中" + scoreNum + "問正解"
        // 回答ボタンを非表示
        next.disabled = true;
        // カウントダウン停止
        clearInterval(timerId);
    } else {
        // 出題数+1
        questionNum += 1;
    }
}

// 次の問題ボタンクリック時に処理
function answerNext() {
    // 回答ボタンを表示
    submit.disabled = false;
    // 一つ目の数値をランダムで取得
    num1 = Math.floor(Math.random() * 9) + 1;
    // 二つ目の数値をランダムで取得
    num2 = Math.floor(Math.random() * 9) + 1;
    // 二つの数値を合わせて問題作成
    formula = num1 + "×" + num2;
    question.innerText = "問題：" + formula + "=?";
    // 問題の回答を取得
    correctAnswer = parseInt(num1 * num2);
    // 回答欄を削除
    answer.value = "";
    // 結果を削除
    result.innerText = "";
    answer.focus(); // ← ここ
}

answer.addEventListener("keypress", (e) => {
    // 回答ボタンが表示されていれば、Enterキーで回答可能
    if (e.key === "Enter" && submit.disabled === false) {
        answerSubmit();
    }
});