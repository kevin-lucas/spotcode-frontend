import React, { Fragment } from "react";
import { Heading } from "react-bulma-components";
import SectionWrapper from "../../components/common/section_wrapper";
import Search from "../../components/search";
import NavbarFooter from "./../../components/common/navbar_footer";

const SearchScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className="has-text-centered has-text-white">Buscar</Heading>
        <Search />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  );
};

export default SearchScreen;
