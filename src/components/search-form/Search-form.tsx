import React, { useState } from "react";

import QueryParams from "../../interfaces/search-params";
import Icon from "../UI/icon/Icon";

import "./search-form.css";

interface SearchFormProps {
  params: QueryParams | undefined;
  onSearch(search: string): void;
}

export default function SearchForm(props: SearchFormProps) {
  const searchParam = props.params;
  const onSearchCallback = props.onSearch;

  const [search, setSearch] = useState(searchParam?.value ?? "");

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.code === "Enter") {
      onSearch();
    }
  }

  function onSearch() {
    onSearchCallback(search);
  }

  return (
    <>
      <input
        type="search"
        className="search-form__input"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(test) => onKeyDown(test)}
      ></input>
      <button type="button" className="btn search-form__btn" onClick={onSearch}>
        <Icon name="search"></Icon>
      </button>
    </>
  );
}
