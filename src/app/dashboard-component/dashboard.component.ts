import {Component, View, NgFor} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero, HeroService} from '../hero.service';
import {HeroCardComponent} from '../hero-card-component/hero.card.component';

@Component({
	selector: 'my-dashboard'
})
@View({
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [NgFor, HeroCardComponent]
})
export class DashboardComponent{
	//Dependency injection
	constructor(private _heroService: HeroService){}

	//function
	getHeroes(){
		return this._heroService.getHeroes();
	}
}
