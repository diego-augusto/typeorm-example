import "reflect-metadata";
import { User } from "./entity/User";
import Database from "./application/Database";
import { Store } from "./entity/Store";
import { Product } from "./entity/Product";
import { UserRepository } from "./repository/UserRepository";
import { ProductRepository } from "./repository/ProductRepository";
import { StoreRepository } from "./repository/StoreRepository";

(async function () {

    try {
        const connection = await Database.getConnection()

        const useRepository = connection.getCustomRepository(UserRepository)
        const productRepository = connection.getCustomRepository(ProductRepository)
        const storeRepository = connection.getCustomRepository(StoreRepository)

        const countUser = await useRepository.count()

        if (countUser === 0) {
            console.log("Inserting a new user into the database...");
            const user = new User();
            user.name = "Diego Augusto";
            user.email = "diego@email.com"
            user.actived = true
            await useRepository.save(user)
            console.log("Saved a new user with id: " + user.id);

            console.log("Inserting a new store into the database...");
            const store = new Store();
            store.name = "My new e-commerce";
            store.user = user
            await storeRepository.save(store);
            console.log("Saved a new store with id: " + store.id);

            console.log("Inserting a new product into the database...");
            const product = new Product();
            product.name = "New Product";
            product.quantity = 10
            product.store = store
            await productRepository.save(product);
            console.log("Saved a new product with id: " + product.id);
        }

        console.log("Loading users from the database...");
        const users = await useRepository.find();
        const stores = await storeRepository.findWithProducts();
        const products = await productRepository.findWithStore();
        console.log("Loaded users: ", users);
        console.log("Loaded stores: ", stores);
        console.log("Loaded products: ", products);

        process.exit(0);

    } catch (error) {
        console.log(error)
    }

}())
