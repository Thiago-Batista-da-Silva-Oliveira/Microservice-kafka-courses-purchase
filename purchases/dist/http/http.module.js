"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const node_path_1 = __importDefault(require("node:path"));
const database_module_1 = require("../database/database.module");
const customers_service_1 = require("../services/customers.service");
const products_service_1 = require("../services/products.service");
const purchases_service_1 = require("../services/purchases.service");
const Customers_resolver_1 = require("./graphql/resolvers/Customers.resolver");
const products_resolver_1 = require("./graphql/resolvers/products.resolver");
const purchases_resolver_1 = require("./graphql/resolvers/purchases.resolver");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: node_path_1.default.resolve(process.cwd(), 'src/schema.gql'),
            }),
        ],
        providers: [
            products_resolver_1.ProductsResolver,
            products_service_1.ProductsService,
            purchases_resolver_1.PurchasesResolver,
            purchases_service_1.PurchasesService,
            customers_service_1.CustomersService,
            Customers_resolver_1.CustomerResolver,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map