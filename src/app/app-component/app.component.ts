import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from '../heroes-component/heroes.component';
import {DashboardComponent} from '../dashboard-component/dashboard.component';
import {HeroService} from '../hero.service';

@RouteConfig([
    {path: '/', as: 'Dashboard', component: DashboardComponent},
    {path: '/list', as: 'Heroes', component: HeroesComponent}
])
@Component({
	selector: 'my-app',
})
@View({
	templateUrl: 'app/app-component/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})
class AppComponent {
	public title = 'Tour of Heroes';
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HeroService]);
