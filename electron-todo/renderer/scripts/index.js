const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () =>
{
    ipcRenderer.send('mainWindowLoaded');
    ipcRenderer.on('test', (err, data) =>
    {
        let container = document.querySelector('.nihil');
        for (var i = 0; i < data.length; ++i)
        {
            insertTodo(data[i]);
        }
        checkTodoCount();
    });
});

checkTodoCount();

const inputNewTodo = document.querySelector("#inputNewTodo");

inputNewTodo.addEventListener('keypress', (key) =>
{
    if (key.keyCode == 13)
    {
        addTodo();
    }
});

document.querySelector("#btnNewTodo").addEventListener('click', () =>
{
    addTodo();
});

ipcRenderer.on('main:addItem', (err, todoItems) =>
{
    insertTodo(todoItems);
    checkTodoCount();
});


// ==== Command Functions
function checkTodoCount()
{

    let container = document.querySelector(".todo-container");
    let nihil = document.querySelector('.nihil');

    if (container.children.length > 1)
    {
        console.log(container.children.length);
        nihil.style.display = "none";
    } else
    {
        nihil.style.display = "block";
    }

}

function insertTodo(todoItem)
{
        // Container
        let container = document.querySelector(".todo-container");

        // Row
        let row = document.createElement("div");
        row.className = "row";
    
        // col
        let col = document.createElement("div");
        col.className = "todo-item p-2 mb-3 text-light bg-dark col-md-8 offset-2 shadow card d-flex justify-content-center flex-row align-items-center";
        col.style = 'background: #582e48!important';
    
        // p 
        let p = document.createElement("p");
        p.className = "m-0 w-100";
        p.innerText = todoItem.description;
    
        // btnDelete
        let btnDelete = document.createElement("button");
        btnDelete.className = "btn btn-sm btn-outline-danger flex-shrink-1";
        btnDelete.innerText = "X"; //&#x2715;
    
        btnDelete.addEventListener('click', (element) =>
        {
            if (confirm("Do you confirm to delete?"))
            {
                element.target.parentNode.parentNode.remove();
                checkTodoCount();
            }
        });
    
        // Build
        col.appendChild(p);
        col.appendChild(btnDelete);
        row.appendChild(col);
        container.appendChild(row);
}

function addTodo() 
{
    if (inputNewTodo.value.length > 0)
    {
        ipcRenderer.send('g:newTodo', { ref: "main", todoValue: inputNewTodo.value });
        inputNewTodo.value = "";
    }
}
