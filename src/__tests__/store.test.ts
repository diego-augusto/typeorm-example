import { Connection, createConnection } from "typeorm"
import { UserRepository } from "../repositories/UserRepository";
import { StoreRepository } from "../repositories/StoreRepository";
import { User } from "../entities/User";
import { Store } from "../entities/Store";

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

        const user = new User();
        user.name = "Diego Augusto";
        user.email = "diego@email.com"
        user.password = "diego182"
        await useRepository.save(user)

        const store = new Store();
        store.name = "My new e-commerce";
        store.user = user
        await storeRepository.save(store);

        expect(user.id).toBeGreaterThan(0)
        expect(user.publicId).not.toBeNull()
        expect(store.id).toBeGreaterThan(0)
        expect(store.publicId).not.toBeNull()
        expect(store.user.id).toEqual(user.id)
    })
})