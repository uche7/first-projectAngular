import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section className="listing">
      <img className="listing-photo" src="assets/images/listing-photo.jpg" />
      <h2 className="listing-heading" id="listing-name">Hello World</h2>
      <p className="listing-location">First Angular Project</p>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {}
