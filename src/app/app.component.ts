import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDjchBtWTPSiQPa5MiuADA8nhyAA87bOUA",
      authDomain: "appli-blog.firebaseapp.com",
      databaseURL: "https://appli-blog.firebaseio.com",
      projectId: "appli-blog",
      storageBucket: "appli-blog.appspot.com",
      messagingSenderId: "146966665065",
      appId: "1:146966665065:web:25ecbba9959b8dd6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
