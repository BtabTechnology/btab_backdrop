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
exports.Vendor = void 0;
const typeorm_1 = require("typeorm");
let Vendor = class Vendor {
    id;
    name;
    description;
    contact_email;
    website;
    created_at;
    updated_at;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Vendor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "contact_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Vendor.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Vendor.prototype, "updated_at", void 0);
Vendor = __decorate([
    (0, typeorm_1.Entity)()
], Vendor);
exports.Vendor = Vendor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy92ZW5kb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBTWlCO0FBR1YsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFNO0lBRWpCLEVBQUUsQ0FBUztJQUdYLElBQUksQ0FBUztJQUdiLFdBQVcsQ0FBUztJQUdwQixhQUFhLENBQVM7SUFHdEIsT0FBTyxDQUFTO0lBR2hCLFVBQVUsQ0FBTztJQUdqQixVQUFVLENBQU87Q0FDbEIsQ0FBQTtBQXBCQztJQUFDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztrQ0FDcEI7QUFFWDtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7b0NBQ0k7QUFFYjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7MkNBQ1c7QUFFcEI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUNMO0FBRXRCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDWDtBQUVoQjtJQUFDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1AsSUFBSTswQ0FBQztBQUVqQjtJQUFDLElBQUEsMEJBQWdCLEdBQUU7OEJBQ1AsSUFBSTswQ0FBQztBQXBCTixNQUFNO0lBRGxCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLE1BQU0sQ0FxQmxCO0FBckJZLHdCQUFNIn0=