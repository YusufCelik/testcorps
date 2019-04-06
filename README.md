# Testcorps excersizes

## Excersize 2: anatomy of a test: adding our first test

1. Create the file TaxCalculator.test.js in the 'src' folder

`Theory: all .test files are auto detected by our setup`

2. Add the following code

```
describe("<TaxCalculator />", () => {
  it("as of yet does nothing", () => {});
});
```

3. Run tests

```console
npm test
```

If everything went correctly, you should now see the "as of yet does nothing" being reported in our test report.
