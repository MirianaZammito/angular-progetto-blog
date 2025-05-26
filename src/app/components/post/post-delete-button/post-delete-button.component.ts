import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-delete-button',
  standalone: false,
  templateUrl: './post-delete-button.component.html',
  styleUrls: ['./post-delete-button.component.scss']
})
export class PostDeleteButtonComponent {
  // Riceve l'id del post da eliminare dal componente padre
  @Input() postId!: string;
  // Emette un evento quando il post deve essere eliminato
  @Output() postDeleted = new EventEmitter<string>();

  // Metodo chiamato al click del bottone
  onDelete(): void {
    if (confirm('Sei sicuro di voler eliminare questo post?')) {
      this.postDeleted.emit(this.postId);
    }
  }
}