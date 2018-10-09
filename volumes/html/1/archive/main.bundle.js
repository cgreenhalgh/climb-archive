webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__works_component__ = __webpack_require__("../../../../../src/app/works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_detail_component__ = __webpack_require__("../../../../../src/app/work-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_explorer_component__ = __webpack_require__("../../../../../src/app/work-explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__performance_detail_component__ = __webpack_require__("../../../../../src/app/performance-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/works', pathMatch: 'full' },
    { path: 'works', component: __WEBPACK_IMPORTED_MODULE_2__works_component__["a" /* WorksComponent */] },
    { path: 'work/:id', component: __WEBPACK_IMPORTED_MODULE_3__work_detail_component__["a" /* WorkDetailComponent */] },
    { path: 'performance/:id', component: __WEBPACK_IMPORTED_MODULE_5__performance_detail_component__["a" /* PerformanceDetailComponent */] },
    { path: 'explore/:id', component: __WEBPACK_IMPORTED_MODULE_4__work_explorer_component__["a" /* WorkExplorerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n\tpadding-top: 5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav\n\tclass=\"navbar navbar-inverse bg-inverse \">\n\t<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\n\t\taria-controls=\"exCollapsingNavbar2\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n\t<div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n\n\t\t<ul class=\"nav navbar-nav mr-auto\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/works\" routerLinkActive=\"active\">Works</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n\n<div class=\"container\">\n\t<ngb-alert type=\"info\" (close)=\"closeResearchWarning()\" *ngIf=\"!research.dismissed\">{{research.warning}}</ngb-alert>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Music Archive';
        this.isNavbarCollapsed = true;
        this.research = {
            dismissed: true,
            warning: "This website collects anonymous data about how it is used. Neither you nor this device can be identified from the collected data."
        };
    }
    AppComponent.prototype.closeResearchWarning = function () {
        // TODO persist
        this.research.dismissed = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__works_component__ = __webpack_require__("../../../../../src/app/works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_detail_component__ = __webpack_require__("../../../../../src/app/work-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__work_explorer_component__ = __webpack_require__("../../../../../src/app/work-explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__performance_detail_component__ = __webpack_require__("../../../../../src/app/performance-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__parts_map_component__ = __webpack_require__("../../../../../src/app/parts-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__records_service__ = __webpack_require__("../../../../../src/app/records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__linkapps_service__ = __webpack_require__("../../../../../src/app/linkapps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__playlist_form_component__ = __webpack_require__("../../../../../src/app/playlist-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__playlist_item_form_component__ = __webpack_require__("../../../../../src/app/playlist-item-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__works_component__["a" /* WorksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__work_detail_component__["a" /* WorkDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__work_explorer_component__["a" /* WorkExplorerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__performance_detail_component__["a" /* PerformanceDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__parts_map_component__["a" /* PartsMapComponent */],
                __WEBPACK_IMPORTED_MODULE_14__playlist_item_form_component__["a" /* PlaylistItemFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__playlist_form_component__["a" /* PlaylistFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__records_service__["a" /* RecordsService */], __WEBPACK_IMPORTED_MODULE_12__linkapps_service__["a" /* LinkappsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
// general entity
var Entity = (function () {
    function Entity(fields) {
        this.fields = fields;
        this.id = fields['annal:id'];
        this.type_id = fields['annal:type_id'];
        this.label = fields['rdfs:label'];
        this.description = fields['rdfs:comment'];
    }
    Entity.prototype.getValues = function (fieldname, subfieldname) {
        var res = [];
        //console.log('getValues('+fieldname+', subfieldname) on '+this.type_id+'/'+this.id);
        subfieldname = subfieldname ? subfieldname : fieldname;
        if (undefined !== this.fields[fieldname]) {
            var val = this.fields[fieldname];
            if (Array.isArray(val)) {
                for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                    var item = val_1[_i];
                    if (typeof (item) == 'string')
                        res.push(item);
                    else if (typeof (item) == 'number')
                        res.push(String(item));
                    else if (typeof (item) == 'object' && item[subfieldname] !== undefined && typeof (item[subfieldname]) == 'string')
                        res.push(item[subfieldname]);
                    else if (typeof (item) == 'object' && item[subfieldname] !== undefined && typeof (item[subfieldname]) == 'number')
                        res.push(Number(item[subfieldname]));
                    else
                        console.log('getValues for non-string array value ' + JSON.stringify(item) + ':' + typeof (item));
                }
            }
            else if (typeof (val) == 'string') {
                res.push(val);
            }
            else if (typeof (val) == 'number') {
                res.push(String(val));
            }
            else {
                console.log('getValues for non-string value ' + val + ':' + typeof (val));
            }
        }
        //console.log(res);
        return res;
    };
    Entity.prototype.getNumberValues = function (fieldname, subfieldname) {
        var res = [];
        //console.log('getValues('+fieldname+', subfieldname) on '+this.type_id+'/'+this.id);
        subfieldname = subfieldname ? subfieldname : fieldname;
        if (undefined !== this.fields[fieldname]) {
            var val = this.fields[fieldname];
            if (Array.isArray(val)) {
                for (var _i = 0, val_2 = val; _i < val_2.length; _i++) {
                    var item = val_2[_i];
                    if (typeof (item) == 'number')
                        res.push(item);
                    else if (typeof (item) == 'object' && item[subfieldname] !== undefined && typeof (item[subfieldname]) == 'number')
                        res.push(item[subfieldname]);
                    else
                        console.log('getNumberValues for non-number array value ' + JSON.stringify(item) + ':' + typeof (item));
                }
            }
            else if (typeof (val) == 'number') {
                res.push(val);
            }
            else {
                console.log('getNumberValues for non-number value ' + val + ':' + typeof (val));
            }
        }
        //console.log(res);
        return res;
    };
    Entity.prototype.getValue = function (fieldname, subfieldname) {
        var vs = this.getValues(fieldname, subfieldname);
        if (vs.length == 0)
            return '';
        return vs[0];
    };
    Entity.prototype.getNumberValue = function (fieldname, subfieldname) {
        var vs = this.getNumberValues(fieldname, subfieldname);
        if (vs.length == 0)
            return 0;
        return vs[0];
    };
    Entity.prototype.getTime = function (fieldname, subfieldname) {
        var v = this.getValue(fieldname, subfieldname);
        if ('' == v || !v)
            return 0;
        return new Date(v).getTime() * 0.001;
    };
    Entity.prototype.compareTo = function (b, field) {
        var v1 = this.getValues(field);
        var v2 = b.getValues(field);
        if (v1.length == 0) {
            if (v2.length == 0)
                return 0;
            return 1;
        }
        if (v2.length == 0)
            return -1;
        return v1[0].localeCompare(v2[0]);
    };
    Entity.prototype.compareToNumber = function (b, field) {
        var v1 = this.getValues(field);
        var v2 = b.getValues(field);
        if (v1.length == 0) {
            if (v2.length == 0)
                return 0;
            return 1;
        }
        if (v2.length == 0)
            return -1;
        return Number(v1[0]) - Number(v2[0]);
    };
    return Entity;
}());



/***/ }),

/***/ "../../../../../src/app/linkapps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkappsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { RTCPeerConnection } from 'webrtc';
var LinkappsService = (function () {
    function LinkappsService() {
        var _this = this;
        this.messageEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        console.log('created LinkappsService');
        window.addEventListener('message', function (ev) { return _this.onMessage(ev); });
    }
    LinkappsService.prototype.onMessage = function (ev) {
        console.log('window message: ', ev);
        if (typeof ev.data == 'string') {
            var msg = JSON.parse(ev.data);
            if ('mrl-music.archive/1.0' != msg.version) {
                console.log('ignore window message with no/wrong version: ', ev.data);
                return;
            }
            this.messageEmitter.emit(msg);
        }
    };
    LinkappsService.prototype.getEmitter = function () {
        return this.messageEmitter;
    };
    LinkappsService.prototype.openMeld = function () {
        console.log('open meld');
        this.meldWindow = window.open('http://localhost:8080/archive', 'meldwindow', null);
    };
    LinkappsService.prototype.meldPartPerformance = function (partid, performanceid) {
        if (!this.meldWindow)
            return;
        if (!performanceid)
            return;
        if (partid) {
            partid = partid.replace('Climb_', '');
        }
        else {
            partid = 'basecamp';
        }
        console.log("set meld part " + partid + " performance " + performanceid);
        // avoid: race
        //this.meldWindow.postMessage({type: "performance", payload:performanceid}, "*"); 
        //this.meldWindow.postMessage({type: "fragment", payload:partid}, "*");
        this.meldWindow = window.open('http://localhost:8080/archive?perf=' + encodeURIComponent(performanceid) + '&frag=' + encodeURIComponent(partid), 'meldwindow', null);
    };
    LinkappsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LinkappsService);
    return LinkappsService;
}());



/***/ }),

/***/ "../../../../../src/app/parts-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* parts-map css */\n\n.parts-map {\n\t\n}\n.part-g circle {\n\tstroke: black;\n\tstroke-width: 4px;\n\topacity: 1;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n\n.part-g-heatmap circle {\n\tstroke: black;\n\tstroke-width: 4px;\n\topacity: 1;\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n\n.part-g.default circle {\n\tfill: rgb(80,80,80);\n}\n.part-g.selected circle {\n\tfill: #C3C2F4;\n}\n\n.part-g.available circle {\n\tfill: rgb(255, 165, 0);\n}\n\n.part-g.active circle {\n\tfill: #C3C2F4;\n}\n\n.part-g text {\n\tfill: rgb(192,192,192);\n\tfont-family: Verdana;\n\tfont-size: 20px;\n\t/*cursor: pointer;*/\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n.part-line {\n\tstroke: rgb(100,100,100);\n\tstroke-width: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parts-map.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- parts-map -->\n\t<svg class=\"parts-map img-fluid\" viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink= \"http://www.w3.org/1999/xlink\" width=\"400px\" height=\"400px\">\n\t\t<!-- cludge to cut off top/bottom -->\n\t\t<g [attr.transform]=\"work.id=='Climb' ? 'matrix(0.4 0 0 0.4 0 -70)' : 'scale(0.4)'\">\n\t\t\t<!-- and again for image/coordinate offset - don't know why at all on this one! -->\n\t\t\t<g [attr.transform]=\"work.id=='Climb' ? 'matrix(1.0 0 0 1.0 0 10)' : 'scale(1)'\">\n\t\t\t\t<image [attr.xlink:href]=\"work.getValue('coll:map_url')\" x=\"0\" y=\"0\" width=\"1000px\" height=\"1500px\" preserveAspectRatio=\"none\"></image>\n\t\t\t</g>\n\t\t\t<line *ngFor=\"let line of lines\"\n\t\t\t\t[attr.x1]=\"line.from.getNumberValue('coll:map_x')*1000\"\n\t\t\t\t[attr.y1]=\"line.from.getNumberValue('coll:map_y')*1500\" \n\t\t\t\t[attr.x2]=\"line.to.getNumberValue('coll:map_x')*1000\"\n\t\t\t\t[attr.y2]=\"line.to.getNumberValue('coll:map_y')*1500\" \n\t\t\t\tclass=\"part-line\">\n\t\t\t</line>\n\t\t\t<g *ngFor=\"let part of parts\" [attr.transform]=\"'translate('+(part.getNumberValue('coll:map_x')*1000)+' '+(part.getNumberValue('coll:map_y')*1500)+')'\"\n\t\t\t\tclass=\"part-g\" [ngClass]=\"{'active': part.active, 'available': part.available, 'selected': part.selected, 'default': !part.selected && !part.active && !part.available }\">\n\t\t\t\t<text x=\"0\" y=\"40\" text-anchor=\"middle\" class=\"part-label\">{{part.label}}</text>\n\t\t\t</g>\n\t\t\t<g *ngFor=\"let part of parts\" [attr.transform]=\"'translate('+(part.getNumberValue('coll:map_x')*1000)+' '+(part.getNumberValue('coll:map_y')*1500)+')'\"\n\t\t\t\tclass=\"part-g\" [ngClass]=\"{'active': part.active, 'available': part.available, 'selected': part.selected, 'default': !part.selected && !part.active && !part.available }\">\n\t\t\t\t<a *ngIf=\"!heatmap\" (click)=\"clickPartPlay($event,part)\" class=\"pointer\">\n\t\t\t\t\t<circle class=\"part-circle\" r=\"20\"></circle>\n\t\t\t\t</a>\n\t\t\t</g>\n\t\t\t<g *ngFor=\"let part of parts\" [attr.transform]=\"'translate('+(part.getNumberValue('coll:map_x')*1000)+' '+(part.getNumberValue('coll:map_y')*1500)+')'\"\n\t\t\t\tclass=\"part-g-heatmap\" [ngClass]=\"{'active': part.active, 'available': part.available, 'selected': part.selected, 'default': !part.selected && !part.active && !part.available }\">\n\t\t\t\t<a *ngIf=\"heatmap\" (click)=\"clickPartPlay($event,part)\" class=\"pointer\">\n\t\t\t\t\t<circle class=\"part-circle\" r=\"20\" [style]=\"part.heatmapStyle\"></circle>\n\t\t\t\t</a>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n\t<!-- <ul>\n\t\t<li *ngFor=\"let part of parts\">{{part.label}}</li>\n\t</ul> -->\n"

/***/ }),

