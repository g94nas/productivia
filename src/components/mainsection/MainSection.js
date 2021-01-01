import React from "react";

import {
  MainSectionContainer,
  MainSectionPane,
  MainSectionTitle,
  MainSectionSubtitle,
  MainSectionImage,
  MainSectionButton,
} from "./MainSectionStyles";

const MainSection = ({
  direction,
  paddingTrue,
  title,
  subtitle,
  buttonText,
  img,
  paddingPane,
  maxWidthTitle,
  maxWidthSubtitle,
  marginBottom,
  id,
}) => {
  return (
    <MainSectionContainer
      id={id}
      direction={direction}
      paddingTrue={paddingTrue}
      marginBottom={marginBottom}
    >
      <MainSectionPane paddingPane={paddingPane}>
        <MainSectionTitle maxWidthTitle={maxWidthTitle}>
          {title}
        </MainSectionTitle>
        <MainSectionSubtitle maxWidthSubtitle={maxWidthSubtitle}>
          {subtitle}
        </MainSectionSubtitle>
        <MainSectionButton>{buttonText}</MainSectionButton>
      </MainSectionPane>
      <MainSectionPane>
        <MainSectionImage src={img}></MainSectionImage>
      </MainSectionPane>
    </MainSectionContainer>
  );
};

export default MainSection;
