"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRepository = void 0;
const typeorm_1 = require("typeorm");
const vendor_1 = require("../models/vendor");
let VendorRepository = class VendorRepository extends typeorm_1.Repository {
};
VendorRepository = __decorate([
    (0, typeorm_1.EntityRepository)(vendor_1.Vendor)
], VendorRepository);
exports.VendorRepository = VendorRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcG9zaXRvcmllcy92ZW5kb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUNBQXVEO0FBQ3ZELDZDQUEwQztBQUduQyxJQUFNLGdCQUFnQixHQUF0QixNQUFNLGdCQUFpQixTQUFRLG9CQUFrQjtDQUV2RCxDQUFBO0FBRlksZ0JBQWdCO0lBRDVCLElBQUEsMEJBQWdCLEVBQUMsZUFBTSxDQUFDO0dBQ1osZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIn0=