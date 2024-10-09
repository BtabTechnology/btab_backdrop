"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const vendor_1 = require("./models/vendor"); // Ensure this points to your Vendor model
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "woini",
    database: "mydatabase",
    entities: [vendor_1.Vendor],
    migrations: ["src/migrations/**/*.ts"],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGF0YS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLDRDQUF5QyxDQUFDLDBDQUEwQztBQUV2RSxRQUFBLGFBQWEsR0FBRyxJQUFJLG9CQUFVLENBQUM7SUFDMUMsSUFBSSxFQUFFLFVBQVU7SUFDaEIsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsVUFBVTtJQUNwQixRQUFRLEVBQUUsT0FBTztJQUNqQixRQUFRLEVBQUUsWUFBWTtJQUN0QixRQUFRLEVBQUUsQ0FBQyxlQUFNLENBQUM7SUFDbEIsVUFBVSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Q0FDdkMsQ0FBQyxDQUFDIn0=