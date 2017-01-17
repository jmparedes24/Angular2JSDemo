import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Data } from './data';  //Model

@Injectable()
export class DataService{
	private baseUrl: string = 'http://localhost/UBS.Site.Demo/Home';

	constructor(private http : Http){
	}

	getAll(): Observable<Data[]>{
		let allData$ = this.http
		.get(`${this.baseUrl}/GetQuotesJson`, {headers: this.getHeaders()})
		.map(function(res){
            return <Data> res.json();
        })
		.catch(this.handleError);
		return allData$;
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		return headers;
	}
  
	private handleError (error: any) {
		// log error
		let errorMsg = error.message || 'There was a problem with REST service call'
		console.error(errorMsg);

		// throw an application level error
		return Observable.throw(errorMsg);
	}

}