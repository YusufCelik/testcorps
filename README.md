# Testcorps excersizes

## Excersize 7: snapshot testing

1. First we install our snapshotserializer
   `npm install --save-dev enzyme-to-json`
2. Let's alter our earlier test:

```
  it("renders calculate button", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(wrapper.find(Button).exists()).toBe(true);
  });
```

to the following:

```
  it("renders calculate button", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(wrapper).toMatchSnapshot();
  });
```

It will now argue that the snapshot has written: `1 snapshot written.`
If you want, you can inspect how the snapshot looks in the src/**snapshots** folder.

It should look something like this:

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<TaxCalculator /> renders calculate button 1`] = `
<section>
  <input
    data-testhook-id="tax-calculator-revenue-input"
    type="number"
  />
  <Button
    label="calculate"
    onClick={[Function]}
  />
  <p
    data-testhook-id="tax-calculator-total"
  >
    0
  </p>
</section>
`;
```

3. Let's now alter our component.
   Open file src/TaxCalculator.js.
   And change:
   `label="calculate"` at the Button component to `label="shmalculate"`

If your test window is still running it will crash; otherwise, if your
test window is not running execute the command `npm test` again in the
command prompt / terminal.

4. Update our snapshot according to new requirements.
   Press "u" on the keyboard in the test window, and it should
   now green light the tests again.

You can inspect how the snapshot has changed by going into the src/**snapshots** folder again.
