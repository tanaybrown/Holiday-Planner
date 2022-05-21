const vacationTodosArr = [
    "book flights",
    "find snorkle",
]

const vacationTodsoUl = document.getElementById("vacationTodosUl")
const toDoImput = Dodocument.getElementById("todoInput")
document.getElementById('form').addEventListener('sumbit', addTodo)

function addTodo()  {
    vacationTodosArr.push(todoInput.value);
    console.log(vacationToDoArr)
}

function creatToDo(todo) {
    const todoLabel = todo.split(" ").join("")
    const li = document.createElement("li")
    li.innerHTML = ` 
                 <input type="checkbox" id="${todoLabel}" name="${todoLabel}">
                 <label for="${todoLabel}">${todo}</label>`

    vacationTodosUl.appendChild(li)
}

for (const i=0; i < vacationTodos.length; i++){
    const todo = vacationTodosArr{i}
    
}

