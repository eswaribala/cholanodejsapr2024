import { Application } from "express";
import homeRoutes from "./home.routes";
import customerRoutes from "./customer.routes";

export default class Routes {
    constructor(app: Application) {
        app.use("/api", homeRoutes);
        app.use("/api/customers", customerRoutes);
    }
}