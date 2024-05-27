import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "../src/api/routes";
import Database from "./db";
// @ts-ignore
import swaggerUi from "swagger-ui-express";
// @ts-ignore
import swaggerOutput from "./swagger_output.json";
import {graphqlHTTP} from "express-graphql";
import schema from "./graphql/schema";
import {root} from "./graphql/resolvers";
export default class Server {
    constructor(app: Application) {
        this.config(app);
        this.syncDatabase();
        new Routes(app);
    }

    private config(app: Application): void {
        const corsOptions: CorsOptions = {
            origin: "http://localhost:3000"
        };

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
        app.use(
            "/graphql",
            graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql: true,
            })
        );
    }
    private syncDatabase(): void {
        const db = new Database();
        db.sequelize?.sync();
    }

}