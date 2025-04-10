import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowsRotate,
  faCommentDots,
  faComments,
  faEarthAmericas,
  faEnvelope,
  faFaceSmile,
  faGlobe,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FaqItemComponent } from './faq-item/faq-item.component';
import { ReviewItemComponent } from './review-item/review-item.component';
import { MobilePricingComponent } from './mobile-pricing/mobile-pricing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    FontAwesomeModule,
    FaqItemComponent,
    ReviewItemComponent,
    MobilePricingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  faComments = faComments;
  faGlobe = faGlobe;
  faUsers = faUsers;
  faCommentDots = faCommentDots;
  faEarthAmericas = faEarthAmericas;
  faArrowsRotate = faArrowsRotate;
  faFaceSmile = faFaceSmile;
  faStar = faStar;
  faEnvelope = faEnvelope;

  faqIsCollapsed = [false, true, true, true, true, true];
}
