# Testcorps excersizes

## Excersize 4: selecting based on testhooks

Context of assertion: we are now going to select an element for assertion (exists) through a teshook id (e.g. data-testhook-id="tax-calculator-total"), rather than using its component selector (as was the case in the previous lesson with <Button>)

1. Open the file TaxCalculator.test.js in the 'src' folder
2. Let's extend our test by adding another test

```
it("renders tax total label", () => {
const wrapper = shallow(<TaxCalculator />);
});
```

3. Let's extend our test with a testhook id selector
   Place the following code under `"const wrapper ..."`

```
expect(
    wrapper.find('[data-testhook-id="tax-calculator-total"]').exists()
).toBe(true);
```

4. Let's run our test

```
npm test
```
