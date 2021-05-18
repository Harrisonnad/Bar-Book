import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Recipe = (props) => (
  <tr>
    <td>{props.recipe.username}</td>
    <td>{props.recipe.drinkname}</td>
    <td>{props.recipe.ingredients}</td>
    <td>{props.recipe.glass}</td>
    <td>{props.recipe.garnish}</td>
    <td>{props.recipe.technique}</td>
    <td>{props.recipe.description}</td>
    <td>
      <Link to={"/edit/" + props.recipe._id}>edit</Link> |
      <a
        href="#"
        onClick={() => {
          props.deleteRecipe(props.recipe._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.deleteRecipe = this.deleteRecipe.bind(this);

    this.state = { recipes: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/recipes/")
      .then((response) => {
        this.setState({ recipes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteRecipe(id) {
    axios
      .delete("http://localhost:5000/recipes/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      recipes: this.state.recipes.filter((el) => el._id !== id),
    });
  }
  recipeList() {
    return this.state.recipes.map((currentrecipe) => {
      return (
        <Recipe
          recipe={currentrecipe}
          deleteRecipe={this.deleteRecipe}
          key={currentrecipe._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Drink Recipes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Drinkname</th>
              <th>Ingredients</th>
              <th>Glass</th>
              <th>Garnish</th>
              <th>Technique</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{this.recipeList()}</tbody>
        </table>
      </div>
    );
  }
}
