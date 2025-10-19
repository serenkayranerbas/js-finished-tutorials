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


todos.addEventListener('click',e=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})