const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on('ready', () =>
{

    // ==== Instantiation
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    // >> Create main window
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "project/view-html/index.html"),
            protocol: "file:",
            slashes: true
        })
    );

    // ==== Create menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    //
    ipcMain.on("key:inputValue", (err, data) => {
        console.log(data);
    })


});

// >> content of the menu
const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Add"
            },
            {
                label: "Delete"
            },
            {
                label: "Quit",
                accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",        // key 
                role: "quit"
            }
        ]
    },
    {
        label: "Reload",
        role: "reload"
    }
]

// >> Eger platform mac ise 
if (process.platform == "darwin")
{

}

if (process.env.NODE_ENV !== "production")
{
    mainMenuTemplate.push({
        label: "DevTools",
        click(item, focusedWindow)
        {
            focusedWindow.toggleDevTools();
        }
    })
}