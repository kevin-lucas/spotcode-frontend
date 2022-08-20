import React, { Fragment, useState, useEffect } from "react";
import SectionWrapper from "../common/section_wrapper";
import NavBarFotter from "../common/navbar_footer";
import { Columns, Heading, Image } from "react-bulma-components";
import styled from "styled-components";
import AlbumsService from "../../services/albums";
import { useParams } from "react-router-dom";

const DivVSpace = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Albums = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data);
  }
  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Fragment>
      <Columns className="is-centered is-mobile is-centered">
        <Columns.Column desktop={{ size: 3 }} className="has-text-centered">
          <Image src={"http://localhost:3000" + album.cover_url} />
          <DivVSpace>
            <Heading size={5} className="has-text-white">
              {album.title}
            </Heading>
            <Heading subtitle size={6} className="has-text-white">
              {album.artist_name}
            </Heading>
          </DivVSpace>
        </Columns.Column>
      </Columns>
    </Fragment>
  );
};

export default Albums;
