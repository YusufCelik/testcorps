import React from "react";
import { shallow } from "enzyme";

import TaxCalculator from "./TaxCalculator";
import Button from "./Button";

describe("<TaxCalculator />", () => {
  it("renders calculate button", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(wrapper.find(Button).exists()).toBe(true);
  });

  it("renders tax total label", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(
      wrapper.find('[data-testhook-id="tax-calculator-total"]').exists()
    ).toBe(true);
  });
});
