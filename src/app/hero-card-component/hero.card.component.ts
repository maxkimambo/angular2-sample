import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'hero-card',
  properties: ['hero']
})
@View({
  template: `
  <div class="card grey lighten-3">
	  <div class="card-content">
	    <span class="card-title black-text">{{hero.name}}</span>
	    <p class="grey-text text-darken-2">{{hero.id}}</p>
	  </div>
  </div>
  `,
})
export class HeroCardComponent {
}
