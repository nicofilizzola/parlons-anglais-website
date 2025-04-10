import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.scss',
})
export class ReviewItemComponent {
  faStar = faStar;

  @Input() author: string = 'Author';
  @Input() imgSrc: string = '../assets/img/dummy-profile.jpg';
}
