import React from "react";
import { shallow, mount } from "enzyme";

import TaxCalculator from "./TaxCalculator";
import Button from "./Button";

describe("<TaxCalculator />", () => {
  it("renders calculate button", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders tax total label", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(
      wrapper.find('[data-testhook-id="tax-calculator-total"]').exists()
    ).toBe(true);
  });

  it("changes tax total when user clicks calculate", () => {
    const wrapper = mount(<TaxCalculator />);
    wrapper
      .find('[data-testhook-id="tax-calculator-revenue-input"]')
      .instance().value = "20";

    wrapper
      .find('[data-testhook-id="tax-calculator-revenue-input"]')
      .simulate("change");

    wrapper.find(Button).simulate("click");
    expect(
      wrapper.find('[data-testhook-id="tax-calculator-total"]').text()
    ).toEqual("20");

    expect(wrapper.instance().state).toEqual({ total: "20" });
    wrapper.setState({ total: "40" });

    expect(
      wrapper.find('[data-testhook-id="tax-calculator-total"]').text()
    ).toEqual("40");
  });
});
