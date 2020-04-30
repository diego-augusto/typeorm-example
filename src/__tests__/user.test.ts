import { Connection, createConnection } from "typeorm"
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

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

        const user = new User();
        user.name = "Diego Augusto";
        user.email = "diego@email.com"
        user.password = "diego182"
        await useRepository.save(user)

        expect(user.id).toBeGreaterThan(0)
        expect(user.publicId).not.toBeNull()
    })
})