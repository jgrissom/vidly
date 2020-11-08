import React, { Component } from "react";

class Movies extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p className="mt-3">Showing 1 movies</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Avengers</td>
              <td>Action</td>
              <td>7</td>
              <td>3.5</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
