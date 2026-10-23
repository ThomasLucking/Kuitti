import { db } from './db'
import { receipts } from './schema'

await db.insert(receipts).values([
  { item: 'Coffee', price: 4 },
  { item: 'Sandwich', price: 9 },
  { item: 'Groceries', price: 56 },
  { item: 'Train ticket', price: 12 },
  { item: 'Book', price: 18 },
])
