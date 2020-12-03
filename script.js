let projects_array = [{
    title: "Calendar and scheduling using React",
    image: "https://github.com/harsharay/calendar-events/raw/master/Calendar-events.png",
    website: "https://harsharay.github.io/calendar-events/",
    techStack: "REACT JS, REACT-HOOKS, HTML5, CSS3",
    description: "Developed the website using React. This website is an enhanced Todo-list. The user can sign in with Google and can access his previously stored data anytime. This lets the user also add tasks from anywhere and syncs it with the latest data whenever the user wants.MaterialUI and Material Icons are also used."
},
{
    title: "Full Stack Quiz App",
    image: "https://github.com/harsharay/quiz-frontend/raw/master/quiz-app.png",
    website: "https://serene-shore-07017.herokuapp.com/",
    techStack: "Front-End: REACT JS, REACT-HOOKS, HTML5, CSS3 | Backend: Node JS, Express JS, MongoDB",
    description: "Developed a full-stack quiz app using React. There are several screens in the user flow. Routing is done using React-router-dom. The first screen shows the user to enter any username and validates it, if its already taken or not. Then the user will get 5 random questions from the backend and the score will calculated once the user submits the test. The tests taken by the user will be stored in the user database in mongo DB. There is a questions DB as well. Last page shows the user to enter his username and check his previous results. This includes previous scores and user answers along with correct answers for the respective questions."
},
{
    title: "Personal List with Firebase",
    image: "https://github.com/harsharay/todo-firebase/raw/master/firebaseTodoList.png",
    website: "https://harsharay.github.io/todo-firebase/",
    techStack: "Front-End: REACT JS, REACT-HOOKS, HTML5, CSS3 | Back-End: Firebase-firestore, Firebase-Authentication",
    description: "Created a website using React. This website is an enhanced Todo-list. The user can sign in with Google and can access his previously stored data anytime. This lets the user also add tasks from anywhere and syncs it with the latest data whenever the user wants. MaterialUI and Material Icons are also used."
},
{
    title: "iTunes Search",
    image: 'https://github.com/harsharay/itunesSearch/raw/master/Images/Itunes-search.png',
    website: "https://harsharay.github.io/itunesSearch/",
    techStack: "REACT JS, REDUX, REACT-HOOKS, REDUX SAGA, REST API, HTML5, CSS3",
    description: "Developed the website to search iTunes library by using the iTunes. This website is developed using REACT as the front-end JS library along with HTML, CSS. Technologies used along with React are React-Hooks, REDUX, REDUX-Saga. UI is created using ant.design and icons are by MaterialUI"
},
{
    title: "Movie Search",
    image: "https://github.com/harsharay/Movie_Search/raw/master/movie_search.png",
    website: "https://harsharay.github.io/Movie_Search/",
    techStack: "REACT JS, REACT-HOOKS, REST API, HTML5, CSS3",
    description: "Developed the website which fetches the data when a user searches for a specific movie"
},
{
    title: "CURRENCY CONVERTER",
    image: "https://github.com/harsharay/currency-converter/raw/master/currency-converter.png",
    website: "https://harsharay.github.io/currency-converter/",
    techStack: "REACT JS, REACT-HOOKS, REST API, HTML5, CSS3",
    description: "Developed a currency converter to determine the exchange rates between various currencies. This website uses external API and fetches the data upon the user's request."
},   
]

let projectsList = document.querySelector(".projects-list")
let mail = document.querySelector(".mail")
let mailText = document.querySelector(".mail-text")

projects_array.forEach((item) => {
    projectsList.innerHTML += 
    `<div class=indiProject href=${item.website} target="_blank">
        <h3 class=indiTitle>${item.title}</h3>
        <a href=${item.website} target="_blank">Click here for Live Demo</a>
        <img src="${item.image}" alt="test" class="project-image"/>
    </div>` 
})

mail.addEventListener("click", () => {
    mailText.classList.toggle("hide")
})




 