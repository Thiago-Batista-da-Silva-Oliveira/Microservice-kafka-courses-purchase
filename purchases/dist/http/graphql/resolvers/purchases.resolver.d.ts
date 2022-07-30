import { ProductsService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
import { Purchase } from '../models/purchase';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';
import { AuthUser } from '../../auth/current-user';
import { CustomersService } from 'src/services/customers.service';
export declare class PurchasesResolver {
    private purchasesService;
    private productsService;
    private customersService;
    constructor(purchasesService: PurchasesService, productsService: ProductsService, customersService: CustomersService);
    purchases(): import(".prisma/client").PrismaPromise<import(".prisma/client").Purchase[]>;
    product(purchase: Purchase): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    createPurchase(data: CreatePurchaseInput, user: AuthUser): Promise<import(".prisma/client").Purchase>;
}
