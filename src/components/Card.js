import React, { Component } from "react";
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";
import { Link } from "react-router-dom";
// import down from "../images/down.png"
// import up from "../images/up.png"

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, name, place,cost ,tCost,id} = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="beautiful-place"></img>
        <h3><Link to={`/products/${id}`}>{name}</Link></h3>
        <h4>{place}</h4>
        <h5>{tCost}</h5>
        <p>{cost} {counter ?`*${counter} = ${counter* Number(cost.split(" ")[0])} $` : ""}</p>

        <div className={styles.counter}>
          <h6>Number of Tickets: </h6>
          {/* <img className={this.state.counter ? "" : styles.deactive} src={down} alt="down-arrow" onClick={this.downHandler} /> */}
          {/*Ternary Operator*/}
          <img className={!counter ? styles.deactive : ""} src={down} alt="down-arrow" onClick={this.downHandler} />
          <span>{counter}</span>
          <img src={up} alt="up-arrow" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
