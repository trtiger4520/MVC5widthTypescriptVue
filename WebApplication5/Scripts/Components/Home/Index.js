var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./service", "vue", "./box"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var service_1 = require("./service");
    var vue_1 = __importDefault(require("vue"));
    var box_1 = __importDefault(require("./box"));
    var service = new service_1.HomeService();
    //Vue.component('box-button', Box);
    var app = new vue_1.default({
        el: '#App',
        data: {
            aa: "sdf",
            show: true
        },
        created: function () {
            console.log('create');
        },
        components: {
            'box-button': box_1.default
        }
    });
});
//# sourceMappingURL=Index.js.map