import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

import 'dotenv/config'
import bcrypt from 'bcryptjs'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Seeding database...')
  const hashedPassword = await bcrypt.hash('123456', 10)
  const findUser = await prisma.user.findUnique({
    where: {
      email: 'test@test.com',
    },
  })
  if (findUser) {
    console.log('User already exists')
    return
  }
  await prisma.user.create({
    data: {
      email: 'test@test.com',
      hashedPassword: hashedPassword,
      name: 'Test account',
    },
  })
}

main()
  .catch((e) => {
    console.error('❌ Seed failed', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
