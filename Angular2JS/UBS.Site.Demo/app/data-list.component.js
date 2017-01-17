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
var data_service_1 = require('./data.service');
var DataListComponent = (function () {
    function DataListComponent(dataService) {
        this.dataService = dataService;
        this.allData = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    DataListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService
            .getAll()
            .subscribe(
        /* happy path */ function (d) { return _this.allData = d; }, 
        /* error path */ function (e) { return _this.errorMessage = e; }, 
        /* onComplete */ function () { return _this.isLoading = false; });
    };
    DataListComponent = __decorate([
        core_1.Component({
            selector: 'data-list',
            templateUrl: 'app/data-list-component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], DataListComponent);
    return DataListComponent;
}());
exports.DataListComponent = DataListComponent;
//# sourceMappingURL=data-list.component.js.map