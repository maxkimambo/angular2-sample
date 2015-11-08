import {Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
	selector: 'my-dashboard'
})
@View({
	templateUrl: 'app/dashboard-component/dashboard.component.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DashboardComponent implements OnInit{
	public heroes: Hero[];

	constructor(private _heroService: HeroService){}

	onInit(){
		this._heroService.getHeroes()
        .then((heroes: Hero[]) => this.heroes = heroes);
	}
}
