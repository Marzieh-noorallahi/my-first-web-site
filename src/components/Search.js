import React, { Component } from "react";
import styles from "./Search.module.css";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className={styles.container}>
        <p>Search What You Want</p>
        <h6>do it</h6>
        <h5>common!</h5>
        <div>
          <input
            type="text"
            value={text}
            onChange={this.changeHandler}
            placeholder="Search ..."
          ></input>
          <br/><br/>
          <span>{this.state.text}</span>
        </div>
      </div>
    );
  }
}

export default Search;
