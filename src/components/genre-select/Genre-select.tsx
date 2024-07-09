import React from "react";

import Genre from "../../interfaces/genre-select";

import "./genre-select.css";

interface GenreSelectProps {
  genres: Genre[];
  onSelect(genre: Genre): void;
}

export default function GenreSelect(props: GenreSelectProps) {
  const genres = props.genres;
  const onSelect = props.onSelect;

  function onSelectGenre(genre: Genre) {
    onSelect(genre);
  }

  return (
    <div className="genre-wrapper">
      <span className="genre-wrapper__label">Genres</span>
      <div className="genres inner-container">
        {genres.map((genre: Genre) => {
          return (
            <button
              className={`btn light selector__option ${genre.isSelected ? "active" : ""}`}
              type="button"
              key={genre.id}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
