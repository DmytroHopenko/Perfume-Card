import React from "react";
import Card from "./components/Card";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          categories: "perfume",
          name: "Gabrielle Essence Eau De Parfum",
          description:
            "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
          price: 149.99,
          oldprice: 169.99,
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Card items={this.state.items} />
      </div>
    );
  }
}

export default App;
