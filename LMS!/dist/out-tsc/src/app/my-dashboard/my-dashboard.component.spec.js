"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var my_dashboard_component_1 = require("./my-dashboard.component");
describe('MyDashboardComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.fakeAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [my_dashboard_component_1.MyDashboardComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(my_dashboard_component_1.MyDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-dashboard.component.spec.js.map