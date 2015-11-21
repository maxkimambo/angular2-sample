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
		this.firebase.on('child_changed',
			snapshot => this.sortList(),
			errorObject => console.log('The read failed', errorObject.code)
		);
	}

	saveList(hero: Hero){
		var userScoreRef = this.firebase.child("scoreList").child(hero.name);
		userScoreRef.setWithPriority({ name:hero.name, score:hero.score }, hero.score);
	}

	getHeroes() {
		return Promise.resolve(this.heroList);
	}

	private addHeros(snapshot: FirebaseDataSnapshot) {
		var heroes = snapshot.val();
		for(var i in heroes){
			this.heroList.unshift(heroes[i]);
		}
		this.sortList();
	}

	private sortList() {
		this.heroList = this.heroList.sort((a, b) => {
			return b.score - a.score;
		});
	}
}