/***/ "../../../../../src/app/parts-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartsMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity__ = __webpack_require__("../../../../../src/app/entity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Line = (function () {
    function Line(from, to) {
        this.from = from;
        this.to = to;
    }
    return Line;
}());
var PartsMapComponent = (function () {
    function PartsMapComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.lines = [];
    }
    PartsMapComponent.prototype.clickPartPlay = function (event, part) {
        //console.log('parts-map clickPartPlay '+part.id);
        this.select.emit(part);
    };
    PartsMapComponent.prototype.ngOnChanges = function (changes) {
        console.log('onChanges', changes);
        if (changes.parts && changes.parts.currentValue) {
            var parts = {};
            for (var pi in changes.parts.currentValue) {
                parts[changes.parts.currentValue[pi].getValue('coll:part_id')] = changes.parts.currentValue[pi];
            }
            var lines = [];
            for (var pi in parts) {
                var part = parts[pi];
                var cues = part.getValues('coll:map_cue');
                for (var ci in cues) {
                    var cue = parts[cues[ci]];
                    if (cue) {
                        lines.push(new Line(part, cue));
                    }
                    console.log('line from ' + part.id + ' to ' + cues[ci]);
                }
                part.heatmapStyle = this.domSanitizer.bypassSecurityTrustStyle('fill:' + part.heatmapColor + ';');
            }
            this.lines = lines;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], PartsMapComponent.prototype, "parts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__entity__["a" /* Entity */])
    ], PartsMapComponent.prototype, "work", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PartsMapComponent.prototype, "heatmap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PartsMapComponent.prototype, "select", void 0);
    PartsMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'parts-map',
            template: __webpack_require__("../../../../../src/app/parts-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parts-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], PartsMapComponent);
    return PartsMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/performance-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"performance\"><h3>{{performance.label}}</h3>\n\t<p>At {{performance.getValue('prov:startedAtTime')}}</p>\n\t<h4>Performers</h4>\n\t<ul>\n\t\t<li *ngFor=\"let perf of performers\">{{perf.label}}</li>\n\t</ul>\n\t<h4>Sub-events</h4>\n\t<ul>\n\t\t<li *ngFor=\"let sub of subevents\">{{sub.getValue('prov:startedAtTime')}}: {{sub.label}}</li>\n\t</ul>\n\t<h4>Recordings</h4>\n\t<ul>\n\t\t<li *ngFor=\"let rec of recordings\">{{rec.label}} <a *ngFor=\"let url of rec.getValues('urls')\" href=\"{{url}}\">{{url}} </a></li>\n\t</ul>\n\t<button (click)=\"goBack()\">Back</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/performance-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__records_service__ = __webpack_require__("../../../../../src/app/records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerformanceDetailComponent = (function () {
    function PerformanceDetailComponent(recordsService, route, location) {
        this.recordsService = recordsService;
        this.route = route;
        this.location = location;
        this.subevents = [];
        this.recordings = [];
        this.performers = [];
    }
    PerformanceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.recordsService.getPerformance(params['id']); })
            .subscribe(function (performance) {
            _this.performance = performance;
            _this.recordsService.getPerformersOfPerformance(performance)
                .then(function (performers) {
                _this.performers = performers
                    .sort(function (a, b) { return a.compareTo(b, 'rdfs:label'); });
            });
            _this.recordsService.getSubEvents(performance)
                .then(function (subevents) {
                _this.subevents = subevents
                    .sort(function (a, b) { return a.compareTo(b, 'prov:startedAtTime'); });
            });
            _this.recordsService.getRecordingsOfPerformance(performance)
                .then(function (recordings) {
                Promise.all(recordings.map(function (rec) { return _this.recordsService.getUrlsOfRecording(rec).then(function (urls) { return rec.fields['urls'] = urls; }); }))
                    .then(function () { return _this.recordings = recordings; });
            });
        });
    };
    PerformanceDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PerformanceDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'performance-detail',
            template: __webpack_require__("../../../../../src/app/performance-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__records_service__["a" /* RecordsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], PerformanceDetailComponent);
    return PerformanceDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playlist-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  background: rgba(0,0,0,0.6);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/playlist-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': 'block'}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit Playlist</h5>\n        <button type=\"button\" class=\"close\" (click)=\"revert()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label class=\"center-block\">Title:</label>\n          <input class=\"form-control\" formControlName=\"title\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"center-block\">Import:</label>\n          <input type=\"file\" (change)=\"fileUpdated($event)\" formControlName=\"file\" accept=\"application/json\"/>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button [disabled]=\"disabled || !form.valid\" type=\"submit\" class=\"btn btn-primary\">Save</button>\n        <button [disabled]=\"disabled\" type=\"button\" class=\"btn btn-secondary\" (click)=\"onExport()\">Export</button>\n        <button [disabled]=\"disabled\" type=\"button\" class=\"btn btn-secondary\" (click)=\"revert()\">Cancel</button>\n        <button [disabled]=\"disabled\" type=\"button\" class=\"btn btn-secondary\" (click)=\"onDelete()\">Delete</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/playlist-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__("../../../../../src/app/types.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaylistFormComponent = (function () {
    function PlaylistFormComponent(fb) {
        this.fb = fb;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dodelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.doexport = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.createForm();
    }
    PlaylistFormComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            file: [''],
        });
    };
    PlaylistFormComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
        if (this.disabled)
            this.form.disable();
        else
            this.form.enable();
    };
    PlaylistFormComponent.prototype.rebuildForm = function () {
        console.log('rebuild form', this.playlist);
        this.form.reset(this.playlist);
    };
    PlaylistFormComponent.prototype.fileUpdated = function ($event) {
        var _this = this;
        var files = $event.target.files || $event.srcElement.files;
        this.file = files[0];
        console.log('change file', this.file);
        var reader = new FileReader();
        reader.addEventListener("loadend", function () {
            // reader.result contains the contents of blob as a typed array
            var text = reader.result;
            try {
                var info = JSON.parse(text);
                if (info.title === undefined || info.items === undefined) {
                    console.log('does not resemble playlist', info);
                    alert('Sorry, that does not seem to be a valid playlist');
                }
                console.log('read playlist', info);
                _this.playlist = info;
                _this.rebuildForm();
            }
            catch (err) {
                console.log('error parsing file as json', err);
                alert('Sorry, that does not seem to be a valid playlist');
            }
        });
        reader.readAsText(this.file);
    };
    PlaylistFormComponent.prototype.onSubmit = function () {
        this.playlist = this.prepareSavePlaylist();
        this.rebuildForm();
        this.save.emit(this.playlist);
    };
    PlaylistFormComponent.prototype.prepareSavePlaylist = function () {
        var formModel = this.form.value;
        var savePlaylist = {
            title: formModel.title,
            items: this.playlist.items,
        };
        return savePlaylist;
    };
    PlaylistFormComponent.prototype.revert = function () {
        this.rebuildForm();
        this.cancel.emit(null);
    };
    PlaylistFormComponent.prototype.onDelete = function () {
        this.dodelete.emit(null);
    };
    PlaylistFormComponent.prototype.onExport = function () {
        var playlist = this.prepareSavePlaylist();
        this.doexport.emit(playlist);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__types__["a" /* PlaylistInfo */])
    ], PlaylistFormComponent.prototype, "playlist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PlaylistFormComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistFormComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistFormComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistFormComponent.prototype, "dodelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistFormComponent.prototype, "doexport", void 0);
    PlaylistFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'playlist-form',
            template: __webpack_require__("../../../../../src/app/playlist-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlist-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], PlaylistFormComponent);
    return PlaylistFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/playlist-item-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': 'block'}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit Playlist Item</h5>\n        <button type=\"button\" class=\"close\" (click)=\"revert()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label class=\"center-block\">Title:</label>\n          <input class=\"form-control\" formControlName=\"title\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"center-block\">Start Time:</label>\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"resetStartTime()\">Clear</button>\n          <button *ngIf=\"item.currentTime!==undefined\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"setStartTime()\">Now</button>\n          <input class=\"form-control\" type=\"number\" min=\"0\" formControlName=\"startTime\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"center-block\">End Time:</label>\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"resetEndTime()\">Clear</button>\n          <button *ngIf=\"item.currentTime!==undefined\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"setEndTime()\">Now</button>\n          <input class=\"form-control\" type=\"number\" min=\"0\" formControlName=\"endTime\">\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button [disabled]=\"disabled || !form.valid\" type=\"submit\" class=\"btn btn-primary\">Save</button>\n        <button [disabled]=\"disabled\" type=\"button\" class=\"btn btn-secondary\" (click)=\"revert()\">Cancel</button>\n        <button [disabled]=\"disabled\" type=\"button\" class=\"btn btn-secondary\" (click)=\"onDelete()\">Delete</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/playlist-item-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistItemFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaylistItemFormComponent = (function () {
    function PlaylistItemFormComponent(fb) {
        this.fb = fb;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dodelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.createForm();
    }
    PlaylistItemFormComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            startTime: [''],
            endTime: [''],
        });
    };
    PlaylistItemFormComponent.prototype.ngOnChanges = function () {
        this.rebuildForm();
        if (this.disabled)
            this.form.disable();
        else
            this.form.enable();
    };
    PlaylistItemFormComponent.prototype.rebuildForm = function () {
        console.log('rebuild form', this.item);
        this.form.reset(this.item);
    };
    PlaylistItemFormComponent.prototype.onSubmit = function () {
        this.item = this.prepareSaveItem();
        this.rebuildForm();
        this.save.emit(this.item);
    };
    PlaylistItemFormComponent.prototype.prepareSaveItem = function () {
        var formModel = this.form.value;
        var saveItem = {
            title: formModel.title,
            performance: this.item.performance,
            part: this.item.part,
            startTime: (formModel.startTime ? Number(formModel.startTime) : null),
            endTime: (formModel.endTime ? Number(formModel.endTime) : null),
        };
        return saveItem;
    };
    PlaylistItemFormComponent.prototype.revert = function () {
        this.rebuildForm();
        this.cancel.emit(null);
    };
    PlaylistItemFormComponent.prototype.onDelete = function () {
        this.dodelete.emit(null);
    };
    PlaylistItemFormComponent.prototype.resetStartTime = function () {
        this.form.get('startTime').setValue(null);
    };
    PlaylistItemFormComponent.prototype.setStartTime = function () {
        this.form.get('startTime').setValue(this.item.currentTime);
    };
    PlaylistItemFormComponent.prototype.resetEndTime = function () {
        this.form.get('endTime').setValue(null);
    };
    PlaylistItemFormComponent.prototype.setEndTime = function () {
        this.form.get('endTime').setValue(this.item.currentTime);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PlaylistItemFormComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PlaylistItemFormComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistItemFormComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistItemFormComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], PlaylistItemFormComponent.prototype, "dodelete", void 0);
    PlaylistItemFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'playlist-item-form',
            template: __webpack_require__("../../../../../src/app/playlist-item-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/playlist-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], PlaylistItemFormComponent);
    return PlaylistItemFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/records.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity__ = __webpack_require__("../../../../../src/app/entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordsService = (function () {
    function RecordsService(http) {
        this.http = http;
        this.recordsUrl = 'assets/data/urls.json';
        this.records = [];
        this.rawRecords = [];
        this.recordsPromise = null;
    }
    RecordsService.prototype.getRecords = function () {
        var _this = this;
        if (this.recordsPromise !== null)
            return this.recordsPromise;
        this.recordsPromise = this.http.get(this.recordsUrl)
            .toPromise()
            .then(function (response) {
            var urls = response.json();
            console.log('read ' + urls.length + ' urls');
            return Promise.all(urls.map(function (url, ix) {
                return _this.http.get(url)
                    .toPromise().then(function (response) {
                    var records = response.json()['annal:entity_list'];
                    _this.rawRecords[ix] = records;
                    console.log('read ' + url + ' => ' + records.length + ' records');
                });
            }))
                .then(function (res) { return _this.fixRecords(); });
        })
            .catch(this.handleError);
        return this.recordsPromise;
    };
    RecordsService.prototype.fixRecords = function () {
        console.log('fixRecords ' + this.rawRecords.length);
        this.records = [];
        var ids = {};
        // in reverse order
        var rrs = this.rawRecords.reverse();
        for (var _i = 0, rrs_1 = rrs; _i < rrs_1.length; _i++) {
            var rr = rrs_1[_i];
            var rs = rr.reverse(); // probably not needed
            for (var _a = 0, rs_1 = rs; _a < rs_1.length; _a++) {
                var r = rs_1[_a];
                var id = r['annal:type_id'] + '/' + r['annal:id'];
                if (ids[id] === undefined) {
                    ids[id] = r;
                    this.records.push(new __WEBPACK_IMPORTED_MODULE_2__entity__["a" /* Entity */](r));
                    //console.log('added '+id);
                }
            }
        }
        console.log('fixRecords -> total ' + this.records.length + ' records');
        return this.records;
    };
    RecordsService.prototype.getEntity = function (type_id, id) {
        return this.getRecords().then(function (records) {
            return records.find(function (record) { return record.type_id == type_id && record.id == id; });
        });
    };
    RecordsService.prototype.getWork = function (id) {
        return this.getEntity('Performed_work', id);
    };
    RecordsService.prototype.getWorks = function () {
        return this.getRecords().then(function (records) { return records.filter(function (record) { return record.type_id == 'Performed_work'; }); });
    };
    RecordsService.prototype.getPerformancesOfWork = function (work) {
        return this.getRecords().
            then(function (records) { return records.filter(function (record) { return 'Performance' == record.type_id &&
            !record.getValue('coll:hidden') &&
            record.getValues('frbroo:R25F_performed_r', 'frbroo:R25F_performed').indexOf(work.type_id + '/' + work.id) >= 0; }); });
    };
    RecordsService.prototype.getPerformance = function (id) {
        return this.getRecords().then(function (records) { return records.find(function (record) { return record.type_id == 'Performance' && record.id == id; }); });
    };
    RecordsService.prototype.getValuesAsEntities = function (entity, fieldname, subfieldname) {
        var _this = this;
        var eventids = entity.getValues(fieldname, subfieldname);
        var subevents = [];
        return Promise.all(eventids.map(function (eventid) {
            var parts = eventid.split('/');
            _this.getEntity(parts[0], parts[1])
                .then(function (e) {
                if (e)
                    subevents.push(e);
                else {
                    console.log('Error: could not find subevent ' + parts[0] + '/' + parts[1]);
                }
            });
        })).then(function () { return subevents; });
    };
    RecordsService.prototype.getSubEvents = function (entity) {
        return this.getValuesAsEntities(entity, 'event:sub_event');
    };
    RecordsService.prototype.getMembers = function (entity) {
        return this.getValuesAsEntities(entity, 'frbroo:R10_has_member');
    };
    RecordsService.prototype.getRecordingsOfPerformance = function (performance) {
        return this.getRecords().
            then(function (records) { return records.filter(function (record) { return 'Recording' == record.type_id &&
            record.getValues('mo:records').indexOf(performance.type_id + '/' + performance.id) >= 0; }); });
    };
    RecordsService.prototype.getUrlsOfRecording = function (recording) {
        return this.getValuesAsEntities(recording, 'coll:linked_audio_clips', 'coll:linked_audio_m').
            then(function (audio_clips) { var urls = audio_clips.map(function (audio_clip) { return audio_clip.getValue('coll:audio_clip'); }); /*console.log('urls',urls); */ /*console.log('urls',urls); */ return urls; });
    };
    RecordsService.prototype.getPerformersOfPerformance = function (performance) {
        return this.getValuesAsEntities(performance, 'prov:qualifiedAssociation', 'crm:P12i_was_present_at');
    };
    RecordsService.prototype.getComposersOfWork = function (work) {
        return this.getValuesAsEntities(work, 'annal:member', 'prov:wasAttributedTo');
    };
    RecordsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    RecordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RecordsService);
    return RecordsService;
}());



