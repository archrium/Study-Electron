# Notebook
`gestartet am 21-Jan-2022`  

# Information

# Links
- electron official
    https://www.electronjs.org/
- quickstart
    https://www.electronjs.org/docs/latest/tutorial/quick-start

# Theory

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

# Structure
+-- app
    +-- package.json                | dependencies, scripts, entry point
    +-- package-lock.json           | ??                  
    +-- src
        +-- components              | such as vue mixed comps of html, css, js
        +-- pages                   | html
        +-- resources               | images, icons, pdfs etc.
        +-- scripts                 | javascript <main.js entry point here>
            +-- main.js                 | entry point
            +-- preload.js     
        +-- styles                  | css files