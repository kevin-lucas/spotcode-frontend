import React, { Fragment, useEffect, useState } from "react";
import { Columns, Image } from "react-bulma-components";
import styled from "styled-components";
import CategoriesService from "./../../../services/categories";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    const response = await CategoriesService.index();
    setCategories(response.data["categories"]);
  }

  const DivVSpace = styled.div`
    margin-top: 50px;
  `;

  const categories_list = categories.map((category, key) => {
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Image
        src={category.image_url}
        onClick={() => props.fetchCategorySearch(category.id)}
      ></Image>
    </Columns.Column>;
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Fragment>
      <DivVSpace>
        <Columns className="is-mobile">{categories_list}</Columns>
      </DivVSpace>
    </Fragment>
  );
};

export default Categories;
