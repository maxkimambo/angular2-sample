import {Component, View} from 'angular2/angular2';
import {Router} from 'angular2/router'

@Component({
  selector: 'hero-card',
  properties: ['hero']
})
@View({
  templateUrl: 'app/hero-card-component/hero.card.component.html'
})
export class HeroCardComponent {

  constructor(private _router: Router){}

  goToDetails(event: Event){
    event.preventDefault();
    //TODO: this._router.navigate(['/Details']);
  }
}
