import { Component, NgZone } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-akita-secureLogin';

  constructor(private ngZone: NgZone) {
    akitaDevtools(this.ngZone);
  }
}
