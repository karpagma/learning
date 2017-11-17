System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './home/welcome.component', './security/signup.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, welcome_component_1, signup_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            }],
        execute: function() {
            //import {ProductListComponent} from './products/product-list.component';
            //import {ProductDetailComponent} from './products/product-detail.component';
            //import {ProductService} from './products/product.service';
            let AppComponent = class AppComponent {
                constructor() {
                    this.pageTitle = 'OneHealth';
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'pm-app',
                    template: `
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Welcome']">Home</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                }),
                router_1.RouteConfig([
                    { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                    { path: '/signup', name: 'SignUp', component: signup_component_1.SignupComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map