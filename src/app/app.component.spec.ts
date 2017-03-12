// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe(`App`, () => {
  let comp: AppComponent;

  it(`should be readly initialized`, () => {
    expect(comp).toBeDefined();
  });

});
