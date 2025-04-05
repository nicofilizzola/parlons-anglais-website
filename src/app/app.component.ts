import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowsRotate,
  faCommentDots,
  faComments,
  faEarthAmericas,
  faFaceSmile,
  faGlobe,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
}
