import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {HeroCardComponent} from '../hero-card-component/hero.card.component';

@Component({
	selector: 'my-dashboard'
})
@View({
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroCardComponent]
})
export class DashboardComponent{
	public heroes: Hero[];

	constructor(private _heroService: HeroService){}

	onInit(){
		this._heroService.getHeroes()
        .then((heroes: Hero[]) => this.heroes = heroes);
	}
}
