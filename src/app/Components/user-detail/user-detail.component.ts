import { Component,Inject, OnInit,Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user-list/user-list.component'; // Import the User interface


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userForm!: FormGroup;
  @Output() addUser = new EventEmitter<User>();
  // userData: User[] = [
  //   { name: 'John', age: 30 },
  //   { name: 'Alice', age: 25 }
  // ];


  constructor(
    public dialogRef: MatDialogRef<UserDetailComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataSource: User[]

  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [''],
      age: [''],
      phone: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    const newUser: User = {
      name: this.userForm.value.name,
      age: this.userForm.value.age,
      phone: this.userForm.value.phone,
      email: this.userForm.value.email
    };

    this.addUser.emit(newUser);
    console.log(newUser);


    // Close the dialog
    this.dialogRef.close();
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
