import { prisma } from "../../infra/database/prisma"

class DeleteUser {
  async execute(id: string) {
    await prisma.ranking.delete({
      where: { id: id }
    })
  }
}

export { DeleteUser }
