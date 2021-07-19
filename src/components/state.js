import spa from './assets/imgs/projects/rededge-spa.png'
import movie from './assets/imgs/projects/movie-app.png'
import todo from './assets/imgs/projects/todo-app.png'


export const state = [
    {
      image:spa,
      name: 'Spa Rededge',
      linkCode: 'https://github.com/mickeysss/rededge-spa',
      linkDeploy:'https://mickeysss.github.io/rededge-spa/',
      description: 'SPA(Single Page Application) одностраничный сайт рекламно-информационного агенства.',
      stack:'Стек:HTML,CSS,JS'
    },
    {
      image: movie,
      name: 'Movie-app',
      linkCode: 'https://github.com/mickeysss/movie-app',
      linkDeploy:'https://mickeysss-movie-app.netlify.app/',
      description: 'Сайт фильмов позволяет искать фильмы по названию и смотреть описание фильмов. Стейт фильмов взят из сайта moviedb.org. ',
      stack:'Стек:React,Redux,Functional style components,API,CSS Modules'
    },
    {
      image: todo,
      name: 'Todo-app',
      linkCode: 'https://github.com/mickeysss/todo-app',
      linkDeploy:'https://todo-app-c3e17.web.app/',
      description: 'Приложение TODO, выполненное на React Hooks позволяет добавлять, удалять, сортировать задачи.',
      stack:'Стек:React,Functional style components,Material UI,CSS Modules'
    },
  ];