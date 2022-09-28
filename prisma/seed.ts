import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
        },
    })

    const bob = await prisma.user.upsert({
        where: { email: 'bob@prisma.io' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            name: 'Bob',
        },
    })
    console.log({ alice, bob })

    const mcdonalds = await prisma.restaurant.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'mcdonalds'
        }
    })

    const wendys = await prisma.restaurant.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'wendys'
        }
    })

    console.log({ mcdonalds, wendys })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })