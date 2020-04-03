import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { UserComponent } from './user.component';
import { routing } from './app.routing';

import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent                
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    routing,
    ReactiveFormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
