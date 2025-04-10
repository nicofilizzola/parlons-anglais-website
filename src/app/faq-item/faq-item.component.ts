import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [FontAwesomeModule, NgbCollapse, CommonModule],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
})
export class FaqItemComponent {
  @Input() isCollapsed: boolean = true;
  @Input() hideBottomLine: boolean = false;
  @Input() question: string = 'Question';

  faCaretUp = faCaretUp;
}
