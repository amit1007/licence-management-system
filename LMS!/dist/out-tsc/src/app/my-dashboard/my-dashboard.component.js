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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent(router) {
        this.router = router;
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    MyDashboardComponent.prototype.onAddPost = function () {
        this.router.navigate(['/LADetails']);
    };
    MyDashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: './my-dashboard.component.html',
            styleUrls: ['./my-dashboard.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());
exports.MyDashboardComponent = MyDashboardComponent;
//# sourceMappingURL=my-dashboard.component.js.map