import React, { Fragment, useState, useEffect } from "react";
import { Columns, Heading } from "react-bulma-components";
import styled from "styled-components";
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';

const Music = () => {
  const MusicSeparator = styled.hr`
    heigth: 1px;
    margin-top: 0px;
  `;

  const CustomSubHeading = styled(Heading)`
    margin-bottom: 0px !important;
  `;

  return (
    <Fragment>
      <Columns className="is-vcentered is-mobile is-centered">
        <Columns.Column desktop={{ size: 1 }} mobile={{ size: 2 }}>
          <FaPlayCircle size="45px" className="has-text-white" />
        </Columns.Column>
        <Columns.Column desktop={{ size: 4 }} mobile={{ size: 8 }}>
          <Columns className="is-vcentered is-mobile">
            <Columns.Column desktop={{ size: 8 }} mobile={{ size: 8 }}>
              <Heading size={5} className="has-text-white">
                Title
              </Heading>
              <CustomSubHeading
                size={6}
                className="has-text-white"
                subtitle
              >Artist Name</CustomSubHeading>
            </Columns.Column>
            <Columns.Column desktop={{ size: 4 }} mobile={{ size: 4 }} className="is-pulled-right has-text-rigth">
              {/* Favorite */}
            </Columns.Column>  
          </Columns>
          <MusicSeparator />
        </Columns.Column>
      </Columns>
    </Fragment>
  );
};

export default Music;
