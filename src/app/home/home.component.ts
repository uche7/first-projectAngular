import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Fliter by city" />
        <button type="button" className="primary">Search</button>
      </form>
    </section>

    <section className="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
