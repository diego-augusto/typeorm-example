import "reflect-metadata";
import { User } from "./entity/User";
import Database from "./application/Database";
import { Store } from "./entity/Store";
import { Product } from "./entity/Product";

(async function () {

    try {
        const connection = await Database.getConnection()

        console.log("Inserting a new user into the database...");
        const user = new User();
        user.name = "Diego Augusto";
        user.email = "diego@email.com"
        user.age = 25;
        user.isActive = true
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Inserting a new store into the database...");
        const store = new Store();
        store.name = "My new e-commerce";
        store.user = user
        await connection.manager.save(store);
        console.log("Saved a new store with id: " + store.id);

        console.log("Inserting a new product into the database...");
        const product = new Product();
        product.name = "New Product";
        product.quantity = 10
        product.store = store
        await connection.manager.save(product);
        console.log("Saved a new product with id: " + product.id);

        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        const stores = await connection.manager.find(Store);
        const products = await connection.manager.find(Product);
        console.log("Loaded users: ", users);
        console.log("Loaded stores: ", stores);
        console.log("Loaded products: ", products);

    } catch (error) {
        console.log(error)
    }

}())
