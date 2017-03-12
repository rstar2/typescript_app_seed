import { AppState } from '../app.service';

export class HomeComponent {
  public localState = { value: '' };
  
  constructor(
    public appState: AppState,
  ) {}

}
