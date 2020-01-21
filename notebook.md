# Where I left
https://www.youtube.com/watch?v=c76FTxLRwAw
sqlite3 database kurulumu 
nodemon --watch * --exec "electron ."

# Todo
- openCss adinda bir template cikarabilirsin 
- vsc formatlamaya bak
- npm i --save knex
- npm i --save sqlite3
- npm i --save-dev electron-rebuild
- npm rebuild
- Download db browser

# Problems
- insecure content-security-policy ts 179 bi ara coz

# Completed

# Reminders
- s1-12 skip style anlattigi icin belki sonra geri donersin
- embedded database - it does not require server to communicate with db

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
drop table <tableName>