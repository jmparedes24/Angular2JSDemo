import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Data } from './data';  //Model

@Injectable()
export class DataService{
	private baseUrl: string = 'http://localhost/UBS.Site.Demo/Home';

	constructor(private http : Http){
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }

	getAll(): Observable<Data[]>{
        return this.http.get(`${this.baseUrl}/GetQuotesJson`, { headers: this.getHeaders() })
            .map((res) => this.extractData(res))
            .catch((err) => this.handleError(err));
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