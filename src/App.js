import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import RecipeList from "./components/recipe-list.component";
import EditRecipe from "./components/edit-recipe.component";
import CreateRecipe from "./components/create-recipe.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={RecipeList} />
        <Route path="/edit/:id" component={EditRecipe} />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
