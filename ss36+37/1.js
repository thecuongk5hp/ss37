function checkAnswer() {
  let answerInput = document.getElementById('answer');
  let messageDiv = document.getElementById('message');
  let errorDiv = document.getElementById('error');

  let answer = answerInput.value;

  if (answer.length > 10) {
    messageDiv.innerText = '';
    errorDiv.innerText = 'Câu trả lời không hợp lệ. Độ dài lớn hơn 10 ký tự.';
  } else {
    errorDiv.innerText = '';
    messageDiv.innerText = 'Câu trả lời hợp lệ. Chúc mừng!';
  }
}

// } else {
//     div.style.backgroundColor = "yellow";
//     div.style.color = "red";
//     div.style.width = " 200px";
//     div.style.height = " 200px";
//     div.style.lineHeight = "200px";
//     div.style.textAlign = " center";
//     div.style.border = "10px solid black";
//     div.style.borderRadius = "50";

// }





