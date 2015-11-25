import {Component, View, NgFor} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero, HeroService} from '../hero.service';
import {HeroCardComponent} from '../hero-card-component/hero.card.component';
import {SearchPipe} from '../searchPipe'; 

@Component({
	selector: 'my-dashboard'
})
@View({
	pipes: [SearchPipe],
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [NgFor, HeroCardComponent]
})
export class DashboardComponent{
	Heroes: any; 
	
	//Dependency injection
	constructor(private _heroService: HeroService){}

	//function
	getHeroes(){
		this.Heroes = this._heroService.getHeroes(); 
		return this._heroService.getHeroes();
	}
	
	search(searchText:string){
		console.log(searchText); 
	}
}
