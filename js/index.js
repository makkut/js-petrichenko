'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt(
            'Сколько фильмов вы уже посмотрели?',
            ''
        );
        while (
            personalMovieDB.count == '' ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                'Сколько фильмов вы уже посмотрели?',
                ''
            );
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренных фильмов', ''),
                b = prompt('На сколько оцените его?', '');

            if (
                a != '' &&
                a != null &&
                a.length < 50 &&
                b.length != '' &&
                b != null
            ) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        console.log(personalMovieDB);
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы уиноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log('false', personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Введите ваш любимый жанр`, '').toLowerCase();
            if (genre === '' && genre === null) {
                console.log(
                    'Вы ввели некоректные данные или не ввели их вовсе'
                );
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
        });
    },
    toogleVisibleMyBD: function () {
        console.log(personalMovieDB.privat);
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toogleVisibleMyBD();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
