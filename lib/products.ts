export type ProductStatus = "Available" | "Sold" | "Pre Order";

export type Product = {
  id: number;
  name: string;
  condition: string;
  battery: string;
  color: string;
  storage: string;
  price: string;
  numericPrice: number;
  status: ProductStatus;
  tag: string;
  warranty: string;
  completeness: string;
  notes: string;
  imageTone: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13 128GB",
    condition: "Second Like New",
    battery: "BH 89%",
    color: "Midnight",
    storage: "128GB",
    price: "Rp 7.850.000",
    numericPrice: 7850000,
    status: "Available",
    tag: "New Stock",
    warranty: "Garansi toko 7 hari",
    completeness: "Unit, box, kabel",
    notes: "Fisik mulus, Face ID normal, kamera jernih, siap pakai.",
    imageTone: "from-slate-950 via-slate-700 to-slate-400",
  },
  {
    id: 2,
    name: "iPhone 12 Pro 256GB",
    condition: "Ex iBox",
    battery: "BH 86%",
    color: "Pacific Blue",
    storage: "256GB",
    price: "Rp 8.750.000",
    numericPrice: 8750000,
    status: "Available",
    tag: "Best Deal",
    warranty: "Garansi toko 7 hari",
    completeness: "Unit, box, kabel, nota",
    notes: "Ex iBox, cocok untuk kamera dan daily content.",
    imageTone: "from-blue-950 via-blue-700 to-slate-300",
  },
  {
    id: 3,
    name: "iPhone 14 Pro 128GB",
    condition: "Inter ZP/A",
    battery: "BH 91%",
    color: "Deep Purple",
    storage: "128GB",
    price: "Rp 13.500.000",
    numericPrice: 13500000,
    status: "Sold",
    tag: "Sold",
    warranty: "Garansi toko 7 hari",
    completeness: "Unit dan kabel",
    notes: "Dynamic Island, kamera Pro, unit sudah terjual.",
    imageTone: "from-purple-950 via-purple-700 to-slate-300",
  },
  {
    id: 4,
    name: "iPhone 15 128GB",
    condition: "Like New",
    battery: "BH 96%",
    color: "Black",
    storage: "128GB",
    price: "Rp 12.900.000",
    numericPrice: 12900000,
    status: "Available",
    tag: "Fresh Stock",
    warranty: "Garansi toko 14 hari",
    completeness: "Fullset",
    notes: "Unit fresh, cocok untuk upgrade jangka panjang.",
    imageTone: "from-black via-slate-800 to-slate-400",
  },
  {
    id: 5,
    name: "iPhone 11 128GB",
    condition: "Ex Inter",
    battery: "BH 84%",
    color: "White",
    storage: "128GB",
    price: "Rp 5.450.000",
    numericPrice: 5450000,
    status: "Pre Order",
    tag: "Pre Order",
    warranty: "Sesuai unit request",
    completeness: "Menyesuaikan request",
    notes: "Bisa request warna dan kondisi sesuai budget.",
    imageTone: "from-slate-300 via-white to-slate-100",
  },
  {
    id: 6,
    name: "iPhone 15 Pro 256GB",
    condition: "Like New",
    battery: "BH 98%",
    color: "Natural Titanium",
    storage: "256GB",
    price: "Rp 18.250.000",
    numericPrice: 18250000,
    status: "Available",
    tag: "Premium Pick",
    warranty: "Garansi toko 14 hari",
    completeness: "Fullset",
    notes: "Titanium, kamera Pro, performa kencang untuk long term.",
    imageTone: "from-stone-800 via-stone-500 to-stone-200",
  },
];

export const stockTimeline = [
  { time: "Hari ini, 19:30", title: "iPhone 15 128GB Black masuk stok", type: "Fresh Stock" },
  { time: "Hari ini, 16:10", title: "iPhone 13 128GB Midnight available", type: "Available" },
  { time: "Kemarin, 21:10", title: "iPhone 14 Pro Deep Purple sold", type: "Sold" },
  { time: "2 hari lalu", title: "Open request pre-order iPhone 11-15 series", type: "Pre Order" },
];

export const reviews = [
  {
    name: "Raka",
    product: "iPhone 13 128GB",
    rating: 5,
    text: "Unit sesuai deskripsi, BH masih tinggi, seller fast response. COD di Malang juga aman.",
    photo: "COD Preview",
  },
  {
    name: "Nadia",
    product: "iPhone 12 Pro 256GB",
    rating: 5,
    text: "Dibantu pilih unit sesuai budget. Kondisi mulus dan semua dicek bareng.",
    photo: "Unit Preview",
  },
  {
    name: "Dimas",
    product: "iPhone 15 128GB",
    rating: 4,
    text: "Admin responsif, pengiriman cepat, packing aman. Recommended.",
    photo: "Package Preview",
  },
];

export const WHATSAPP_NUMBER = "6281234567890";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
