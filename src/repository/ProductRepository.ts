import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entity/Product";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    findWithStore() {
        return this.createQueryBuilder("product")
            .innerJoinAndSelect("product.store", "store")
            .getMany();
    }
}