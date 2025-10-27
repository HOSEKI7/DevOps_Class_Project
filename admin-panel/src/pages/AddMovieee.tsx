import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Button from "../components/spatial/Button";
import InputForm from "../components/spatial/InputForm";

const AddMoviee = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedAt, setPublishedAt] = useState<number | undefined>(undefined);
  const navigate = useNavigate();

  const saveMovie = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/movies", {
      title,
      genre,
      description,
      author,
      publishedAt,
    });
    navigate("/movies");
  };

  return (
    <div className="max-w-lg mx-auto my-15 p-8 bg-white shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-slate-700 text-center">
        Add New Book
      </h1>
      <form onSubmit={saveMovie}>
        <InputForm
          label="Title"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputForm
          label="Genre"
          type="text"
          placeholder="Book Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <InputForm
          label="Description"
          type="text"
          placeholder="Description about the book"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputForm
          label="Author"
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <InputForm
          label="Published Year"
          type="number"
          placeholder="Published Year"
          value={publishedAt}
          onChange={(e) => setPublishedAt(parseInt(e.target.value))}
        />
        <Button
          type="submit"
          style="w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 text-white hover:shadow"
        >
          Save
        </Button>
      </form>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default AddMoviee;
