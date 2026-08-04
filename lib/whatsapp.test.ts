// Run: node --experimental-strip-types lib/whatsapp.test.ts
import assert from 'node:assert/strict'
import { buildWhatsAppUrl } from './whatsapp.ts'

const url = buildWhatsAppUrl({
  name: 'Budi & Rekan',
  email: 'budi@contoh.co.id',
  subject: 'Kerja sama logistik',
  message: 'Butuh 3 truk\nper minggu ke Surabaya.',
})

assert.ok(url.startsWith('https://wa.me/6281111840091?text='))

// & and newlines must survive encoding, not split the query string
assert.ok(url.includes('%26'), 'ampersand must be percent-encoded')
assert.equal(new URL(url).searchParams.size, 1)

const text = new URL(url).searchParams.get('text')!
assert.match(text, /^Halo Tachi Group, saya Budi & Rekan\./)
assert.match(text, /Perihal: Kerja sama logistik/)
assert.match(text, /Butuh 3 truk\nper minggu ke Surabaya\./)
assert.match(text, /Balas ke: budi@contoh\.co\.id/)

// subject is optional — no empty "Perihal:" line
const noSubject = new URL(
  buildWhatsAppUrl({ name: 'A', email: 'a@b.c', subject: '', message: 'Hai' }),
).searchParams.get('text')!
assert.ok(!noSubject.includes('Perihal:'))

console.log('ok — buildWhatsAppUrl')
