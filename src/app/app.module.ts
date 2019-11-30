import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { mensagemService } from '../mensagemServise';

export const firebaseConfig = {
  apiKey: "AIzaSyAv8SOOM4_H1agDNcnKtI24IOimXQ7CLtE",
  authDomain: "prova-efa83.firebaseapp.com",
  databaseURL: "https://prova-efa83.firebaseio.com",
  projectId: "prova-efa83",
  storageBucket: "prova-efa83.appspot.com",
  messagingSenderId: "412970007939",
  appId: "1:412970007939:web:bd7e148e1fb9eeee784ab6"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    mensagemService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
