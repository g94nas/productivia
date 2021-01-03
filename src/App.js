import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Home from "./pages";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //if user is loggeed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignInPage} exact />
            <Route path="/signup" component={SignupPage} exact />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <TodoPage />
            <Route path="/todos" component={TodoPage} exact />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
