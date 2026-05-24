# iphone.store.malang — Frontend Only Demo

Website modern untuk toko jual beli iPhone `iphone.store.malang`.

## Fitur

- Landing page premium Apple reseller style
- Etalase produk
- Search produk
- Filter status produk
- Filter budget
- Product detail modal
- Deal of The Week
- Customer review form
- Rating bintang
- Upload foto COD / foto unit preview filename
- Stock update timeline
- Tukar tambah estimator ke WhatsApp
- Pre-order form ke WhatsApp
- Floating WhatsApp button
- Responsive mobile-first lebih dioptimalkan

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS v3
- Framer Motion
- Lucide React
- Frontend-only, belum memakai backend/database

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka:

```bash
http://localhost:3000
```

## Jika sebelumnya sudah install dependency

Hapus dulu dependency lama:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Untuk Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run dev
```

## Ganti Nomor WhatsApp

Edit file:

```bash
lib/products.ts
```

Ubah:

```ts
export const WHATSAPP_NUMBER = "6281234567890";
```

menjadi nomor WhatsApp Business asli.

## Edit Produk

Data produk dummy ada di:

```bash
lib/products.ts
```

Tambahkan atau ubah data pada array `products`.

## Catatan

Customer review, upload foto, pre-order, dan fitur etalase masih berupa frontend-only demo. Tampilan admin demo sudah disembunyikan dari halaman utama. Untuk versi production, fitur ini bisa disambungkan ke Supabase atau Firebase.
