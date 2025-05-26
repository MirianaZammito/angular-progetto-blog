import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostUpsertModalComponent } from '../post-upsert-modal/post-upsert-modal.component';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-post-add-button',
  standalone: false,
  templateUrl: './post-add-button.component.html',
  styleUrls: ['./post-add-button.component.scss']
})
export class PostAddButtonComponent {
  // Evento emesso quando un nuovo post viene aggiunto
  @Output() postAdded = new EventEmitter<Post>();
  @Input() authorId!: string;

  constructor(private dialog: MatDialog) {}

  // Metodo per aprire il modal di aggiunta post
  openAddModal(): void {
    const dialogRef = this.dialog.open(PostUpsertModalComponent, {
      width: '600px',
      data: {
        id: crypto.randomUUID(),
        title: '',
        content: '',
        urlImage: '',
        authorId: this.authorId // Da valorizzare nel padre se serve
      }
    });

    // Gestisce la chiusura del dialog e l'emissione dell'evento postAdded
    dialogRef.afterClosed().subscribe((result: Post | null) => {
      if (result) {
        this.postAdded.emit(result);
      }
    });
  }
}