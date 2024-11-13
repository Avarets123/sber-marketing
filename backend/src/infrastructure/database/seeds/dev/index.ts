import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  let usersCount = await prisma.user.count()

  for (let i = 0; i <= 10; i++) {
    usersCount++
    await prisma.user.create({
      data: {
        firstName: `userFirstName is: ${usersCount}`,
        lastName: `userLastName is: ${usersCount}`,
      },
    })
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
