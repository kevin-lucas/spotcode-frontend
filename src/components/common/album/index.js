import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";
import Constants from "../../../config/constants";

const DivVSpace = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Album = (props) => {
  return (
    <Link to={`/album/${props.id}`}>
      <Image src={Constants.baseUrl + props.cover_url} />
      <DivVSpace>
        <Heading size={6} className="has-text-white">
          {props.title}
        </Heading>
        <Heading size={6} className="has-text-white" subtitle>
          {props.artist_name}
        </Heading>
      </DivVSpace>
    </Link>
  );
};

export default Album;
