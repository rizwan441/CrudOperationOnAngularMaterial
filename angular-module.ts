import {NgModule} from '@angular/core'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';







import { MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';






@NgModule({
    exports:[
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatTableModule,
        MatSortModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatTreeModule




    ],


})

    export class MaterialModule{}