import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={


    apiKey: "AIzaSyCkjjDSBVYRM4i2ZiomEGrgtwX7kx7A844",
    authDomain: "mycoderevew.firebaseapp.com",
    databaseURL: "https://mycoderevew.firebaseio.com",
    projectId: "mycoderevew",
    storageBucket: "mycoderevew.appspot.com",
    messagingSenderId: "653205751616"
 
}; 

@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFireDatabaseModule 
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}