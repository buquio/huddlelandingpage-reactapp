HOW TO HOST/DEPLOY YOUR REACT APP
On commandline
1. open ur commandline 
2. check node(node -v)  or  install node 
3. check npm(npm -v)  or  install npm 
4. on commandline or Vscode-terminal navigate to Document e.g cd Document
5. cd ZURI React  (an existing parent-folder where u'll put ur projectapp i.e huddlelandingpage-reactapp) 
6. npm install -g create-react-app(you do this for the very first time you are inatalling react)
7. npx create-react-app huddlelandingpage-reactapp 
8. if you are on commmandline do: code . or open Vscode terminal
9. cd huddlelandingpage-reactapp
10. npm start 

## in the public folder
-delete/edit the favicon image to ur own image:copy the image for the icon from src/images & edit the link for the icon in the html
-in the html: edit the title,add the <script src="./src/index.js" type="text/jsx"></script>,remove all the comment, add the cdn fontawesone-link for icons(as needed)
## in the src folder
- copy and paste your css into App.css
- copy & paste in your image folder
- create a folder called components: add all other needed component-files
- in the App.js: copy and paste in ur new html,import in all needed folders as needed e.g images-folders,component-folders. 

## intructions to recreate an html-page to react
-paste in the html inside app.js
-make sure that all ur image-tag is closed with />
-make sure that the class is changed to className
-make sure that long paragraphs are on same line
-move a copy of the html-item u want to convert to component into its component file 
-move every html-item to a file like the data-store/database(it depend, if no database yet)
-then map the database file to create all the item-component in app.js, set the props attributes

## To run the app
- open Vscode terminal
- cd huddlelandingpage-reactapp
- npm start 

HOW TO HOST/DEPLOY YOUR REACT APP
in Vscode terminal
1. cd huddlelandingpage-reactapp
2. npm install gh-pages --save -dev
3. go to package.json & add "homepage":"http://{username}.github.io/{repo-name}
4. go to package.json & add  
        "scripts": {
            //...
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
        }
5. git remote add origin https://github.com/buquio/huddlelandingpage-reactapp.git
6. npm run deploy
7. copy the link in your "home" to google search & view your site
8. go to github and refresh you will see all ur files **note: ur file are in complied format & you need to add it to ur main branch

PUSH TO GITHUB
9. do git status
10. git add .
11. git commit -m "Your awesome message"
12. git push origin master (first time)
13. git branch  (see all branches)
14. git branch -m main (create, switch & copy-over master branch into main branch)
15. git push --set-upstream origin main(first time) //or  git push origin main(any other time)


///to re-deploy your editted site do:
16. npm run deploy


/////////////////////////
////TO CONNECT FRONTEND TO BACKEND
// npm install axios 
// import axios
// axios.get('http://localhost:5000/users/')

////////////////OPTIONAL//////////////////////////////////////////////////
## in the public folder
-delete all the files inside it except index.html
-in the html: edit the title,add the <script src="./src/index.js" type="text/jsx"></script>,remove all the comment, add the cdn fontawesone-link for icons(as needed)
- create & add style.css
-copy the image for the icon from src/images into the public folder & edit the link for the icon
## in the src folder
- delete all files inside it except index.js 
- inside index.js: 
    remove import index.css, 
    edit ./app to import App from "./components/App", 
    remove import reportWebVitals from './reportWebVitals';
- copy & paste in your image folder
- in src folder create a folder called components: add a file called App.js, add all other needed component-files
- in the App.js: insert ur component-funtion-template using rc then press enter, copy and paste in ur new html,import in all needed folders as needed e.g images-folders,component-folders. 

## intructions to recreate an html-page to react
-paste in the html inside app.js
-make sure that all ur image-tag is closed with />
-make sure that the class is changed to className
-make sure that long paragraphs are on same line
-move a copy of the html-item u want to component into its component file 
-move every html-item to a file like the data-store/database
-then map the database file to create all the item-component here in app.js, set the props attributes
