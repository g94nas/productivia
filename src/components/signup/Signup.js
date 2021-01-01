import React, { useState } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

import { MainWrapper, Form, MainText, Input, Button } from "./SignupStyles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const register = (e) => {
    e.preventDefault();
    if (!username) {
      return alert("Please, choose an username");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: username,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <MainWrapper>
      <Form>
        <MainText>Username</MainText>
        <Input
          required
          type="text"
          value={username}
          onChange={handleUsername}
        ></Input>
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
        <Button onClick={register}>Sign Up</Button>
      </Form>
    </MainWrapper>
  );
};

export default Signup;
