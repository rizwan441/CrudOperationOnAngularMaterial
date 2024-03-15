import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user-list/user-list.component';
@Component({
  selector: 'app-delete-confirmation-dialoge',
  templateUrl: './delete-confirmation-dialoge.component.html',
  styleUrls: ['./delete-confirmation-dialoge.component.css']
})
export class DeleteConfirmationDialogeComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  onCancel(): void {
    this.dialogRef.close(false); // Close the dialog with false to indicate cancellation
  }

  onDelete(): void {
    this.dialogRef.close(true); // Close the dialog with true to indicate deletion
  }

}
