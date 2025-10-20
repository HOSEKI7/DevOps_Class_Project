import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req, res) => {
  try {
    const response = await prisma.product.findMany({
      include: { variants: true },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: { variants: true },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    title,
    price,
    realPrice,
    description,
    category,
    brand,
    rating,
    sold,
    image,
    variants,
  } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        title: title,
        realPrice: realPrice,
        price: price,
        description: description,
        category: category,
        brand: brand,
        rating: rating,
        sold: sold,
        image: image,
        variants: {
          create: variants,
        },
      },
      include: { variants: true },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const {
    title,
    price,
    realPrice,
    description,
    category,
    brand,
    rating,
    sold,
    image,
    variants,
  } = req.body;
  try {
    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: title,
        realPrice: realPrice,
        price: price,
        description: description,
        category: category,
        brand: brand,
        rating: rating,
        sold: sold,
        image: image,
        variants: {
          create: variants,
        },
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
