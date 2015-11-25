import {Pipe} from 'angular2/angular2'; 

@Pipe({
	name: 'SearchPipe'
})
export class SearchPipe {
	transform(value){
		console.log(value); 
		return value; 
	}
}