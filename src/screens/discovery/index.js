import React, { Fragment, useState, useEffect } from "react";
import NavbarFooter from "../../components/common/navbar_footer";
import SectionWrapper from "../../components/common/section_wrapper";
import Discovery from "../../components/discovery";

const DiscoveryScreen = () => {
  return <Fragment>
    <SectionWrapper>
      <Discovery />
    </SectionWrapper>
    <NavbarFooter />
  </Fragment>;
};

export default DiscoveryScreen;
