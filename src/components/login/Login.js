import React, { useState } from "react";

import {
  MainWrapper,
  Form,
  MainText,
  Input,
  SubText,
  Span,
  Button,
} from "./LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setEmail(email);
      setPassword(password);
    }
  };

  return (
    <MainWrapper>
      <Form onSubmit={handleSubmit}>
        <MainText>Email</MainText>
        <Input
          required
          type="email"
          value={email}
          onChange={handleEmail}
        ></Input>
        <MainText>Password</MainText>
        <Input
          required
          type="password"
          value={password}
          onChange={handlePassword}
        ></Input>
        <Button onClick={handleSubmit}>Sign In</Button>
        <SubText>
          Not a member?
          <Span to="/signup"> Register Now.</Span>
        </SubText>
      </Form>
    </MainWrapper>
  );
};

export default Login;
