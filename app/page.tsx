"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AreaChart,
  AtSign,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Edit3,
  Eye,
  Headphones,
  ImagePlus,
  LayoutDashboard,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Store,
  Trash2,
  Truck,
  UploadCloud,
  X,
  Zap,
} from "lucide-react";
import {
  products,
  Product,
  ProductStatus,
  reviews,
  stockTimeline,
  whatsappUrl,
} from "@/lib/products";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Etalase", href: "#etalase" },
  { label: "Review", href: "#review" },
  { label: "Pre Order", href: "#preorder" },
  { label: "FAQ", href: "#faq" },
];

const filters: Array<"Semua" | ProductStatus | "New Stock"> = [
  "Semua",
  "Available",
  "New Stock",
  "Sold",
  "Pre Order",
];

const budgetFilters = [
  { label: "Semua Budget", min: 0, max: Infinity },
  { label: "< 6 Juta", min: 0, max: 6000000 },
  { label: "6-10 Juta", min: 6000000, max: 10000000 },
  { label: "10-15 Juta", min: 10000000, max: 15000000 },
  { label: "> 15 Juta", min: 15000000, max: Infinity },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft">
        <Sparkles className="h-4 w-4 text-blue-500" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function MiniPhone({
  tone = "from-slate-950 via-slate-700 to-slate-400",
  className = "",
}: {
  tone?: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto h-56 w-36 rounded-[2.4rem] border-[9px] border-slate-950 bg-gradient-to-br ${tone} shadow-2xl ${className}`}>
      <div className="absolute left-1/2 top-3 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      <div className="absolute left-4 top-10 h-10 w-10 rounded-2xl bg-white/20 backdrop-blur" />
      <div className="absolute bottom-6 left-4 right-4 rounded-2xl bg-white/20 p-3 backdrop-blur">
        <div className="h-2 rounded-full bg-white/80" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-soft">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-base font-black leading-none text-slate-950">
              iphone.store.malang
            </p>
            <p className="text-xs font-medium text-slate-500">Premium iPhone Store</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl("Halo kak, saya ingin konsultasi iPhone di iphone.store.malang.")}
          target="_blank"
          className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-green-500 md:inline-flex"
        >
          Konsultasi WhatsApp
        </a>

        <button
          aria-label="Buka menu"
          onClick={() => setOpen(true)}
          className="rounded-2xl bg-slate-100 p-3 text-slate-900 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto h-full w-80 bg-white p-5 shadow-premium"
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="font-black text-slate-950">Menu</p>
                <button onClick={() => setOpen(false)} className="rounded-xl bg-slate-100 p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-slate-50 px-4 py-4 font-bold text-slate-700"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappUrl("Halo kak, saya ingin konsultasi iPhone di iphone.store.malang.")}
                  target="_blank"
                  className="mt-3 rounded-2xl bg-green-500 px-4 py-4 text-center font-black text-white"
                >
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const badges = [
    { icon: ShieldCheck, text: "Garansi Toko" },
    { icon: BadgeCheck, text: "Unit Bergaransi" },
    { icon: MapPin, text: "Siap COD Malang" },
    { icon: Zap, text: "Bisa Tukar Tambah" },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-28 mesh-bg premium-grid">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-4 py-10 sm:px-5 sm:py-14 lg:min-h-[860px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.65 }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-soft backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-500" />
            Frontend Demo • Admin Ready UI • Review Upload
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl md:text-7xl">
            Jual Beli iPhone Berkualitas di Malang
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg md:text-xl md:leading-8">
            Stok iPhone second berkualitas, bergaransi, siap COD Malang dan
            pengiriman seluruh Indonesia. Sekarang dengan tampilan katalog,
            admin stock demo, review customer, dan request pre-order.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl("Halo kak, saya ingin cek stok terbaru di iphone.store.malang.")}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 text-base font-black text-white shadow-lg shadow-green-500/25 transition hover:-translate-y-1 hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" />
              Chat WhatsApp
            </a>
            <a
              href="#etalase"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-slate-800"
            >
              <ShoppingBag className="h-5 w-5" />
              Lihat Etalase
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-4">
            {badges.map((badge) => (
              <motion.div
                key={badge.text}
                whileHover={{ y: -4 }}
                className="glass rounded-3xl p-4 shadow-soft"
              >
                <badge.icon className="mb-3 h-6 w-6 text-blue-500" />
                <p className="text-sm font-black text-slate-800">{badge.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="relative mx-auto h-[430px] max-w-[330px] sm:h-[520px] sm:max-w-[410px] lg:h-[560px] lg:max-w-[430px]"
          >
            <div className="absolute -inset-8 rounded-full bg-blue-400/20 blur-3xl" />
            <MiniPhone tone="from-slate-950 via-slate-800 to-slate-500" className="float-slow absolute left-2 top-24 z-20 scale-75 rotate-[-10deg] sm:left-8 sm:top-28 sm:scale-100" />
            <MiniPhone tone="from-blue-950 via-blue-700 to-slate-300" className="float-slow absolute right-2 top-8 z-10 scale-75 rotate-[11deg] sm:right-8 sm:top-10 sm:scale-100" />
            <div className="absolute bottom-4 left-1/2 z-30 w-[290px] -translate-x-1/2 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-premium backdrop-blur-xl sm:bottom-6 sm:w-[310px] sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Fresh Stock</p>
                  <p className="text-xl font-black text-slate-950 sm:text-2xl">iPhone 15 128GB</p>
                </div>
                <div className="rounded-2xl bg-green-500 p-3 text-white">
                  <BadgeCheck className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {["BH 96%", "Fullset", "COD", "Ready"].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-100 px-2 py-3 text-center text-[11px] font-black text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={whatsappUrl("Halo kak, saya tertarik dengan iPhone 15 128GB di iphone.store.malang.")}
                target="_blank"
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 text-sm font-black text-white shadow-lg shadow-green-500/25"
              >
                <MessageCircle className="h-4 w-4" />
                Tanya Unit Ini
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-y border-slate-200 bg-white/70 py-4 backdrop-blur">
        <div className="marquee flex w-[200%] gap-4">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex w-1/2 items-center justify-around gap-4">
              {["COD Malang", "Garansi Toko", "Unit Dicek Detail", "Fast Response", "Bisa Tukar Tambah", "Pre-Order Ready"].map((item) => (
                <div key={`${loop}-${item}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-black text-white">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DealOfTheWeek() {
  const deal = products.find((p) => p.tag === "Best Deal") || products[0];
  return (
    <section className="bg-white px-4 py-14 sm:px-5 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-[2rem] bg-slate-950 p-4 text-white shadow-premium sm:gap-8 sm:rounded-[2.5rem] sm:p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-white/10 sm:min-h-[330px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/10" />
          <MiniPhone tone={deal.imageTone} className="absolute left-1/2 top-12 -translate-x-1/2 rotate-6" />
          <div className="absolute left-5 top-5 rounded-full bg-green-500 px-4 py-2 text-sm font-black">
            Deal of The Week
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            Produk pilihan minggu ini
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">{deal.name}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            {deal.condition} • {deal.battery} • {deal.color} • {deal.storage}. Cocok untuk kamu yang cari value terbaik dengan tampilan premium.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[deal.warranty, deal.completeness, "Siap COD Malang"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-100">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-3xl font-black">{deal.price}</p>
            <a
              href={whatsappUrl(`Halo kak, saya ingin ambil Deal of The Week ${deal.name} di iphone.store.malang. Apakah masih tersedia?`)}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-4 font-black text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Ambil Deal Ini
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-t-[2rem] bg-white p-4 shadow-premium sm:rounded-[2rem] sm:p-5 md:p-8"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-blue-500">Detail Unit</p>
            <h3 className="text-2xl font-black text-slate-950 sm:text-3xl">{product.name}</h3>
          </div>
          <button onClick={onClose} className="rounded-2xl bg-slate-100 p-3">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-slate-100 p-5 sm:p-8">
            <MiniPhone tone={product.imageTone} />
          </div>
          <div>
            <p className="text-3xl font-black text-slate-950 sm:text-4xl">{product.price}</p>
            <p className="mt-3 leading-7 text-slate-600">{product.notes}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Kondisi", product.condition],
                ["Battery", product.battery],
                ["Warna", product.color],
                ["Storage", product.storage],
                ["Garansi", product.warranty],
                ["Kelengkapan", product.completeness],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
                  <p className="mt-1 font-black text-slate-850">{value}</p>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl(`Halo kak, saya tertarik dengan ${product.name} yang ada di etalase iphone.store.malang. Apakah masih tersedia?`)}
              target="_blank"
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-black text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Tanya via WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({ product, onDetail }: { product: Product; onDetail: (product: Product) => void }) {
  const disabled = product.status === "Sold";
  const message = `Halo kak, saya tertarik dengan ${product.name} yang ada di etalase iphone.store.malang. Apakah masih tersedia?`;

  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:shadow-premium"
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 sm:h-72">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1.5 text-xs font-black text-slate-800 shadow-soft backdrop-blur">
          {product.tag}
        </div>
        <div
          className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1.5 text-xs font-black ${
            product.status === "Available"
              ? "bg-green-500 text-white"
              : product.status === "Sold"
              ? "bg-slate-950 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          {product.status}
        </div>
        <MiniPhone tone={product.imageTone} className="absolute bottom-0 left-1/2 -translate-x-1/2 transition duration-500 group-hover:scale-105 group-hover:rotate-3" />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-black tracking-tight text-slate-950">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-slate-500">{product.condition}</p>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
          {[
            ["Battery", product.battery],
            ["Warna", product.color],
            ["Storage", product.storage],
            ["Status", product.status],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
              <p className="mt-1 text-sm font-black text-slate-800">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Harga</p>
            <p className="text-lg font-black text-slate-950">{product.price}</p>
          </div>
          <button
            onClick={() => onDetail(product)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm font-black text-slate-800 transition hover:bg-slate-950 hover:text-white"
          >
            <Eye className="h-4 w-4" />
            Detail
          </button>
        </div>
        <a
          href={disabled ? undefined : whatsappUrl(message)}
          target={disabled ? undefined : "_blank"}
          aria-disabled={disabled}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black transition ${
            disabled
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-green-500 text-white shadow-lg shadow-green-500/20 hover:-translate-y-0.5 hover:bg-green-600"
          }`}
        >
          <MessageCircle className="h-4 w-4" />
          {disabled ? "Sudah Sold" : "Tanya Unit Ini"}
        </a>
      </div>
    </motion.article>
  );
}

function Showcase() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Semua");
  const [budget, setBudget] = useState(budgetFilters[0]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        filter === "Semua" ||
        product.status === filter ||
        product.tag.toLowerCase().includes(filter.toLowerCase());
      const matchBudget = product.numericPrice >= budget.min && product.numericPrice < budget.max;
      return matchSearch && matchFilter && matchBudget;
    });
  }, [filter, search, budget]);

  return (
    <section id="etalase" className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Etalase Terbaru"
          title="Stok iPhone yang Baru Upload & Update"
          description="Filter berdasarkan status, budget, atau cari tipe iPhone tertentu. Klik detail untuk lihat spesifikasi unit."
        />

        <div className="mb-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-3 sm:p-4">
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari produk, contoh: iPhone 13"
                className="h-13 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 sm:h-14"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-black transition sm:px-5 ${
                    filter === item
                      ? "bg-slate-950 text-white shadow-soft"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {budgetFilters.map((item) => (
              <button
                key={item.label}
                onClick={() => setBudget(item)}
                className={`inline-flex whitespace-nowrap items-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${
                  budget.label === item.label
                    ? "bg-blue-500 text-white shadow-soft"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div layout className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onDetail={setSelected} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center"
            >
              <p className="text-lg font-black text-slate-900">Produk tidak ditemukan</p>
              <p className="mt-2 text-slate-500">
                Coba filter lain atau langsung request lewat pre-order.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ReviewSection() {
  const [rating, setRating] = useState(5);
  const [photoName, setPhotoName] = useState("");

  return (
    <section id="review" className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Customer Review"
          title="Upload Foto COD dan Rating Pembelian"
          description="Customer bisa mengisi rating, testimoni, dan upload foto. Untuk sekarang preview frontend-only, nanti bisa dibuat approval admin."
        />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 shadow-soft sm:p-5 md:p-7"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-950">Tulis Review Kamu</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Form ini demo visual. Data belum dikirim ke database.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Nama", "Nama kamu"],
                ["Produk Dibeli", "Contoh: iPhone 13 128GB"],
              ].map(([label, placeholder]) => (
                <label key={label} className="grid gap-2">
                  <span className="text-sm font-black">{label}</span>
                  <input
                    placeholder={placeholder}
                    className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              ))}
            </div>

            <div className="mt-4 grid gap-2">
              <span className="text-sm font-black">Rating</span>
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setRating(index + 1)}
                    className="rounded-2xl bg-white p-3 shadow-sm"
                  >
                    <Star className={`h-6 w-6 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`} />
                  </button>
                ))}
              </div>
            </div>

            <label className="mt-4 grid gap-2">
              <span className="text-sm font-black">Upload Foto COD / Foto Unit</span>
              <div className="rounded-[2rem] border-2 border-dashed border-slate-300 bg-white p-6 text-center">
                <ImagePlus className="mx-auto h-10 w-10 text-slate-400" />
                <p className="mt-3 text-sm font-bold text-slate-600">
                  {photoName || "Klik untuk pilih foto"}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoName(e.target.files?.[0]?.name || "")}
                  className="mt-4 w-full text-sm"
                />
              </div>
            </label>

            <label className="mt-4 grid gap-2">
              <span className="text-sm font-black">Review</span>
              <textarea
                rows={4}
                placeholder="Ceritakan pengalaman transaksi kamu..."
                className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white shadow-soft transition hover:-translate-y-1 hover:bg-green-500"
            >
              <Camera className="h-5 w-5" />
              Submit Review Demo
            </button>
          </motion.form>

          <div className="grid gap-4">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 text-center text-xs font-black text-slate-500 sm:h-24 sm:w-24">
                    {review.photo}
                  </div>
                  <div>
                    <div className="mb-2 flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-slate-200"}`} />
                      ))}
                    </div>
                    <p className="font-black text-slate-950">{review.name} • {review.product}</p>
                    <p className="mt-2 leading-7 text-slate-600">“{review.text}”</p>
                    <span className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-700">
                      Approved Review
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StockTimeline() {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-5 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            Live Stock Feel
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Stock Update Timeline</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Timeline ini bikin toko terasa aktif dan terpercaya. Untuk sekarang masih dummy data.
          </p>
        </div>
        <div className="grid gap-4">
          {stockTimeline.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="dark-glass rounded-3xl p-5"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400">{item.time}</p>
                  <p className="mt-1 text-lg font-black">{item.title}</p>
                </div>
                <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm font-black text-green-300">
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeInEstimator() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-[2rem] bg-white p-7 shadow-soft"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-white">
            <AreaChart className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">
            Cek Estimasi Tukar Tambah
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Customer bisa isi tipe iPhone lama, storage, kondisi, dan battery health.
            Setelah submit, data langsung masuk ke WhatsApp admin.
          </p>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const message = `Halo kak, saya ingin cek estimasi tukar tambah di iphone.store.malang.%0A%0ATipe lama: ${form.get("tipe")}%0AStorage: ${form.get("storage")}%0ABattery Health: ${form.get("bh")}%0AKondisi: ${form.get("kondisi")}`;
            window.open(whatsappUrl(decodeURIComponent(message)), "_blank");
          }}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft md:p-7"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["tipe", "Tipe iPhone Lama", "Contoh: iPhone XR"],
              ["storage", "Storage", "Contoh: 128GB"],
              ["bh", "Battery Health", "Contoh: 83%"],
              ["kondisi", "Kondisi", "Mulus / Lecet / Minus"],
            ].map(([name, label, placeholder]) => (
              <label key={name} className="grid gap-2">
                <span className="text-sm font-black">{label}</span>
                <input
                  name={name}
                  required
                  placeholder={placeholder}
                  className="h-14 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            ))}
          </div>
          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-black text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1">
            <MessageCircle className="h-5 w-5" />
            Cek Estimasi via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function PreOrder() {
  const [form, setForm] = useState({
    nama: "",
    tipe: "",
    storage: "",
    budget: "",
    catatan: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Halo kak, saya ingin pre-order iPhone di iphone.store.malang.%0A%0ANama: ${form.nama}%0ATipe iPhone: ${form.tipe}%0AStorage: ${form.storage}%0ABudget: ${form.budget}%0ACatatan: ${form.catatan}%0A%0AMohon dibantu carikan unit yang sesuai ya kak.`;
    window.open(whatsappUrl(decodeURIComponent(message)), "_blank");
  }

  return (
    <section id="preorder" className="relative overflow-hidden bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 rounded-[2rem] bg-slate-950 p-8 text-white shadow-premium"
        >
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
            Pre Order Service
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Request iPhone Impianmu Sekarang
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Belum menemukan unit yang cocok? Kirim tipe, storage, budget, dan catatan.
            Tim kami bantu carikan iPhone sesuai kebutuhanmu.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Cari iPhone sesuai budget",
              "Konsultasi gratis",
              "Update stok via WhatsApp",
              "Bisa COD area Malang",
            ].map((item) => (
              <div key={item} className="dark-glass rounded-3xl p-5">
                <BadgeCheck className="mb-3 h-6 w-6 text-green-400" />
                <p className="font-black">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative z-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 text-slate-950 shadow-soft md:p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-black">Form Pre Order</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Setelah submit, data akan otomatis masuk ke pesan WhatsApp.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["nama", "Nama", "Nama kamu"],
              ["tipe", "Tipe iPhone yang dicari", "Contoh: iPhone 14 Pro"],
              ["storage", "Storage", "Contoh: 128GB / 256GB"],
              ["budget", "Budget", "Contoh: 8 jutaan"],
            ].map(([key, label, placeholder]) => (
              <label key={key} className="grid gap-2">
                <span className="text-sm font-black">{label}</span>
                <input
                  required
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            ))}
          </div>

          <label className="mt-4 grid gap-2">
            <span className="text-sm font-black">Catatan tambahan</span>
            <textarea
              value={form.catatan}
              onChange={(e) => setForm({ ...form, catatan: e.target.value })}
              placeholder="Contoh: warna black, BH minimal 90%, ex iBox kalau ada"
              rows={4}
              className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-6 py-4 font-black text-white shadow-lg shadow-green-500/25 transition hover:-translate-y-1 hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Request iPhone Sekarang
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    { icon: ShieldCheck, title: "Pengecekan Unit Detail", desc: "Unit dicek dari fungsi, fisik, kamera, Face ID, speaker, hingga battery health." },
    { icon: BadgeCheck, title: "Garansi Toko", desc: "Setiap pembelian mendapat garansi toko sesuai ketentuan unit." },
    { icon: MapPin, title: "COD Area Malang", desc: "Transaksi lebih aman dengan opsi COD untuk area Malang dan sekitarnya." },
    { icon: Headphones, title: "Konsultasi Gratis", desc: "Bingung pilih iPhone? Kami bantu rekomendasikan sesuai kebutuhan dan budget." },
    { icon: CircleDollarSign, title: "Harga Transparan", desc: "Detail kondisi, harga, dan kelengkapan dijelaskan dengan jelas." },
    { icon: Truck, title: "Bisa Tukar Tambah", desc: "Upgrade iPhone lama ke unit yang lebih baru dengan proses mudah." },
  ];

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Kenapa Harus iphone.store.malang?"
          description="Kami fokus membuat proses beli iPhone second terasa aman, jelas, dan nyaman dari awal chat sampai unit di tangan."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-950 p-3 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutStore() {
  return (
    <section id="about" className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-[2.4rem] bg-slate-950 p-6 text-white shadow-premium md:p-10"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-slate-950">
            <Store className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            About iphone.store.malang
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            iphone.store.malang adalah toko jual beli iPhone terpercaya di Malang
            yang menyediakan iPhone second berkualitas, bergaransi, dan siap pakai.
            Kami membantu customer mendapatkan iPhone terbaik sesuai kebutuhan dan budget.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {[
            ["Lokasi", "Malang"],
            ["Layanan", "Jual, beli, tukar tambah, pre-order"],
            ["Kontak", "WhatsApp Business"],
            ["Fokus", "iPhone second berkualitas & bergaransi"],
          ].map(([label, value]) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-slate-400">{label}</p>
              <p className="mt-2 text-2xl font-black text-slate-950">{value}</p>
            </motion.div>
          ))}
          <a
            href={whatsappUrl("Halo kak, saya ingin tanya tentang layanan jual beli/tukar tambah di iphone.store.malang.")}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-[2rem] bg-green-500 px-6 py-5 font-black text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Apakah bisa COD?", "Bisa. Untuk area Malang dan sekitarnya, kamu bisa request COD agar unit bisa dicek langsung."],
    ["Apakah unit bergaransi?", "Ya. Unit tertentu mendapatkan garansi toko sesuai ketentuan yang akan dijelaskan sebelum transaksi."],
    ["Apakah bisa tukar tambah?", "Bisa. Kirim detail iPhone lama kamu melalui WhatsApp untuk estimasi harga tukar tambah."],
    ["Apakah bisa kirim luar kota?", "Bisa. Pengiriman luar kota dapat dilakukan dengan packing aman dan opsi ekspedisi sesuai kebutuhan."],
    ["Apakah bisa request iPhone tertentu?", "Bisa. Isi form pre-order atau chat langsung untuk request tipe, storage, warna, dan budget."],
  ];
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Ditanyakan"
          description="Jawaban singkat sebelum kamu chat admin."
        />
        <div className="grid gap-3">
          {faqs.map(([question, answer], index) => (
            <motion.div
              key={question}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
            >
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-black text-slate-950 md:text-lg">{question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 leading-7 text-slate-600">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Halo kak, saya ingin tanya stok iPhone terbaru di iphone.store.malang.")}
      target="_blank"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition hover:-translate-y-1 hover:bg-green-600"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-white sm:px-5 sm:py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black">iphone.store.malang</p>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Toko jual beli iPhone berkualitas di Malang. Siap bantu kamu cari
            iPhone terbaik sesuai kebutuhan dan budget.
          </p>
        </div>
        <div>
          <p className="mb-4 font-black">Menu</p>
          <div className="grid gap-3 text-slate-400">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-black">Kontak</p>
          <div className="grid gap-3 text-slate-400">
            <a href={whatsappUrl("Halo kak, saya ingin tanya iphone.store.malang.")} target="_blank" className="flex items-center gap-2 hover:text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <AtSign className="h-4 w-4" /> Instagram
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Malang
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} iphone.store.malang. All rights reserved.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DealOfTheWeek />
      <Showcase />
      <StockTimeline />
      <ReviewSection />
      <TradeInEstimator />
      <PreOrder />
      <WhyChooseUs />
      <AboutStore />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
