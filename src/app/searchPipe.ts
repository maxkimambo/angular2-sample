import {Pipe} from 'angular2/angular2'; 

@Pipe({
	name: 'searchPipe'
})
export class SearchPipe {
	transform(value,args){
		console.log('searching for', args[0]); 
		console.log(value); 
		return value; 
	}
}