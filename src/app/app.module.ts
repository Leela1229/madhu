import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


// Import of the angular-material angular module
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { 
  MatTableModule, 
   MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatToolbarModule} from '@angular/material';

import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    // Import of the angular-material angular module
    AngularMaterialModule
  ],
  declarations: [
    AppComponent,
    DialogBoxComponent
  ],
    entryComponents: [
    DialogBoxComponent
  ],
  bootstrap: [
    AppComponent
  ],
   exports:[ MatTableModule ]
})
export class AppModule {}
