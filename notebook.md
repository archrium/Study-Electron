# Notebook
`gestartet am 21-Jan-2022`  

# Links
- electron official
    https://www.electronjs.org/
- quickstart
    https://www.electronjs.org/docs/latest/tutorial/quick-start
- primer style
    https://primer.style/css/getting-started

# Keywords
- css kit, libraries for electron

# Information
- some projects with electron: github desktop, vsc, discord?
- some styling alternatives: photon css, semantic ui, primer

# Theory
- <what is package-lock.json>
    Package-lock is a large list of each dependency listed in your package.json

- <what is pagination>
    Pagination, also known as paging, is the process of dividing a document into discrete pages, either electronic pages or printed pages

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
    +-- src
        +-- components              | such as vue mixed comps of html, css, js
        +-- pages                   | html
        +-- resources               | images, icons, pdfs etc.
        +-- scripts                 | javascript <main.js entry point here>
            +-- main.js                 | entry point
            +-- preload.js              | ??
            +-- renderer.js             | ??
        +-- styles                  | css files
            +-- primer.css              | css framework by github
            +-- styles.css              | own styles