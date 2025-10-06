const question = document.getElementById("js-question");
const answer = document.getElementById("js-answer");
const submit = document.getElementById("js-submit");
const next = document.getElementById("js-next");
const result = document.getElementById("js-result");
// 一つ目の数値をランダムで取得
let num1 = Math.floor(Math.random() * 9) + 1;
// 二つ目の数値をランダムで取得
let num2 = Math.floor(Math.random() * 9) + 1;

window.addEventListener("DOMContentLoaded", read)
submit.addEventListener("click", answerSubmit);
next.addEventListener("click", answerNext);

// ページ読み込みと同時に処理
function read() {
    // 二つの数値を合わせて問題作成
    let formula = num1 + "×" + num2;
    question.innerText = "問題：" + formula + "=?";
}

// 回答ボタンクリック時に処理
function answerSubmit() {
    // 問題の回答を取得
    let correctAnswer = parseInt(num1 * num2);

    // ユーザーが入力した回答を取得
    let userAnswer = parseInt(answer.value);

    if (correctAnswer === userAnswer) {
        // 正解
        result.innerText = "正解!";
        result.style.color = "green";
    } else {
        // 不正解
        result.innerText = "残念！正解は" + correctAnswer + "です";
        result.style.color = "red";
    }
}

// 次の問題ボタンクリック時に処理
function answerNext() {
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
}