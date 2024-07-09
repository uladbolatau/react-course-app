import React, { useState } from "react";

import Counter from "./components/counter/Counter";
import QueryParams from "./interfaces/search-params";
import SearchForm from "./components/search-form/Search-form";
import GenreSelect from "./components/genre-select/Genre-select";
import Genre from "./interfaces/genre-select";

import "./app.css";

export default function App() {
  const allowedQueryParams = ["search"];
  const [genres, setGenres] = useState<Genre[]>([
    {
      id: "1",
      isSelected: false,
      name: "Documentary",
      value: "doc",
    },
    {
      id: "2",
      isSelected: false,
      name: "Comedy",
      value: "com",
    },
    {
      id: "3",
      isSelected: false,
      name: "Horror",
      value: "hor",
    },
    {
      id: "4",
      isSelected: false,
      name: "Crime",
      value: "cri",
    },
  ]);

  const queryParams = getQueryParams();
  const searchParam = queryParams.find((param) => param.name === "search");

  function onSearch(search: string) {
    console.log("searching", search);
  }

  function getQueryParams() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const searchParams: QueryParams[] = [];

    allowedQueryParams.forEach((param: string) => {
      if (urlSearchParams.has(param)) {
        const value = urlSearchParams.get(param) as string;
        const searchParam: QueryParams = {
          name: param,
          value: value,
        };

        searchParams.push(searchParam);
      }
    });

    return searchParams;
  }

  function onGenreSelected(selectedGenre: Genre) {
    const updatedGenres = genres.map((genre: Genre) => {
      genre.isSelected = false;

      if (genre.id === selectedGenre.id) {
        genre.isSelected = true;
      }

      return genre;
    });

    setGenres(updatedGenres);
  }

  return (
    <div className="container">
      <Counter></Counter>
      <div className="section">
        <SearchForm params={searchParam} onSearch={onSearch}></SearchForm>
      </div>
      <div className="section">
        <GenreSelect onSelect={onGenreSelected} genres={genres}></GenreSelect>
      </div>
    </div>
  );
}
