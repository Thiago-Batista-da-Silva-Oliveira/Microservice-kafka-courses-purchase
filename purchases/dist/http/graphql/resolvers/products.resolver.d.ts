import { ProductsService } from 'src/services/products.service';
import { CreateProductInput } from '../inputs/create-product-input';
export declare class ProductsResolver {
    private productsService;
    constructor(productsService: ProductsService);
    products(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    createProduct(data: CreateProductInput): Promise<import(".prisma/client").Product>;
}
