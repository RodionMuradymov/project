"use strict";
const numberOfFilms= prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false


};
const oneFilm=prompt("Один из последних просмотренных фильмов?");
const ochenkf=prompt("На сколько оцените его");
personalMovieDB.movies={onefilm:ochenkf};
console.log(personalMovieDB);




