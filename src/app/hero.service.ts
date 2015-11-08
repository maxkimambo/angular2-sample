import {Hero} from './hero';

export class HeroService{
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}

var HEROES: Hero[] = [
	{ "id": 1, "name": "Superman"},
	{ "id": 2, "name": "Spiderman"},
	{ "id": 3, "name": "Wolferine"},
	{ "id": 4, "name": "Hulk"}
];
