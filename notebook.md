# Where I left
https://www.youtube.com/watch?v=c76FTxLRwAw
nodemon --watch * --exec "electron ."
D:\Repository\GitHub\Study-Todo-Electron\electron-todo\database
- retrieve etmeye calisiyorsun

# Todo
- openCss adinda bir template cikarabilirsin 
- vsc formatlamaya bak
- knexi protected variations
- architecture icin naming convention olustur
- delete confirm
- paketleme

# Problems
- insecure content-security-policy ts 179 bi ara coz

# Completed
- Download db browser
- create operation -> database record

# Reminders
- s1-12 skip style anlattigi icin belki sonra geri donersin
- embedded database - it does not require server to communicate with db
- dom = document object
electron-packager . TodoApp --overwrite --platform=win32 --arch=ia32 --icon=renderer/icons/app.ico --prune=true --out=release-builds
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]

>> Comment Nomenclature
- <prefix> ==== Title
- <prefix> >> Function What is it doing
- <prefix> !! Handle
- <prefix> General Purpose Comment

>> Source
[1] Kablosuz kedi masaustu uyguulama yapimi
https://www.youtube.com/watch?v=qsM9ylyt7xw&list=PL_f2F0Oyaj48jgl98pHuoyxoTgi7gXJ-z
[2] tarik guney developing electron sqlite3
https://www.youtube.com/watch?v=c76FTxLRwAw
[3] codedamn
https://www.youtube.com/watch?v=OlxEsARP7_g&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar&index=20
[4] codevolution crud
https://www.youtube.com/watch?v=m7dXcuK03ho&list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&index=12
[5] cameron mongo
https://www.youtube.com/watch?v=MJ0nguuo510&list=PLkOqyUCsoGE2KwOmt698IxAerJbLLws1a&index=12

>> Links
electron security
https://github.com/electron/electron/blob/master/docs/tutorial/security.md
file tree
https://stackoverflow.com/questions/19699059/representing-directory-file-structure-in-markdown-syntax
file tree 2
https://softwareengineering.stackexchange.com/questions/118640/write-a-directory-structure-pseudo-code
sqlite3 on windows 10
https://www.youtube.com/watch?v=yhobT_u9QPU
knex into database
https://stackoverflow.com/questions/28928122/knex-nodejs-and-inserting-into-the-database

>> Javascript
`console.log(process.platform)` platform bilgisi

>> Electron
`ipcRenderer` frontend to backend  
`webContents` backend to frontend   

>> Assume Unchanged

# File Structure
.
+-- database
|   +-- todo.db
+-- modules
|   +-- connection.js
+-- node_modules
+-- renderer
|   +-- html
|   |   +-- index.html
|   |   +-- newtodo.html
|   +-- style
|   |   +-- main.css
|   |   +-- bootstrap.min.css
|   +-- scripts
|   |   +-- index.js
+-- main.js
+-- package-lock.json
+-- package.json

# SQLite3

sqlite3 <database>.db `createing database`
create table <tableName> (<colName> <dataType> <param>, ..); `create a table` ex:create table todos (ID int primary key, name VarChar(200));
.tables
INSERT into <tableName> (id, name) VALUES (0, "Bob");
select * from <tableName>;
drop table <tableName>;