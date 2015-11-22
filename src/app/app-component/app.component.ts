import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from '../heroes-component/heroes.component';
import {DashboardComponent} from '../dashboard-component/dashboard.component';
import {HeroService} from '../hero.service';

var routes = {
    dashboard: {
        path: '/',
        as: 'Dashboard',
        component: DashboardComponent
    },
    heroes: {
        path: '/list',
        as: 'Heroes',
        component: HeroesComponent
    }
};

@RouteConfig([
  routes.dashboard,
  routes.heroes,
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
