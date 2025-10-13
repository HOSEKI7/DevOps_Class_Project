import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Button from "../components/spatial/Button";
import InputForm from "../components/spatial/InputForm";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [duration, setDuration] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState<number | undefined>(undefined);
  const [trailer, setTrailer] = useState("");
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [streamUrl, setStreamUrl] = useState("");
  const [logo, setLogo] = useState("");
  const [backdrop, setBackdrop] = useState("");
  const [poster, setPoster] = useState("");
  const navigate = useNavigate();

  const saveMovie = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/movies", {
      title,
      genre,
      synopsis,
      duration,
      director,
      releaseYear,
      trailer,
      rating,
      streamUrl,
      logo,
      backdrop,
      poster,
    });
    navigate("/movies");
  };

  return (
    <div className="max-w-lg mx-auto my-15 p-8 bg-white shadow shadow-slate-300">
      <h1 className="text-2xl font-bold text-slate-700 text-center">
        Add New Movie
      </h1>
      <form onSubmit={saveMovie}>
        <InputForm
          label="Title"
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputForm
          label="Genre"
          type="text"
          placeholder="Movie Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <InputForm
          label="Synopsis"
          type="text"
          placeholder="Movie Synopsis"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <InputForm
          label="Duration"
          type="text"
          placeholder="Movie Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <InputForm
          label="Director"
          type="text"
          placeholder="Movie Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <InputForm
          label="Release Year"
          type="number"
          placeholder="Movie Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(Number(e.target.value))}
        />
        <InputForm
          label="Trailer"
          type="text"
          placeholder="Movie Trailer"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
        />
        <InputForm
          label="Rating"
          type="number"
          placeholder="Movie Rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <InputForm
          label="Stream URL"
          type="text"
          placeholder="Movie Stream URL"
          value={streamUrl}
          onChange={(e) => setStreamUrl(e.target.value)}
        />
        <InputForm
          label="Logo"
          type="text"
          placeholder="Movie Logo"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
        />
        <InputForm
          label="Backdrop"
          type="text"
          placeholder="Movie Backdrop"
          value={backdrop}
          onChange={(e) => setBackdrop(e.target.value)}
        />
        <InputForm
          label="Poster"
          type="text"
          placeholder="Movie Poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
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

export default AddMovie;
