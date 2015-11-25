/// <reference path="../../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://heroes2015.firebaseio.com/';

export class Hero{
	key: string;
	name: string;
	score: number;
	skills: string;
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

	save(hero: Hero){
		var ref = this.firebase.child(hero.key);
		var newValues = {
			name:hero.name,
			score:hero.score,
			skills: hero.skills
		};
		ref.update(newValues);
	}

	add(hero: Hero){
		var newHero = { name:hero.name, score:hero.score, skills: hero.skills };
	  this.firebase.push(newHero);
	}

	getHeroes():Hero[]{
		return this.heroList;
	}

	private addHero(snapshot: FirebaseDataSnapshot) {
		var hero = this.createHero(snapshot);
		this.heroList.push(hero);

		this.sortList();
	}

	private changeHero(snapshot: FirebaseDataSnapshot) {
		var key = snapshot.key();

		this.heroList.some((hero, index) => {
			if (hero.key === key) {
				var updatedHero = this.createHero(snapshot);
				// Update the hero.
				this.heroList.splice(index, 1, updatedHero);
				return true;
			}
		});

		this.sortList();
	}

	private createHero(snapshot: FirebaseDataSnapshot): Hero{
		var hero = snapshot.val();
		return hero;
	}

	private sortList() {
		this.heroList = this.heroList.sort((a, b) => {
			return b.score - a.score;
		});
	}
}
