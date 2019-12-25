const electron = require("electron");
const { ipcRenderer } = electron;

let sendBtn = document.querySelector("#sendBtn");;
let inputValue = document.querySelector("#value");

sendBtn.addEventListener("click", () =>
{
    ipcRenderer.send("key:inputValue", inputValue.value);
});