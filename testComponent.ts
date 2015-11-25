import {Component, boostrap} from 'angular2/angular2'; 


class AppComponent {
	public message : string 
	
	constructor(){
		this.message = "Welcome to Angular2"; 
	}
}

bootstrap(AppComponent); 