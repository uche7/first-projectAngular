import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  standalone: true,
  template: `<main>
    <p>This is the main content of the app.</p>
    <section>
      <app-home></app-home>
    </section>
  </main>`,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Homes';
}
