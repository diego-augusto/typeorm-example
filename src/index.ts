import "reflect-metadata";
import { User } from "./entity/User";
import Database from "./application/Database";

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

        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);

    } catch (error) {
        console.log(error)
    }

}())
