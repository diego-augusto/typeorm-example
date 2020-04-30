import { EntityRepository, Repository } from "typeorm";
import { Store } from "../entities/Store";

@EntityRepository(Store)
export class StoreRepository extends Repository<Store> { 
    findWithProducts() {
        return this.createQueryBuilder("store")
            .innerJoinAndSelect("store.products", "product")
            .getMany();
    }
}