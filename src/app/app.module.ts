import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { routing } from './app.routing';

import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

var config = {
  apiKey: "AIzaSyBFn-c8pyMoTxeEOKlIZpFbeaTlHW4raAY",
  authDomain: "firestore-50589.firebaseapp.com",
  databaseURL: "https://firestore-50589.firebaseio.com",
  projectId: "firestore-50589",
  storageBucket: "firestore-50589.appspot.com",
  messagingSenderId: "31750657780"
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,        
    UserFormComponent        
  ],
  imports: [  
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    ReactiveFormsModule,     
    routing    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
