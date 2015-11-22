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
	public heroes: Hero[];
	//Dependency injection
	constructor(private _heroService: HeroService){}
	//function
	onInit(){
		this._heroService.getHeroes()
        .then((heroes: Hero[]) => this.heroes = heroes);
	}
}
