import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface GenreResponseProps {
  title: string;
  movies: MovieProps[]
}

export function Content({ title, movies }: GenreResponseProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}