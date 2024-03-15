import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user-list/user-list.component';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent implements OnInit {
  editUserForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('EditUserDialogComponent initialized with data:', this.data);

    // Initialize form with user data
    this.editUserForm = this.formBuilder.group({
      name: [this.data?.name || ''],
      age: [this.data?.age || ''],
      phone: [this.data?.phone || ''],
      email: [this.data?.email || '']
    });
  }

  onSubmit(): void {
    if (this.editUserForm.valid) {
      console.log('Form submitted with values:', this.editUserForm.value);

      const editedUser: User = {
        name: this.editUserForm.value.name,
        age: this.editUserForm.value.age,
        phone: this.editUserForm.value.phone,
        email: this.editUserForm.value.email
      };

      // Close dialog and pass edited user data
      this.dialogRef.close(editedUser);
    } else {
      console.error('Form is invalid. Cannot submit.');
    }
  }

  onCancel(): void {
    console.log('Dialog cancelled.');
    this.dialogRef.close();
  }
}
