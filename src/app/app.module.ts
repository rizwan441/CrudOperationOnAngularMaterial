import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../angular-module';
import {ReactiveFormsModule} from '@angular/forms'
import {ToastrModule} from 'ngx-toastr';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { EditUserDialogComponent } from './Components/edit-user-dialog/edit-user-dialog.component';
import { ViewUserDialogeComponent } from './Components/view-user-dialoge/view-user-dialoge.component';
import { DeleteConfirmationDialogeComponent } from './Components/delete-confirmation-dialoge/delete-confirmation-dialoge.component';
import { TreeDataComponent } from './Components/tree-data/tree-data.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    EditUserDialogComponent,
    ViewUserDialogeComponent,
    DeleteConfirmationDialogeComponent,
    TreeDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
