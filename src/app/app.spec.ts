// Load the implementations that should be tested
import { App } from './app';
import { AppState } from './app.service';

describe(`App`, () => {
  let comp: App = new App();

  it(`should be readly initialized`, () => {
    expect(comp).toBeDefined();
  });

});
