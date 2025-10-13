import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMovie = async (req, res) => {
  try {
    const response = await prisma.movie.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const response = await prisma.movie.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createMovie = async (req, res) => {
  const { title, genre, description, author, publishedAt } = req.body;
  try {
    const movie = await prisma.movie.create({
      data: {
        title: title,
        genre: genre,
        description: description,
        author: author,
        publishedAt: publishedAt,
      },
    });
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { title, genre, description, author, publishedAt } = req.body;
  try {
    const movie = await prisma.movie.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: title,
        genre: genre,
        description: description,
        author: author,
        publishedAt: publishedAt,
      },
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const movie = await prisma.movie.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
