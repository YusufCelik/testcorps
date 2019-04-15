# Testcorps excersizes

## Excersize 6: state verification

Context of assertion: this an integration test, i.e. we wish to see whether state changes render the correct values in the right place.

1. Open the file TaxCalculator.test.js in the 'src' folder
2. Let's extend our tests after the following:

````
expect(
    wrapper.find('[data-testhook-id="tax-calculator-total"]').text()
).toEqual("20");```
````

by adding this line:

```
expect(wrapper.instance().state).toEqual({ total: "20" });

```

3. Let's set the state directly, and verify whether
   the total's label has changed. Add these lines:

```
wrapper.setState({ total: "40" });
expect(
    wrapper.find('[data-testhook-id="tax-calculator-total"]').text()
).toEqual("40");
```

4. Finally, we can run our tests again

```
npm test
```
