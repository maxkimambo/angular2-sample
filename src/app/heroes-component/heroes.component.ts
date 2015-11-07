import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes-component/heroes.component.html',
  styleUrls: ['app/heroes-component/heroes.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroesComponent {
	public heroes = HEROES;
	public selectedHero: Hero;
	onSelect(hero:Hero){
		this.selectedHero = hero;
	}
	getSelectedClass(hero: Hero) {
  		return { 'selected': hero === this.selectedHero };
	}
}
