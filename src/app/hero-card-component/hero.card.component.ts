import {Component, View} from 'angular2/angular2';
import {HeroService, Hero} from '../hero.service';

@Component({
  selector: 'hero-card',
  properties: ['hero']
})
@View({
    templateUrl: 'app/hero-card-component/hero.card.component.html'
})
export class HeroCardComponent {
    constructor(private _heroService: HeroService){}

    removeHero(hero: Hero){
        this._heroService.remove(hero);
    }
}
