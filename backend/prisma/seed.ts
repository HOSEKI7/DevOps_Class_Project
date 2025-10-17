import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        title: "Intel Core i7-13700K",
        price: 6500000,
        realPrice: 7200000,
        description:
          "Prosesor Intel generasi ke-13 dengan 16 core dan 24 thread, ideal untuk gaming dan multitasking berat.",
        variant: "13th Gen, 16 Core, LGA1700",
        category: "Processor",
        image:
          "https://cdn11.bigcommerce.com/s-muk18pjqrv/images/stencil/1280x1280/products/475047/1614610/bx8071513700__14321.1672913917.png?c=1",
      },
      {
        title: "AMD Ryzen 7 7800X3D",
        price: 7200000,
        realPrice: 7800000,
        description:
          "Prosesor AMD Ryzen 7 dengan teknologi 3D V-Cache untuk performa gaming terbaik di kelasnya.",
        variant: "8 Core, 16 Thread, AM5",
        category: "Processor",
        image:
          "https://static-media.laptopoutlet.co.uk/catalog/product/a/7/a78a8839a35731a3d751b713e650f64c_3.png?height=650",
      },
      {
        title: "ASUS ROG Strix B650E-F Gaming WiFi",
        price: 4500000,
        realPrice: 5200000,
        description:
          "Motherboard gaming AM5 dengan dukungan PCIe 5.0, WiFi 6E, dan desain ROG premium.",
        variant: "ATX, AM5 Socket",
        category: "Motherboard",
        image:
          "https://dlcdnwebimgs.asus.com/gain/566A4DF8-85E5-4958-9CEE-21F4629E53AB",
      },
      {
        title: "MSI PRO B760M-P DDR5",
        price: 2400000,
        realPrice: 2700000,
        description:
          "Motherboard Micro-ATX dengan dukungan DDR5 dan konektivitas modern untuk prosesor Intel LGA1700.",
        variant: "Micro-ATX, LGA1700, DDR5",
        category: "Motherboard",
        image:
          "https://asset.msi.com/resize/image/global/product/product_167273674460b46b34fc149101452b7a963bf9b522.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      },
      {
        title: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz",
        price: 2400000,
        realPrice: 2600000,
        description:
          "Memory high-performance DDR5 dengan pencahayaan RGB dinamis dan kecepatan hingga 6000MHz.",
        variant: "DDR5, 32GB Kit, 6000MHz",
        category: "Memory",
        image:
          "https://computerlounge.co.nz/cdn/shop/files/5a4ce16a37b7abac00d4a85743057ea8c169e28f_50583_2.png?v=1718656287&width=1214",
      },
      {
        title: "G.Skill Trident Z5 RGB 32GB (2x16GB) 6400MHz",
        price: 2500000,
        realPrice: 2900000,
        description:
          "RAM DDR5 performa tinggi dengan desain Trident Z5 dan dukungan XMP 3.0 untuk overclock mudah.",
        variant: "DDR5, 32GB Kit, 6400MHz",
        category: "Memory",
        image:
          "https://smake.tech/cdn/shop/files/373.webp?v=1744434545&width=2295",
      },
      {
        title:
          "ASUS TUF Gaming GeForce RTX 4070 Ti SUPER BTF White OC Edition 16GB GDDR6X",
        price: 14500000,
        realPrice: 15900000,
        description:
          "Kartu grafis terbaru dari Asus dengan arsitektur Ada Lovelace, mendukung ray tracing dan DLSS 3.",
        variant: "12GB GDDR6X, 256-bit",
        category: "Graphics Card",
        image:
          "https://dlcdnwebimgs.asus.com/gain/cea3d1a5-6d88-4169-984f-33405c76bc2f/",
      },
      {
        title: "ASUS TUF Gaming GeForce RTX 5090 32GB GDDR7",
        price: 5200000,
        realPrice: 5900000,
        description:
          "GPU highend dengan performa terbaik dan teknologi paling mutahir untuk gaming segala resolusi dan produktivity.",
        variant: "12GB GDDR6, 192-bit",
        category: "Graphics Card",
        image:
          "https://press.asus.com/assets/w_2400,h_2400/389e6723-42a6-4b4e-ac17-9739a0b83eb1/TUF%20Gaming%20GeForce%20RTX%205090.png",
      },
      {
        title: "Samsung 990 PRO NVMe M.2 1TB",
        price: 2500000,
        realPrice: 2900000,
        description:
          "SSD NVMe PCIe 4.0 super cepat dengan kecepatan baca hingga 7450MB/s.",
        variant: "1TB, PCIe 4.0, M.2 2280",
        category: "Storage",
        image:
          "https://www.unitysystems.lk/wp-content/uploads/2025/02/990-1.png",
      },
      {
        title: "Kingston NV2 NVMe PCIe 4.0 1TB",
        price: 1400000,
        realPrice: 1600000,
        description:
          "SSD NVMe ekonomis dengan performa stabil untuk kebutuhan harian dan gaming.",
        variant: "1TB, PCIe 4.0",
        category: "Storage",
        image:
          "https://negroup.co.id/cni-content/uploads/modules/product/20240929103456.png",
      },
      {
        title: "Corsair RM750x 80+ Gold Modular",
        price: 1700000,
        realPrice: 1900000,
        description:
          "Power supply 750W dengan sertifikasi 80+ Gold dan kabel modular penuh.",
        variant: "750W, Fully Modular",
        category: "Power Supply",
        image:
          "https://i0.wp.com/assets.corsair.com/image/upload/c_pad%2Cq_85%2Ch_1100%2Cw_1100%2Cf_auto/products/Power-Supply-Units/base-rmx-shift-white-config/gallery/CP-9020273/CP-9020273_08.webp?w=1200&",
      },
      {
        title: "Cooler Master MWE 650 Bronze V2",
        price: 950000,
        realPrice: 1100000,
        description:
          "Power supply 650W dengan efisiensi 80+ Bronze dan kipas HDB yang senyap.",
        variant: "650W, Non-Modular",
        category: "Power Supply",
        image:
          "https://a.storyblok.com/f/281110/018c4af76f/1_gallery_650_mwe_bronze_v2.png",
      },
      {
        title: "NZXT H510 Elite",
        price: 2400000,
        realPrice: 2600000,
        description:
          "Casing mid-tower premium dengan panel tempered glass dan dukungan manajemen kabel rapi.",
        variant: "ATX, White",
        category: "Case",
        image:
          "https://nzxt.com/cdn/shop/files/h5-elite-hero-white.png?v=1744789660",
      },
      {
        title: "Lian Li Lancool 216 RGB",
        price: 2200000,
        realPrice: 2400000,
        description:
          "Casing dengan airflow optimal, RGB fan, dan tampilan modern untuk setup gaming.",
        variant: "ATX, Black",
        category: "Case",
        image:
          "https://img.overclockers.co.uk/lp/221116-lianli/2211-ll-hero-case.jpg",
      },
      {
        title: "DeepCool AK400 White",
        price: 550000,
        realPrice: 650000,
        description:
          "CPU air cooler dengan performa pendinginan tinggi dan desain minimalis warna putih.",
        variant: "120mm, 4 Heatpipe",
        category: "Cooling",
        image:
          "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cooling/CPUAirCoolers/AK400_WH/Overview/01.png?fm=webp&q=60",
      },
    ],
  });

  console.log("✅ Dummy products seeded successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
