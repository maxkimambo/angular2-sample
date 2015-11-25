import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {HeroService} from '../hero.service';
import {Hero} from '../hero.service';

@Component({
  selector: 'hero-details',
  properties: ['hero']
})
@View({
  templateUrl: 'app/details-component/details.component.html',
  directives: [FORM_DIRECTIVES]

})
export class DetailsComponent {

	constructor(private _heroService: HeroService){}

	onSubmit(hero: Hero) {
		this._heroService.save(hero);
	}
}
