import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Home from "./pages";
import FlashcardPage from "./pages/FlashcardPage";
import PomodoroPage from "./pages/PomodoroPage";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";
import TodoPage from "./pages/TodoPage";
import { GridLoader } from "react-spinners";
import { CentralWrapper } from "./features/todos/styles/LoaderStyles";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <CentralWrapper>
          <GridLoader size={15} color={"#f5d432"} loading={loading} />
        </CentralWrapper>
      ) : !user ? (
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
            <Route path="/" component={TodoPage} exact />
            <Route path="/todos" component={TodoPage} exact />
            <Route path="/flashcards" component={FlashcardPage} exact />
            <Route path="/pomodoro" component={PomodoroPage} exact />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
