import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user-list/user-list.component';


@Component({
  selector: 'app-view-user-dialoge',
  templateUrl: './view-user-dialoge.component.html',
  styleUrls: ['./view-user-dialoge.component.css']
})
export class ViewUserDialogeComponent implements OnInit {
  user!: User;

  constructor(
    public dialogRef: MatDialogRef<ViewUserDialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  ngOnInit(): void {
    this.user = this.data;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
