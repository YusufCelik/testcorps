# Testcorps excersizes

## Excersize 8: making our snapshots more deterministic

If we run the tests again, we will see it failing.
This is, because our tax component has a current date display;
which, as you might have guessed changes on every render.
As such, we need to mock the Date.now() function in order
to ensure our tests always render the same date.

1. First we open TaxCalculator.test.js again.
2. We add this line `Date.now = jest.fn(() => 1482363367071);`
   above our first `const wrapper = shallow(<TaxCalculator />);` (in the first test)
3. Now the text will still fail, but we can update the snapshot with "u"
4. If we rerun the test now with "a" (or by closing the test window and restarting npm test), we will see that our tests will recurrently work; despite our component having a present date display.
