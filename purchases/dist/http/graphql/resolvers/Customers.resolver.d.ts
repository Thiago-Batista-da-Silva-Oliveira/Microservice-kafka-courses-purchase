import { Customer } from '../models/Customer';
import { CustomersService } from '../../../services/customers.service';
import { AuthUser } from '../../auth/current-user';
import { PurchasesService } from 'src/services/purchases.service';
export declare class CustomerResolver {
    private customersService;
    private purchasesService;
    constructor(customersService: CustomersService, purchasesService: PurchasesService);
    me(user: AuthUser): import(".prisma/client").Prisma.Prisma__CustomerClient<import(".prisma/client").Customer>;
    purchases(customer: Customer): import(".prisma/client").PrismaPromise<import(".prisma/client").Purchase[]>;
}
