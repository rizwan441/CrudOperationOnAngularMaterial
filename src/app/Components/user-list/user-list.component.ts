import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from './../user-detail/user-detail.component';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { ViewUserDialogeComponent } from './../view-user-dialoge/view-user-dialoge.component';
import { DeleteConfirmationDialogeComponent } from '../delete-confirmation-dialoge/delete-confirmation-dialoge.component';


export interface User {
  name: string;
  age: number;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  displayedColumns: string[] = ['name', 'age', 'phone', 'email', 'actions'];
  dataSource: User[] = []; 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = [
      { name: 'John Doe', age: 30, phone: '1234567890', email: 'john@example.com' },
      { name: 'Jane Smith', age: 25, phone: '9876543210', email: 'jane@example.com' },
      { name: 'Jane Smith', age: 25, phone: '9876543210', email: 'jane@example.com' },
      { name: 'Jane Smith', age: 25, phone: '9876543210', email: 'jane@example.com' },

    ];
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '400px',
      data: this.dataSource
      
    });
  
    dialogRef.componentInstance.addUser.subscribe((newUser: User) => {
      console.log(newUser,"hello")
      this.dataSource.push(newUser);
      this.dataSource=[...this.dataSource]
      console.log(this.dataSource);
    });
  }

  openEditUserDialog(user: User): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(u => u === user);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.dataSource = [...this.dataSource];
        }
      }
    });
  }

  openViewUserDialog(user: User): void {
    this.dialog.open(ViewUserDialogeComponent, {
      width: '400px',
      data: user
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogeComponent, {
      width: '400px',
      data: user
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // If the user confirmed the deletion
        this.dataSource = this.dataSource.filter(u => u !== user);
      }
    });
  }
  
}
