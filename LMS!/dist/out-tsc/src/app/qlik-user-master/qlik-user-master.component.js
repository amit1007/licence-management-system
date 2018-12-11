"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("../api.service");
var collections_1 = require("@angular/cdk/collections");
var QlikUserMasterComponent = /** @class */ (function () {
    function QlikUserMasterComponent(api) {
        this.api = api;
        this.displayedColumns = ['RoxBOTQlikUserID', 'RoxBOTName'];
        this.dataSource = new QlikUSerDataSource(this.api);
    }
    QlikUserMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getQlikUsers()
            .subscribe(function (res) {
            console.log(res);
            _this.books = res;
        }, function (err) {
            console.log(err);
        });
    };
    QlikUserMasterComponent = __decorate([
        core_1.Component({
            selector: 'app-qlik-user-master',
            templateUrl: './qlik-user-master.component.html',
            styleUrls: ['./qlik-user-master.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], QlikUserMasterComponent);
    return QlikUserMasterComponent;
}());
exports.QlikUserMasterComponent = QlikUserMasterComponent;
var QlikUSerDataSource = /** @class */ (function (_super) {
    __extends(QlikUSerDataSource, _super);
    function QlikUSerDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    QlikUSerDataSource.prototype.connect = function () {
        return this.api.getQlikUsers();
    };
    QlikUSerDataSource.prototype.disconnect = function () {
    };
    return QlikUSerDataSource;
}(collections_1.DataSource));
exports.QlikUSerDataSource = QlikUSerDataSource;
//# sourceMappingURL=qlik-user-master.component.js.map