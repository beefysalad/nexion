import prisma from '@/lib/prisma'

export async function getCounter() {
  const counter = await prisma.count.findUnique({
    where: { key: 'global_counter' },
  })

  if (!counter) {
    return await prisma.count.create({
      data: {
        key: 'global_counter',
        value: 0,
      },
    })
  }

  return counter
}

export async function incrementCounter() {
  const counter = await prisma.count.upsert({
    where: { key: 'global_counter' },
    update: {
      value: { increment: 1 },
    },
    create: {
      key: 'global_counter',
      value: 1,
    },
  })

  return counter
}
