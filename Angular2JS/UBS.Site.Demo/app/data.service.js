"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost/UBS.Site.Demo/Home';
    }
    DataService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    DataService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.baseUrl + "/GetQuotesJson", { headers: this.getHeaders() })
            .map(function (res) { return _this.extractData(res); })
            .catch(function (err) { return _this.handleError(err); });
    };
    //getAll(): Observable<Data[]>{
    //	let allData$ = this.http
    //	.get(`${this.baseUrl}/GetQuotesJson`, {headers: this.getHeaders()})
    //	.map(function(res){
    //           return <Data> res.json();
    //       })
    //	.catch(this.handleError);
    //	return allData$;
    //}
    DataService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    DataService.prototype.handleError = function (error) {
        // log error
        var errorMsg = error.message || 'There was a problem with REST service call';
        console.error(errorMsg);
        // throw an application level error
        return Rx_1.Observable.throw(errorMsg);
    };
    DataService = __decorate([
        //Model
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map