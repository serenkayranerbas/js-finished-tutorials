const addForm = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search=document.querySelector('.search input');
const generateTemplate = (todo) => {
  const liElement = `  <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
  todos.innerHTML += liElement;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); //sayfanın yenilenemsini istemiyorum
  const todo = addForm.add.value.trim();
 

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
const filterTodos=term=>{
  // console.log(term);
  //  console.log(todos.children); 
  // console.log(Array.from(todos.children));
  Array.from(todos.children)
  .filter(todo=>!todo.textContent.toLowerCase().includes(term))
  .forEach(todo =>todo.classList.add('filtered'));

    Array.from(todos.children)
  .filter(todo=>todo.textContent.includes(term))
  .forEach(todo =>todo.classList.remove('filtered'));
}
search.addEventListener('keyup',()=>{
 const term= search.value.trim().toLowerCase();
 filterTodos(term);
})