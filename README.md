# Testcorps excersizes

## Excersize 9: end-to-end test

Context of assertion:
We will verify whether our page has the desired title.
However, unlike the previous excersizes, we will not do so
by relying on a simulated environment like Enzyme, but through
an end-to-end test run within a browser (courtesy of Cypress.io)

1. First we install Cypress
   `npm install -S cypress`
2. We open `[projectfolder]/cypress/integration/examples/testcalculator.spec.js` in our editor.
3. Substitute `expect(true).to.equal(true);` for `cy.visit('http://localhost:3000');` and the test title from `Does not do much` to `Asserts whether title of page is Tax Calculator`

This will start our end-to-end test by going to the specified url.

Note: this url should normally be your production url;
however, this is of course for demonstration purposes

4. Now we will select our page title by adding the following lines
   underneath 'cy.visit...':

`cy.get('[data-testhook-id="tax-calculator-title"]');`

5. Now we can extend our selector with an assertion, i.e.
   whether the title contains a certain text. This can be done
   by changing:

`cy.get('[data-testhook-id="tax-calculator-title"]');`

for:

`cy.get('[data-testhook-id="tax-calculator-title"]').contains('Tax Calculator');`

6. Now we launch cypress from our terminal/command prompt:

`node_modules/.bin/cypress open`

7. Now we press "run all specs" and wait for the magic to happen.
