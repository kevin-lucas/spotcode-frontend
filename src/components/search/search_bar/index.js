import React, { Fragment, useState } from "react";
import { Form } from "react-bulma-components";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  const clearFormSearch = () => {
    setQuery("")
  }

  const Search = (e) => {
    if (e.key === "Enter") {
      props.fetchSearch(query);
      clearFormSearch()
    }
  };

  return (
    <Fragment>
      <Form.Field onKeyDown={Search}>
        <Form.Control>
          <Form.Input
            placeholder="Álbums, artistas ou músicas"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
    </Fragment>
  );
};

export default SearchBar;
