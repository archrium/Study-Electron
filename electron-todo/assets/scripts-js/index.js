const { ipcRenderer } = require('electron');

nihilList();

ipcRenderer.on('main:addItem', (err, todoItems) =>
{
    // Container
    const container = document.querySelector(".todo-container");

    // Row
    const row = document.createElement("div");
    row.className = "row";

    // col
    const col = document.createElement("div");
    col.className = "todo-item p-2 mb-3 text-light bg-dark col-md-8 offset-2 shadow card d-flex justify-content-center flex-row align-items-center";
    col.style = 'background: #582e48!important';

    // p 
    const p = document.createElement("p");
    p.className = "m-0 w-100";
    p.innerText = todoItems.content;

    // btnDelete
    const btnDelete = document.createElement("button");
    btnDelete.className = "btn btn-sm btn-outline-danger flex-shrink-1";
    btnDelete.innerText = "X"; //&#x2715;

    btnDelete.addEventListener('click', () =>
    {
        if (confirm("Do you confirm to delete?"))
        {
            // Todo
        }
    });

    // Build
    col.appendChild(p);
    col.appendChild(btnDelete);
    row.appendChild(col);
    container.appendChild(row);
    nihilList();
});

function nihilList () {

    let container = document.querySelector(".todo-container");
    let nihil = document.querySelector('.nihil');

    if(container.children.length > 1) {
        console.log(container.children.length);
        nihil.style.display = "none";
    } else {
        nihil.style.display = "block";
    }

}
