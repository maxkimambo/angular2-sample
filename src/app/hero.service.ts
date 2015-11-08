import {Hero} from './hero';

export class HeroService{
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Superman"},
	{ "id": 12, "name": "Spiderman"},
	{ "id": 13, "name": "Wolferine"},
	{ "id": 14, "name": "Hulk"}
];