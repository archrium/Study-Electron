const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () =>
{

    // ==== Instantiation
    mainWindow = new BrowserWindow({});

    // >> Create main window
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "project/view-html/index.html"),
            protocol: "file:",
            slashes: true
        })
    );

    console.log(process.platform);

    // ==== Create menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);


});

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