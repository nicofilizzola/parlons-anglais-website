import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-pricing',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './mobile-pricing.component.html',
  styleUrl: './mobile-pricing.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobilePricingComponent {
  faStar = faStar;
}
