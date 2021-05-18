import React, { Component } from "react";
import axios from "axios";

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDrinkname = this.onChangeDrinkname.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.onChangeGlass = this.onChangeGlass.bind(this);
    this.onChangeGarnish = this.onChangeGarnish.bind(this);
    this.onChangeTechnique = this.onChangeTechnique.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      drinkname: "",
      ingredients: "",
      glass: "",
      garnish: "",
      technique: "",
      description: "",
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeDrinkname(e) {
    this.setState({
      drinkname: e.target.value,
    });
  }
  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value,
    });
  }
  onChangeGlass(e) {
    this.setState({
      glass: e.target.value,
    });
  }
  onChangeGarnish(e) {
    this.setState({
      garnish: e.target.value,
    });
  }
  onChangeTechnique(e) {
    this.setState({
      technique: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const recipe = {
      username: this.state.username,
      drinkname: this.state.drinkname,
      ingredients: this.state.ingredients,
      glass: this.state.glass,
      garnish: this.state.garnish,
      technique: this.state.technique,
      description: this.state.description,
    };
    axios
      .post("http://localhost:5000/recipes/add", recipe)
      .then((res) => console.log(res.data));

    console.log(recipe);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Recipe</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Drink Name:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.drinkname}
              onChange={this.onChangeDrinkname}
            />
          </div>
          <div className="form-group">
            <label>Ingredients:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.ingredients}
              onChange={this.onChangeIngredients}
            />
          </div>
          <div className="form-group">
            <label>Glass:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.glass}
              onChange={this.onChangeGlass}
            />
          </div>
          <div className="form-group">
            <label>Garnish:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.garnish}
              onChange={this.onChangeGarnish}
            />
          </div>
          <div className="form-group">
            <label>Technique:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.technique}
              onChange={this.onChangeTechnique}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Drink Recipe"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
