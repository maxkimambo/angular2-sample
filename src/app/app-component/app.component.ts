import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroesComponent} from '../heroes-component/heroes.component';
import {HeroService} from '../hero.service';

@Component({
	selector: 'my-app',
	template: '<h1>{{title}}</h1><my-heroes></my-heroes>',
  	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, HeroesComponent]
})
class AppComponent {
	public title = 'Tour of Heroes';
}

bootstrap(AppComponent, [HeroService]);
