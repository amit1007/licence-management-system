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
var material_1 = require("@angular/material");
/** Constants used to fill up our data base. */
// const COLORS: string[] = ['suraj@gamil.com', 'vishal@gamil.com', 'manoj@gamil.com', 
//   'parshant@gamil.com', 'onkar@gamil.com', 'vikas@gamil.com', 'GOd@gamil.com', ];
// const NAMES: string[] = ['suraj','prashant ','manoj','onkar','vikas','GOD'];
var FreeUsersComponent = /** @class */ (function () {
    function FreeUsersComponent() {
        this.displayedColumns = ['id', 'name', 'RoxCode', ' Email '];
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new material_1.MatTableDataSource(users);
    }
    FreeUsersComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    FreeUsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], FreeUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], FreeUsersComponent.prototype, "sort", void 0);
    FreeUsersComponent = __decorate([
        core_1.Component({
            selector: 'app-free-users',
            templateUrl: './free-users.component.html',
            styleUrls: ['./free-users.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FreeUsersComponent);
    return FreeUsersComponent;
}());
exports.FreeUsersComponent = FreeUsersComponent;
/** Builds and returns a new User. */
function createNewUser(id) {
    // const name = NAMES
    // NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    // NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: 'suraj',
        RoxCode: 'Rox002',
        Email: 'UserName@gamil.com'
    };
}
//# sourceMappingURL=free-users.component.js.map