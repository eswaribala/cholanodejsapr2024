import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../config";
import Customer from "../db/models/customer.model";
import Individual from "./models/individual.models";
import {Corporate} from "./models/corporate.model";
import {Address} from "./models/address.model";

class Database {
    public sequelize: Sequelize | undefined;

    constructor() {
        this.connectToDatabase();
        console.log(config.DB)
        console.log(config.USER)
        console.log(config.PASSWORD)
        console.log(config.HOST)
    }

    private async connectToDatabase() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            port: config.PORT,
            dialect: dialect,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            models: [Customer,Individual,Corporate,Address]
        });

        await this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch((err) => {
                console.error("Unable to connect to the Database:", err);
            });
    }
}

export default Database;