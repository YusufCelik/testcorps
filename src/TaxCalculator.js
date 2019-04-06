import React from "react";
import Button from "./Button";

class TaxCalculator extends React.Component {
  constructor() {
    super();
    this.revenueInput = React.createRef();

    this.state = {
      total: 0
    };
  }

  changeLabel() {
    this.setState({
      total: this.revenueInput.value
    });
  }

  render() {
    return (
      <section>
        <p>{Date.now()}</p>
        <input
          data-testhook-id="tax-calculator-revenue-input"
          type="number"
          ref={ref => (this.revenueInput = ref)}
        />
        <Button label="calculate" onClick={() => this.changeLabel()} />
        <p data-testhook-id="tax-calculator-total">{this.state.total}</p>
      </section>
    );
  }
}

export default TaxCalculator;
