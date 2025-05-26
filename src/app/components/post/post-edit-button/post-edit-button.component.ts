import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post/post.service';
import { PostUpsertModalComponent } from '../post-upsert-modal/post-upsert-modal.component';

@Component({
  selector: 'app-post-edit-button',
  templateUrl: './post-edit-button.component.html',
  standalone: false,
  styleUrls: ['./post-edit-button.component.scss']
})
export class PostEditButtonComponent {
  // Riceve il post da modificare dal componente padre
  @Input() post!: Post;
  // Emette l'evento quando il post è stato modificato e salvato
  @Output() postEdited = new EventEmitter<Post>();

  constructor(private dialog: MatDialog, private postService: PostService) {}

  // Apre la modale di modifica del post
  openEditModal(): void {
    const dialogRef = this.dialog.open(PostUpsertModalComponent, {
      width: '600px',
      data: this.post // Passa il post da modificare alla modale
    });

    // Dopo la chiusura della modale
    dialogRef.afterClosed().subscribe((result: Post | null) => {
      if (result) {
        // Se l'utente ha salvato le modifiche, aggiorna il post tramite il servizio
        this.postService.editPost(result, result.id).subscribe(updated => {
          // Emette l'evento verso il padre con il post aggiornato
          this.postEdited.emit(updated);
        });
      }
    });
  }
}