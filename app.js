const todos = [];

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task) {
    todos.push({ text: task, done: false });
    input.value = "";
    showTodos();
  }
});

function showTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(({ text, done }, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = text;
    if (done) li.classList.add("done");

    li.addEventListener("click", () => {
      const { text, done } = todos[index];
      todos[index] = { text, done: !done };
      showTodos();
    });

    list.appendChild(li);
  });
}
