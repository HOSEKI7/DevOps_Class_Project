import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

type Movie = {
  id: string;
  title: string;
  genre: string;
  synopsis: string;
  director: string;
  releaseYear: number;
  rating: number;
  trailer: string;
  duration: string;
  streamUrl: string;
  logo: string;
  backdrop: string;
  poster: string;
};

const MovieList = () => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/movies");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  const deleteMovie = async (movie: Movie) => {
    try {
      await axios.delete(`http://localhost:5000/movies/${movie.id}`);
      // Untuk versi tanpa SWR, kita tidak memperbarui state secara langsung.
      // User harus refresh halaman untuk melihat perubahan.
    } catch (error) {
      console.error("Error deleting Movie:", error);
    }
  };

  return (
    <div className="flex flex-col mt-5 container mx-auto">
      <div className="w-full">
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
        >
          Add New
        </Link>
        <div className="shadow rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Genre</th>
                <th className="py-3 px-6">Synopsis</th>
                <th className="py-3 px-6">Duration</th>
                <th className="py-3 px-6">Director</th>
                <th className="py-3 px-6">Release Year</th>
                <th className="py-3 px-1">Rating</th>
                {/* <th className="py-3 px-1">Trailer</th> */}
                {/* <th className="py-3 px-1">Stream URL</th> */}
                {/* <th className="py-3 px-1">Logo</th>
                <th className="py-3 px-1">Backdrop</th>
                <th className="py-3 px-1">Poster</th> */}
                <th className="py-3 px-1 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((movie: Movie, index: number) => (
                <tr className="bg-white border-b" key={movie.id}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {movie.title}
                  </td>
                  <td className="py-3 px-6">{movie.genre}</td>
                  <td className="py-3 px-6">{movie.synopsis}</td>
                  <td className="py-3 px-6">{movie.duration}</td>
                  <td className="py-3 px-6">{movie.director}</td>
                  <td className="py-3 px-6">{movie.releaseYear}</td>
                  <td className="py-3 px-1">{movie.rating}</td>
                  {/* <td className="py-3 px-1 text-center">{movie.trailer}</td>
                  <td className="py-3 px-1 text-center">{movie.streamUrl}</td>
                  <td className="py-3 px-1 text-center">{movie.logo}</td>
                  <td className="py-3 px-1 text-center">{movie.backdrop}</td>
                  <td className="py-3 px-1 text-center">{movie.poster}</td> */}
                  <td className="py-3 px-1 text-center flex flex-col gap-2">
                    <Link
                      to={`/edit/${movie.id}`}
                      className="font-medium bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteMovie(movie)}
                      className="font-medium bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
