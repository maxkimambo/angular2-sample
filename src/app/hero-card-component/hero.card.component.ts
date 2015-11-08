import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'hero-card',
  properties: ['hero']
})
@View({
  templateUrl: 'app/hero-card-component/hero.card.component.html'
})
export class HeroCardComponent {
}
