import { drizzle } from 'drizzle-orm/bun-sqlite'
import { migrate } from 'drizzle-orm/bun-sqlite/migrator'
import * as schema from './schema'

export const db = drizzle({ connection: { source: 'receipts.db' }, schema })
migrate(db, { migrationsFolder: `${import.meta.dir}/../drizzle` })
