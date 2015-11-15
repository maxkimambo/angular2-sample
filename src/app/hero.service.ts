/// <reference path="../../typings/firebase/firebase.d.ts" />

import {Hero} from './hero';

const FIREBASE_URL = 'https://radiant-torch-9235.firebaseio.com';

export class HeroService{
	firebase : Firebase;
	heroList : Hero[];

	constructor(){
		this.firebase = new Firebase(FIREBASE_URL);
		this.heroList = [];

		this.firebase.on('child_added',
			snapshot => this.addHeros(snapshot),
			errorObject => console.log('The read failed', errorObject.code)
		);
	}

	private addHeros(snapshot: FirebaseDataSnapshot) {
		var heroes = snapshot.val();
		for(var i in heroes){
			this.heroList.push(heroes[i]);
		}
	}

	getHeroes() {
		return Promise.resolve(this.heroList);
	}
}
