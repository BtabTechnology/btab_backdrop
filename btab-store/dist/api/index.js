"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vendor_1 = __importDefault(require("./routes/vendor"));
// Export a function that takes `app` as a parameter
function registerRoutes(app) {
    app.use("/store", vendor_1.default); // Or "/admin" depending on the API scope
}
exports.default = registerRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkRBQTJDO0FBRTNDLG9EQUFvRDtBQUNwRCxTQUF3QixjQUFjLENBQUMsR0FBZ0I7SUFDckQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0JBQVksQ0FBQyxDQUFDLENBQUMseUNBQXlDO0FBQzVFLENBQUM7QUFGRCxpQ0FFQyJ9