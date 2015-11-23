/// <reference path="../../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://heroes2015.firebaseio.com/';

export class Hero{
	name: string;
	score: number;
}

export class HeroService{
	firebase : Firebase;
	heroList : Hero[];

	constructor(){
		this.firebase = new Firebase(FIREBASE_URL);
		this.heroList = [];

		this.firebase.on('child_added',
			snapshot => this.addHero(snapshot),
			errorObject => console.log('The read failed', errorObject.code)
		);
		this.firebase.on('child_changed',
			snapshot => this.changeHero(snapshot),
			errorObject => console.log('The read failed', errorObject.code)
		);
	}

	saveHero(hero: Hero){
		var ref = this.firebase.child(hero.name);
		var newValues = { name:hero.name, score:hero.score };
	    ref.update(newValues);
	}

	getHeroes():Hero[]{
		return this.heroList;
	}

	private addHero(snapshot: FirebaseDataSnapshot) {
		var hero = snapshot.val();
		this.heroList.unshift(hero);

		this.sortList();
	}

	private changeHero(snapshot: FirebaseDataSnapshot) {
		var key = snapshot.key();

		this.heroList.some((hero, index) => {
			if (hero.name === key) {
				var updatedHero = snapshot.val();
				// Update the hero.
				this.heroList.splice(index, 1, updatedHero);
				return true;
			}
		});

		this.sortList();
	}

	private sortList() {
		this.heroList = this.heroList.sort((a, b) => {
			return b.score - a.score;
		});
	}
}
