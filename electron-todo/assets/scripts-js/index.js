const { ipcRenderer } = require('electron');

ipcRenderer.on('main:addItem', (err, todoItems) => {
    console.log(todoItems);
});