/***/ }),

/***/ "../../../../../src/app/types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistInfo; });
var PlaylistInfo = (function () {
    function PlaylistInfo() {
    }
    return PlaylistInfo;
}());



/***/ }),

/***/ "../../../../../src/app/work-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"work\"><h1>{{work.label}}</h1>\n<!-- \t<p>By <a >{{}}</a></p> -->\n\t<div [innerHTML]=\"work.description\"></div>\n<!-- \n\t<h2>Performances</h2>\n\t<ul>\n\t\t<li *ngFor=\"let perf of performances\">{{perf.getValue('prov:startedAtTime')}}: <a  [routerLink]=\"['/performance', perf.id]\">{{perf.label}}</a></li>\n\t</ul>\n-->\n\t<p>See also:</p>\n\t<ul>\n\t\t<li *ngFor=\"let url of work.getValues('entity:seeAlso_r','rdfs:seeAlso')\"><a href=\"{{url}}\" target=\"_seealso\">{{url}}</a></li>\n\t</ul>\n\t<div *ngFor=\"let composer of composers\">\n\t\t<h2>By {{composer.label}}</h2>\n\t\t<div [innerHTML]=\"composer.description\"></div>\n\t\t<p>See also:</p>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let url of composer.getValues('entity:seeAlso_r','rdfs:seeAlso')\"><a href=\"{{url}}\" target=\"_seealso\">{{url}}</a></li>\n\t\t</ul>\n\t</div>\n \t<h2 *ngIf=\"parts.length>0\">Parts (stages)</h2>\n \t<p>{{work.label}} is comprised of the following musical parts or stages:</p>\n\t<ul>\n\t\t<li *ngFor=\"let part of parts\">{{part.label}}: {{part.description}}</li>\n\t</ul>\n \t<p><button (click)=\"goBack()\">Back</button></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/work-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__records_service__ = __webpack_require__("../../../../../src/app/records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkDetailComponent = (function () {
    function WorkDetailComponent(recordsService, route, location) {
        this.recordsService = recordsService;
        this.route = route;
        this.location = location;
        this.performances = [];
        this.parts = [];
        this.composers = [];
    }
    WorkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.recordsService.getWork(params['id']); })
            .subscribe(function (work) {
            _this.work = work;
            _this.recordsService.getPerformancesOfWork(work)
                .then(function (performances) { return _this.performances = performances
                .sort(function (a, b) { return a.compareTo(b, 'prov:startedAtTime'); }); });
            _this.recordsService.getMembers(work)
                .then(function (members) { return _this.parts = members
                .sort(function (a, b) { return a.compareTo(b, 'coll:part_rank'); }); });
            _this.recordsService.getComposersOfWork(work)
                .then(function (composers) { return _this.composers = composers
                .sort(function (a, b) { return a.compareTo(b, 'rdfs:label'); }); });
        });
    };
    WorkDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    WorkDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'work-detail',
            template: __webpack_require__("../../../../../src/app/work-detail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__records_service__["a" /* RecordsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WorkDetailComponent);
    return WorkDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/work-explorer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* work-explorer */\n.performance {\n\tborder: 1px solid rgba(128,128,128,0.2);\n}\n.part {\n\tborder: 1px solid rgba(128,128,128,0.2);\n}\n.highlighted {\n\t/*box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);*/\n\tbackground-color: rgba(0,0,0,0.1);\n}\n.pointer {\n\tcursor: pointer;\n}\na {\n\tcursor: pointer;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\ni {\n\tvertical-align: middle;\n}\nspan.time {\n\tfont-family: monospace;\n\tfont-size: 150%;\n}\nspan.performer {\n\tfont-style: italic;\n}\n.countdown.inactive {\n\t/*background-color: rgba(0,0,0,0.1);*/\n}\n.countdown.active {\n\tbackground-color: rgba(0,1,0,0.5);\n}\n.time.highlight {\n\tbackground-color: rgba(0,1,0,0.2);\n}\nvideo {\n\twidth: 100%;\n\theight: auto;\n}\nvideo.hidden {\n\tdisplay: none;\n}\n\n.hidden {\n\tdisplay:none;\n}\n.appframe {\n\tposition: fixed;\n\tbottom: 3px;\n\tright: 3px;\n\twidth: 317px;\n\theight: 525px;\n\tborder: 3px solid grey;\n\tborder-radius: 3px;\n\tbackground: black;\n\tz-index: 10;\n}\n.appframeContent {\n\twidth: 480px;\n\theight: 800px;\n    -webkit-transform: scale(0.65);\n    transform: scale(0.65);\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n}\n.containerShiftLeft {\n\tmargin-left: 30px !important;\n}\n@media screen and (max-width: 1200px) {\n\t.hideIfNotWide {\n\t\tdisplay:none;\n\t}\n}\n.blankAtBottom {\n\theight: 300px;\n}\n.playlistFeedback {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted grey;\n  color: #005050;\n}\n\n.playlistFeedback .playlistFeedbackText {\n  /*visibility: hidden;*/\n  position: absolute;\n  width: auto;\n/*  background-color: #4f4;\n  color: #fff;\n  text-align: center;\n  padding: 2px;\n  border-radius: 5px; */\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 1s;\n  top: 100%;\n   margin-left: 10px;\n  /*bottom: 20%*/;\n  /*margin-left: -60px;*/\n}\n\n.playlistFeedback .playlistFeedbackTextVisible {\n  /*visibility: visible;*/\n  opacity: 1;\n  transition: opacity .1s;\n}\n\n..playlistFeedback-top {\n  bottom: 90%;\n  /*margin-left: -60px;*/\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/work-explorer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngClass]=\"{containerShiftLeft:showApp}\" *ngIf=\"work\"><h1>{{work.label}}</h1>\n<!-- <i class=\"material-icons\">face</i> -->\n\t<p><a [routerLink]=\"['/work', work.id]\">More about {{work.label}}...</a></p>\n\t<p *ngIf=\"!showMap\">Select <i class=\"material-icons\">check_box_outline_blank</i> a Performance then play <i class=\"material-icons\">play_circle_outline</i> its parts, or select <i class=\"material-icons\">check_box_outline_blank</i> a Part then play <i class=\"material-icons\">play_circle_outline</i> the different versions available.</p>\n\t<p *ngIf=\"showMap\">Select <i class=\"material-icons\">check_box_outline_blank</i> a Performance then click on its parts, or a click on and select <i class=\"material-icons\">check_box_outline_blank</i> a Part then play <i class=\"material-icons\">play_circle_outline</i> the different versions available.</p>\n\t<p  class=\"hideIfNotWide\">\n\t\t<a (click)=\"clickShowApp($event)\" class=\"pointer\">\n\t\t\t<i class=\"material-icons\">{{showApp ? 'check_box' : 'check_box_outline_blank'}}</i>\n\t\t</a>\n\t\tShow mobile app\n\t</p>\n\t<div [ngClass]=\"{appframe: true, hidden: !showApp}\">\n\t\t<iframe #appframe [ngClass]=\"{appframeContent: true, hidden: !showApp}\" [src]=\"appUrl\"></iframe>\n\t</div>\n\t<div class=\"row\">\n\t<div [ngClass]=\"{'col-12': !popout, 'col-lg-4': popout, 'col-md-6': popout}\">\n\t<h2>Performances and Playlists</h2>\n\t\t<div class=\"row\">\n\t\t<div [ngClass]=\"{'col-sm-6':!popout, 'col-md-4':!popout, 'col-12':popout, performance:true}\" >\n\t\t\t<a (click)=\"clickAllPerformancesCheckbox($event)\" class=\"pointer\">\n\t\t\t\t<i class=\"material-icons\">{{allPerformancesSelected ? 'check_box' : 'check_box_outline_blank'}}</i>\n\t\t\t</a>\n\t\t\tAll Performances\n\t\t</div>\n\t\t<div [ngClass]=\"{'col-sm-6':!popout, 'col-md-4':!popout, 'col-12':popout, performance:true}\" *ngFor=\"let perf of performances\" [ngClass]=\"{'highlighted': perf.highlighted}\"\n\t\t\t(click)=\"clickPerformance(perf)\" (dragover)=\"dragoverPerformance($event,perf)\" (drop)=\"dropOnPerformance($event,perf)\">\n\t\t\t<div class=\"playlistFeedback\">\n\t\t\t\t<div *ngIf=\"perf.isPlaylist && perf.playlistFeedback\" class=\"playlistFeedback playlistFeedbackText alert alert-success\"\n\t\t\t\t[ngClass]=\"{playlistFeedbackTextVisible : perf.playlistFeedbackVisible}\">{{perf.playlistFeedback}}</div>\n\t\t\t</div>\n\t\t\t<a (click)=\"clickPerformanceCheckbox($event,perf)\" class=\"pointer\">\n\t\t\t\t<i class=\"material-icons\">{{perf.selected ? 'check_box' : 'check_box_outline_blank'}}</i>\n\t\t\t</a>\n\t\t\t<a (click)=\"clickPerformancePlay($event,perf)\" class=\"pointer\">\n\t\t\t\t<span *ngIf=\"perf.active && perf.available\"><i class=\"material-icons\">play_circle_filled</i></span>\n\t\t\t\t<span *ngIf=\"!perf.active && perf.available\"><i class=\"material-icons\">play_circle_outline</i></span>\n\t\t\t\t<span *ngIf=\"!perf.available\"><i class=\"material-icons\">&nbsp;</i></span>\n\t\t\t</a>\n\t\t\t{{perf.label}}<!-- (@ {{perf.startTime}}) -->\n\t\t\t<span class=\"performer\" *ngFor=\"let performer of perf.performers\">{{performer.label}} </span>\n\t\t\t<a *ngIf=\"perf.isPlaylist\" (click)=\"editPlaylist($event,perf)\" class=\"pointer\">\n\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t</a>\n\t\t</div>\n\t\t<a (click)=\"clickPlaylistAdd($event)\" class=\"pointer\" [ngClass]=\"{'col-sm-6':!popout, 'col-md-4':!popout, 'col-12':popout, performance:true}\" >\n\t\t\t<i class=\"material-icons\">playlist_add</i>\n\t\t\tNew Playlist\n\t\t</a>\n\t\t</div>\n\t</div>\n\t<div [ngClass]=\"{'col-12': !popout, 'col-lg-4': popout, 'col-md-6': popout}\">\n\t<!-- <p *ngIf=\"selectedPerformance\"><em>{{selectedPerformance.label}}</em>: {{selectedPerformance.description}}</p>  -->\n\t<h2>Parts (sections) \n\t<div class=\"btn-group\">\n\t\t<button class=\"btn btn-secondary\" [ngClass]=\"{'active':!showMap}\" (click)=\"setShowMap(false)\">List</button>\n\t\t<button class=\"btn btn-secondary\" [ngClass]=\"{'active':showMap}\" (click)=\"setShowMap(true)\">Map</button>\n\t</div>\n\t</h2>\n\t<div class=\"row\" *ngIf=\"!showMap && (!selectedPerformance || !selectedPerformance.isPlaylist)\">\n\t\t<div [ngClass]=\"{'col-sm-6':!popout, 'col-md-4':!popout, part:true, 'col-lg-12':popout, 'col-md-12':popout}\" *ngFor=\"let part of parts\" [ngClass]=\"{'highlighted': part.highlighted}\"\n\t\t\t(click)=\"clickPart(part)\">\n\t\t\t<a (click)=\"clickPartCheckbox($event,part)\" class=\"pointer\">\n\t\t\t\t<i class=\"material-icons\">{{part.selected ? 'check_box' : 'check_box_outline_blank'}}</i>\n\t\t\t</a>\n\t\t\t<i *ngIf=\"part.available\" class=\"material-icons\" draggable=\"true\" (dragstart)=\"dragPart($event,part)\">drag_indicator</i>\n\t\t\t<a (click)=\"clickPartPlay($event,part)\" class=\"pointer\">\n\t\t\t\t<span *ngIf=\"part.active && part.available\"><i class=\"material-icons\">play_circle_filled</i></span>\n\t\t\t\t<span *ngIf=\"!part.active && part.available\"><i class=\"material-icons\">play_circle_outline</i></span>\n\t\t\t\t<span *ngIf=\"!part.available\"><i class=\"material-icons\">&nbsp;</i></span>\n\t\t\t</a>\n\t\t\t{{part.label}}\n\t\t</div>\n\t\t<div [ngClass]=\"{'col-sm-12':!popout, 'col-md-12':!popout, 'col-lg-12':!popout, 'col-12':popout}\">\n\t\t\t<p *ngIf=\"selectedPart\"><em>{{selectedPart.label}}</em>: {{selectedPart.description}}</p>\n\t\t\t<p *ngIf=\"!selectedPart && currentlyPlaying\"><em>{{currentlyPlaying.part.label}}</em>: {{currentlyPlaying.part.description}}</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" *ngIf=\"!showMap && selectedPerformance && selectedPerformance.isPlaylist\">\n\t\t<div [ngClass]=\"{'col-sm-6':!popout, 'col-md-4':!popout, part:true, 'col-lg-12':popout, 'col-md-12':popout}\" *ngFor=\"let clip of playlistClips\"\n\t\t\t (dragover)=\"dragoverClip($event,clip)\" (drop)=\"dropOnClip($event,clip)\">\n\t\t\t<i class=\"material-icons\" draggable=\"true\" (dragstart)=\"dragClip($event,clip)\">drag_indicator</i>\n\t\t\t<a (click)=\"clickClipPlay($event,clip)\" class=\"pointer\">\n\t\t\t\t<span *ngIf=\"clip.active\"><i class=\"material-icons\">play_circle_filled</i></span>\n\t\t\t\t<span *ngIf=\"!clip.active\"><i class=\"material-icons\">play_circle_outline</i></span>\n\t\t\t</a>\n\t\t\t{{clip.label}}\n\t\t\t<i class=\"material-icons\" *ngIf=\"clip.hasStartOffset\">navigate_before</i>\n\t\t\t<i class=\"material-icons\" *ngIf=\"clip.hasEndOffset\">navigate_next</i>\n\t\t\t<a (click)=\"editPlaylistItem($event,clip)\" class=\"pointer\">\n\t\t\t\t<i class=\"material-icons\">edit</i>\n\t\t\t</a>\n\t\t</div>\n\t\t<div [ngClass]=\"{'col-sm-12':!popout, 'col-md-12':!popout, 'col-lg-12':!popout, 'col-12':popout}\">\n\t\t\t<p *ngIf=\"selectedPart\"><em>{{selectedPart.label}}</em>: {{selectedPart.description}}</p>\n\t\t\t<p *ngIf=\"!selectedPart && currentlyPlaying\"><em>{{currentlyPlaying.part.label}}</em>: {{currentlyPlaying.part.description}}</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div *ngIf=\"showMap\" [ngClass]=\"{'col-sm-12':!popout, 'col-md-8':!popout, 'col-lg-6':!popout, 'col-xl-5':!popout, 'col-12':popout}\">\n\t\t\t<parts-map [parts]=\"parts\" [work]=\"work\" [heatmap]=\"allPerformancesSelected\" (select)=\"clickMapPart($event)\"></parts-map>\n\t\t</div>\n\t\t<div [ngClass]=\"{'col-sm-12':!popout, 'col-md-12':!popout, 'col-lg-6':!popout, 'col-xl-7':!popout, 'col-12':popout}\">\n\t\t<div *ngIf=\"showMap && selectedPart\">\n\t\t\t<div class=\"part\" [ngClass]=\"{'highlighted': selectedPart.highlighted}\"\n\t\t\t(click)=\"clickPart(selectedPart)\">\n\t\t\t\t<a (click)=\"clickPartCheckbox($event,selectedPart)\" class=\"pointer\">\n\t\t\t\t\t<i class=\"material-icons\">{{selectedPart.selected ? 'check_box' : 'check_box_outline_blank'}}</i>\n\t\t\t\t</a>\n\t\t\t\t<i *ngIf=\"currentlyPlaying\" class=\"material-icons\" draggable=\"true\" (dragstart)=\"dragPartPerformance($event,currentlyPlaying)\">drag_indicator</i>\n\t\t\t\t<a (click)=\"clickPartPlay($event,selectedPart)\" class=\"pointer\">\n\t\t\t\t\t<span *ngIf=\"selectedPart.active && selectedPart.available\"><i class=\"material-icons\">play_circle_filled</i></span>\n\t\t\t\t\t<span *ngIf=\"!selectedPart.active && selectedPart.available\"><i class=\"material-icons\">play_circle_outline</i></span>\n\t\t\t\t\t<span *ngIf=\"!selectedPart.available\"><i class=\"material-icons\">&nbsp;</i></span>\n\t\t\t\t</a>\n\t\t\t\t{{selectedPart.label}}\n\t\t\t</div>\n\t\t\t<p ><em>{{selectedPart.label}}</em>: {{selectedPart.description}}</p>\n\t\t</div>\n\t\t<div *ngIf=\"showMap && currentlyPlaying && !selectedPart\">\n\t\t\t<div class=\"part\" [ngClass]=\"{'highlighted': currentlyPlaying.part.highlighted}\"\n\t\t\t(click)=\"clickPart(currentlyPlaying.part)\">\n\t\t\t\t<a (click)=\"clickPartCheckbox($event,currentlyPlaying.part)\" class=\"pointer\">\n\t\t\t\t\t<i class=\"material-icons\">{{currentlyPlaying.part.selected ? 'check_box' : 'check_box_outline_blank'}}</i>\n\t\t\t\t</a>\n\t\t\t\t<i class=\"material-icons\" draggable=\"true\" (dragstart)=\"dragPartPerformance($event,currentlyPlaying)\">drag_indicator</i>\n\t\t\t\t<a (click)=\"clickPartPlay($event,currentlyPlaying.part)\" class=\"pointer\">\n\t\t\t\t\t<span *ngIf=\"currentlyPlaying.part.active && currentlyPlaying.part.available\"><i class=\"material-icons\">play_circle_filled</i></span>\n\t\t\t\t\t<span *ngIf=\"!currentlyPlaying.part.active && currentlyPlaying.part.available\"><i class=\"material-icons\">play_circle_outline</i></span>\n\t\t\t\t\t<span *ngIf=\"!currentlyPlaying.part.available\"><i class=\"material-icons\">&nbsp;</i></span>\n\t\t\t\t</a>\n\t\t\t\t{{currentlyPlaying.part.label}}\n\t\t\t</div>\n\t\t\t<p ><em>{{currentlyPlaying.part.label}}</em>: {{currentlyPlaying.part.description}}</p>\n\t\t</div>\n\t\t<div *ngFor=\"let rec of recordings\">\n\t\t\t<audio *ngIf=\"!rec.isVideo && !popout\" id=\"{{rec.id}}\" (canplay)=\"audioCanplay($event,rec)\" (seeked)=\"audioSeeked($event,rec)\"\n\t\t\t(timeupdate)=\"audioTimeupdate($event,rec)\" (ended)=\"audioEnded($event,rec)\">\n\t\t\t\t<source src=\"{{rec.urls[0]}}\" type=\"audio/mpeg\">\n\t\t\t\tYour browser does not support audio\n\t\t\t</audio>\n\t\t\t<video *ngIf=\"rec.isVideo && !popout\" id=\"{{rec.id}}\" (canplay)=\"audioCanplay($event,rec)\" (seeked)=\"audioSeeked($event,rec)\"\n\t\t\t(timeupdate)=\"audioTimeupdate($event,rec)\" (ended)=\"audioEnded($event,rec)\"\n\t\t\t[ngClass]=\"{hidden:!rec.visible}\">\n\t\t\t\t<source src=\"{{rec.urls[0]}}\" type=\"video/mp4\">\n\t\t\t\tYour browser does not support video\n\t\t\t</video>\n\t\t</div>\n \t\t</div>\n\t</div>\n\t</div>\n\t<div [ngClass]=\"{'col-12': !popout, 'col-lg-4': popout, 'col-md-12': popout}\">\n \t<h2>Playing\n\t\t<div class=\"btn-group\" *ngIf=\"!popout\">\n\t\t\t<button class=\"btn btn-secondary\" [ngClass]=\"{'active':!showVideo}\" (click)=\"setShowVideo(false)\">Audio</button>\n\t\t\t<button class=\"btn btn-secondary\" [ngClass]=\"{'active':showVideo}\" (click)=\"setShowVideo(true)\">Video</button>\n\t\t</div>\n\t</h2>\n\n\t<div class=\"row\" *ngIf=\"!!currentlyPlaying\">\n\t\t<div class=\"col-12\" *ngIf=\"!!currentlyPlaying.clip && !!currentlyPlaying.clip.recording\">\n\t\t\t<span class=\"time\">{{currentlyPlaying.currentTimeText}}</span>\n\t\t\t<a (click)=\"previous()\"><i class=\"material-icons\">skip_previous</i></a>\n\t\t\t<a (click)=\"back()\"><i class=\"material-icons\">fast_rewind</i></a>\n\t\t\t<i *ngIf=\"!(!!currentlyPlaying && !currentlyPlaying.clip.recording.shouldplay)\" class=\"material-icons\">play_circle_filled</i>\n\t\t\t<a (click)=\"play()\" *ngIf=\"!!currentlyPlaying && !currentlyPlaying.clip.recording.shouldplay\">\n\t\t\t\t<i class=\"material-icons\">play_circle_outline</i>\n\t\t\t</a>\n\t\t\t<a (click)=\"pause()\"><i class=\"material-icons\">pause_circle_outline</i></a>\n\t\t\t<a (click)=\"forward()\"><i class=\"material-icons\">fast_forward</i></a>\n\t\t\t<a (click)=\"next()\"><i class=\"material-icons\">skip_next</i></a>\n\t\t</div>\n\t\t<div class=\"col-12\">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let subevent of currentlyPlaying.subevents\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a (click)=\"playSubevent(subevent)\">\n\t\t\t\t\t\t\t\t<span *ngFor=\"let i of countdownLevels\" [ngClass]=\"{countdown:true, active:subevent.countdown==i, inactive: subevent.countdown!=i}\">&nbsp;</span>\n\t\t\t\t\t\t\t\t<span class=\"time\" [ngClass]=\"{highlight:subevent.highlight}\">{{subevent.startTimeText}}</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>{{subevent.description}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class=\"col-12\">\n\t\t\t<p *ngIf=\"!currentlyPlaying.clip || !currentlyPlaying.clip.recording\">Sorry, the recording for this performance is not yet available</p>\n\t\t\t<p>\n\t\t\t\t<span *ngIf=\"!currentlyPlaying.isClip\"><em>{{currentlyPlaying.performance.label}}</em>: {{currentlyPlaying.performance.description}}<br></span>\n\t\t\t\t<span *ngIf=\"currentlyPlaying.isClip\"><em>{{currentlyPlaying.performance.label}}</em>: {{currentlyPlaying.label}}<br>\n\t\t\t\tFrom <em>{{currentlyPlaying.realPerformance.label}}</em><br></span>\n\t\t\t\tPerformed by <span class=\"performer\" *ngFor=\"let performer of (currentlyPlaying.isClip ? currentlyPlaying.realPerformance : currentlyPlaying.performance).performers\">{{performer.label}} </span>\n\t\t\t</p><p><em>{{currentlyPlaying.part.label}}</em>: {{currentlyPlaying.part.description}}</p>\n\t\t</div>\n\t</div>\n\t<!-- <ul>\n\t\t<li *ngFor=\"let pp of partPerformances\">{{pp.performance.id}} / {{pp.part.id}}</li>\n\t</ul> -->\n\t</div>\n\t<div class=\"blankAtBottom\"></div>\n\t<div *ngIf=\"editingPlaylistInfo\">\n      <playlist-form (save)=\"saveEditingPlaylist($event)\" (cancel)=\"cancelEditingPlaylist()\" [disabled]=\"false\"\n       [playlist]=\"editingPlaylistInfo\" (dodelete)=\"deleteEditingPlaylist()\" (doexport)=\"exportEditingPlaylist($event)\"></playlist-form>\n    </div>\n\t<div *ngIf=\"editingPlaylistItem\">\n      <playlist-item-form (save)=\"saveEditingPlaylistItem($event)\" (cancel)=\"cancelEditingPlaylistItem()\" [disabled]=\"false\"\n       [item]=\"editingPlaylistItem\" (dodelete)=\"deleteEditingPlaylistItem()\"></playlist-item-form>\n    </div>\n\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/work-explorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkExplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__("../../../../file-saver/src/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entity__ = __webpack_require__("../../../../../src/app/entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__records_service__ = __webpack_require__("../../../../../src/app/records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__linkapps_service__ = __webpack_require__("../../../../../src/app/linkapps.service.ts");
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










var ScreenEntity = (function (_super) {
    __extends(ScreenEntity, _super);
    function ScreenEntity(fields) {
        var _this = _super.call(this, fields) || this;
        _this.selected = false;
        _this.available = false;
        _this.active = false;
        _this.highlighted = false;
        return _this;
    }
    return ScreenEntity;
}(__WEBPACK_IMPORTED_MODULE_6__entity__["a" /* Entity */]));
var Recording = (function (_super) {
    __extends(Recording, _super);
    function Recording(fields, performance) {
        var _this = _super.call(this, fields) || this;
        _this.urls = [];
        _this.canplay = false;
        _this.shouldplay = false;
        _this.lastTime = 0;
        _this.isVideo = false;
        _this.visible = false;
        _this.performance = performance;
        _this.startTime = _this.getTime('prov:startedAtTime');
        var stvs = _this.getNumberValues('coll:startTimeOffset');
        if (stvs.length > 0) {
            _this.startTimeOffset = stvs[0];
            console.log("Fixing start time of recording " + _this.id + " to " + performance.startTime + "-" + _this.startTimeOffset + " instead of " + _this.startTime + " (delta " + ((performance.startTime - _this.startTimeOffset) - _this.startTime) + ")");
            _this.startTime = performance.startTime - _this.startTimeOffset;
        }
        else {
            _this.startTimeOffset = null;
        }
        return _this;
    }
    Recording.prototype.setUrls = function (urls) {
        this.urls = urls;
        this.isVideo = urls.find(function (url) { return url.length > 4 && '.mp4' == url.substr(-4); }) !== undefined;
        if (this.isVideo)
            console.log('found video recording ' + this.id + ' url ' + urls);
    };
    return Recording;
}(__WEBPACK_IMPORTED_MODULE_6__entity__["a" /* Entity */]));
var Performance = (function (_super) {
    __extends(Performance, _super);
    function Performance(fields) {
        var _this = _super.call(this, fields) || this;
        _this.isPlaylist = false;
        _this.startTime = _this.getTime('prov:startedAtTime');
        _this.performers = [];
        return _this;
    }
    return Performance;
}(ScreenEntity));
var Playlist = (function (_super) {
    __extends(Playlist, _super);
    function Playlist(name) {
        var _this = _super.call(this, { 'rdfs:label': name }) || this;
        _this.playlistFeedbackVisible = false;
        _this.playlistFeedbackTimer = null;
        _this.isPlaylist = true;
        return _this;
    }
    Playlist.prototype.showFeedback = function (feedback) {
        this.playlistFeedback = feedback;
        this.playlistFeedbackVisible = true;
        if (this.playlistFeedbackTimer)
            clearTimeout(this.playlistFeedbackTimer);
        var self = this;
        function fn() {
            self.playlistFeedbackTimer = null;
            if (self.playlistFeedbackVisible) {
                self.playlistFeedbackVisible = false;
                self.playlistFeedbackTimer = setTimeout(fn, 1000);
            }
            else {
                self.playlistFeedback = null;
            }
        }
        ;
        this.playlistFeedbackTimer = setTimeout(fn, 100);
    };
    return Playlist;
}(Performance));
var Part = (function (_super) {
    __extends(Part, _super);
    function Part(fields) {
        return _super.call(this, fields) || this;
    }
    return Part;
}(ScreenEntity));
var AudioClip = (function () {
    function AudioClip(recording, start, duration) {
        this.recording = recording;
        this.start = start;
        this.duration = duration;
    }
    return AudioClip;
}());
var SubEvent = (function (_super) {
    __extends(SubEvent, _super);
    function SubEvent(fields, pp) {
        var _this = _super.call(this, fields) || this;
        _this.highlight = false;
        _this.countdown = 0;
        _this.startTime = _this.getTime('prov:startedAtTime');
        var partOffset = _this.startTime - pp.startTime;
        var minutes = Math.floor(partOffset / 60);
        var seconds = Math.floor(partOffset - 60 * minutes);
        _this.startTimeText = (minutes) + ':' + Math.floor(seconds / 10) + (seconds % 10);
        return _this;
    }
    SubEvent.prototype.clear = function () {
        this.countdown = 0;
        this.highlight = false;
    };
    SubEvent.prototype.setAbsTime = function (time) {
        var delta = this.startTime - time;
        this.highlight = (delta <= 0 && delta > -1);
        if (delta > 0 && delta < 5)
            this.countdown = Math.floor(delta + 1);
        else
            this.countdown = 0;
        console.log('setAbsTime ' + time + '/' + this.startTime + '=' + delta + ', countdown=' + this.countdown + ', highlight=' + this.highlight);
    };
    return SubEvent;
}(__WEBPACK_IMPORTED_MODULE_6__entity__["a" /* Entity */]));
var PartPerformance = (function (_super) {
    __extends(PartPerformance, _super);
    function PartPerformance(fields, performance, part) {
        var _this = _super.call(this, fields) || this;
        _this.currentTimeText = '0:00';
        _this.subevents = [];
        _this.isClip = false;
        if (!part)
            console.log('Error: create PP ' + _this.id + ' with null part; fields:', fields);
        _this.startTime = _this.getTime('prov:startedAtTime');
        _this.performance = performance;
        _this.part = part;
        return _this;
    }
    PartPerformance.prototype.setCurrentTime = function (time) {
        time = Math.floor(time);
        var minus = (time < 0) ? '-' : '';
        if (time < 0)
            time = -time;
        var minutes = Math.floor(time / 60);
        var seconds = time - 60 * minutes;
        this.currentTimeText = minus + (minutes) + ':' + Math.floor(seconds / 10) + (seconds % 10);
    };
    return PartPerformance;
}(__WEBPACK_IMPORTED_MODULE_6__entity__["a" /* Entity */]));
var nextClip = 1;
var Clip = (function (_super) {
    __extends(Clip, _super);
    // TODO offset/duration
    function Clip(playlist, pp) {
        var _this = _super.call(this, {}, playlist, pp.part) || this;
        _this.active = false;
        _this.hasStartOffset = false;
        _this.hasEndOffset = false;
        _this.id = '_clip' + (nextClip++);
        _this.startTime = pp.startTime;
        _this.isClip = true;
        _this.audioClip = new AudioClip(pp.audioClip.recording, pp.audioClip.start, pp.audioClip.duration);
        _this.clip = new AudioClip(pp.clip.recording, pp.clip.start, pp.clip.duration);
        _this.videoClip = new AudioClip(pp.videoClip.recording, pp.videoClip.start, pp.videoClip.duration);
        if (_this.audioClip)
            _this.duration = _this.audioClip.duration;
        if (_this.videoClip && (!_this.duration || _this.videoClip.duration < _this.duration))
            _this.duration = _this.videoClip.duration;
        _this.playlist = playlist;
        _this.realPartPerformance = pp;
        _this.realPerformance = pp.performance;
        _this.subevents = pp.subevents;
        return _this;
    }
    Clip.prototype.setCurrentTime = function (time) {
        if (this.realPartPerformance) {
            _super.prototype.setCurrentTime.call(this, time + this.startTime - this.realPartPerformance.startTime);
        }
        else {
            _super.prototype.setCurrentTime.call(this, time);
        }
    };
    return Clip;
}(PartPerformance));
var DRAG_AND_DROP_MIME_TYPE = 'application/x-archive-dd';
var WorkExplorerComponent = (function () {
    function WorkExplorerComponent(elRef, recordsService, route, location, renderer, ngZone, linkappsService, sanitizer) {
        this.elRef = elRef;
        this.recordsService = recordsService;
        this.route = route;
        this.location = location;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.linkappsService = linkappsService;
        this.sanitizer = sanitizer;
        this.performances = [];
        this.allPerformancesSelected = true;
        this.parts = [];
        this.recordings = [];
        this.partPerformances = [];
        this.currentlyPlaying = null;
        this.selectedPart = null;
        this.selectedPerformance = null;
        this.playlistClips = [];
        this.showMap = false;
        this.countdownLevels = [5, 4, 3, 2, 1];
        this.showVideo = true;
        this.showApp = false;
        this.playlistCount = 0;
    }
    WorkExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            if (params['popout'] !== undefined) {
                _this.popoutPlayer();
            }
            if (params['meld'] !== undefined) {
                _this.linkappsService.openMeld();
            }
        });
        this.route.params
            .switchMap(function (params) { return _this.recordsService.getWork(params['id']); })
            .subscribe(function (work) { return _this.initialiseForWork(work); });
        this.messageSub = this.linkappsService.getEmitter().subscribe(function (ev) {
            if ('app.start' == ev.event) {
                console.log('got app.start...');
                _this.updateApp();
            }
            else {
                console.log('unknown linkapps event', ev);
            }
        });
        this.appUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:8000/1/archive-muzivisual/?p=archive&archive=1");
    };
    WorkExplorerComponent.prototype.ngOnDestroy = function () {
        // mainly for popout
        this.stop();
        this.messageSub.unsubscribe();
    };
    WorkExplorerComponent.prototype.clickShowApp = function () {
        this.showApp = !this.showApp;
    };
    WorkExplorerComponent.prototype.updateApp2 = function (performance, stages) {
        var msg = { version: 'mrl-music.archive/1.0', event: 'play.update' };
        if (performance) {
            // performance title
            msg.performanceTitle = performance.label;
            msg.performanceId = performance.getValue("coll:system_id");
            if (performance.performers) {
                msg.performers = [];
                for (var pi in performance.performers) {
                    // performer(s)
                    var performer = performance.performers[pi];
                    msg.performers.push(performer.label);
                }
            }
            // TODO venue -> label
            msg.venue = performance.getValue("crm:P7_took_place_at");
            // e.g."Place/Djanogly_Recital_Hall"
            //if (msg.venue.substring(0,6)=='Place/')
            //  msg.venue = msg.venue.substring(6);
            //msg.venue = msg.venue.replace('_', ' ');
        }
        msg.stages = stages;
        if (performance || stages) {
            console.log('update app', msg);
            try {
                this.appframe.nativeElement.contentWindow.postMessage(JSON.stringify(msg), "*");
            }
            catch (err) {
                console.log('error updating app window', err);
            }
        }
    };
    WorkExplorerComponent.prototype.updateApp = function () {
        var _this = this;
        if (this.currentlyPlaying) {
            // stages in this performance
            var stages;
            if (!this.currentlyPlaying.isClip) {
                var parts = this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance &&
                    pp.startTime <= _this.currentlyPlaying.startTime; })
                    .sort(function (a, b) { return a.startTime - b.startTime; }).map(function (pp) { return pp.part.getValue("coll:part_id"); });
                stages = parts;
            }
            else {
                var parts = this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance &&
                    pp.playlistOffset <= _this.currentlyPlaying.playlistOffset; })
                    .sort(function (a, b) { return a.playlistOffset - b.playlistOffset; }).map(function (pp) { return pp.part.getValue("coll:part_id"); });
                stages = parts;
            }
            this.updateApp2(this.currentlyPlaying.performance, stages);
        }
        else if (this.selectedPerformance) {
            this.updateApp2(this.selectedPerformance, []);
        }
    };
    WorkExplorerComponent.prototype.popoutPlayer = function () {
        var _this = this;
        console.log('popout player');
        // Warning: not injected
        this.popout = window.open('', 'archive_player'); //,'archive_player'|'_blank' 'scrollbars=no,status=no,menubar=no,width=720,height=480');
        //data:text/html,<html><head><title>Explorer player</title></head><body><div>hello</div></body></html>
        var init = function () {
            if (!!_this.popout.document.title) {
                console.log('popout window initialised already as ' + _this.popout.document.title);
                return;
            }
            console.log('initialise popout player window ' + _this.popout.document.title);
            _this.popout.document.title = 'Archive Player Window';
            var css = 'video {\n width: 100%;\n height: auto;\n}\nvideo.hidden {\n display: none;\n}\nbody {\n background: black; \n}', head = _this.popout.document.head || _this.popout.document.getElementsByTagName('head')[0], style = _this.popout.document.createElement('style');
            style.type = 'text/css';
            style.appendChild(document.createTextNode(css));
            head.appendChild(style);
        };
        init();
        this.popout.addEventListener('load', init, true);
    };
    WorkExplorerComponent.prototype.initialiseForWork = function (work) {
        var _this = this;
        console.log('initialiseForWork...');
        this.work = work;
        this.showMap = !!work.getValue('coll:map_url');
        /* get all performances of work */
        this.recordsService.getPerformancesOfWork(work)
            .then(function (performances) {
            _this.performances = performances
                .map(function (p) { return new Performance(p.fields); })
                .sort(function (a, b) { return a.compareTo(b, 'prov:startedAtTime'); });
            console.log('got ' + _this.performances.length + ' performances');
            /* then get all performers of each performance*/
            return Promise.all(_this.performances.map(function (p) {
                return _this.recordsService.getPerformersOfPerformance(p)
                    .then(function (performers) {
                    console.log('got ' + performers.length + ' performers for ' + p.label);
                    p.performers = performers;
                });
            }));
        })
            .then(function () {
            /* then get all parts (members) of work */
            return _this.recordsService.getMembers(work);
        })
            .then(function (members) {
            _this.parts = members
                .map(function (m) { return new Part(m.fields); })
                .sort(function (a, b) { return a.compareToNumber(b, 'coll:part_rank'); });
            console.log('got ' + _this.parts.length + ' parts');
            /* then get all recordings of each performance */
            return Promise.all(_this.performances.map(function (p) {
                return _this.recordsService.getRecordingsOfPerformance(p)
                    .then(function (recs) {
                    p.recordings = recs.map(function (rec) { return new Recording(rec.fields, p); });
                    /* and the URLs for each performance */
                    return Promise.all(p.recordings.map(function (r) {
                        return _this.recordsService.getUrlsOfRecording(r).then(function (urls) { return r.setUrls(urls); });
                    }));
                });
            }));
        })
            .then(function () {
            console.log('(hopefully) got associated recordings and urls');
            return Promise.all(_this.performances.map(function (p) {
                return _this.recordsService.getSubEvents(p)
                    .then(function (events) {
                    _this.partPerformances = _this.partPerformances.concat(events.map(function (ev) { return new PartPerformance(ev.fields, p, _this.parts.find(function (p) {
                        return ev.getValues('frbroo:R25F_performed_r', 'frbroo:R25F_performed').indexOf(p.type_id + '/' + p.id) >= 0;
                    })); }));
                    console.log('got ' + events.length + ' subevents for performance ' + p.id + ' -> ' + _this.partPerformances.length + ' total part-performances');
                });
            }));
        })
            .then(function () {
            console.log('after sub-events, get sub-sub-events');
            return Promise.all(_this.partPerformances.map(function (pp) {
                return _this.recordsService.getSubEvents(pp)
                    .then(function (subevents) {
                    return pp.subevents = subevents.map(function (subevent) { return new SubEvent(subevent.fields, pp); });
                });
            }));
        })
            .then(function () {
            console.log('loaded work to explore');
            _this.buildAudioClips();
            _this.buildPopularity();
            _this.updateApp();
        });
    };
    WorkExplorerComponent.prototype.goBack = function () {
        this.location.back();
    };
    WorkExplorerComponent.prototype.setShowMap = function (value) {
        this.showMap = value;
    };
    WorkExplorerComponent.prototype.setShowVideo = function (value) {
        var _this = this;
        this.pause();
        this.showVideo = value;
        this.partPerformances.forEach(function (pp) { return pp.clip = (_this.showVideo ? pp.videoClip : pp.audioClip); });
        this.recordings.forEach(function (r) { return r.visible = r.isVideo == _this.showVideo && (r.performance == _this.selectedPerformance || (_this.currentlyPlaying && _this.currentlyPlaying.performance == r.performance)); });
        this.checkPopoutMediaVisible();
        if (this.currentlyPlaying) {
            this.playInternal(this.currentlyPlaying.performance, this.currentlyPlaying.part);
        }
    };
    WorkExplorerComponent.prototype.buildAudioClips = function () {
        for (var pi in this.performances) {
            var p = this.performances[pi];
            for (var video = 0; video < 2; video++) {
                var rec = p.recordings.find(function (r) { return r.isVideo == (video > 0) && !!r.urls && r.urls.length > 0; });
                if (undefined === rec) {
                    console.log('Note: no ' + (video ? 'video' : 'audio') + ' recording with url for performance ' + p.label);
                    continue;
                }
                this.recordings.push(rec);
            }
        }
        if (this.popout)
            this.createPopoutMedia();
        var _loop_1 = function () {
            var pp = this_1.partPerformances[pi];
            for (var video = 0; video < 2; video++) {
                // first recording for now
                var rec = this_1.recordings.find(function (r) { return r.isVideo == (video > 0) && r.performance === pp.performance; });
                if (undefined === rec) {
                    console.log('Note: no ' + (video ? 'video' : 'audio') + ' recording with url for performance ' + pp.label);
                    continue;
                }
                var startTime = pp.startTime;
                var recStartTime = rec.startTime;
                // TODO end of last stage??
                var endTime = this_1.partPerformances.filter(function (p) { return p.performance === pp.performance && p.startTime > pp.startTime; })
                    .map(function (p) { return p.startTime; }).sort().find(function () { return true; });
                var clip = new AudioClip(rec, startTime - recStartTime, endTime ? endTime - startTime : null);
                console.log('part ' + pp.id + ' is ' + clip.start + '+' + clip.duration);
                if (clip.duration && (!pp.duration || clip.duration < pp.duration))
                    pp.duration = clip.duration;
                if (video) {
                    pp.videoClip = clip;
                    if (this_1.showVideo)
                        pp.clip = pp.videoClip;
                }
                else {
                    pp.audioClip = clip;
                    if (!this_1.showVideo)
                        pp.clip = clip;
                }
            }
        };
        var this_1 = this;
        for (var pi in this.partPerformances) {
            _loop_1();
        }
    };
    WorkExplorerComponent.prototype.buildPopularity = function () {
        var _this = this;
        var maxPopularity = 0;
        this.parts.forEach(function (part) {
            part.popularity = _this.partPerformances.filter(function (p) { return p.part === part; }).length;
            if (part.popularity > maxPopularity) {
                maxPopularity = part.popularity;
            }
        });
        this.parts.forEach(function (part) {
            part.popularity = part.popularity / maxPopularity;
            if (0 == part.popularity) {
                part.heatmapColor = 'rgb(80,80,80)';
            }
            else {
                // blue to red 
                //part.heatmapColor = 'hsl('+(240+120*part.popularity+',100%,50%)');
                // yellow to red 
                part.heatmapColor = 'hsl(' + (60 - 60 * part.popularity + ',100%,50%)');
            }
        });
    };
    WorkExplorerComponent.prototype.clickPerformance = function (perf) {
        console.log('highlight performance ' + perf.id);
        for (var pi in this.performances) {
            var p = this.performances[pi];
            if (p !== perf)
                p.highlighted = false;
        }
        perf.highlighted = true;
        var _loop_2 = function () {
            var part = this_2.parts[pi];
            part.highlighted = !!this_2.partPerformances.find(function (pp) { return pp.performance === perf && pp.part === part; });
        };
        var this_2 = this;
        // highlight stages in this performance
        for (var pi in this.parts) {
            _loop_2();
        }
    };
    WorkExplorerComponent.prototype.clickAllPerformancesCheckbox = function (event) {
        this.clickPerformanceCheckbox(event, null);
    };
    WorkExplorerComponent.prototype.refreshSelectedPerformance = function () {
        var _this = this;
        if (!this.selectedPerformance) {
            if (!this.selectedPart) {
                for (var pi in this.parts) {
                    var p = this.parts[pi];
                    p.available = false;
                    p.active = false;
                }
            }
            return;
        }
        for (var pi in this.parts) {
            var p = this.parts[pi];
            p.selected = false;
        }
        // clips?
        if (this.selectedPerformance.isPlaylist) {
            this.playlistClips = this.partPerformances.filter(function (pp) { return pp.performance === _this.selectedPerformance && pp.isClip; }).sort(function (a, b) { return a.playlistOffset - b.playlistOffset; });
        }
        else {
            this.playlistClips = [];
        }
        // available stages in this performance
        for (var pi in this.parts) {
            var part = this.parts[pi];
            part.available = !!this.partPerformances.find(function (pp) { return pp.performance === _this.selectedPerformance && pp.part === part; });
        }
        // TODO visible w playlist??
        //this.checkPopoutMediaVisible();
        this.updateApp();
    };
    WorkExplorerComponent.prototype.clickPerformanceCheckbox = function (event, perf) {
        var _this = this;
        if (perf !== null) {
            console.log('select performance ' + perf.id);
            this.allPerformancesSelected = false;
        }
        else {
            console.log('select all performances');
            this.allPerformancesSelected = true;
        }
        for (var pi in this.performances) {
            var p = this.performances[pi];
            if (p !== perf && p.selected)
                p.selected = false;
            p.available = false;
        }
        for (var pi in this.parts) {
            var p = this.parts[pi];
            p.selected = false;
        }
        this.selectedPart = null;
        if (perf !== null && !perf.selected)
            perf.selected = true;
        this.selectedPerformance = perf;
        // clips?
        if (this.selectedPerformance && this.selectedPerformance.isPlaylist) {
            this.playlistClips = this.partPerformances.filter(function (pp) { return pp.performance === perf && pp.isClip; }).sort(function (a, b) { return a.playlistOffset - b.playlistOffset; });
        }
        else {
            this.playlistClips = [];
        }
        // available stages in this performance
        for (var pi in this.parts) {
            var part = this.parts[pi];
            part.available = !!this.partPerformances.find(function (pp) { return pp.performance === perf && pp.part === part; });
        }
        if (this.currentlyPlaying) {
            if (this.currentlyPlaying.performance !== perf || !this.currentlyPlaying.part.available)
                this.stop();
            else
                this.currentlyPlaying.part.active = true;
        }
        if (!this.currentlyPlaying) {
            if (perf && perf.isPlaylist) {
                var pp = this.partPerformances.filter(function (p) { return p.performance === perf && p.isClip; }).sort(function (a, b) { return a.playlistOffset - b.playlistOffset; }).find(function (p) { return true; });
                if (pp) {
                    this.playInternal(perf, pp.part, pp);
                }
                else {
                    this.recordings.forEach(function (r) { return r.visible = r.isVideo == _this.showVideo && r.performance == perf; });
                }
            }
            else {
                var part_1 = this.parts.find(function (p) { return p.available; });
                if (part_1) {
                    this.playInternal(perf, part_1);
                }
                else {
                    this.recordings.forEach(function (r) { return r.visible = r.isVideo == _this.showVideo && r.performance == perf; });
                }
            }
        }
        this.checkPopoutMediaVisible();
        this.updateApp();
    };
    WorkExplorerComponent.prototype.clickPerformancePlay = function (event, perf) {
        event.preventDefault();
        event.stopPropagation();
        var part = this.parts.find(function (p) { return p.selected; });
        if (part !== undefined) {
            this.playInternal(perf, part);
        }
    };
    WorkExplorerComponent.prototype.clickPart = function (part) {
        console.log('highlight part' + part.id);
        for (var pi in this.parts) {
            var p = this.parts[pi];
            if (p !== part)
                p.highlighted = false;
        }
        part.highlighted = true;
        // highlight performances including this part/stage
        for (var pi in this.performances) {
            var performance = this.performances[pi];
            performance.highlighted = !!this.partPerformances.find(function (pp) { return pp.performance === performance && pp.part === part; });
        }
    };
    WorkExplorerComponent.prototype.clickMapPart = function (part) {
        console.log('clickMapPart(' + part.id + ')');
        if (part.available) {
            this.clickPartPlay(null, part);
        }
        else {
            this.clickPartCheckbox(null, part);
        }
    };
    WorkExplorerComponent.prototype.getMedia = function () {
        var media = [];
        if (!!this.popout) {
            var audios = this.popout.document.body.getElementsByTagName('audio');
            var videos = this.popout.document.body.getElementsByTagName('video');
            for (var ai = 0; ai < audios.length; ai++) {
                media.push(audios[ai]);
            }
            for (var ai = 0; ai < videos.length; ai++) {
                media.push(videos[ai]);
            }
        }
        else if (!!this.elRef) {
            var audios = this.elRef.nativeElement.getElementsByTagName('audio');
            var videos = this.elRef.nativeElement.getElementsByTagName('video');
            for (var ai = 0; ai < audios.length; ai++) {
                media.push(audios[ai]);
            }
            for (var ai = 0; ai < videos.length; ai++) {
                media.push(videos[ai]);
            }
        }
        return media;
    };
    WorkExplorerComponent.prototype.clickPartCheckbox = function (event, part) {
        console.log('select part' + part.id);
        for (var pi in this.parts) {
            var p = this.parts[pi];
            if (p !== part && p.selected)
                p.selected = false;
            p.available = false;
        }
        for (var pi in this.performances) {
            var p = this.performances[pi];
            p.selected = false;
        }
        this.selectedPerformance = null;
        this.playlistClips = [];
        this.allPerformancesSelected = false;
        if (!part.selected)
            part.selected = true;
        this.selectedPart = part;
        for (var pi in this.performances) {
            var performance = this.performances[pi];
            performance.available = !!this.partPerformances.find(function (pp) { return pp.performance === performance && pp.part === part; });
        }
        if (this.currentlyPlaying) {
            if (this.currentlyPlaying.part !== part || !this.currentlyPlaying.performance.available) {
                this.stop();
            }
            else
                this.currentlyPlaying.performance.active = true;
        }
        if (!this.currentlyPlaying) {
            var perf = this.performances.find(function (p) { return p.available; });
            if (perf) {
                this.playInternal(perf, part);
            }
            else {
                this.recordings.forEach(function (r) { return r.visible = false; });
            }
        }
        this.checkPopoutMediaVisible();
    };
    WorkExplorerComponent.prototype.clickPartPlay = function (event, part) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        var perf = this.performances.find(function (p) { return p.selected; });
        if (perf !== undefined) {
            this.playInternal(perf, part);
        }
    };
    WorkExplorerComponent.prototype.playInternal = function (perf, part, clip) {
        var _this = this;
        console.log('play ' + perf.id + ' ' + part.id + (clip ? ' clip at ' + clip.startTime : ''));
        if (clip)
            this.linkappsService.meldPartPerformance(part.id, clip.realPerformance.id);
        else
            this.linkappsService.meldPartPerformance(part.id, perf.id);
        for (var pi in this.parts) {
            var p = this.parts[pi];
            p.active = p === part && !part.selected;
        }
        for (var pi in this.performances) {
            var p = this.performances[pi];
            p.active = p === perf && !perf.selected;
        }
        var wasPlaying = this.currentlyPlaying;
        this.currentlyPlaying = clip ? clip : this.partPerformances.find(function (pp) { return pp.performance === perf && pp.part === part; });
        this.currentlyPlaying.subevents.map(function (ev) { return ev.clear(); });
        for (var ppi in this.partPerformances) {
            var pp = this.partPerformances[ppi];
            if (pp.isClip) {
                var clip_1 = pp;
                clip_1.active = clip_1 === this.currentlyPlaying;
            }
        }
        //console.log('elRef',this.elRef);
        var realPerf = this.currentlyPlaying.isClip ? this.currentlyPlaying.realPerformance : perf;
        var rec = this.recordings.find(function (r) { return r.isVideo == _this.showVideo && r.performance === realPerf; });
        if (!rec) {
            console.log('no ' + (this.showVideo ? 'video' : 'audio') + ' recording for performance ' + realPerf.id);
        }
        this.recordings.forEach(function (r) { return r.visible = r == rec; });
        this.checkPopoutMediaVisible();
        if (!!this.elRef) {
            var media = this.getMedia();
            for (var ai = 0; ai < media.length; ai++) {
                var audio = media[ai];
                console.log('media ' + ai + '/' + media.length + ': ' + (!!rec ? rec.id : '(none)') + ' vs ' + audio.id, audio);
                if (!!rec && audio.id == rec.id) {
                    rec.shouldplay = true;
                    console.log('media ' + ai + ' visible!');
                    // start time...
                    var partOffset = 0;
                    if (!!wasPlaying && wasPlaying.part === part && wasPlaying !== this.currentlyPlaying && !clip) {
                        // same time in part?
                        partOffset = wasPlaying.clip.recording.lastTime + wasPlaying.clip.recording.startTime
                            - wasPlaying.startTime;
                        if (partOffset < 0) {
                            console.log('warning: part offset <0: ' + partOffset + ' (lastTime ' + wasPlaying.clip.recording.lastTime + ')');
                            partOffset = 0;
                        }
                    }
                    this.currentlyPlaying.setCurrentTime(partOffset);
                    if (this.currentlyPlaying.clip.start + partOffset >= 0) {
                        console.log('seek to ' + (this.currentlyPlaying.clip.start + partOffset));
                        audio.currentTime = this.currentlyPlaying.clip.start + partOffset;
                    }
                    else {
                        console.log('warning: clip start <0: ' + this.currentlyPlaying.id + ', ' + this.currentlyPlaying.clip.start + '+' + partOffset);
                        audio.currentTime = 0;
                    }
                    audio.play();
                }
                else {
                    audio.pause();
                }
            }
        }
        this.updateApp();
    };
    WorkExplorerComponent.prototype.stop = function () {
        if (this.currentlyPlaying) {
            this.currentlyPlaying.part.active = false;
            this.currentlyPlaying.performance.active = false;
        }
        this.pause();
        this.currentlyPlaying = null;
        this.updateApp();
    };
    WorkExplorerComponent.prototype.audioTimeupdate = function (event, rec) {
        var _this = this;
        console.log('timeupdate ' + rec.id + ' ' + event.target.currentTime);
        rec.lastTime = event.target.currentTime;
        if (!!this.currentlyPlaying && this.currentlyPlaying.clip && this.currentlyPlaying.clip.recording === rec) {
            var offset = rec.lastTime + rec.startTime - this.currentlyPlaying.startTime;
            this.currentlyPlaying.setCurrentTime(offset);
            this.currentlyPlaying.subevents.map(function (ev) { return ev.setAbsTime(rec.lastTime + rec.startTime); });
            if (this.currentlyPlaying.performance.selected && !this.currentlyPlaying.isClip) {
                // check best clip...
                var nextPp = this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance
                    && (!pp.duration || pp.startTime + pp.duration - 0.1 > rec.lastTime + rec.startTime); })
                    .sort(function (a, b) { return a.startTime - b.startTime; }).find(function () { return true; });
                if (!nextPp) {
                    console.log('no valid part to play');
                    //this.stop();
                }
                else if (nextPp !== this.currentlyPlaying) {
                    console.log('change part to ' + nextPp.id);
                    this.currentlyPlaying.part.active = false;
                    this.currentlyPlaying = nextPp;
                    this.currentlyPlaying.part.active = true;
                    this.currentlyPlaying.setCurrentTime(rec.lastTime + rec.startTime - this.currentlyPlaying.startTime);
                    this.currentlyPlaying.subevents.map(function (ev) { return ev.setAbsTime(rec.lastTime + rec.startTime); });
                    this.updateApp();
                    this.linkappsService.meldPartPerformance(nextPp.part.id, nextPp.performance.id);
                }
            }
            else if (this.currentlyPlaying.performance.selected && this.currentlyPlaying.isClip) {
                // playlist
                var playlistTime_1 = this.currentlyPlaying.playlistOffset + rec.lastTime + rec.startTime - this.currentlyPlaying.startTime;
                console.log('playlist time now ' + playlistTime_1);
                var nextPp = this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance
                    && (!pp.duration || pp.playlistOffset + pp.duration - 0.1 > playlistTime_1); })
                    .sort(function (a, b) { return a.playlistOffset - b.playlistOffset; }).find(function () { return true; });
                this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance; })
                    .forEach(function (pp) { return console.log("- clip " + pp.id + " plo " + pp.playlistOffset + " dir " + pp.duration); });
                if (!nextPp) {
                    console.log('no valid clip to play');
                    this.pause();
                    var maxTime = this.currentlyPlaying.startTime + (this.currentlyPlaying.duration ? this.currentlyPlaying.duration : 0) - rec.startTime;
                    if (rec.lastTime > maxTime + 0.1)
                        event.target.currentTime = maxTime;
                }
                else if (nextPp !== this.currentlyPlaying) {
                    console.log('change clip to +' + nextPp.playlistOffset);
                    this.playInternal(nextPp.performance, nextPp.part, nextPp);
                }
                else if (playlistTime_1 < -0.1) {
                    console.log("skip to start from " + playlistTime_1);
                    event.target.currentTime = nextPp.startTime - rec.startTime;
                }
            }
            else if (this.currentlyPlaying.part.selected) {
                if (this.currentlyPlaying.duration && offset > this.currentlyPlaying.duration) {
                    // pause
                    this.pause();
                    event.target.currentTime = this.currentlyPlaying.startTime - rec.startTime;
                }
                else if (offset < -0.5) {
                    // (significantly) before clip?!
                    event.target.currentTime = rec.lastTime - offset;
                }
            }
        }
    };
    WorkExplorerComponent.prototype.audioEnded = function (event, rec) {
        console.log('ended ' + rec.id);
        this.pause();
        event.target.currentTime = 0;
    };
    WorkExplorerComponent.prototype.audioCanplay = function (event, rec) {
        console.log('canplay ' + rec.id);
        rec.canplay = true;
        var duration = event.target.duration;
        if (!rec.duration) {
            rec.duration = duration;
            this.partPerformances.forEach(function (pp) {
                if (pp.audioClip && pp.audioClip.recording === rec && !pp.audioClip.duration) {
                    pp.audioClip.duration = duration - pp.audioClip.start;
                    if (!pp.duration || pp.duration > pp.audioClip.duration)
                        pp.duration = pp.audioClip.duration;
                    console.log("fix duration of audioclip " + pp.id + " " + pp.performance.id + " " + pp.part.id + " as " + pp.audioClip.duration);
                }
                if (pp.videoClip && pp.videoClip.recording === rec && !pp.videoClip.duration) {
                    pp.videoClip.duration = duration - pp.videoClip.start;
                    if (!pp.duration || pp.duration > pp.videoClip.duration)
                        pp.duration = pp.videoClip.duration;
                    console.log("fix duration of videoclip " + pp.id + " " + pp.performance.id + " " + pp.part.id + " as " + pp.videoClip.duration);
                }
            });
        }
        // shouldn't be needed?!
        if (rec.shouldplay) {
            console.log('play ' + rec.id + ' on canplay');
            event.target.play();
        }
    };
    WorkExplorerComponent.prototype.audioSeeked = function (event, rec) {
        console.log('seeked ' + rec.id);
    };
    WorkExplorerComponent.prototype.play = function () {
        if (!!this.currentlyPlaying && !this.currentlyPlaying.clip.recording.shouldplay) {
            this.currentlyPlaying.clip.recording.shouldplay = true;
            if (!!this.elRef) {
                var audios = this.getMedia();
                for (var ai = 0; ai < audios.length; ai++) {
                    var audio = audios[ai];
                    if (audio.id == this.currentlyPlaying.clip.recording.id) {
                        this.currentlyPlaying.clip.recording.shouldplay = true;
                        audio.play();
                    }
                }
            }
        }
    };
    WorkExplorerComponent.prototype.pause = function () {
        if (this.currentlyPlaying) {
            if (!!this.elRef) {
                var audios = this.getMedia();
                for (var ai = 0; ai < audios.length; ai++) {
                    var audio = audios[ai];
                    audio.pause();
                }
            }
            this.recordings.forEach(function (r) { return r.shouldplay = false; });
        }
    };
    WorkExplorerComponent.prototype.getAudio = function (rec) {
        if (!!this.popout) {
            var audios = rec.isVideo ? this.popout.document.body.getElementsByTagName('video') :
                this.popout.document.body.getElementsByTagName('audio');
            for (var ai = 0; ai < audios.length; ai++) {
                var audio = audios[ai];
                console.log('audio ' + ai + '/' + audios.length + ':', audio);
                if (!!rec && audio.id == rec.id) {
                    return audio;
                }
            }
        }
        else if (!!this.elRef) {
            var audios = rec.isVideo ? this.elRef.nativeElement.getElementsByTagName('video') :
                this.elRef.nativeElement.getElementsByTagName('audio');
            for (var ai = 0; ai < audios.length; ai++) {
                var audio = audios[ai];
                console.log('audio ' + ai + '/' + audios.length + ':', audio);
                if (!!rec && audio.id == rec.id) {
                    return audio;
                }
            }
        }
        return null;
    };
    WorkExplorerComponent.prototype.forward = function () {
        if (!!this.currentlyPlaying) {
            var audio = this.getAudio(this.currentlyPlaying.clip.recording);
            if (!!audio) {
                var currentTime = audio.currentTime;
                if (audio.duration != 0 && currentTime + 10 > audio.duration) {
                    this.pause();
                    audio.currentTime = audio.duration;
                }
                else
                    audio.currentTime = currentTime + 10;
            }
        }
    };
    WorkExplorerComponent.prototype.back = function () {
        if (!!this.currentlyPlaying) {
            var audio = this.getAudio(this.currentlyPlaying.clip.recording);
            if (!!audio) {
                var currentTime = audio.currentTime;
                if (this.currentlyPlaying.part.selected) {
                    if (this.currentlyPlaying.clip.recording.startTime + currentTime - 10 < this.currentlyPlaying.startTime)
                        audio.currentTime = this.currentlyPlaying.startTime - this.currentlyPlaying.clip.recording.startTime;
                    else if (currentTime > 10)
                        audio.currentTime = currentTime - 10;
                    else
                        audio.currentTime = 0;
                }
                else {
                    // performance
                    if (currentTime > 10)
                        audio.currentTime = currentTime - 10;
                    else {
                        audio.currentTime = 0;
                    }
                }
            }
        }
    };
    WorkExplorerComponent.prototype.next = function () {
        var _this = this;
        console.log('next');
        if (!!this.currentlyPlaying) {
            if (this.currentlyPlaying.part.selected) {
                var options = this.partPerformances.filter(function (pp) { return pp.part === _this.currentlyPlaying.part; });
                var ix = (options.indexOf(this.currentlyPlaying) + 1) % options.length;
                this.playInternal(options[ix].performance, options[ix].part);
            }
            else {
                var pp = this.currentlyPlaying.isClip
                    ? this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance &&
                        pp.playlistOffset > _this.currentlyPlaying.playlistOffset; }).sort(function (a, b) { return a.playlistOffset - b.playlistOffset; }).find(function () { return true; })
                    : this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance &&
                        pp.startTime > _this.currentlyPlaying.startTime; }).sort(function (a, b) { return a.startTime - b.startTime; }).find(function () { return true; });
                if (!!pp)
                    this.playInternal(pp.performance, pp.part);
            }
        }
    };
    WorkExplorerComponent.prototype.previous = function () {
        var _this = this;
        console.log('previous');
        if (!!this.currentlyPlaying) {
            if (this.currentlyPlaying.part.selected) {
                var options = this.partPerformances.filter(function (pp) { return pp.part === _this.currentlyPlaying.part; });
                var ix = (options.indexOf(this.currentlyPlaying) + options.length - 1) % options.length;
                this.playInternal(options[ix].performance, options[ix].part);
            }
            else {
                var pp = this.currentlyPlaying.isClip
                    ? this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance &&
                        pp.playlistOffset < _this.currentlyPlaying.playlistOffset; }).sort(function (a, b) { return b.playlistOffset - a.playlistOffset; }).find(function () { return true; })
                    : this.partPerformances.filter(function (pp) { return pp.performance === _this.currentlyPlaying.performance &&
                        pp.startTime < _this.currentlyPlaying.startTime; }).sort(function (a, b) { return b.startTime - a.startTime; }).find(function () { return true; });
                if (!!pp)
                    this.playInternal(pp.performance, pp.part);
            }
        }
    };
    WorkExplorerComponent.prototype.playSubevent = function (subevent) {
        if (!!this.currentlyPlaying) {
            var audio = this.getAudio(this.currentlyPlaying.clip.recording);
            if (!!audio) {
                var time = subevent.startTime - this.currentlyPlaying.clip.recording.startTime - 3;
                console.log('seek to subevent ' + subevent.startTime + ' => ' + time);
                if (time < 0)
                    time = 0;
                if (audio.duration != 0 && time > audio.duration) {
                    this.pause();
                    audio.currentTime = audio.duration;
                }
                else
                    audio.currentTime = time;
            }
        }
    };
    WorkExplorerComponent.prototype.addPopoutVideo = function (rec) {
        var _this = this;
        var parent = this.popout.document.body;
        var video = this.popout.document.createElement('video');
        video.setAttribute('id', rec.id);
        //video.setAttribute('controls', 'true');
        this.renderer.listen(video, 'canplay', function (event) { return _this.ngZone.run(function () { return _this.audioCanplay(event, rec); }); });
        this.renderer.listen(video, 'seeked', function (event) { return _this.ngZone.run(function () { return _this.audioSeeked(event, rec); }); });
        this.renderer.listen(video, 'timeupdate', function (event) { return _this.ngZone.run(function () { return _this.audioTimeupdate(event, rec); }); });
        this.renderer.listen(video, 'ended', function (event) { return _this.ngZone.run(function () { return _this.audioEnded(event, rec); }); });
        //video.addEventListener('canplay', (event) => {console.log(`popout canplay ${rec.id}`)});
        var url = this.popout.document.createElement('source');
        url.setAttribute('src', rec.urls[0]);
        url.setAttribute('type', 'video/mp4');
        video.appendChild(url);
        parent.appendChild(video);
    };
    WorkExplorerComponent.prototype.createPopoutMedia = function () {
        console.log('create popout media...');
        /*
            let parent = this.popout.document.body;
            while (parent.firstChild) {
              parent.removeChild(parent.firstChild);
            }
            for (let rec of this.recordings) {
              if (rec.isVideo) {
                this.addPopoutVideo(rec);
              }
            }
        */
        this.checkPopoutMediaVisible();
    };
    WorkExplorerComponent.prototype.checkPopoutMediaVisible = function () {
        if (!this.popout)
            return;
        for (var _i = 0, _a = this.recordings; _i < _a.length; _i++) {
            var rec = _a[_i];
            var video = this.popout.document.getElementById(rec.id);
            if (!!video) {
                //video.className = rec.visible ? '' : 'hidden';
                // make / remove - only one visible
                if (!rec.visible) {
                    try {
                        // https://stackoverflow.com/questions/28105950/html5-video-stalled-event
                        // clear src and load??
                        video.pause();
                        var srcs = video.getElementsByTagName('source');
                        for (var si = 0; si < srcs.length; si++) {
                            var src = srcs.item(si);
                            src.setAttribute('src', '');
                        }
                        if (srcs.length === 0) {
                            console.log('could not find source element in video (to stop)');
                        }
                        video.load();
                    }
                    catch (err) {
                        console.log('Error removing video: ' + err.message, err);
                    }
                    video.remove();
                }
            }
            else if (rec.visible) {
                // create
                this.addPopoutVideo(rec);
            }
        }
    };
    WorkExplorerComponent.prototype.clickPlaylistAdd = function (ev) {
        this.performances.push(new Playlist('Playlist ' + (++this.playlistCount)));
    };
    WorkExplorerComponent.prototype.dragPartPerformance = function (ev, pp) {
        console.log('drag pp ' + pp.performance.id + ' ' + pp.part.id);
        ev.dataTransfer.setData(DRAG_AND_DROP_MIME_TYPE, JSON.stringify({ type: 'PartPerformance', part: pp.part.id, performance: pp.performance.id }));
    };
    WorkExplorerComponent.prototype.dragPart = function (ev, part) {
        var pp = this.partPerformances.find(function (pp) { return pp.part === part && pp.performance.selected; });
        if (!pp) {
            console.log('no part performance found');
            return;
        }
        this.dragPartPerformance(ev, pp);
    };
    WorkExplorerComponent.prototype.dragoverPerformance = function (ev, pp) {
        if (!pp.isPlaylist)
            return;
        ev.preventDefault();
    };
    WorkExplorerComponent.prototype.playlistAddPartPerformance = function (playlist, part, performance, title, startTime, endTime) {
        var pp = this.partPerformances.find(function (pp) { return pp.part.id == part && pp.performance.id == performance; });
        if (!pp) {
            console.log('error: could not locate part performance ' + performance + ' ' + part);
            return;
        }
        var clip = new Clip(playlist, pp);
        if (title)
            clip.label = title;
        else {
            clip.label = pp.part.label + ' from ' + pp.performance.label;
            if (pp.performance.performers && pp.performance.performers.length > 0) {
                clip.label += ' by ';
                for (var pi = 0; pi < pp.performance.performers.length; pi++) {
                    var p = pp.performance.performers[pi];
                    if (pi > 0)
                        clip.label += ', ';
                    clip.label += p.label;
                }
            }
        }
        this.fixClipStartTimeAndDuration(clip, startTime, endTime);
        // duration so far
        var duration = this.partPerformances.filter(function (pp) { return pp.playlist === playlist; }).map(function (pp) { return pp.videoClip ? pp.duration : 0; }).reduce(function (a, b) { return a + b; }, 0);
        console.log('total duration was ' + duration + ' + ' + clip.duration);
        clip.playlistOffset = duration;
        this.partPerformances.push(clip);
        return clip;
    };
    WorkExplorerComponent.prototype.dropOnPerformance = function (ev, pp) {
        if (!pp.isPlaylist) {
            console.log('error: drop on non-playlist');
            return;
        }
        var playlist = pp;
        ev.preventDefault();
        var data = ev.dataTransfer.getData(DRAG_AND_DROP_MIME_TYPE);
        console.log('Drop:', data);
        if (!data)
            return;
        var info = JSON.parse(data);
        if ('PartPerformance' == info.type) {
            this.playlistAddPartPerformance(playlist, info.part, info.performance);
            playlist.showFeedback('Added');
        }
        else if ('Clip' == info.type) {
            // handle Clip drop
            // id, part, performance
            if (!info.id || !info.part || !info.performance) {
                console.log('error: ill-formed Clip dropped', info);
                return;
            }
            var clip = this.playlistClips.find(function (c) { return c.id == info.id; });
            if (!clip) {
                console.log("error, could not find dropped clip " + info.id);
                return;
            }
            var newclip = this.playlistAddPartPerformance(playlist, info.part, info.performance, info.title, info.startTime, info.endTime);
            playlist.showFeedback('Added');
        }
        if (this.selectedPerformance === pp)
            this.refreshSelectedPerformance();
    };
    WorkExplorerComponent.prototype.clickClipPlay = function (ev, clip) {
        this.playInternal(clip.playlist, clip.part, clip);
    };
    WorkExplorerComponent.prototype.dragClip = function (ev, clip) {
        // TODO playlist ID?
        ev.dataTransfer.setData(DRAG_AND_DROP_MIME_TYPE, JSON.stringify({
            type: 'Clip', id: clip.id, part: clip.part.id, performance: clip.realPerformance.id, title: clip.label,
            startTime: Math.abs(clip.startTime - clip.realPartPerformance.startTime) > 0.01 ? clip.startTime - clip.realPartPerformance.startTime : null,
            endTime: Math.abs(clip.startTime + clip.duration - (clip.realPartPerformance.startTime + clip.realPartPerformance.duration)) > 0.01 ?
                clip.startTime + clip.duration - clip.realPartPerformance.startTime : null
        }));
    };
    WorkExplorerComponent.prototype.dragoverClip = function (ev, clip) {
        ev.preventDefault();
    };
    WorkExplorerComponent.prototype.dropOnClip = function (ev, clip) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData(DRAG_AND_DROP_MIME_TYPE);
        console.log('Drop:', data);
        if (!data)
            return;
        var info = JSON.parse(data);
        if ('PartPerformance' == info.type) {
            //this.playlistAddPartPerformance(playlist, info.part, info.performance);
            // shouldn't happen!
            console.log('error, PartPerformance drop on Clip');
            return;
        }
        else if ('Clip' == info.type) {
            // handle Clip drop
            // id, part, performance
            if (!info.id || !info.part || !info.performance) {
                console.log('error: ill-formed Clip dropped', info);
                return;
            }
            // should be re-ordering with current playlist
            var clipIds = this.playlistClips.map(function (c) { return c.id; });
            var targetIx = clipIds.indexOf(clip.id);
            if (targetIx < 0) {
                console.log("error: target clip " + clip.id + " not found in current list");
                return;
            }
            var fromIx = clipIds.indexOf(info.id);
            if (fromIx < 0) {
                console.log("error: dropped clip " + info.id + " not found in current list");
                return;
            }
            console.log("move clip from " + fromIx + " to " + targetIx);
            if (fromIx == targetIx)
                return;
            var fromClip = this.playlistClips[fromIx];
            this.playlistClips.splice(fromIx, 1);
            if (targetIx >= fromIx)
                targetIx--;
            this.playlistClips.splice(targetIx, 0, fromClip);
            var playlistOffset = 0;
            for (var ci = 0; ci < this.playlistClips.length; ci++) {
                var c = this.playlistClips[ci];
                c.playlistOffset = playlistOffset;
                if (!c.duration || c.duration <= 0) {
                    console.log("warning, clip " + ci + " has duration " + c.duration);
                }
                playlistOffset += c.duration;
            }
            this.refreshSelectedPerformance();
        }
    };
    WorkExplorerComponent.prototype.editPlaylist = function ($event, playlist) {
        var _this = this;
        console.log('edit playlist', playlist);
        this.editingPlaylist = playlist;
        this.editingPlaylistInfo = { title: playlist.label };
        this.editingPlaylistInfo.items = [];
        var items = this.partPerformances.filter(function (pp) { return pp.playlist === _this.editingPlaylist && pp.isClip; }).sort(function (a, b) { return a.playlistOffset - b.playlistOffset; });
        for (var ii in items) {
            var item = items[ii];
            var itemInfo = { title: item.label, performance: item.realPerformance.id, part: item.part.id };
            // copy startTime & endTime
            if (Math.abs(item.startTime - item.realPartPerformance.startTime) > 0.01) {
                itemInfo.startTime = item.startTime - item.realPartPerformance.startTime;
            }
            if (Math.abs(item.startTime + item.duration - (item.realPartPerformance.startTime + item.realPartPerformance.duration)) > 0.01) {
                itemInfo.endTime = item.startTime + item.duration - item.realPartPerformance.startTime;
            }
            this.editingPlaylistInfo.items.push(itemInfo);
        }
    };
    WorkExplorerComponent.prototype.deletePlaylistClips = function (playlist) {
        for (var ii = 0; ii < this.partPerformances.length; ii++) {
            var item = this.partPerformances[ii];
            if (item.playlist === playlist) {
                this.partPerformances.splice(ii, 1);
                ii--;
            }
        }
    };
    WorkExplorerComponent.prototype.saveEditingPlaylistInternal = function (info) {
        if (this.editingPlaylist.selected) {
            this.stop();
        }
        if (this.editingPlaylist) {
            this.editingPlaylist.label = info.title;
            //let items = this.partPerformances.filter(pp => pp.playlist === this.editingPlaylist).sort((a,b) => a.playlistOffset - b.playlistOffset);
            this.deletePlaylistClips(this.editingPlaylist);
            for (var ix in info.items) {
                var item = info.items[ix];
                this.playlistAddPartPerformance(this.editingPlaylist, item.part, item.performance, item.title, item.startTime, item.endTime);
            }
            this.fixPlaylistOffsets(this.editingPlaylist);
            if (this.editingPlaylist.selected) {
                this.refreshSelectedPerformance();
            }
        }
    };
    WorkExplorerComponent.prototype.saveEditingPlaylist = function (info) {
        console.log('save editing playlist', info);
        this.saveEditingPlaylistInternal(info);
        this.cancelEditingPlaylist();
    };
    WorkExplorerComponent.prototype.cancelEditingPlaylist = function () {
        this.editingPlaylistInfo = null;
        this.editingPlaylist = null;
    };
    WorkExplorerComponent.prototype.deleteEditingPlaylist = function () {
        if (!this.editingPlaylist)
            return;
        this.deletePlaylistClips(this.editingPlaylist);
        for (var pi = 0; pi < this.performances.length; pi++) {
            var perf = this.performances[pi];
            if (perf === this.editingPlaylist) {
                this.performances.splice(pi, 1);
                pi = pi - 1;
            }
        }
        if (this.selectedPerformance === this.editingPlaylist) {
            this.selectedPerformance = null;
            this.playlistClips = [];
        }
        this.cancelEditingPlaylist();
        this.refreshSelectedPerformance();
    };
    WorkExplorerComponent.prototype.exportEditingPlaylist = function (info) {
        this.saveEditingPlaylistInternal(info);
        if (this.editingPlaylist) {
            console.log('export playlist', info);
            var data = JSON.stringify(info, null, 4);
            var blob = new Blob([data], {
                type: "application/json"
            });
            __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](blob, "playlist " + info.title + ".json");
        }
        this.cancelEditingPlaylist();
    };
    WorkExplorerComponent.prototype.editPlaylistItem = function ($event, clip) {
        console.log('edit clip', clip);
        this.editingClip = clip;
        this.editingPlaylistItem = { title: clip.label, performance: clip.realPerformance.id, part: clip.part.id };
        // copy startTime endTime
        if (Math.abs(this.editingClip.startTime - this.editingClip.realPartPerformance.startTime) > 0.01) {
            this.editingPlaylistItem.startTime = this.editingClip.startTime - this.editingClip.realPartPerformance.startTime;
        }
        if (Math.abs(this.editingClip.startTime + this.editingClip.duration - (this.editingClip.realPartPerformance.startTime + this.editingClip.realPartPerformance.duration)) > 0.01) {
            this.editingPlaylistItem.endTime = this.editingClip.startTime + this.editingClip.duration - this.editingClip.realPartPerformance.startTime;
        }
        this.pause();
        if (this.currentlyPlaying === clip && clip.clip.recording) {
            // audio or video?
            if (this.showVideo)
                this.editingPlaylistItem.currentTime = clip.videoClip.recording.lastTime - clip.realPartPerformance.videoClip.start;
            else
                this.editingPlaylistItem.currentTime = clip.audioClip.recording.lastTime - clip.realPartPerformance.audioClip.start;
        }
    };
    WorkExplorerComponent.prototype.fixClipStartTimeAndDuration = function (clip, startTime, endTime) {
        // set start time
        if (!startTime || startTime < 0)
            startTime = 0;
        if (startTime > clip.realPartPerformance.duration)
            startTime = clip.realPartPerformance.duration;
        if (!endTime || endTime > clip.realPartPerformance.duration)
            endTime = clip.realPartPerformance.duration;
        if (endTime < startTime)
            endTime = startTime;
        clip.hasStartOffset = Math.abs(startTime) > 0.01;
        clip.hasEndOffset = Math.abs(endTime - clip.realPartPerformance.duration) > 0.01;
        clip.startTime = clip.realPartPerformance.startTime + startTime;
        var duration = endTime - startTime;
        clip.duration = duration;
        //console.log(`clip startTime = ${this.editingClip}`)
        if (clip.videoClip && clip.realPartPerformance.videoClip) {
            clip.videoClip.start = clip.realPartPerformance.videoClip.start + startTime;
            clip.videoClip.duration = duration;
        }
        if (clip.audioClip && clip.realPartPerformance.audioClip) {
            clip.audioClip.start = clip.realPartPerformance.audioClip.start + startTime;
            clip.audioClip.duration = duration;
        }
        if (clip.clip && clip.realPartPerformance.clip) {
            clip.clip.start = clip.realPartPerformance.clip.start + startTime;
            clip.clip.duration = duration;
        }
    };
    WorkExplorerComponent.prototype.saveEditingPlaylistItem = function (info) {
        console.log('save editing playlist item', info);
        if (!this.editingClip)
            return;
        this.editingClip.label = info.title;
        this.fixClipStartTimeAndDuration(this.editingClip, info.startTime, info.endTime);
        this.fixPlaylistOffsets(this.editingClip.performance);
        this.cancelEditingPlaylistItem();
    };
    WorkExplorerComponent.prototype.cancelEditingPlaylistItem = function () {
        this.editingPlaylistItem = null;
        this.editingClip = null;
    };
    WorkExplorerComponent.prototype.deleteEditingPlaylistItem = function () {
        if (!this.editingClip)
            return;
        for (var ii = 0; ii < this.partPerformances.length; ii++) {
            var item = this.partPerformances[ii];
            if (item === this.editingClip) {
                this.partPerformances.splice(ii, 1);
                ii--;
            }
        }
        if (this.selectedPerformance === this.editingPlaylist) {
            for (var ii = 0; ii < this.playlistClips.length; ii++) {
                var item = this.playlistClips[ii];
                if (item === this.editingClip) {
                    this.playlistClips.splice(ii, 1);
                    ii--;
                }
            }
        }
        this.fixPlaylistOffsets(this.editingClip.performance);
        if (this.currentlyPlaying === this.editingClip)
            this.stop();
        this.cancelEditingPlaylistItem();
        this.refreshSelectedPerformance();
    };
    WorkExplorerComponent.prototype.fixPlaylistOffsets = function (performance) {
        // times...
        var otherClips = this.partPerformances.filter(function (pp) { return pp.performance === performance && pp.isClip; })
            .sort(function (a, b) { return a.playlistOffset - b.playlistOffset; });
        var playlistOffset = 0;
        for (var ci = 0; ci < otherClips.length; ci++) {
            var c = otherClips[ci];
            c.playlistOffset = playlistOffset;
            if (!c.duration || c.duration <= 0) {
                console.log("warning, clip " + ci + " has duration " + c.duration);
            }
            playlistOffset += c.duration;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('appframe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
    ], WorkExplorerComponent.prototype, "appframe", void 0);
    WorkExplorerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'work-explorer',
            template: __webpack_require__("../../../../../src/app/work-explorer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/work-explorer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_7__records_service__["a" /* RecordsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_8__linkapps_service__["a" /* LinkappsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WorkExplorerComponent);
    return WorkExplorerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h1>Works</h1>\n<div class=\"row\">\n\t<div *ngFor=\"let work of works\" class=\"col-md-4\">\n\t\t<a [routerLink]=\"['/explore', work.id]\">Explore {{work.label}}</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__records_service__ = __webpack_require__("../../../../../src/app/records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorksComponent = (function () {
    function WorksComponent(recordsService) {
        this.recordsService = recordsService;
    }
    WorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recordsService.getWorks()
            .then(function (works) { return _this.works = works.sort(function (a, b) { return a.compareTo(b, 'rdfs:label'); }); });
    };
    WorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-works',
            template: __webpack_require__("../../../../../src/app/works.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__records_service__["a" /* RecordsService */]])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map