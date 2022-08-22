import React, { Fragment } from "react";
import { Columns } from "react-bulma-components";
import Categories from "../common/categories";
import SearchBar from "./search_bar";

const Search = () => {
  return (
    <Fragment>
      <Columns>
        <Columns.Column desktop={{ size: 6, offset: 3 }} mobile={{ size: 12 }}>
          <SearchBar />
        </Columns.Column>
      </Columns>
      <Categories />
    </Fragment>
  );
};

export default Search;
