import React from "react";
import Button from "./Button";

class TaxCalculator extends React.Component {
  render() {
    return (
      <section>
        <Button label="calculate" />
        <p data-testhook-id="tax-calculator-total">Placeholder</p>
      </section>
    );
  }
}

export default TaxCalculator;
