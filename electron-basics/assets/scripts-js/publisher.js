const electron = require("electron");
const { ipcRenderer } = electron;

let sendBtn = document.querySelector("#sendBtn");;
let inputValue = document.querySelector("#value");
let openNew = document.querySelector("#openNewFrame");

sendBtn.addEventListener("click", () =>
{
    ipcRenderer.send("key:inputValue", inputValue.value);
});

openNew.addEventListener("click", () =>
{
    ipcRenderer.send("key:newFrame"); 
});