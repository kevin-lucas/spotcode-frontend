import React, { Fragment, useState, useEffect } from "react";
import { Button, Columns } from "react-bulma-components";
import styled from "styled-components";
import Music from "./music";

const PlaySequenceButton = styled(Button)`
  margin-bottom: 30px;
`

const Musics = () => {
  return <Fragment>
  <Columns className="is-mobile is-centered">
    <Columns.Column desktop={{ size: 5 }} mobile={{size: 12}} className="has-text-centered">
      <PlaySequenceButton className="is-medium" color='primary' outline>Tocar em aleatoriamente</PlaySequenceButton>
    </Columns.Column>
  </Columns>
  <Music />
  <Music />
  <Music />
</Fragment>
};

export default Musics;
