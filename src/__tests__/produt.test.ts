import { Connection, createConnection } from "typeorm"
import { UserRepository } from "../repositories/UserRepository";
import { StoreRepository } from "../repositories/StoreRepository";
import { ProductRepository } from "../repositories/ProductRepository";
import { User } from "../entities/User";
import { Store } from "../entities/Store";
import { Product } from "../entities/Product";

let connection: Connection

describe("user", () => {

    beforeAll(async () => {
        connection = await createConnection("test")
    })

    afterAll(() => {
        connection.close()
    })

    test("create user", async () => {

        const useRepository = connection.getCustomRepository(UserRepository)
        const storeRepository = connection.getCustomRepository(StoreRepository)
        const productRepository = connection.getCustomRepository(ProductRepository)

        const user = new User();
        user.name = "Diego Augusto";
        user.email = "diego@email.com"
        user.password = "diego182"
        await useRepository.save(user)

        const store = new Store();
        store.name = "My new e-commerce";
        store.user = user
        await storeRepository.save(store);

        const product = new Product();
        product.name = "New Product";
        product.quantity = 10
        product.store = store
        await productRepository.save(product);

        expect(user.id).toBeGreaterThan(0)
        expect(user.publicId).not.toBeNull()
        
        expect(store.id).toBeGreaterThan(0)
        expect(store.publicId).not.toBeNull()
        expect(store.user.id).toEqual(user.id)

        expect(product.id).toBeGreaterThan(0)
        expect(product.publicId).not.toBeNull()
        expect(product.store.id).toEqual(store.id)
    })
})