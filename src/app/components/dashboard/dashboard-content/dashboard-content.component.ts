import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-dashboard-content',
  standalone: false,
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {
    // Input property per ricevere i post da visualizzare dal componente padre
    @Input() posts: Post[] = [];
}
