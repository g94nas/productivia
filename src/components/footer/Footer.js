import React from "react";
import { Wrapper, Logo, Text, Break } from "./FooterStyles";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>Productivia</Logo>
      <Break></Break>
      <Text>
        Let’s take that next step together. Join the community and skyrocket
        your productivity.
      </Text>
    </Wrapper>
  );
};

export default Footer;
