const correctAnswers = ["8", "10", "3", "25"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const successMessage = document.getElementById("successMessage");
const button = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  console.log(userAnswers);
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score = score + 25;
    }
  });
  if (score === 100) {
    successMessage.classList.remove("d-none");
    button.setAttribute('disabled','');
  }
  result.classList.remove("d-none");
    result.querySelector("#percent").textContent = `${score}%`;
  
//   let score1 = 0;
//   const show = setInterval(() => {
//     result.querySelector("#percent").textContent = `${score1}%`;
//     if (score1 == score) {
//       clearInterval(show);
//     } else {
//       score1++;
//     }
//   }, 10);
});
