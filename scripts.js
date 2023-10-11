const correctAnswer1 = "周日";  
const correctAnswer2 = "彭知宇"; 

let attempts1 = 3;  // 第一个问题的尝试次数
let attempts2 = 3;  // 第二个问题的尝试次数

function checkAnswer1() {
    const answer1 = document.getElementById("answer1").value;
    if (answer1 === correctAnswer1) {
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
    } else {
        attempts1--;
        if (attempts1 > 0) {
            alert(`回答错误，请重试! 你还有${attempts1}次尝试机会。`);
        } else {
            alert("你已用完所有尝试机会。");
            document.getElementById("answer1").disabled = true;  // 禁用输入框
        }
    }
}

function checkAnswer2() {
    const answer2 = document.getElementById("answer2").value;
    if (answer2 === correctAnswer2) {
        document.getElementById("question2").style.display = "none";
        document.getElementById("reward").style.display = "block";
        document.getElementById("rewardNumber").innerText = "26469832";  
    } else {
        attempts2--;
        if (attempts2 > 0) {
            alert(`回答错误，请重试! 你还有${attempts2}次尝试机会。`);
        } else {
            alert("你已用完所有尝试机会。");
            document.getElementById("answer2").disabled = true;  // 禁用输入框
        }
    }
}
