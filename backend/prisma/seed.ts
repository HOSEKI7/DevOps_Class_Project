import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: "Intel Core i7-13700K",
      price: 6500000,
      realPrice: 7200000,
      description:
        "Prosesor Intel generasi ke-13 dengan 16 core dan 24 thread, ideal untuk gaming dan multitasking berat.",
      category: "Processor",
      brand: "Intel",
      rating: 4.8,
      sold: 120,
      image:
        "https://cdn11.bigcommerce.com/s-muk18pjqrv/images/stencil/1280x1280/products/475047/1614610/bx8071513700__14321.1672913917.png?c=1",
      variants: [
        { name: "Boxed", stock: 15 },
        { name: "Tray", stock: 8 },
      ],
    },
    {
      title: "AMD Ryzen 7 7800X3D",
      price: 7200000,
      realPrice: 7800000,
      description:
        "Prosesor AMD Ryzen 7 dengan teknologi 3D V-Cache untuk performa gaming terbaik di kelasnya.",
      category: "Processor",
      brand: "AMD",
      rating: 4.9,
      sold: 95,
      image:
        "https://static-media.laptopoutlet.co.uk/catalog/product/a/7/a78a8839a35731a3d751b713e650f64c_3.png?height=650",
      variants: [
        { name: "Standard", stock: 10 },
        { name: "With Cooler", stock: 12 },
      ],
    },
    {
      title: "ASUS ROG Strix B650E-F Gaming WiFi",
      price: 4500000,
      realPrice: 5200000,
      description:
        "Motherboard gaming AM5 dengan dukungan PCIe 5.0, WiFi 6E, dan desain ROG premium.",
      category: "Motherboard",
      brand: "ASUS",
      rating: 4.7,
      sold: 60,
      image:
        "https://dlcdnwebimgs.asus.com/gain/566A4DF8-85E5-4958-9CEE-21F4629E53AB",
      variants: [
        { name: "ATX", stock: 20 },
        { name: "Micro-ATX", stock: 10 },
      ],
    },
    {
      title: "MSI PRO B760M-P DDR5",
      price: 2400000,
      realPrice: 2700000,
      description:
        "Motherboard Micro-ATX dengan dukungan DDR5 dan konektivitas modern untuk prosesor Intel LGA1700.",
      category: "Motherboard",
      brand: "MSI",
      rating: 4.6,
      sold: 80,
      image:
        "https://asset.msi.com/resize/image/global/product/product_167273674460b46b34fc149101452b7a963bf9b522.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
      variants: [
        { name: "mATX", stock: 25 },
        { name: "ATX", stock: 15 },
      ],
    },
    {
      title: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz",
      price: 2400000,
      realPrice: 2600000,
      description:
        "Memory high-performance DDR5 dengan pencahayaan RGB dinamis dan kecepatan hingga 6000MHz.",
      category: "Memory",
      brand: "Corsair",
      rating: 4.8,
      sold: 150,
      image:
        "https://computerlounge.co.nz/cdn/shop/files/5a4ce16a37b7abac00d4a85743057ea8c169e28f_50583_2.png?v=1718656287&width=1214",
      variants: [
        { name: "Black", stock: 20 },
        { name: "White", stock: 18 },
      ],
    },
    {
      title: "G.Skill Trident Z5 RGB 32GB (2x16GB) 6400MHz",
      price: 2500000,
      realPrice: 2900000,
      description:
        "RAM DDR5 performa tinggi dengan desain Trident Z5 dan dukungan XMP 3.0 untuk overclock mudah.",
      category: "Memory",
      brand: "G.Skill",
      rating: 4.9,
      sold: 110,
      image:
        "https://smake.tech/cdn/shop/files/373.webp?v=1744434545&width=2295",
      variants: [
        { name: "Silver", stock: 10 },
        { name: "Black", stock: 15 },
      ],
    },
    {
      title:
        "ASUS TUF Gaming GeForce RTX 4070 Ti SUPER BTF White OC Edition 16GB GDDR6X",
      price: 14500000,
      realPrice: 15900000,
      description:
        "Kartu grafis terbaru dari Asus dengan arsitektur Ada Lovelace, mendukung ray tracing dan DLSS 3.",
      category: "Graphics Card",
      brand: "ASUS",
      rating: 4.9,
      sold: 70,
      image:
        "https://dlcdnwebimgs.asus.com/gain/cea3d1a5-6d88-4169-984f-33405c76bc2f/",
      variants: [
        { name: "White", stock: 8 },
        { name: "Black", stock: 12 },
      ],
    },
    {
      title: "ASUS TUF Gaming GeForce RTX 5090 32GB GDDR7",
      price: 5200000,
      realPrice: 5900000,
      description:
        "GPU highend dengan performa terbaik dan teknologi paling mutahir untuk gaming segala resolusi dan produktivity.",
      category: "Graphics Card",
      brand: "ASUS",
      rating: 4.9,
      sold: 40,
      image:
        "https://press.asus.com/assets/w_2400,h_2400/389e6723-42a6-4b4e-ac17-9739a0b83eb1/TUF%20Gaming%20GeForce%20RTX%205090.png",
      variants: [
        { name: "OC Edition", stock: 10 },
        { name: "Standard", stock: 12 },
      ],
    },
    {
      title: "NZXT H510 Elite",
      price: 2400000,
      realPrice: 2600000,
      description:
        "Casing mid-tower premium dengan panel tempered glass dan dukungan manajemen kabel rapi.",
      category: "Case",
      brand: "NZXT",
      rating: 4.8,
      sold: 65,
      image:
        "https://nzxt.com/cdn/shop/files/h5-elite-hero-white.png?v=1744789660",
      variants: [
        { name: "Black", stock: 10 },
        { name: "White", stock: 12 },
      ],
    },
    {
      title: "DeepCool AK400 White",
      price: 550000,
      realPrice: 650000,
      description:
        "CPU air cooler dengan performa pendinginan tinggi dan desain minimalis warna putih.",
      category: "Cooling",
      brand: "DeepCool",
      rating: 4.7,
      sold: 120,
      image:
        "https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cooling/CPUAirCoolers/AK400_WH/Overview/01.png?fm=webp&q=60",
      variants: [
        { name: "Black", stock: 18 },
        { name: "White", stock: 15 },
      ],
    },
  ];

  // insert produk + variannya
  for (const product of products) {
    await prisma.product.create({
      data: {
        title: product.title,
        price: product.price,
        realPrice: product.realPrice,
        description: product.description,
        category: product.category,
        brand: product.brand,
        rating: product.rating,
        sold: product.sold,
        image: product.image,
        variants: {
          create: product.variants,
        },
      },
    });
  }

  console.log("✅ Seeding sukses dengan varian unik per produk!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
