var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "vue-property-decorator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var vue_property_decorator_1 = require("vue-property-decorator");
    var Box = /** @class */ (function (_super) {
        __extends(Box, _super);
        function Box() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.count = 0;
            return _this;
        }
        Box.prototype.TouchMe = function () {
            this.count++;
        };
        Box = __decorate([
            vue_property_decorator_1.Component({
                name: 'Box',
                template: "<button v-on:click=\"TouchMe\">\u9EDE\u6211{{count}}</button>"
            })
        ], Box);
        return Box;
    }(vue_property_decorator_1.Vue));
    exports.default = Box;
});
//# sourceMappingURL=box.js.map