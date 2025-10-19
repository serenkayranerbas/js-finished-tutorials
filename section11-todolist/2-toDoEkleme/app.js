const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const liElement = `  <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
  todos.innerHTML += liElement;
};

addForm.addEventListener("submit", (e) => {
  // console.log(e.target);
  e.preventDefault(); //sayfanın yenilenemsini istemiyorum
  const todo = addForm.add.value.trim();
  //   console.log(todo);

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
  }
});
//bunu li gibi yazdırmak için 2 yöntemimiz var

//.trimStart(); başında ki boşlupu kaldırır
