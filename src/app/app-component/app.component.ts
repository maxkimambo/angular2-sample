import {Component, View, bootstrap} from 'angular2/angular2';
import {HeroesComponent} from '../heroes-component/heroes.component';
import {DashboardComponent} from '../dashboard-component/dashboard.component';
import {HeroService} from '../hero.service';

@Component({
	selector: 'my-app',
})
@View({
	template: '<h1>{{title}}</h1><my-heroes></my-heroes',
	directives: [HeroesComponent]
})
class AppComponent {
	public title = 'Tour of Heroes';
}

bootstrap(AppComponent, [HeroService]);
