import { Hono } from 'hono'
import { desc } from 'drizzle-orm'
import { db } from './db'
import { receipts } from './schema'

const app = new Hono().basePath('/api')

app.get('/health', (c) => c.json({ status: 'ok' }))

app.get('/receipts', async (c) =>
  c.json(await db.select().from(receipts).orderBy(desc(receipts.createdAt))),
)

// multipart form, field "image" -> OCR text via the tesseract CLI
app.post('/receipt', async (c) => {
  const { image } = await c.req.parseBody()
  if (!(image instanceof File)) return c.json({ error: 'image file required' }, 400)
  const proc = Bun.spawn(['tesseract', 'stdin', 'stdout'], { stdin: image, stderr: 'ignore' })
  const text = await new Response(proc.stdout).text()
  if ((await proc.exited) !== 0) return c.json({ error: 'ocr failed' }, 422)
  return c.json({ text })
})

export default app
