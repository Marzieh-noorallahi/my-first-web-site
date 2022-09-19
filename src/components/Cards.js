import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card.js";
import eifel from "../images/Eifel.jpg";
import fire from "../images/Fire.jpg";
import dog from "../images/Dog.jpg";
import man from "../images/Man.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      placeDate: [
        {
          id: 1,
          image: eifel,
          name: "Eifel Tower",
          place: "Paris",
          cost: "900 $",
          tCost: "Ticket Cost for this place:",
        },
        {
          id: 2,
          image: fire,
          name: "Fire Woods",
          place: "Jungle",
          cost: "600 $",
          tCost: "Ticket Cost for this place:",
        },
        {
          id: 3,
          image: dog,
          name: "Sleepy Dog",
          place: "Caffe",
          cost: "450 $",
          tCost: "Ticket Cost for this place:",
        },
        {
          id: 4,
          image: man,
          name: "A hidden man",
          place: "Library",
          cost: "350 $",
          tCost: "Ticket Cost for this place:",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={eifel} name="Eifel Tower" place="Paris" cost="900 $" tCost="Ticket Cost for this place:"/>
                <Card image={fire} name="Fire Woods" place="Jungle" cost="600 $" tCost="Ticket Cost for this place:"/>
                <Card image={dog} name="Sleepy Dog" place="Caffe" cost="450 $"tCost="Ticket Cost for this place:"/>
                <Card image={man} name="A hidden man" place="Library" cost="350 $"tCost="Ticket Cost for this place:"/> */}
        {this.state.placeDate.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            place={phone.place}
            cost={phone.cost}
            tCost={phone.tCost}
            id={phone.id}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
