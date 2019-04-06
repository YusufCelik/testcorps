# Testcorps excersizes

## Excersize 5: synthetic events

1. Open the file TaxCalculator.test.js in the 'src' folder
2. Update the import to include also 'mount', e.g. `import { shallow, mount } from "enzyme"`
3. Let's extend our tests by adding another test

```
  it("changes tax total when user clicks calculate", () => {
  })
```

4. This time we will mount the component by adding these lines within the test

```
    const wrapper = mount(<TaxCalculator />);
```

4. Now we can give a custom input value (as if we typed them by keyboard)

```
    wrapper
      .find('[data-testhook-id="tax-calculator-revenue-input"]')
      .instance().value = "20";
```

5. Finally we can now simulate a keyboard change event

```
    wrapper
      .find('[data-testhook-id="tax-calculator-revenue-input"]')
      .simulate("change");
```

6. We will now find the button and simulate a click event

```
    wrapper.find(Button).simulate("click");
```

7. Now we have come to the moment to test whether the totals
   label has displayed the value that was put in

```
    expect(
      wrapper.find('[data-testhook-id="tax-calculator-total"]').text()
    ).toEqual("20");
```

8. Finally, we can run our tests again

```
    npm test
```
