import {Hero} from './hero';

export class HeroService{
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}

var HEROES: Hero[] = [
	{ "id": 1, "name": "Hulk"},
	{ "id": 2, "name": "Wolferine"},
	{ "id": 3, "name": "War Machine"},
	{ "id": 4, "name": "Mangneto"},
	{ "id": 5, "name": "Ant-Man"},
	{ "id": 6, "name": "Thor"},
	{ "id": 7, "name": "Captain America"},
	{ "id": 8, "name": "Batman"},
	{ "id": 9, "name": "Storm"},
	{ "id": 10, "name": "Subzero"},
	{ "id": 11, "name": "Iron Man"},
	{ "id": 12, "name": "Superman"},
];
