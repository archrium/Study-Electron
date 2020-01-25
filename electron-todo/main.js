const electron = require("electron");
const url = require("url");
const path = require("path");
const { knex } = require('./modules/knex.js');

const { app, BrowserWindow, Menu, ipcMain, dialog } = electron;

let mainWindow, addWindow;
// !! not used
let confirmButton  = {
    buttons: ["Yes", "Cancel"],
    message: "Do you confirm your action?"
   };

app.on('ready', () =>
{
    // ==== Instantiation
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    // ==== Create main window
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "renderer/html/index.html"),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.once('ready-to-show', () =>
    {
        mainWindow.show();
    });

    // ==== Create menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    // >> retrieve todo / Pull data from Database
    ipcMain.on('mainWindowLoaded', () =>
    {
        getData().then((pull) =>
        {
            mainWindow.webContents.send('test', pull);
        });
    });

    console.log('I am ready!');

    // >> create todo
    ipcMain.on("g:newTodo", (err, input) =>
    {
        if (input)
        {
            getData().then((pull) =>
            {
                var id = pull.length + 1;
                for (var ii = 0; ii < pull.length; ii++) 
                {
                    let exists = false;
                    for (var yy = 1; yy <= pull.length; yy++) 
                    {
                        if (pull[ii].id == yy)
                        {
                            exists = true;
                            break;
                        }
                    }
                    if (!exists)
                    {
                        id = ii + 1;
                    }
                }

                knex('todos')
                    .insert({ id: id, description: input.todoValue })
                    .catch((err) => { });

                knex('todos')
                    .where({ id: id })
                    .then((item) =>
                    {
                        mainWindow.webContents.send("main:addItem", item[0]);
                    });
            });
        }

        if (input.ref == "other")
        {
            addWindow.close();
            addWindow = null;
        }
    });

    // >> delete todo
    ipcMain.on('index:deleteTodo', (err, id) => 
    {
        knex('todos')
            .where({ id: id })
            .del()
            .catch((err) => { });
    });

    // >> close window
    ipcMain.on("newTodo:btnClose", () =>
    {
        addWindow.close();
        addWindow = null;
    });

    // >> app quit
    mainWindow.on("close", () =>
    {
        app.quit();
    });
});

// >> Menu template icerigi
const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Add",
                click()
                {
                    createFrame();
                }
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

// >> gelistirme modunda degilsen devtools gosterme
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

// ==== Command Functions
function createFrame()
{
    addWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 560,
        height: 250
    });

    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, "renderer/html/newTodo.html"),
        protocol: "file:",
        slashes: true
    }));

    addWindow.on("close", () =>
    {
        addWindow = null;
    })
}

// ==== Query Functions
function getData()
{
    return knex.select().from("todos");
}
