import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-post-edit-modal',
  standalone: false,
  templateUrl: './post-upsert-modal.component.html',
  styleUrls: ['./post-upsert-modal.component.scss']
})

export class PostUpsertModalComponent {
  // FormGroup per gestire il form di inserimento/modifica post
  postForm: FormGroup;
  isEditMode: boolean = false;

  // Inizializza il form e determina se siamo in modalità modifica o inserimento
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PostUpsertModalComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {
    // Se il post ha già un titolo, siamo in modalità modifica
    this.isEditMode = !!data.title;
    this.postForm = this.fb.group({
      title: [data.title, Validators.required],
      content: [data.content, Validators.required],
      urlImage: [data.urlImage]
    });
  }

  // Metodo per salvare il post, chiude il dialog con i dati aggiornati
  onSave(): void {
    if (this.postForm.valid) {
      const updatedPost: Post = {
        ...this.data,
        ...this.postForm.value
      };
      this.dialogRef.close(updatedPost);
    }
  }

  // Metodo per annullare l'operazione, chiude il dialog senza dati
  onCancel(): void {
    this.dialogRef.close(null);
  }
}