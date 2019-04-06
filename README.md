# Testcorps excersizes

## Excersize 3: shallow mount and verification

1. Create the file TaxCalculator.test.js in the 'src' folder

`Theory: all .test files are auto detected by our setup`

2. Let's first add our imports above in the file

```
import React from "react";
import { shallow } from "enzyme";

import TaxCalculator from "./TaxCalculator";
import Button from "./Button";
```

3. Let's add our first test description frame

```
describe("<TaxCalculator />", () => {
  it("renders calculate button", () => {

  });
});
```

4. Let's mount our TaxCalculator component first

Add the following line of code in between the last brackets
`const wrapper = shallow(<TaxCalculator />);`
Getting this result:

```console
describe("<TaxCalculator />", () => {
  it("renders calculate button", () => {
    const wrapper = shallow(<TaxCalculator />);
  });
});
```

5. Now let's verify whether the TaxCalculator component has a button
   in it wherewith calculations will happen

```
describe("<TaxCalculator />", () => {
  it("renders calculate button", () => {
    const wrapper = shallow(<TaxCalculator />);
    expect(wrapper.find(Button).exists()).toBe(true);
  });
});
```

6. Let's run our test

```
npm test
```
