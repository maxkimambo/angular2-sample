import {bootstrap} from 'angular2/angular2';
import {AppComponent} from './app-component/app.component';
import {HeroService} from './hero.service';

bootstrap(AppComponent, [HeroService]);
