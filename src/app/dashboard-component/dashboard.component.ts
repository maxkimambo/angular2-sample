import {Component, View, NgFor, Pipe} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero, HeroService} from '../hero.service';
import {HeroCardComponent} from '../hero-card-component/hero.card.component';
import {SearchPipe} from '../searchPipe'; 

@Component({
	selector: 'my-dashboard'
})
@View({
	pipes:[SearchPipe],	
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [NgFor, HeroCardComponent]
})
export class DashboardComponent{
	Heroes: any[]; 
	
	//Dependency injection
	constructor(private _heroService: HeroService){
		this.Heroes = [{name: "Willy Wonka", score: "300", skills: "Telling jokes", key: "-K4-U0HJski5zCShubeI"},
		{name: "Max", score: "100", skills: "AngularJS", key: "-K4-IBJ_TWI2K983naF_"} ]; 
		// this.Heroes.push({name: "Willy Wonka", score: "300", skills: "Telling jokes", key: "-K4-U0HJski5zCShubeI"}); 
		// this.Heroes.push({name: "Max", score: "100", skills: "AngularJS", key: "-K4-IBJ_TWI2K983naF_"}); 
		// this.Heroes.push({name: "Andreas", score: "80", skills: "Durandal", key: "-K4-CE3S3zpdPueO3Ssi"}); 
	}

	//function
	getHeroes(){
		this.Heroes = this._heroService.getHeroes(); 
		
		return this._heroService.getHeroes();
	}
	
	search(searchText:string){
		console.log(searchText); 
		if (searchText == null){
			return this.getHeroes(); 
		}
		
	this.Heroes = this.Heroes.filter((h) => {
			if (h.name.toLocaleLowerCase() == searchText.toLocaleLowerCase()){
				return true; 
			}
		});
		
	}
}
