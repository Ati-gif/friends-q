import { Route, Switch } from "react-router-dom";
import About from "./About";
import Quote from "./Quotes";
import "./App.css";
import AppTvquotes from "./AppTvquotes";
import TvquoteForm from "./components/TvquoteForm";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AppTvquotes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/newTvquote" component={TvquoteForm} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
