# Notebook
`gestartet am 21-Jan-2022`  

# Links
- electron official
    https://www.electronjs.org/
- quickstart
    https://www.electronjs.org/docs/latest/tutorial/quick-start
- styling
    - primer
        https://primer.style/css/getting-started
    - Pure.css Library
        https://purecss.io/
    - Bootstrap
        https://getbootstrap.com/

# Architecture
- framework: electronjs
- database: nosql | [casssandra], mongodb?

# Keywords
- css kit, libraries for electron

# Information
- some projects with electron: github desktop, vsc, discord?
- some styling alternatives: photon css, semantic ui, primer, pure.css, bootstrap

# Theory
- <what is package-lock.json>
    Package-lock is a large list of each dependency listed in your package.json

- <what is renderer>

- <what is pagination>
    Pagination, also known as paging, is the process of dividing a document into discrete pages, either electronic pages or printed pages

- <difference between sql and nosql>
    - database management system 
        - structured data | semi-structured data | unstructural data

# How to?
- <start to work>
    - enter time log entry
    - check where to left

- <getting started>
    - install node; npm
    - mkdir app && cd app
    - npm init
    - npm install --save-dev electron
    - add start script with electron . 

- <packaging and dist through electron forge>
    - npm install --save-dev @electron-forge/cli
    - npx electron-forge import
    - npm run make

- <install and use primer>
    npm install --save @primer/css

- <install semantic ui>
    - npm install -g gulp
    - npm install semantic-ui --save

# Structure
+-- app
    +-- package.json                | dependencies, scripts, entry point
    +-- package-lock.json           | ??            
    +-- data                        | databases
    +-- out                         | distribution
    +-- resources                   | images, icons, pdfs etc.      
    +-- src
        +-- components              | such as vue mixed comps of html, css, js
        +-- html                    | html
        +-- scripts                 | javascript <main.js entry point here>
            +-- main.js                 | entry point
            +-- preload.js              | ??
            +-- renderer.js             | ??
        +-- styles                  | css files
            +-- primer.css              | css framework by github
            +-- styles.css              | own styles
    +-- test                        | test

+-- app (todo-old)
    +-- assets
    +-- database
        +-- todo.sqlite
    +-- modules
        +-- connection.js
        +-- knex.js
    +-- renderer
        +-- html
        +-- scripts
        +-- style
    +-- main.js